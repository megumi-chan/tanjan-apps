/* ============================================================
   単ジャン リスニング エンジン
   - 音声はブラウザ内蔵の音声合成(Web Speech API)で読み上げ
   - 倍速選択(0.9 / 1.0 / 1.2 / 1.5)
   - 学習者プロフィール別に記録を保存(localStorage)
   - 弱点形式を自動判定し、似た問題を連続出題(単ジャン方式)
   ============================================================ */

(function () {
  "use strict";

  var CFG = window.APP_CONFIG;
  var UNITS = window.UNITS;
  var YEARS = window.YEARS;
  var SPEEDS = window.SPEEDS;
  var BANK = window.LISTENING_BANK || [];

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
    return { records: [], rate: 1.0 };
  }

  // ---------- 音声合成(TTS) ----------
  var synth = window.speechSynthesis;
  var enVoice = null, jaVoice = null;
  var speaking = false;

  function pickVoices() {
    var vs = synth ? synth.getVoices() : [];
    if (!vs.length) return;
    function best(langPrefix, prefs) {
      var cands = vs.filter(function (v) { return v.lang && v.lang.indexOf(langPrefix) === 0; });
      for (var i = 0; i < prefs.length; i++) {
        for (var j = 0; j < cands.length; j++) {
          if (cands[j].name.indexOf(prefs[i]) >= 0) return cands[j];
        }
      }
      return cands[0] || null;
    }
    enVoice = best("en-US", ["Google", "Microsoft Ava", "Microsoft Aria", "Samantha", "Microsoft Zira"]) || best("en", []);
    jaVoice = best("ja", ["Google", "Microsoft Nanami", "Kyoko"]);
  }
  if (synth) {
    pickVoices();
    if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = pickVoices;
  }

  // parts: [{lang:"en"|"ja", text, pitch, rate}] を順番に読み上げ
  function speak(parts, onEnd) {
    if (!synth) { alert("この端末のブラウザは音声合成に対応していません。"); return; }
    stopSpeech();
    pickVoices();
    speaking = true;
    updatePlayingUI(true);
    var i = 0;
    function next() {
      if (!speaking || i >= parts.length) {
        speaking = false;
        updatePlayingUI(false);
        if (onEnd) onEnd();
        return;
      }
      var p = parts[i++];
      var u = new SpeechSynthesisUtterance(p.text);
      u.lang = p.lang === "ja" ? "ja-JP" : "en-US";
      var v = p.lang === "ja" ? jaVoice : enVoice;
      if (v) u.voice = v;
      u.rate = p.rate || 1.0;
      u.pitch = p.pitch || 1.0;
      u.onend = function () { setTimeout(next, 250); };
      u.onerror = function () { setTimeout(next, 100); };
      synth.speak(u);
    }
    next();
  }
  function stopSpeech() {
    speaking = false;
    if (synth) synth.cancel();
    if (audioEl) { audioSeq = null; audioEl.pause(); }
    updatePlayingUI(false);
  }

  // ---------- ネイティブ音声ファイル再生(MP3・倍速対応) ----------
  // 事前生成したニューラル音声を再生。ファイルがない場合はTTSに自動フォールバック。
  var audioEl = null;
  var audioSeq = null;

  function isPlaying() {
    return speaking || audioSeq !== null;
  }
  function ensureAudioEl() {
    if (audioEl) return;
    audioEl = new Audio();
    audioEl.addEventListener("ended", function () {
      if (!audioSeq) return;
      audioSeq.idx++;
      setTimeout(playNextFile, 350);
    });
    audioEl.addEventListener("error", function () {
      var seq = audioSeq;
      audioSeq = null;
      updatePlayingUI(false);
      if (seq && seq.fallback) seq.fallback();
    });
  }
  function playFiles(files, onEnd, fallback) {
    ensureAudioEl();
    stopSpeech();
    audioSeq = { files: files, idx: 0, onEnd: onEnd, fallback: fallback };
    updatePlayingUI(true);
    playNextFile();
  }
  function playNextFile() {
    if (!audioSeq) return;
    if (audioSeq.idx >= audioSeq.files.length) {
      var cb = audioSeq.onEnd;
      audioSeq = null;
      updatePlayingUI(false);
      if (cb) cb();
      return;
    }
    var f = audioSeq.files[audioSeq.idx];
    audioEl.src = f.src;
    audioEl.playbackRate = f.rate || 1.0;
    audioEl.onloadedmetadata = function () { audioEl.playbackRate = f.rate || 1.0; };
    audioEl.play().catch(function () {
      var seq = audioSeq;
      audioSeq = null;
      updatePlayingUI(false);
      if (seq && seq.fallback) seq.fallback();
    });
  }
  function playScriptAudio(qid, script, rate, q) {
    var files = script.map(function (_, i) {
      return { src: "audio/" + qid + "_s" + i + ".mp3", rate: rate };
    });
    playFiles(files, null, function () { speak(scriptParts(q, rate)); });
  }
  function playExplAudio(q, correct, onEnd) {
    var files = [
      { src: "audio/" + q.id + "_key.mp3", rate: 0.85 },
      { src: "audio/" + q.id + "_expl.mp3", rate: 1.0 },
    ];
    playFiles(files, onEnd, function () { speak(explParts(q, correct), onEnd); });
  }
  function updatePlayingUI(on) {
    var lab = document.querySelector(".play-label");
    if (lab) lab.innerHTML = on ? '<span class="playing-dot"></span>再生中…(タップで停止)' : "タップして再生";
  }

  // 問題スクリプトの読み上げ(話者で声の高さを変える)
  function scriptParts(q, rate) {
    return q.script.map(function (seg) {
      var pitch = seg.sp === "M" ? 0.8 : seg.sp === "W" ? 1.25 : 1.0;
      return { lang: "en", text: seg.text, pitch: pitch, rate: rate };
    });
  }
  // 解説の読み上げ(③: 日本語+ポイント英文をゆっくり)
  function explParts(q, wasCorrect) {
    var parts = [];
    parts.push({ lang: "ja", text: (wasCorrect ? "正解です。" : "正解は、" + (q.answer + 1) + "番です。") + "ポイントとなる英文をもう一度、ゆっくり聞いてください。", rate: 1.0 });
    parts.push({ lang: "en", text: q.keyEn, rate: 0.85 });
    parts.push({ lang: "ja", text: "意味は、「" + q.keyJa + "」。" + q.expl, rate: 1.0 });
    return parts;
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
  // 弱い形式から順に並べる
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
  function yearBest(y) {
    var recs = prof().records.filter(function (r) { return r.mode === "year" && r.year === y; });
    if (!recs.length) return null;
    // セッション単位ではなく通算正答率で表示
    var sum = 0;
    recs.forEach(function (r) { sum += r.r; });
    return Math.round(sum / recs.length * 100);
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
    stopSpeech();
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

  function render() {
    stopSpeech();
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

  // ---------- ④ 学習者プロフィール ----------
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
      '<span class="badge">倍速 ' + p.rate.toFixed(1) + "</span></div></div>"
    ));

    var drill = el('<button class="btn block">🔥 弱点特訓を始める(おすすめ・10問)</button>');
    drill.addEventListener("click", startDrill);
    main.appendChild(drill);
    main.appendChild(el('<p class="muted small center mt8">あなたの苦手な形式をAI判定し、似た問題を連続で出題します。<br>2問連続で正解すると次に弱い形式へ進みます。</p>'));

    var card = el('<div class="card mt12"><h2>📈 形式ごとの定着度</h2></div>');
    unitsByWeakness().forEach(function (u) {
      var pr = proficiency(u.id);
      var w = pr === null ? 0 : Math.round(pr * 100);
      var row = el(
        '<div class="unit-row">' +
        '<div class="u-name">' + esc(u.name.replace(/(.+?)$/, "$1")) + "</div>" +
        '<div class="bar-wrap"><div class="bar ' + lvClass(pr) + '" style="width:' + w + '%"></div></div>' +
        '<div class="u-pct">' + pct(pr) + "</div></div>"
      );
      card.appendChild(row);
    });
    main.appendChild(card);
  }

  // ---------- ① 年度別 ----------
  function mockTitle(y) {
    y = String(y);
    return y.charAt(y.length - 1) === "p" ? y.slice(0, 4) + "年 プラス" : y + "年度";
  }
  function mockBest(y) {
    var ms = (prof().mocks || []).filter(function (m) { return m.year === y; });
    if (!ms.length) return null;
    return Math.max.apply(null, ms.map(function (m) { return m.score; }));
  }
  function renderYears() {
    var card = el('<div class="card"><h2>📅 年度別 本番形式模試(100点満点)</h2><div class="muted small">2021〜2025年度は本番と同じ37問・100点満点・同じ配点の模試です。再生回数も本番と同じ(第1・2問=2回まで、第3問以降=1回のみ)。難易度は5年分とも共通テスト標準レベルに統一してあるので、得点が本番の目安になります。※実際の過去問は著作権のため収録できず、形式・難易度を再現したオリジナル問題です。</div></div>');
    var grid = el('<div class="year-grid mt12"></div>');
    YEARS.slice().reverse().forEach(function (yy) {
      var isMock = !!(window.MOCK_TESTS || {})[yy.y];
      var b;
      if (isMock) {
        var best = mockBest(yy.y);
        var isPlus = !!yy.plus;
        var yLabel = isPlus ? (String(yy.y).slice(0, 4) + '年 <span style="color:#c0392b;font-weight:800">＋難化</span>') : (yy.y + '年度');
        var styleLabel = isPlus ? '本番レベル難化版 37問・100点' : '本番形式模試 37問・100点';
        b = el('<button class="year-card"><div class="y">' + yLabel + '</div><div class="y-style">' + styleLabel + '</div><div class="y-best">' + (best === null ? '<span class="muted">未挑戦</span>' : "最高 <b>" + best + "点</b>") + "</div></button>");
        b.addEventListener("click", function () {
          if (confirm(mockTitle(yy.y) + " 本番形式模試を始めます。\n・37問/100点満点(約30分)\n・第1・2問は2回まで、第3問以降は1回しか再生できません(本番と同じ)\n・静かな場所で、メモ用紙を用意して始めるのがおすすめです")) startMock(yy.y);
        });
      } else {
        var best2 = yearBest(yy.y);
        b = el('<button class="year-card"><div class="y">' + yy.y + '年度</div><div class="y-style">' + esc(yy.style) + ' ミニ演習(8問)</div><div class="y-best">' + (best2 === null ? '<span class="muted">未挑戦</span>' : "正答率 " + best2 + "%") + "</div></button>");
        b.addEventListener("click", function () { startYear(yy.y); });
      }
      grid.appendChild(b);
    });
    card.appendChild(grid);
    main.appendChild(card);
  }

  // ---------- 本番形式模試(37問・100点) ----------
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

  function mockBlocks(year) {
    var mt = (window.MOCK_TESTS || {})[year];
    if (!mt) return null;
    var blocks = [];
    var no = 1;
    mt.sections.forEach(function (sec) {
      sec.blocks.forEach(function (b, bi) {
        var blk = { sec: sec.name, intro: bi === 0 ? sec.intro : "", plays: sec.plays, unit: sec.unit, playsUsed: 0, graded: false, sel: [] };
        if (b.ref) {
          var it = BANK.filter(function (q) { return q.id === b.ref; })[0];
          blk.script = it.script;
          blk.table = it.table || null;
          blk.questions = [shuffledQ({ id: it.id, q: it.q, choices: it.choices, answer: it.answer, keyEn: it.keyEn, keyJa: it.keyJa, expl: it.expl, points: sec.points })];
        } else {
          blk.script = b.script;
          blk.table = b.table || null;
          blk.questions = b.questions.map(function (q) {
            return shuffledQ({ id: q.id, q: q.q, choices: q.choices, answer: q.answer, keyEn: q.keyEn, keyJa: q.keyJa, expl: q.expl, points: q.points || sec.points, fix: q.fix });
          });
        }
        blk.startNo = no;
        no += blk.questions.length;
        blocks.push(blk);
      });
    });
    return { blocks: blocks, totalQ: no - 1 };
  }

  function startMock(year) {
    stopSpeech();
    var mb = mockBlocks(year);
    if (!mb) return;
    session = { mode: "mock", year: year, blocks: mb.blocks, totalQ: mb.totalQ, bIdx: 0, score: 0, secScores: {}, startT: Date.now() };
    render();
    window.scrollTo(0, 0);
  }

  function renderMock() {
    if (session.bIdx >= session.blocks.length) { renderMockResult(); return; }
    var blk = session.blocks[session.bIdx];
    var p = prof();
    var endNo = blk.startNo + blk.questions.length - 1;
    var card = el('<div class="card"></div>');
    card.appendChild(el('<div class="q-progress">' + mockTitle(session.year) + "模試 【" + esc(blk.sec) + " 問" + blk.startNo + (endNo > blk.startNo ? "〜" + endNo : "") + " / 全" + session.totalQ + "問】</div>"));
    if (blk.intro) card.appendChild(el('<div class="sec-intro">' + esc(blk.intro) + "</div>"));

    // プレーヤー(再生回数制限つき)
    var left = blk.plays - blk.playsUsed;
    var player = el(
      '<div class="player">' +
      '<button class="play-btn"' + (left <= 0 ? " disabled" : "") + ">▶</button>" +
      '<div class="play-label">タップして再生</div>' +
      '<div class="speed-row"></div>' +
      '<div class="plays-left mt8">残り再生回数: <b class="pleft">' + left + "</b>回(本番と同じ制限)</div>" +
      "</div>"
    );
    var playBtn = player.querySelector(".play-btn");
    playBtn.addEventListener("click", function () {
      if (isPlaying()) { stopSpeech(); return; }
      if (blk.playsUsed >= blk.plays) return;
      blk.playsUsed++;
      player.querySelector(".pleft").textContent = blk.plays - blk.playsUsed;
      if (blk.playsUsed >= blk.plays) playBtn.disabled = true;
      playScriptAudio(blk.questions[0].id, blk.script, p.rate, { script: blk.script });
    });
    var speedRow = player.querySelector(".speed-row");
    SPEEDS.forEach(function (s) {
      var chip = el('<button class="speed-chip' + (Math.abs(p.rate - s) < 0.01 ? " on" : "") + '">' + s.toFixed(1) + "倍</button>");
      chip.addEventListener("click", function () {
        p.rate = s;
        save();
        speedRow.querySelectorAll(".speed-chip").forEach(function (c) { c.classList.remove("on"); });
        chip.classList.add("on");
      });
      speedRow.appendChild(chip);
    });
    card.appendChild(player);

    if (blk.table) {
      var t = '<table class="qtable">';
      blk.table.forEach(function (row, i) {
        t += "<tr>" + row.map(function (c) { return (i === 0 ? "<th>" : "<td>") + esc(c) + (i === 0 ? "</th>" : "</td>"); }).join("") + "</tr>";
      });
      t += "</table>";
      card.appendChild(el(t));
    }

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
          "🔑 " + esc(q.keyEn) + "\n(" + esc(q.keyJa) + ")\n\n" + esc(q.expl) + "</div>"
        ));
        var eb = el('<button class="btn ghost sm mt8">🔊 この問題の解説を音声で聞く</button>');
        eb.addEventListener("click", function () {
          if (isPlaying()) { stopSpeech(); return; }
          playExplAudio(q, correct, null);
        });
        qBox.appendChild(eb);
      }
      card.appendChild(qBox);
    });

    if (!blk.graded) {
      var gradeBtn = el('<button class="btn block mt12" disabled>採点する(全問選択後に押せます)</button>');
      gradeBtn.addEventListener("click", function () {
        stopSpeech();
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
        stopSpeech();
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
    var msg = score >= 85 ? "本番でも上位レベル!この調子で他年度も満点を狙おう。"
      : score >= 70 ? "安定して7割超え。落とした大問を形式別演習で潰せば80点台が見えます。"
        : score >= 50 ? "共通テストの平均点前後です。配点の大きい第1・2問(計41点)を確実に取る練習から始めよう。"
          : "まずは第1・2問(2回聞ける問題・計41点)を得点源に。形式別演習でゆっくり型を身につけてから再挑戦を。";
    var card = el(
      '<div class="card center"><h2>📋 ' + mockTitle(session.year) + " 本番形式模試の結果</h2>" +
      '<div class="result-big">' + score + " <span style='font-size:1rem'>/ 100点</span></div>" +
      '<div class="small">所要時間: 約' + mins + "分</div>" +
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

    var drill = el('<button class="btn block">🔥 弱点特訓で苦手形式を潰す</button>');
    drill.addEventListener("click", function () { session = null; startDrill(); });
    main.appendChild(drill);
    var home = el('<button class="btn ghost block mt8">ホームに戻る</button>');
    home.addEventListener("click", function () { session = null; switchTab("home"); });
    main.appendChild(home);
    session.bIdx = session.blocks.length;
  }

  // ---------- 形式別 ----------
  function renderUnits() {
    var card = el('<div class="card"><h2>🎧 形式を選んで演習</h2><div class="muted small">共通テストの大問構成に対応した形式別トレーニングです(5問)。</div></div>');
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
  function startYear(y) {
    var pool = BANK.filter(function (q) { return q.year === y; }).map(shuffledQ);
    session = { mode: "year", year: y, queue: pool, idx: 0, results: [], answered: false };
    beginSession();
  }
  function startUnit(unitId) {
    var pool = sortForServing(questionsFor(unitId)).slice(0, 5).map(shuffledQ);
    session = { mode: "unit", unit: unitId, queue: pool, idx: 0, results: [], answered: false };
    beginSession();
  }
  // ② 弱点特訓: 弱い形式の問題を連続出題。2連続正解で次の形式へ。
  function startDrill() {
    session = { mode: "drill", asked: [], results: [], streak: 0, unitIdx: 0, max: 10, current: null, answered: false };
    session.order = unitsByWeakness().map(function (u) { return u.id; });
    session.current = nextDrillQuestion();
    beginSession();
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
  function beginSession() {
    if (currentTab !== "practiceDummy") { /* タブはそのまま、画面だけ演習に */ }
    render();
    window.scrollTo(0, 0);
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
    var p = prof();

    var head = session.mode === "year"
      ? session.year + "年度セット【" + (session.idx + 1) + " / " + session.queue.length + "問】"
      : session.mode === "unit"
        ? esc(u.name) + "【" + (session.idx + 1) + " / " + session.queue.length + "問】"
        : "弱点特訓【" + (session.results.length + 1) + " / " + session.max + "問】 いまの形式: " + esc(u.name);

    var card = el('<div class="card"></div>');
    card.appendChild(el('<div class="q-progress">' + head + "</div>"));

    // プレーヤー(音声で出題)
    var player = el(
      '<div class="player">' +
      '<button class="play-btn">▶</button>' +
      '<div class="play-label">タップして再生</div>' +
      '<div class="speed-row"></div>' +
      '<div class="muted small mt8">再生回数: <span class="pcount">0</span>回(本番は1〜2回。まず1回で解くのがおすすめ)</div>' +
      "</div>"
    );
    var playBtn = player.querySelector(".play-btn");
    var pcount = player.querySelector(".pcount");
    var plays = 0;
    playBtn.addEventListener("click", function () {
      if (isPlaying()) { stopSpeech(); return; }
      plays++;
      pcount.textContent = plays;
      playScriptAudio(q.id, q.script, p.rate, q);
    });
    var speedRow = player.querySelector(".speed-row");
    SPEEDS.forEach(function (s) {
      var chip = el('<button class="speed-chip' + (Math.abs(p.rate - s) < 0.01 ? " on" : "") + '">' + s.toFixed(1) + "倍</button>");
      chip.addEventListener("click", function () {
        p.rate = s;
        save();
        speedRow.querySelectorAll(".speed-chip").forEach(function (c) { c.classList.remove("on"); });
        chip.classList.add("on");
      });
      speedRow.appendChild(chip);
    });
    card.appendChild(player);

    // 表(第4問型)
    if (q.table) {
      var t = '<table class="qtable">';
      q.table.forEach(function (row, i) {
        t += "<tr>" + row.map(function (c) { return (i === 0 ? "<th>" : "<td>") + esc(c) + (i === 0 ? "</th>" : "</td>"); }).join("") + "</tr>";
      });
      t += "</table>";
      card.appendChild(el(t));
    }

    card.appendChild(el('<div class="q-text">' + esc(q.q) + "</div>"));

    q.choices.forEach(function (c, i) {
      var btn = el('<button class="choice">' + "①②③④⑤⑥"[i] + " " + esc(c) + "</button>");
      btn.addEventListener("click", function () {
        if (session.answered) return;
        session.answered = true;
        stopSpeech();
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

  // ③ まるつけ後の解説(文字+音声)
  function showFeedback(card, q, correct) {
    // スクリプト表示
    var sc = '<div class="script-box"><b>📜 スクリプト</b>\n';
    q.script.forEach(function (seg) {
      sc += (seg.sp === "M" ? '<span class="sp">男性:</span> ' : seg.sp === "W" ? '<span class="sp">女性:</span> ' : "") + esc(seg.text) + "\n";
    });
    sc += "</div>";
    card.appendChild(el(sc));

    // 文字の解説
    card.appendChild(el(
      '<div class="expl"><span class="expl-label">' + (correct ? "○ 正解! " : "✕ 不正解 ") + "解説</span>\n" +
      "🔑 " + esc(q.keyEn) + "\n(" + esc(q.keyJa) + ")\n\n" + esc(q.expl) + "</div>"
    ));

    // 音声の解説
    var explBtn = el('<button class="btn ghost block mt8">🔊 解説を音声で聞く</button>');
    explBtn.addEventListener("click", function () {
      if (isPlaying()) { stopSpeech(); explBtn.textContent = "🔊 解説を音声で聞く"; return; }
      explBtn.textContent = "⏹ 停止する";
      playExplAudio(q, correct, function () { explBtn.textContent = "🔊 解説を音声で聞く"; });
    });
    card.appendChild(explBtn);

    var next = el('<button class="btn block mt8">次へ ▶</button>');
    next.addEventListener("click", function () {
      stopSpeech();
      advance(correct);
    });
    card.appendChild(next);
  }

  function recordAnswer(q, r) {
    prof().records.push({ t: Date.now(), qid: q.id, unit: q.unit, year: q.year, r: r, mode: session.mode });
    session.results.push(r);
    save();
  }

  function advance(correct) {
    session.answered = false;
    if (session.mode === "drill") {
      session.asked.push(session.current.id);
      if (correct) {
        session.streak++;
        if (session.streak >= 2) { // ②: 2連続正解で次に弱い形式へ
          session.streak = 0;
          session.unitIdx = (session.unitIdx + 1) % session.order.length;
        }
      } else {
        session.streak = 0; // 間違えたら同じ形式を続ける
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
    var title = session.mode === "year" ? session.year + "年度セットの結果"
      : session.mode === "unit" ? "形式別演習の結果" : "弱点特訓の結果";
    var msg = rate >= 80 ? "すばらしい!倍速を上げて負荷をかけるのもおすすめ。"
      : rate >= 50 ? "あと少し。間違えた問題は解説音声をもう一度聞こう。"
        : "弱点が見つかったのは前進!スクリプトを見ながら聞き直す→見ないで聞く、の順で復習を。";
    var card = el(
      '<div class="card center"><h2>📋 ' + title + "</h2>" +
      '<div class="result-big">' + rate + "点</div>" +
      '<div class="small">' + sum + " / " + n + " 問正解</div>" +
      '<p class="small mt12">' + msg + "</p></div>"
    );
    main.appendChild(card);

    var again = el('<button class="btn block">🔥 弱点特訓を始める(苦手形式を連続出題)</button>');
    again.addEventListener("click", function () { session = null; startDrill(); });
    main.appendChild(again);
    var home = el('<button class="btn ghost block mt8">ホームに戻る</button>');
    home.addEventListener("click", function () { session = null; switchTab("home"); });
    main.appendChild(home);
  }

  // ---------- 分析 ----------
  function renderAnalysis() {
    var card = el('<div class="card"><h2>📊 形式別の定着度(' + esc(state.current) + ")</h2></div>");
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
        alert(u.name + "\n定着度: " + pct(pr) + "(記録 " + unitRecords(u.id).length + "件)\n\n【聞き方のコツ】\n" + u.tips);
      });
      card.appendChild(row);
    });
    main.appendChild(card);

    // 模試の得点推移(本番100点満点の目安)
    var mocks = (prof().mocks || []).slice().sort(function (a, b) { return b.t - a.t; });
    var mc = el('<div class="card"><h2>🎯 本番形式模試の得点(100点満点)</h2><div class="muted small">本番でどのくらい取れるかの目安です。同じ年度は繰り返すほど覚えてしまうので、初回の点数を目安にしてください。</div></div>');
    if (!mocks.length) {
      mc.appendChild(el('<p class="muted small mt8">まだ模試の記録がありません。「年度別」タブから挑戦してみましょう。</p>'));
    } else {
      mocks.slice(0, 15).forEach(function (m) {
        var d = new Date(m.t);
        mc.appendChild(el('<div class="log-item"><span class="log-date">' + (d.getMonth() + 1) + "/" + d.getDate() + "</span> " + mockTitle(m.year) + " — <b>" + m.score + "点</b> / 100点</div>"));
      });
    }
    main.appendChild(mc);

    var yc = el('<div class="card"><h2>📅 年度別の通算正答率</h2></div>');
    YEARS.slice().reverse().forEach(function (yy) {
      var best = yearBest(yy.y);
      yc.appendChild(el('<div class="log-item">' + yy.y + "年度(" + esc(yy.style) + ") — <b>" + (best === null ? "未挑戦" : best + "%") + "</b></div>"));
    });
    main.appendChild(yc);
  }

  // ---------- 設定 ----------
  function renderSettings() {
    var p = prof();

    var sc = el('<div class="card"><h2>⏩ 音声の速さ(既定値)</h2><div class="muted small">演習画面でもいつでも切り替えられます。共通テスト本番はおよそ1.0倍です。</div><div class="speed-row" style="justify-content:flex-start;margin-top:10px"></div></div>');
    var row = sc.querySelector(".speed-row");
    SPEEDS.forEach(function (s) {
      var chip = el('<button class="speed-chip' + (Math.abs(p.rate - s) < 0.01 ? " on" : "") + '">' + s.toFixed(1) + "倍</button>");
      chip.addEventListener("click", function () {
        p.rate = s;
        save();
        row.querySelectorAll(".speed-chip").forEach(function (c) { c.classList.remove("on"); });
        chip.classList.add("on");
      });
      row.appendChild(chip);
    });
    main.appendChild(sc);

    // 音声テスト
    var tc = el('<div class="card"><h2>🔊 音声テスト</h2><div class="muted small">問題音声はネイティブ品質の音声ファイルで再生されます。聞こえない場合は端末の消音(マナー)モードと音量を確認してください。</div></div>');
    var tb = el('<button class="btn ghost sm mt8">テスト再生(ネイティブ音声)</button>');
    tb.addEventListener("click", function () {
      if (isPlaying()) { stopSpeech(); return; }
      playFiles(
        [{ src: "audio/y21_1_s0.mp3", rate: p.rate }],
        null,
        function () { speak([{ lang: "en", text: "Hello! This is a listening test.", rate: p.rate }]); }
      );
    });
    tc.appendChild(tb);
    main.appendChild(tc);

    // 学習者管理(④)
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
