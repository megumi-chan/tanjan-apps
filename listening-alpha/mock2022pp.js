// ============================================================
// 2022年 アルファ 本番形式模試(37問・100点満点)
// ============================================================

window.MOCK_TESTS = window.MOCK_TESTS || {};

window.MOCK_TESTS["2022"] = {
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
       "text": "My sister insisted the movie would be terrifying, so I bought a huge bucket of popcorn to hide behind, but it turned out to be a gentle comedy, and I'd finished all the popcorn before the previews were over."
      }
     ],
     "questions": [
      {
       "id": "pp22_01",
       "q": "What happened to the speaker?",
       "choices": [
        "The film was a comedy, not the horror story he expected.",
        "His sister refused to go to the cinema with him.",
        "The theater was too noisy to enjoy the film.",
        "He fell asleep halfway through the comedy."
       ],
       "answer": 0,
       "keyEn": "it turned out to be a gentle comedy.",
       "keyJa": "怖い映画だと思ったら、穏やかなコメディだった",
       "expl": "turn out to be =「結局〜だとわかる」。terrifying(予想)と gentle comedy(実際)の落差。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "I'd have taken the highway, but the radio said there was an accident near the tunnel, so I took the old coastal road, which added twenty minutes but at least let me enjoy the sea."
      }
     ],
     "questions": [
      {
       "id": "pp22_02",
       "q": "Why did the speaker take the coastal road?",
       "choices": [
        "To avoid an accident on the highway.",
        "To enjoy the view of the sea.",
        "Because the tunnel was closed for repairs.",
        "Because the highway was slower than usual."
       ],
       "answer": 0,
       "keyEn": "the radio said there was an accident near the tunnel, so I took the old coastal road.",
       "keyJa": "トンネル付近の事故をラジオで知り、海沿いの旧道を通った",
       "expl": "so の前が理由(事故)。at least let me enjoy the sea は「おまけの利点」で理由ではない。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "The seminar was far more useful than I had expected. I'd assumed it would be a sales pitch, but the speaker spent the whole hour answering our questions."
      }
     ],
     "questions": [
      {
       "id": "pp22_03",
       "q": "What did the speaker think of the seminar?",
       "choices": [
        "It was better than he had expected.",
        "It was the sales pitch he had feared.",
        "It was too short to be of any use.",
        "It was as dull as he had predicted."
       ],
       "answer": 0,
       "keyEn": "The seminar was far more useful than I had expected.",
       "keyJa": "セミナーは予想よりずっと役に立った",
       "expl": "far more ... than I had expected =「予想をはるかに上回る」。I'd assumed(思い込み)は覆された。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Whenever I try to explain the rules of cricket to my friends, I end up confusing myself, so I've decided that next time I'll just show them a video instead."
      }
     ],
     "questions": [
      {
       "id": "pp22_04",
       "q": "What will the speaker do next time?",
       "choices": [
        "Let her friends watch a video.",
        "Explain the rules more slowly.",
        "Take her friends to a cricket match.",
        "Ask someone else to explain the game."
       ],
       "answer": 0,
       "keyEn": "next time I'll just show them a video instead.",
       "keyJa": "次回は説明する代わりに動画を見せる",
       "expl": "end up ...ing =「結局〜してしまう」。instead は「説明の代わりに」の合図。"
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
       "text": "A man with a backpack is standing in front of a vending machine, while a girl next to him is counting coins in her palm and a bottle sits on the ground by their feet."
      }
     ],
     "questions": [
      {
       "id": "pp22_05",
       "q": "Which description matches what you hear?",
       "choices": [
        "A man waits at a vending machine; a girl counts coins; a bottle is on the ground.",
        "A man counts coins at a vending machine; a girl waits; a bottle is on the ground.",
        "A man waits at a vending machine; a girl counts coins; a bottle is in her bag.",
        "A man waits at a vending machine; a girl drinks from a bottle."
       ],
       "answer": 0,
       "keyEn": "a girl next to him is counting coins in her palm and a bottle sits on the ground.",
       "keyJa": "男性は自販機の前に立ち、隣の少女は手のひらの小銭を数え、足元にペットボトルがある",
       "expl": "誰がコインを数えているか(girl)と、bottle の位置(on the ground)がポイント。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "There are four umbrellas in a stand by the door. Two are folded, one is open and drying, and the shortest one has a yellow handle."
      }
     ],
     "questions": [
      {
       "id": "pp22_06",
       "q": "Which description matches what you hear?",
       "choices": [
        "Two are folded, one is open, and the shortest has a yellow handle.",
        "Three are folded, one is open, and the shortest has a yellow handle.",
        "Two are folded, one is open, and the tallest has a yellow handle.",
        "Two are folded, two are open, and the shortest has a yellow handle."
       ],
       "answer": 0,
       "keyEn": "Two are folded, one is open and drying, and the shortest one has a yellow handle.",
       "keyJa": "2本は閉じ、1本は開いて乾かし、いちばん短い傘の持ち手が黄色",
       "expl": "数(two / one)と状態(folded / open)、shortest か tallest かの3点。4本の合計も確認。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "In the classroom, a teacher is writing on the board while students in the front row raise their hands, and one student at the back is asleep with his head on his desk."
      }
     ],
     "questions": [
      {
       "id": "pp22_07",
       "q": "Which description matches what you hear?",
       "choices": [
        "Front-row students raise hands; a student at the back sleeps.",
        "Back-row students raise hands; a student in front sleeps.",
        "Front-row students raise hands; the teacher is sitting down.",
        "All students raise hands; one student leaves the room."
       ],
       "answer": 0,
       "keyEn": "students in the front row raise their hands, and one student at the back is asleep.",
       "keyJa": "前列の生徒が手を挙げ、後ろの生徒が一人寝ている",
       "expl": "front row / at the back の位置と、raise hands / asleep の動作の対応づけ。"
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
       "text": "The concert tickets are sixty dollars each, but there's a ten percent discount for booking online."
      },
      {
       "sp": "M",
       "text": "I'm buying three. And there's a five-dollar service fee per ticket."
      },
      {
       "sp": "W",
       "text": "Is the fee added before or after the discount?"
      },
      {
       "sp": "M",
       "text": "After."
      }
     ],
     "questions": [
      {
       "id": "pp22_08",
       "q": "How much will the man pay in total?",
       "choices": [
        "$177",
        "$162",
        "$195",
        "$183"
       ],
       "answer": 0,
       "keyEn": "sixty dollars each, ten percent discount ... a five-dollar service fee per ticket ... After.",
       "keyJa": "3枚×60=180ドルの1割引で162ドル、割引後に手数料5ドル×3=15ドルを加算して177ドル",
       "expl": "180×0.9=162、162+15=177。手数料が割引の「後」(After)。162ドルは手数料の入れ忘れ、195ドルは割引なし。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "Let's schedule the rehearsal for Tuesday at four."
      },
      {
       "sp": "W",
       "text": "I have a part-time job on Tuesday."
      },
      {
       "sp": "M",
       "text": "Wednesday, then?"
      },
      {
       "sp": "W",
       "text": "The hall is booked on Wednesday."
      },
      {
       "sp": "M",
       "text": "What about Thursday after school?"
      },
      {
       "sp": "W",
       "text": "Thursday works, but the drama club has the hall until five. We could start at five thirty."
      }
     ],
     "questions": [
      {
       "id": "pp22_09",
       "q": "When will the rehearsal start?",
       "choices": [
        "Thursday at 5:30",
        "Tuesday at 4:00",
        "Wednesday at 4:00",
        "Thursday at 5:00"
       ],
       "answer": 0,
       "keyEn": "Thursday works, but the drama club has the hall until five. We could start at five thirty.",
       "keyJa": "火曜はバイト、水曜はホール予約済み、木曜は演劇部が5時まで使うので5時半開始",
       "expl": "Tuesday → Wednesday → Thursday と候補が消えていく。ホールが空くのは5時なので、余裕をみて5:30。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Is the soup vegetarian?"
      },
      {
       "sp": "M",
       "text": "The soup of the day is made with chicken stock, but the tomato soup is vegetarian."
      },
      {
       "sp": "W",
       "text": "I'll have the tomato soup, then, and a green salad."
      },
      {
       "sp": "M",
       "text": "The salad comes with bacon, but we can leave it out."
      },
      {
       "sp": "W",
       "text": "Please do."
      }
     ],
     "questions": [
      {
       "id": "pp22_10",
       "q": "What does the woman order?",
       "choices": [
        "Tomato soup and a salad without bacon.",
        "Chicken soup and a salad with bacon.",
        "Tomato soup and a salad with bacon.",
        "A green salad only."
       ],
       "answer": 0,
       "keyEn": "I'll have the tomato soup, then, and a green salad. — we can leave it out. — Please do.",
       "keyJa": "トマトスープと、ベーコン抜きのグリーンサラダ",
       "expl": "vegetarian の条件で tomato soup を選択。ベーコンは leave it out の提案に Please do で同意。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I'd like to renew these four books."
      },
      {
       "sp": "W",
       "text": "They're two days overdue. The fine is fifty cents per book per day."
      },
      {
       "sp": "M",
       "text": "Can I pay by card?"
      },
      {
       "sp": "W",
       "text": "Yes, and then I'll renew them for two weeks."
      }
     ],
     "questions": [
      {
       "id": "pp22_11",
       "q": "How much will the man pay?",
       "choices": [
        "$4",
        "$2",
        "$1",
        "$8"
       ],
       "answer": 0,
       "keyEn": "four books ... two days overdue ... fifty cents per book per day.",
       "keyJa": "4冊×2日×50セント=4ドルの延滞料",
       "expl": "0.5×4冊×2日=4。per book per day(1冊・1日ごと)の掛け算を2回行う。"
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
       "text": "Did you ever hear back about your scholarship application?"
      },
      {
       "sp": "M",
       "text": "Yes. They said I'm on the waiting list."
      },
      {
       "sp": "W",
       "text": "Well, that's not a no."
      },
      {
       "sp": "M",
       "text": "It's not a yes either."
      }
     ],
     "questions": [
      {
       "id": "pp22_12",
       "q": "What is the man's situation?",
       "choices": [
        "The result of his application is still undecided.",
        "He has been awarded the scholarship.",
        "His application has been turned down.",
        "He has not yet applied."
       ],
       "answer": 0,
       "keyEn": "They said I'm on the waiting list. — It's not a yes either.",
       "keyJa": "補欠(キャンセル待ち)で、合格とも不合格とも言えない",
       "expl": "not a no / not a yes either の二重否定的な表現。waiting list =「補欠リスト」。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "How did the presentation go?"
      },
      {
       "sp": "W",
       "text": "I forgot my notes, so I just spoke from the heart."
      },
      {
       "sp": "M",
       "text": "And?"
      },
      {
       "sp": "W",
       "text": "The teacher said it was my best one yet."
      }
     ],
     "questions": [
      {
       "id": "pp22_13",
       "q": "What can be concluded from the conversation?",
       "choices": [
        "Forgetting her notes did not hurt her presentation.",
        "She failed because she forgot her notes.",
        "The teacher disliked her style of speaking.",
        "She will bring longer notes next time."
       ],
       "answer": 0,
       "keyEn": "I forgot my notes, so I just spoke from the heart. ... my best one yet.",
       "keyJa": "メモを忘れたが、心から話したら、これまでで最高の発表と言われた",
       "expl": "the best one yet =「これまでで最高」。forgot(マイナス)が結果的にアルファに働いた。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Is that your new bike? It looks expensive."
      },
      {
       "sp": "M",
       "text": "It was a gift from my uncle. I'd never have bought it myself."
      },
      {
       "sp": "W",
       "text": "So you wouldn't have spent that much?"
      },
      {
       "sp": "M",
       "text": "Not in a million years."
      }
     ],
     "questions": [
      {
       "id": "pp22_14",
       "q": "What does the man mean?",
       "choices": [
        "He would never have paid so much for a bike.",
        "He thinks the bike was not worth buying.",
        "He is going to give the bike back.",
        "He has wanted that bike for a long time."
       ],
       "answer": 0,
       "keyEn": "I'd never have bought it myself. — Not in a million years.",
       "keyJa": "自分では絶対に買わなかった(そんな高額は)",
       "expl": "Not in a million years =「絶対にない」。I'd never have bought は仮定法。価値がないとまでは言っていない。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "The meeting has been moved to Thursday."
      },
      {
       "sp": "W",
       "text": "Again? That's the third change."
      },
      {
       "sp": "M",
       "text": "They keep saying it's out of their hands."
      },
      {
       "sp": "W",
       "text": "Then why do they keep telling us everything is under control?"
      }
     ],
     "questions": [
      {
       "id": "pp22_15",
       "q": "What is the woman's attitude?",
       "choices": [
        "She doubts the organizers' explanations.",
        "She trusts the organizers completely.",
        "She is happy about the new date.",
        "She wants to organize the meeting herself."
       ],
       "answer": 0,
       "keyEn": "Then why do they keep telling us everything is under control?",
       "keyJa": "なら、なぜ「すべて順調」と言い続けるのか",
       "expl": "out of their hands(手に負えない)と under control(掌握している)の矛盾を突く修辞疑問。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "I'd like to join the hiking trip, but I've never hiked more than an hour."
      },
      {
       "sp": "M",
       "text": "The route is four hours, though there are three rest stops."
      },
      {
       "sp": "W",
       "text": "That's still a long day."
      },
      {
       "sp": "M",
       "text": "We can turn back at the second stop if you're tired."
      }
     ],
     "questions": [
      {
       "id": "pp22_16",
       "q": "What does the man offer to do?",
       "choices": [
        "Let her go back early if she gets tired.",
        "Shorten the route to one hour.",
        "Carry her backpack for the whole trip.",
        "Cancel the trip for everyone."
       ],
       "answer": 0,
       "keyEn": "We can turn back at the second stop if you're tired.",
       "keyJa": "疲れたら2か所目の休憩所で引き返してもいい",
       "expl": "turn back =「引き返す」。ルートそのものは変えず、柔軟に対応するという提案。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "Why is the printer making that noise?"
      },
      {
       "sp": "W",
       "text": "It's been doing that since Monday."
      },
      {
       "sp": "M",
       "text": "Did you report it?"
      },
      {
       "sp": "W",
       "text": "I did. They said they'd send someone, and I'm still waiting."
      }
     ],
     "questions": [
      {
       "id": "pp22_17",
       "q": "What can be inferred from the conversation?",
       "choices": [
        "The printer has not been repaired yet.",
        "The printer was fixed on Monday.",
        "The woman has not reported the problem.",
        "The man will repair it himself."
       ],
       "answer": 0,
       "keyEn": "They said they'd send someone, and I'm still waiting.",
       "keyJa": "誰かを派遣すると言われたが、まだ待っている",
       "expl": "I'm still waiting =「まだ来ていない」→修理は未完。since Monday で故障が続いている。"
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
       "text": "Welcome to the community library. Members may borrow up to five books at a time, for two weeks. DVDs can be borrowed for three days, and members may take out up to two. Books can be renewed once, for another week. Fines are twenty cents per day for books and fifty cents per day for DVDs. Children under twelve pay no fines on books."
      }
     ],
     "questions": [
      {
       "id": "pp22_18",
       "q": "Members may borrow up to ( ① ) books.",
       "choices": [
        "5",
        "3",
        "10",
        "2"
       ],
       "answer": 0,
       "keyEn": "Members may borrow up to five books at a time, for two weeks.",
       "keyJa": "本は一度に5冊まで",
       "expl": "five books と two weeks の数字を取り違えない。"
      },
      {
       "id": "pp22_19",
       "q": "DVDs can be borrowed for ( ② ).",
       "choices": [
        "3 days",
        "1 week",
        "2 weeks",
        "5 days"
       ],
       "answer": 0,
       "keyEn": "DVDs can be borrowed for three days.",
       "keyJa": "DVDの貸出期間は3日間",
       "expl": "本の2週間と混同しない。"
      },
      {
       "id": "pp22_20",
       "q": "A book can be renewed for ( ③ ).",
       "choices": [
        "1 week",
        "2 weeks",
        "3 days",
        "no extra time"
       ],
       "answer": 0,
       "keyEn": "Books can be renewed once, for another week.",
       "keyJa": "本は1回だけ、さらに1週間延長できる",
       "expl": "another week =「さらに1週間」。"
      },
      {
       "id": "pp22_21",
       "q": "The fine for a DVD is ( ④ ) per day.",
       "choices": [
        "50 cents",
        "20 cents",
        "$1",
        "30 cents"
       ],
       "answer": 0,
       "keyEn": "fifty cents per day for DVDs.",
       "keyJa": "DVDの延滞料は1日50セント",
       "expl": "20セントは本の延滞料。"
      }
     ],
     "table": [
      [
       "Item",
       "Max.",
       "Loan",
       "Fine / day"
      ],
      [
       "Books",
       "①",
       "2 weeks",
       "20 cents"
      ],
      [
       "DVDs",
       "2",
       "②",
       "④"
      ],
      [
       "Book renewal",
       "once",
       "③",
       "—"
      ]
     ]
    },
    {
     "script": [
      {
       "sp": "N",
       "text": "Here is the schedule for the school science fair. The opening ceremony begins at nine and lasts twenty minutes. Right after it, six teams will give presentations. Each presentation takes ten minutes, with a five-minute break between teams. The judges will meet for thirty minutes after the last presentation, and the results will be announced fifteen minutes after that."
      }
     ],
     "questions": [
      {
       "id": "pp22_22",
       "q": "The opening ceremony ends at ( ① ).",
       "choices": [
        "9:20",
        "9:10",
        "9:30",
        "9:15"
       ],
       "answer": 0,
       "keyEn": "The opening ceremony begins at nine and lasts twenty minutes.",
       "keyJa": "開会式は9時開始で20分、9時20分に終わる",
       "expl": "9:00+20分=9:20。"
      },
      {
       "id": "pp22_23",
       "q": "The last presentation ends at ( ② ).",
       "choices": [
        "10:45",
        "10:40",
        "10:50",
        "10:30"
       ],
       "answer": 0,
       "keyEn": "six teams ... ten minutes, with a five-minute break between teams.",
       "keyJa": "6チーム×10分+休憩5分×5回=85分、9:20から10:45",
       "expl": "休憩はチーム間なので6回ではなく5回。60+25=85。"
      },
      {
       "id": "pp22_24",
       "q": "The judges' meeting ends at ( ③ ).",
       "choices": [
        "11:15",
        "11:00",
        "11:30",
        "11:45"
       ],
       "answer": 0,
       "keyEn": "The judges will meet for thirty minutes after the last presentation.",
       "keyJa": "審査員会議は10:45から30分、11:15に終わる",
       "expl": "10:45+30分=11:15。"
      },
      {
       "id": "pp22_25",
       "q": "The results will be announced at ( ④ ).",
       "choices": [
        "11:30",
        "11:15",
        "11:45",
        "12:00"
       ],
       "answer": 0,
       "keyEn": "the results will be announced fifteen minutes after that.",
       "keyJa": "結果発表は会議終了の15分後=11:30",
       "expl": "11:15+15分=11:30。"
      }
     ],
     "table": [
      [
       "Event",
       "Time"
      ],
      [
       "Opening ceremony ends",
       "①"
      ],
      [
       "Last presentation ends",
       "②"
      ],
      [
       "Judges' meeting ends",
       "③"
      ],
      [
       "Results announced",
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
       "text": "Number one. This café is open until eleven, and there are outlets at every seat. Wi-Fi costs two dollars an hour. Coffee is three dollars."
      },
      {
       "sp": "W",
       "text": "Number two. We're open until nine thirty, with outlets at every seat and free Wi-Fi. Coffee is three fifty."
      },
      {
       "sp": "M2",
       "text": "Number three. This café stays open until midnight. There are outlets at every seat and Wi-Fi is free. A cup of coffee is four dollars."
      },
      {
       "sp": "W2",
       "text": "Number four. We close at ten thirty, and Wi-Fi is free. Outlets are available only at the counter. Coffee is three dollars."
      }
     ],
     "questions": [
      {
       "id": "pp22_26",
       "q": "You want a café for studying that is open until at least ten p.m., has an outlet at every seat, offers free Wi-Fi, and sells coffee for four dollars or less. Which café should you choose?",
       "choices": [
        "Number one",
        "Number two",
        "Number three",
        "Number four"
       ],
       "answer": 2,
       "keyEn": "Number three. Open until midnight, outlets at every seat, free Wi-Fi, coffee four dollars.",
       "keyJa": "3番=深夜0時まで・全席コンセント・無料Wi-Fi・コーヒー4ドルで全条件OK",
       "expl": "1=Wi-Fi有料、2=9時半閉店、3=全条件OK(ちょうど4ドルは or less に含まれる)、4=コンセントはカウンターのみ。",
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
       "text": "Economists once assumed that people make decisions by carefully weighing costs and benefits. Behavioral economics, however, shows that we are strongly influenced by how choices are presented. A nudge is a small change in the way choices are arranged that guides people toward a better decision without forbidding anything. A well-known example is organ donation. In countries where people must actively choose to become donors, only about fifteen percent do so. In countries where everyone is a donor unless they opt out, more than ninety percent remain donors. The difference is not that people feel differently, but that most of us stick with the default option. Another example is a school cafeteria that places fruit at eye level and sweets at the back. Students tend to choose fruit more often, though nothing is banned. Supporters say nudges are cheap and respect freedom of choice. Critics, however, worry that nudges can be used to manipulate people, especially if those being nudged do not realize it. They argue that nudges should be transparent, so that everyone knows when and why a choice has been arranged in a certain way."
      }
     ],
     "questions": [
      {
       "id": "pp22_27",
       "q": "What is the main point of the lecture?",
       "choices": [
        "Small changes in how choices are shown can steer decisions, which also raises ethical concerns.",
        "People always weigh costs and benefits very carefully before they act.",
        "Governments should forbid unhealthy choices to protect their citizens.",
        "Organ donation is rare in every country because people dislike it."
       ],
       "answer": 0,
       "keyEn": "nudges can be used to manipulate people ... nudges should be transparent.",
       "keyJa": "選択肢の見せ方の小さな変更が決定を左右する。ただし操作の危険もあり、透明性が必要",
       "expl": "前半で nudge の仕組みと例、後半で賛否(supporters / critics)をバランスよく述べている。",
       "points": 3
      },
      {
       "id": "pp22_28",
       "q": "In countries where people must opt out, what share remain donors?",
       "choices": [
        "More than ninety percent.",
        "About fifteen percent.",
        "About half.",
        "Less than ten percent."
       ],
       "answer": 0,
       "keyEn": "In countries where everyone is a donor unless they opt out, more than ninety percent remain donors.",
       "keyJa": "辞退しない限り全員が提供者となる国では、90%超が提供者のまま",
       "expl": "about fifteen percent は「自分で意思表示が必要な国」の数字。条件の取り違えに注意。"
      },
      {
       "id": "pp22_29",
       "q": "Why do the two groups of countries differ so much?",
       "choices": [
        "Most people stay with the default option.",
        "People in some countries care less about others.",
        "Governments pay donors in some countries.",
        "Doctors persuade people in some countries."
       ],
       "answer": 0,
       "keyEn": "The difference is not that people feel differently, but that most of us stick with the default option.",
       "keyJa": "人々の気持ちが違うのではなく、大多数がデフォルトのまま選ぶため",
       "expl": "not A, but B の B が答え。default option =「初期設定の選択肢」。"
      },
      {
       "id": "pp22_30",
       "q": "What happened in the cafeteria example?",
       "choices": [
        "Putting fruit at eye level led students to pick it more often.",
        "Sweets were banned from the cafeteria, so students ate fruit.",
        "Students stopped buying lunch because the sweets were hidden.",
        "Fruit became much cheaper than sweets at the cafeteria counter."
       ],
       "answer": 0,
       "keyEn": "places fruit at eye level and sweets at the back. Students tend to choose fruit more often, though nothing is banned.",
       "keyJa": "果物を目の高さに置くと、禁止しなくても生徒は果物を選びやすくなった",
       "expl": "nothing is banned がナッジの定義(禁止しない)と対応。"
      },
      {
       "id": "pp22_31",
       "q": "What do supporters say about nudges?",
       "choices": [
        "They are inexpensive and leave people free to choose.",
        "They always make people healthier and happier than before.",
        "They are better than any law because nobody ever breaks them.",
        "They do not change anyone's behavior in any important way."
       ],
       "answer": 0,
       "keyEn": "Supporters say nudges are cheap and respect freedom of choice.",
       "keyJa": "安上がりで、選択の自由を尊重している",
       "expl": "cheap と respect freedom of choice の2点。always / better than all laws は言い過ぎ。"
      },
      {
       "id": "pp22_32",
       "q": "What is the critics' main worry?",
       "choices": [
        "Nudges may manipulate people who do not notice them.",
        "Nudges cost governments too much money.",
        "Nudges are too obvious to work.",
        "Nudges forbid too many choices."
       ],
       "answer": 0,
       "keyEn": "nudges can be used to manipulate people, especially if those being nudged do not realize it.",
       "keyJa": "気づかない人が操作される恐れがある",
       "expl": "especially if ... が懸念の中心。批判者の主張と支持者の主張を区別する。"
      },
      {
       "id": "pp22_33",
       "q": "What do the critics want nudges to be?",
       "choices": [
        "Transparent, so that people know why choices are arranged that way.",
        "Banned in all schools so that children are never influenced.",
        "Used only by private companies and not by any government.",
        "Limited to the area of organ donation and nothing else."
       ],
       "answer": 0,
       "keyEn": "They argue that nudges should be transparent.",
       "keyJa": "透明にすべき(いつ・なぜ選択肢が配置されたかを皆が知る)",
       "expl": "should be transparent が批判者の要求。so that 以下が透明性の中身。"
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
       "text": "Have you decided whether to live in the dorm next year?"
      },
      {
       "sp": "W",
       "text": "My parents want me to commute, since it's cheaper."
      },
      {
       "sp": "M",
       "text": "How long is the commute?"
      },
      {
       "sp": "W",
       "text": "An hour and a half each way. I'd lose three hours a day."
      },
      {
       "sp": "M",
       "text": "That's a lot. But the dorm costs twice as much."
      },
      {
       "sp": "W",
       "text": "I know. My dad says I could study on the train."
      },
      {
       "sp": "M",
       "text": "Could you, on a crowded train?"
      },
      {
       "sp": "W",
       "text": "Not really. I'd probably sleep."
      },
      {
       "sp": "M",
       "text": "Why not suggest a compromise? Live in the dorm for the first year, then commute."
      },
      {
       "sp": "W",
       "text": "That might convince them. At least I'd settle in first."
      }
     ],
     "questions": [
      {
       "id": "pp22_34",
       "q": "What is the woman's main concern about commuting?",
       "choices": [
        "She would lose a lot of time every day.",
        "The train fare is too expensive.",
        "She dislikes crowded places.",
        "Her parents will not let her study."
       ],
       "answer": 0,
       "keyEn": "An hour and a half each way. I'd lose three hours a day.",
       "keyJa": "片道1時間半で、1日3時間を失う",
       "expl": "cheaper(費用)は親の理由。女性自身の懸念は time。電車で勉強する案も not really と退けている。"
      },
      {
       "id": "pp22_35",
       "q": "What will the woman probably suggest to her parents?",
       "choices": [
        "Living in the dorm for the first year only.",
        "Commuting for the first year only.",
        "Living in the dorm for four years.",
        "Renting an apartment near the station."
       ],
       "answer": 0,
       "keyEn": "Live in the dorm for the first year, then commute. — That might convince them.",
       "keyJa": "最初の1年だけ寮に住み、その後は通学する案",
       "expl": "compromise(折衷案)の中身。順序(dorm → commute)に注意。"
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
       "text": "Four students, Ken, Mia, Dan and Sue, are discussing whether the school should abolish its uniform."
      },
      {
       "sp": "M",
       "text": "I'd keep the uniform. It saves time in the morning, and nobody feels pressured about fashion."
      },
      {
       "sp": "W",
       "text": "But uniforms are expensive, and students can't express their individuality."
      },
      {
       "sp": "M2",
       "text": "The cost is a fair point, Mia, but casual clothes can cost even more over a year if everyone feels they must keep up with trends."
      },
      {
       "sp": "W2",
       "text": "What about a flexible policy, with the basic uniform on weekdays and casual clothes on Fridays?"
      },
      {
       "sp": "M",
       "text": "That could work. The weekly routine stays simple, but there's some variety."
      },
      {
       "sp": "W",
       "text": "I'd be satisfied if Friday were truly free choice."
      },
      {
       "sp": "M2",
       "text": "And maybe the school could offer second-hand uniforms to lower the cost."
      }
     ],
     "questions": [
      {
       "id": "pp22_36",
       "q": "Who suggests that dropping the uniform might not reduce costs?",
       "choices": [
        "Dan",
        "Ken",
        "Mia",
        "Sue"
       ],
       "answer": 0,
       "keyEn": "casual clothes can cost even more over a year if everyone feels they must keep up with trends.",
       "keyJa": "私服のほうが、流行に合わせようとして1年間ではかえって高くつく、とダンは述べている",
       "expl": "Mia は制服の高さを指摘、Dan がその逆の見方を示す。even more =「いっそう多く」。"
      },
      {
       "id": "pp22_37",
       "q": "What do the students seem to prefer in the end?",
       "choices": [
        "A uniform on weekdays and casual clothes on Fridays.",
        "Abolishing the uniform completely.",
        "Keeping the uniform every day of the week.",
        "Letting each class choose its own uniform."
       ],
       "answer": 0,
       "keyEn": "the basic uniform on weekdays and casual clothes on Fridays. — That could work. — I'd be satisfied.",
       "keyJa": "平日は制服、金曜は私服という方針",
       "expl": "Sue の案を Ken が評価し、Mia が条件つきで満足、Dan も費用面の補足をしている。"
      }
     ]
    }
   ]
  }
 ]
};
