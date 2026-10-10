// ============================================================
// 2024年 アルファ 本番形式模試(37問・100点満点)
// ============================================================

window.MOCK_TESTS = window.MOCK_TESTS || {};

window.MOCK_TESTS["2024"] = {
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
       "text": "My phone said the package would arrive between two and four, so I made sure to be home, but the card on my door says they tried to deliver at one thirty, when I was still at work."
      }
     ],
     "questions": [
      {
       "id": "pp24_01",
       "q": "Why did the speaker miss the delivery?",
       "choices": [
        "The courier came before the announced time.",
        "She went out during the announced time.",
        "The courier used a wrong address.",
        "She gave the company the wrong number."
       ],
       "answer": 0,
       "keyEn": "the card on my door says they tried to deliver at one thirty.",
       "keyJa": "通知された時間帯(2〜4時)より前の1時半に配達に来たから",
       "expl": "between two and four(予告)と one thirty(実際)のずれ。be home は予告の時間に対する準備。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I used to think running was boring until I started listening to audiobooks, and now I often run an extra lap just to find out what happens next."
      }
     ],
     "questions": [
      {
       "id": "pp24_02",
       "q": "What does the speaker mean?",
       "choices": [
        "Audiobooks have made him enjoy running more.",
        "He still finds running boring.",
        "He runs fewer laps than he used to.",
        "He has stopped listening to audiobooks."
       ],
       "answer": 0,
       "keyEn": "I often run an extra lap just to find out what happens next.",
       "keyJa": "続きが気になって、余分に1周走ることがよくある",
       "expl": "used to think(以前は〜と思っていた)で過去の考えが覆される。extra lap が変化の証拠。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "As far as I know, the library closes at eight, but during exam weeks it stays open until midnight, so there's no need to rush."
      }
     ],
     "questions": [
      {
       "id": "pp24_03",
       "q": "What does the speaker say about the library?",
       "choices": [
        "It stays open late during exam periods.",
        "It closes at eight even during exams.",
        "It is closed during exam weeks.",
        "It opens at midnight."
       ],
       "answer": 0,
       "keyEn": "during exam weeks it stays open until midnight.",
       "keyJa": "試験期間中は真夜中まで開いている",
       "expl": "通常(eight)と exam weeks(midnight)の例外を区別する。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I'd have been happy to lend you the car, but my brother has borrowed it for the weekend, and he won't be back until Monday."
      }
     ],
     "questions": [
      {
       "id": "pp24_04",
       "q": "Why can't the speaker lend the car?",
       "choices": [
        "His brother has it until Monday.",
        "The car is being repaired.",
        "He needs it for the weekend himself.",
        "His brother has sold it."
       ],
       "answer": 0,
       "keyEn": "my brother has borrowed it for the weekend, and he won't be back until Monday.",
       "keyJa": "兄が週末に借りていて、月曜まで戻らない",
       "expl": "I'd have been happy to ...(喜んで貸したのに)は仮定法で、実際には貸せない。"
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
       "text": "A girl is sitting cross-legged on a sofa, holding a laptop on her knees, while behind her a tall lamp is switched on and the window shows rain falling outside."
      }
     ],
     "questions": [
      {
       "id": "pp24_05",
       "q": "Which description matches what you hear?",
       "choices": [
        "A girl sits on a sofa with a laptop; a lamp is on; it is raining.",
        "A girl sits on the floor with a laptop; a lamp is on; it is raining.",
        "A girl sits on a sofa with a laptop; a lamp is off; it is raining.",
        "A girl sits on a sofa with a laptop; a lamp is on; it is snowing."
       ],
       "answer": 0,
       "keyEn": "sitting cross-legged on a sofa, holding a laptop on her knees, a tall lamp is switched on, rain falling.",
       "keyJa": "少女があぐらでソファに座りひざにノートパソコン、ランプが点き、窓の外は雨",
       "expl": "sofa / floor、switched on / off、rain / snow の3点。cross-legged =「あぐらをかいて」。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "Two joggers are passing a fountain in the park. The one in front is wearing a red cap and carrying a water bottle, while the one behind has stopped to tie a shoelace."
      }
     ],
     "questions": [
      {
       "id": "pp24_06",
       "q": "Which description matches what you hear?",
       "choices": [
        "The front jogger has a cap and a bottle; the other stops for a shoelace.",
        "The front jogger stops for a shoelace; the other has a cap and a bottle.",
        "Both joggers wear caps; the one behind carries a bottle.",
        "The front jogger has a bottle; the other stops to drink."
       ],
       "answer": 0,
       "keyEn": "The one in front is wearing a red cap and carrying a water bottle, while the one behind has stopped to tie a shoelace.",
       "keyJa": "前を走る人は赤い帽子とボトル、後ろの人は止まって靴ひもを結んでいる",
       "expl": "in front / behind と、持ち物・動作の対応づけ。while =「一方で」。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "In the kitchen, a pot is boiling over on the stove, while a boy at the table is busy reading a recipe book and a girl is rushing toward the stove with a lid."
      }
     ],
     "questions": [
      {
       "id": "pp24_07",
       "q": "Which description matches what you hear?",
       "choices": [
        "A pot boils over; a boy reads; a girl hurries to it with a lid.",
        "A pot boils over; a girl reads; a boy hurries to it with a lid.",
        "A pot boils over; a boy reads; a girl turns off the stove.",
        "A pot is on a low flame; a boy reads; a girl carries a lid."
       ],
       "answer": 0,
       "keyEn": "a boy at the table is busy reading a recipe book and a girl is rushing toward the stove with a lid.",
       "keyJa": "鍋が吹きこぼれ、少年はレシピ本に夢中、少女はふたを持ってコンロに駆け寄る",
       "expl": "boy / girl の役割の入れ替え、rushing toward(駆け寄る途中=まだ止めていない)に注意。"
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
       "text": "I'm buying a jacket for ninety dollars, and I have a coupon for twenty percent off."
      },
      {
       "sp": "M",
       "text": "The coupon can't be used on sale items, and this jacket is marked down by thirty dollars."
      },
      {
       "sp": "W",
       "text": "So is ninety the sale price?"
      },
      {
       "sp": "M",
       "text": "No, ninety is the regular price. The sale price is sixty. You can use the coupon only on a regular-price item, not both."
      },
      {
       "sp": "W",
       "text": "Then I'll take the sale price."
      }
     ],
     "questions": [
      {
       "id": "pp24_08",
       "q": "How much will the woman pay?",
       "choices": [
        "$60",
        "$72",
        "$90",
        "$48"
       ],
       "answer": 0,
       "keyEn": "ninety is the regular price. The sale price is sixty. ... Then I'll take the sale price.",
       "keyJa": "セール価格60ドル。クーポンとの併用はできないので、割引なしの60ドルで買う",
       "expl": "90×0.8=72(定価にクーポン)、60×0.8=48(併用)はどちらも不可。結局セール価格の60ドル。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "My train for the interview leaves at nine and arrives at eleven fifteen."
      },
      {
       "sp": "W",
       "text": "The interview starts at eleven thirty at the head office, ten minutes from the station by taxi."
      },
      {
       "sp": "M",
       "text": "Is that enough time?"
      },
      {
       "sp": "W",
       "text": "It's tight. Is there an earlier train?"
      },
      {
       "sp": "M",
       "text": "There's one at eight, arriving at ten fifteen."
      },
      {
       "sp": "W",
       "text": "Take that one."
      }
     ],
     "questions": [
      {
       "id": "pp24_09",
       "q": "Which train will the man take?",
       "choices": [
        "The eight o'clock train.",
        "The nine o'clock train.",
        "The ten fifteen train.",
        "The eleven fifteen train."
       ],
       "answer": 0,
       "keyEn": "There's one at eight, arriving at ten fifteen. — Take that one.",
       "keyJa": "9時発では時間がぎりぎりなので、8時発の電車にする",
       "expl": "ten fifteen と eleven fifteen は「到着時刻」。出発時刻(8時発 / 9時発)を問われている点に注意。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "This recipe needs two cups of flour, but I only have one and a half."
      },
      {
       "sp": "M",
       "text": "You can substitute half a cup of oats."
      },
      {
       "sp": "W",
       "text": "Won't that change the texture?"
      },
      {
       "sp": "M",
       "text": "Slightly, but many people prefer it."
      },
      {
       "sp": "W",
       "text": "OK, I'll try it."
      }
     ],
     "questions": [
      {
       "id": "pp24_10",
       "q": "What will the woman do?",
       "choices": [
        "Replace part of the flour with oats.",
        "Go shopping for more flour.",
        "Make a smaller cake.",
        "Choose a different recipe."
       ],
       "answer": 0,
       "keyEn": "You can substitute half a cup of oats. — OK, I'll try it.",
       "keyJa": "足りない小麦粉の分を、オートミールで代用してみる",
       "expl": "substitute A for B のような代用表現。It's slightly different is accepted で受け入れる。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "Excuse me, you're in my seat. Mine is 14A."
      },
      {
       "sp": "W",
       "text": "Oh, my ticket says 14A too."
      },
      {
       "sp": "M",
       "text": "Could I see it? Mine is for the fourteenth."
      },
      {
       "sp": "W",
       "text": "Mine says the fifteenth. I'm a day early. I'm so sorry."
      }
     ],
     "questions": [
      {
       "id": "pp24_11",
       "q": "What is the problem?",
       "choices": [
        "The woman's ticket is for a different day.",
        "The man is on the wrong train.",
        "The seat numbers are printed incorrectly.",
        "The woman has no ticket."
       ],
       "answer": 0,
       "keyEn": "Mine is for the fourteenth. — Mine says the fifteenth. I'm a day early.",
       "keyJa": "男性の切符は14日、女性のは15日。女性が1日早く来ている",
       "expl": "座席番号は同じ(14A)で、日付が違う。a day early =「1日早い」。"
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
       "text": "Did you hear the new manager is a former chef?"
      },
      {
       "sp": "M",
       "text": "Right. He'll probably turn the cafeteria menu upside down."
      },
      {
       "sp": "W",
       "text": "As long as the curry stays."
      },
      {
       "sp": "M",
       "text": "Don't count on it."
      }
     ],
     "questions": [
      {
       "id": "pp24_12",
       "q": "What does the man imply?",
       "choices": [
        "The curry may be taken off the menu.",
        "The curry will definitely stay.",
        "The manager dislikes curry.",
        "The cafeteria will close."
       ],
       "answer": 0,
       "keyEn": "Don't count on it.",
       "keyJa": "(カレーが残ることは)当てにしないほうがいい",
       "expl": "count on =「あてにする」。Don't count on it は「期待しないで」=残らないかも、という含意。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I can't believe how quickly the summer went."
      },
      {
       "sp": "W",
       "text": "You said that last year too."
      },
      {
       "sp": "M",
       "text": "Because it was true last year too."
      }
     ],
     "questions": [
      {
       "id": "pp24_13",
       "q": "What does the man mean?",
       "choices": [
        "He feels that every summer passes quickly.",
        "He did not enjoy this summer.",
        "He said the same thing by mistake.",
        "He wants summer to be shorter."
       ],
       "answer": 0,
       "keyEn": "Because it was true last year too.",
       "keyJa": "去年もそう感じたからだ",
       "expl": "Because ...(だって)は、毎年同じ感想を持つ理由。冗談めかした返答。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Could you recommend a good book about history?"
      },
      {
       "sp": "M",
       "text": "Depends. Do you want something easy to read or something thorough?"
      },
      {
       "sp": "W",
       "text": "A bit of both?"
      },
      {
       "sp": "M",
       "text": "Then you're asking for the impossible."
      }
     ],
     "questions": [
      {
       "id": "pp24_14",
       "q": "What does the man imply?",
       "choices": [
        "Hardly any book is both easy and thorough.",
        "Most history books are easy to read.",
        "He knows an ideal book for her.",
        "She should read several books at once."
       ],
       "answer": 0,
       "keyEn": "Then you're asking for the impossible.",
       "keyJa": "それは無理な注文だ",
       "expl": "ask for the impossible =「不可能なことを求める」。読みやすさと網羅性は両立しにくい、という含意。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "Why did you apply for that job? It's far from home."
      },
      {
       "sp": "W",
       "text": "I know, but the pay is twice what I make now."
      },
      {
       "sp": "M",
       "text": "Money isn't everything."
      },
      {
       "sp": "W",
       "text": "It is when the rent goes up."
      }
     ],
     "questions": [
      {
       "id": "pp24_15",
       "q": "What is the woman's attitude?",
       "choices": [
        "Money is a practical priority for her right now.",
        "She does not care about money.",
        "She regrets applying for the job.",
        "She plans to move closer to the office."
       ],
       "answer": 0,
       "keyEn": "It is when the rent goes up.",
       "keyJa": "家賃が上がるときには、お金がすべてなの",
       "expl": "Money isn't everything への切り返し。It is(=Money is everything)when ... で現実的な事情を述べる。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "I've been waiting for twenty minutes. Is there a problem with my order?"
      },
      {
       "sp": "M",
       "text": "Sorry, we've had a rush. It should be ready in five."
      },
      {
       "sp": "W",
       "text": "You said that ten minutes ago."
      }
     ],
     "questions": [
      {
       "id": "pp24_16",
       "q": "What does the woman imply?",
       "choices": [
        "She does not believe the waiter's promise.",
        "She is satisfied with the service.",
        "She wants to cancel the order.",
        "She will wait five more minutes."
       ],
       "answer": 0,
       "keyEn": "You said that ten minutes ago.",
       "keyJa": "10分前にもそう言いましたよね",
       "expl": "同じ約束が繰り返されている=信用していない、という含意。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "Are you taking the exam this semester or next?"
      },
      {
       "sp": "W",
       "text": "Next. I've heard this semester's is notoriously hard."
      },
      {
       "sp": "M",
       "text": "Who told you that?"
      },
      {
       "sp": "W",
       "text": "Everyone who's taken it."
      }
     ],
     "questions": [
      {
       "id": "pp24_17",
       "q": "Why will the woman take the exam next semester?",
       "choices": [
        "She was told this semester's exam is very difficult.",
        "She has not studied at all yet.",
        "The exam is only offered next semester.",
        "She failed it last semester."
       ],
       "answer": 0,
       "keyEn": "I've heard this semester's is notoriously hard. — Everyone who's taken it.",
       "keyJa": "今学期の試験は悪名高いほど難しいと聞いたから",
       "expl": "notoriously =「悪い意味で有名に」。情報源は Everyone who's taken it(受けた全員)。"
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
       "text": "Welcome to the Corner Café. A small coffee costs three dollars, and a large costs one dollar fifty more. Tea is fifty cents cheaper than a small coffee. Our cake of the day is five dollars, but if you order it with any drink before noon, you get two dollars off the cake."
      }
     ],
     "questions": [
      {
       "id": "pp24_18",
       "q": "A large coffee costs ( ① ).",
       "choices": [
        "$4.50",
        "$4",
        "$3.50",
        "$5"
       ],
       "answer": 0,
       "keyEn": "A small coffee costs three dollars, and a large costs one dollar fifty more.",
       "keyJa": "大きいコーヒーは小より1.50ドル高い=4.50ドル",
       "expl": "3+1.5=4.5。"
      },
      {
       "id": "pp24_19",
       "q": "Tea costs ( ② ).",
       "choices": [
        "$2.50",
        "$2",
        "$3.50",
        "$2.75"
       ],
       "answer": 0,
       "keyEn": "Tea is fifty cents cheaper than a small coffee.",
       "keyJa": "紅茶は小コーヒーより50セント安い=2.50ドル",
       "expl": "3−0.5=2.5。cheaper(安い)なので引く。"
      },
      {
       "id": "pp24_20",
       "q": "Cake ordered with a drink before noon costs ( ③ ).",
       "choices": [
        "$3",
        "$5",
        "$4",
        "$2"
       ],
       "answer": 0,
       "keyEn": "if you order it with any drink before noon, you get two dollars off the cake.",
       "keyJa": "正午前にドリンクと一緒なら、ケーキは2ドル引きの3ドル",
       "expl": "5−2=3。"
      },
      {
       "id": "pp24_21",
       "q": "Tea and cake ordered before noon cost ( ④ ) in total.",
       "choices": [
        "$5.50",
        "$7.50",
        "$7",
        "$6"
       ],
       "answer": 0,
       "keyEn": "(tea $2.50 + cake $3)",
       "keyJa": "紅茶2.50+ケーキ3.00=5.50ドル",
       "expl": "②と③の答えを合算。"
      }
     ],
     "table": [
      [
       "Item",
       "Price"
      ],
      [
       "Small coffee",
       "$3.00"
      ],
      [
       "Large coffee",
       "①"
      ],
      [
       "Tea",
       "②"
      ],
      [
       "Cake (with a drink, before noon)",
       "③"
      ],
      [
       "Tea + cake (before noon)",
       "④"
      ]
     ]
    },
    {
     "script": [
      {
       "sp": "N",
       "text": "Here is the weather forecast for the weekend. On Saturday morning it will be cloudy, with a temperature of eighteen degrees. In the afternoon, rain will arrive and the temperature will drop by five degrees. Sunday will be sunny, and the high will be four degrees warmer than Saturday afternoon's temperature. Sorry, I mean four degrees warmer than Saturday morning's. Winds will be strong on Saturday evening, reaching fifty kilometers per hour, but they will calm down to twenty by Sunday morning."
      }
     ],
     "questions": [
      {
       "id": "pp24_22",
       "q": "The Saturday afternoon temperature will be ( ① ).",
       "choices": [
        "13°C",
        "18°C",
        "23°C",
        "15°C"
       ],
       "answer": 0,
       "keyEn": "In the afternoon, rain will arrive and the temperature will drop by five degrees.",
       "keyJa": "土曜午後は朝(18℃)より5度下がって13℃",
       "expl": "18−5=13。"
      },
      {
       "id": "pp24_23",
       "q": "The Saturday afternoon weather will be ( ② ).",
       "choices": [
        "rain",
        "sun",
        "snow",
        "clouds"
       ],
       "answer": 0,
       "keyEn": "In the afternoon, rain will arrive.",
       "keyJa": "土曜の午後は雨",
       "expl": "morning は cloudy。午後の天気を問われている。"
      },
      {
       "id": "pp24_24",
       "q": "The Sunday high will be ( ③ ).",
       "choices": [
        "22°C",
        "17°C",
        "18°C",
        "23°C"
       ],
       "answer": 0,
       "keyEn": "four degrees warmer than Saturday's morning temperature.",
       "keyJa": "日曜の最高気温は土曜の朝(18℃)より4度高い22℃",
       "expl": "言い直し(afternoon → morning)に注意。18+4=22。"
      },
      {
       "id": "pp24_25",
       "q": "The wind on Sunday morning will be ( ④ ).",
       "choices": [
        "20 km/h",
        "50 km/h",
        "25 km/h",
        "40 km/h"
       ],
       "answer": 0,
       "keyEn": "they will calm down to twenty by Sunday morning.",
       "keyJa": "日曜の朝は風が弱まり20km/h",
       "expl": "50は土曜の夕方の風速。"
      }
     ],
     "table": [
      [
       "Time",
       "Weather",
       "Temp. / Wind"
      ],
      [
       "Sat. morning",
       "Cloudy",
       "18°C"
      ],
      [
       "Sat. afternoon",
       "②",
       "①"
      ],
      [
       "Sun. high",
       "Sunny",
       "③"
      ],
      [
       "Sun. morning wind",
       "—",
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
       "text": "Number one. This online course has twelve hours of video and includes a certificate. It costs fifty-five dollars, and refunds are not available."
      },
      {
       "sp": "W",
       "text": "Number two. Our course offers eight hours of video, a certificate, and a thirty-day refund. The price is forty-five dollars."
      },
      {
       "sp": "M2",
       "text": "Number three. This course has fifteen hours of video. There's no certificate. It costs fifty dollars, and you can get a refund."
      },
      {
       "sp": "W2",
       "text": "Number four. This course has ten hours of video and gives you a certificate. It costs fifty-nine dollars, and refunds are available within two weeks."
      }
     ],
     "questions": [
      {
       "id": "pp24_26",
       "q": "You want an online course with at least ten hours of video, a certificate, a price below sixty dollars, and refunds available. Which course should you choose?",
       "choices": [
        "Number one",
        "Number two",
        "Number three",
        "Number four"
       ],
       "answer": 3,
       "keyEn": "Number four. Ten hours of video, a certificate, fifty-nine dollars, refunds within two weeks.",
       "keyJa": "4番=動画10時間・修了証あり・59ドル・返金可で全条件OK",
       "expl": "1=返金不可、2=8時間で足りない、3=修了証なし、4=全条件OK(10時間ちょうどは at least に含まれる)。",
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
       "text": "At night, many of us can no longer see the Milky Way. The reason is light pollution: the excessive and misdirected artificial light from streets, buildings and signs that brightens the night sky. According to one study, about eighty percent of the world's population lives under a sky polluted by artificial light, and in Europe and North America the figure is above ninety-nine percent. Light pollution affects more than stargazing. Many migrating birds rely on stars to navigate, and bright city lights can confuse them. Every year, millions of birds die by flying into lit buildings. Baby sea turtles, which instinctively head toward the brightest horizon, often crawl toward streetlights instead of the sea. Human health may also be affected, since exposure to light at night can disrupt sleep. Fortunately, the problem is relatively easy to solve. Shielded lamps that direct light downward, warmer-colored bulbs, and timers or motion sensors can cut waste without making streets unsafe. Several cities have created dark sky areas where lighting is limited, and report that residents enjoy both better views of the stars and lower electricity bills."
      }
     ],
     "questions": [
      {
       "id": "pp24_27",
       "q": "What is the main point of the lecture?",
       "choices": [
        "Light pollution harms nature and people, but simple measures can reduce it.",
        "Stars are no longer important for animals that migrate at night.",
        "Streetlights should be switched off everywhere in every city at night.",
        "Light pollution is only a problem for astronomers who study the stars."
       ],
       "answer": 0,
       "keyEn": "the problem is relatively easy to solve.",
       "keyJa": "光害は自然にも人にも害があるが、簡単な対策で減らせる",
       "expl": "被害の説明(Light pollution affects more than stargazing)と Fortunately 以降の解決策が全体の骨格。",
       "points": 3
      },
      {
       "id": "pp24_28",
       "q": "About how many people live under a sky polluted by artificial light?",
       "choices": [
        "About eighty percent of the world's population.",
        "About ten percent of the world's population.",
        "Above ninety-nine percent of the world.",
        "About half of Europe."
       ],
       "answer": 0,
       "keyEn": "about eighty percent of the world's population lives under a sky polluted by artificial light.",
       "keyJa": "世界人口の約80%が、人工の光で汚染された空の下に住んでいる",
       "expl": "99%超はヨーロッパ・北米の数字。世界全体との区別が必要。"
      },
      {
       "id": "pp24_29",
       "q": "How does light pollution affect migrating birds?",
       "choices": [
        "City lights confuse birds that navigate by the stars.",
        "Birds fly much faster whenever they head toward bright areas.",
        "Birds stop migrating altogether once the lights go on in cities.",
        "Birds build their nests near streetlights to stay warm at night."
       ],
       "answer": 0,
       "keyEn": "Many migrating birds rely on stars to navigate, and bright city lights can confuse them.",
       "keyJa": "星を頼りに飛ぶ渡り鳥が、明るい街の光で混乱する",
       "expl": "rely on ... to navigate =「〜を頼りに進路を取る」。millions die は混乱の結果。"
      },
      {
       "id": "pp24_30",
       "q": "What happens to baby sea turtles?",
       "choices": [
        "They crawl toward streetlights instead of the sea.",
        "They are born much earlier in the year than they usually are.",
        "They stay on the beach for several days before they move.",
        "They swim away from the beach faster than they would otherwise."
       ],
       "answer": 0,
       "keyEn": "Baby sea turtles, which instinctively head toward the brightest horizon, often crawl toward streetlights instead of the sea.",
       "keyJa": "いちばん明るい水平線に向かう本能のせいで、海ではなく街灯に向かってしまう",
       "expl": "instinctively(本能的に)が理由。brightest horizon が街灯に置き換わる。"
      },
      {
       "id": "pp24_31",
       "q": "How might light at night affect human health?",
       "choices": [
        "It can disturb people's sleep.",
        "It makes people grow taller.",
        "It improves eyesight.",
        "It causes colds."
       ],
       "answer": 0,
       "keyEn": "exposure to light at night can disrupt sleep.",
       "keyJa": "夜に光を浴びると睡眠が乱れうる",
       "expl": "may(かもしれない)と can disrupt の推量表現。断定ではない。"
      },
      {
       "id": "pp24_32",
       "q": "Which is NOT suggested as a solution?",
       "choices": [
        "Turning off every streetlight at night.",
        "Using lamps that shine downward.",
        "Using warmer-colored bulbs.",
        "Using timers or motion sensors."
       ],
       "answer": 0,
       "keyEn": "Shielded lamps that direct light downward, warmer-colored bulbs, and timers or motion sensors.",
       "keyJa": "提案されたのは下向きのランプ・暖色の電球・タイマーや人感センサー",
       "expl": "NOT 問題。without making streets unsafe(街を危険にしない)ので、全消灯は提案されていない。"
      },
      {
       "id": "pp24_33",
       "q": "What do cities with dark sky areas report?",
       "choices": [
        "Better views of the stars and lower electricity bills.",
        "More crime and more traffic accidents at night than before.",
        "Fewer birds living in the area than there were previously.",
        "Higher electricity bills because of the new kinds of lamps."
       ],
       "answer": 0,
       "keyEn": "residents enjoy both better views of the stars and lower electricity bills.",
       "keyJa": "星がよく見え、電気代も下がると報告している",
       "expl": "both A and B の2点。電気代は「高く」ではなく lower。"
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
       "text": "Are you joining Ms. Park's study group for the math test?"
      },
      {
       "sp": "M",
       "text": "I'm not sure. I concentrate better alone."
      },
      {
       "sp": "W",
       "text": "But explaining problems to others helps you remember them."
      },
      {
       "sp": "M",
       "text": "True, but last time the group spent half the time chatting."
      },
      {
       "sp": "W",
       "text": "That's why Ms. Park set rules this time. Phones away, and a fixed agenda."
      },
      {
       "sp": "M",
       "text": "Hmm, that sounds better. What time is it?"
      },
      {
       "sp": "W",
       "text": "Tuesdays at four, for ninety minutes."
      },
      {
       "sp": "M",
       "text": "I have basketball on Tuesdays."
      },
      {
       "sp": "W",
       "text": "Then come on Thursdays. There's a second group."
      },
      {
       "sp": "M",
       "text": "I'll try it once and then decide."
      }
     ],
     "questions": [
      {
       "id": "pp24_34",
       "q": "Why was the man reluctant to join the group?",
       "choices": [
        "Time was wasted chatting in the previous group.",
        "He cannot study with other people at all.",
        "He dislikes math.",
        "The group meets too late at night."
       ],
       "answer": 0,
       "keyEn": "last time the group spent half the time chatting.",
       "keyJa": "前回はグループが時間の半分をおしゃべりに使っていたから",
       "expl": "I concentrate better alone は一般的な好み。具体的な過去の経験(chatting)が本当の理由。"
      },
      {
       "id": "pp24_35",
       "q": "What will the man do?",
       "choices": [
        "Attend a Thursday session once and then decide.",
        "Join the Tuesday group every week.",
        "Study alone for the whole semester.",
        "Quit basketball to join the group."
       ],
       "answer": 0,
       "keyEn": "Then come on Thursdays. — I'll try it once and then decide.",
       "keyJa": "火曜はバスケがあるので、木曜のグループに1度参加して決める",
       "expl": "Tuesday は basketball と重なる。second group(木曜)への提案を受け入れた。"
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
       "text": "Four students, Ken, Mia, Dan and Sue, are discussing whether their school trip should be to a domestic or an overseas destination."
      },
      {
       "sp": "M",
       "text": "I'd go overseas. It's a once-in-a-lifetime chance to use our English."
      },
      {
       "sp": "W",
       "text": "But it's expensive, and some families may not be able to afford it. A school trip should include everyone."
      },
      {
       "sp": "M2",
       "text": "I agree about the cost, Mia. What about a domestic trip to a place with many foreign visitors, like Kyoto, where we could practice English with tourists?"
      },
      {
       "sp": "W2",
       "text": "I like that, but there's also the safety issue. With overseas travel, one emergency could become a serious problem."
      },
      {
       "sp": "M",
       "text": "That's true. Kyoto isn't bad, if there's a real English activity planned."
      },
      {
       "sp": "W",
       "text": "I'd support it, as long as the cost is kept low."
      },
      {
       "sp": "M2",
       "text": "Then I'll draft a proposal with a tourist-interview activity."
      }
     ],
     "questions": [
      {
       "id": "pp24_36",
       "q": "Who is mainly worried that some families cannot afford an overseas trip?",
       "choices": [
        "Mia",
        "Ken",
        "Dan",
        "Sue"
       ],
       "answer": 0,
       "keyEn": "it's expensive, and some families may not be able to afford it.",
       "keyJa": "費用が高く、負担できない家庭もあるかもしれない、とミアは心配している",
       "expl": "Sue の懸念は安全面(emergency)。Dan は費用に同意して代案を出す。"
      },
      {
       "id": "pp24_37",
       "q": "What will the students most likely propose?",
       "choices": [
        "A domestic trip with an activity for speaking English to tourists.",
        "An overseas trip to an English-speaking country with no limit on cost.",
        "A school trip within Japan that includes no English activity at all.",
        "Cancelling the school trip because of the cost and safety worries."
       ],
       "answer": 0,
       "keyEn": "I'd support it, as long as the cost is kept low. — I'll draft a proposal with a tourist-interview activity.",
       "keyJa": "国内旅行で、観光客に英語でインタビューする活動を入れる",
       "expl": "Dan の代案を Ken が条件つき、Mia が費用条件つきで受け入れ、Dan が提案書を書くと言う。"
      }
     ]
    }
   ]
  }
 ]
};
