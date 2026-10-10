// ============================================================
// 2023年 アルファ 本番形式模試(37問・100点満点)
// ============================================================

window.MOCK_TESTS = window.MOCK_TESTS || {};

window.MOCK_TESTS["2023"] = {
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
       "text": "Technically the shop opens at nine, but the owner is usually late, so I've learned not to bother arriving before nine thirty."
      }
     ],
     "questions": [
      {
       "id": "pp23_01",
       "q": "What does the speaker mean?",
       "choices": [
        "The shop often opens later than its official time.",
        "The shop closes at nine thirty every day.",
        "The owner always arrives before opening time.",
        "He prefers shopping in the evening."
       ],
       "answer": 0,
       "keyEn": "Technically the shop opens at nine, but the owner is usually late.",
       "keyJa": "公式には9時開店だが、店主はたいてい遅れる",
       "expl": "Technically =「建前上は」。but 以降に実態(遅れる)が示される。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "I was going to repaint the fence this weekend, but the forecast says rain, so I'll spend Saturday sanding it and leave the painting until next weekend."
      }
     ],
     "questions": [
      {
       "id": "pp23_02",
       "q": "What will the speaker do on Saturday?",
       "choices": [
        "Sand the fence.",
        "Paint the fence.",
        "Buy paint for the fence.",
        "Wait indoors until the rain stops."
       ],
       "answer": 0,
       "keyEn": "I'll spend Saturday sanding it and leave the painting until next weekend.",
       "keyJa": "土曜はやすりがけをして、塗装は来週末に回す",
       "expl": "repaint(予定)→ rain(障害)→ sanding(代替作業)。sand =「やすりをかける」。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I'm not saying the movie was bad, but I did check my watch more than once, and I've never done that during a film I truly enjoyed."
      }
     ],
     "questions": [
      {
       "id": "pp23_03",
       "q": "What does the speaker think of the movie?",
       "choices": [
        "It failed to hold his interest.",
        "It was the best film he had seen.",
        "It was too short to be enjoyable.",
        "It was shown at the wrong time."
       ],
       "answer": 0,
       "keyEn": "I did check my watch more than once, and I've never done that during a film I truly enjoyed.",
       "keyJa": "何度も時計を見た。心から楽しんだ映画ではそんなことはしない",
       "expl": "I'm not saying ... but ... の遠回しな否定。時計を見る=退屈の暗示。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Neither of the two routes is perfect. The river path is pretty but muddy after rain, while the road is dry but noisy, so it depends on the weather."
      }
     ],
     "questions": [
      {
       "id": "pp23_04",
       "q": "What does the speaker say?",
       "choices": [
        "Her choice of route depends on the weather.",
        "The road is prettier than the river path.",
        "The river path is always dry.",
        "She never uses the road."
       ],
       "answer": 0,
       "keyEn": "the river path is pretty but muddy after rain, while the road is dry but noisy, so it depends on the weather.",
       "keyJa": "川沿いの道は雨のあとぬかるみ、車道は乾いているがうるさいので、天気次第",
       "expl": "Neither ... is perfect(どちらも完全ではない)。so it depends on ... が結論。"
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
       "text": "A man is carrying a ladder on his shoulder while a woman beside him holds a can of paint in each hand, and a small dog follows them wearing a red collar."
      }
     ],
     "questions": [
      {
       "id": "pp23_05",
       "q": "Which description matches what you hear?",
       "choices": [
        "A man carries a ladder; a woman holds two paint cans; a dog wears a collar.",
        "A woman carries a ladder; a man holds two paint cans; a dog wears a collar.",
        "A man carries a ladder; a woman holds one paint can; a dog wears a collar.",
        "A man carries a ladder; a woman holds two paint cans; a dog carries a bucket."
       ],
       "answer": 0,
       "keyEn": "a man is carrying a ladder on his shoulder while a woman holds a can of paint in each hand.",
       "keyJa": "男性ははしごを肩に担ぎ、女性は両手にペンキ缶を1つずつ持ち、犬が赤い首輪でついてくる",
       "expl": "誰が何を持つか、in each hand(両手に1つずつ=計2缶)、犬の特徴の3点。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "In the photo, three kites are flying above a beach. The highest is shaped like a fish, the lowest is a plain triangle, and a child is struggling to hold the string of the middle one."
      }
     ],
     "questions": [
      {
       "id": "pp23_06",
       "q": "Which description matches what you hear?",
       "choices": [
        "The fish kite is highest; a child holds the middle kite's string.",
        "The triangle kite is highest; a child holds the middle kite's string.",
        "The fish kite is highest; a child holds the lowest kite's string.",
        "The fish kite is lowest; a child holds the middle kite's string."
       ],
       "answer": 0,
       "keyEn": "The highest is shaped like a fish, the lowest is a plain triangle, and a child is struggling to hold the string of the middle one.",
       "keyJa": "最も高い凧は魚の形、最も低いのは三角形、子どもは真ん中の凧の糸を必死に持っている",
       "expl": "highest / middle / lowest と形・子どもの位置の対応。struggling(苦労して)は強風を示唆。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "A waiter is balancing a tray with three cups on one hand, while a customer at the nearest table is waving to get his attention, and a menu lies open on the next table."
      }
     ],
     "questions": [
      {
       "id": "pp23_07",
       "q": "Which description matches what you hear?",
       "choices": [
        "A waiter holds a tray of three cups; a customer waves; a menu is on the next table.",
        "A waiter holds a tray of three cups; a customer reads the menu at the next table.",
        "A waiter holds a tray of two cups; a customer waves; a menu is on the next table.",
        "A waiter waves at a customer; a tray of three cups is on the table."
       ],
       "answer": 0,
       "keyEn": "a waiter is balancing a tray with three cups, a customer at the nearest table is waving to get his attention.",
       "keyJa": "ウェイターが3つのカップを載せたお盆を片手で運び、最寄りの客が手を振って呼び、隣のテーブルにメニューが開いてある",
       "expl": "手を振る(waving)のは客。カップの数(three)、menu の位置(next table)にも注意。"
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
       "text": "I take the bus about fifteen times a month. Should I get the monthly pass?"
      },
      {
       "sp": "M",
       "text": "A single ticket costs two fifty, and the monthly pass is thirty dollars."
      },
      {
       "sp": "W",
       "text": "Fifteen times two fifty is thirty-seven fifty."
      },
      {
       "sp": "M",
       "text": "So the pass would save you the difference."
      }
     ],
     "questions": [
      {
       "id": "pp23_08",
       "q": "How much would the woman save each month with the pass?",
       "choices": [
        "$7.50",
        "$30",
        "$37.50",
        "$15"
       ],
       "answer": 0,
       "keyEn": "Fifteen times two fifty is thirty-seven fifty. ... the pass is thirty dollars.",
       "keyJa": "回数券なしの37.50ドルと定期の30ドルの差=7.50ドル",
       "expl": "15×2.5=37.5。37.5−30=7.5。「払う額」ではなく「差額(save)」を問われている。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I booked a hotel room from the twelfth to the fifteenth."
      },
      {
       "sp": "W",
       "text": "Yes, that's three nights."
      },
      {
       "sp": "M",
       "text": "A friend wants to join me. Could I extend by one night, to the sixteenth?"
      },
      {
       "sp": "W",
       "text": "I'm sorry, we're fully booked on the fifteenth. We have rooms again from the sixteenth."
      },
      {
       "sp": "M",
       "text": "Then I'll check out on the fifteenth and book a new room from the sixteenth."
      }
     ],
     "questions": [
      {
       "id": "pp23_09",
       "q": "What will the man do?",
       "choices": [
        "Check out on the fifteenth and book a new room for the sixteenth.",
        "Extend his booking until the sixteenth.",
        "Cancel his booking altogether.",
        "Change his stay to the tenth through the fifteenth."
       ],
       "answer": 0,
       "keyEn": "Then I'll check out on the fifteenth and book a new room from the sixteenth.",
       "keyJa": "15日にチェックアウトし、16日からの新しい部屋を予約する",
       "expl": "15日は満室で延泊不可。最後の Then I'll ... が最終決定。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Do you have anything for someone who's allergic to nuts?"
      },
      {
       "sp": "M",
       "text": "The curry has no nuts, but it's cooked in the same pan as our satay."
      },
      {
       "sp": "W",
       "text": "Then I'd better avoid it. What about the noodles?"
      },
      {
       "sp": "M",
       "text": "Those are safe. We cook them separately."
      }
     ],
     "questions": [
      {
       "id": "pp23_10",
       "q": "What will the woman probably order?",
       "choices": [
        "The noodles.",
        "The curry.",
        "The satay.",
        "Nothing at all."
       ],
       "answer": 0,
       "keyEn": "Those are safe. We cook them separately.",
       "keyJa": "麺は別に調理されているので安全。麺を注文するだろう",
       "expl": "curry は nuts を使わないが satay と同じ鍋(混入の恐れ)。avoid の判断が決め手。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "How far is the post office?"
      },
      {
       "sp": "W",
       "text": "About ten minutes on foot, but there's a street market on the main road today, so you'll need to go around by Pine Street."
      },
      {
       "sp": "M",
       "text": "How much longer is that?"
      },
      {
       "sp": "W",
       "text": "Five minutes."
      },
      {
       "sp": "M",
       "text": "That's fine. Thanks."
      }
     ],
     "questions": [
      {
       "id": "pp23_11",
       "q": "How long will the man's walk take?",
       "choices": [
        "About fifteen minutes.",
        "About ten minutes.",
        "About five minutes.",
        "About twenty minutes."
       ],
       "answer": 0,
       "keyEn": "About ten minutes on foot, but ... go around by Pine Street. — Five minutes.",
       "keyJa": "通常10分に、迂回で5分加わり15分",
       "expl": "10+5=15。ten minutes は迂回前の時間。"
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
       "text": "You look worried. Is it the exam?"
      },
      {
       "sp": "M",
       "text": "Not really. It's the results that scare me."
      },
      {
       "sp": "W",
       "text": "Isn't that the same thing?"
      },
      {
       "sp": "M",
       "text": "Not if you've seen my last grades."
      }
     ],
     "questions": [
      {
       "id": "pp23_12",
       "q": "What is the man worried about?",
       "choices": [
        "What his marks will be.",
        "Whether he can finish the exam.",
        "Whether he studied enough.",
        "Whether the exam will be canceled."
       ],
       "answer": 0,
       "keyEn": "It's the results that scare me. ... Not if you've seen my last grades.",
       "keyJa": "試験自体ではなく、結果(成績)が怖い",
       "expl": "Not really(試験ではない)→ the results(結果)。last grades の悪さが背景。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "Are you coming to the quiz night on Friday?"
      },
      {
       "sp": "W",
       "text": "Only if the questions aren't about sports."
      },
      {
       "sp": "M",
       "text": "They're mostly about sports."
      },
      {
       "sp": "W",
       "text": "Then count me out."
      }
     ],
     "questions": [
      {
       "id": "pp23_13",
       "q": "What will the woman do?",
       "choices": [
        "Stay away from the quiz night.",
        "Go to the quiz night.",
        "Write some questions.",
        "Ask for different topics."
       ],
       "answer": 0,
       "keyEn": "Then count me out.",
       "keyJa": "それなら私は参加しない",
       "expl": "count me out =「私を数に入れないで」=不参加。Only if(条件)が満たされなかった。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Did you finish assembling the shelves?"
      },
      {
       "sp": "M",
       "text": "I have two screws left over."
      },
      {
       "sp": "W",
       "text": "Is that a problem?"
      },
      {
       "sp": "M",
       "text": "I'd say yes, if the shelf starts to lean."
      }
     ],
     "questions": [
      {
       "id": "pp23_14",
       "q": "What is the man's concern?",
       "choices": [
        "The shelves may not be stable.",
        "The shelves are too expensive.",
        "The screws are the wrong size.",
        "The shelves do not fit the room."
       ],
       "answer": 0,
       "keyEn": "I have two screws left over. ... if the shelf starts to lean.",
       "keyJa": "ネジが2本余った。棚が傾き出したら問題だ",
       "expl": "left over =「余っている」=組み立て手順のどこかを抜かした可能性。lean =「傾く」。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "Excuse me, is anyone sitting here?"
      },
      {
       "sp": "W",
       "text": "Not at the moment, but my friend will be back soon with the drinks."
      },
      {
       "sp": "M",
       "text": "No problem. I'll find another table."
      }
     ],
     "questions": [
      {
       "id": "pp23_15",
       "q": "What will the man do?",
       "choices": [
        "Look for a different seat.",
        "Sit down next to the woman.",
        "Wait for the woman's friend.",
        "Order drinks for them."
       ],
       "answer": 0,
       "keyEn": "No problem. I'll find another table.",
       "keyJa": "かまいません。別のテーブルを探します",
       "expl": "Not at the moment(今は空き)でも友人が戻るので、譲る判断をした。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "W",
       "text": "Our neighbors are having another party."
      },
      {
       "sp": "M",
       "text": "It's only nine. They usually stop by eleven."
      },
      {
       "sp": "W",
       "text": "If it's still loud at eleven, I'm calling someone."
      }
     ],
     "questions": [
      {
       "id": "pp23_16",
       "q": "What will the woman do?",
       "choices": [
        "Complain if the noise goes on past eleven.",
        "Call the neighbors right now.",
        "Join the party at eleven.",
        "Move to a quieter room at nine."
       ],
       "answer": 0,
       "keyEn": "If it's still loud at eleven, I'm calling someone.",
       "keyJa": "11時になってもうるさければ、通報する",
       "expl": "条件節 If ... が行動の引き金。今すぐ動くわけではない。"
      }
     ]
    },
    {
     "script": [
      {
       "sp": "M",
       "text": "I'm having second thoughts about the trip."
      },
      {
       "sp": "W",
       "text": "But the tickets are non-refundable."
      },
      {
       "sp": "M",
       "text": "I know. That's what's bothering me."
      },
      {
       "sp": "W",
       "text": "Then you may as well go and enjoy it."
      }
     ],
     "questions": [
      {
       "id": "pp23_17",
       "q": "What does the woman suggest?",
       "choices": [
        "Going on the trip because the tickets cannot be returned.",
        "Selling the tickets to a friend.",
        "Canceling the trip and asking for a refund.",
        "Postponing the trip until next year."
       ],
       "answer": 0,
       "keyEn": "Then you may as well go and enjoy it.",
       "keyJa": "払い戻しできないのだから、行って楽しんだほうがいい",
       "expl": "may as well =「〜したほうがまし」。non-refundable(返金不可)が理由。"
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
       "text": "Here is today's ferry timetable between Port Haven and Pine Island. The first ferry leaves Port Haven at eight and takes forty minutes. The second ferry leaves one hour and fifteen minutes after the first and is twenty minutes slower. Because of the festival, an extra ferry leaves at noon and takes the same time as the first. The last ferry back from the island leaves at five fifteen today, which is one hour later than usual."
      }
     ],
     "questions": [
      {
       "id": "pp23_18",
       "q": "The first ferry arrives at Pine Island at ( ① ).",
       "choices": [
        "8:40",
        "8:20",
        "9:00",
        "8:45"
       ],
       "answer": 0,
       "keyEn": "The first ferry leaves Port Haven at eight and takes forty minutes.",
       "keyJa": "1便は8時発、40分で8:40着",
       "expl": "8:00+40分=8:40。"
      },
      {
       "id": "pp23_19",
       "q": "The second ferry leaves Port Haven at ( ② ).",
       "choices": [
        "9:15",
        "9:00",
        "9:20",
        "9:35"
       ],
       "answer": 0,
       "keyEn": "The second ferry leaves one hour and fifteen minutes after the first.",
       "keyJa": "2便は1便の1時間15分後=9:15発",
       "expl": "8:00+1時間15分=9:15。"
      },
      {
       "id": "pp23_20",
       "q": "The second ferry arrives at Pine Island at ( ③ ).",
       "choices": [
        "10:15",
        "10:00",
        "10:35",
        "9:55"
       ],
       "answer": 0,
       "keyEn": "... and is twenty minutes slower.",
       "keyJa": "2便は1便(40分)より20分遅い=60分かかり、10:15着",
       "expl": "40+20=60分。9:15+1時間=10:15。"
      },
      {
       "id": "pp23_21",
       "q": "The last ferry back from the island usually leaves at ( ④ ).",
       "choices": [
        "4:15",
        "5:15",
        "6:15",
        "3:15"
       ],
       "answer": 0,
       "keyEn": "leaves at five fifteen today, which is one hour later than usual.",
       "keyJa": "今日は5:15だが、通常はその1時間前の4:15",
       "expl": "one hour later than usual =「通常より1時間遅い」→通常は4:15。"
      }
     ],
     "table": [
      [
       "Ferry",
       "Leaves Port Haven",
       "Arrives Pine Island"
      ],
      [
       "First",
       "8:00",
       "①"
      ],
      [
       "Second",
       "②",
       "③"
      ],
      [
       "Extra (festival)",
       "12:00",
       "12:40"
      ],
      [
       "Last return (usual)",
       "④",
       "—"
      ]
     ]
    },
    {
     "script": [
      {
       "sp": "N",
       "text": "Here is how points are scored on school sports day. A win in a race earns five points, second place earns three, and third place earns one. The relay counts double. The Red team won two races and the relay, and finished third in one race. The Blue team won one race, finished second in three races, and was second in the relay."
      }
     ],
     "questions": [
      {
       "id": "pp23_22",
       "q": "A relay win is worth ( ① ) points.",
       "choices": [
        "10",
        "5",
        "15",
        "7"
       ],
       "answer": 0,
       "keyEn": "A win in a race earns five points. ... The relay counts double.",
       "keyJa": "リレーの1位は5点の倍=10点",
       "expl": "double =「2倍」。"
      },
      {
       "id": "pp23_23",
       "q": "The Red team's total is ( ② ) points.",
       "choices": [
        "21",
        "20",
        "16",
        "26"
       ],
       "answer": 0,
       "keyEn": "The Red team won two races and the relay, and finished third in one race.",
       "keyJa": "赤=5×2+10+1=21点",
       "expl": "レース1位2回(10)+リレー1位(10)+3位(1)=21。"
      },
      {
       "id": "pp23_24",
       "q": "The Blue team's total is ( ③ ) points.",
       "choices": [
        "20",
        "19",
        "15",
        "14"
       ],
       "answer": 0,
       "keyEn": "The Blue team won one race, finished second in three races, and was second in the relay.",
       "keyJa": "青=5+3×3+3×2=20点",
       "expl": "1位1回(5)+2位3回(9)+リレー2位(3×2=6)=20。"
      },
      {
       "id": "pp23_25",
       "q": "The Red team leads the Blue team by ( ④ ) point(s).",
       "choices": [
        "1",
        "2",
        "0",
        "5"
       ],
       "answer": 0,
       "keyEn": "(Red 21, Blue 20)",
       "keyJa": "赤が青を1点リード",
       "expl": "21−20=1。②と③の答えから計算する。"
      }
     ],
     "table": [
      [
       "Item",
       "Points"
      ],
      [
       "Race win",
       "5"
      ],
      [
       "Relay win",
       "①"
      ],
      [
       "Red team total",
       "②"
      ],
      [
       "Blue team total",
       "③"
      ],
      [
       "Red's lead over Blue",
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
       "text": "Number one. This yoga class meets on Tuesday evening at seven. It costs ten dollars, beginners are welcome, and mats are provided."
      },
      {
       "sp": "W",
       "text": "Number two. Our class is on Wednesday at seven thirty and costs eight dollars. Beginners are welcome, but you must bring your own mat."
      },
      {
       "sp": "M2",
       "text": "Number three. This class is on Thursday at five. It's nine dollars, beginners are welcome, and mats are provided."
      },
      {
       "sp": "W2",
       "text": "Number four. We meet on Friday at eight in the evening. The fee is fifteen dollars. Beginners are welcome, and mats are provided."
      }
     ],
     "questions": [
      {
       "id": "pp23_26",
       "q": "You want a yoga class that starts after six p.m., costs no more than twelve dollars, welcomes beginners, and provides mats. Which class should you choose?",
       "choices": [
        "Number one",
        "Number two",
        "Number three",
        "Number four"
       ],
       "answer": 0,
       "keyEn": "Number one. Tuesday at seven, ten dollars, beginners welcome, mats provided.",
       "keyJa": "1番=火曜19時・10ドル・初心者歓迎・マット貸出で全条件OK",
       "expl": "1=全条件OK、2=マットは持参、3=17時開始で18時前、4=15ドルで予算超過。",
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
       "text": "Fermented foods such as yogurt, kimchi, miso and natto have been eaten for thousands of years, originally as a way to preserve food before refrigerators existed. During fermentation, microorganisms such as bacteria and yeast break down sugars and produce acids or alcohol, which stop harmful bacteria from growing. Recently, scientists have become interested in another possible benefit: fermented foods may improve gut health. Our intestines contain trillions of bacteria, called the microbiome, which affect digestion and even the immune system. In one study at a US university, volunteers who ate six servings of fermented food a day for ten weeks showed a greater variety of gut bacteria and lower levels of inflammation than a group that ate a high-fiber diet. However, researchers caution that the results come from a small group, and that not all products on the shelves are beneficial. Many commercial yogurts, for instance, contain heat-treated bacteria that are no longer alive, along with large amounts of sugar. Experts therefore advise checking labels for the words live cultures and eating a variety of fermented foods rather than relying on a single type."
      }
     ],
     "questions": [
      {
       "id": "pp23_27",
       "q": "What is the main point of the lecture?",
       "choices": [
        "Fermented foods may help gut health, but the evidence is limited and products vary.",
        "Fermented foods are harmful because they contain bacteria.",
        "Only yogurt can improve the microbiome.",
        "Fermentation was invented after refrigerators."
       ],
       "answer": 0,
       "keyEn": "researchers caution that the results come from a small group, and that not all products on the shelves are beneficial.",
       "keyJa": "発酵食品は腸に良い可能性があるが、証拠は限定的で製品によって差がある",
       "expl": "利点(may improve)と留保(However ... caution)の両方を押さえる。",
       "points": 3
      },
      {
       "id": "pp23_28",
       "q": "Why did people originally eat fermented foods?",
       "choices": [
        "To preserve food before refrigerators existed.",
        "To improve the health of their intestines and their digestion.",
        "To lower the level of inflammation in their bodies.",
        "To avoid eating the sugar that was found in most foods."
       ],
       "answer": 0,
       "keyEn": "originally as a way to preserve food before refrigerators existed.",
       "keyJa": "冷蔵庫のない時代に食べ物を保存するため",
       "expl": "originally(もともと)と Recently(近年)の対比。gut health は近年注目された利点。"
      },
      {
       "id": "pp23_29",
       "q": "How does fermentation prevent harmful bacteria from growing?",
       "choices": [
        "Microorganisms produce acids or alcohol.",
        "Microorganisms raise the temperature.",
        "Microorganisms remove all sugar.",
        "Microorganisms produce fiber."
       ],
       "answer": 0,
       "keyEn": "microorganisms ... break down sugars and produce acids or alcohol, which stop harmful bacteria from growing.",
       "keyJa": "微生物が酸やアルコールを作り、有害な細菌の繁殖を止める",
       "expl": "which の先行詞は acids or alcohol。sugar は分解される対象。"
      },
      {
       "id": "pp23_30",
       "q": "What is the microbiome?",
       "choices": [
        "The trillions of bacteria in our intestines.",
        "A type of heat-treated yogurt sold in many shops.",
        "A kind of food that contains a small amount of alcohol.",
        "A part of the immune system that fights infections."
       ],
       "answer": 0,
       "keyEn": "Our intestines contain trillions of bacteria, called the microbiome.",
       "keyJa": "腸内に存在する何兆もの細菌",
       "expl": "called ... が用語の説明。immune system(免疫)には影響するが、microbiome そのものではない。"
      },
      {
       "id": "pp23_31",
       "q": "What did the study find about the fermented-food group?",
       "choices": [
        "Their gut bacteria became more varied and inflammation was lower.",
        "They lost weight faster than the other group.",
        "They had less variety in their gut bacteria.",
        "They had the same results as the high-fiber group."
       ],
       "answer": 0,
       "keyEn": "volunteers who ate six servings of fermented food a day showed a greater variety of gut bacteria and lower levels of inflammation than a group that ate a high-fiber diet.",
       "keyJa": "腸内細菌の種類が増え、炎症のレベルが下がった",
       "expl": "greater variety と lower levels of inflammation の2点。比較対象は高食物繊維の群。"
      },
      {
       "id": "pp23_32",
       "q": "Why do researchers urge caution about the study?",
       "choices": [
        "The group was small, and not every product is beneficial.",
        "The study lasted only ten days.",
        "The volunteers did not eat any fermented food.",
        "The study was done in many countries."
       ],
       "answer": 0,
       "keyEn": "the results come from a small group, and not all products on the shelves are beneficial.",
       "keyJa": "対象が少人数で、市販品のすべてが有益とは限らない",
       "expl": "two cautions: small group / not all products。期間は ten weeks で、短すぎるわけではない。"
      },
      {
       "id": "pp23_33",
       "q": "What do experts advise?",
       "choices": [
        "Check labels for live cultures and eat a variety of fermented foods.",
        "Eat only one type of fermented food every single day.",
        "Choose the yogurts with the largest amount of added sugar.",
        "Avoid all commercial fermented foods and make everything at home."
       ],
       "answer": 0,
       "keyEn": "checking labels for the words live cultures and eating a variety of fermented foods rather than relying on a single type.",
       "keyJa": "ラベルで live cultures を確認し、いろいろな発酵食品を食べる",
       "expl": "rather than relying on a single type が「1種類に頼らない」の根拠。"
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
       "text": "Have you chosen your elective for next year, Chinese or Spanish?"
      },
      {
       "sp": "W",
       "text": "I'm leaning toward Spanish. More people around the world speak it."
      },
      {
       "sp": "M",
       "text": "But Chinese is more useful for business in Asia, where we live."
      },
      {
       "sp": "W",
       "text": "True. But I love Latin music, so I'd stay motivated."
      },
      {
       "sp": "M",
       "text": "Motivation matters. But Chinese characters take years to learn."
      },
      {
       "sp": "W",
       "text": "I know. That's why I'm hesitant. I'd have to practice every day."
      },
      {
       "sp": "M",
       "text": "Why not take Spanish now and learn Chinese later in college?"
      },
      {
       "sp": "W",
       "text": "That's practical. I'll sign up for Spanish."
      }
     ],
     "questions": [
      {
       "id": "pp23_34",
       "q": "Why is the woman hesitant about Chinese?",
       "choices": [
        "Learning the characters would require daily practice over years.",
        "She dislikes Asian music and prefers music from Latin America.",
        "Chinese is not useful for business in the country where she lives.",
        "Spanish is much easier to pronounce than Chinese is."
       ],
       "answer": 0,
       "keyEn": "Chinese characters take years to learn. — That's why I'm hesitant. I'd have to practice every day.",
       "keyJa": "漢字の習得に何年もかかり、毎日の練習が必要だから",
       "expl": "That's why(それが理由で)の直前が根拠。Latin music は Spanish を選ぶ動機。"
      },
      {
       "id": "pp23_35",
       "q": "What will the woman do?",
       "choices": [
        "Take Spanish now and consider Chinese later.",
        "Take Chinese now and Spanish later.",
        "Take both languages at the same time.",
        "Skip languages and choose another elective."
       ],
       "answer": 0,
       "keyEn": "Why not take Spanish now and learn Chinese later in college? — I'll sign up for Spanish.",
       "keyJa": "今はスペイン語を取り、中国語は大学で",
       "expl": "男性の提案を That's practical で受け入れる。sign up for =「登録する」。"
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
       "text": "Four students, Ken, Mia, Dan and Sue, are discussing whether students should be allowed to use AI tools for their homework."
      },
      {
       "sp": "M",
       "text": "I think we should allow it. In the real world we'll use AI, so learning to use it well is a skill."
      },
      {
       "sp": "W",
       "text": "But if AI writes our essays, we won't learn how to write. Homework is for practice."
      },
      {
       "sp": "M2",
       "text": "I agree that practice matters, Mia, but AI can act like a tutor, explaining mistakes instead of just giving answers."
      },
      {
       "sp": "W2",
       "text": "The trouble is that teachers can't tell how it was used, so honest students would lose out."
      },
      {
       "sp": "M",
       "text": "Then students could be required to submit a note explaining how they used AI."
      },
      {
       "sp": "W",
       "text": "I could accept that for research and feedback, but not for writing the actual text."
      },
      {
       "sp": "M2",
       "text": "I'm fine with that rule."
      }
     ],
     "questions": [
      {
       "id": "pp23_36",
       "q": "Who is concerned about fairness to honest students?",
       "choices": [
        "Sue",
        "Ken",
        "Mia",
        "Dan"
       ],
       "answer": 0,
       "keyEn": "teachers can't tell how it was used, so honest students would lose out.",
       "keyJa": "先生には使い方がわからず、正直な生徒が損をする、とスーは心配している",
       "expl": "lose out =「損をする」。Mia は練習の機会、Ken は将来のスキル、Dan は家庭教師的な使い方。"
      },
      {
       "id": "pp23_37",
       "q": "What rule do the students seem to agree on?",
       "choices": [
        "AI may be used for research and feedback, with a note, but not for writing the text.",
        "AI may be used freely for every piece of homework without any limits.",
        "AI is banned from all homework, including research and feedback.",
        "Only the teachers may use AI, and the students must not touch it."
       ],
       "answer": 0,
       "keyEn": "submit a note explaining how they used AI. — for research and feedback, but not for writing the actual text.",
       "keyJa": "調べ物やフィードバックにはAIを使ってよいが、本文の執筆には使わず、使い方を説明するメモを添える",
       "expl": "Ken の提案(メモ提出)に Mia が範囲を限定して賛成し、Dan も同意。"
      }
     ]
    }
   ]
  }
 ]
};
