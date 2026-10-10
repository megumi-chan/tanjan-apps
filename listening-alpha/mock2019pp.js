// ============================================================
// 2019年 アルファ 本番形式模試(37問・100点満点)
// ============================================================

window.MOCK_TESTS = window.MOCK_TESTS || {};

window.MOCK_TESTS["2019"] = {
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
       "text": "I was hoping to finish the report tonight, but my laptop battery died and the charger is at the office, so I'll just have to get up early tomorrow and do it before work."
      }
     ],
     "questions": [
      {
       "id": "pp19_01",
       "q": "What will the speaker do?",
       "choices": [
        "Write the report tomorrow morning.",
        "Finish the report tonight.",
        "Go to the office to get the charger tonight.",
        "Ask a coworker to write it."
       ],
       "answer": 0,
       "keyEn": "I'll just have to get up early tomorrow and do it before work.",
       "keyJa": "充電器が会社にあるので、明日早起きして出勤前にやる",
       "expl": "I was hoping(希望)→ died(障害)→ I'll have to(結論)。結論は明朝。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Contrary to popular belief, tomatoes shouldn't be kept in the refrigerator, since the cold destroys their flavor, which is why I always leave mine on the kitchen counter."
      }
     ],
     "questions": [
      {
       "id": "pp19_02",
       "q": "What does the speaker say about tomatoes?",
       "choices": [
        "They taste better at room temperature.",
        "They stay fresh longer in the fridge.",
        "They should be eaten cold.",
        "They lose their color on the counter."
       ],
       "answer": 0,
       "keyEn": "the cold destroys their flavor, which is why I always leave mine on the kitchen counter.",
       "keyJa": "冷やすと風味が損なわれるので、常にキッチンカウンターに置く",
       "expl": "Contrary to popular belief(通説に反して)で通説(冷蔵)を否定。room temperature は counter の言い換え。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "The new teacher is nothing like the last one. Where Mr. Hart used to lecture for the whole period, Ms. Lee talks for ten minutes and then makes us solve problems in pairs."
      }
     ],
     "questions": [
      {
       "id": "pp19_03",
       "q": "How is Ms. Lee's class different from Mr. Hart's?",
       "choices": [
        "Students spend most of the time working in pairs.",
        "She lectures for longer than Mr. Hart did.",
        "She never gives students any problems.",
        "Students explain things to the whole class."
       ],
       "answer": 0,
       "keyEn": "Ms. Lee talks for ten minutes and then makes us solve problems in pairs.",
       "keyJa": "リー先生は10分話した後、ペアで問題を解かせる",
       "expl": "Where A, B(Aの一方でB)の対比構文。ハート先生=ずっと講義、リー先生=10分+ペア作業。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "I'd have gone to the dance if my cousin hadn't needed a ride to the airport, but by the time I got back, it was already over."
      }
     ],
     "questions": [
      {
       "id": "pp19_04",
       "q": "What happened to the speaker?",
       "choices": [
        "She missed the dance because she drove her cousin.",
        "She arrived late at the dance but still enjoyed it a lot.",
        "She took her cousin with her to the dance that night.",
        "Her cousin missed the flight because she arrived late."
       ],
       "answer": 0,
       "keyEn": "I'd have gone to the dance if my cousin hadn't needed a ride to the airport.",
       "keyJa": "いとこを空港へ送ったので、ダンスには行けなかった",
       "expl": "仮定法過去完了(I'd have gone if ... hadn't ...)=「実際は行かなかった」。it was already over で確定。"
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
       "text": "A boy wearing headphones sits on the steps in front of a library, reading a thick book, while an older woman beside him is knitting with a ball of red yarn in her lap."
      }
     ],
     "questions": [
      {
       "id": "pp19_05",
       "q": "Which description matches what you hear?",
       "choices": [
        "A boy with headphones reads on the steps; a woman beside him knits.",
        "A boy with headphones knits on the steps; a woman beside him reads.",
        "A boy without headphones reads on the steps; a woman beside him knits.",
        "A boy with headphones reads inside the library; a woman beside him knits."
       ],
       "answer": 0,
       "keyEn": "A boy wearing headphones sits on the steps in front of a library, reading a thick book.",
       "keyJa": "ヘッドホンの少年が図書館前の階段で本を読み、隣の年配女性が編み物をしている",
       "expl": "誰が reading で誰が knitting か、headphones の有無、steps in front of(建物の外)の3点を確認。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "At the market stall, a man is weighing apples on a scale, a woman beside him is pointing at the oranges in the next crate, and a sign above them says half price after five."
      }
     ],
     "questions": [
      {
       "id": "pp19_06",
       "q": "Which description matches what you hear?",
       "choices": [
        "A man weighs apples; a woman points at oranges; a sign says half price after five.",
        "A man weighs oranges; a woman points at apples; a sign says half price after five.",
        "A man weighs apples; a woman points at oranges; a sign says half price before five.",
        "A man points at apples; a woman weighs oranges; a sign says half price after five."
       ],
       "answer": 0,
       "keyEn": "a man is weighing apples, a woman beside him is pointing at the oranges, a sign says half price after five.",
       "keyJa": "男性がリンゴの重さを量り、女性がオレンジを指さし、看板は「5時以降半額」",
       "expl": "weigh / point at と apples / oranges の組合せ、after / before five の取り違えに注意。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Two dogs are standing at a gate. The large one is wagging its tail, while the small one, which is wearing a coat, looks back at the person holding its leash."
      }
     ],
     "questions": [
      {
       "id": "pp19_07",
       "q": "Which description matches what you hear?",
       "choices": [
        "The large dog wags its tail; the small dog in a coat looks back at its owner.",
        "The small dog wags its tail; the large dog in a coat looks back at its owner.",
        "The large dog wags its tail; the small dog in a coat looks at the gate.",
        "Both dogs wear coats; the large one looks back at its owner."
       ],
       "answer": 0,
       "keyEn": "The large one is wagging its tail, while the small one, which is wearing a coat, looks back at the person holding its leash.",
       "keyJa": "大きい犬は尻尾を振り、コートを着た小さい犬は飼い主を振り返っている",
       "expl": "large / small と、尻尾を振る犬・コートを着た犬・振り返る犬の対応づけ。"
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
       "text": "A single ticket to the zoo is eighteen dollars."
      },
      {
       "sp": "W",
       "text": "We're four people. Is there a group rate?"
      },
      {
       "sp": "M",
       "text": "Groups of four or more get twenty percent off, but only on weekdays."
      },
      {
       "sp": "W",
       "text": "Today is Saturday."
      },
      {
       "sp": "M",
       "text": "Then it's full price, but children under six get in free."
      },
      {
       "sp": "W",
       "text": "One of ours is five."
      }
     ],
     "questions": [
      {
       "id": "pp19_08",
       "q": "How much will the group pay in total?",
       "choices": [
        "$54",
        "$72",
        "$57.60",
        "$43.20"
       ],
       "answer": 0,
       "keyEn": "Then it's full price, but children under six get in free. — One of ours is five.",
       "keyJa": "土曜は割引なしで18ドル。5歳の子は無料なので3人分=54ドル",
       "expl": "団体割引は weekdays only で不適用。free の子が1人いるので 18×3=54。72は4人全額、57.60は誤って2割引した額。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Where shall we meet for the study group?"
      },
      {
       "sp": "M",
       "text": "The library's group rooms are fully booked until Thursday."
      },
      {
       "sp": "W",
       "text": "What about the café near the gym? It's noisy, though."
      },
      {
       "sp": "M",
       "text": "How about my place? It's a ten-minute bike ride from campus."
      },
      {
       "sp": "W",
       "text": "I don't have a bike. Let's try the student lounge."
      },
      {
       "sp": "M",
       "text": "Isn't it closed for renovation?"
      },
      {
       "sp": "W",
       "text": "It reopened yesterday."
      }
     ],
     "questions": [
      {
       "id": "pp19_09",
       "q": "Where will they study?",
       "choices": [
        "In the student lounge.",
        "In a library group room.",
        "At the café near the gym.",
        "At the man's apartment."
       ],
       "answer": 0,
       "keyEn": "Let's try the student lounge. — It reopened yesterday.",
       "keyJa": "改装は昨日終わって再開しているので、学生ラウンジで勉強する",
       "expl": "図書館(満室)、カフェ(うるさい)、自宅(自転車がない)を順に消去。closed の懸念も It reopened で解消。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "The bus to the stadium leaves at six fifteen."
      },
      {
       "sp": "W",
       "text": "The game starts at seven. How long is the ride?"
      },
      {
       "sp": "M",
       "text": "About forty minutes, but a road is closed, so add twenty."
      },
      {
       "sp": "W",
       "text": "Then we'd arrive at seven fifteen. Let's take the six o'clock bus."
      },
      {
       "sp": "M",
       "text": "It's already full. We could take the five forty-five."
      },
      {
       "sp": "W",
       "text": "OK, that one, then."
      }
     ],
     "questions": [
      {
       "id": "pp19_10",
       "q": "Which bus will they take?",
       "choices": [
        "The five forty-five bus.",
        "The six o'clock bus.",
        "The six fifteen bus.",
        "The seven o'clock bus."
       ],
       "answer": 0,
       "keyEn": "We could take the five forty-five. — OK, that one, then.",
       "keyJa": "6時のバスは満席なので、5時45分のバスに乗る",
       "expl": "6:15発では 40+20=60分で7:15着=遅刻。6:00は full。最後に合意した 5:45 が答え。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I'd like the grilled salmon."
      },
      {
       "sp": "W",
       "text": "It comes with either rice or potatoes."
      },
      {
       "sp": "M",
       "text": "Potatoes. And no butter, please. I'm allergic."
      },
      {
       "sp": "W",
       "text": "We'd need to prepare it separately, so it will take an extra ten minutes."
      },
      {
       "sp": "M",
       "text": "That's fine."
      }
     ],
     "questions": [
      {
       "id": "pp19_11",
       "q": "What does the man order?",
       "choices": [
        "Grilled salmon with potatoes and no butter.",
        "Grilled salmon with rice and butter.",
        "Grilled salmon with potatoes and butter.",
        "Rice with no butter and no fish."
       ],
       "answer": 0,
       "keyEn": "Potatoes. And no butter, please. I'm allergic.",
       "keyJa": "ポテト付きで、アレルギーのためバターなしのサーモンのグリル",
       "expl": "either rice or potatoes から potatoes を選択。no butter が追加条件。extra ten minutes は待ち時間で注文内容ではない。"
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
       "text": "Did you read the email about the new parking rules?"
      },
      {
       "sp": "M",
       "text": "I read the first line, then I fell asleep."
      },
      {
       "sp": "W",
       "text": "Well, we'll be fined if we park in front of the gym."
      }
     ],
     "questions": [
      {
       "id": "pp19_12",
       "q": "What can be inferred about the man?",
       "choices": [
        "He does not know the details of the rules.",
        "He has already been fined.",
        "He plans to park in front of the gym.",
        "He wrote the email himself."
       ],
       "answer": 0,
       "keyEn": "I read the first line, then I fell asleep.",
       "keyJa": "最初の1行を読んで寝てしまった",
       "expl": "ほとんど読んでいない=詳細を知らない、という推論。罰金の話は女性が教えている。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I can't believe the tickets were that expensive."
      },
      {
       "sp": "W",
       "text": "Well, the front-row seats cost twice as much as the cheap ones."
      },
      {
       "sp": "M",
       "text": "You told me you'd bought the cheap ones!"
      },
      {
       "sp": "W",
       "text": "I said I'd bought the best ones."
      }
     ],
     "questions": [
      {
       "id": "pp19_13",
       "q": "What caused the misunderstanding?",
       "choices": [
        "The man thought she had bought cheaper seats.",
        "The woman forgot to buy the tickets.",
        "The tickets were sold out.",
        "The man wanted front-row seats."
       ],
       "answer": 0,
       "keyEn": "You told me you'd bought the cheap ones! — I said I'd bought the best ones.",
       "keyJa": "男性は安い席だと思っていたが、女性は最良の席を買ったと言っていた",
       "expl": "cheap と best の食い違い。互いの記憶の違いが誤解の原因。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "I've been meaning to call my grandmother all week."
      },
      {
       "sp": "M",
       "text": "It's already Friday."
      },
      {
       "sp": "W",
       "text": "I know, I know. She'll say I forgot about her."
      },
      {
       "sp": "M",
       "text": "Call her now. She'd rather get a short call than none."
      }
     ],
     "questions": [
      {
       "id": "pp19_14",
       "q": "What does the man advise the woman to do?",
       "choices": [
        "Phone her grandmother right away, even briefly.",
        "Wait until the weekend so that she has more time to talk.",
        "Write her grandmother a long letter instead of calling.",
        "Visit her grandmother in person sometime next week."
       ],
       "answer": 0,
       "keyEn": "Call her now. She'd rather get a short call than none.",
       "keyJa": "今すぐ電話しなさい。短くても、電話がないよりいい",
       "expl": "would rather A than B =「Bよりむしろ A」。short call でも良い、という励まし。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "Do you want to join us for lunch?"
      },
      {
       "sp": "W",
       "text": "I'd love to, but I've got a deadline at one, and I haven't even started the last section."
      },
      {
       "sp": "M",
       "text": "How long will it take?"
      },
      {
       "sp": "W",
       "text": "Two hours at least. Save me a seat for dinner instead."
      }
     ],
     "questions": [
      {
       "id": "pp19_15",
       "q": "What will the woman do?",
       "choices": [
        "Skip lunch to work and meet them for dinner.",
        "Join them for lunch after finishing.",
        "Skip both lunch and dinner.",
        "Give up on the deadline."
       ],
       "answer": 0,
       "keyEn": "Two hours at least. Save me a seat for dinner instead.",
       "keyJa": "昼は仕事に集中し、代わりに夕食に参加する",
       "expl": "I'd love to, but ... で断り、instead が代案(夕食)の合図。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Why did you take the long route? We're going to be late."
      },
      {
       "sp": "M",
       "text": "The GPS said the shortcut had a traffic jam."
      },
      {
       "sp": "W",
       "text": "The GPS was wrong. I just came that way and it was clear."
      },
      {
       "sp": "M",
       "text": "Oh. I should have trusted my own judgment."
      }
     ],
     "questions": [
      {
       "id": "pp19_16",
       "q": "What does the man regret?",
       "choices": [
        "Relying on the GPS instead of his own judgment.",
        "Leaving home too late in the morning to avoid the traffic.",
        "Taking the shortcut that the woman had recommended.",
        "Not buying a newer GPS that shows the traffic jams."
       ],
       "answer": 0,
       "keyEn": "I should have trusted my own judgment.",
       "keyJa": "自分の判断を信じるべきだった",
       "expl": "should have + 過去分詞 =「〜すべきだったのに」(後悔)。GPSに従ってしまったことを悔やんでいる。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I'm thinking of getting a dog."
      },
      {
       "sp": "W",
       "text": "They need a lot of attention. You're away from home ten hours a day."
      },
      {
       "sp": "M",
       "text": "My neighbor said she could walk it at lunchtime."
      },
      {
       "sp": "W",
       "text": "Hmm, that might work, if she's reliable."
      }
     ],
     "questions": [
      {
       "id": "pp19_17",
       "q": "What does the woman think of the man's plan?",
       "choices": [
        "It could work if the neighbor is dependable.",
        "She is strongly against it.",
        "She will walk the dog herself.",
        "She believes dogs need little attention."
       ],
       "answer": 0,
       "keyEn": "that might work, if she's reliable.",
       "keyJa": "彼女が信頼できるなら、うまくいくかもしれない",
       "expl": "might work, if ... =条件つきの容認。最初の懸念(長時間不在)は隣人の協力で解決の可能性。"
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
       "text": "Welcome aboard the Harbor City bus tour. We'll leave the station at nine thirty. Our first stop is the castle, where we'll stay for forty-five minutes. Our second stop was supposed to be the aquarium, but it's closed for cleaning today, so we'll visit the botanical garden instead and spend one hour there. After lunch at twelve thirty, we'll go to the maritime museum, where the guided tour begins at two. Please be back on the bus by three fifteen. We return to the station at four."
      }
     ],
     "questions": [
      {
       "id": "pp19_18",
       "q": "The visit to the castle lasts ( ① ).",
       "choices": [
        "45 minutes",
        "1 hour",
        "30 minutes",
        "90 minutes"
       ],
       "answer": 0,
       "keyEn": "Our first stop is the castle, where we'll stay for forty-five minutes.",
       "keyJa": "お城の滞在は45分",
       "expl": "forty-five minutes。2番目の1時間と混同しない。"
      },
      {
       "id": "pp19_19",
       "q": "The second stop is ( ② ).",
       "choices": [
        "the botanical garden",
        "the aquarium",
        "the maritime museum",
        "the castle"
       ],
       "answer": 0,
       "keyEn": "it's closed for cleaning today, so we'll visit the botanical garden instead.",
       "keyJa": "水族館は清掃で休館、代わりに植物園",
       "expl": "supposed to be(予定)と instead(変更後)を区別。"
      },
      {
       "id": "pp19_20",
       "q": "The guided tour at the museum begins at ( ③ ).",
       "choices": [
        "2:00",
        "2:30",
        "3:00",
        "1:30"
       ],
       "answer": 0,
       "keyEn": "the maritime museum, where the guided tour begins at two.",
       "keyJa": "博物館のガイドツアーは2時開始",
       "expl": "昼食12:30と混同しない。"
      },
      {
       "id": "pp19_21",
       "q": "The passengers must be back on the bus by ( ④ ).",
       "choices": [
        "3:15",
        "3:00",
        "4:00",
        "4:15"
       ],
       "answer": 0,
       "keyEn": "Please be back on the bus by three fifteen. We return to the station at four.",
       "keyJa": "バスへの戻り時刻は3時15分(駅着は4時)",
       "expl": "back on the bus(戻る)と return to the station(駅に到着)の2つの時刻を区別。"
      }
     ],
     "table": [
      [
       "Stop",
       "Place",
       "Time"
      ],
      [
       "1",
       "Castle",
       "①"
      ],
      [
       "2",
       "②",
       "1 hour"
      ],
      [
       "3",
       "Maritime museum",
       "Tour at ③"
      ],
      [
       "Return",
       "Back on the bus by",
       "④"
      ]
     ]
    },
    {
     "script": [
      {
       "sp": "N",
       "text": "A recipe for four people uses two hundred grams of flour, four hundred milliliters of milk, and three eggs. For six people, use one and a half times as much of everything, but since you can't use half an egg, round the eggs up. For two people, use half the flour and half the milk, but use two eggs, not one and a half."
      }
     ],
     "questions": [
      {
       "id": "pp19_22",
       "q": "For six people, you need ( ① ) of flour.",
       "choices": [
        "300 g",
        "250 g",
        "400 g",
        "600 g"
       ],
       "answer": 0,
       "keyEn": "For six people, use one and a half times as much of everything.",
       "keyJa": "6人分の小麦粉は1.5倍=300g",
       "expl": "200×1.5=300。"
      },
      {
       "id": "pp19_23",
       "q": "For two people, you need ( ② ) of milk.",
       "choices": [
        "200 ml",
        "100 ml",
        "300 ml",
        "800 ml"
       ],
       "answer": 0,
       "keyEn": "For two people, use half the flour and half the milk.",
       "keyJa": "2人分の牛乳は半分=200ml",
       "expl": "400÷2=200。"
      },
      {
       "id": "pp19_24",
       "q": "For six people, you need ( ③ ) eggs.",
       "choices": [
        "5",
        "4",
        "6",
        "9"
       ],
       "answer": 0,
       "keyEn": "use one and a half times as much of everything, but ... round the eggs up.",
       "keyJa": "6人分の卵は 3×1.5=4.5 を切り上げて5個",
       "expl": "round up =「切り上げる」。4.5→5。"
      },
      {
       "id": "pp19_25",
       "q": "For two people, you need ( ④ ) eggs.",
       "choices": [
        "2",
        "1",
        "3",
        "4"
       ],
       "answer": 0,
       "keyEn": "use two eggs, not one and a half.",
       "keyJa": "2人分の卵は(1.5ではなく)2個",
       "expl": "not one and a half =「1個半ではなく」。"
      }
     ],
     "table": [
      [
       "Ingredient",
       "4 people",
       "6 people",
       "2 people"
      ],
      [
       "Flour",
       "200 g",
       "①",
       "100 g"
      ],
      [
       "Milk",
       "400 ml",
       "600 ml",
       "②"
      ],
      [
       "Eggs",
       "3",
       "③",
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
       "text": "Number one. This tutor is free from eight thirty on weekdays. A lesson costs twenty-two dollars for forty minutes, and the first lesson is free."
      },
      {
       "sp": "W",
       "text": "Number two. I'm available after nine on weekdays. A fifty-minute lesson costs twenty-eight dollars, and the first lesson is free."
      },
      {
       "sp": "M2",
       "text": "Number three. I'm available after eight on weekdays. A fifty-minute lesson costs twenty-five dollars, and your first lesson is free."
      },
      {
       "sp": "W2",
       "text": "Number four. I teach only on weekends. A one-hour lesson is twenty dollars, and the first lesson is free."
      }
     ],
     "questions": [
      {
       "id": "pp19_26",
       "q": "You want an online English tutor who is available after eight p.m. on weekdays, charges no more than twenty-five dollars per lesson, gives lessons of at least fifty minutes, and offers a free first lesson. Which tutor should you choose?",
       "choices": [
        "Number one",
        "Number two",
        "Number three",
        "Number four"
       ],
       "answer": 2,
       "keyEn": "Number three. Available after eight on weekdays, twenty-five dollars for fifty minutes, first lesson free.",
       "keyJa": "3番=平日8時以降・50分25ドル・初回無料で全条件を満たす",
       "expl": "1=40分で短い、2=28ドルで予算超過、3=全条件OK(ちょうど25ドルは no more than に含まれる)、4=週末のみ。",
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
       "text": "Since the first satellite was launched in 1957, thousands of rockets and satellites have been sent into orbit. Many of them are now useless, and together with fragments from collisions, they form what is known as space debris. Scientists estimate that more than one hundred million pieces larger than one millimeter are orbiting Earth. This might sound harmless, but objects in orbit travel at about seven kilometers per second, many times faster than a bullet, so even a tiny paint chip can damage a spacecraft. In 2009, an active communications satellite collided with an abandoned Russian satellite, creating thousands of new fragments. The danger is that collisions create more debris, which causes more collisions, a chain reaction sometimes called the Kessler syndrome. To reduce the risk, new rules require satellites to be removed from orbit within twenty-five years after their missions end. Some companies are also developing cleaner spacecraft that use nets or robotic arms to capture old satellites. However, such missions are costly, and nobody has yet agreed on who should pay for them."
      }
     ],
     "questions": [
      {
       "id": "pp19_27",
       "q": "What is the main point of the lecture?",
       "choices": [
        "Space debris is a growing danger, and solutions are still limited and costly.",
        "Satellites are no longer needed in space, so they are being removed.",
        "Space debris will disappear on its own soon because it burns up in the air.",
        "Only large objects in orbit are dangerous to the spacecraft of today."
       ],
       "answer": 0,
       "keyEn": "such missions are costly, and nobody has yet agreed on who should pay for them.",
       "keyJa": "宇宙ごみは危険だが、対策はまだ限られ費用もかかる",
       "expl": "危険の説明(前半)+対策の限界(However 以降)で全体をまとめる。",
       "points": 3
      },
      {
       "id": "pp19_28",
       "q": "How many pieces of debris larger than one millimeter are estimated to be in orbit?",
       "choices": [
        "Over one hundred million.",
        "About ten thousand.",
        "Around one million.",
        "About seven thousand."
       ],
       "answer": 0,
       "keyEn": "more than one hundred million pieces larger than one millimeter.",
       "keyJa": "1ミリ超の破片は1億個以上と推定される",
       "expl": "one hundred million の桁を正確に。thousands は衝突で生じた破片数など別の数字。"
      },
      {
       "id": "pp19_29",
       "q": "Why can even a tiny paint chip damage a spacecraft?",
       "choices": [
        "Objects in orbit move so fast that small pieces can do harm.",
        "Paint chips in orbit are made of strong and heavy metal.",
        "Spacecraft are made of very thin material that breaks easily.",
        "Paint chips explode on contact with the surface of a spacecraft."
       ],
       "answer": 0,
       "keyEn": "objects in orbit travel at about seven kilometers per second, ... so even a tiny paint chip can damage a spacecraft.",
       "keyJa": "軌道上の物体は非常に高速なので、小さな破片でも損傷を与える",
       "expl": "so(だから)の前が理由(高速)。many times faster than a bullet はその速さの比喩。"
      },
      {
       "id": "pp19_30",
       "q": "What happened in 2009?",
       "choices": [
        "A working satellite hit an abandoned one, creating many fragments.",
        "A rocket returned to Earth and landed safely after its mission.",
        "Two abandoned satellites burned up as they fell back to Earth.",
        "A new international law ended all rocket launches for a year."
       ],
       "answer": 0,
       "keyEn": "an active communications satellite collided with an abandoned Russian satellite, creating thousands of new fragments.",
       "keyJa": "稼働中の通信衛星が廃棄された衛星と衝突し、数千の破片が生じた",
       "expl": "active と abandoned の組合せ。衝突が新たな破片(debris)を生む例。"
      },
      {
       "id": "pp19_31",
       "q": "What is the Kessler syndrome?",
       "choices": [
        "A chain reaction in which collisions create debris that causes more collisions.",
        "A disease that affects astronauts who stay in orbit for a long time.",
        "A rule that limits how many satellites a country may launch.",
        "A method of capturing old satellites with nets or robotic arms."
       ],
       "answer": 0,
       "keyEn": "collisions create more debris, which causes more collisions, a chain reaction.",
       "keyJa": "衝突が破片を生み、その破片がさらに衝突を引き起こす連鎖反応",
       "expl": "which causes more collisions の which は前の節全体を受ける。chain reaction =「連鎖反応」。"
      },
      {
       "id": "pp19_32",
       "q": "What do the new rules require?",
       "choices": [
        "Removing satellites from orbit within twenty-five years after their missions end.",
        "Launching fewer than ten satellites each year from any one country.",
        "Painting every satellite a different color so it can be tracked.",
        "Keeping all satellites in orbit forever so that nothing is wasted."
       ],
       "answer": 0,
       "keyEn": "new rules require satellites to be removed from orbit within twenty-five years after their missions end.",
       "keyJa": "任務終了後25年以内に衛星を軌道から除去することを求める",
       "expl": "within twenty-five years after their missions end の起点は任務終了時。"
      },
      {
       "id": "pp19_33",
       "q": "What is a problem with the cleaner spacecraft?",
       "choices": [
        "They are expensive, and no one has agreed who should pay.",
        "They are too small to capture large satellites with their nets.",
        "They create even more debris than the satellites they remove.",
        "They have already solved the problem, so no money is needed."
       ],
       "answer": 0,
       "keyEn": "such missions are costly, and nobody has yet agreed on who should pay for them.",
       "keyJa": "費用が高く、誰が負担するか合意ができていない",
       "expl": "costly と nobody has agreed の2点。「より多くの破片を作る」とは述べていない。"
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
       "sp": "M",
       "text": "Have you decided which club to join? The deadline is Friday."
      },
      {
       "sp": "W",
       "text": "I'm stuck between the debate club and the robotics club."
      },
      {
       "sp": "M",
       "text": "Debate looks good on university applications."
      },
      {
       "sp": "W",
       "text": "But I'm not great at speaking in front of people. Robotics is more my style, though the team meets four days a week."
      },
      {
       "sp": "M",
       "text": "That's a lot. Debate meets only twice."
      },
      {
       "sp": "W",
       "text": "True, and I need time for my part-time job. Maybe debate would suit my schedule better, and speaking is something I should practice anyway."
      },
      {
       "sp": "M",
       "text": "Why not sit in on both on Monday?"
      },
      {
       "sp": "W",
       "text": "Good idea. I'll decide after that."
      }
     ],
     "questions": [
      {
       "id": "pp19_34",
       "q": "Why is the woman hesitant about the robotics club?",
       "choices": [
        "It meets too often for her schedule.",
        "She dislikes working in a team.",
        "It looks bad on applications.",
        "The deadline has already passed."
       ],
       "answer": 0,
       "keyEn": "the team meets four days a week. — I need time for my part-time job.",
       "keyJa": "週4日の活動で、アルバイトの時間が取れなくなる",
       "expl": "robotics は自分に向いている(利点)が、four days a week と part-time job が障害。"
      },
      {
       "id": "pp19_35",
       "q": "What will the woman do first?",
       "choices": [
        "Attend a session of each club.",
        "Join the debate club immediately.",
        "Quit her part-time job.",
        "Ask the teacher to extend the deadline."
       ],
       "answer": 0,
       "keyEn": "Why not sit in on both on Monday? — Good idea. I'll decide after that.",
       "keyJa": "月曜に両方の活動を見学してから決める",
       "expl": "sit in on =「見学する」。Good idea. が提案の受け入れ、I'll decide after that が順序を示す。"
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
       "text": "Four students, Ken, Mia, Dan and Sue, are discussing whether phones should be banned during lunch breaks."
      },
      {
       "sp": "M",
       "text": "I support a ban. At lunch everyone stares at a screen instead of talking, and the cafeteria has gone silent."
      },
      {
       "sp": "W",
       "text": "I don't think a ban is realistic. Many of us use lunch to contact our parents or check train delays."
      },
      {
       "sp": "M2",
       "text": "I see Mia's point, but there are ways around that. We could allow calls and messages but ban games and videos."
      },
      {
       "sp": "W2",
       "text": "That would be hard to enforce. Teachers can't check every screen. I'd rather have phone-free tables, where people who want to talk can sit together."
      },
      {
       "sp": "M",
       "text": "Phone-free tables sound like a good start. If they're popular, we could expand them."
      },
      {
       "sp": "W",
       "text": "I'd support that, since nobody is forced."
      },
      {
       "sp": "M2",
       "text": "Me too, though we should review it after a month."
      }
     ],
     "questions": [
      {
       "id": "pp19_36",
       "q": "Who thinks that restricting only some phone uses would be hard to enforce?",
       "choices": [
        "Sue",
        "Ken",
        "Mia",
        "Dan"
       ],
       "answer": 0,
       "keyEn": "That would be hard to enforce. Teachers can't check every screen.",
       "keyJa": "教師が全員の画面を確認できないので実施が難しい、とスーは言っている",
       "expl": "Dan の「通話・メッセージは可、ゲーム・動画は不可」案に対する Sue の反論。"
      },
      {
       "id": "pp19_37",
       "q": "What do the students agree to try?",
       "choices": [
        "Phone-free tables, with a review after a month.",
        "A complete ban on phones at school.",
        "Allowing all phone uses at lunch.",
        "A ban on games and videos only."
       ],
       "answer": 0,
       "keyEn": "Phone-free tables sound like a good start. — I'd support that. — we should review it after a month.",
       "keyJa": "スマホ禁止テーブルを試し、1か月後に見直す",
       "expl": "Ken の提案に Mia が賛成し、Dan が review を付け足す。全面禁止や部分禁止(Dan 案)は却下。"
      }
     ]
    }
   ]
  }
 ]
};
