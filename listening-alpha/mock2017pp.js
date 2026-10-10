// ============================================================
// 2017年 アルファ 本番形式模試(37問・100点満点)
// ============================================================

window.MOCK_TESTS = window.MOCK_TESTS || {};

window.MOCK_TESTS["2017"] = {
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
       "text": "I'd been planning to cook tonight, but the fridge turned out to be nearly empty, and the supermarket closes at eight, so I'm just going to pick up a pizza on my way home."
      }
     ],
     "questions": [
      {
       "id": "pp17_01",
       "q": "What will the speaker do about dinner?",
       "choices": [
        "Buy a pizza instead of cooking.",
        "Cook with what is in the fridge.",
        "Go shopping at the supermarket after eight.",
        "Eat out with some friends."
       ],
       "answer": 0,
       "keyEn": "so I'm just going to pick up a pizza on my way home.",
       "keyJa": "冷蔵庫がほぼ空で店も閉まるので、帰りにピザを買って帰る",
       "expl": "planning to cook(予定)→ nearly empty(障害)→ pick up a pizza(結論)。pick up は「買って(受け取って)帰る」。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "The concert was supposed to start at seven, but the band's equipment was stuck in traffic, so the doors opened on time and everyone was asked to wait nearly an hour for the first song."
      }
     ],
     "questions": [
      {
       "id": "pp17_02",
       "q": "What happened at the concert?",
       "choices": [
        "The performance began almost an hour late.",
        "The doors opened an hour late.",
        "The concert was canceled.",
        "The band arrived before the audience."
       ],
       "answer": 0,
       "keyEn": "the doors opened on time and everyone was asked to wait nearly an hour for the first song.",
       "keyJa": "開場は定刻だったが、最初の曲まで約1時間待たされた",
       "expl": "遅れたのは doors ではなく演奏の開始。nearly an hour =「1時間近く」。doors opened on time を聞き落とすとワナにはまる。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "Unlike my sister, who finishes a book in a weekend, I read slowly, which is why I only get through about one novel a month, even though I read every night."
      }
     ],
     "questions": [
      {
       "id": "pp17_03",
       "q": "What does the speaker say about his reading?",
       "choices": [
        "He reads steadily but slowly.",
        "He reads faster than his sister.",
        "He reads only at weekends.",
        "He finishes about one novel a week."
       ],
       "answer": 0,
       "keyEn": "I read slowly, ... even though I read every night.",
       "keyJa": "毎晩読むが読むのは遅く、月に小説1冊程度",
       "expl": "Unlike my sister(姉と違って)で比較の向きが決まる。every night と about one novel a month の組み合わせを押さえる。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "I thought I'd lost my wallet on the train, so I called the station, and they said nothing had been handed in. Then I found it in my coat pocket, right where I'd put it that morning."
      }
     ],
     "questions": [
      {
       "id": "pp17_04",
       "q": "What is the speaker's situation now?",
       "choices": [
        "She has found her wallet in her own coat.",
        "Station staff have found her wallet.",
        "She is still searching for her wallet.",
        "She left her wallet at the station."
       ],
       "answer": 0,
       "keyEn": "Then I found it in my coat pocket.",
       "keyJa": "結局、自分のコートのポケットから見つかった",
       "expl": "nothing had been handed in(届け出なし)は駅側の話。Then 以降の展開(ポケットにあった)が最終状態。"
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
       "text": "A girl in a yellow raincoat is crossing a puddle on stepping stones, with a red umbrella resting on her shoulder, while a boy behind her waits with a ball tucked under his arm."
      }
     ],
     "questions": [
      {
       "id": "pp17_05",
       "q": "Which description matches what you hear?",
       "choices": [
        "A girl with an umbrella on her shoulder crosses on stones; a boy behind holds a ball.",
        "A girl with an open umbrella over her head crosses on stones; a boy behind holds a ball.",
        "A girl with an umbrella on her shoulder crosses on stones; a boy ahead of her holds a ball.",
        "A girl with an umbrella on her shoulder crosses on stones; a boy behind her holds an umbrella."
       ],
       "answer": 0,
       "keyEn": "a red umbrella resting on her shoulder, while a boy behind her waits with a ball tucked under his arm.",
       "keyJa": "傘は肩に載せ、後ろの少年は小脇にボールを抱えて待っている",
       "expl": "resting on her shoulder(肩に載せている)/ behind her(後ろ)/ ball under his arm の3点。傘を開いているものや位置が違うものを消す。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "On the shelf there are four books: the thickest one is leaning against a vase, the thinnest one lies flat on top of the other three, and a small clock stands at the right end."
      }
     ],
     "questions": [
      {
       "id": "pp17_06",
       "q": "Which description matches what you hear?",
       "choices": [
        "The thinnest book lies on top of the others, and a clock is on the right.",
        "The thickest book lies on top of the others, and a clock is on the right.",
        "The thinnest book leans on a vase, and a clock is on the left.",
        "The thinnest book lies on top of the others, and a vase is on the right."
       ],
       "answer": 0,
       "keyEn": "the thinnest one lies flat on top of the other three, and a small clock stands at the right end.",
       "keyJa": "いちばん薄い本は他の3冊の上に平らに置かれ、右端に小さな時計がある",
       "expl": "thickest / thinnest の最上級の取り違えに注意。lies flat on top(上に平らに)と clock at the right end の位置を確認。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Two cyclists are stopped at a red light. The one on the left is wearing a helmet and checking a map on her phone, while the one on the right has no helmet and is drinking from a bottle."
      }
     ],
     "questions": [
      {
       "id": "pp17_07",
       "q": "Which description matches what you hear?",
       "choices": [
        "The helmeted cyclist on the left checks a map; the one on the right drinks.",
        "The helmeted cyclist on the right checks a map; the one on the left drinks.",
        "Both cyclists wear helmets; the one on the left checks a map.",
        "The cyclist on the left drinks; the one on the right has no helmet."
       ],
       "answer": 0,
       "keyEn": "The one on the left is wearing a helmet and checking a map, while the one on the right has no helmet and is drinking.",
       "keyJa": "左はヘルメットで地図を確認、右はヘルメットなしで水分補給",
       "expl": "left / right と、helmet の有無、map / bottle の行動の3要素を同時に対応づける。"
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
       "sp": "W",
       "text": "Shall we split the taxi fare?"
      },
      {
       "sp": "M",
       "text": "It's twenty-four dollars, plus a three-dollar tip."
      },
      {
       "sp": "W",
       "text": "Let's split it three ways with Anna."
      },
      {
       "sp": "M",
       "text": "Anna left already, so it's just the two of us."
      }
     ],
     "questions": [
      {
       "id": "pp17_08",
       "q": "How much will each of them pay?",
       "choices": [
        "$13.50",
        "$9",
        "$12",
        "$27"
       ],
       "answer": 0,
       "keyEn": "twenty-four dollars, plus a three-dollar tip ... just the two of us.",
       "keyJa": "運賃24ドル+チップ3ドル=27ドルを2人で割る",
       "expl": "(24+3)÷2=13.5。3人割(9ドル)はアンナが帰ったので不成立。チップを忘れた12ドルもワナ。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I'd like to move my dentist appointment from Tuesday at ten."
      },
      {
       "sp": "W",
       "text": "I can offer Wednesday at ten or Thursday at four."
      },
      {
       "sp": "M",
       "text": "I work until five on Thursday. Could I come on Wednesday at nine?"
      },
      {
       "sp": "W",
       "text": "Nine isn't available, but ten is."
      },
      {
       "sp": "M",
       "text": "Ten, then."
      }
     ],
     "questions": [
      {
       "id": "pp17_09",
       "q": "When is the man's new appointment?",
       "choices": [
        "Wednesday at ten",
        "Tuesday at ten",
        "Wednesday at nine",
        "Thursday at four"
       ],
       "answer": 0,
       "keyEn": "Nine isn't available, but ten is. — Ten, then.",
       "keyJa": "水曜9時は不可なので、水曜10時に決定",
       "expl": "Thursday は仕事で消え、Wednesday at nine は断られる。Ten, then. が決定の合図。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "How do I get to the science museum? I'm going this Sunday."
      },
      {
       "sp": "M",
       "text": "Take the number twelve bus to City Hall, then walk for five minutes."
      },
      {
       "sp": "W",
       "text": "I heard the number twelve doesn't run on Sundays."
      },
      {
       "sp": "M",
       "text": "You're right. Then take the subway to Central Station. It's about ten minutes on foot from there."
      }
     ],
     "questions": [
      {
       "id": "pp17_10",
       "q": "How will the woman get to the museum?",
       "choices": [
        "By subway and then on foot.",
        "By bus number twelve and then on foot.",
        "By bus number twelve to Central Station.",
        "On foot from City Hall."
       ],
       "answer": 0,
       "keyEn": "Then take the subway to Central Station. It's about ten minutes on foot from there.",
       "keyJa": "日曜は12番バスが走らないので、地下鉄+徒歩10分",
       "expl": "最初の案(バス+徒歩5分)は Sunday の事情で取り消される。Then ... が代替案の合図。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "Two coffees and a slice of cheesecake to share, please."
      },
      {
       "sp": "W",
       "text": "I'm afraid the cheesecake is sold out, but we have apple pie."
      },
      {
       "sp": "M",
       "text": "Apple pie is fine. Actually, make it one coffee and one tea. My friend doesn't drink coffee."
      }
     ],
     "questions": [
      {
       "id": "pp17_11",
       "q": "What will the man order?",
       "choices": [
        "A coffee, a tea and apple pie.",
        "Two coffees and apple pie.",
        "A coffee, a tea and cheesecake.",
        "Two teas and apple pie."
       ],
       "answer": 0,
       "keyEn": "Apple pie is fine. Actually, make it one coffee and one tea.",
       "keyJa": "チーズケーキの代わりにアップルパイ、飲み物はコーヒー1つと紅茶1つ",
       "expl": "2か所の変更(cheesecake→apple pie、2 coffees→coffee+tea)を最後まで追う。Actually が訂正の合図。"
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
       "text": "Did you finish the group presentation slides?"
      },
      {
       "sp": "M",
       "text": "Mostly. Jake was supposed to add the graphs, but he hasn't replied to any of my messages."
      },
      {
       "sp": "W",
       "text": "Typical. Should I just do them?"
      }
     ],
     "questions": [
      {
       "id": "pp17_12",
       "q": "What is the woman suggesting?",
       "choices": [
        "That she make the graphs herself.",
        "That Jake apologize to the group.",
        "That the presentation be canceled.",
        "That they report Jake to the teacher."
       ],
       "answer": 0,
       "keyEn": "Should I just do them?",
       "keyJa": "(ジェイクの代わりに)私がグラフを作ろうか?",
       "expl": "them = the graphs。Should I ...? は申し出。Typical(いつものことね)は不満を示すが、行動の提案は自分でやること。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "How did your interview go?"
      },
      {
       "sp": "W",
       "text": "They said they'd contact me within a week. They also said that to the last three candidates, who are still waiting a month later."
      }
     ],
     "questions": [
      {
       "id": "pp17_13",
       "q": "How does the woman feel about the result?",
       "choices": [
        "She doubts she will hear back soon.",
        "She is sure she got the job.",
        "She has already been rejected.",
        "She plans to call them tomorrow."
       ],
       "answer": 0,
       "keyEn": "They also said that to the last three candidates, who are still waiting a month later.",
       "keyJa": "前の3人にも同じことを言って、1か月経っても連絡がないらしい",
       "expl": "直接「期待していない」とは言わず、他の応募者の例で悲観的な見通しを伝える含意の問題。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "This café is so quiet. Why isn't it busier?"
      },
      {
       "sp": "M",
       "text": "It used to be packed until they raised the prices last spring."
      }
     ],
     "questions": [
      {
       "id": "pp17_14",
       "q": "Why is the café quiet now?",
       "choices": [
        "Higher prices have driven customers away.",
        "It has just opened.",
        "It is about to close for the day.",
        "People prefer quiet places."
       ],
       "answer": 0,
       "keyEn": "It used to be packed until they raised the prices last spring.",
       "keyJa": "昨春の値上げまでは満席だった",
       "expl": "used to be packed(以前は満席)+ until ...(〜までは)で、値上げが転機とわかる。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I'm thinking of switching from physics to economics."
      },
      {
       "sp": "W",
       "text": "Isn't it a bit late? You're already in your third year."
      },
      {
       "sp": "M",
       "text": "That's why I'm asking. Would the extra year be worth it?"
      }
     ],
     "questions": [
      {
       "id": "pp17_15",
       "q": "What is the man worried about?",
       "choices": [
        "Whether changing majors would delay his graduation.",
        "Whether physics is too difficult.",
        "Whether he can afford his tuition.",
        "Whether he will get good grades in economics."
       ],
       "answer": 0,
       "keyEn": "Would the extra year be worth it?",
       "keyJa": "(専攻変更で)1年余分にかかる価値があるだろうか",
       "expl": "third year での変更→ extra year =卒業が遅れる懸念。That's why I'm asking が悩みの核心を示す。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "I'm sorry I'm late. The highway was closed."
      },
      {
       "sp": "M",
       "text": "No worries. The meeting hasn't started. The boss is stuck on the same road."
      },
      {
       "sp": "W",
       "text": "Then I could have taken my time."
      }
     ],
     "questions": [
      {
       "id": "pp17_16",
       "q": "What can be inferred from the conversation?",
       "choices": [
        "The meeting will begin later than planned.",
        "The meeting has already finished.",
        "The woman has missed the meeting.",
        "The boss arrived before everyone else."
       ],
       "answer": 0,
       "keyEn": "The meeting hasn't started. The boss is stuck on the same road.",
       "keyJa": "会議はまだ始まっておらず、上司も同じ道で足止めされている",
       "expl": "上司が来ないと会議は始められない、という推論。could have taken my time =「急がなくてもよかった」。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "Would you like to try the new Thai restaurant, or stick with our usual place?"
      },
      {
       "sp": "W",
       "text": "I'm up for something new, but I can't handle spicy food."
      },
      {
       "sp": "M",
       "text": "They have milder dishes. I checked the menu."
      },
      {
       "sp": "W",
       "text": "Then let's go."
      }
     ],
     "questions": [
      {
       "id": "pp17_17",
       "q": "What will they do?",
       "choices": [
        "Eat at the Thai restaurant.",
        "Go to their usual restaurant.",
        "Cook dinner at home.",
        "Look for a different restaurant."
       ],
       "answer": 0,
       "keyEn": "They have milder dishes. — Then let's go.",
       "keyJa": "辛くない料理もあるので、タイ料理店に行く",
       "expl": "I can't handle spicy food(懸念)が mild dishes で解消され、Then let's go で決定。"
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
       "text": "Welcome to Sunrise Language School's orientation. At nine, you'll receive your student cards at the front desk. At nine forty-five, there's a campus tour. It was planned for the garden, but since it's raining, it will start in the main hall and move around indoors. At eleven, we have the placement test in Room 204. Please bring a pen, not a pencil. Lunch will be at twelve fifteen, fifteen minutes later than the printed schedule, in the cafeteria on the third floor."
      }
     ],
     "questions": [
      {
       "id": "pp17_18",
       "q": "The student cards are given out at ( ① ).",
       "choices": [
        "the front desk",
        "the main hall",
        "Room 204",
        "the cafeteria"
       ],
       "answer": 0,
       "keyEn": "At nine, you'll receive your student cards at the front desk.",
       "keyJa": "学生証は受付で配られる",
       "expl": "冒頭の情報。front desk を聞き取る。"
      },
      {
       "id": "pp17_19",
       "q": "The 9:45 activity ( ② ) is a:",
       "choices": [
        "campus tour",
        "placement test",
        "lunch",
        "garden walk"
       ],
       "answer": 0,
       "keyEn": "At nine forty-five, there's a campus tour.",
       "keyJa": "9時45分はキャンパスツアー",
       "expl": "雨でも活動内容は変わらず場所だけ屋内に変更。garden walk は誤答。"
      },
      {
       "id": "pp17_20",
       "q": "The placement test is in ( ③ ).",
       "choices": [
        "Room 204",
        "Room 402",
        "Room 214",
        "the third-floor cafeteria"
       ],
       "answer": 0,
       "keyEn": "the placement test in Room 204.",
       "keyJa": "実力テストは204号室",
       "expl": "数字の入れ替え(204 / 402 / 214)に注意。"
      },
      {
       "id": "pp17_21",
       "q": "Lunch starts at ( ④ ).",
       "choices": [
        "12:15",
        "12:00",
        "12:30",
        "1:15"
       ],
       "answer": 0,
       "keyEn": "Lunch will be at twelve fifteen, fifteen minutes later than the printed schedule.",
       "keyJa": "昼食は印刷された予定より15分遅い12時15分",
       "expl": "印刷は12:00、15分遅れ=12:15。"
      }
     ],
     "table": [
      [
       "Time",
       "Activity",
       "Place"
      ],
      [
       "9:00",
       "Student cards",
       "①"
      ],
      [
       "9:45",
       "②",
       "Main hall"
      ],
      [
       "11:00",
       "Placement test",
       "③"
      ],
      [
       "④",
       "Lunch",
       "Cafeteria"
      ]
     ]
    },
    {
     "script": [
      {
       "sp": "N",
       "text": "Here are the ticket prices for the city subway. A single trip costs two dollars fifty. A day pass costs twice that. A weekly pass costs four times as much as a day pass. A monthly pass costs ten dollars less than four weekly passes. Students pay half price for the monthly pass."
      }
     ],
     "questions": [
      {
       "id": "pp17_22",
       "q": "A day pass costs ( ① ).",
       "choices": [
        "$5",
        "$7.50",
        "$10",
        "$4"
       ],
       "answer": 0,
       "keyEn": "A day pass costs twice that.",
       "keyJa": "1日券は1回券(2.50ドル)の2倍=5ドル",
       "expl": "twice that の that =直前の two fifty。2.5×2=5。"
      },
      {
       "id": "pp17_23",
       "q": "A weekly pass costs ( ② ).",
       "choices": [
        "$20",
        "$10",
        "$15",
        "$25"
       ],
       "answer": 0,
       "keyEn": "A weekly pass costs four times as much as a day pass.",
       "keyJa": "週間券は1日券の4倍=20ドル",
       "expl": "5×4=20。"
      },
      {
       "id": "pp17_24",
       "q": "A monthly pass costs ( ③ ).",
       "choices": [
        "$70",
        "$80",
        "$60",
        "$90"
       ],
       "answer": 0,
       "keyEn": "A monthly pass costs ten dollars less than four weekly passes.",
       "keyJa": "月間券は週間券4枚分(80ドル)より10ドル安い=70ドル",
       "expl": "20×4=80、80−10=70。80ドルがワナ。"
      },
      {
       "id": "pp17_25",
       "q": "A student monthly pass costs ( ④ ).",
       "choices": [
        "$35",
        "$40",
        "$30",
        "$70"
       ],
       "answer": 0,
       "keyEn": "Students pay half price for the monthly pass.",
       "keyJa": "学生は月間券が半額=35ドル",
       "expl": "70÷2=35。③の答えを使う3段階計算。"
      }
     ],
     "table": [
      [
       "Ticket",
       "Price"
      ],
      [
       "Single trip",
       "$2.50"
      ],
      [
       "Day pass",
       "①"
      ],
      [
       "Weekly pass",
       "②"
      ],
      [
       "Monthly pass",
       "③"
      ],
      [
       "Student monthly pass",
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
       "text": "Number one. The course starts on August third and runs for two weeks. Tuition is six hundred dollars, and the textbook is forty dollars. Homestay is available."
      },
      {
       "sp": "W",
       "text": "Number two. It starts on August tenth and lasts three weeks. Tuition is seven hundred eighty dollars, plus ninety dollars for the textbook. Homestay is available."
      },
      {
       "sp": "M2",
       "text": "Number three. It begins on August first and lasts four weeks. Tuition is eight hundred fifty dollars, and the textbook costs another eighty. Homestay is available."
      },
      {
       "sp": "W2",
       "text": "Number four. This course starts on July twenty-eighth and lasts three weeks. Tuition is seven hundred dollars, and the textbook is fifty. Homestay is available."
      }
     ],
     "questions": [
      {
       "id": "pp17_26",
       "q": "You want a summer course that starts in August, lasts at least three weeks, costs no more than nine hundred dollars including the textbook, and offers a homestay. Which course should you choose?",
       "choices": [
        "Number one",
        "Number two",
        "Number three",
        "Number four"
       ],
       "answer": 1,
       "keyEn": "Number two. August tenth, three weeks, seven hundred eighty plus ninety for the textbook.",
       "keyJa": "2番=8月10日開始・3週間・780+90=870ドル・ホームステイ可",
       "expl": "1=2週間で短い、2=全条件OK、3=850+80=930ドルで予算超過、4=7月28日開始で8月ではない。",
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
       "text": "Coral reefs cover less than one percent of the ocean floor, yet they support about a quarter of all marine species. In recent decades, however, reefs around the world have suffered from mass bleaching. Bleaching happens when the water becomes too warm. Corals live in partnership with tiny algae that give them both color and food. Under heat stress, the corals expel the algae and turn white. A bleached coral is not dead, but it is starving, and if the warm water lasts more than a few weeks, it often dies. The Great Barrier Reef suffered severe bleaching in 2016 and again in 2017, leaving almost no time for recovery, which normally takes about ten years. Scientists are testing several remedies. Some are breeding heat-resistant corals in laboratories, while others spray a fine mist above reefs to reflect sunlight. Both approaches are expensive and can only protect small areas. Most researchers therefore agree that, while such techniques may buy time, the most effective step is to reduce the greenhouse gas emissions that are warming the oceans in the first place."
      }
     ],
     "questions": [
      {
       "id": "pp17_27",
       "q": "What is the main point of the lecture?",
       "choices": [
        "Warming oceans threaten reefs, and cutting emissions matters more than technical fixes.",
        "Bleaching is harmless to reefs because corals quickly recover within a few weeks.",
        "Scientists have already found a cheap way to protect every reef in the world.",
        "Coral reefs are found mainly in cold water near the north and south poles."
       ],
       "answer": 0,
       "keyEn": "the most effective step is to reduce the greenhouse gas emissions that are warming the oceans.",
       "keyJa": "最も効果的なのは、海を温めている温室効果ガスの排出削減",
       "expl": "while such techniques may buy time(技術は時間稼ぎにすぎない)の後ろに結論。「安価」「全てを守る」は逆。",
       "points": 3
      },
      {
       "id": "pp17_28",
       "q": "What share of marine species live on coral reefs?",
       "choices": [
        "About a quarter.",
        "Less than one percent.",
        "About half.",
        "About ten percent."
       ],
       "answer": 0,
       "keyEn": "they support about a quarter of all marine species.",
       "keyJa": "海洋生物種の約4分の1を支えている",
       "expl": "less than one percent は海底面積に占める割合。面積と種の割合を取り違えさせるワナ。"
      },
      {
       "id": "pp17_29",
       "q": "Which is NOT mentioned as part of the bleaching process?",
       "choices": [
        "The algae multiply and cover the coral.",
        "The coral expels its algae.",
        "The coral turns white.",
        "Warm water puts stress on the coral."
       ],
       "answer": 0,
       "keyEn": "Under heat stress, the corals expel the algae and turn white.",
       "keyJa": "熱ストレスでサンゴは藻を吐き出して白くなる",
       "expl": "藻が「増える」という説明はない。expel(追い出す)と turn white、heat stress の3点が述べられた内容。"
      },
      {
       "id": "pp17_30",
       "q": "What is true about a bleached coral?",
       "choices": [
        "It may survive if the warm period is short.",
        "It is already dead and cannot be saved by anyone any more.",
        "It no longer needs any food from the algae that once lived in it.",
        "It always recovers completely within a few days of the water cooling."
       ],
       "answer": 0,
       "keyEn": "A bleached coral is not dead, but it is starving, and if the warm water lasts more than a few weeks, it often dies.",
       "keyJa": "白化したサンゴはまだ死んではいないが飢えており、暖かい水が数週間以上続くと死ぬことが多い",
       "expl": "not dead but starving + 数週間を超えると死ぬ、という条件つきの内容。裏返せば短期間なら生き延びる可能性がある。"
      },
      {
       "id": "pp17_31",
       "q": "Why was the Great Barrier Reef's situation serious?",
       "choices": [
        "Two severe bleachings came in successive years.",
        "Its recovery takes only a few weeks.",
        "It lost a quarter of its species in 2016.",
        "Scientists stopped studying it."
       ],
       "answer": 0,
       "keyEn": "severe bleaching in 2016 and again in 2017, leaving almost no time for recovery, which normally takes about ten years.",
       "keyJa": "2016年と2017年に連続して深刻な白化が起き、通常10年かかる回復の時間がなかった",
       "expl": "again in 2017 =「翌年また」。normally takes about ten years との対比で深刻さが伝わる。"
      },
      {
       "id": "pp17_32",
       "q": "What is a drawback of breeding corals and spraying mist?",
       "choices": [
        "Both are costly and protect only small areas.",
        "Both of them harm the very corals that they are trying to protect.",
        "Both have already failed in several large trials in the ocean.",
        "Both require very cold water in order to work properly."
       ],
       "answer": 0,
       "keyEn": "Both approaches are expensive and can only protect small areas.",
       "keyJa": "どちらも費用が高く、守れるのは狭い範囲だけ",
       "expl": "expensive と small areas の2点。「害がある」「失敗した」は述べられていない。"
      },
      {
       "id": "pp17_33",
       "q": "What do most researchers think is the best step?",
       "choices": [
        "Reducing greenhouse gas emissions.",
        "Breeding more corals in laboratories.",
        "Spraying mist above every reef.",
        "Moving corals to colder oceans."
       ],
       "answer": 0,
       "keyEn": "the most effective step is to reduce the greenhouse gas emissions.",
       "keyJa": "最も効果的な手段は温室効果ガスの排出削減",
       "expl": "such techniques(研究室での繁殖や噴霧)は時間稼ぎにすぎず、根本対策は排出削減。"
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
       "text": "I got the acceptance letter for the exchange program in Canada."
      },
      {
       "sp": "M",
       "text": "Congratulations! Are you going?"
      },
      {
       "sp": "W",
       "text": "I don't know. It would be a year away, and my parents are worried about the cost."
      },
      {
       "sp": "M",
       "text": "Doesn't the program include a scholarship?"
      },
      {
       "sp": "W",
       "text": "Only for half of the tuition. The rest, plus living costs, would be on us."
      },
      {
       "sp": "M",
       "text": "What does your teacher say?"
      },
      {
       "sp": "W",
       "text": "She says the experience would improve my English far more than a year of classes here."
      },
      {
       "sp": "M",
       "text": "Then maybe a shorter option? There's a summer program in Vancouver."
      },
      {
       "sp": "W",
       "text": "Hmm, six weeks would be much cheaper. But I'm not sure I'd improve as much."
      }
     ],
     "questions": [
      {
       "id": "pp17_34",
       "q": "What is the main obstacle for the woman?",
       "choices": [
        "The money needed beyond the partial scholarship.",
        "She did not pass the entrance test for the exchange program.",
        "Her teacher strongly opposes the idea of studying abroad.",
        "She dislikes Canada and its cold winter weather."
       ],
       "answer": 0,
       "keyEn": "Only for half of the tuition. The rest, plus living costs, would be on us.",
       "keyJa": "奨学金は授業料の半分だけで、残りと生活費は自己負担",
       "expl": "scholarship が半額だけ=費用が最大の壁。先生は逆に賛成している(far more than a year of classes here)。"
      },
      {
       "id": "pp17_35",
       "q": "How does the woman feel about the summer program?",
       "choices": [
        "Attracted by the cost but doubtful about the benefit.",
        "She has already signed up.",
        "She rejects it because it is too expensive.",
        "She thinks it is better than the exchange program."
       ],
       "answer": 0,
       "keyEn": "six weeks would be much cheaper. But I'm not sure I'd improve as much.",
       "keyJa": "6週間なら安いが、同じだけ上達するかは自信がない",
       "expl": "much cheaper(利点)と But I'm not sure(疑問)の両面。But 以降に本音が出る。"
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
       "text": "Four students, Ken, Mia, Dan and Sue, are discussing whether the school cafeteria should serve only vegetarian meals one day a week."
      },
      {
       "sp": "M",
       "text": "I think it's a great idea. Producing meat uses a lot of water, so even one day would help the environment."
      },
      {
       "sp": "W",
       "text": "I agree it's good for the planet, but some students rely on the cafeteria for protein. For athletes, a meat-free day could be a real problem."
      },
      {
       "sp": "M2",
       "text": "Vegetarian meals can have plenty of protein, Mia, like beans, eggs and tofu. The real issue is whether students will actually eat them or just throw them away."
      },
      {
       "sp": "W2",
       "text": "Exactly. If the food is wasted, we lose the environmental benefit. We should ask students which dishes they'd like before we start."
      },
      {
       "sp": "M",
       "text": "That makes sense, Sue. We could also make it flexible: keep one meat dish, but make vegetarian options the main choice."
      },
      {
       "sp": "W",
       "text": "I'd be happy with that, as long as athletes still have a choice."
      }
     ],
     "questions": [
      {
       "id": "pp17_36",
       "q": "Who is worried that athletes might not get enough protein?",
       "choices": [
        "Mia",
        "Ken",
        "Dan",
        "Sue"
       ],
       "answer": 0,
       "keyEn": "For athletes, a meat-free day could be a real problem.",
       "keyJa": "アスリートには肉なしの日は大問題になりうる、とミアは心配している",
       "expl": "Mia の some students rely on the cafeteria for protein が根拠。Dan はその心配に豆・卵・豆腐で応じている。"
      },
      {
       "id": "pp17_37",
       "q": "What do the students seem to agree on in the end?",
       "choices": [
        "Keeping one meat dish while making vegetarian options the main choice.",
        "Serving only vegetarian food in the cafeteria every day of the week.",
        "Dropping the idea completely and keeping the menu as it is now.",
        "Letting the athletes eat their meals in a separate room with meat."
       ],
       "answer": 0,
       "keyEn": "keep one meat dish, but make vegetarian options the main choice. — as long as athletes still have a choice.",
       "keyJa": "肉料理を1品残しつつ、菜食メニューを中心にする",
       "expl": "Ken の折衷案を Mia が as long as ... の条件つきで受け入れる。Sue の事前アンケート案も添えられているが、最終合意は折衷案。"
      }
     ]
    }
   ]
  }
 ]
};
