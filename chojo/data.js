// ============================================================
// 設定・出題傾向データ(長女用: 青学・法政 国際系学部)
// 重要度 imp は 0〜5(5=最重要)。出題傾向に基づく目安。
// 最新の入試方式・配点は必ず募集要項・パスナビ等で確認してください。
// ============================================================

window.APP_CONFIG = {
  title: "単元別演習【青学・法政】",
  subtitle: "青学 国際政経・地球社会共生 / 法政 国際文化・GIS 対策",
  storageKey: "tanjan_chojo_v1",
  accent: "#0e7c6b",
};

window.UNIVERSITIES = [
  {
    id: "agk",
    name: "青学 国際政治経済",
    note: "個別B方式は英語+総合問題で英語の比重が非常に大きい。英検等の外部試験利用方式もあり。全学部方式は英・国・地歴。長文は社会科学系テーマが多い。",
  },
  {
    id: "acs",
    name: "青学 地球社会共生",
    note: "個別方式は英語重視(外部試験スコア利用あり)+総合問題。英語力がそのまま合否に直結する。全学部方式は英・国・地歴。",
  },
  {
    id: "hik",
    name: "法政 国際文化",
    note: "T日程(英・国)とA方式(英・国・地歴)。英語は長文2題+会話・文法・整序の標準型を速く正確に。出題は素直なので取りこぼしが命取り。",
  },
  {
    id: "gis",
    name: "法政 GIS",
    note: "グローバル教養学部。入試は実質英語のみ(または外部試験利用)。帰国生レベルの長文読解力が求められる。英検準1級レベルの語彙を目標に。",
  },
];

// type: "mcq"=選択式(自動採点) / "free"=記述式(模範解答を見て自己採点)
window.SUBJECTS = [
  {
    id: "eng",
    name: "英語",
    units: [
      {
        id: "e_vocab", name: "語彙・熟語",
        imp: { agk: 4, acs: 4, hik: 4, gis: 5 },
        tips: "国際系は語彙力勝負。ターゲット級1冊を完璧に+GIS志望なら準1級レベルまで上乗せ。長文中の同意語選択問題が頻出。",
      },
      {
        id: "e_grammar", name: "文法・語法",
        imp: { agk: 4, acs: 4, hik: 4, gis: 4 },
        tips: "空所補充形式が中心。時制・準動詞・関係詞・仮定法が4大頻出。文法問題集1冊を3周が目安。",
      },
      {
        id: "e_seijo", name: "整序英作文(語句整序)",
        imp: { agk: 3, acs: 3, hik: 4, gis: 3 },
        tips: "法政で頻出。「動詞のカタマリ(語法)」から組み立てるのがコツ。和訳に引きずられず構文の型で考える。",
      },
      {
        id: "e_reading", name: "長文読解",
        imp: { agk: 5, acs: 5, hik: 5, gis: 5 },
        tips: "全学部で最重要。国際関係・異文化理解・社会問題のテーマが多い。1日1題、段落ごとに要点を一言メモする習慣を。",
      },
      {
        id: "e_conv", name: "会話文・口語表現",
        imp: { agk: 4, acs: 4, hik: 3, gis: 4 },
        tips: "青学で頻出。会話特有の定型表現(賛成・反対・依頼・提案)は暗記でそのまま得点になる。",
      },
      {
        id: "e_writing", name: "英作文・記述",
        imp: { agk: 3, acs: 3, hik: 2, gis: 3 },
        tips: "青学の総合問題で記述が出ることがある。「主張→理由→例」の型で50〜80語を書く練習を。",
      },
      {
        id: "e_gaibu", name: "英検・外部試験対策",
        imp: { agk: 4, acs: 4, hik: 2, gis: 5 },
        tips: "青学・法政GISは英検等の外部試験利用方式がある。英検準1級(またはCSE高スコア)が取れれば出願の幅が大きく広がる。※過去問・公式問題集で演習し、結果をこのアプリに記録。",
        noBank: true,
      },
    ],
  },
  {
    id: "jpn",
    name: "国語",
    units: [
      {
        id: "j_hyoron", name: "現代文(評論・随筆)",
        imp: { agk: 4, acs: 4, hik: 4, gis: 0 },
        tips: "設問は標準的。「傍線部の言い換えを本文から探す」が基本動作。文化論・言語論・メディア論が頻出テーマ。",
      },
      {
        id: "j_kanji", name: "漢字・語彙",
        imp: { agk: 3, acs: 3, hik: 3, gis: 0 },
        tips: "漢字の読み書き・四字熟語・慣用句は確実な得点源。毎日10分の積み重ねで満点を狙える。",
      },
      {
        id: "j_kotango", name: "古文単語・文法",
        imp: { agk: 3, acs: 3, hik: 4, gis: 0 },
        tips: "古文単語300語+助動詞の活用と意味が土台。「ぬ・ね」の識別、敬語の方向は頻出。",
      },
      {
        id: "j_kodokkai", name: "古文読解",
        imp: { agk: 3, acs: 3, hik: 4, gis: 0 },
        tips: "主語の省略を補いながら読む練習を。「誰が・誰に」を敬語から判定するのがカギ。",
      },
    ],
  },
  {
    id: "wh",
    name: "世界史",
    optGroup: "select",
    units: [
      {
        id: "w_kodai", name: "古代(オリエント〜ローマ)",
        imp: { agk: 3, acs: 3, hik: 3, gis: 0 },
        tips: "全範囲からまんべんなく出るのがMARCH型。古代は得点しやすいので確実に。",
      },
      {
        id: "w_chukinsei", name: "中世・近世ヨーロッパ",
        imp: { agk: 4, acs: 4, hik: 4, gis: 0 },
        tips: "宗教改革・大航海時代・絶対王政は頻出。文化史(ルネサンス)もセットで。",
      },
      {
        id: "w_kindai", name: "近代(市民革命〜帝国主義)",
        imp: { agk: 5, acs: 5, hik: 5, gis: 0 },
        tips: "最重要帯。フランス革命・産業革命・帝国主義は年号と因果関係まで正確に。",
      },
      {
        id: "w_gendai", name: "現代(二度の大戦〜戦後)",
        imp: { agk: 4, acs: 4, hik: 4, gis: 0 },
        tips: "国際系学部は戦後の国際関係(国連・冷戦・EU)を出したがる。時事と関連づけて整理。",
      },
      {
        id: "w_asia", name: "アジア・イスラーム史",
        imp: { agk: 4, acs: 4, hik: 4, gis: 0 },
        tips: "中国王朝の制度史とイスラーム史は差がつく分野。横のつながり(同時代の東西)を意識。",
      },
    ],
  },
  {
    id: "jh",
    name: "日本史",
    optGroup: "select",
    units: [
      {
        id: "n_kochusei", name: "古代・中世",
        imp: { agk: 3, acs: 3, hik: 3, gis: 0 },
        tips: "律令制・荘園・幕府の仕組みなど制度史が中心。史料問題にも慣れておく。",
      },
      {
        id: "n_kinsei", name: "近世(江戸)",
        imp: { agk: 4, acs: 4, hik: 4, gis: 0 },
        tips: "三大改革・対外関係(鎖国〜開国)が頻出。文化史(元禄・化政)も忘れずに。",
      },
      {
        id: "n_kindai", name: "近代(明治〜戦前)",
        imp: { agk: 5, acs: 5, hik: 5, gis: 0 },
        tips: "最重要帯。条約改正・政党政治・対外戦争の流れを年表で固める。",
      },
      {
        id: "n_gendai", name: "現代(戦後)",
        imp: { agk: 4, acs: 4, hik: 4, gis: 0 },
        tips: "占領政策・55年体制・高度経済成長。国際系は戦後外交(日米安保・国交正常化)が狙われる。",
      },
    ],
  },
];

// ============================================================
// 直近約10年の入試で出題されたジャンル(傾向の目安)
// freq: ほぼ毎年 / 頻出 / ときどき
// qids: 該当する内蔵問題のID(空ならAI生成・手動記録で対応)
// ※年度ごとの正確な出題は赤本で確認してください。
// ============================================================
window.GENRES = {
  e_reading: [
    { id: "g_ibunka", name: "異文化理解・言語", freq: "ほぼ毎年", qids: ["er1", "er3", "er5"] },
    { id: "g_kokusai", name: "国際社会・時事", freq: "ほぼ毎年", qids: ["er4", "er6", "er7"] },
    { id: "g_kankyo", name: "環境・観光", freq: "頻出", qids: ["er2"] },
  ],
  e_seijo: [
    { id: "g_kobun2", name: "構文・倒置・仮定法", freq: "頻出", qids: ["es4", "es6", "es8"] },
    { id: "g_jukugo", name: "熟語・語法", freq: "頻出", qids: ["es1", "es2", "es5"] },
    { id: "g_hikaku", name: "比較・倍数表現", freq: "頻出", qids: ["es3", "es7"] },
  ],
  e_conv: [
    { id: "g_teikei", name: "依頼・提案の定型表現", freq: "頻出", qids: ["ec1", "ec4", "ec5"] },
    { id: "g_kogo", name: "口語イディオム", freq: "頻出", qids: ["ec2", "ec3", "ec6"] },
    { id: "g_bamen", name: "電話・再会など場面別", freq: "頻出", qids: ["ec7", "ec8"] },
  ],
  e_writing: [
    { id: "g_opinion", name: "意見論述", freq: "頻出", qids: ["ew2", "ew3"] },
    { id: "g_wabun", name: "和文英訳", freq: "ときどき", qids: ["ew1"] },
  ],
  j_hyoron: [
    { id: "g_bunka", name: "文化論・グローバル化", freq: "頻出", qids: ["jr1"] },
    { id: "g_gengo", name: "言語・翻訳論", freq: "頻出", qids: ["jr2"] },
    { id: "g_shakai", name: "社会・人間関係", freq: "頻出", qids: ["jr3"] },
    { id: "g_zuihitsu", name: "随筆(旅・日常)", freq: "頻出", qids: ["jr4"] },
  ],
  j_kodokkai: [
    { id: "g_monogatari", name: "物語・説話", freq: "頻出", qids: ["jd1", "jd2", "jd3"] },
  ],
  w_kodai: [
    { id: "g_orient", name: "オリエント", freq: "頻出", qids: ["wk1"] },
    { id: "g_girisha", name: "ギリシア・ヘレニズム", freq: "頻出", qids: ["wk2"] },
    { id: "g_roma", name: "ローマ", freq: "頻出", qids: ["wk3"] },
  ],
  w_chukinsei: [
    { id: "g_jujigun", name: "十字軍・教会", freq: "頻出", qids: ["wc1"] },
    { id: "g_runesansu", name: "ルネサンス・宗教改革", freq: "頻出", qids: ["wc2"] },
    { id: "g_daikokai", name: "大航海時代", freq: "頻出", qids: ["wc3"] },
  ],
  w_kindai: [
    { id: "g_kakumei", name: "市民革命", freq: "ほぼ毎年", qids: ["wn1", "wn2"] },
    { id: "g_teikoku", name: "帝国主義・アフリカ分割", freq: "頻出", qids: ["wn3"] },
  ],
  w_gendai: [
    { id: "g_kokuren", name: "国際機構(連盟・国連)", freq: "頻出", qids: ["wg1"] },
    { id: "g_reisen", name: "冷戦", freq: "頻出", qids: ["wg2"] },
  ],
  w_asia: [
    { id: "g_chugokuseido", name: "中国の制度史(科挙など)", freq: "頻出", qids: ["wa1"] },
  ],
  n_kochusei: [
    { id: "g_kodaiseiji", name: "古代の政治", freq: "頻出", qids: ["nj1"] },
    { id: "g_buke", name: "武家政権の成立・戦乱", freq: "頻出", qids: ["nj2", "nj3"] },
  ],
  n_kinsei: [
    { id: "g_bakufu", name: "幕府の支配体制", freq: "頻出", qids: ["nj4"] },
    { id: "g_taigai", name: "対外関係(鎖国)", freq: "頻出", qids: ["nj5"] },
  ],
  n_kindai: [
    { id: "g_joyaku", name: "条約改正・外交", freq: "ほぼ毎年", qids: ["nj6", "nj8"] },
    { id: "g_kenpo", name: "憲法・政治制度", freq: "頻出", qids: ["nj7"] },
  ],
  n_gendai: [
    { id: "g_sengogaiko", name: "戦後外交(国際系頻出)", freq: "ほぼ毎年", qids: ["nj9", "nj10"] },
  ],
};
