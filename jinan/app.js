/* ============================================================
   単元別演習アプリ エンジン
   - 演習結果から単元ごとの定着度を計算
   - 志望校の出題傾向(重要度)× 弱点 で優先順位を提示
   データはすべてこの端末の localStorage に保存されます。
   ============================================================ */

(function () {
  "use strict";

  var CFG = window.APP_CONFIG;
  var UNIVS = window.UNIVERSITIES;
  var SUBJECTS = window.SUBJECTS;
  var BANK = window.QUESTION_BANK || [];

  document.title = CFG.title;
  document.getElementById("appTitle").textContent = CFG.title;
  document.getElementById("appSubtitle").textContent = CFG.subtitle;
  document.documentElement.style.setProperty("--accent", CFG.accent);

  // ---------- 状態 ----------
  var state = load();

  function defaultState() {
    var univs = {};
    UNIVS.forEach(function (u) { univs[u.id] = true; });
    return {
      records: [],        // {t, sub, unit, r(0〜1), w(重み), src:"app"|"manual", qid?, memo?}
      custom: [],         // AI生成などで追加した問題
      settings: {
        univs: univs,
        elective: firstElective(),
        sessionSize: 5,
        apiKey: "",
      },
    };
  }
  function firstElective() {
    var g = SUBJECTS.filter(function (s) { return s.optGroup === "select"; });
    return g.length ? g[0].id : null;
  }
  function load() {
    try {
      var raw = localStorage.getItem(CFG.storageKey);
      if (raw) {
        var s = JSON.parse(raw);
        var d = defaultState();
        s.settings = Object.assign(d.settings, s.settings || {});
        s.records = s.records || [];
        s.custom = s.custom || [];
        return s;
      }
    } catch (e) { /* 破損時は初期化 */ }
    return defaultState();
  }
  function save() {
    localStorage.setItem(CFG.storageKey, JSON.stringify(state));
  }

  // ---------- データアクセス ----------
  function visibleSubjects() {
    return SUBJECTS.filter(function (s) {
      if (s.optGroup === "select") return s.id === state.settings.elective;
      return true;
    });
  }
  function allUnits() {
    var out = [];
    visibleSubjects().forEach(function (s) {
      s.units.forEach(function (u) { out.push({ sub: s, unit: u }); });
    });
    return out;
  }
  function findUnit(unitId) {
    for (var i = 0; i < SUBJECTS.length; i++) {
      for (var j = 0; j < SUBJECTS[i].units.length; j++) {
        if (SUBJECTS[i].units[j].id === unitId) return { sub: SUBJECTS[i], unit: SUBJECTS[i].units[j] };
      }
    }
    return null;
  }
  function questionsFor(unitId) {
    return BANK.concat(state.custom).filter(function (q) { return q.unit === unitId; });
  }
  function enabledUnivIds() {
    return UNIVS.filter(function (u) { return state.settings.univs[u.id]; }).map(function (u) { return u.id; });
  }

  // ---------- 分析エンジン ----------
  // 定着度: 直近の結果ほど重く評価(単ジャンの「習熟度」に相当)
  function proficiency(unitId) {
    var recs = state.records.filter(function (r) { return r.unit === unitId; });
    if (!recs.length) return null;
    var num = 0, den = 0;
    // 新しい記録から順に、重みを 1, 0.9, 0.81... と減衰
    var sorted = recs.slice().sort(function (a, b) { return b.t - a.t; });
    sorted.forEach(function (r, i) {
      var decay = Math.pow(0.9, i);
      var w = (r.w || 1) * decay;
      num += r.r * w;
      den += w;
    });
    return den ? num / den : null;
  }
  function attempts(unitId) {
    return state.records.filter(function (r) { return r.unit === unitId; }).length;
  }
  // 重要度: 受験予定校の中での最大値を重視しつつ平均も加味
  function importance(unit) {
    var ids = enabledUnivIds();
    if (!ids.length) ids = UNIVS.map(function (u) { return u.id; });
    var vals = ids.map(function (id) { return unit.imp[id] || 0; });
    var max = Math.max.apply(null, vals);
    var avg = vals.reduce(function (a, b) { return a + b; }, 0) / vals.length;
    return max * 0.6 + avg * 0.4; // 0〜5
  }
  // 優先度スコア = 重要度 ×(弱いほど大)+ 未演習ボーナス
  function priorityList() {
    var list = [];
    allUnits().forEach(function (x) {
      var imp = importance(x.unit);
      if (imp <= 0.01) return;
      var prof = proficiency(x.unit.id);
      var p = (prof === null) ? 0.35 : prof;
      var score = (imp / 5) * (1.15 - p);
      if (attempts(x.unit.id) === 0) score += 0.06;
      list.push({ sub: x.sub, unit: x.unit, imp: imp, prof: prof, score: score });
    });
    list.sort(function (a, b) { return b.score - a.score; });
    return list;
  }

  // ---------- 共通描画 ----------
  var main = document.getElementById("main");
  var currentTab = "home";
  var session = null; // 演習セッション

  document.querySelectorAll(".tab").forEach(function (btn) {
    btn.addEventListener("click", function () { switchTab(btn.dataset.tab); });
  });
  function switchTab(tab) {
    if (currentTab === "practice" && session && tab !== "practice") {
      if (!confirm("演習を中断しますか?(ここまでの解答は記録済みです)")) return;
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
  function fmtDate(t) {
    var d = new Date(t);
    return (d.getMonth() + 1) + "/" + d.getDate() + " " + d.getHours() + ":" + ("0" + d.getMinutes()).slice(-2);
  }

  function render() {
    main.innerHTML = "";
    if (currentTab === "home") renderHome();
    else if (currentTab === "practice") renderPractice();
    else if (currentTab === "log") renderLog();
    else if (currentTab === "analysis") renderAnalysis();
    else if (currentTab === "settings") renderSettings();
  }

  // ---------- ホーム ----------
  function renderHome() {
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var todayRecs = state.records.filter(function (r) { return r.t >= today.getTime(); });
    var todayQ = todayRecs.length;
    var streak = calcStreak();

    main.appendChild(el(
      '<div class="card"><div class="stat-grid">' +
      '<div class="stat-box"><div class="stat-num">' + todayQ + '</div><div class="stat-label">今日の演習数</div></div>' +
      '<div class="stat-box"><div class="stat-num">' + streak + '</div><div class="stat-label">連続学習日数</div></div>' +
      '<div class="stat-box"><div class="stat-num">' + state.records.length + '</div><div class="stat-label">累計記録数</div></div>' +
      '</div></div>'
    ));

    // 受験校
    var ids = enabledUnivIds();
    var tags = UNIVS.filter(function (u) { return ids.indexOf(u.id) >= 0; })
      .map(function (u) { return '<span class="uni-tag">' + esc(u.name) + "</span>"; }).join("");
    main.appendChild(el('<div class="card"><h2>🎯 受験予定校</h2><div>' + (tags || "未設定(設定タブで選択)") + "</div></div>"));

    // 優先単元 TOP6
    var card = el('<div class="card"><h2>🔥 いまやるべき単元(優先順)</h2><div class="muted small">受験校の出題傾向 × 現在の定着度から自動算出</div></div>');
    var list = priorityList().slice(0, 6);
    list.forEach(function (item, i) {
      var row = el(
        '<div class="prio-item">' +
        '<div class="prio-rank">' + (i + 1) + "</div>" +
        '<div class="prio-main"><div class="prio-unit">' + esc(item.unit.name) + "</div>" +
        '<div class="prio-meta">' + esc(item.sub.name) + " ・ 定着度 " + pct(item.prof) +
        (item.prof !== null && item.prof < 0.5 ? ' <span class="badge hot">弱点</span>' : "") +
        (item.prof === null ? ' <span class="badge">未演習</span>' : "") +
        "</div></div>" +
        '<button class="prio-go">演習</button></div>'
      );
      row.querySelector(".prio-go").addEventListener("click", function (e) {
        e.stopPropagation();
        startSession(item.unit.id);
      });
      card.appendChild(row);
    });
    main.appendChild(card);

    var goBtn = el('<button class="btn block">▶ おまかせ演習を始める(最優先単元)</button>');
    goBtn.addEventListener("click", function () {
      var top = priorityList()[0];
      if (top) startSession(top.unit.id);
    });
    main.appendChild(goBtn);
  }

  function calcStreak() {
    if (!state.records.length) return 0;
    var days = {};
    state.records.forEach(function (r) {
      var d = new Date(r.t); d.setHours(0, 0, 0, 0);
      days[d.getTime()] = true;
    });
    var streak = 0;
    var cur = new Date(); cur.setHours(0, 0, 0, 0);
    if (!days[cur.getTime()]) cur.setDate(cur.getDate() - 1); // 今日まだでも昨日から数える
    while (days[cur.getTime()]) {
      streak++;
      cur.setDate(cur.getDate() - 1);
    }
    return streak;
  }

  // ---------- 演習 ----------
  // 直近約10年の出題ジャンル(data.js の window.GENRES)を取得
  function findGenre(unitId, genreId) {
    if (!genreId) return null;
    var list = (window.GENRES || {})[unitId] || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === genreId) return list[i];
    }
    return null;
  }

  function startSession(unitId, genreId) {
    var x = findUnit(unitId);
    var pool = questionsFor(unitId);
    var genre = findGenre(unitId, genreId);
    if (genre) {
      pool = pool.filter(function (q) {
        return q.genre === genreId || (genre.qids || []).indexOf(q.id) >= 0;
      });
    }
    if (!pool.length) {
      // 問題バンクのない単元・ジャンル(リスニング等)
      session = { unit: unitId, genre: genreId, noBank: true };
      switchTab("practice");
      return;
    }
    // 出題順: 未出題 → 前回不正解 → 最後に解いてから時間が経った順
    var lastResult = {}, lastTime = {};
    state.records.forEach(function (r) {
      if (r.qid) { lastResult[r.qid] = r.r; lastTime[r.qid] = r.t; }
    });
    pool.sort(function (a, b) {
      var ra = rank(a), rb = rank(b);
      if (ra !== rb) return ra - rb;
      return (lastTime[a.id] || 0) - (lastTime[b.id] || 0);
    });
    function rank(q) {
      if (lastTime[q.id] === undefined) return 0;
      if (lastResult[q.id] < 1) return 1;
      return 2;
    }
    var n = Math.min(state.settings.sessionSize, pool.length);
    session = {
      unit: unitId,
      genre: genreId,
      queue: pool.slice(0, n),
      idx: 0,
      results: [],
      revealed: false,
      answered: false,
    };
    if (currentTab !== "practice") switchTab("practice"); else render();
  }

  function renderPractice() {
    if (!session) { renderPracticeMenu(); return; }
    if (session.noBank) { renderNoBank(); return; }
    if (session.idx >= session.queue.length) { renderSessionResult(); return; }
    renderQuestion();
  }

  function renderPracticeMenu() {
    var card = el('<div class="card"><h2>✏️ 単元を選んで演習</h2><div class="muted small">単元の下の小さなボタンは、直近約10年の入試で出題されたジャンルの目安です。タップするとそのジャンルに絞って演習できます。</div></div>');
    visibleSubjects().forEach(function (s) {
      card.appendChild(el('<h3>' + esc(s.name) + "</h3>"));
      s.units.forEach(function (u) {
        if (importance(u) <= 0.01) return;
        var prof = proficiency(u.id);
        var nQ = questionsFor(u.id).length;
        var row = el(
          '<div class="prio-item">' +
          '<div class="prio-main"><div class="prio-unit">' + esc(u.name) + "</div>" +
          '<div class="prio-meta">定着度 ' + pct(prof) + " ・ 問題 " + (nQ || "記録専用") + "</div></div>" +
          '<button class="prio-go">演習</button></div>'
        );
        row.querySelector(".prio-go").addEventListener("click", function () { startSession(u.id); });
        card.appendChild(row);
        var genres = (window.GENRES || {})[u.id] || [];
        if (genres.length) {
          var grow = el('<div class="genre-row"></div>');
          genres.forEach(function (g) {
            var chip = el('<button class="genre-chip">' + esc(g.name) +
              (g.freq ? ' <span class="g-freq">' + esc(g.freq) + "</span>" : "") + "</button>");
            chip.addEventListener("click", function () { startSession(u.id, g.id); });
            grow.appendChild(chip);
          });
          card.appendChild(grow);
        }
      });
    });
    main.appendChild(card);
  }

  function renderNoBank() {
    var x = findUnit(session.unit);
    var g = findGenre(session.unit, session.genre);
    var msg = g
      ? "このジャンルの内蔵問題はまだ用意されていません。AIで類題を生成する(設定でAPIキー登録時)か、手持ちの過去問・問題集で演習して結果を下から記録してください。"
      : "この単元は手持ちの教材(音声教材・過去問など)で演習し、結果を下から記録してください。記録は定着度の分析に反映されます。";
    var card = el(
      '<div class="card"><h2>' + esc(x.unit.name) + (g ? " / " + esc(g.name) : "") + "</h2>" +
      '<div class="tips-box">' + esc(x.unit.tips || "") + "</div>" +
      '<p class="small mt12">' + msg + "</p></div>"
    );
    if (g && state.settings.apiKey) {
      var ai = el('<button class="btn ghost sm">🤖 AIでこのジャンルの類題を1問生成</button>');
      ai.addEventListener("click", function () { generateAI(session.unit, session.genre, ai); });
      card.appendChild(ai);
    }
    main.appendChild(card);
    main.appendChild(buildQuickLogCard(x.sub.id, x.unit.id));
    var back = el('<button class="btn ghost block mt8">単元選択に戻る</button>');
    back.addEventListener("click", function () { session = null; render(); });
    main.appendChild(back);
  }

  function renderQuestion() {
    var q = session.queue[session.idx];
    var x = findUnit(session.unit);
    var g = findGenre(session.unit, session.genre);
    var card = el('<div class="card"></div>');
    card.appendChild(el('<div class="q-progress">' + esc(x.sub.name) + " / " + esc(x.unit.name) +
      (g ? " / " + esc(g.name) : "") +
      "  【" + (session.idx + 1) + " / " + session.queue.length + "問】</div>"));
    if (q.passage) card.appendChild(el('<div class="q-passage">' + esc(q.passage) + "</div>"));
    card.appendChild(el('<div class="q-text">' + esc(q.q) + "</div>"));

    if (q.type === "mcq") {
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
          card.appendChild(el('<div class="expl"><span class="expl-label">' + (correct ? "○ 正解! " : "✕ 不正解 ") + "解説</span>\n" + esc(q.expl || "") + "</div>"));
          var next = el('<button class="btn block mt12">次へ ▶</button>');
          next.addEventListener("click", nextQuestion);
          card.appendChild(next);
        });
        card.appendChild(btn);
      });
    } else {
      // 記述式: 解答を見て自己採点
      var reveal = el('<button class="btn ghost block">解答・解説を見る</button>');
      reveal.addEventListener("click", function () {
        reveal.remove();
        card.appendChild(el('<div class="expl"><span class="expl-label">模範解答・解説</span>\n' + esc(q.answer + (q.expl ? "\n\n" + q.expl : "")) + "</div>"));
        card.appendChild(el('<p class="small mt12 center">自己採点してください</p>'));
        var grade = el(
          '<div class="self-grade">' +
          '<button class="g-ok">○ できた</button>' +
          '<button class="g-mid">△ 半分</button>' +
          '<button class="g-ng">✕ できず</button></div>'
        );
        grade.querySelector(".g-ok").addEventListener("click", function () { recordAnswer(q, 1); nextQuestion(); });
        grade.querySelector(".g-mid").addEventListener("click", function () { recordAnswer(q, 0.5); nextQuestion(); });
        grade.querySelector(".g-ng").addEventListener("click", function () { recordAnswer(q, 0); nextQuestion(); });
        card.appendChild(grade);
      });
      card.appendChild(reveal);
    }
    main.appendChild(card);

    // AI類題生成(APIキー設定時のみ)
    if (state.settings.apiKey) {
      var ai = el('<button class="btn ghost sm">🤖 AIでこの' + (g ? "ジャンル" : "単元") + 'の類題を1問追加生成</button>');
      ai.addEventListener("click", function () { generateAI(session.unit, session.genre, ai); });
      main.appendChild(ai);
    }
  }

  function recordAnswer(q, r) {
    var x = findUnit(session.unit);
    state.records.push({ t: Date.now(), sub: x.sub.id, unit: session.unit, r: r, w: 1, src: "app", qid: q.id });
    session.results.push(r);
    save();
  }

  function nextQuestion() {
    session.idx++;
    session.answered = false;
    render();
    window.scrollTo(0, 0);
  }

  function renderSessionResult() {
    var x = findUnit(session.unit);
    var sum = session.results.reduce(function (a, b) { return a + b; }, 0);
    var n = session.results.length;
    var rate = n ? sum / n : 0;
    var msg = rate >= 0.8 ? "よくできています!この調子。" : rate >= 0.5 ? "あと一歩。間違えた問題の解説を読み直そう。" : "弱点発見!ここを潰せば点が伸びる。教科書・参考書で確認してから再挑戦を。";
    var card = el(
      '<div class="card center"><h2>📋 演習結果</h2>' +
      '<div class="result-big">' + Math.round(rate * 100) + "点</div>" +
      '<div class="small">' + esc(x.unit.name) + " ・ " + n + "問</div>" +
      '<p class="small mt12">' + msg + "</p>" +
      '<div class="tips-box" style="text-align:left">' + esc(x.unit.tips || "") + "</div></div>"
    );
    main.appendChild(card);
    var again = el('<button class="btn block">同じ' + (session.genre ? "ジャンル" : "単元") + 'をもう一度</button>');
    again.addEventListener("click", function () { startSession(session.unit, session.genre); });
    main.appendChild(again);
    var genres = (window.GENRES || {})[session.unit] || [];
    if (genres.length) {
      var gc = el('<div class="card mt8"><h2>📌 もっと演習したいジャンルを選ぶ(直近約10年の出題傾向)</h2></div>');
      var grow = el('<div class="genre-row" style="border-bottom:none"></div>');
      genres.forEach(function (g) {
        var chip = el('<button class="genre-chip">' + esc(g.name) +
          (g.freq ? ' <span class="g-freq">' + esc(g.freq) + "</span>" : "") + "</button>");
        chip.addEventListener("click", function () { startSession(session.unit, g.id); });
        grow.appendChild(chip);
      });
      gc.appendChild(grow);
      main.appendChild(gc);
    }
    var auto = el('<button class="btn ghost block mt8">おまかせで次の優先単元へ</button>');
    auto.addEventListener("click", function () {
      session = null;
      var top = priorityList()[0];
      if (top) startSession(top.unit.id);
    });
    main.appendChild(auto);
    var home = el('<button class="btn ghost block mt8">ホームに戻る</button>');
    home.addEventListener("click", function () { session = null; switchTab("home"); });
    main.appendChild(home);
    session.idx = session.queue.length; // 完了状態を維持
  }

  // ---------- 記録(手動ログ) ----------
  function buildQuickLogCard(subId, unitId) {
    var card = el('<div class="card"><h2>📓 演習結果を記録</h2><div class="muted small">過去問・問題集・音声教材など、アプリ外の演習をここに記録すると分析に反映されます。</div></div>');

    var subSel = el('<select></select>');
    visibleSubjects().forEach(function (s) {
      subSel.appendChild(el('<option value="' + s.id + '">' + esc(s.name) + "</option>"));
    });
    var unitSel = el('<select></select>');
    function fillUnits() {
      unitSel.innerHTML = "";
      var s = visibleSubjects().filter(function (s) { return s.id === subSel.value; })[0];
      (s ? s.units : []).forEach(function (u) {
        unitSel.appendChild(el('<option value="' + u.id + '">' + esc(u.name) + "</option>"));
      });
    }
    subSel.addEventListener("change", fillUnits);
    if (subId) subSel.value = subId;
    fillUnits();
    if (unitId) unitSel.value = unitId;

    var correct = el('<input type="number" min="0" placeholder="例: 7">');
    var total = el('<input type="number" min="1" placeholder="例: 10">');
    var memo = el('<input type="text" placeholder="例: 一橋2023 大問2 / 〇〇問題集 p.34">');

    card.appendChild(el('<label class="f-label">科目</label>')); card.appendChild(subSel);
    card.appendChild(el('<label class="f-label">単元</label>')); card.appendChild(unitSel);
    var row = el('<div style="display:flex;gap:8px"></div>');
    var c1 = el('<div style="flex:1"></div>'), c2 = el('<div style="flex:1"></div>');
    c1.appendChild(el('<label class="f-label">正解数</label>')); c1.appendChild(correct);
    c2.appendChild(el('<label class="f-label">問題数</label>')); c2.appendChild(total);
    row.appendChild(c1); row.appendChild(c2);
    card.appendChild(row);
    card.appendChild(el('<label class="f-label">メモ(教材名など・任意)</label>')); card.appendChild(memo);

    var btn = el('<button class="btn block mt12">記録する</button>');
    btn.addEventListener("click", function () {
      var c = parseFloat(correct.value), t = parseFloat(total.value);
      if (isNaN(c) || isNaN(t) || t <= 0 || c < 0 || c > t) { alert("正解数と問題数を正しく入力してください"); return; }
      state.records.push({
        t: Date.now(), sub: subSel.value, unit: unitSel.value,
        r: c / t, w: Math.min(t, 10), src: "manual", memo: memo.value || "",
      });
      save();
      alert("記録しました!分析に反映されます。");
      correct.value = ""; total.value = ""; memo.value = "";
      if (currentTab === "log") render();
    });
    card.appendChild(btn);
    return card;
  }

  function renderLog() {
    main.appendChild(buildQuickLogCard());

    var card = el('<div class="card"><h2>🕘 最近の記録</h2></div>');
    var recent = state.records.slice().sort(function (a, b) { return b.t - a.t; }).slice(0, 30);
    if (!recent.length) card.appendChild(el('<p class="muted small">まだ記録がありません。</p>'));
    recent.forEach(function (r) {
      var x = findUnit(r.unit);
      var name = x ? x.sub.name + " / " + x.unit.name : r.unit;
      var res = r.src === "app"
        ? (r.r === 1 ? "○" : r.r === 0 ? "✕" : "△")
        : Math.round(r.r * 100) + "%";
      card.appendChild(el(
        '<div class="log-item"><span class="log-date">' + fmtDate(r.t) + "</span> " +
        esc(name) + " — <b>" + res + "</b>" +
        (r.src === "manual" ? ' <span class="badge">手動</span>' : "") +
        (r.memo ? '<div class="muted">' + esc(r.memo) + "</div>" : "") +
        "</div>"
      ));
    });
    main.appendChild(card);
  }

  // ---------- 分析 ----------
  function renderAnalysis() {
    var idsOn = enabledUnivIds();
    visibleSubjects().forEach(function (s) {
      var card = el('<div class="card"><h2>📊 ' + esc(s.name) + "</h2></div>");
      var any = false;
      s.units.forEach(function (u) {
        if (importance(u) <= 0.01) return;
        any = true;
        var prof = proficiency(u.id);
        var w = prof === null ? 0 : Math.round(prof * 100);
        var row = el(
          '<div class="unit-row">' +
          '<div class="u-name">' + esc(u.name) + "</div>" +
          '<div class="bar-wrap"><div class="bar ' + lvClass(prof) + '" style="width:' + w + '%"></div></div>' +
          '<div class="u-pct">' + pct(prof) + "</div></div>"
        );
        row.style.cursor = "pointer";
        row.addEventListener("click", function () { showUnitDetail(u, s); });
        card.appendChild(row);
      });
      if (any) main.appendChild(card);
    });

    // 大学別メモ
    var uniCard = el('<div class="card"><h2>🏫 各校の傾向メモ</h2></div>');
    UNIVS.forEach(function (u) {
      if (idsOn.indexOf(u.id) < 0) return;
      uniCard.appendChild(el('<h3>' + esc(u.name) + '</h3><p class="small muted">' + esc(u.note) + "</p>"));
    });
    main.appendChild(uniCard);
  }

  function showUnitDetail(u, s) {
    var prof = proficiency(u.id);
    var n = attempts(u.id);
    alert(s.name + " / " + u.name + "\n定着度: " + pct(prof) + "(記録 " + n + "件)\n\n【傾向と対策】\n" + (u.tips || ""));
  }

  // ---------- 設定 ----------
  function renderSettings() {
    // 受験校
    var card = el('<div class="card"><h2>🏫 受験予定校</h2><div class="muted small">チェックした大学の出題傾向で優先順位を計算します。</div></div>');
    UNIVS.forEach(function (u) {
      var row = el('<label class="check-row"><input type="checkbox"' + (state.settings.univs[u.id] ? " checked" : "") + "> " + esc(u.name) + "</label>");
      row.querySelector("input").addEventListener("change", function (e) {
        state.settings.univs[u.id] = e.target.checked;
        save();
      });
      card.appendChild(row);
    });
    main.appendChild(card);

    // 選択科目
    var electives = SUBJECTS.filter(function (s) { return s.optGroup === "select"; });
    if (electives.length) {
      var ec = el('<div class="card"><h2>📚 選択科目(地歴)</h2></div>');
      var sel = el('<select></select>');
      electives.forEach(function (s) {
        sel.appendChild(el('<option value="' + s.id + '"' + (state.settings.elective === s.id ? " selected" : "") + ">" + esc(s.name) + "</option>"));
      });
      sel.addEventListener("change", function () {
        state.settings.elective = sel.value;
        save();
      });
      ec.appendChild(sel);
      main.appendChild(ec);
    }

    // 1回の問題数
    var sc = el('<div class="card"><h2>✏️ 1回の演習問題数</h2></div>');
    var ssel = el('<select></select>');
    [3, 5, 7, 10].forEach(function (n) {
      ssel.appendChild(el('<option value="' + n + '"' + (state.settings.sessionSize === n ? " selected" : "") + ">" + n + "問</option>"));
    });
    ssel.addEventListener("change", function () {
      state.settings.sessionSize = parseInt(ssel.value, 10);
      save();
    });
    sc.appendChild(ssel);
    main.appendChild(sc);

    // AI生成
    var ac = el('<div class="card"><h2>🤖 AI類題生成(任意)</h2><div class="muted small">Anthropic APIキーを設定すると、演習中に「AIで類題を追加生成」ボタンが使えます。キーはこの端末にのみ保存されます。空欄でもアプリは全機能使えます(内蔵問題で演習)。</div></div>');
    var key = el('<input type="password" placeholder="sk-ant-...">');
    key.value = state.settings.apiKey || "";
    key.addEventListener("change", function () {
      state.settings.apiKey = key.value.trim();
      save();
    });
    ac.appendChild(el('<label class="f-label">APIキー</label>'));
    ac.appendChild(key);
    if (state.custom.length) {
      ac.appendChild(el('<p class="small mt8">AI生成済みの問題: ' + state.custom.length + "問(問題バンクに追加済み)</p>"));
    }
    main.appendChild(ac);

    // データ管理
    var dc = el('<div class="card"><h2>💾 データ管理</h2><div class="muted small">記録はこの端末のブラウザ内にのみ保存されます。機種変更前はバックアップを保存してください。</div></div>');
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
          if (!s.records || !s.settings) throw new Error("形式が違います");
          state = s;
          save();
          alert("復元しました");
          render();
        } catch (e) { alert("読み込めませんでした: " + e.message); }
      };
      reader.readAsText(f);
    });
    var reset = el('<button class="btn ghost sm" style="color:var(--ng);border-color:var(--ng)">全データ削除</button>');
    reset.addEventListener("click", function () {
      if (confirm("本当にすべての記録を削除しますか?この操作は取り消せません。")) {
        state = defaultState();
        save();
        alert("初期化しました");
        render();
      }
    });
    btnRow.appendChild(exp); btnRow.appendChild(impBtn); btnRow.appendChild(reset);
    dc.appendChild(btnRow);
    dc.appendChild(file);
    main.appendChild(dc);

    main.appendChild(el('<p class="muted small center mt12">出題傾向データは作成時点の目安です。必ず最新の募集要項・赤本で確認してください。</p>'));
  }

  // ---------- AI類題生成 ----------
  function generateAI(unitId, genreId, btn) {
    var x = findUnit(unitId);
    var g = findGenre(unitId, genreId);
    btn.disabled = true;
    btn.textContent = "🤖 生成中…(10秒ほど)";
    var sys = "あなたは日本の大学受験の作問者です。指定された科目・単元の演習問題を1問だけ作り、次のJSON形式のみで出力してください(前後の文章は一切不要): " +
      '{"type":"mcq","q":"問題文","choices":["選択肢1","選択肢2","選択肢3","選択肢4"],"answer":0,"expl":"解説"} ' +
      "answerは正解選択肢の番号(0始まり)。記述式が適切な場合は " +
      '{"type":"free","q":"問題文","answer":"模範解答","expl":"解説"} ' +
      "の形式。難易度は" + window.UNIVERSITIES.map(function (u) { return u.name; }).join("・") + "の入試レベル。";
    var user = "科目: " + x.sub.name + "\n単元: " + x.unit.name +
      (g ? "\nジャンル: " + g.name + "(このジャンルに絞った問題にすること)" : "") +
      "\n傾向: " + (x.unit.tips || "") + "\n1問作成してください。";
    fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": state.settings.apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5",
        max_tokens: 1500,
        system: sys,
        messages: [{ role: "user", content: user }],
      }),
    }).then(function (res) {
      if (!res.ok) throw new Error("APIエラー (" + res.status + ")");
      return res.json();
    }).then(function (data) {
      var text = data.content[0].text;
      var m = text.match(/\{[\s\S]*\}/);
      if (!m) throw new Error("生成結果を読み取れませんでした");
      var q = JSON.parse(m[0]);
      q.id = "ai_" + Date.now();
      q.unit = unitId;
      if (genreId) q.genre = genreId;
      state.custom.push(q);
      save();
      if (session && session.queue && session.unit === unitId) {
        session.queue.push(q);
        alert("類題を1問追加しました!このセッションの最後に出題されます。");
      } else if (session && session.noBank && session.unit === unitId) {
        alert("類題を1問追加しました!そのまま演習を始めます。");
        startSession(unitId, genreId);
        return;
      } else {
        alert("類題を1問追加しました!");
      }
      btn.disabled = false;
      btn.textContent = "🤖 AIでこの単元の類題を1問追加生成";
    }).catch(function (e) {
      alert("生成に失敗しました: " + e.message + "\nAPIキーと通信環境を確認してください。");
      btn.disabled = false;
      btn.textContent = "🤖 AIでこの単元の類題を1問追加生成";
    });
  }

  // ---------- 起動 ----------
  render();
})();
