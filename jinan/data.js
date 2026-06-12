// ============================================================
// 設定・出題傾向データ(次男用: 一橋大・慶應商・慶應経済)
// 重要度 imp は 0〜5(5=最重要)。出題傾向に基づく目安。
// 最新の傾向は必ず赤本・パスナビ等で確認してください。
// ============================================================

window.APP_CONFIG = {
  title: "単元別演習【一橋・慶應】",
  subtitle: "一橋大 / 慶應商 / 慶應経済 対策",
  storageKey: "tanjan_jinan_v1",
  accent: "#1a3a6b",
};

window.UNIVERSITIES = [
  {
    id: "hit",
    name: "一橋大",
    note: "2次: 英250 数250 国110 社160(商学部の例)。全科目で論述力が問われる国立型。",
  },
  {
    id: "keisho",
    name: "慶應商",
    note: "A方式: 英200 地歴100 数100。処理速度勝負。英語は語彙・文法も問われるマーク中心。",
  },
  {
    id: "keikei",
    name: "慶應経済",
    note: "A方式: 英200 数150 小論文70。英作文(意見論述)と数学の記述が合否を分ける。",
  },
];

// type: "mcq"=選択式(自動採点) / "free"=記述式(模範解答を見て自己採点)
window.SUBJECTS = [
  {
    id: "eng",
    name: "英語",
    units: [
      {
        id: "e_vocab", name: "語彙・イディオム",
        imp: { hit: 3, keisho: 4, keikei: 3 },
        tips: "慶應商は語彙の独立問題あり。長文の語彙レベルも高い(目安: 単語帳1冊+派生語まで)。",
      },
      {
        id: "e_grammar", name: "文法・語法",
        imp: { hit: 2, keisho: 5, keikei: 3 },
        tips: "慶應商は文法・語法の空所補充が大量に出る。前置詞・動詞の語法・品詞判別が頻出。",
      },
      {
        id: "e_reading", name: "長文読解(内容一致)",
        imp: { hit: 5, keisho: 5, keikei: 5 },
        tips: "3校とも最重要。慶應経済は700語級×複数、一橋は抽象度の高い評論。毎日1題が基本。",
      },
      {
        id: "e_summary", name: "要約・内容説明",
        imp: { hit: 5, keisho: 2, keikei: 3 },
        tips: "一橋の看板。段落の主張を日本語で圧縮する練習。「筆者の主張+根拠」を型にする。",
      },
      {
        id: "e_writing", name: "英作文(自由・和文英訳)",
        imp: { hit: 5, keisho: 1, keikei: 5 },
        tips: "一橋は自由英作文(写真描写・意見)、慶應経済は長文を踏まえた意見論述。型(主張→理由→例)を固める。",
      },
      {
        id: "e_conv", name: "会話文・口語表現",
        imp: { hit: 2, keisho: 3, keikei: 2 },
        tips: "慶應商で会話文・口語表現の出題あり。定型表現を暗記でカバーできる得点源。",
      },
      {
        id: "e_listening", name: "リスニング",
        imp: { hit: 4, keisho: 0, keikei: 0 },
        tips: "一橋は2次にリスニングあり。共テより速い読み上げ。毎日10分のディクテーションが有効。※音声教材で演習し、結果をこのアプリに記録。",
        noBank: true,
      },
    ],
  },
  {
    id: "math",
    name: "数学",
    units: [
      {
        id: "m_prob", name: "場合の数・確率",
        imp: { hit: 5, keisho: 5, keikei: 5 },
        tips: "3校とも超頻出。一橋は確率漸化式・n絡みの確率が看板。慶應は計算量の多い標準問題。",
      },
      {
        id: "m_integer", name: "整数の性質",
        imp: { hit: 5, keisho: 2, keikei: 2 },
        tips: "一橋の看板分野。余りで分類・素数・不定方程式。実験して規則を見つける訓練を。",
      },
      {
        id: "m_calc", name: "微分・積分",
        imp: { hit: 5, keisho: 4, keikei: 5 },
        tips: "3校とも頻出。接線・面積・3次関数の解の配置。1/6公式などの計算技術も速度に直結。",
      },
      {
        id: "m_seq", name: "数列・漸化式",
        imp: { hit: 4, keisho: 4, keikei: 4 },
        tips: "漸化式の標準型は全パターン即答レベルに。確率との融合(確率漸化式)が一橋頻出。",
      },
      {
        id: "m_vector", name: "ベクトル",
        imp: { hit: 3, keisho: 4, keikei: 3 },
        tips: "慶應商で頻出。位置ベクトル・内積・空間ベクトルの標準問題を確実に。",
      },
      {
        id: "m_zukei", name: "図形と方程式",
        imp: { hit: 4, keisho: 3, keikei: 3 },
        tips: "一橋で軌跡・領域が頻出。文字を含む図形の通過領域は重点演習を。",
      },
      {
        id: "m_trig", name: "三角関数",
        imp: { hit: 3, keisho: 3, keikei: 3 },
        tips: "単独よりも図形・微積との融合で出る。合成・2倍角は瞬時に使えるように。",
      },
      {
        id: "m_explog", name: "指数・対数",
        imp: { hit: 2, keisho: 3, keikei: 4 },
        tips: "慶應経済で頻出。桁数評価・大小比較・置換して2次関数に帰着するパターン。",
      },
      {
        id: "m_quad", name: "数と式・2次関数",
        imp: { hit: 2, keisho: 2, keikei: 2 },
        tips: "単独出題は少ないが全分野の土台。解の配置・最大最小は他分野に直結。",
      },
    ],
  },
  {
    id: "jpn",
    name: "国語",
    units: [
      {
        id: "j_hyoron", name: "現代文(評論読解)",
        imp: { hit: 5, keisho: 0, keikei: 0 },
        tips: "一橋国語の中心。設問は内容説明の記述。「指示語の中身を開いて言い換える」が基本動作。",
      },
      {
        id: "j_keyword", name: "評論キーワード・漢字",
        imp: { hit: 4, keisho: 0, keikei: 0 },
        tips: "近代・媒介・捨象などの頻出概念語。漢字の書き取りも出題される。",
      },
      {
        id: "j_bungo", name: "近代文語文",
        imp: { hit: 4, keisho: 0, keikei: 0 },
        tips: "一橋名物。明治期の文語文。古文単語+漢文訓読の知識で読める。過去問が最良の教材。",
      },
      {
        id: "j_yoyaku", name: "要約(200字)",
        imp: { hit: 5, keisho: 0, keikei: 0 },
        tips: "一橋第3問の定番。本文の論理構造(対比・因果)を骨組みだけ抜く練習。毎週1本。",
      },
    ],
  },
  {
    id: "wh",
    name: "世界史",
    optGroup: "select",
    units: [
      {
        id: "w_medieval", name: "中世ヨーロッパ",
        imp: { hit: 5, keisho: 3, keikei: 1 },
        tips: "一橋の最頻出帯。封建制・教会・中世都市・宗教改革の大論述が繰り返し出る。慶應経済は1500年以降が範囲なので注意。",
      },
      {
        id: "w_modern_eu", name: "近世・近代ヨーロッパ",
        imp: { hit: 5, keisho: 4, keikei: 5 },
        tips: "主権国家体制・市民革命・産業革命・国民国家。3校共通の最重要帯。",
      },
      {
        id: "w_modern_asia", name: "近現代アジア",
        imp: { hit: 5, keisho: 4, keikei: 4 },
        tips: "一橋第3問はアジア史(中国・朝鮮・東南アジア)指定が通例。条約・改革運動を整理。",
      },
      {
        id: "w_contemporary", name: "二度の大戦・戦後史",
        imp: { hit: 4, keisho: 4, keikei: 5 },
        tips: "慶應経済は現代史比重が高い。冷戦・脱植民地化・経済統合(EU)を年表で整理。",
      },
      {
        id: "w_ancient", name: "古代(オリエント〜ローマ)",
        imp: { hit: 1, keisho: 3, keikei: 0 },
        tips: "一橋・慶應経済ではほぼ出ない。慶應商の短答対策として基本語句のみ確認。",
      },
    ],
  },
  {
    id: "jh",
    name: "日本史",
    optGroup: "select",
    units: [
      {
        id: "n_kinsei", name: "近世(江戸)",
        imp: { hit: 4, keisho: 4, keikei: 4 },
        tips: "幕政改革(享保・寛政・天保)・経済政策が論述頻出。慶應経済は1600年以降が範囲。",
      },
      {
        id: "n_kindai", name: "近代(明治〜昭和戦前)",
        imp: { hit: 5, keisho: 5, keikei: 5 },
        tips: "3校共通の最重要帯。明治維新・産業革命・政党政治・戦時体制。経済史の視点で整理。",
      },
      {
        id: "n_gendai", name: "現代(戦後)",
        imp: { hit: 4, keisho: 4, keikei: 5 },
        tips: "戦後改革・高度経済成長・バブルまで。慶應経済は戦後経済史が頻出。",
      },
      {
        id: "n_chusei", name: "中世(鎌倉・室町)",
        imp: { hit: 2, keisho: 3, keikei: 0 },
        tips: "出題比重は低め。荘園・貨幣経済・惣村など社会経済史を中心に。",
      },
      {
        id: "n_kodai", name: "古代",
        imp: { hit: 1, keisho: 3, keikei: 0 },
        tips: "慶應商の短答対策のみ。律令制・土地制度の基本を確認。",
      },
    ],
  },
  {
    id: "essay",
    name: "小論文",
    units: [
      {
        id: "s_keizai", name: "小論文(慶應経済型)",
        imp: { hit: 0, keisho: 0, keikei: 4 },
        tips: "課題文の要約+意見論述(400字程度)。「課題文の主張を正確に踏まえてから自分の立場」が鉄則。テーマ演習で構成メモを作る練習を。",
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
    { id: "g_econ", name: "経済・社会科学の長文", freq: "ほぼ毎年", qids: ["er1", "er2", "er4", "er6"] },
    { id: "g_tech", name: "科学技術・AIと社会", freq: "頻出", qids: ["er3"] },
    { id: "g_society", name: "都市・環境・社会問題", freq: "頻出", qids: ["er5"] },
  ],
  e_summary: [
    { id: "g_yoyaku", name: "日本語要約(一橋型)", freq: "ほぼ毎年", qids: ["es1", "es2", "es3", "es4"] },
  ],
  e_writing: [
    { id: "g_opinion", name: "意見論述(賛否型)", freq: "ほぼ毎年", qids: ["ew4", "ew5", "ew6"] },
    { id: "g_wabun", name: "和文英訳", freq: "頻出", qids: ["ew1", "ew2", "ew3"] },
    { id: "g_photo", name: "写真・状況描写(一橋)", freq: "ときどき", qids: [] },
  ],
  m_prob: [
    { id: "g_njin", name: "n人・n回の一般化(一橋型)", freq: "ほぼ毎年", qids: ["mp2", "mp6"] },
    { id: "g_count", name: "数え上げ・反復試行", freq: "頻出", qids: ["mp1", "mp3", "mp4"] },
    { id: "g_cond", name: "条件付き確率", freq: "頻出", qids: ["mp5"] },
    { id: "g_pzenka", name: "確率漸化式", freq: "頻出", qids: [] },
  ],
  m_integer: [
    { id: "g_amari", name: "余りで分類・合同式", freq: "ほぼ毎年", qids: ["mi1", "mi2"] },
    { id: "g_futei", name: "不定方程式", freq: "頻出", qids: ["mi3"] },
    { id: "g_sosu", name: "素数の性質", freq: "頻出", qids: ["mi4"] },
    { id: "g_yakusu", name: "約数・倍数", freq: "ときどき", qids: ["mi5"] },
  ],
  m_calc: [
    { id: "g_menseki", name: "面積計算", freq: "ほぼ毎年", qids: ["mc2", "mc5", "mc6"] },
    { id: "g_sessen", name: "接線・極値", freq: "頻出", qids: ["mc1", "mc3"] },
    { id: "g_kaikosu", name: "解の個数・定数分離", freq: "頻出", qids: ["mc4"] },
  ],
  m_seq: [
    { id: "g_zenka", name: "漸化式", freq: "ほぼ毎年", qids: ["ms1"] },
    { id: "g_wa", name: "和(Σ)の計算", freq: "頻出", qids: ["ms2"] },
    { id: "g_ippan", name: "一般項を求める", freq: "頻出", qids: ["ms3", "ms4"] },
  ],
  m_zukei: [
    { id: "g_kiseki", name: "軌跡・領域(一橋頻出)", freq: "ほぼ毎年", qids: ["mz4"] },
    { id: "g_en", name: "円と直線", freq: "頻出", qids: ["mz1", "mz2", "mz3"] },
  ],
  j_hyoron: [
    { id: "g_kindai", name: "近代論・社会論", freq: "頻出", qids: ["jr1"] },
    { id: "g_kagaku", name: "科学論・倫理", freq: "頻出", qids: ["jr2"] },
    { id: "g_gengo", name: "言語論・文化論", freq: "頻出", qids: ["jr3"] },
  ],
  w_medieval: [
    { id: "g_toshi", name: "中世都市・商業(一橋第1問型)", freq: "ほぼ毎年", qids: ["wm2", "wm4"] },
    { id: "g_kyokai", name: "教会・教皇権・宗教改革", freq: "頻出", qids: ["wm1", "wm5"] },
    { id: "g_homin", name: "封建制・農民の地位", freq: "頻出", qids: ["wm3"] },
  ],
  w_modern_eu: [
    { id: "g_kakumei", name: "市民革命・国民国家", freq: "ほぼ毎年", qids: ["we2", "we3", "we5"] },
    { id: "g_sangyo", name: "産業革命", freq: "頻出", qids: ["we1", "we4"] },
    { id: "g_keishiso", name: "経済思想・経済政策", freq: "頻出", qids: ["we6"] },
  ],
  w_modern_asia: [
    { id: "g_chugoku", name: "中国の近代化(一橋第3問型)", freq: "ほぼ毎年", qids: ["wa2", "wa3", "wa4"] },
    { id: "g_joyaku", name: "開港・条約体制", freq: "頻出", qids: ["wa1"] },
    { id: "g_minami", name: "南・東南アジア", freq: "ときどき", qids: ["wa5"] },
  ],
  w_contemporary: [
    { id: "g_reisen", name: "冷戦", freq: "頻出", qids: ["wc2", "wc3"] },
    { id: "g_kokusaikeizai", name: "国際経済体制(慶應経済型)", freq: "頻出", qids: ["wc1"] },
    { id: "g_eu", name: "ヨーロッパ統合", freq: "頻出", qids: ["wc4"] },
  ],
  n_kinsei: [
    { id: "g_bakusei", name: "幕政改革", freq: "ほぼ毎年", qids: ["nk1", "nk3", "nk4", "nk5"] },
    { id: "g_tanuma", name: "田沼政治・経済政策", freq: "頻出", qids: ["nk2"] },
  ],
  n_kindai: [
    { id: "g_zaisei", name: "財政・金融史", freq: "ほぼ毎年", qids: ["nm2", "nm3", "nm6"] },
    { id: "g_nsangyo", name: "産業革命(日本)", freq: "頻出", qids: ["nm4"] },
    { id: "g_seiji", name: "政治・社会運動", freq: "頻出", qids: ["nm5"] },
    { id: "g_tochi", name: "土地制度", freq: "頻出", qids: ["nm1"] },
  ],
  n_gendai: [
    { id: "g_senryo", name: "占領期の改革", freq: "頻出", qids: ["ng1", "ng2"] },
    { id: "g_kodo", name: "高度経済成長", freq: "頻出", qids: ["ng3", "ng4"] },
  ],
  s_keizai: [
    { id: "g_kakusa", name: "格差・再分配", freq: "頻出", qids: ["ss1"] },
    { id: "g_gijutsu", name: "技術と社会", freq: "頻出", qids: ["ss2"] },
    { id: "g_kankyo", name: "環境と経済", freq: "頻出", qids: ["ss3"] },
    { id: "g_minshu", name: "民主主義", freq: "頻出", qids: ["ss4"] },
    { id: "g_global", name: "グローバル化", freq: "頻出", qids: ["ss5"] },
  ],
};
