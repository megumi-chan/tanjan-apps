/* ============================================================
   単ジャン 情報Ⅰ エンジン
   - 分野別演習・弱点特訓(単ジャン方式)・本番形式模試(100点満点)
   - プログラム(共通テスト用プログラム表記)・図表の表示に対応
   - 学習者プロフィール別に記録を保存(localStorage)
   ============================================================ */

(function () {
  "use strict";

  var CFG = window.APP_CONFIG;
  var UNITS = window.UNITS;
  var YEARS = window.YEARS;
  var BANK = window.JOHO_BANK || [];

  document.title = CFG.title;
  document.getElementById("appTitle").textContent = CFG.title;
  document.getElementById("appSubtitle").textContent = CFG.subtitle;
  document.documentElement.style.setProperty("--accent", CFG.accent);

  // ---------- 状態(学習者別) ----------
  var state = load();

  function defaultState() {
    return { profiles: {}, current: null };
  }
  function load() {
    try {
      var raw = localStorage.getItem(CFG.storageKey);
      if (raw) {
        var s = JSON.parse(raw);
        if (s && s.profiles) return s;
      }
    } catch (e) { /* 破損時は初期化 */ }
    return defaultState();
  }
  function save() {
    localStorage.setItem(CFG.storageKey, JSON.stringify(state));
  }
  function prof() {
    return state.current ? state.profiles[state.current] : null;
  }
  function newProfile() {
    return { records: [], mocks: [] };
  }

  // ---------- 分析 ----------
  function unitRecords(unitId) {
    return prof().records.filter(function (r) { return r.unit === unitId; });
  }
  function proficiency(unitId) {
    var recs = unitRecords(unitId);
    if (!recs.length) return null;
    var num = 0, den = 0;
    recs.slice().sort(function (a, b) { return b.t - a.t; }).forEach(function (r, i) {
      var w = Math.pow(0.9, i);
      num += r.r * w;
      den += w;
    });
    return den ? num / den : null;
  }
  // 弱い分野から順に並べる
  function unitsByWeakness() {
    return UNITS.slice().sort(function (a, b) {
      var pa = proficiency(a.id), pb = proficiency(b.id);
      pa = pa === null ? 0.35 : pa;
      pb = pb === null ? 0.35 : pb;
      return pa - pb;
    });
  }
  function questionsFor(unitId) {
    return BANK.filter(function (q) { return q.unit === unitId; });
  }

  // 出題順: 未出題 → 前回不正解 → 久しく解いていない順
  function sortForServing(pool) {
    var lastR = {}, lastT = {};
    prof().records.forEach(function (r) {
      if (r.qid) { lastR[r.qid] = r.r; lastT[r.qid] = r.t; }
    });
    function rank(q) {
      if (lastT[q.id] === undefined) return 0;
      if (lastR[q.id] < 1) return 1;
      return 2;
    }
    return pool.slice().sort(function (a, b) {
      var ra = rank(a), rb = rank(b);
      if (ra !== rb) return ra - rb;
      return (lastT[a.id] || 0) - (lastT[b.id] || 0);
    });
  }

  // 選択肢をシャッフル(正解番号が偏らないように)。fix:true の問題は順序固定。
  function shuffledQ(q) {
    if (q.fix) return q;
    var order = q.choices.map(function (_, i) { return i; });
    for (var i = order.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = order[i]; order[i] = order[j]; order[j] = tmp;
    }
    var nq = {};
    for (var k in q) nq[k] = q[k];
    nq.choices = order.map(function (i2) { return q.choices[i2]; });
    nq.answer = order.indexOf(q.answer);
    return nq;
  }

  // ---------- 画面共通 ----------
  var main = document.getElementById("main");
  var currentTab = "home";
  var session = null;

  document.querySelectorAll(".tab").forEach(function (btn) {
    btn.addEventListener("click", function () { switchTab(btn.dataset.tab); });
  });
  function switchTab(tab) {
    if (session && tab !== currentTab) {
      if (!confirm("演習を中断しますか?(解答済みの分は記録されています)")) return;
      session = null;
    }
    currentTab = tab;
    document.querySelectorAll(".tab").forEach(function (b) {
      b.classList.toggle("active", b.dataset.tab === tab);
    });
    render();
    window.scrollTo(0, 0);
  }
  function el(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return d.firstElementChild;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function pct(p) { return p === null ? "—" : Math.round(p * 100) + "%"; }
  function lvClass(p) {
    if (p === null) return "";
    if (p < 0.5) return "lv-low";
    if (p < 0.75) return "lv-mid";
    return "lv-high";
  }

  // リード文・コード・表をカードに追加(演習/模試共通)
  function appendMaterials(card, src) {
    if (src.passage) card.appendChild(el('<div class="q-passage">' + esc(src.passage) + "</div>"));
    if (src.code) card.appendChild(el('<pre class="codebox">' + esc(src.code) + "</pre>"));
    if (src.table) {
      var t = '<table class="qtable">';
      src.table.forEach(function (row, i) {
        t += "<tr>" + row.map(function (c) { return (i === 0 ? "<th>" : "<td>") + esc(c) + (i === 0 ? "</th>" : "</td>"); }).join("") + "</tr>";
      });
      t += "</table>";
      card.appendChild(el(t));
    }
  }

  function render() {
    main.innerHTML = "";
    if (!state.current) { renderProfileGate(); return; }
    if (session && session.mode === "mock") { renderMock(); return; }
    if (session) { renderQuestionOrResult(); return; }
    if (currentTab === "home") renderHome();
    else if (currentTab === "years") renderYears();
    else if (currentTab === "units") renderUnits();
    else if (currentTab === "analysis") renderAnalysis();
    else if (currentTab === "settings") renderSettings();
  }

  // ---------- 学習者プロフィール ----------
  function renderProfileGate() {
    var card = el('<div class="card"><h2>👤 学習者を選んでください</h2><div class="muted small">名前ごとに学習記録・弱点分析が分かれて保存されます。</div></div>');
    var names = Object.keys(state.profiles);
    names.forEach(function (name) {
      var row = el('<div class="prio-item"><div class="prio-main"><div class="prio-unit">' + esc(name) + '</div><div class="prio-meta">記録 ' + state.profiles[name].records.length + "件</div></div>" +
        '<button class="prio-go">はじめる</button></div>');
      row.querySelector(".prio-go").addEventListener("click", function () {
        state.current = name;
        save();
        render();
      });
      card.appendChild(row);
    });
    main.appendChild(card);

    var add = el('<div class="card"><h2>➕ 新しい学習者を追加</h2></div>');
    var input = el('<input type="text" placeholder="例: たろう" maxlength="20">');
    var btn = el('<button class="btn block mt12">この名前で始める</button>');
    btn.addEventListener("click", function () {
      var name = input.value.trim();
      if (!name) { alert("名前を入力してください"); return; }
      if (state.profiles[name]) { alert("同じ名前がすでにあります"); return; }
      state.profiles[name] = newProfile();
      state.current = name;
      save();
      render();
    });
    add.appendChild(el('<label class="f-label">名前(ニックネームでOK)</label>'));
    add.appendChild(input);
    add.appendChild(btn);
    main.appendChild(add);
  }

  // ---------- ホーム ----------
  function renderHome() {
    var p = prof();
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var todayN = p.records.filter(function (r) { return r.t >= today.getTime(); }).length;

    main.appendChild(el(
      '<div class="card"><div style="display:flex;justify-content:space-between;align-items:center">' +
      '<div><span class="profile-big">👤 ' + esc(state.current) + '</span><div class="muted small">今日の演習: ' + todayN + "問 / 累計: " + p.records.length + "問</div></div>" +
      '<span class="badge">情報Ⅰ</span></div></div>'
    ));

    var drill = el('<button class="btn block">🔥 弱点特訓を始める(おすすめ・10問)</button>');
    drill.addEventListener("click", startDrill);
    main.appendChild(drill);
    main.appendChild(el('<p class="muted small center mt8">あなたの苦手な分野を自動判定し、似た問題を連続で出題します。<br>2問連続で正解すると次に弱い分野へ進みます。</p>'));

    var card = el('<div class="card mt12"><h2>📈 分野ごとの定着度</h2></div>');
    unitsByWeakness().forEach(function (u) {
      var pr = proficiency(u.id);
      var w = pr === null ? 0 : Math.round(pr * 100);
      var row = el(
        '<div class="unit-row">' +
        '<div class="u-name">' + esc(u.name) + "</div>" +
        '<div class="bar-wrap"><div class="bar ' + lvClass(pr) + '" style="width:' + w + '%"></div></div>' +
        '<div class="u-pct">' + pct(pr) + "</div></div>"
      );
      card.appendChild(row);
    });
    main.appendChild(card);
  }

  // ---------- 本番形式模試の一覧 ----------
  function mockBest(y) {
    var ms = (prof().mocks || []).filter(function (m) { return m.year === y; });
    if (!ms.length) return null;
    return Math.max.apply(null, ms.map(function (m) { return m.score; }));
  }
  function renderYears() {
    var card = el('<div class="card"><h2>📝 本番形式模試(100点満点)</h2><div class="muted small">共通テスト「情報Ⅰ」と同じ大問構成(第1問:小問集合/第2問:身近な題材とシミュレーション/第3問:プログラミング/第4問:データの活用)・100点満点の模試です。本番は60分。時間を計って挑戦するのがおすすめです。※実際の過去問は著作権のため収録できず、形式・難易度を再現したオリジナル問題です。</div></div>');
    var grid = el('<div class="year-grid mt12"></div>');
    YEARS.slice().reverse().forEach(function (yy) {
      if (!(window.MOCK_TESTS || {})[yy.y]) return;
      var best = mockBest(yy.y);
      var b = el('<button class="year-card"><div class="y">' + esc(yy.label) + '</div><div class="y-style">' + esc(yy.style) + '・28問・100点</div><div class="y-best">' + (best === null ? '<span class="muted">未挑戦</span>' : "最高 <b>" + best + "点</b>") + "</div></button>");
      b.addEventListener("click", function () {
        if (confirm(yy.label + "(" + yy.style + ")を始めます。\n・28問/100点満点(本番は60分)\n・大問ごとにまとめて解答→採点します\n・メモ用紙と時計を用意して始めるのがおすすめです")) startMock(yy.y);
      });
      grid.appendChild(b);
    });
    card.appendChild(grid);
    main.appendChild(card);
  }

  // ---------- 本番形式模試(28問・100点) ----------
  function mockBlocks(year) {
    var mt = (window.MOCK_TESTS || {})[year];
    if (!mt) return null;
    var blocks = [];
    var no = 1;
    mt.sections.forEach(function (sec) {
      sec.blocks.forEach(function (b, bi) {
        var blk = {
          sec: sec.name,
          intro: bi === 0 ? (sec.intro || "") : (b.intro || ""),
          unit: b.unit || sec.unit,
          passage: b.passage || null,
          code: b.code || null,
          table: b.table || null,
          graded: false,
          sel: [],
        };
        blk.questions = b.questions.map(function (q) {
          return shuffledQ({ id: q.id, q: q.q, choices: q.choices, answer: q.answer, key: q.key, expl: q.expl, points: q.points || sec.points, fix: q.fix });
        });
        blk.startNo = no;
        no += blk.questions.length;
        blocks.push(blk);
      });
    });
    return { blocks: blocks, totalQ: no - 1 };
  }

  function startMock(year) {
    var mb = mockBlocks(year);
    if (!mb) return;
    session = { mode: "mock", year: year, blocks: mb.blocks, totalQ: mb.totalQ, bIdx: 0, score: 0, secScores: {}, startT: Date.now() };
    render();
    window.scrollTo(0, 0);
  }

  function yearLabel(y) {
    var yy = YEARS.filter(function (x) { return x.y === y; })[0];
    return yy ? yy.label : String(y);
  }

  function renderMock() {
    if (session.bIdx >= session.blocks.length) { renderMockResult(); return; }
    var blk = session.blocks[session.bIdx];
    var endNo = blk.startNo + blk.questions.length - 1;
    var mins = Math.floor((Date.now() - session.startT) / 60000);
    var card = el('<div class="card"></div>');
    card.appendChild(el('<div class="q-progress"><span class="mock-timer">⏱ ' + mins + "分経過(本番60分)</span>" + esc(yearLabel(session.year)) + " 模試 【" + esc(blk.sec) + " 問" + blk.startNo + (endNo > blk.startNo ? "〜" + endNo : "") + " / 全" + session.totalQ + "問】</div>"));
    if (blk.intro) card.appendChild(el('<div class="sec-intro">' + esc(blk.intro) + "</div>"));

    appendMaterials(card, blk);

    // 設問(ブロック内の全問を表示)
    blk.questions.forEach(function (q, qi) {
      var qBox = el('<div class="mock-q"></div>');
      qBox.appendChild(el('<div class="mock-qtext">問' + (blk.startNo + qi) + "(" + q.points + "点) " + esc(q.q) + "</div>"));
      q.choices.forEach(function (c, ci) {
        var btn = el('<button class="choice">' + "①②③④⑤⑥"[ci] + " " + esc(c) + "</button>");
        if (blk.graded) {
          btn.disabled = true;
          if (ci === q.answer) btn.classList.add("correct");
          if (blk.sel[qi] === ci && ci !== q.answer) btn.classList.add("wrong");
        } else {
          if (blk.sel[qi] === ci) btn.classList.add("sel");
          btn.addEventListener("click", function () {
            blk.sel[qi] = ci;
            qBox.querySelectorAll(".choice").forEach(function (b, bi2) {
              b.classList.toggle("sel", bi2 === ci);
            });
            updateGradeBtn();
          });
        }
        qBox.appendChild(btn);
      });
      if (blk.graded) {
        var correct = blk.sel[qi] === q.answer;
        qBox.appendChild(el(
          '<div class="expl"><span class="expl-label">' + (correct ? "○ 正解(+" + q.points + "点) " : "✕ 不正解 ") + "解説</span>\n" +
          "🔑 " + esc(q.key) + "\n\n" + esc(q.expl) + "</div>"
        ));
      }
      card.appendChild(qBox);
    });

    if (!blk.graded) {
      var gradeBtn = el('<button class="btn block mt12" disabled>採点する(全問選択後に押せます)</button>');
      gradeBtn.addEventListener("click", function () {
        blk.graded = true;
        blk.questions.forEach(function (q, qi) {
          var correct = blk.sel[qi] === q.answer;
          if (correct) session.score += q.points;
          if (!session.secScores[blk.sec]) session.secScores[blk.sec] = { got: 0, max: 0 };
          session.secScores[blk.sec].got += correct ? q.points : 0;
          session.secScores[blk.sec].max += q.points;
          prof().records.push({ t: Date.now(), qid: q.id, unit: blk.unit, year: session.year, r: correct ? 1 : 0, mode: "mock" });
        });
        save();
        render();
        window.scrollTo(0, 0);
      });
      card.appendChild(gradeBtn);
    } else {
      var next = el('<button class="btn block mt12">' + (session.bIdx + 1 >= session.blocks.length ? "結果を見る ▶" : "次へ ▶") + "</button>");
      next.addEventListener("click", function () {
        session.bIdx++;
        render();
        window.scrollTo(0, 0);
      });
      card.appendChild(next);
    }
    main.appendChild(card);

    function updateGradeBtn() {
      var gb = card.querySelector(".btn.block");
      if (!gb) return;
      var all = blk.questions.every(function (q, qi) { return blk.sel[qi] !== undefined; });
      gb.disabled = !all;
      if (all) gb.textContent = "採点する";
    }
  }

  function renderMockResult() {
    var score = session.score;
    var mins = Math.round((Date.now() - session.startT) / 60000);
    if (!session.saved) {
      session.saved = true;
      if (!prof().mocks) prof().mocks = [];
      prof().mocks.push({ t: Date.now(), year: session.year, score: score });
      save();
    }
    var msg = score >= 85 ? "本番でも上位レベル!この調子で他のセットも満点を狙おう。"
      : score >= 70 ? "安定して7割超え。落とした大問を分野別演習で潰せば80点台が見えます。"
        : score >= 50 ? "共通テストの平均点前後です。配点の大きい第3問(プログラミング)・第4問(データ)は、手を動かしてトレースする練習で確実に伸びます。"
          : "まずは第1問・第2問の知識分野を得点源に。分野別演習でゆっくり型を身につけてから再挑戦を。";
    var card = el(
      '<div class="card center"><h2>📋 ' + esc(yearLabel(session.year)) + " 本番形式模試の結果</h2>" +
      '<div class="result-big">' + score + " <span style='font-size:1rem'>/ 100点</span></div>" +
      '<div class="small">所要時間: 約' + mins + "分(本番は60分)</div>" +
      '<p class="small mt12">' + msg + "</p></div>"
    );
    var t = '<table class="qtable"><tr><th>大問</th><th>得点</th></tr>';
    Object.keys(session.secScores).forEach(function (sec) {
      var s = session.secScores[sec];
      t += "<tr><td>" + esc(sec) + "</td><td>" + s.got + " / " + s.max + "</td></tr>";
    });
    t += "</table>";
    card.appendChild(el(t));
    main.appendChild(card);

    var drill = el('<button class="btn block">🔥 弱点特訓で苦手分野を潰す</button>');
    drill.addEventListener("click", function () { session = null; startDrill(); });
    main.appendChild(drill);
    var home = el('<button class="btn ghost block mt8">ホームに戻る</button>');
    home.addEventListener("click", function () { session = null; switchTab("home"); });
    main.appendChild(home);
    session.bIdx = session.blocks.length;
  }

  // ---------- 分野別 ----------
  function renderUnits() {
    var card = el('<div class="card"><h2>💻 分野を選んで演習</h2><div class="muted small">情報Ⅰの学習分野に対応したトレーニングです(5問)。</div></div>');
    UNITS.forEach(function (u) {
      var pr = proficiency(u.id);
      var row = el(
        '<div class="prio-item">' +
        '<div class="prio-main"><div class="prio-unit">' + esc(u.name) + "</div>" +
        '<div class="prio-meta">定着度 ' + pct(pr) + " ・ 問題 " + questionsFor(u.id).length + "問</div></div>" +
        '<button class="prio-go">演習</button></div>'
      );
      row.querySelector(".prio-go").addEventListener("click", function () { startUnit(u.id); });
      card.appendChild(row);
    });
    main.appendChild(card);
  }

  // ---------- セッション開始 ----------
  function startUnit(unitId) {
    var pool = sortForServing(questionsFor(unitId)).slice(0, 5).map(shuffledQ);
    session = { mode: "unit", unit: unitId, queue: pool, idx: 0, results: [], answered: false };
    render();
    window.scrollTo(0, 0);
  }
  // 弱点特訓: 弱い分野の問題を連続出題。2連続正解で次の分野へ。
  function startDrill() {
    session = { mode: "drill", asked: [], results: [], streak: 0, unitIdx: 0, max: 10, current: null, answered: false };
    session.order = unitsByWeakness().map(function (u) { return u.id; });
    session.current = nextDrillQuestion();
    render();
    window.scrollTo(0, 0);
  }
  function nextDrillQuestion() {
    for (var k = 0; k < session.order.length; k++) {
      var ui = (session.unitIdx + k) % session.order.length;
      var pool = sortForServing(questionsFor(session.order[ui])).filter(function (q) {
        return session.asked.indexOf(q.id) < 0;
      });
      if (pool.length) {
        session.unitIdx = ui;
        return shuffledQ(pool[0]);
      }
    }
    return null;
  }

  function currentQuestion() {
    if (session.mode === "drill") return session.current;
    return session.queue[session.idx];
  }
  function sessionFinished() {
    if (session.mode === "drill") return session.results.length >= session.max || !session.current;
    return session.idx >= session.queue.length;
  }

  // ---------- 演習画面 ----------
  function renderQuestionOrResult() {
    if (sessionFinished()) { renderResult(); return; }
    var q = currentQuestion();
    var u = UNITS.filter(function (x) { return x.id === q.unit; })[0];

    var head = session.mode === "unit"
      ? esc(u.name) + "【" + (session.idx + 1) + " / " + session.queue.length + "問】"
      : "弱点特訓【" + (session.results.length + 1) + " / " + session.max + "問】 いまの分野: " + esc(u.name);

    var card = el('<div class="card"></div>');
    card.appendChild(el('<div class="q-progress">' + head + "</div>"));

    appendMaterials(card, q);

    card.appendChild(el('<div class="q-text">' + esc(q.q) + "</div>"));

    q.choices.forEach(function (c, i) {
      var btn = el('<button class="choice">' + "①②③④⑤⑥"[i] + " " + esc(c) + "</button>");
      btn.addEventListener("click", function () {
        if (session.answered) return;
        session.answered = true;
        var correct = (i === q.answer);
        var btns = card.querySelectorAll(".choice");
        btns[q.answer].classList.add("correct");
        if (!correct) btn.classList.add("wrong");
        btns.forEach(function (b) { b.disabled = true; });
        recordAnswer(q, correct ? 1 : 0);
        showFeedback(card, q, correct);
      });
      card.appendChild(btn);
    });

    main.appendChild(card);
  }

  // まるつけ後の解説
  function showFeedback(card, q, correct) {
    card.appendChild(el(
      '<div class="expl"><span class="expl-label">' + (correct ? "○ 正解! " : "✕ 不正解 ") + "解説</span>\n" +
      "🔑 " + esc(q.key) + "\n\n" + esc(q.expl) + "</div>"
    ));

    var next = el('<button class="btn block mt8">次へ ▶</button>');
    next.addEventListener("click", function () {
      advance(correct);
    });
    card.appendChild(next);
  }

  function recordAnswer(q, r) {
    prof().records.push({ t: Date.now(), qid: q.id, unit: q.unit, r: r, mode: session.mode });
    session.results.push(r);
    save();
  }

  function advance(correct) {
    session.answered = false;
    if (session.mode === "drill") {
      session.asked.push(session.current.id);
      if (correct) {
        session.streak++;
        if (session.streak >= 2) { // 2連続正解で次に弱い分野へ
          session.streak = 0;
          session.unitIdx = (session.unitIdx + 1) % session.order.length;
        }
      } else {
        session.streak = 0; // 間違えたら同じ分野を続ける
      }
      session.current = nextDrillQuestion();
    } else {
      session.idx++;
    }
    render();
    window.scrollTo(0, 0);
  }

  // ---------- 結果 ----------
  function renderResult() {
    var n = session.results.length;
    var sum = session.results.reduce(function (a, b) { return a + b; }, 0);
    var rate = n ? Math.round(sum / n * 100) : 0;
    var title = session.mode === "unit" ? "分野別演習の結果" : "弱点特訓の結果";
    var msg = rate >= 80 ? "すばらしい!次は本番形式模試で時間を計って力試しを。"
      : rate >= 50 ? "あと少し。間違えた問題は解説の🔑ポイントを声に出して読み直そう。"
        : "弱点が見つかったのは前進!解説を読んだら、同じ分野をもう一度演習して定着させよう。";
    var card = el(
      '<div class="card center"><h2>📋 ' + title + "</h2>" +
      '<div class="result-big">' + rate + "点</div>" +
      '<div class="small">' + sum + " / " + n + " 問正解</div>" +
      '<p class="small mt12">' + msg + "</p></div>"
    );
    main.appendChild(card);

    var again = el('<button class="btn block">🔥 弱点特訓を始める(苦手分野を連続出題)</button>');
    again.addEventListener("click", function () { session = null; startDrill(); });
    main.appendChild(again);
    var home = el('<button class="btn ghost block mt8">ホームに戻る</button>');
    home.addEventListener("click", function () { session = null; switchTab("home"); });
    main.appendChild(home);
  }

  // ---------- 分析 ----------
  function renderAnalysis() {
    var card = el('<div class="card"><h2>📊 分野別の定着度(' + esc(state.current) + ")</h2></div>");
    UNITS.forEach(function (u) {
      var pr = proficiency(u.id);
      var w = pr === null ? 0 : Math.round(pr * 100);
      var row = el(
        '<div class="unit-row">' +
        '<div class="u-name">' + esc(u.name) + "</div>" +
        '<div class="bar-wrap"><div class="bar ' + lvClass(pr) + '" style="width:' + w + '%"></div></div>' +
        '<div class="u-pct">' + pct(pr) + "</div></div>"
      );
      row.style.cursor = "pointer";
      row.addEventListener("click", function () {
        alert(u.name + "\n定着度: " + pct(pr) + "(記録 " + unitRecords(u.id).length + "件)\n\n【攻略のコツ】\n" + u.tips);
      });
      card.appendChild(row);
    });
    main.appendChild(card);

    // 模試の得点推移(本番100点満点の目安)
    var mocks = (prof().mocks || []).slice().sort(function (a, b) { return b.t - a.t; });
    var mc = el('<div class="card"><h2>🎯 本番形式模試の得点(100点満点)</h2><div class="muted small">本番でどのくらい取れるかの目安です。同じセットは繰り返すほど覚えてしまうので、初回の点数を目安にしてください。</div></div>');
    if (!mocks.length) {
      mc.appendChild(el('<p class="muted small mt8">まだ模試の記録がありません。「模試」タブから挑戦してみましょう。</p>'));
    } else {
      mocks.slice(0, 15).forEach(function (m) {
        var d = new Date(m.t);
        mc.appendChild(el('<div class="log-item"><span class="log-date">' + (d.getMonth() + 1) + "/" + d.getDate() + "</span> " + esc(yearLabel(m.year)) + " — <b>" + m.score + "点</b> / 100点</div>"));
      });
    }
    main.appendChild(mc);
  }

  // ---------- 設定 ----------
  function renderSettings() {
    // 学習者管理
    var pc = el('<div class="card"><h2>👤 学習者の切り替え・管理</h2></div>');
    Object.keys(state.profiles).forEach(function (name) {
      var item = el('<div class="profile-item"><span>' + esc(name) + (name === state.current ? ' <span class="badge">使用中</span>' : "") + '</span><span></span></div>');
      var btns = item.querySelector("span:last-child");
      if (name !== state.current) {
        var sw = el('<button class="btn ghost sm">切り替え</button>');
        sw.addEventListener("click", function () {
          state.current = name;
          save();
          switchTab("home");
        });
        btns.appendChild(sw);
      }
      var del = el('<button class="btn ghost sm" style="color:var(--ng);border-color:var(--ng);margin-left:6px">削除</button>');
      del.addEventListener("click", function () {
        if (!confirm("「" + name + "」の記録をすべて削除しますか?この操作は取り消せません。")) return;
        delete state.profiles[name];
        if (state.current === name) state.current = null;
        save();
        render();
      });
      btns.appendChild(del);
      pc.appendChild(item);
    });
    var logout = el('<button class="btn ghost block mt12">学習者選択画面に戻る</button>');
    logout.addEventListener("click", function () {
      state.current = null;
      save();
      render();
    });
    pc.appendChild(logout);
    main.appendChild(pc);

    // データ管理
    var dc = el('<div class="card"><h2>💾 データ管理</h2><div class="muted small">全学習者の記録をまとめて保存・復元します(機種変更時など)。</div></div>');
    var btnRow = el('<div class="btn-row"></div>');
    var exp = el('<button class="btn ghost sm">バックアップを保存</button>');
    exp.addEventListener("click", function () {
      var blob = new Blob([JSON.stringify(state, null, 1)], { type: "application/json" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = CFG.storageKey + "_backup.json";
      a.click();
    });
    var impBtn = el('<button class="btn ghost sm">バックアップを復元</button>');
    var file = el('<input type="file" accept=".json" style="display:none">');
    impBtn.addEventListener("click", function () { file.click(); });
    file.addEventListener("change", function () {
      var f = file.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var s = JSON.parse(reader.result);
          if (!s.profiles) throw new Error("形式が違います");
          state = s;
          save();
          alert("復元しました");
          render();
        } catch (e) { alert("読み込めませんでした: " + e.message); }
      };
      reader.readAsText(f);
    });
    btnRow.appendChild(exp);
    btnRow.appendChild(impBtn);
    dc.appendChild(btnRow);
    dc.appendChild(file);
    main.appendChild(dc);

    main.appendChild(el('<p class="muted small center mt12">収録問題は本番形式を再現したオリジナル問題です。実際の過去問演習は市販の過去問題集をご利用ください。</p>'));
  }

  // ---------- 起動 ----------
  render();
})();
