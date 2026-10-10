// ============================================================
// 2018年 アルファ 本番形式模試(37問・100点満点)
// ============================================================

window.MOCK_TESTS = window.MOCK_TESTS || {};

window.MOCK_TESTS["2018"] = {
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
       "text": "The paperback costs twelve dollars, but the hardcover is on sale for ten, so even though I usually prefer light books, I'm going to buy the hardcover this time."
      }
     ],
     "questions": [
      {
       "id": "pp18_01",
       "q": "Why is the speaker buying the hardcover?",
       "choices": [
        "It is cheaper than the paperback right now.",
        "She likes heavy books better than light ones.",
        "The paperback has sold out in the shop.",
        "She is buying it as a birthday present."
       ],
       "answer": 0,
       "keyEn": "the hardcover is on sale for ten, so even though I usually prefer light books.",
       "keyJa": "ハードカバーのほうがセールで安いので、軽い本が好みでも今回はそちらを買う",
       "expl": "even though(〜だが)で本来の好みを退け、on sale for ten(10ドル)< twelve dollars が理由。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I told Mari I'd meet her at the north exit, but the north exit is closed for construction, so I've texted her to wait by the ticket machines instead."
      }
     ],
     "questions": [
      {
       "id": "pp18_02",
       "q": "Where will the speaker and Mari meet?",
       "choices": [
        "By the ticket machines.",
        "At the north exit.",
        "Beside the construction site.",
        "At the south exit."
       ],
       "answer": 0,
       "keyEn": "so I've texted her to wait by the ticket machines instead.",
       "keyJa": "北口が工事で閉鎖なので、券売機のそばで待つよう連絡した",
       "expl": "最初の約束(north exit)は closed で崩れ、instead が新しい場所の合図。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "I know the forecast said sunny, but I've lived here long enough to know that when the mountains vanish into the clouds like that, it's going to pour by afternoon."
      }
     ],
     "questions": [
      {
       "id": "pp18_03",
       "q": "What does the speaker expect to happen?",
       "choices": [
        "Heavy rain will fall in the afternoon.",
        "The forecast will turn out to be right.",
        "The mountains will be clearly visible later.",
        "It will snow in the mountains tonight."
       ],
       "answer": 0,
       "keyEn": "when the mountains vanish into the clouds like that, it's going to pour by afternoon.",
       "keyJa": "山が雲に隠れているので、午後には土砂降りになるはず",
       "expl": "pour =「激しく降る」。forecast(予報)を信じない経験則がポイント。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "My phone's screen cracked last month, but it still works fine, so I've decided to wait for next spring's new model rather than pay for a repair now."
      }
     ],
     "questions": [
      {
       "id": "pp18_04",
       "q": "What has the speaker decided to do?",
       "choices": [
        "Live with the cracked screen until a new model appears.",
        "Have the cracked screen repaired by a shop straight away.",
        "Buy next spring's new model as soon as it goes on sale.",
        "Stop using a smartphone altogether and buy a simple phone."
       ],
       "answer": 0,
       "keyEn": "I've decided to wait for next spring's new model rather than pay for a repair now.",
       "keyJa": "今は修理せず、来春の新モデルまで待つことにした",
       "expl": "rather than(〜よりむしろ)の後ろが退けた案(修理)。still works fine が我慢できる根拠。"
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
       "text": "A man is wheeling a suitcase across a bridge while talking on the phone. Behind him a tram is approaching, and on the railing a pigeon sits beside a paper cup."
      }
     ],
     "questions": [
      {
       "id": "pp18_05",
       "q": "Which description matches what you hear?",
       "choices": [
        "A man pulls a suitcase on a bridge; a tram approaches him from behind.",
        "A man carries a suitcase on a bridge; a tram approaches from behind.",
        "A man pulls a suitcase on a bridge; a tram is leaving ahead of him.",
        "A man pulls a suitcase on a bridge; a pigeon sits on the suitcase."
       ],
       "answer": 0,
       "keyEn": "wheeling a suitcase across a bridge ... Behind him a tram is approaching.",
       "keyJa": "男性がスーツケースを転がして橋を渡り、後ろから路面電車が近づく",
       "expl": "wheel(転がす)と carry(持ち運ぶ)、approaching(近づく)と leaving(去る)、ハトの位置(railing)の3点で絞る。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "In the kitchen, a boy is standing on a stool to reach the top shelf, while a girl holds the stool steady with both hands and a cat watches from the counter."
      }
     ],
     "questions": [
      {
       "id": "pp18_06",
       "q": "Which description matches what you hear?",
       "choices": [
        "A girl steadies the stool for a boy reaching up; a cat is on the counter.",
        "A boy steadies the stool for a girl reaching up; a cat is on the counter.",
        "A girl steadies the stool for a boy reaching up; a cat is on the floor.",
        "A girl climbs the stool while a boy holds a cat."
       ],
       "answer": 0,
       "keyEn": "a boy is standing on a stool to reach the top shelf, while a girl holds the stool steady with both hands.",
       "keyJa": "少年が踏み台に乗って棚に手を伸ばし、少女が両手で台を支え、猫はカウンターから見ている",
       "expl": "誰が登り誰が支えるか(boy / girl の役割)と、猫の位置(counter)を同時に確認する。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Three bicycles are parked in a row. The first has a basket, the second is missing its front wheel, and the third is locked to a post with a thick chain."
      }
     ],
     "questions": [
      {
       "id": "pp18_07",
       "q": "Which description matches what you hear?",
       "choices": [
        "Basket on the first, no front wheel on the second, chained third.",
        "Basket on the second, no front wheel on the first, chained third.",
        "Basket on the first, no front wheel on the third, chained second.",
        "Basket on the first, no front wheel on the second, third unlocked."
       ],
       "answer": 0,
       "keyEn": "The first has a basket, the second is missing its front wheel, and the third is locked to a post.",
       "keyJa": "1台目にカゴ、2台目は前輪なし、3台目は太いチェーンで支柱に固定",
       "expl": "first / second / third と、basket / missing wheel / locked の対応づけ。順序の入れ替えに注意。"
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
       "text": "The jeans are forty dollars, and everything is twenty-five percent off today."
      },
      {
       "sp": "W",
       "text": "I have a store card. Does that give me another discount?"
      },
      {
       "sp": "M",
       "text": "Five dollars off, but only if your total after the sale discount is more than thirty-five dollars."
      }
     ],
     "questions": [
      {
       "id": "pp18_08",
       "q": "How much will the woman pay for the jeans?",
       "choices": [
        "$30",
        "$25",
        "$35",
        "$20"
       ],
       "answer": 0,
       "keyEn": "twenty-five percent off ... only if your total after the sale discount is more than thirty-five dollars.",
       "keyJa": "25%引きで30ドル。35ドルを超えないので、カード割引は使えない",
       "expl": "40×0.75=30。30は35を超えないので5ドル引きは対象外。25ドルを選ばせるワナ。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Can we meet on Friday to practice the speech? How about three?"
      },
      {
       "sp": "M",
       "text": "I have a dentist appointment at three, and it takes an hour."
      },
      {
       "sp": "W",
       "text": "Then four? Or earlier, at one?"
      },
      {
       "sp": "M",
       "text": "After the dentist I'll be worn out. One works, if we finish by two thirty. It takes me half an hour to get there."
      }
     ],
     "questions": [
      {
       "id": "pp18_09",
       "q": "When will they practice?",
       "choices": [
        "On Friday at one.",
        "On Friday at three.",
        "On Friday at four.",
        "On Saturday morning."
       ],
       "answer": 0,
       "keyEn": "After the dentist I'll be worn out. One works, if we finish by two thirty.",
       "keyJa": "歯医者の後は疲れるので、金曜の1時に練習し、2時半までに終える",
       "expl": "three(歯医者と重なる)→ four(疲れる)と順に断られ、one が採用される。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I booked a room with two single beds."
      },
      {
       "sp": "W",
       "text": "We only have doubles left tonight, but the room facing the garden has a sofa bed."
      },
      {
       "sp": "M",
       "text": "My son is eight, so the sofa bed is fine. Is breakfast included?"
      },
      {
       "sp": "W",
       "text": "It's fifteen dollars per person, but free for children under ten."
      }
     ],
     "questions": [
      {
       "id": "pp18_10",
       "q": "How much will the man pay for breakfast?",
       "choices": [
        "$15",
        "$30",
        "$0",
        "$7.50"
       ],
       "answer": 0,
       "keyEn": "It's fifteen dollars per person, but free for children under ten.",
       "keyJa": "朝食は1人15ドルだが10歳未満は無料。8歳の息子は無料なので父親の15ドルだけ",
       "expl": "息子は eight =10歳未満で無料。per person の15ドルは男性1人分だけかかる。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "These shoes are half a size too small."
      },
      {
       "sp": "M",
       "text": "We have the next size up in black, but not in brown."
      },
      {
       "sp": "W",
       "text": "I'd rather have brown. Could you check your other branch?"
      },
      {
       "sp": "M",
       "text": "They have it, and we can have it here by Thursday."
      },
      {
       "sp": "W",
       "text": "Then I'll wait, but please call me when it arrives."
      }
     ],
     "questions": [
      {
       "id": "pp18_11",
       "q": "What will the woman do?",
       "choices": [
        "Wait for brown shoes to be sent from another branch.",
        "Buy the black pair of shoes in the next size up now.",
        "Ask for her money back and look in another store.",
        "Go to the other branch and pick up the brown shoes herself."
       ],
       "answer": 0,
       "keyEn": "I'd rather have brown. — They have it, and we can have it here by Thursday. — Then I'll wait.",
       "keyJa": "茶色が良いので、他店から取り寄せてもらい木曜まで待つ",
       "expl": "black は I'd rather have brown で却下。取りに行くのではなく、取り寄せ(have it here)を待つ。"
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
       "text": "Are you still thinking about quitting the choir?"
      },
      {
       "sp": "W",
       "text": "Practice moved to Wednesday nights, which clashes with my swimming lessons."
      },
      {
       "sp": "M",
       "text": "Can't you swim on another night?"
      },
      {
       "sp": "W",
       "text": "The pool only offers my level on Wednesdays."
      }
     ],
     "questions": [
      {
       "id": "pp18_12",
       "q": "Why might the woman quit the choir?",
       "choices": [
        "Rehearsals now overlap with her swimming lessons.",
        "She has lost interest in singing.",
        "She wants to change to a different pool.",
        "She is too busy with her job."
       ],
       "answer": 0,
       "keyEn": "Practice moved to Wednesday nights, which clashes with my swimming lessons.",
       "keyJa": "練習が水曜夜に移り、水泳教室と重なる",
       "expl": "clash with =「(予定が)ぶつかる」。別の夜に泳げるのでは?への返答(水曜しか開講されない)も根拠になる。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "I heard you got the lead role in the play!"
      },
      {
       "sp": "M",
       "text": "Yes, though the director said it was between me and Tom, and Tom had to settle for the smaller part."
      },
      {
       "sp": "W",
       "text": "So Tom must be pretty disappointed."
      }
     ],
     "questions": [
      {
       "id": "pp18_13",
       "q": "What does the woman imply?",
       "choices": [
        "Tom may feel let down.",
        "Tom refused the lead role.",
        "The director picked Tom first.",
        "The man dislikes his part."
       ],
       "answer": 0,
       "keyEn": "So Tom must be pretty disappointed.",
       "keyJa": "じゃあトムはかなりがっかりしているはずね",
       "expl": "must be ... =「〜に違いない」。主役を逃したトムの気持ちを推測している。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "The instructions say assembly takes about thirty minutes."
      },
      {
       "sp": "W",
       "text": "That's what it said for the bookshelf too. It took us three hours."
      },
      {
       "sp": "M",
       "text": "Then let's block out the whole afternoon."
      }
     ],
     "questions": [
      {
       "id": "pp18_14",
       "q": "What do they plan to do?",
       "choices": [
        "Set aside the entire afternoon for assembling it.",
        "Finish the assembly within thirty minutes.",
        "Ask a professional to put it together.",
        "Return the furniture to the store."
       ],
       "answer": 0,
       "keyEn": "Then let's block out the whole afternoon.",
       "keyJa": "それなら午後をまるごと空けておこう",
       "expl": "表示の30分は当てにならない(本棚は3時間)。block out =「(時間を)確保する」。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "How was the lecture?"
      },
      {
       "sp": "M",
       "text": "The professor is brilliant, but she speaks so fast that I only caught half of it."
      },
      {
       "sp": "W",
       "text": "Did you record it?"
      },
      {
       "sp": "M",
       "text": "Not allowed. I'll borrow notes from Yuki."
      }
     ],
     "questions": [
      {
       "id": "pp18_15",
       "q": "What will the man do?",
       "choices": [
        "Copy a classmate's notes.",
        "Record the next lecture.",
        "Ask the professor to speak faster.",
        "Stop going to the lectures."
       ],
       "answer": 0,
       "keyEn": "Not allowed. I'll borrow notes from Yuki.",
       "keyJa": "録音は禁止なので、ユキのノートを借りる",
       "expl": "Did you record it? に Not allowed と答えて案を打ち切り、borrow notes が行動。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I think we should take the earlier flight, even though it leaves at six in the morning."
      },
      {
       "sp": "W",
       "text": "That means getting up at three."
      },
      {
       "sp": "M",
       "text": "True, but the later flight lands after the last train."
      },
      {
       "sp": "W",
       "text": "Good point. The taxi would cost more than the difference in ticket prices."
      }
     ],
     "questions": [
      {
       "id": "pp18_16",
       "q": "Why does the man prefer the earlier flight?",
       "choices": [
        "The later flight would arrive after the trains stop.",
        "It is less expensive than the later one.",
        "He enjoys getting up early.",
        "It is a direct flight."
       ],
       "answer": 0,
       "keyEn": "the later flight lands after the last train.",
       "keyJa": "遅い便は最終電車の後に着くから",
       "expl": "even though(早起きの欠点)を認めたうえで、But 以降に本当の理由。price は女性が taxi 代として触れるだけ。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Have you tried the new fitness app?"
      },
      {
       "sp": "M",
       "text": "I downloaded it, but it sends me reminders every hour, and it's driving me up the wall."
      },
      {
       "sp": "W",
       "text": "You can turn them off in the settings."
      },
      {
       "sp": "M",
       "text": "Then what's the point of the app?"
      }
     ],
     "questions": [
      {
       "id": "pp18_17",
       "q": "What is the man's attitude toward the app?",
       "choices": [
        "He is irritated and doubts its value.",
        "He is delighted with it.",
        "He has not installed it yet.",
        "He will recommend it to others."
       ],
       "answer": 0,
       "keyEn": "it's driving me up the wall. ... Then what's the point of the app?",
       "keyJa": "うんざりしている。通知を切ったらアプリの意味がない",
       "expl": "drive ... up the wall =「(人)をいらいらさせる」。What's the point? は修辞疑問で価値への疑問。"
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
       "text": "This is the schedule for the first week of club activities. The tennis club meets on Monday at four in the gym, because the courts are being repaired. The drama club normally meets on Tuesday, but this week it will meet on Wednesday at five, in Room 101. The chess club meets on Thursday in the library at three thirty. The photography club has a field trip on Saturday morning. The meeting point is the front gate at nine, but the bus will leave at nine thirty."
      }
     ],
     "questions": [
      {
       "id": "pp18_18",
       "q": "The tennis club meets in ( ① ).",
       "choices": [
        "the gym",
        "the tennis courts",
        "Room 101",
        "the library"
       ],
       "answer": 0,
       "keyEn": "The tennis club meets on Monday at four in the gym, because the courts are being repaired.",
       "keyJa": "テニス部はコート修理のため体育館",
       "expl": "because the courts are being repaired で courts が除外される。"
      },
      {
       "id": "pp18_19",
       "q": "The drama club meets ( ② ).",
       "choices": [
        "Wednesday at 5:00",
        "Tuesday at 5:00",
        "Wednesday at 4:00",
        "Thursday at 5:00"
       ],
       "answer": 0,
       "keyEn": "normally meets on Tuesday, but this week it will meet on Wednesday at five.",
       "keyJa": "演劇部は通常火曜だが、今週は水曜の5時",
       "expl": "normally(通常)と this week(今週)を区別する。"
      },
      {
       "id": "pp18_20",
       "q": "The chess club starts at ( ③ ).",
       "choices": [
        "3:30",
        "3:00",
        "4:30",
        "5:30"
       ],
       "answer": 0,
       "keyEn": "The chess club meets on Thursday in the library at three thirty.",
       "keyJa": "チェス部は木曜の3時30分",
       "expl": "three thirty =3:30。"
      },
      {
       "id": "pp18_21",
       "q": "On Saturday, the bus leaves at ( ④ ).",
       "choices": [
        "9:30",
        "9:00",
        "10:00",
        "8:30"
       ],
       "answer": 0,
       "keyEn": "The meeting point is the front gate at nine, but the bus will leave at nine thirty.",
       "keyJa": "集合は9時、バスの出発は9時30分",
       "expl": "meeting(集合)と leave(出発)の時刻を区別する。"
      }
     ],
     "table": [
      [
       "Club",
       "Day / Time",
       "Place"
      ],
      [
       "Tennis",
       "Mon. 4:00",
       "①"
      ],
      [
       "Drama",
       "②",
       "Room 101"
      ],
      [
       "Chess",
       "Thu. ③",
       "Library"
      ],
      [
       "Photography",
       "Sat. meet 9:00",
       "Bus leaves at ④"
      ]
     ]
    },
    {
     "script": [
      {
       "sp": "N",
       "text": "Here are the admission prices at the City Art Museum. An adult ticket is twenty dollars. A child's ticket is half the adult price. A family ticket for two adults and two children costs ten dollars less than buying the four tickets separately. Senior visitors get twenty percent off the adult price."
      }
     ],
     "questions": [
      {
       "id": "pp18_22",
       "q": "A child's ticket costs ( ① ).",
       "choices": [
        "$10",
        "$5",
        "$15",
        "$8"
       ],
       "answer": 0,
       "keyEn": "A child's ticket is half the adult price.",
       "keyJa": "子ども券は大人料金の半額=10ドル",
       "expl": "20÷2=10。"
      },
      {
       "id": "pp18_23",
       "q": "The family ticket costs ( ② ).",
       "choices": [
        "$50",
        "$60",
        "$40",
        "$70"
       ],
       "answer": 0,
       "keyEn": "ten dollars less than buying the four tickets separately.",
       "keyJa": "家族券は個別購入(60ドル)より10ドル安い=50ドル",
       "expl": "20+20+10+10=60、60−10=50。60ドルは割引前の合計。"
      },
      {
       "id": "pp18_24",
       "q": "A senior ticket costs ( ③ ).",
       "choices": [
        "$16",
        "$4",
        "$15",
        "$18"
       ],
       "answer": 0,
       "keyEn": "Senior visitors get twenty percent off the adult price.",
       "keyJa": "シニアは大人料金の2割引=16ドル",
       "expl": "20×0.8=16。4ドルは割引額で料金ではない。"
      },
      {
       "id": "pp18_25",
       "q": "Two seniors and one child, bought separately, cost ( ④ ).",
       "choices": [
        "$42",
        "$36",
        "$46",
        "$52"
       ],
       "answer": 0,
       "keyEn": "twenty percent off the adult price; a child's ticket is half the adult price.",
       "keyJa": "シニア2枚(16×2)+子ども1枚(10)=42ドル",
       "expl": "③と①の答えを合算する。16+16+10=42。"
      }
     ],
     "table": [
      [
       "Ticket",
       "Price"
      ],
      [
       "Adult",
       "$20"
      ],
      [
       "Child",
       "①"
      ],
      [
       "Family (2 adults + 2 children)",
       "②"
      ],
      [
       "Senior",
       "③"
      ],
      [
       "2 seniors + 1 child",
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
       "text": "Number one. This gym is open until eleven on weekdays. The monthly fee is thirty-eight dollars, with no joining fee, and it's an eight-minute walk from campus."
      },
      {
       "sp": "W",
       "text": "Number two. We're open until ten on weekdays. The monthly fee is thirty-five dollars, but there's a fifty-dollar joining fee. We're five minutes from campus."
      },
      {
       "sp": "M2",
       "text": "Number three. Our gym stays open until midnight. The monthly fee is forty-five dollars, with no joining fee, and we're ten minutes' walk from campus."
      },
      {
       "sp": "W2",
       "text": "Number four. This gym closes at nine on weekdays. It costs thirty dollars a month with no joining fee, and it's six minutes from campus."
      }
     ],
     "questions": [
      {
       "id": "pp18_26",
       "q": "You want a gym that is open until at least ten p.m. on weekdays, costs forty dollars a month or less, has no joining fee, and is within a ten-minute walk of campus. Which gym should you choose?",
       "choices": [
        "Number one",
        "Number two",
        "Number three",
        "Number four"
       ],
       "answer": 0,
       "keyEn": "Number one. Open until eleven, thirty-eight dollars a month, no joining fee, eight minutes' walk.",
       "keyJa": "1番=夜11時まで・月38ドル・入会金なし・徒歩8分で全条件を満たす",
       "expl": "2=入会金50ドルあり、3=月45ドルで予算超過、4=9時閉店で条件の10時に届かない。",
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
       "text": "Many students believe that the best way to learn is to study a subject intensively for a long time just before an exam. Psychologists call this cramming. Research, however, shows that spreading study sessions over several days produces much better long-term memory. This is known as the spacing effect. In one experiment, two groups of students studied the same list of foreign words. One group studied for three hours in a single evening, while the other studied for one hour on each of three days. A week later, the second group remembered about fifty percent more words. Why does this happen? Researchers think that each time we forget a little and then recall the information again, the memory becomes stronger. Cramming skips this process. Another useful method is testing yourself instead of simply re-reading your notes, because retrieving information is itself a powerful way of learning. However, spacing has a limit. If the gaps are too long, you forget too much and have to start again. Experts suggest reviewing new material after one day, then after about a week, and then after a month."
      }
     ],
     "questions": [
      {
       "id": "pp18_27",
       "q": "What is the main point of the lecture?",
       "choices": [
        "Spreading study over several days builds longer-lasting memory than cramming.",
        "Cramming for three hours is the most efficient way to learn.",
        "Studying for exams is not necessary for learning.",
        "Memory improves only if you never forget anything."
       ],
       "answer": 0,
       "keyEn": "spreading study sessions over several days produces much better long-term memory.",
       "keyJa": "学習を数日に分けるほうが長期記憶に効果的",
       "expl": "However で一般的な思い込み(詰め込み)が覆される。spacing effect が講義の中心概念。",
       "points": 3
      },
      {
       "id": "pp18_28",
       "q": "How did the two groups in the experiment differ?",
       "choices": [
        "One studied three hours at once; the other studied an hour on each of three days.",
        "One group studied alone for three hours; the other studied together in a group.",
        "One group studied foreign words; the other studied whole sentences instead.",
        "One group studied in the morning every day; the other studied only at night."
       ],
       "answer": 0,
       "keyEn": "One group studied for three hours in a single evening, while the other studied for one hour on each of three days.",
       "keyJa": "一方は1晩に3時間、もう一方は3日間に1時間ずつ学習した",
       "expl": "合計時間は同じ(3時間)で、分け方だけが違う実験設計。"
      },
      {
       "id": "pp18_29",
       "q": "What was the result of the experiment?",
       "choices": [
        "The group that spread out its study remembered about fifty percent more.",
        "The group that crammed remembered about fifty percent more.",
        "Both groups remembered the same number of words.",
        "The spaced group remembered half as many words."
       ],
       "answer": 0,
       "keyEn": "A week later, the second group remembered about fifty percent more words.",
       "keyJa": "1週間後、2番目(分散学習)のグループが約5割多く覚えていた",
       "expl": "the second group =分散学習のグループ。fifty percent more =「5割増し」(半分ではない)。"
      },
      {
       "id": "pp18_30",
       "q": "Why does spacing work, according to researchers?",
       "choices": [
        "Forgetting a little and then recalling again strengthens the memory.",
        "It allows students to study fewer hours in total before the exam.",
        "It stops students from ever forgetting anything they have learned.",
        "It makes studying more enjoyable, so that students want to study more."
       ],
       "answer": 0,
       "keyEn": "each time we forget a little and then recall the information again, the memory becomes stronger.",
       "keyJa": "少し忘れてから思い出すたびに記憶が強くなる",
       "expl": "forget → recall のくり返しが理由。Cramming skips this process が対比。"
      },
      {
       "id": "pp18_31",
       "q": "Which is NOT mentioned in the lecture?",
       "choices": [
        "Playing music while studying helps memory.",
        "Testing yourself is an effective method.",
        "Reviewing material after about a week is recommended.",
        "Cramming is a common student habit."
       ],
       "answer": 0,
       "keyEn": "testing yourself; reviewing after one day, a week and a month; students believe in cramming.",
       "keyJa": "自己テスト・復習の間隔・詰め込みの習慣は述べられたが、音楽の話はない",
       "expl": "NOT 問題。music に関する言及は一切ない。他の3つは本文に対応する箇所がある。"
      },
      {
       "id": "pp18_32",
       "q": "What is a limit of the spacing method?",
       "choices": [
        "If the gaps are too long, much is forgotten and learning must restart.",
        "It cannot be used when students are learning foreign words.",
        "It only works if students study for three days in a row.",
        "It requires a teacher to be present during every study session."
       ],
       "answer": 0,
       "keyEn": "If the gaps are too long, you forget too much and have to start again.",
       "keyJa": "間隔が長すぎると忘れすぎて、最初からやり直しになる",
       "expl": "However, spacing has a limit. の直後が答え。"
      },
      {
       "id": "pp18_33",
       "q": "When do the experts recommend reviewing new material?",
       "choices": [
        "After one day, after a week, and after a month.",
        "Every hour for the first day, and then never again.",
        "Only on the night before the exam, for several hours.",
        "Just once, about three months after the first lesson."
       ],
       "answer": 0,
       "keyEn": "reviewing new material after one day, then after about a week, and then after a month.",
       "keyJa": "1日後、約1週間後、1か月後に復習する",
       "expl": "間隔が次第に広がる3段階。最後の文に集約されている。"
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
       "text": "The student council wants to survey students about the library's opening hours."
      },
      {
       "sp": "W",
       "text": "Do you think the library should open on Sundays?"
      },
      {
       "sp": "M",
       "text": "I'd rather extend the weekday closing time from six to eight. On Sundays I'm usually with my club."
      },
      {
       "sp": "W",
       "text": "But most of us are at club practice until six, so longer weekday hours wouldn't help."
      },
      {
       "sp": "M",
       "text": "That's true for athletes, but a lot of students in the orchestra finish at five."
      },
      {
       "sp": "W",
       "text": "How about opening on Sunday afternoons only, from one to five? Some schools do that."
      },
      {
       "sp": "M",
       "text": "Staffing might be a problem. The librarians would need weekend pay."
      },
      {
       "sp": "W",
       "text": "Let's put both options on the survey and let the results decide."
      }
     ],
     "questions": [
      {
       "id": "pp18_34",
       "q": "Why does the woman doubt that longer weekday hours would help?",
       "choices": [
        "Many students are at club practice until six.",
        "The librarians go home at five.",
        "Most students do not like reading.",
        "The library is too far from the gym."
       ],
       "answer": 0,
       "keyEn": "most of us are at club practice until six, so longer weekday hours wouldn't help.",
       "keyJa": "多くの生徒は6時まで部活なので、平日の延長は役に立たない",
       "expl": "orchestra(5時終了)は男性の反論。女性の主張の根拠は club practice until six。"
      },
      {
       "id": "pp18_35",
       "q": "What do the speakers decide to do?",
       "choices": [
        "Include both options in the survey.",
        "Open the library on Sundays immediately.",
        "Extend the weekday hours to eight.",
        "Ask the librarians to work for free."
       ],
       "answer": 0,
       "keyEn": "Let's put both options on the survey and let the results decide.",
       "keyJa": "両方の案をアンケートに入れて結果で決める",
       "expl": "Staffing の懸念は残るが、最終案は let the results decide(結果に委ねる)。"
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
       "text": "Four students, Ken, Mia, Dan and Sue, are discussing how to spend this year's school festival budget."
      },
      {
       "sp": "M",
       "text": "I'd like to spend most of it on a professional band for the stage. That attracts visitors and makes the festival memorable."
      },
      {
       "sp": "W",
       "text": "But a band would eat up the whole budget. I'd rather support class exhibits, so that every student gets to take part."
      },
      {
       "sp": "M2",
       "text": "I see both points. A band draws crowds, but exhibits are what make our festival ours. What about hiring a small local band for half the price?"
      },
      {
       "sp": "W2",
       "text": "That could work, but I'm worried the exhibits would get less money than last year. We should set a minimum for exhibits first."
      },
      {
       "sp": "M",
       "text": "Fine, as long as the stage still gets enough to look professional."
      },
      {
       "sp": "W",
       "text": "Then let's guarantee the exhibits sixty percent, and the stage gets the rest."
      },
      {
       "sp": "M2",
       "text": "I can support that."
      }
     ],
     "questions": [
      {
       "id": "pp18_36",
       "q": "Who is mainly concerned that every student should be able to take part?",
       "choices": [
        "Mia",
        "Ken",
        "Dan",
        "Sue"
       ],
       "answer": 0,
       "keyEn": "I'd rather support class exhibits, so that every student gets to take part.",
       "keyJa": "全員が参加できるよう、クラス展示を支援したいと考えているのはミア",
       "expl": "so that every student gets to take part がミアの主張。Sue は展示予算の減少を心配するが、参加の公平性の話ではない。"
      },
      {
       "id": "pp18_37",
       "q": "What will the students most likely decide?",
       "choices": [
        "Give exhibits at least sixty percent and use the rest for the stage.",
        "Spend the whole festival budget on one professional band for the stage.",
        "Cancel the stage show completely and give all the money to the exhibits.",
        "Cut the exhibit budget in half so that two bands can be hired."
       ],
       "answer": 0,
       "keyEn": "let's guarantee the exhibits sixty percent, and the stage gets the rest. — I can support that.",
       "keyJa": "展示に最低6割を保証し、残りをステージに使う",
       "expl": "Sue の minimum を、Mia が sixty percent と具体化し、Dan が賛成、Ken も条件つきで容認。"
      }
     ]
    }
   ]
  }
 ]
};
