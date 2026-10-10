// ============================================================
// 2021年 アルファ 本番形式模試(37問・100点満点)
// ============================================================

window.MOCK_TESTS = window.MOCK_TESTS || {};

window.MOCK_TESTS["2021"] = {
 "sections": [
  {
   "name": "第1問A",
   "unit": "u1",
   "points": 4,
   "plays": 2,
   "intro": "短い英語を聞き、内容と最もよく合っているものを選びなさい。(各4点・2回まで再生可)【アルファ】",
   "blocks": [
    {
     "script": [
      {
       "sp": "M",
       "text": "I know the recipe says to bake it for an hour, but my oven runs hot, so I take it out after forty-five minutes, otherwise the edges burn."
      }
     ],
     "questions": [
      {
       "id": "pp21_01",
       "q": "What does the speaker do?",
       "choices": [
        "He bakes it for less time than the recipe says.",
        "He follows the time in the recipe exactly.",
        "He bakes it longer so the edges stay soft.",
        "He lowers the oven temperature for an hour."
       ],
       "answer": 0,
       "keyEn": "my oven runs hot, so I take it out after forty-five minutes.",
       "keyJa": "オーブンの火力が強いので、レシピより短い45分で取り出す",
       "expl": "recipe(1時間)と実際(45分)の差。otherwise =「さもないと」で理由(縁が焦げる)。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "The clerk said the shirt could be exchanged within thirty days, but since I'd already washed it, he refused, so now I'm stuck with a shirt that doesn't fit."
      }
     ],
     "questions": [
      {
       "id": "pp21_02",
       "q": "What is the speaker's problem?",
       "choices": [
        "The shirt she washed can no longer be exchanged.",
        "She has missed the thirty-day deadline.",
        "She bought the wrong color of shirt.",
        "The clerk charged her extra for exchanging it."
       ],
       "answer": 0,
       "keyEn": "since I'd already washed it, he refused.",
       "keyJa": "洗ってしまったため交換を断られた",
       "expl": "thirty days 以内でも、washed が理由で refused。期限切れではない点に注意。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "Though I've lived in this town all my life, I still get lost downtown, because the one-way streets seem to change every time I visit."
      }
     ],
     "questions": [
      {
       "id": "pp21_03",
       "q": "What does the speaker mean?",
       "choices": [
        "He often loses his way in the town center.",
        "He moved to the town only recently.",
        "He stays away from the town center.",
        "He enjoys the town's one-way streets."
       ],
       "answer": 0,
       "keyEn": "Though I've lived in this town all my life, I still get lost downtown.",
       "keyJa": "ずっと住んでいるのに、中心街ではまだ道に迷う",
       "expl": "Though(〜なのに)の逆接。get lost downtown =「中心街で迷う」。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "I'd rather not take the elevator, not because I'm afraid of it, but because I'm trying to get my daily step count up, and the stairs are the easiest way."
      }
     ],
     "questions": [
      {
       "id": "pp21_04",
       "q": "Why does the speaker avoid the elevator?",
       "choices": [
        "She wants to increase her daily exercise.",
        "She is afraid of being shut inside the elevator.",
        "The elevator in her building is out of order today.",
        "She is in a hurry and the stairs are faster."
       ],
       "answer": 0,
       "keyEn": "not because I'm afraid of it, but because I'm trying to get my daily step count up.",
       "keyJa": "怖いからではなく、1日の歩数を増やしたいから",
       "expl": "not because A, but because B の B が真の理由。step count =「歩数」。"
      }
     ]
    }
   ]
  },
  {
   "name": "第1問B",
   "unit": "u1",
   "points": 3,
   "plays": 2,
   "intro": "英語を聞き、その内容に最もよく合う絵(の説明)を選びなさい。(各3点・2回まで再生可)【アルファ】",
   "blocks": [
    {
     "script": [
      {
       "sp": "W",
       "text": "Three children are sitting around a small table, each with a different drink. The tallest holds a glass of orange juice, the youngest has a mug with a straw, and the one in the middle is pouring milk from a jug."
      }
     ],
     "questions": [
      {
       "id": "pp21_05",
       "q": "Which description matches what you hear?",
       "choices": [
        "The tallest child has juice; the middle child pours milk from a jug.",
        "The youngest child has juice; the middle child pours milk from a jug.",
        "The tallest child has juice; the middle child drinks milk through a straw.",
        "The tallest child pours milk; the middle child has juice."
       ],
       "answer": 0,
       "keyEn": "The tallest holds a glass of orange juice, ... the one in the middle is pouring milk from a jug.",
       "keyJa": "最も背の高い子がオレンジジュース、真ん中の子が水差しから牛乳を注いでいる",
       "expl": "tallest / youngest / the one in the middle と、飲み物・動作の対応づけ。ストローは youngest。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "The picture shows a bridge over a river. A cyclist is crossing from left to right, a man fishing sits under the bridge, and a boat with a yellow sail passes in the distance."
      }
     ],
     "questions": [
      {
       "id": "pp21_06",
       "q": "Which description matches what you hear?",
       "choices": [
        "A cyclist rides left to right; a man fishes under the bridge; a boat is far away.",
        "A cyclist rides right to left; a man fishes under the bridge; a boat is far away.",
        "A cyclist rides left to right; a man fishes on the bridge; a boat is far away.",
        "A cyclist rides left to right; a man fishes under the bridge; a boat is close by."
       ],
       "answer": 0,
       "keyEn": "A cyclist is crossing from left to right, a man fishing sits under the bridge, a boat passes in the distance.",
       "keyJa": "自転車は左から右へ、釣り人は橋の下、ヨットは遠くを通る",
       "expl": "from left to right の方向、under the bridge の位置、in the distance(遠く)の3点。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "In the garden, a woman wearing gloves is kneeling beside a row of tomato plants, while a man carries a watering can toward a bench where a cat is resting."
      }
     ],
     "questions": [
      {
       "id": "pp21_07",
       "q": "Which description matches what you hear?",
       "choices": [
        "A woman kneels by tomato plants; a man heads toward a bench with a cat.",
        "A woman kneels by tomato plants; a man waters the plants beside a cat.",
        "A man kneels by tomato plants; a woman heads toward a bench with a cat.",
        "A woman stands by tomato plants; a man sits on a bench with a cat."
       ],
       "answer": 0,
       "keyEn": "a woman wearing gloves is kneeling beside a row of tomato plants, while a man carries a watering can toward a bench.",
       "keyJa": "女性が手袋をしてトマトのそばにひざまずき、男性はじょうろを持ってネコのいるベンチへ向かう",
       "expl": "kneeling(ひざまずく)と carries ... toward(〜へ運んでいく)=まだ水やりはしていない点に注意。"
      }
     ]
    }
   ]
  },
  {
   "name": "第2問",
   "unit": "u2",
   "points": 4,
   "plays": 2,
   "intro": "対話を聞き、問いの答えとして最も適切なものを選びなさい。(各4点・2回まで再生可)【アルファ】",
   "blocks": [
    {
     "script": [
      {
       "sp": "M",
       "text": "I'd like to rent a car for three days."
      },
      {
       "sp": "W",
       "text": "It's fifty dollars a day, with insurance at ten dollars a day."
      },
      {
       "sp": "M",
       "text": "I have my own insurance."
      },
      {
       "sp": "W",
       "text": "Then you won't need ours, but there's a twenty-dollar fee for a second driver."
      },
      {
       "sp": "M",
       "text": "My wife will drive too."
      }
     ],
     "questions": [
      {
       "id": "pp21_08",
       "q": "How much will the man pay in total?",
       "choices": [
        "$170",
        "$200",
        "$150",
        "$180"
       ],
       "answer": 0,
       "keyEn": "fifty dollars a day ... a twenty-dollar fee for a second driver.",
       "keyJa": "3日×50ドル+第2運転手料金20ドル=170ドル(保険は不要)",
       "expl": "50×3=150、保険は自前なので不要、second driver の20ドルを加算。200ドルは保険込みの誤算。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Our meeting is at ten tomorrow, right?"
      },
      {
       "sp": "M",
       "text": "I've just got an email. The client asked to move it to the afternoon."
      },
      {
       "sp": "W",
       "text": "I can't do two. I have a dentist appointment."
      },
      {
       "sp": "M",
       "text": "He suggested three or four."
      },
      {
       "sp": "W",
       "text": "Four would be better. I'd be back by then."
      },
      {
       "sp": "M",
       "text": "I'll confirm four."
      }
     ],
     "questions": [
      {
       "id": "pp21_09",
       "q": "What time will the meeting be?",
       "choices": [
        "4:00 p.m.",
        "10:00 a.m.",
        "2:00 p.m.",
        "3:00 p.m."
       ],
       "answer": 0,
       "keyEn": "Four would be better. — I'll confirm four.",
       "keyJa": "歯医者があるので、午後4時に決まった",
       "expl": "10時→午後へ変更→2時は不可→3時か4時→女性は4時を希望。最後の I'll confirm four が決定。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I've found a flat near the university. The rent is six hundred a month, but utilities are extra."
      },
      {
       "sp": "W",
       "text": "How much are utilities?"
      },
      {
       "sp": "M",
       "text": "About ninety. Alternatively, there's a room in a shared house for four-fifty, utilities included."
      },
      {
       "sp": "W",
       "text": "Per month, the shared house is cheaper, but you'd lose your privacy."
      },
      {
       "sp": "M",
       "text": "I'd rather save the money."
      }
     ],
     "questions": [
      {
       "id": "pp21_10",
       "q": "Which will the man choose?",
       "choices": [
        "The room in the shared house.",
        "The flat near the university.",
        "A flat with utilities included.",
        "A dormitory room."
       ],
       "answer": 0,
       "keyEn": "I'd rather save the money.",
       "keyJa": "プライバシーより節約を選び、シェアハウスの部屋にする",
       "expl": "flat=600+90=690、shared house=450(光熱費込み)。I'd rather save the money が決定の合図。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Excuse me, does this train go to Kyoto?"
      },
      {
       "sp": "M",
       "text": "This is the express to Nagoya. For Kyoto, take the local from platform three, or change at Maibara."
      },
      {
       "sp": "W",
       "text": "Is the local slow?"
      },
      {
       "sp": "M",
       "text": "About twenty minutes slower, but you won't need to change."
      },
      {
       "sp": "W",
       "text": "Then I'll take the local."
      }
     ],
     "questions": [
      {
       "id": "pp21_11",
       "q": "What will the woman do?",
       "choices": [
        "Take the local from platform three.",
        "Take this express and change at Maibara.",
        "Ride this express to Nagoya.",
        "Wait for the next express."
       ],
       "answer": 0,
       "keyEn": "Then I'll take the local.",
       "keyJa": "乗り換えが不要なので、3番ホームの各駅停車に乗る",
       "expl": "選択肢が2つ(各駅/乗り換え)提示され、slower だが no change の各駅を選ぶ。"
      }
     ]
    }
   ]
  },
  {
   "name": "第3問",
   "unit": "u3",
   "points": 3,
   "plays": 1,
   "intro": "対話を聞き、問いの答えとして最も適切なものを選びなさい。(各3点・再生は1回のみ)【アルファ】",
   "blocks": [
    {
     "script": [
      {
       "sp": "W",
       "text": "I hear you're moving to Canada next month."
      },
      {
       "sp": "M",
       "text": "That's the plan, though the visa still hasn't come through."
      },
      {
       "sp": "W",
       "text": "Aren't you worried?"
      },
      {
       "sp": "M",
       "text": "A little, but I've already given notice at work."
      }
     ],
     "questions": [
      {
       "id": "pp21_12",
       "q": "What is the man's situation?",
       "choices": [
        "He has resigned although his visa is not ready.",
        "He has already received his visa.",
        "He has changed his mind about moving.",
        "He will keep his current job."
       ],
       "answer": 0,
       "keyEn": "the visa still hasn't come through. ... I've already given notice at work.",
       "keyJa": "ビザはまだ届いていないが、すでに退職の届けを出した",
       "expl": "give notice =「(退職を)通告する」。hasn't come through =「まだ届いていない」。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "How was the hotel?"
      },
      {
       "sp": "W",
       "text": "The view was stunning, and the staff couldn't have been more helpful."
      },
      {
       "sp": "M",
       "text": "And the food?"
      },
      {
       "sp": "W",
       "text": "Well, the view was stunning."
      }
     ],
     "questions": [
      {
       "id": "pp21_13",
       "q": "What does the woman imply about the food?",
       "choices": [
        "It was not very good.",
        "It was excellent.",
        "She did not eat any.",
        "It was too expensive."
       ],
       "answer": 0,
       "keyEn": "Well, the view was stunning.",
       "keyJa": "えーと、眺めは素晴らしかったわ(食事には触れない)",
       "expl": "質問に答えず前の話題に戻るのは、肯定できない=不満の暗示。Well, のためらいも手がかり。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "I'm exhausted. I've been proofreading the report since this morning."
      },
      {
       "sp": "M",
       "text": "Want me to take a look at the second half?"
      },
      {
       "sp": "W",
       "text": "Would you? That would be a lifesaver."
      }
     ],
     "questions": [
      {
       "id": "pp21_14",
       "q": "What will the man do?",
       "choices": [
        "Check part of the report.",
        "Write the whole report.",
        "Take the report to the boss.",
        "Make coffee for the woman."
       ],
       "answer": 0,
       "keyEn": "Want me to take a look at the second half?",
       "keyJa": "後半を見てあげようか(→お願い)",
       "expl": "Want me to ...? は申し出。Would you? That would be a lifesaver. が受諾。lifesaver =「救世主」。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "Did you see the notice? They're raising the cafeteria prices."
      },
      {
       "sp": "W",
       "text": "Again? That's the second time this year."
      },
      {
       "sp": "M",
       "text": "At this rate, I'll be bringing my own lunch."
      }
     ],
     "questions": [
      {
       "id": "pp21_15",
       "q": "What does the man imply?",
       "choices": [
        "He may start preparing his own lunch.",
        "He will complain to the cafeteria manager.",
        "He is happy about the new prices.",
        "He plans to eat out every day."
       ],
       "answer": 0,
       "keyEn": "At this rate, I'll be bringing my own lunch.",
       "keyJa": "この調子だと、お弁当を持参することになりそうだ",
       "expl": "At this rate =「このペースだと」。値上げが続けば自炊弁当に切り替えるという示唆。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "I'm thinking of painting the living room green."
      },
      {
       "sp": "M",
       "text": "Green? Won't it feel dark?"
      },
      {
       "sp": "W",
       "text": "Not if I choose a pale shade and add white curtains."
      },
      {
       "sp": "M",
       "text": "I suppose that could work."
      }
     ],
     "questions": [
      {
       "id": "pp21_16",
       "q": "How does the man feel about the idea?",
       "choices": [
        "Doubtful at first, but willing to accept it.",
        "Strongly opposed from the start.",
        "Excited from the beginning.",
        "Uninterested in the whole matter."
       ],
       "answer": 0,
       "keyEn": "Green? Won't it feel dark? ... I suppose that could work.",
       "keyJa": "最初は暗くならないかと疑ったが、うまくいくかもしれないと認めた",
       "expl": "Won't it ...?(疑念)→ I suppose that could work(渋々の同意)の変化を捉える。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "Our flight was delayed three hours, so we missed our connection."
      },
      {
       "sp": "W",
       "text": "What did the airline do?"
      },
      {
       "sp": "M",
       "text": "They put us in a hotel and gave us meal vouchers."
      },
      {
       "sp": "W",
       "text": "That's better than last time."
      }
     ],
     "questions": [
      {
       "id": "pp21_17",
       "q": "What can be said about the airline's response?",
       "choices": [
        "It was more helpful than on a previous occasion.",
        "It was as poor as it was last time.",
        "It offered nothing to the passengers.",
        "It canceled the passengers' tickets."
       ],
       "answer": 0,
       "keyEn": "They put us in a hotel and gave us meal vouchers. — That's better than last time.",
       "keyJa": "ホテルと食事券を手配してくれ、前回よりましな対応だった",
       "expl": "better than last time =「前回より良い」。hotel と vouchers が具体的な対応。"
      }
     ]
    }
   ]
  },
  {
   "name": "第4問A",
   "unit": "u4",
   "points": 1,
   "plays": 1,
   "intro": "モノローグを聞き、表の空欄①〜④に入るものを選びなさい。(各1点・再生は1回のみ)【アルファ】",
   "blocks": [
    {
     "script": [
      {
       "sp": "N",
       "text": "Welcome to the Lakeside Hotel. The pool is open from six in the morning until nine at night, but this Sunday it will close at six in the evening for a private event. The fitness room is open twenty-four hours a day, but staff are present only until ten p.m. Breakfast is served from seven to ten thirty on weekdays, and one hour later on weekends. The spa opens at noon and closes two hours before the pool normally closes."
      }
     ],
     "questions": [
      {
       "id": "pp21_18",
       "q": "On Sunday, the pool will close at ( ① ).",
       "choices": [
        "6:00 p.m.",
        "9:00 p.m.",
        "7:00 p.m.",
        "10:00 p.m."
       ],
       "answer": 0,
       "keyEn": "this Sunday it will close at six in the evening for a private event.",
       "keyJa": "今週の日曜は貸切のため午後6時に閉まる",
       "expl": "normally(通常)は9時だが Sunday は例外。"
      },
      {
       "id": "pp21_19",
       "q": "Staff are in the fitness room until ( ② ).",
       "choices": [
        "10:00 p.m.",
        "9:00 p.m.",
        "midnight",
        "6:00 a.m."
       ],
       "answer": 0,
       "keyEn": "staff are present only until ten p.m.",
       "keyJa": "スタッフが常駐するのは午後10時まで",
       "expl": "open 24 hours(利用可能)と staff present(スタッフ在室)を区別する。"
      },
      {
       "id": "pp21_20",
       "q": "On weekends, breakfast starts at ( ③ ).",
       "choices": [
        "8:00 a.m.",
        "7:00 a.m.",
        "10:30 a.m.",
        "7:30 a.m."
       ],
       "answer": 0,
       "keyEn": "Breakfast is served from seven ... and one hour later on weekends.",
       "keyJa": "週末の朝食は平日(7時)より1時間遅い8時から",
       "expl": "7:00の1時間後=8:00。"
      },
      {
       "id": "pp21_21",
       "q": "The spa closes at ( ④ ).",
       "choices": [
        "7:00 p.m.",
        "10:00 p.m.",
        "6:00 p.m.",
        "9:00 p.m."
       ],
       "answer": 0,
       "keyEn": "The spa ... closes two hours before the pool normally closes.",
       "keyJa": "スパはプールの通常閉館(9時)の2時間前=7時",
       "expl": "Sunday の特別時間(6時)ではなく normally closes(通常の9時)が基準。"
      }
     ],
     "table": [
      [
       "Facility",
       "Opens",
       "Closes"
      ],
      [
       "Pool (Sunday)",
       "6:00 a.m.",
       "①"
      ],
      [
       "Fitness room (staff)",
       "—",
       "②"
      ],
      [
       "Breakfast (weekends)",
       "③",
       "—"
      ],
      [
       "Spa",
       "12:00",
       "④"
      ]
     ]
    },
    {
     "script": [
      {
       "sp": "N",
       "text": "Here are the morning trains to Riverside. The express leaves at eight ten and takes fifty-five minutes. The local train leaves ten minutes after the express and takes twenty-five minutes longer. The shuttle bus from the station to the stadium leaves at nine twenty, fifteen minutes after the express arrives, and the ride takes twenty-five minutes."
      }
     ],
     "questions": [
      {
       "id": "pp21_22",
       "q": "The express arrives at ( ① ).",
       "choices": [
        "9:05",
        "8:55",
        "9:15",
        "9:00"
       ],
       "answer": 0,
       "keyEn": "The express leaves at eight ten and takes fifty-five minutes.",
       "keyJa": "急行は8:10発で55分かかるので9:05着",
       "expl": "8:10+55分=9:05。"
      },
      {
       "id": "pp21_23",
       "q": "The local train departs at ( ② ).",
       "choices": [
        "8:20",
        "8:10",
        "8:25",
        "8:30"
       ],
       "answer": 0,
       "keyEn": "The local train leaves ten minutes after the express.",
       "keyJa": "各駅停車は急行の10分後=8:20発",
       "expl": "8:10+10分=8:20。"
      },
      {
       "id": "pp21_24",
       "q": "The local train arrives at ( ③ ).",
       "choices": [
        "9:40",
        "9:30",
        "9:35",
        "10:00"
       ],
       "answer": 0,
       "keyEn": "The local train ... takes twenty-five minutes longer.",
       "keyJa": "各駅は急行より25分長い(80分)ので、8:20+80分=9:40着",
       "expl": "55+25=80分。8:20+1時間20分=9:40。"
      },
      {
       "id": "pp21_25",
       "q": "The shuttle bus arrives at the stadium at ( ④ ).",
       "choices": [
        "9:45",
        "9:40",
        "9:50",
        "10:05"
       ],
       "answer": 0,
       "keyEn": "The shuttle bus ... leaves at nine twenty ... the ride takes twenty-five minutes.",
       "keyJa": "シャトルバスは9:20発、25分で9:45着",
       "expl": "9:20+25分=9:45。急行着(9:05)の15分後が出発時刻。"
      }
     ],
     "table": [
      [
       "Train / Bus",
       "Departs",
       "Arrives"
      ],
      [
       "Express",
       "8:10",
       "①"
      ],
      [
       "Local",
       "②",
       "③"
      ],
      [
       "Shuttle bus",
       "9:20",
       "④"
      ]
     ]
    }
   ]
  },
  {
   "name": "第4問B",
   "unit": "u4",
   "points": 4,
   "plays": 1,
   "intro": "4人の発言を聞き、条件に最も合うものを選びなさい。(4点・再生は1回のみ)【アルファ】",
   "blocks": [
    {
     "script": [
      {
       "sp": "M",
       "text": "Number one. This program runs for two weeks in August and costs nothing. No special skills are needed, but there is no transport allowance."
      },
      {
       "sp": "W",
       "text": "Number two. Our program lasts three weeks, and there is no fee. We cover lunch and travel costs, and no special skills are required."
      },
      {
       "sp": "M2",
       "text": "Number three. This is a three-week program with no fee, and travel costs are covered. However, participants need a first-aid certificate."
      },
      {
       "sp": "W2",
       "text": "Number four. This program runs for ten days only. It's free, travel costs are paid, and no skills are needed."
      }
     ],
     "questions": [
      {
       "id": "pp21_26",
       "q": "You want a volunteer program that lasts at least two weeks, is free, pays your travel costs, and requires no special skills. Which program should you choose?",
       "choices": [
        "Number one",
        "Number two",
        "Number three",
        "Number four"
       ],
       "answer": 1,
       "keyEn": "Number two. Three weeks, no fee, lunch and travel covered, no special skills required.",
       "keyJa": "2番=3週間・無料・昼食と交通費支給・特別な技能不要で全条件OK",
       "expl": "1=交通費の支給なし、2=全条件OK、3=救急救命の資格が必要、4=10日間で2週間に満たない。",
       "fix": true
      }
     ]
    }
   ]
  },
  {
   "name": "第5問",
   "unit": "u5",
   "points": 2,
   "plays": 1,
   "intro": "講義を聞き、問いに答えなさい。メモを取りながら聞きましょう。(計15点・再生は1回のみ)【アルファ】",
   "blocks": [
    {
     "script": [
      {
       "sp": "N",
       "text": "Vertical farming means growing crops in stacked layers inside a building, using artificial light and carefully controlled conditions instead of sunlight and soil. In many systems, plants are grown in water containing nutrients, a method called hydroponics. Supporters point out several advantages. First, vertical farms use up to ninety percent less water than traditional farms because the water is recycled. Second, they can be built in or near cities, so food travels a shorter distance and stays fresh. Third, crops are protected from bad weather and insects, so farmers rarely need pesticides. However, there are serious drawbacks. The lights and climate control require large amounts of electricity, which makes the produce expensive. Because of this, most vertical farms grow only leafy greens and herbs, which are light and sell quickly, rather than staple crops such as rice or wheat. Some experts also doubt that vertical farms can be profitable unless electricity comes from cheap renewable sources. For now, vertical farming is best seen as a supplement to, not a replacement for, conventional agriculture."
      }
     ],
     "questions": [
      {
       "id": "pp21_27",
       "q": "What is the main point of the lecture?",
       "choices": [
        "Vertical farming has benefits but high costs, so it can only supplement ordinary farming.",
        "Vertical farming will soon replace all traditional farms around the world.",
        "Vertical farming is harmful to the environment in every possible way.",
        "Vertical farming works best with staple crops such as rice and wheat."
       ],
       "answer": 0,
       "keyEn": "vertical farming is best seen as a supplement to, not a replacement for, conventional agriculture.",
       "keyJa": "垂直農業は従来の農業に取って代わるものではなく、補うものと考えるべき",
       "expl": "利点(First/Second/Third)と欠点(However)を両方述べて、最後に位置づけをまとめている。",
       "points": 3
      },
      {
       "id": "pp21_28",
       "q": "How much less water can vertical farms use than traditional farms?",
       "choices": [
        "Up to ninety percent less.",
        "About ten percent less.",
        "About half as much again.",
        "The same amount."
       ],
       "answer": 0,
       "keyEn": "vertical farms use up to ninety percent less water than traditional farms because the water is recycled.",
       "keyJa": "水を再利用するため、最大90%少ない水で済む",
       "expl": "up to =「最大で〜」。ninety と nineteen を聞き分ける。"
      },
      {
       "id": "pp21_29",
       "q": "Which is NOT mentioned as an advantage of vertical farming?",
       "choices": [
        "Lower electricity costs than ordinary farms.",
        "A big saving of water because it is recycled.",
        "Food grown close to cities so that it stays fresh.",
        "Little need for pesticides because insects stay out."
       ],
       "answer": 0,
       "keyEn": "up to ninety percent less water; built in or near cities; rarely need pesticides.",
       "keyJa": "利点は水の節約・都市近くでの栽培・農薬が少ないこと。電気代は欠点として挙げられた",
       "expl": "NOT 問題。電力はむしろ However 以降で欠点として述べられている。"
      },
      {
       "id": "pp21_30",
       "q": "What is hydroponics?",
       "choices": [
        "Growing plants in water that contains nutrients.",
        "Growing plants in dry sand.",
        "Growing plants under strong sunlight.",
        "Growing plants only in cold weather."
       ],
       "answer": 0,
       "keyEn": "plants are grown in water containing nutrients, a method called hydroponics.",
       "keyJa": "栄養を含む水で植物を育てる方法",
       "expl": "a method called ... が用語の定義部分。soil(土)を使わない点がポイント。"
      },
      {
       "id": "pp21_31",
       "q": "Why is the produce from vertical farms expensive?",
       "choices": [
        "Lights and climate control need a lot of electricity.",
        "Farmers must buy a large amount of pesticides every year.",
        "The crops grow very slowly in water that contains nutrients.",
        "Transport costs are very high because the farms are in cities."
       ],
       "answer": 0,
       "keyEn": "The lights and climate control require large amounts of electricity, which makes the produce expensive.",
       "keyJa": "照明と空調に大量の電力が必要なため",
       "expl": "which makes the produce expensive の which =前の内容全体。pesticides は逆に不要とされている。"
      },
      {
       "id": "pp21_32",
       "q": "Why do most vertical farms grow leafy greens and herbs?",
       "choices": [
        "They are light and sell quickly.",
        "They need more electricity than rice.",
        "They taste better than wheat.",
        "Governments require it."
       ],
       "answer": 0,
       "keyEn": "most vertical farms grow only leafy greens and herbs, which are light and sell quickly.",
       "keyJa": "軽くてすぐ売れるから",
       "expl": "which are light and sell quickly が理由。rice や wheat は staple crops(主食)で対象外。"
      },
      {
       "id": "pp21_33",
       "q": "How does the speaker see vertical farming for now?",
       "choices": [
        "As a supplement to conventional agriculture.",
        "As a complete replacement for it.",
        "As an idea that has already failed.",
        "As a hobby for city dwellers."
       ],
       "answer": 0,
       "keyEn": "For now, vertical farming is best seen as a supplement to, not a replacement for, conventional agriculture.",
       "keyJa": "今のところは従来の農業の代わりではなく補完",
       "expl": "A, not B(A であって B ではない)。For now が「現時点では」を示す。"
      }
     ]
    }
   ]
  },
  {
   "name": "第6問A",
   "unit": "u6",
   "points": 3,
   "plays": 1,
   "intro": "対話を聞き、問いに答えなさい。(各3点・再生は1回のみ)【アルファ】",
   "blocks": [
    {
     "script": [
      {
       "sp": "W",
       "text": "I got two internship offers: a small design studio and a big bank."
      },
      {
       "sp": "M",
       "text": "Which one pays more?"
      },
      {
       "sp": "W",
       "text": "The bank, but it's mostly copying data. At the studio I'd work on real projects, though it's unpaid."
      },
      {
       "sp": "M",
       "text": "Unpaid? Can you afford that?"
      },
      {
       "sp": "W",
       "text": "My parents said they'd help for two months."
      },
      {
       "sp": "M",
       "text": "Which one do you actually want?"
      },
      {
       "sp": "W",
       "text": "The studio. But I worry the bank looks better on a résumé."
      },
      {
       "sp": "M",
       "text": "Honestly, real projects will give you something to show in interviews."
      },
      {
       "sp": "W",
       "text": "That's a good point. I'll email the studio today."
      }
     ],
     "questions": [
      {
       "id": "pp21_34",
       "q": "Why does the man recommend the studio?",
       "choices": [
        "Project work gives her something to talk about in interviews.",
        "The studio pays much more than the bank does each month.",
        "The bank has stopped taking interns for the coming summer.",
        "Her parents work at the studio and can help her there."
       ],
       "answer": 0,
       "keyEn": "real projects will give you something to show in interviews.",
       "keyJa": "実際のプロジェクト経験は、面接で示せる材料になる",
       "expl": "résumé への不安に対する反論。something to show in interviews が理由。"
      },
      {
       "id": "pp21_35",
       "q": "What will the woman do next?",
       "choices": [
        "Contact the design studio today.",
        "Accept the offer from the bank.",
        "Ask her parents for more money.",
        "Look for a third internship."
       ],
       "answer": 0,
       "keyEn": "That's a good point. I'll email the studio today.",
       "keyJa": "今日、スタジオにメールする",
       "expl": "That's a good point. で男性の意見を受け入れ、直後に行動を宣言する。"
      }
     ]
    }
   ]
  },
  {
   "name": "第6問B",
   "unit": "u6",
   "points": 4,
   "plays": 1,
   "intro": "4人の会話を聞き、問いに答えなさい。(各4点・再生は1回のみ)【アルファ】",
   "blocks": [
    {
     "script": [
      {
       "sp": "N",
       "text": "Four students, Ken, Mia, Dan and Sue, are discussing whether volunteering should be a required part of the school curriculum."
      },
      {
       "sp": "M",
       "text": "I'm in favor. Many students would never volunteer on their own, but they'd learn a lot from it."
      },
      {
       "sp": "W",
       "text": "But forced volunteering defeats the purpose. Volunteering should come from the heart."
      },
      {
       "sp": "M2",
       "text": "I partly agree, Mia, but many people start out reluctant and then discover they enjoy it. A requirement can be the first step."
      },
      {
       "sp": "W2",
       "text": "My concern is time. Many of us already have club activities and part-time jobs. Another requirement could be too much."
      },
      {
       "sp": "M",
       "text": "We could count things students already do, like cleaning the school or helping at the festival."
      },
      {
       "sp": "W",
       "text": "That's reasonable. It would feel less forced."
      },
      {
       "sp": "W2",
       "text": "Then I could support it, if the required hours are small."
      }
     ],
     "questions": [
      {
       "id": "pp21_36",
       "q": "Who argues that volunteering should be done by choice?",
       "choices": [
        "Mia",
        "Ken",
        "Dan",
        "Sue"
       ],
       "answer": 0,
       "keyEn": "forced volunteering defeats the purpose. Volunteering should come from the heart.",
       "keyJa": "強制されたボランティアは本末転倒で、心から行うべき、とミアは主張している",
       "expl": "defeat the purpose =「目的を損なう」。Sue の論点は時間の負担、Dan は最初の一歩としての必修化。"
      },
      {
       "id": "pp21_37",
       "q": "What compromise is suggested?",
       "choices": [
        "Counting activities students already do toward a small number of required hours.",
        "Making volunteering a required activity for the whole school year.",
        "Removing all club activities so that students have more time.",
        "Paying students a small amount of money for volunteering."
       ],
       "answer": 0,
       "keyEn": "We could count things students already do ... — if the required hours are small.",
       "keyJa": "すでに行っている活動を、少ない必修時間に数える",
       "expl": "Ken の提案を Mia が賛成し、Sue が if the required hours are small と条件つきで支持。"
      }
     ]
    }
   ]
  }
 ]
};
