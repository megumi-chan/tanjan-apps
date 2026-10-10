// ============================================================
// 2016年 アルファ 本番形式模試(37問・100点満点)
// ============================================================

window.MOCK_TESTS = window.MOCK_TESTS || {};

window.MOCK_TESTS["2016"] = {
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
       "text": "I was going to take the seven-forty express, but the notice board says it's been replaced by a local train that stops at every station, so I'll leave ten minutes earlier and catch that one instead."
      }
     ],
     "questions": [
      {
       "id": "pp16_01",
       "q": "What will the speaker do?",
       "choices": [
        "Leave home earlier than planned to take a slower train.",
        "Take the seven-forty express as planned.",
        "Leave ten minutes later to catch the express.",
        "Cancel her trip because the express was replaced."
       ],
       "answer": 0,
       "keyEn": "so I'll leave ten minutes earlier and catch that one instead.",
       "keyJa": "10分早く出て、各駅停車に乗ることにした",
       "expl": "express → local train への差し替え。各駅停車は遅いので早めに出る、という判断。instead が計画変更の合図。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "Ordinarily I'd have chosen the blue jacket, but it only came in extra large, which would have hung on me like a tent, so I settled for the grey one, even though it was a little pricier."
      }
     ],
     "questions": [
      {
       "id": "pp16_02",
       "q": "Why did the speaker buy the grey jacket?",
       "choices": [
        "The blue one did not come in a suitable size.",
        "The grey one was cheaper than the blue one.",
        "He likes grey better than blue.",
        "A shop assistant strongly recommended it."
       ],
       "answer": 0,
       "keyEn": "it only came in extra large, which would have hung on me like a tent.",
       "keyJa": "青は特大しかなく、テントのようにだぶだぶになるので灰色にした",
       "expl": "hang on me like a tent =「テントのようにぶかぶか」。a little pricier(少し高い)は不利な点で、選ばれた理由ではない。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Contrary to what the brochure suggests, the hotel's pool isn't open to everyone; only guests in the main building can use it, and even they have to book a time slot in advance."
      }
     ],
     "questions": [
      {
       "id": "pp16_03",
       "q": "What is true about the hotel's pool?",
       "choices": [
        "Guests in other buildings cannot use it.",
        "All guests can use it whenever they like.",
        "Main building guests can use it without booking.",
        "It is closed for repairs at the moment."
       ],
       "answer": 0,
       "keyEn": "only guests in the main building can use it, and even they have to book a time slot.",
       "keyJa": "使えるのは本館の宿泊客だけで、それも時間帯の予約が必要",
       "expl": "Contrary to ... =「〜に反して」。only ... と even they ... の二重の制限。「予約不要」は誤り。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I assumed the museum was free every Sunday, but it turns out to be only the first Sunday of each month, and since today is the last one, I'd either have to pay or come back next month."
      }
     ],
     "questions": [
      {
       "id": "pp16_04",
       "q": "What does the speaker mean?",
       "choices": [
        "Free admission is not available today.",
        "The museum is free every Sunday.",
        "The museum is closed until next month.",
        "He will visit again next week."
       ],
       "answer": 0,
       "keyEn": "since today is the last one, I'd either have to pay or come back next month.",
       "keyJa": "今日は最終日曜なので、払うか来月出直すしかない",
       "expl": "only the first Sunday で思い込みが訂正される。today is the last one =「今日は最後の日曜」→今日は無料ではない。"
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
       "text": "A man in a raincoat is standing under a bus shelter, holding a closed umbrella in one hand and a paper bag in the other, while a bicycle leans against the side of the shelter."
      }
     ],
     "questions": [
      {
       "id": "pp16_05",
       "q": "Which description matches what you hear?",
       "choices": [
        "A man holds a closed umbrella and a bag; a bicycle leans on the shelter.",
        "A man holds an open umbrella and a bag; a bicycle leans on the shelter.",
        "A man holds a closed umbrella and a bag; a bicycle is being ridden past.",
        "A man holds a closed umbrella in both hands; a bicycle leans on the shelter."
       ],
       "answer": 0,
       "keyEn": "holding a closed umbrella in one hand and a paper bag in the other.",
       "keyJa": "片手に閉じた傘、もう片手に紙袋、自転車は屋根のそばに立てかけてある",
       "expl": "closed(閉じた)/ in one hand and ... in the other(片手に〜、もう片手に〜)/ leans against(立てかけてある)の3点で絞る。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "In the photo, two girls are sitting on a bench facing a pond; the taller one is feeding the ducks, while the other, wearing a hat, is taking a picture of her."
      }
     ],
     "questions": [
      {
       "id": "pp16_06",
       "q": "Which description matches what you hear?",
       "choices": [
        "The girl in a hat is photographing the girl who feeds the ducks.",
        "The girl in a hat is feeding the ducks while the other takes a picture.",
        "Both girls are feeding the ducks from the bench.",
        "The taller girl is photographing the girl in a hat."
       ],
       "answer": 0,
       "keyEn": "the taller one is feeding the ducks, while the other, wearing a hat, is taking a picture of her.",
       "keyJa": "背の高い子がカモに餌をやり、帽子の子がその子を撮影している",
       "expl": "the taller one / the other の対応がカギ。誰が餌やり役で誰が撮影役かを入れ替えた選択肢に注意。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "There are three cups on the table: the one nearest the window is empty, the one in the middle is half full, and a teapot sits right beside the last cup."
      }
     ],
     "questions": [
      {
       "id": "pp16_07",
       "q": "Which description matches what you hear?",
       "choices": [
        "The empty cup is by the window, and the teapot is next to the farthest cup.",
        "The half-full cup is by the window, and the teapot is in the middle.",
        "The empty cup is in the middle, and the teapot is by the window.",
        "All three cups are empty, and the teapot is by the window."
       ],
       "answer": 0,
       "keyEn": "the one nearest the window is empty, the one in the middle is half full.",
       "keyJa": "窓に最も近いカップは空、真ん中は半分、ティーポットは最後のカップの隣",
       "expl": "nearest the window / in the middle / the last の位置と、empty / half full の状態を対応づける。"
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
       "text": "Tickets are fifteen dollars for adults and ten dollars for students."
      },
      {
       "sp": "W",
       "text": "Two adults and one student, please."
      },
      {
       "sp": "M",
       "text": "Do you have a membership card? Members get two dollars off each ticket."
      },
      {
       "sp": "W",
       "text": "I do, but it expired last month."
      }
     ],
     "questions": [
      {
       "id": "pp16_08",
       "q": "How much will the woman pay?",
       "choices": [
        "$40",
        "$34",
        "$30",
        "$35"
       ],
       "answer": 0,
       "keyEn": "Two adults and one student. — it expired last month.",
       "keyJa": "大人2枚+学生1枚で40ドル。会員証は期限切れなので割引なし",
       "expl": "15+15+10=40。expired =「期限切れ」で割引は使えない。割引後の34ドルを選ばせるワナ。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "The seminar room is booked until noon."
      },
      {
       "sp": "M",
       "text": "Then how about the lounge on the second floor?"
      },
      {
       "sp": "W",
       "text": "That's reserved for the staff meeting. But the library annex on the ground floor is free after eleven."
      },
      {
       "sp": "M",
       "text": "Perfect. I'll meet the group there at eleven thirty."
      }
     ],
     "questions": [
      {
       "id": "pp16_09",
       "q": "Where will the meeting be held?",
       "choices": [
        "In the library annex.",
        "In the seminar room.",
        "In the second-floor lounge.",
        "In the staff meeting room."
       ],
       "answer": 0,
       "keyEn": "the library annex on the ground floor is free after eleven.",
       "keyJa": "1階の図書館別館が11時以降空いているので、そこで会う",
       "expl": "seminar room(正午まで予約)、lounge(職員会議)と消去していき、最後に提案された annex に決定。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "Could you drop me at the airport? My flight is at nine."
      },
      {
       "sp": "W",
       "text": "Traffic is bad on weekday mornings, so let's leave at five thirty."
      },
      {
       "sp": "M",
       "text": "That's too early for me. How about six, and we take the toll road to save time?"
      },
      {
       "sp": "W",
       "text": "All right, six it is, but you're paying the toll."
      }
     ],
     "questions": [
      {
       "id": "pp16_10",
       "q": "When and how will they travel to the airport?",
       "choices": [
        "Leaving at six on the toll road.",
        "Leaving at five thirty on the toll road.",
        "Leaving at six on the regular road.",
        "Leaving at seven on the toll road."
       ],
       "answer": 0,
       "keyEn": "How about six, and we take the toll road? — six it is.",
       "keyJa": "6時出発・有料道路で合意",
       "expl": "5:30の提案は拒否され、6時+有料道路の修正案で合意。出発時刻と道の2点を両方確認する。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "I'd like to return this blender. It stopped working after two weeks."
      },
      {
       "sp": "M",
       "text": "Do you have the receipt?"
      },
      {
       "sp": "W",
       "text": "I threw it away, but I paid by card."
      },
      {
       "sp": "M",
       "text": "Then I can look up the purchase. We can offer a replacement or store credit, but not a cash refund without a receipt."
      },
      {
       "sp": "W",
       "text": "A replacement, please. Actually, I've changed my mind. Store credit, because I'd rather buy the larger model."
      }
     ],
     "questions": [
      {
       "id": "pp16_11",
       "q": "What will the woman receive?",
       "choices": [
        "Store credit.",
        "A replacement blender.",
        "A cash refund.",
        "A larger blender for free."
       ],
       "answer": 0,
       "keyEn": "Actually, I've changed my mind. Store credit.",
       "keyJa": "気が変わって、店のクレジット(返金ポイント)にした",
       "expl": "A replacement → Actually, I've changed my mind → Store credit。言い直しの最後が答え。cash refund は領収書がなく不可。"
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
       "text": "Are you going to Lucy's birthday dinner?"
      },
      {
       "sp": "W",
       "text": "I haven't decided. It's at that new seafood place."
      },
      {
       "sp": "M",
       "text": "I thought you loved seafood."
      },
      {
       "sp": "W",
       "text": "I do. I'm just not sure I can sit through a three-hour meal after the week I've had."
      }
     ],
     "questions": [
      {
       "id": "pp16_12",
       "q": "Why is the woman hesitant about going?",
       "choices": [
        "She is worn out from the week.",
        "She dislikes seafood.",
        "She cannot afford the restaurant.",
        "She was not invited."
       ],
       "answer": 0,
       "keyEn": "I'm just not sure I can sit through a three-hour meal after the week I've had.",
       "keyJa": "今週は疲れ切っていて、3時間の食事に耐えられるか自信がない",
       "expl": "I do(好き)で seafood の線を消す。after the week I've had =「大変な一週間だったので」で疲労を示す。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Did you hear back from the landlord about the leaking sink?"
      },
      {
       "sp": "M",
       "text": "He said he'd send someone on Monday, which is exactly what he said last Monday."
      },
      {
       "sp": "W",
       "text": "So we'll end up fixing it ourselves."
      }
     ],
     "questions": [
      {
       "id": "pp16_13",
       "q": "What does the man imply about the landlord?",
       "choices": [
        "He may not keep his promise.",
        "He is very reliable.",
        "He has already repaired the sink.",
        "He is away on vacation."
       ],
       "answer": 0,
       "keyEn": "which is exactly what he said last Monday.",
       "keyJa": "先週の月曜にも全く同じことを言っていた",
       "expl": "同じ約束が繰り返されている=守られていないという含意。exactly what he said last Monday が決め手。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "How's your new phone? You were so excited about it."
      },
      {
       "sp": "W",
       "text": "The camera is fantastic. The battery, though, barely makes it to lunchtime."
      },
      {
       "sp": "M",
       "text": "That would be a dealbreaker for me."
      }
     ],
     "questions": [
      {
       "id": "pp16_14",
       "q": "What can be inferred about the man?",
       "choices": [
        "He would not buy a phone with poor battery life.",
        "He plans to buy the same phone.",
        "He does not care about battery life.",
        "He wants a phone with a better camera."
       ],
       "answer": 0,
       "keyEn": "That would be a dealbreaker for me.",
       "keyJa": "(バッテリーが持たないのは)私なら論外だ",
       "expl": "dealbreaker =「契約・購入を取りやめる決定的な欠点」。男性はバッテリーが短い電話を買わない。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Your essay was due yesterday, wasn't it?"
      },
      {
       "sp": "M",
       "text": "Professor Wilson gave me until Friday because of my hospital visit."
      },
      {
       "sp": "W",
       "text": "Lucky you. She told us extensions were out of the question."
      },
      {
       "sp": "M",
       "text": "She made an exception since I had a doctor's note."
      }
     ],
     "questions": [
      {
       "id": "pp16_15",
       "q": "Why did the man get extra time?",
       "choices": [
        "He had a medical reason and a note to prove it.",
        "The deadline was extended for the whole class.",
        "The professor forgot about the deadline.",
        "He promised to write a longer essay."
       ],
       "answer": 0,
       "keyEn": "She made an exception since I had a doctor's note.",
       "keyJa": "医師の診断書があったので特例が認められた",
       "expl": "out of the question =「問題外」→原則は延長不可。make an exception(例外にする)の理由が doctor's note。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I'll book the train tickets tonight. Window or aisle?"
      },
      {
       "sp": "W",
       "text": "Aisle, please. I'm always getting up."
      },
      {
       "sp": "M",
       "text": "And the return? The cheap fare ends at five p.m. on Sunday."
      },
      {
       "sp": "W",
       "text": "Then the four-thirty train. I'd rather save the money than sleep in."
      }
     ],
     "questions": [
      {
       "id": "pp16_16",
       "q": "What will the woman do?",
       "choices": [
        "Take the four-thirty train on Sunday.",
        "Choose a window seat.",
        "Take a train after five o'clock on Sunday.",
        "Travel back on Saturday."
       ],
       "answer": 0,
       "keyEn": "Then the four-thirty train. I'd rather save the money than sleep in.",
       "keyJa": "安い運賃のため、日曜の4時半の列車で帰る",
       "expl": "cheap fare は5時まで→4:30発に決定。I'd rather A than B =「Bよりむしろ A」。Aisle は座席の話でここでは別。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "That's the third time the bus has been late this week."
      },
      {
       "sp": "M",
       "text": "Maybe we should complain."
      },
      {
       "sp": "W",
       "text": "To whom? The company will just blame the roadworks."
      },
      {
       "sp": "M",
       "text": "True. Then let's start leaving fifteen minutes earlier."
      }
     ],
     "questions": [
      {
       "id": "pp16_17",
       "q": "What do the speakers decide to do?",
       "choices": [
        "Change their own schedule.",
        "Make a complaint to the company.",
        "Take a taxi every morning.",
        "Wait for the roadworks to finish."
       ],
       "answer": 0,
       "keyEn": "Then let's start leaving fifteen minutes earlier.",
       "keyJa": "自分たちが15分早く出ることにする",
       "expl": "complain の提案は To whom? で退けられ、最終案が leave earlier。Then let's ... が結論の合図。"
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
       "text": "Welcome to the Maple Library's weekly program. On Tuesday, story hour for children starts at ten thirty in the Reading Room. Wednesday's computer class was supposed to be in the Media Lab, but because of repairs it has been moved to Room 3, and it begins at two. The Thursday book club normally meets at seven, but this week it will start one hour earlier, so please arrive by six. It takes place in the Reading Room, as usual. Finally, Friday's movie night will be held in the Media Lab at seven thirty. Please note that no food is allowed in the Media Lab."
      }
     ],
     "questions": [
      {
       "id": "pp16_18",
       "q": "Tuesday story hour starts at ( ① ).",
       "choices": [
        "10:30",
        "10:00",
        "11:00",
        "1:00"
       ],
       "answer": 0,
       "keyEn": "story hour for children starts at ten thirty in the Reading Room.",
       "keyJa": "火曜の読み聞かせは10時30分開始",
       "expl": "最初の情報。ten thirty =10:30。"
      },
      {
       "id": "pp16_19",
       "q": "Wednesday computer class is in ( ② ).",
       "choices": [
        "Room 3",
        "the Media Lab",
        "the Reading Room",
        "Room 2"
       ],
       "answer": 0,
       "keyEn": "it has been moved to Room 3.",
       "keyJa": "水曜のパソコン教室は修理のため3号室に移動",
       "expl": "supposed to be(予定だった)→ moved(移動した)。変更後が正解。"
      },
      {
       "id": "pp16_20",
       "q": "Thursday book club starts at ( ③ ).",
       "choices": [
        "6:00",
        "7:00",
        "8:00",
        "5:00"
       ],
       "answer": 0,
       "keyEn": "it will start one hour earlier, so please arrive by six.",
       "keyJa": "いつもの7時より1時間早い6時開始",
       "expl": "normally seven → one hour earlier = 6:00。"
      },
      {
       "id": "pp16_21",
       "q": "Friday movie night is in ( ④ ).",
       "choices": [
        "the Media Lab",
        "the Reading Room",
        "Room 3",
        "the Auditorium"
       ],
       "answer": 0,
       "keyEn": "Friday's movie night will be held in the Media Lab at seven thirty.",
       "keyJa": "金曜の映画の夜はメディアラボ",
       "expl": "水曜に使えなかった Media Lab が金曜は使える。no food は表に無関係。"
      }
     ],
     "table": [
      [
       "Day",
       "Start time",
       "Room"
      ],
      [
       "Tuesday",
       "①",
       "Reading Room"
      ],
      [
       "Wednesday",
       "2:00",
       "②"
      ],
      [
       "Thursday",
       "③",
       "Reading Room"
      ],
      [
       "Friday",
       "7:30",
       "④"
      ]
     ]
    },
    {
     "script": [
      {
       "sp": "N",
       "text": "Here are the three trails in the park. Trail A is four kilometers long, and it's the easiest, so it's perfect for families. Trail B is twice as long as Trail A, and it's rated hard because of the steep stairs near the top. Trail C is one kilometer shorter than Trail B. Its difficulty is medium, but be careful in the rainy season, when part of it can flood."
      }
     ],
     "questions": [
      {
       "id": "pp16_22",
       "q": "Trail B is ( ① ) long.",
       "choices": [
        "8 km",
        "4 km",
        "6 km",
        "12 km"
       ],
       "answer": 0,
       "keyEn": "Trail B is twice as long as Trail A.",
       "keyJa": "Bの長さはAの2倍=8km",
       "expl": "twice as long as =「2倍の長さ」。4×2=8。"
      },
      {
       "id": "pp16_23",
       "q": "Trail C is ( ② ) long.",
       "choices": [
        "7 km",
        "6 km",
        "8 km",
        "9 km"
       ],
       "answer": 0,
       "keyEn": "Trail C is one kilometer shorter than Trail B.",
       "keyJa": "CはBより1km短い=7km",
       "expl": "8−1=7。Bの数字を先に出してから引く2段階の計算。"
      },
      {
       "id": "pp16_24",
       "q": "The level of Trail A is ( ③ ).",
       "choices": [
        "easy",
        "medium",
        "hard",
        "closed"
       ],
       "answer": 0,
       "keyEn": "Trail A is four kilometers long, and it's the easiest.",
       "keyJa": "Aは最も易しい",
       "expl": "easiest =「いちばん易しい」=easy。"
      },
      {
       "id": "pp16_25",
       "q": "The level of Trail C is ( ④ ).",
       "choices": [
        "medium",
        "easy",
        "hard",
        "closed in the rainy season"
       ],
       "answer": 0,
       "keyEn": "Its difficulty is medium, but be careful in the rainy season.",
       "keyJa": "Cの難易度は中程度(雨季は要注意)",
       "expl": "difficulty is medium。雨季の注意は難易度の変更ではない。"
      }
     ],
     "table": [
      [
       "Trail",
       "Length",
       "Level"
      ],
      [
       "A",
       "4 km",
       "③"
      ],
      [
       "B",
       "①",
       "hard"
      ],
      [
       "C",
       "②",
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
       "text": "Number one. The apartment is ten minutes from the station, fifty-six thousand yen a month with utilities included, but pets are not allowed. The room is eleven square meters."
      },
      {
       "sp": "W",
       "text": "Number two. It's a fourteen-minute walk from the station. The rent is fifty-two thousand yen, plus about six thousand for utilities. Cats are welcome, but the room is only nine square meters."
      },
      {
       "sp": "M2",
       "text": "Number three. Eight minutes from the station, fifty-seven thousand yen, and utilities average four thousand a month. Cats are welcome, and the room is eleven square meters."
      },
      {
       "sp": "W2",
       "text": "Number four. It's a fifteen-minute walk from the station. The rent is fifty-four thousand yen, with about five thousand for utilities. Cats are allowed, and the room is ten square meters."
      }
     ],
     "questions": [
      {
       "id": "pp16_26",
       "q": "You want a place within a fifteen-minute walk of the station, costing less than sixty thousand yen a month including utilities, where your cat is allowed, and with a room of at least ten square meters. Which apartment should you choose?",
       "choices": [
        "Number one",
        "Number two",
        "Number three",
        "Number four"
       ],
       "answer": 3,
       "keyEn": "Number four. A fifteen-minute walk, fifty-four thousand plus about five thousand for utilities, cats allowed, ten square meters.",
       "keyJa": "4番=徒歩15分・合計約5万9千円・猫可・10㎡で全条件を満たす",
       "expl": "1=ペット不可、2=9㎡で狭い、3=57,000+4,000=61,000円で予算超過、4=全条件OK。家賃+光熱費の合算を忘れない。",
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
       "text": "Cities are often several degrees warmer than the countryside around them, a phenomenon known as the urban heat island effect. In a large city, the difference can reach as much as five degrees Celsius on a calm summer night. Three main factors are responsible. First, materials such as asphalt and concrete absorb heat during the day and release it slowly after sunset. Second, tall buildings block the wind, which would otherwise carry heat away. Third, air conditioners, cars and factories give off heat of their own. Some cities are trying to cool themselves down. Painting roofs white reflects sunlight and can lower the temperature inside a building by several degrees. Planting trees is also effective, but it takes years before young trees provide enough shade, and space for them is limited. One study found that even a small park of about one hectare could cool the surrounding streets by about one degree. However, the researchers warned that parks alone cannot solve the problem. They should be combined with reflective roofs and better building design."
      }
     ],
     "questions": [
      {
       "id": "pp16_27",
       "q": "What is the main point of the lecture?",
       "choices": [
        "Cities get hotter than their surroundings for several reasons, so combined measures are needed.",
        "Planting trees in parks is the only effective way to cool a large modern city.",
        "Air conditioners and cars are by far the main reason cities get so hot at night.",
        "Cities stay cooler than the countryside at night because of their tall buildings."
       ],
       "answer": 0,
       "keyEn": "parks alone cannot solve the problem. They should be combined with reflective roofs and better building design.",
       "keyJa": "公園だけでは解決できず、反射屋根や建物設計と組み合わせるべき",
       "expl": "原因が複数(three main factors)で、対策も組み合わせ(combined)が結論。「唯一の」「主な原因は〜」は言い過ぎ。",
       "points": 3
      },
      {
       "id": "pp16_28",
       "q": "How large can the temperature difference be on a calm summer night?",
       "choices": [
        "About five degrees Celsius.",
        "About one degree Celsius.",
        "About three degrees Celsius.",
        "About ten degrees Celsius."
       ],
       "answer": 0,
       "keyEn": "the difference can reach as much as five degrees Celsius on a calm summer night.",
       "keyJa": "穏やかな夏の夜には最大約5度の差",
       "expl": "as much as =「〜もの」。one degree は公園の冷却効果の数字なので混同しない。"
      },
      {
       "id": "pp16_29",
       "q": "Which is NOT mentioned as a cause of the urban heat island effect?",
       "choices": [
        "Heavy rain in summer.",
        "Materials that store heat.",
        "Tall buildings that block the wind.",
        "Heat from air conditioners and cars."
       ],
       "answer": 0,
       "keyEn": "asphalt and concrete absorb heat; tall buildings block the wind; air conditioners, cars and factories give off heat.",
       "keyJa": "原因は蓄熱する素材・風を遮る高層ビル・冷房や車などの排熱の3つ",
       "expl": "First / Second / Third の3点以外を選ぶ NOT 問題。heavy rain は一切出てこない。"
      },
      {
       "id": "pp16_30",
       "q": "Why do asphalt and concrete keep cities warm at night?",
       "choices": [
        "They take in heat by day and let it out slowly after sunset.",
        "They reflect most of the sunlight back to space.",
        "They stop the wind from blowing at night.",
        "They give off heat as machines do."
       ],
       "answer": 0,
       "keyEn": "absorb heat during the day and release it slowly after sunset.",
       "keyJa": "昼に熱を吸収し、日没後にゆっくり放出する",
       "expl": "absorb → release slowly の因果。「風を止める」は2つ目の要因(高層ビル)の説明で別物。"
      },
      {
       "id": "pp16_31",
       "q": "What is a problem with planting trees?",
       "choices": [
        "Young trees need years before they give enough shade.",
        "Trees give off heat of their own and make the air hotter than before.",
        "Trees cost less to plant than it costs to paint a whole roof white.",
        "Trees block the wind and so trap the heat between the buildings."
       ],
       "answer": 0,
       "keyEn": "it takes years before young trees provide enough shade, and space for them is limited.",
       "keyJa": "若木が十分な日陰をつくるまで何年もかかり、場所も限られる",
       "expl": "it takes years before ... が欠点。space is limited も添えられている。"
      },
      {
       "id": "pp16_32",
       "q": "What did the study find about a small park?",
       "choices": [
        "It cooled nearby streets by about one degree.",
        "It cooled the whole city by five degrees.",
        "It had no effect on temperature.",
        "It made the streets warmer."
       ],
       "answer": 0,
       "keyEn": "even a small park of about one hectare could cool the surrounding streets by about one degree.",
       "keyJa": "約1ヘクタールの小さな公園でも周囲の道路を約1度冷やせた",
       "expl": "even a small park(小さな公園でさえ)。効果は surrounding streets 約1度にとどまる。"
      },
      {
       "id": "pp16_33",
       "q": "What do the researchers recommend?",
       "choices": [
        "Using parks together with reflective roofs and better design.",
        "Relying on parks alone to cool the city down in summer.",
        "Painting every building in the city black to absorb the heat.",
        "Moving all the factories into the city center to save energy."
       ],
       "answer": 0,
       "keyEn": "They should be combined with reflective roofs and better building design.",
       "keyJa": "公園は反射屋根や建物設計の改善と組み合わせるべき",
       "expl": "parks alone(公園だけ)を退け、combined を勧める結論。"
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
       "text": "Have you decided between the beach cleanup program and the part-time job at the bakery?"
      },
      {
       "sp": "W",
       "text": "Not yet. The bakery pays eight hundred yen an hour, but the schedule changes every week."
      },
      {
       "sp": "M",
       "text": "And the cleanup program?"
      },
      {
       "sp": "W",
       "text": "It's unpaid, but it's only every other Saturday morning, and it apparently looks great on a university application."
      },
      {
       "sp": "M",
       "text": "Honestly, I'd choose the bakery. Money is money."
      },
      {
       "sp": "W",
       "text": "But if my schedule keeps changing, I won't be able to make it to club practice. That's the real issue."
      },
      {
       "sp": "M",
       "text": "Can't you tell the bakery which days you're free?"
      },
      {
       "sp": "W",
       "text": "I could try. If they agree to fixed days, I'll take the job. Otherwise, I'll do the cleanup."
      }
     ],
     "questions": [
      {
       "id": "pp16_34",
       "q": "What worries the woman most about the bakery job?",
       "choices": [
        "Its changing hours might conflict with her club.",
        "The hourly pay is too low compared with other jobs in the area.",
        "The work is too tiring to do after a full day at school.",
        "It is too far away from her home for her to commute."
       ],
       "answer": 0,
       "keyEn": "if my schedule keeps changing, I won't be able to make it to club practice. That's the real issue.",
       "keyJa": "シフトが変わり続けると、部活の練習に出られなくなる。それが本当の問題",
       "expl": "pay(時給)は懸念として出ていない。That's the real issue が本音を示す合図。"
      },
      {
       "id": "pp16_35",
       "q": "What will the woman do if the bakery refuses fixed days?",
       "choices": [
        "Join the cleanup program.",
        "Take the bakery job anyway.",
        "Quit her club.",
        "Look for a different paid job."
       ],
       "answer": 0,
       "keyEn": "If they agree to fixed days, I'll take the job. Otherwise, I'll do the cleanup.",
       "keyJa": "固定の曜日にしてもらえなければ、清掃活動に参加する",
       "expl": "If ..., ... Otherwise, ... の条件分岐。Otherwise 以降が「断られた場合」の行動。"
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
       "text": "Four students, Ken, Mia, Dan and Sue, are discussing whether their school should start an hour later in the morning."
      },
      {
       "sp": "M",
       "text": "I'm for it. Teenagers naturally stay up later, and studies show students learn better with more sleep."
      },
      {
       "sp": "W",
       "text": "But if school starts an hour later, it also ends an hour later. That would cut into my club activities and my part-time job."
      },
      {
       "sp": "M2",
       "text": "I agree with Ken about sleep, Mia, but I share your worry. Maybe we could shorten the lunch break instead of finishing later."
      },
      {
       "sp": "W2",
       "text": "I'm not sure any change is needed. If we all went to bed earlier, we wouldn't have a problem. Starting later may only make us stay up even later."
      },
      {
       "sp": "M",
       "text": "That's a fair point, Sue, but a lot of us can't sleep earlier because of homework."
      },
      {
       "sp": "W",
       "text": "What if we try it for one semester and then vote on whether to keep it?"
      },
      {
       "sp": "M2",
       "text": "I'd support that, as long as the trial includes a shorter lunch break."
      }
     ],
     "questions": [
      {
       "id": "pp16_36",
       "q": "Who thinks students' sleep problems come mainly from their own habits?",
       "choices": [
        "Sue",
        "Ken",
        "Mia",
        "Dan"
       ],
       "answer": 0,
       "keyEn": "If we all went to bed earlier, we wouldn't have a problem.",
       "keyJa": "みんなが早く寝れば問題ない、とスーは考えている",
       "expl": "Sue の if we all went to bed earlier が「生活習慣の問題」という主張。Ken は睡眠不足の事実、Mia は終了時刻の遅れを問題にしている。"
      },
      {
       "id": "pp16_37",
       "q": "What are the students most likely to propose?",
       "choices": [
        "A one-semester trial with a shorter lunch break.",
        "A permanent later start from next year.",
        "No change to the school schedule.",
        "Longer club activities after school."
       ],
       "answer": 0,
       "keyEn": "What if we try it for one semester? — as long as the trial includes a shorter lunch break.",
       "keyJa": "1学期だけ試し、昼休みを短くする条件で支持",
       "expl": "Mia の trial 案を Dan が条件つきで支持。What if ...? が妥協案の合図。Sue は反対だが、会話の流れは試行案へ向かっている。"
      }
     ]
    }
   ]
  }
 ]
};
