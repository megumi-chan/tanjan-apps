// ============================================================
// 2020年 アルファ 本番形式模試(37問・100点満点)
// ============================================================

window.MOCK_TESTS = window.MOCK_TESTS || {};

window.MOCK_TESTS["2020"] = {
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
       "sp": "W",
       "text": "I'd normally walk to the gym, but with the wind chill below zero, I've decided to take the bus, even though it means a ten-minute wait at a stop with no shelter."
      }
     ],
     "questions": [
      {
       "id": "pp20_01",
       "q": "What has the speaker decided to do?",
       "choices": [
        "Take the bus in spite of the wait.",
        "Walk as usual because the bus is slow.",
        "Skip the gym and stay indoors today.",
        "Wait inside a shelter for a taxi."
       ],
       "answer": 0,
       "keyEn": "I've decided to take the bus, even though it means a ten-minute wait.",
       "keyJa": "風が冷たいので、待ち時間があってもバスに乗ることにした",
       "expl": "even though(〜だが)の前が決定、後ろが欠点。normally walk は普段の習慣で、今日の決定ではない。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "The restaurant promised our table would be ready in fifteen minutes, but it's been forty-five, so we're leaving and trying the place across the street."
      }
     ],
     "questions": [
      {
       "id": "pp20_02",
       "q": "What are the speakers going to do?",
       "choices": [
        "Eat at a different restaurant.",
        "Wait another fifteen minutes for a table.",
        "Ask this restaurant to pay them back.",
        "Go home and cook dinner themselves."
       ],
       "answer": 0,
       "keyEn": "so we're leaving and trying the place across the street.",
       "keyJa": "待たされたので、通りの向かいの店に行く",
       "expl": "fifteen → forty-five の差で約束違反。we're leaving ... trying the place across the street が結論。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Everyone told me the book was too difficult to read in a week, but I managed it by reading on the train, which turned a dull commute into my favorite part of the day."
      }
     ],
     "questions": [
      {
       "id": "pp20_03",
       "q": "What does the speaker say about reading on the train?",
       "choices": [
        "It made her commute more enjoyable.",
        "It made the book too hard to finish.",
        "It was her least favorite activity.",
        "It took her more than a week."
       ],
       "answer": 0,
       "keyEn": "which turned a dull commute into my favorite part of the day.",
       "keyJa": "退屈な通勤時間が、一日で一番好きな時間に変わった",
       "expl": "turn A into B =「AをBに変える」。dull(退屈な)→ favorite の変化がポイント。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "It wasn't the music I objected to. It was the volume, which made it impossible to hold a conversation, so I left the party early."
      }
     ],
     "questions": [
      {
       "id": "pp20_04",
       "q": "Why did the speaker leave the party early?",
       "choices": [
        "He could not talk with people over the noise.",
        "He disliked the kind of music being played.",
        "He was bored by the other guests.",
        "The party was ending at midnight."
       ],
       "answer": 0,
       "keyEn": "It wasn't the music I objected to. It was the volume.",
       "keyJa": "反対したのは音楽ではなく音量で、会話ができなかったから",
       "expl": "It wasn't A. It was B.(Aではなく B)の強調構文。music を理由にする選択肢はワナ。"
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
       "text": "A girl is standing on a ladder, hanging a paper lantern from a tree branch, while a boy at the bottom holds a box of more lanterns and a dog sleeps beside the ladder."
      }
     ],
     "questions": [
      {
       "id": "pp20_05",
       "q": "Which description matches what you hear?",
       "choices": [
        "A girl hangs a lantern from the ladder; a boy below holds a box; a dog sleeps nearby.",
        "A boy hangs a lantern from the ladder; a girl below holds a box; a dog sleeps nearby.",
        "A girl hangs a lantern from the ladder; a boy below holds a box; a dog is barking.",
        "A girl hangs a lantern from the ground; a boy on the ladder holds a box."
       ],
       "answer": 0,
       "keyEn": "A girl is standing on a ladder, hanging a paper lantern, while a boy at the bottom holds a box.",
       "keyJa": "少女がはしごの上でちょうちんを吊るし、下で少年が箱を持ち、犬がそばで眠っている",
       "expl": "上(ladder)と下(at the bottom)の役割分担、犬の状態(sleeps)を確認。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "On the desk there is an open laptop, a mug with steam rising from it, and a stack of papers held down by a stapler. A plant sits at the left end of the desk."
      }
     ],
     "questions": [
      {
       "id": "pp20_06",
       "q": "Which description matches what you hear?",
       "choices": [
        "A laptop is open, a hot mug sits by it, papers are weighed down, a plant is on the left.",
        "A laptop is closed, a hot mug sits by it, papers are weighed down, a plant is on the left.",
        "A laptop is open, a cold mug sits by it, papers are weighed down, a plant is on the left.",
        "A laptop is open, a hot mug sits by it, papers are scattered, a plant is on the right."
       ],
       "answer": 0,
       "keyEn": "an open laptop, a mug with steam rising from it, a stack of papers held down by a stapler.",
       "keyJa": "開いたノートパソコン、湯気の立つマグ、ホチキスで押さえた書類の山、左端に植物",
       "expl": "open / closed、steam(熱い)/ cold、held down(押さえてある)/ scattered、left / right の4点が分かれ目。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "A woman is waiting at a crosswalk with a stroller, while on the other side of the road, a man in a yellow vest is holding up a stop sign for the cars."
      }
     ],
     "questions": [
      {
       "id": "pp20_07",
       "q": "Which description matches what you hear?",
       "choices": [
        "A woman with a stroller waits; a man in a vest stops the cars.",
        "A woman with a stroller stops the cars; a man in a vest waits.",
        "A woman with a bicycle waits; a man in a vest stops the cars.",
        "A woman with a stroller waits; a man in a vest directs the traffic with a flag."
       ],
       "answer": 0,
       "keyEn": "A woman is waiting at a crosswalk with a stroller, while a man in a yellow vest is holding up a stop sign.",
       "keyJa": "ベビーカーの女性が横断歩道で待ち、黄色いベストの男性が停止の標識でくるまを止めている",
       "expl": "waiting と holding up a stop sign の役割分担、stroller と bicycle の取り違えに注意。"
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
       "text": "Our flight is at nine fifteen, and boarding closes forty minutes before departure."
      },
      {
       "sp": "W",
       "text": "The airport is an hour's drive away, and we need thirty minutes for check-in and security before boarding closes."
      },
      {
       "sp": "M",
       "text": "So when do we have to leave home?"
      },
      {
       "sp": "W",
       "text": "Let me work it out. I'll set the alarm for that time, and no later."
      }
     ],
     "questions": [
      {
       "id": "pp20_08",
       "q": "By what time at the latest should they leave home?",
       "choices": [
        "7:05",
        "7:45",
        "8:05",
        "6:35"
       ],
       "answer": 0,
       "keyEn": "boarding closes forty minutes before departure ... an hour's drive ... thirty minutes for check-in and security.",
       "keyJa": "搭乗締切は8時35分。その30分前(8:05)に空港着、さらに1時間前の7時5分に家を出る",
       "expl": "9:15−40分=8:35。8:35−30分=8:05(空港着)。8:05−1時間=7:05。7:45は搭乗締切を忘れた値、8:05は空港着の時刻。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "I'd like to book a table for six at seven on Saturday."
      },
      {
       "sp": "M",
       "text": "We only seat parties of six or more in the private room, which has a thirty-dollar minimum per person."
      },
      {
       "sp": "W",
       "text": "Hmm, that's more than we planned. Is there a table in the main room?"
      },
      {
       "sp": "M",
       "text": "The main room is full at seven, but we have space at eight fifteen."
      },
      {
       "sp": "W",
       "text": "Eight fifteen is fine."
      }
     ],
     "questions": [
      {
       "id": "pp20_09",
       "q": "What will the woman do?",
       "choices": [
        "Reserve a main-room table for eight fifteen.",
        "Book the private room for seven.",
        "Book a main-room table for seven.",
        "Cancel the reservation altogether."
       ],
       "answer": 0,
       "keyEn": "Is there a table in the main room? — we have space at eight fifteen. — Eight fifteen is fine.",
       "keyJa": "個室は予算オーバーなので、メインルームの8時15分に予約する",
       "expl": "private room は minimum per person が高く却下。main room は7時は満席で、8:15で合意。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "My phone charger isn't working."
      },
      {
       "sp": "W",
       "text": "Is it still under warranty? You bought it in March, didn't you?"
      },
      {
       "sp": "M",
       "text": "That was last March, over a year ago, and the warranty is only one year."
      },
      {
       "sp": "W",
       "text": "Then you'll have to buy a new one, but I know a shop where chargers are half price on Fridays."
      },
      {
       "sp": "M",
       "text": "Today is Friday!"
      }
     ],
     "questions": [
      {
       "id": "pp20_10",
       "q": "What will the man probably do?",
       "choices": [
        "Buy a new charger at a discount today.",
        "Get a free replacement under warranty.",
        "Repair the charger by himself.",
        "Wait until next Friday to buy one."
       ],
       "answer": 0,
       "keyEn": "Then you'll have to buy a new one, but ... half price on Fridays. — Today is Friday!",
       "keyJa": "保証期間(1年)を過ぎているので、今日(金曜)の半額セールで新品を買う",
       "expl": "last March(昨年の3月)で保証切れ。half price on Fridays + Today is Friday! がつながる。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Excuse me, where is the lost-and-found?"
      },
      {
       "sp": "M",
       "text": "It's on the second floor, but the elevator is out of order. Take the stairs at the east end."
      },
      {
       "sp": "W",
       "text": "Is that the end near the cafeteria?"
      },
      {
       "sp": "M",
       "text": "No, the west end is near the cafeteria. The east end is by the main entrance."
      }
     ],
     "questions": [
      {
       "id": "pp20_11",
       "q": "Where should the woman take the stairs?",
       "choices": [
        "Near the main entrance.",
        "Near the cafeteria.",
        "Next to the elevator.",
        "At the west end."
       ],
       "answer": 0,
       "keyEn": "No, the west end is near the cafeteria. The east end is by the main entrance.",
       "keyJa": "階段は東端、つまり正面入口のそば(食堂は西端)",
       "expl": "east end = main entrance。女性の推測(cafeteria 側)は No で否定される。"
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
       "sp": "M",
       "text": "Did you hear the café on Maple Street is closing?"
      },
      {
       "sp": "W",
       "text": "Really? I thought it was thriving."
      },
      {
       "sp": "M",
       "text": "It was. But the rent doubled, and the owner says it's no longer worth staying open."
      }
     ],
     "questions": [
      {
       "id": "pp20_12",
       "q": "Why is the café closing?",
       "choices": [
        "The rent has become too high.",
        "Too few customers come in.",
        "The owner wants to retire.",
        "A new café opened nearby."
       ],
       "answer": 0,
       "keyEn": "the rent doubled, and the owner says it's no longer worth staying open.",
       "keyJa": "家賃が倍になり、続ける価値がなくなった",
       "expl": "thriving(繁盛している)を It was で認めてから But で理由を述べる。客数は理由ではない。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "You've been quiet all evening. Is something wrong?"
      },
      {
       "sp": "M",
       "text": "I've been offered a job in Osaka, and I don't know what to do."
      },
      {
       "sp": "W",
       "text": "Congratulations... I think?"
      }
     ],
     "questions": [
      {
       "id": "pp20_13",
       "q": "What does the woman's reply suggest?",
       "choices": [
        "She is unsure whether it is good news.",
        "She is delighted by the news.",
        "She already knew about the offer.",
        "She is angry at the man."
       ],
       "answer": 0,
       "keyEn": "Congratulations... I think?",
       "keyJa": "おめでとう…でいいのかな?",
       "expl": "I think? の語尾上げと間(...)が、祝福すべきか迷う気持ちを表す。男性が悩んでいることを受けた返答。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "I can't decide whether to take the job or go to graduate school."
      },
      {
       "sp": "M",
       "text": "Which one would you regret more in ten years?"
      },
      {
       "sp": "W",
       "text": "Good question. Probably not trying graduate school."
      }
     ],
     "questions": [
      {
       "id": "pp20_14",
       "q": "What is the woman leaning toward?",
       "choices": [
        "Going to graduate school.",
        "Accepting the job offer.",
        "Taking a year off.",
        "Asking her parents to decide."
       ],
       "answer": 0,
       "keyEn": "Which one would you regret more in ten years? — Probably not trying graduate school.",
       "keyJa": "10年後により後悔するのは大学院に挑戦しないこと",
       "expl": "「しなかったら後悔する」=その選択肢に傾いている、という含意。Probably が傾き具合を示す。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "The weather's perfect for the picnic tomorrow."
      },
      {
       "sp": "W",
       "text": "Don't jinx it. The last time I said that, it poured."
      },
      {
       "sp": "M",
       "text": "That was a one-off."
      }
     ],
     "questions": [
      {
       "id": "pp20_15",
       "q": "What is the woman worried about?",
       "choices": [
        "That praising the weather could spoil it.",
        "That the picnic will be canceled.",
        "That she will forget the food.",
        "That the man will be late."
       ],
       "answer": 0,
       "keyEn": "Don't jinx it. The last time I said that, it poured.",
       "keyJa": "縁起でもないことを言わないで。前に言ったら土砂降りになった",
       "expl": "jinx =「(口にして)縁起を悪くする」。the last time I said that が根拠の経験談。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Could you lend me your notes? I missed Monday's class."
      },
      {
       "sp": "M",
       "text": "Sure, but my handwriting is terrible."
      },
      {
       "sp": "W",
       "text": "I'll manage. Anything is better than nothing."
      }
     ],
     "questions": [
      {
       "id": "pp20_16",
       "q": "What is the woman's attitude?",
       "choices": [
        "She will accept the notes despite the handwriting.",
        "She would rather copy someone else's notes.",
        "She thinks Monday's class was unimportant.",
        "She wants the man to rewrite them."
       ],
       "answer": 0,
       "keyEn": "I'll manage. Anything is better than nothing.",
       "keyJa": "何とかするよ。ないよりはましだから",
       "expl": "I'll manage =「何とかなる」。Anything is better than nothing =「何もないよりまし」で受け入れる意思。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I'm going to try making bread from scratch this weekend."
      },
      {
       "sp": "W",
       "text": "My first loaf was like a brick."
      },
      {
       "sp": "M",
       "text": "Mine can't be worse."
      },
      {
       "sp": "W",
       "text": "Don't be so sure."
      }
     ],
     "questions": [
      {
       "id": "pp20_17",
       "q": "What does the woman imply?",
       "choices": [
        "The man's first bread may not turn out well.",
        "Baking bread is very easy.",
        "She will buy the man some bread.",
        "She has never tried baking."
       ],
       "answer": 0,
       "keyEn": "My first loaf was like a brick. ... Don't be so sure.",
       "keyJa": "私の初めてのパンはレンガみたいだった。そんなに自信を持たないで",
       "expl": "like a brick(レンガのよう)=固くて失敗。Don't be so sure が「あなたも失敗するかも」という含意。"
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
       "text": "Attention, passengers. Flight 204 to Sapporo, originally scheduled for ten fifteen, is delayed by forty minutes. Departure will be from Gate 12. Flight 310 to Fukuoka will leave on time at ten forty from Gate 8. Flight 522 to Naha has changed gates from Gate 5 to Gate 9 and will depart at eleven twenty. Finally, Flight 618 to Osaka has been canceled. Passengers will be rebooked on the twelve o'clock flight."
      }
     ],
     "questions": [
      {
       "id": "pp20_18",
       "q": "Flight 204 will depart at ( ① ).",
       "choices": [
        "10:55",
        "10:15",
        "10:40",
        "11:15"
       ],
       "answer": 0,
       "keyEn": "Flight 204, originally scheduled for ten fifteen, is delayed by forty minutes.",
       "keyJa": "204便は予定10:15から40分遅れで10:55",
       "expl": "10:15+40分=10:55。originally の時刻をそのまま選ばない。"
      },
      {
       "id": "pp20_19",
       "q": "Flight 310 leaves from ( ② ).",
       "choices": [
        "Gate 8",
        "Gate 5",
        "Gate 9",
        "Gate 12"
       ],
       "answer": 0,
       "keyEn": "Flight 310 to Fukuoka will leave on time at ten forty from Gate 8.",
       "keyJa": "310便は定刻、8番ゲート",
       "expl": "他の便のゲート番号(12・5・9)との混同に注意。"
      },
      {
       "id": "pp20_20",
       "q": "Flight 522 will leave from ( ③ ).",
       "choices": [
        "Gate 9",
        "Gate 5",
        "Gate 8",
        "Gate 12"
       ],
       "answer": 0,
       "keyEn": "Flight 522 to Naha has changed gates from Gate 5 to Gate 9.",
       "keyJa": "522便はゲート5から9に変更",
       "expl": "from A to B の B が変更後。"
      },
      {
       "id": "pp20_21",
       "q": "The rebooked Osaka passengers will fly at ( ④ ).",
       "choices": [
        "12:00",
        "11:20",
        "12:40",
        "10:55"
       ],
       "answer": 0,
       "keyEn": "Passengers will be rebooked on the twelve o'clock flight.",
       "keyJa": "大阪行きは12時の便に振り替え",
       "expl": "canceled(欠航)の後の rebooked が答え。"
      }
     ],
     "table": [
      [
       "Flight",
       "Destination",
       "Gate",
       "Departure"
      ],
      [
       "204",
       "Sapporo",
       "12",
       "①"
      ],
      [
       "310",
       "Fukuoka",
       "②",
       "10:40"
      ],
      [
       "522",
       "Naha",
       "③",
       "11:20"
      ],
      [
       "618",
       "Osaka",
       "—",
       "④ (rebooked)"
      ]
     ]
    },
    {
     "script": [
      {
       "sp": "N",
       "text": "Here are the three mobile phone plans. Plan A costs ten dollars per month and includes two gigabytes of data. Plan B costs twice as much as Plan A and gives five times as much data. Plan C costs five dollars more than Plan B and offers unlimited data. On Plan A, extra data costs two dollars per gigabyte."
      }
     ],
     "questions": [
      {
       "id": "pp20_22",
       "q": "Plan B costs ( ① ) per month.",
       "choices": [
        "$20",
        "$15",
        "$25",
        "$50"
       ],
       "answer": 0,
       "keyEn": "Plan B costs twice as much as Plan A.",
       "keyJa": "プランBはAの2倍=20ドル",
       "expl": "10×2=20。"
      },
      {
       "id": "pp20_23",
       "q": "Plan B includes ( ② ) of data.",
       "choices": [
        "10 GB",
        "7 GB",
        "4 GB",
        "20 GB"
       ],
       "answer": 0,
       "keyEn": "Plan B ... gives five times as much data.",
       "keyJa": "プランBのデータ量はAの5倍=10GB",
       "expl": "2×5=10。price(2倍)と data(5倍)を取り違えない。"
      },
      {
       "id": "pp20_24",
       "q": "Plan C costs ( ③ ) per month.",
       "choices": [
        "$25",
        "$30",
        "$20",
        "$15"
       ],
       "answer": 0,
       "keyEn": "Plan C costs five dollars more than Plan B.",
       "keyJa": "プランCはBより5ドル高い=25ドル",
       "expl": "①の20ドル+5ドル=25ドル。"
      },
      {
       "id": "pp20_25",
       "q": "Using 5 GB on Plan A costs ( ④ ) in total.",
       "choices": [
        "$16",
        "$20",
        "$10",
        "$26"
       ],
       "answer": 0,
       "keyEn": "Plan A ... two gigabytes. On Plan A, extra data costs two dollars per gigabyte.",
       "keyJa": "Aで5GB使うと、基本10ドル+超過3GB×2ドル=16ドル",
       "expl": "超過は 5−2=3GB。10+3×2=16。"
      }
     ],
     "table": [
      [
       "Plan",
       "Monthly price",
       "Data"
      ],
      [
       "A",
       "$10",
       "2 GB"
      ],
      [
       "B",
       "①",
       "②"
      ],
      [
       "C",
       "③",
       "Unlimited"
      ],
      [
       "A (5 GB used)",
       "④",
       "—"
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
       "text": "Number one. This camp is for children aged ten to twelve and lasts eight days. It offers hiking and art, but no swimming. The price is three hundred eighty dollars with meals, and it's forty-five minutes from your home."
      },
      {
       "sp": "W",
       "text": "Number two. Ages nine to thirteen, ten days, with swimming every day. The fee is four hundred twenty dollars, and meals cost another sixty."
      },
      {
       "sp": "M2",
       "text": "Number three. For ten to twelve-year-olds, seven days. Swimming is included, and the price is three hundred ninety dollars with all meals, but it's two and a half hours away by bus."
      },
      {
       "sp": "W2",
       "text": "Number four. Ages ten to thirteen, seven days, with swimming daily. It costs three hundred forty dollars, plus forty for meals, and it's fifty minutes from your home by train."
      }
     ],
     "questions": [
      {
       "id": "pp20_26",
       "q": "Your eleven-year-old sister wants a camp that lasts at least seven days, includes swimming, costs no more than four hundred dollars including meals, and is within one hour of home. Which camp should you choose?",
       "choices": [
        "Number one",
        "Number two",
        "Number three",
        "Number four"
       ],
       "answer": 3,
       "keyEn": "Number four. Seven days, swimming daily, three hundred forty plus forty for meals, fifty minutes by train.",
       "keyJa": "4番=7日間・水泳あり・340+40=380ドル・50分で全条件を満たす",
       "expl": "1=水泳なし、2=420+60=480ドルで予算超過、3=バスで2時間半かかる、4=全条件OK。",
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
       "text": "There are about seven thousand languages in the world today, but linguists predict that around half of them may disappear by the end of this century. In fact, one language dies out roughly every two weeks. A language is considered endangered when children no longer learn it at home. Many languages disappear not because they are forbidden, but because their speakers move to cities and choose a dominant language such as English, which offers better jobs. Why does it matter? Each language carries unique knowledge. For example, some Amazon languages contain detailed names for medicinal plants that are unknown to science. When the last speaker dies, that knowledge is lost. Efforts to save languages include recording elders, compiling dictionaries, and teaching children in language nests, which are preschools where only the endangered language is spoken. In New Zealand, such preschools have helped bring back the Maori language, although it is still far less common than English. Technology also helps. Speech apps and online dictionaries allow young people to learn from home. Still, experts stress that a language survives only if people use it in daily life, not just in classrooms or museums."
      }
     ],
     "questions": [
      {
       "id": "pp20_27",
       "q": "What is the main point of the lecture?",
       "choices": [
        "Many languages are vanishing, and saving them requires daily use by speakers.",
        "Languages disappear only when governments forbid their speakers to use them.",
        "English will soon become the only language left in the world today.",
        "Dictionaries and recordings alone can keep a language alive for good."
       ],
       "answer": 0,
       "keyEn": "a language survives only if people use it in daily life, not just in classrooms or museums.",
       "keyJa": "言語が生き残るのは、教室や博物館ではなく日常で使われる場合だけ",
       "expl": "Still(それでも)以降の専門家の主張が結論。forbidden は「禁止されたからではない」と否定されている。",
       "points": 3
      },
      {
       "id": "pp20_28",
       "q": "How often does a language die out, according to the lecture?",
       "choices": [
        "Roughly every two weeks.",
        "Roughly every two years.",
        "Roughly every two days.",
        "Roughly every two months."
       ],
       "answer": 0,
       "keyEn": "one language dies out roughly every two weeks.",
       "keyJa": "約2週間に1つの言語が消える",
       "expl": "every two weeks。two の後ろの単位(weeks)を確実に聞き取る。"
      },
      {
       "id": "pp20_29",
       "q": "When is a language considered endangered?",
       "choices": [
        "When children stop learning it at home.",
        "When no one writes books in it.",
        "When it has fewer than ten speakers.",
        "When it is taught in schools."
       ],
       "answer": 0,
       "keyEn": "A language is considered endangered when children no longer learn it at home.",
       "keyJa": "子どもが家庭で習わなくなったとき",
       "expl": "no longer learn it at home の言い換え。話者数の基準は述べられていない。"
      },
      {
       "id": "pp20_30",
       "q": "Why do many speakers give up their languages?",
       "choices": [
        "They move to cities and choose a language that offers better jobs.",
        "They are ordered to stop speaking it by their national government.",
        "They are afraid of speaking their own language in public places.",
        "They find their own language too difficult to teach to their children."
       ],
       "answer": 0,
       "keyEn": "not because they are forbidden, but because their speakers move to cities and choose a dominant language.",
       "keyJa": "禁止されたからではなく、都市に移り、仕事に有利な主要言語を選ぶから",
       "expl": "not because A, but because B(Aではなく B だから)。B が真の理由。"
      },
      {
       "id": "pp20_31",
       "q": "Why does the loss of a language matter?",
       "choices": [
        "Each language holds unique knowledge, such as medicinal plant names.",
        "Languages are needed so that people can buy and sell goods abroad.",
        "Every language can be translated easily without losing any meaning.",
        "Old languages are always more beautiful than the languages of today."
       ],
       "answer": 0,
       "keyEn": "Each language carries unique knowledge. For example, ... detailed names for medicinal plants.",
       "keyJa": "各言語は固有の知識を持ち、最後の話者が亡くなればそれが失われる",
       "expl": "For example の前が一般論(unique knowledge)、後ろが具体例(薬用植物)。"
      },
      {
       "id": "pp20_32",
       "q": "What is a language nest?",
       "choices": [
        "A preschool where only the endangered language is spoken.",
        "A dictionary in which rare words from many languages are collected.",
        "A computer program that translates endangered languages into English.",
        "A museum in which old languages are displayed to visitors."
       ],
       "answer": 0,
       "keyEn": "language nests, which are preschools where only the endangered language is spoken.",
       "keyJa": "危機言語だけを使う幼稚園・保育施設",
       "expl": "which are ... が定義の部分。ニュージーランドのマオリ語の例とつながる。"
      },
      {
       "id": "pp20_33",
       "q": "What do experts say is necessary for a language to survive?",
       "choices": [
        "Use in people's everyday lives.",
        "Strict government rules.",
        "Display in museums.",
        "Translation into English."
       ],
       "answer": 0,
       "keyEn": "a language survives only if people use it in daily life.",
       "keyJa": "人々が日常生活で使うこと",
       "expl": "only if(〜の場合に限り)が必要条件の合図。classrooms or museums は不十分とされた場。"
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
       "text": "I'm trying to decide between a used bike for eighty dollars and a new one for two hundred."
      },
      {
       "sp": "W",
       "text": "What do you need it for?"
      },
      {
       "sp": "M",
       "text": "Getting to the station, twenty minutes each way, every day."
      },
      {
       "sp": "W",
       "text": "A used bike might break down, and then repairs add up."
      },
      {
       "sp": "M",
       "text": "True, but the shop offers a three-month warranty on used bikes."
      },
      {
       "sp": "W",
       "text": "Hmm. Is the new one at least lighter? You'll have to carry it up the stairs at your building."
      },
      {
       "sp": "M",
       "text": "The new one is two kilograms lighter."
      },
      {
       "sp": "W",
       "text": "Then for daily use I'd go with the new one, since the extra cost is spread over years."
      },
      {
       "sp": "M",
       "text": "I'll sleep on it, but you've almost convinced me."
      }
     ],
     "questions": [
      {
       "id": "pp20_34",
       "q": "Why does the woman recommend the new bike?",
       "choices": [
        "It is lighter, and the extra cost is spread over years of daily use.",
        "It comes with a longer warranty than the used one.",
        "The used bike is too expensive.",
        "It is faster on the way to the station."
       ],
       "answer": 0,
       "keyEn": "Then for daily use I'd go with the new one, since the extra cost is spread over years.",
       "keyJa": "毎日使うなら、追加費用は何年にもわたって分散されるから新品がよい",
       "expl": "lighter(階段で運ぶ)と daily use(毎日使う)の2点が根拠。保証は中古品についての話。"
      },
      {
       "id": "pp20_35",
       "q": "How does the man feel at the end of the conversation?",
       "choices": [
        "Nearly persuaded, but not yet decided.",
        "Completely sure about buying the used bike.",
        "Angry at the woman's advice.",
        "Certain that he will buy the new bike today."
       ],
       "answer": 0,
       "keyEn": "I'll sleep on it, but you've almost convinced me.",
       "keyJa": "一晩考えるが、ほぼ納得した",
       "expl": "sleep on it =「一晩考える」=まだ決定していない。almost convinced =「ほぼ納得」。"
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
       "text": "Four students, Ken, Mia, Dan and Sue, are discussing whether some classes should stay online permanently."
      },
      {
       "sp": "M",
       "text": "Online classes save commuting time. I spend ninety minutes a day on trains, and I'd rather use that time for studying."
      },
      {
       "sp": "W",
       "text": "I understand, but I lose focus at home. In a classroom, the teacher notices when I'm confused."
      },
      {
       "sp": "M2",
       "text": "I think it depends on the subject. Lectures can be recorded and watched online, but science experiments and discussions need people in the same room."
      },
      {
       "sp": "W2",
       "text": "Another issue is equal access. Not everyone has a quiet room or fast internet, so online classes could put some students at a disadvantage."
      },
      {
       "sp": "M",
       "text": "Fair point, but the school could lend laptops and open study rooms for those students."
      },
      {
       "sp": "W",
       "text": "Then I'd accept online lectures, as long as discussions and labs stay in person."
      },
      {
       "sp": "M2",
       "text": "That's exactly what I was suggesting."
      }
     ],
     "questions": [
      {
       "id": "pp20_36",
       "q": "Who is worried about students' unequal conditions at home?",
       "choices": [
        "Sue",
        "Ken",
        "Mia",
        "Dan"
       ],
       "answer": 0,
       "keyEn": "Not everyone has a quiet room or fast internet.",
       "keyJa": "静かな部屋や高速のネット環境が誰にもあるわけではない、とスーは指摘している",
       "expl": "equal access(平等なアクセス)が Sue の論点。Mia は集中力、Ken は通学時間、Dan は科目による違い。"
      },
      {
       "id": "pp20_37",
       "q": "What do the students seem to agree on?",
       "choices": [
        "Moving lectures online while keeping discussions and labs in person.",
        "Putting every class online from now on, including labs and discussions.",
        "Bringing all classes back to the classroom as soon as possible.",
        "Letting each student choose any class format that he or she likes."
       ],
       "answer": 0,
       "keyEn": "I'd accept online lectures, as long as discussions and labs stay in person. — That's exactly what I was suggesting.",
       "keyJa": "講義はオンライン、討論と実験は対面を維持する",
       "expl": "Mia が条件つきで賛成し、Dan の最初の案(subject による使い分け)と一致する。"
      }
     ]
    }
   ]
  }
 ]
};
