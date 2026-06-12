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
