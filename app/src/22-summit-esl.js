/* 22-summit-esl.js - the Summit practice exam (Listening 19, Reading and Use of English 34, Writing 2 tasks).
   Made by scripts/convert_summit.py from content/summit.json (written from the exam-style guide only; no real paper seen). */
(function (T) {
  'use strict';
  T.SUMMIT_ESL = {
 "listening": {
  "mins": 25,
  "parts": [
   {
    "n": 1,
    "title": "Part 1",
    "instr": "For each question, choose the correct picture.",
    "items": [
     {
      "num": 1,
      "dok": 2,
      "lo": [
       "5Ld.04",
       "5Ld.03"
      ],
      "v": [
       {
        "hint": {
         "step": "Three presents are talked about. Listen for the reason why two of them are not good."
        },
        "worked": "Grandma is 'always cold in the evenings', so Dad says 'a warm scarf is perfect' and Emily says 'Yes!'.",
        "type": "mcq",
        "q": "What will Emily give Grandma for her birthday?",
        "opts": [
         {
          "html": "",
          "fig": {
           "k": "pico",
           "pic": "🧣",
           "tag": "scarf"
          },
          "alt": "scarf, scarf"
         },
         {
          "html": "",
          "fig": {
           "k": "pico",
           "pic": "💐",
           "tag": "flowers"
          },
          "alt": "bouquet, flowers"
         },
         {
          "html": "",
          "fig": {
           "k": "pico",
           "pic": "🍵",
           "tag": "tea"
          },
          "alt": "teacup without handle, tea"
         }
        ],
        "at": 2,
        "whys": [
         null,
         "Emily asks about flowers first, but Dad says Grandma has lots in her garden.",
         "Emily's aunt always gives Grandma tea, so Emily doesn't choose tea."
        ],
        "letters": true,
        "sub": "Tap one picture.",
        "fig": {
         "k": "stim",
         "id": "sm-summit-l1-q1",
         "kind": "audio",
         "head": "Listen to Emily and her dad.",
         "lines": [
          [
           "bf_lily",
           "Emily",
           "Dad, what should I give Grandma for her birthday? Some flowers?"
          ],
          [
           "bm_george",
           "Dad",
           "She's got lots of flowers in her garden. What about some tea? She loves tea."
          ],
          [
           "bf_lily",
           "Emily",
           "My aunt always gives her tea! But Grandma's always cold in the evenings."
          ],
          [
           "bm_george",
           "Dad",
           "Then a warm scarf is perfect."
          ],
          [
           "bf_lily",
           "Emily",
           "Yes! A blue one. Blue is her favourite colour."
          ]
         ]
        }
       }
      ]
     },
     {
      "num": 2,
      "dok": 1,
      "lo": [
       "5Ld.04"
      ],
      "v": [
       {
        "hint": {
         "step": "Three times are said. Listen for the one that goes with 'the parade starts'."
        },
        "worked": "Mum says 'The parade starts at seven o'clock.' Half past six is when they give out the lanterns, and half past seven is when it finishes.",
        "type": "mcq",
        "q": "What time does the lantern parade start?",
        "opts": [
         {
          "html": "",
          "fig": {
           "k": "pico",
           "pic": "🕖",
           "tag": "7:00"
          },
          "alt": "clock face seven oclock, 7:00"
         },
         {
          "html": "",
          "fig": {
           "k": "pico",
           "pic": "🕡",
           "tag": "6:30"
          },
          "alt": "clock face six-thirty, 6:30"
         },
         {
          "html": "",
          "fig": {
           "k": "pico",
           "pic": "🕢",
           "tag": "7:30"
          },
          "alt": "clock face seven-thirty, 7:30"
         }
        ],
        "at": 0,
        "whys": [
         null,
         "Half past six is when they give out the lanterns, not when the parade starts.",
         "Half past seven is when the parade finishes, not when it starts."
        ],
        "letters": true,
        "sub": "Tap one picture.",
        "fig": {
         "k": "stim",
         "id": "sm-summit-l1-q2",
         "kind": "audio",
         "head": "Listen to Owen and his mum.",
         "lines": [
          [
           "bm_lewis",
           "Owen",
           "Mum, does the lantern parade start at half past six?"
          ],
          [
           "bf_emma",
           "Mum",
           "No, half past six is when they give out the lanterns. The parade starts at seven o'clock."
          ],
          [
           "bm_lewis",
           "Owen",
           "Can we get there early? I want a red lantern."
          ],
          [
           "bf_emma",
           "Mum",
           "Yes, let's be there at half past six. The parade finishes at half past seven."
          ]
         ]
        }
       }
      ]
     },
     {
      "num": 3,
      "dok": 1,
      "lo": [
       "5Ld.04"
      ],
      "v": [
       {
        "hint": {
         "step": "Chi makes a guess. Does Mum say yes or no to it? Listen to what she says next."
        },
        "worked": "Mum says 'No, he isn't hot at all. He's got earache.' His cough is 'much better now'.",
        "type": "mcq",
        "q": "What is wrong with Chi's brother today?",
        "opts": [
         {
          "html": "",
          "fig": {
           "k": "pico",
           "pic": "👂",
           "tag": "earache"
          },
          "alt": "ear, earache"
         },
         {
          "html": "",
          "fig": {
           "k": "pico",
           "pic": "🤒",
           "tag": "fever"
          },
          "alt": "face with thermometer, fever"
         },
         {
          "html": "",
          "fig": {
           "k": "pico",
           "pic": "😷",
           "tag": "cough"
          },
          "alt": "face with medical mask, cough"
         }
        ],
        "at": 1,
        "whys": [
         null,
         "Chi guesses a fever, but Mum says 'he isn't hot at all'.",
         "Mum says his cough is much better now. It is not the problem today."
        ],
        "letters": true,
        "sub": "Tap one picture.",
        "fig": {
         "k": "stim",
         "id": "sm-summit-l1-q3",
         "kind": "audio",
         "head": "Listen to Chi and her mum.",
         "lines": [
          [
           "bf_alice",
           "Chi",
           "Mum, why isn't my brother at school today? Has he got a fever again?"
          ],
          [
           "bf_emma",
           "Mum",
           "No, he isn't hot at all. He's got earache. He couldn't sleep last night."
          ],
          [
           "bf_alice",
           "Chi",
           "Oh no. Is his cough worse too?"
          ],
          [
           "bf_emma",
           "Mum",
           "No, his cough is much better now. The doctor will look at his ear this afternoon."
          ]
         ]
        }
       }
      ]
     },
     {
      "num": 4,
      "dok": 2,
      "lo": [
       "5Ld.04",
       "5Ld.03"
      ],
      "v": [
       {
        "hint": {
         "step": "Two costumes are ruled out. Listen for the reason each one is not possible."
        },
        "worked": "The pirate was last year and the astronaut costume 'was too small', so he is wearing 'My cousin's green dinosaur costume'.",
        "type": "mcq",
        "q": "What will Yusuf wear to the school party?",
        "opts": [
         {
          "html": "",
          "fig": {
           "k": "pico",
           "pic": "🦖",
           "tag": "dinosaur"
          },
          "alt": "t-rex, dinosaur"
         },
         {
          "html": "",
          "fig": {
           "k": "pico",
           "pic": "🏴‍☠️",
           "tag": "pirate"
          },
          "alt": "waving black flag and skull and crossbones, pirate"
         },
         {
          "html": "",
          "fig": {
           "k": "pico",
           "pic": "🧑‍🚀",
           "tag": "astronaut"
          },
          "alt": "adult and rocket, astronaut"
         }
        ],
        "at": 2,
        "whys": [
         null,
         "Yusuf was a pirate last year. He says 'No' to that idea.",
         "Yusuf wanted to be an astronaut, but the costume was too small."
        ],
        "letters": true,
        "sub": "Tap one picture.",
        "fig": {
         "k": "stim",
         "id": "sm-summit-l1-q4",
         "kind": "audio",
         "head": "Listen to Nora and her friend Yusuf.",
         "lines": [
          [
           "bf_lily",
           "Nora",
           "Yusuf, are you going to the school party as a pirate again?"
          ],
          [
           "bm_fable",
           "Yusuf",
           "No, I was a pirate last year. I wanted to be an astronaut, but the costume was too small."
          ],
          [
           "bf_lily",
           "Nora",
           "Oh no! So what are you wearing?"
          ],
          [
           "bm_fable",
           "Yusuf",
           "My cousin's green dinosaur costume. It's got a long tail!"
          ]
         ]
        }
       }
      ]
     },
     {
      "num": 5,
      "dok": 2,
      "lo": [
       "5Ld.04",
       "5Ld.03"
      ],
      "v": [
       {
        "hint": {
         "step": "Dad makes a mistake. Listen to how Luna corrects him."
        },
        "worked": "Luna says 'that sign is for the chocolate cake. The mango one is ten pounds.' Eight pounds is for the small ones.",
        "type": "mcq",
        "q": "How much is the big mango cake?",
        "opts": [
         {
          "html": "",
          "fig": {
           "k": "pico",
           "pic": "🥭🎂",
           "tag": "£10"
          },
          "alt": "mango and birthday cake, £10"
         },
         {
          "html": "",
          "fig": {
           "k": "pico",
           "pic": "🥭🎂",
           "tag": "£12"
          },
          "alt": "mango and birthday cake, £12"
         },
         {
          "html": "",
          "fig": {
           "k": "pico",
           "pic": "🥭🎂",
           "tag": "£8"
          },
          "alt": "mango and birthday cake, £8"
         }
        ],
        "at": 1,
        "whys": [
         null,
         "Twelve pounds is on the sign for the chocolate cake. Luna corrects her dad.",
         "Eight pounds is the price of the small mango cakes, not the big one."
        ],
        "letters": true,
        "sub": "Tap one picture.",
        "fig": {
         "k": "stim",
         "id": "sm-summit-l1-q5",
         "kind": "audio",
         "head": "Listen to Luna and her dad in a cake shop.",
         "lines": [
          [
           "bf_lily",
           "Luna",
           "Dad, look at that big mango cake! How much is it?"
          ],
          [
           "bm_george",
           "Dad",
           "The sign says twelve pounds."
          ],
          [
           "bf_lily",
           "Luna",
           "No, that sign is for the chocolate cake. The mango one is ten pounds."
          ],
          [
           "bm_george",
           "Dad",
           "You're right. And the small mango cakes are eight pounds. But let's get the big one for the party."
          ]
         ]
        }
       }
      ]
     }
    ]
   },
   {
    "n": 2,
    "title": "Part 2",
    "instr": "You will hear a teacher talking to her class about a lantern-making afternoon. For each question, write the missing information. Write one word or a number or a date or a time.",
    "items": [
     {
      "num": 6,
      "dok": 1,
      "lo": [
       "5Ld.04"
      ],
      "v": [
       {
        "hint": {
         "step": "A day, a date and a time are said close together. Write only the number of the day."
        },
        "worked": "The teacher says 'It's on Thursday the eighteenth of September.' Quarter past two is the start time, not the date.",
        "type": "tfill",
        "q": "Write the missing information for question 6.",
        "lines": [
         "Date: {0} September"
        ],
        "ans": [
         [
          "18",
          "18th",
          "eighteenth",
          "the 18th",
          "the eighteenth",
          "thursday 18",
          "thursday 18th",
          "thursday the 18th",
          "thursday the eighteenth",
          "eighteen",
          "18 september",
          "18th september",
          "the 18th of september",
          "the eighteenth of september",
          "thursday 18th september"
         ]
        ],
        "fig": {
         "k": "stim",
         "id": "sm-summit-l2",
         "kind": "audio",
         "head": "<b>LANTERN-MAKING AFTERNOON</b><br>Place: <b>school hall</b> (example)<br>(6) Date: ________ September<br>(7) Lantern shape: a star or a ________<br>(8) Bring: scissors and an old ________<br>(9) At 4.30, walk round the ________<br>(10) Price: £________",
         "lines": [
          [
           "bf_isabella",
           "Teacher",
           "Good morning, everyone. Next week our class is having a lantern-making afternoon in the school hall. It's on Thursday the eighteenth of September. We'll start at quarter past two, straight after lunch. Last year, everyone made a moon lantern. This year, you can choose. You can make a star or a fish. The fish lanterns are a bit harder, but they look lovely! We've got lots of coloured paper and glue, so you don't need to bring those. But please bring scissors and an old newspaper to keep the tables clean. At four o'clock, we'll stop for a snack. Then at half past four, we'll turn on the little lights inside and walk round the playground. Your parents can watch from the gate. The afternoon costs three pounds. That pays for the sticks and the lights. Please bring the money by Monday. Thank you!"
          ]
         ]
        }
       }
      ]
     },
     {
      "num": 7,
      "dok": 1,
      "lo": [
       "5Ld.04",
       "5Ld.01"
      ],
      "v": [
       {
        "hint": {
         "step": "Two years are talked about. Listen for the shapes for THIS year."
        },
        "worked": "'This year, you can choose. You can make a star or a fish.' The moon lantern was last year.",
        "type": "tfill",
        "q": "Write the missing information for question 7.",
        "lines": [
         "Lantern shape: a star or a {0}"
        ],
        "ans": [
         [
          "fish",
          "fish lantern"
         ]
        ],
        "fig": {
         "k": "stim",
         "id": "sm-summit-l2",
         "kind": "audio",
         "head": "<b>LANTERN-MAKING AFTERNOON</b><br>Place: <b>school hall</b> (example)<br>(6) Date: ________ September<br>(7) Lantern shape: a star or a ________<br>(8) Bring: scissors and an old ________<br>(9) At 4.30, walk round the ________<br>(10) Price: £________",
         "lines": [
          [
           "bf_isabella",
           "Teacher",
           "Good morning, everyone. Next week our class is having a lantern-making afternoon in the school hall. It's on Thursday the eighteenth of September. We'll start at quarter past two, straight after lunch. Last year, everyone made a moon lantern. This year, you can choose. You can make a star or a fish. The fish lanterns are a bit harder, but they look lovely! We've got lots of coloured paper and glue, so you don't need to bring those. But please bring scissors and an old newspaper to keep the tables clean. At four o'clock, we'll stop for a snack. Then at half past four, we'll turn on the little lights inside and walk round the playground. Your parents can watch from the gate. The afternoon costs three pounds. That pays for the sticks and the lights. Please bring the money by Monday. Thank you!"
          ]
         ]
        }
       }
      ]
     },
     {
      "num": 8,
      "dok": 1,
      "lo": [
       "5Ld.04",
       "5Ld.01"
      ],
      "v": [
       {
        "hint": {
         "step": "Some things are in school already. Listen for what students must bring."
        },
        "worked": "The teacher says 'please bring scissors and an old newspaper'. The paper and glue are at school already.",
        "type": "tfill",
        "q": "Write the missing information for question 8.",
        "lines": [
         "Bring: scissors and an old {0}"
        ],
        "ans": [
         [
          "newspaper",
          "newspapers",
          "news paper"
         ]
        ],
        "fig": {
         "k": "stim",
         "id": "sm-summit-l2",
         "kind": "audio",
         "head": "<b>LANTERN-MAKING AFTERNOON</b><br>Place: <b>school hall</b> (example)<br>(6) Date: ________ September<br>(7) Lantern shape: a star or a ________<br>(8) Bring: scissors and an old ________<br>(9) At 4.30, walk round the ________<br>(10) Price: £________",
         "lines": [
          [
           "bf_isabella",
           "Teacher",
           "Good morning, everyone. Next week our class is having a lantern-making afternoon in the school hall. It's on Thursday the eighteenth of September. We'll start at quarter past two, straight after lunch. Last year, everyone made a moon lantern. This year, you can choose. You can make a star or a fish. The fish lanterns are a bit harder, but they look lovely! We've got lots of coloured paper and glue, so you don't need to bring those. But please bring scissors and an old newspaper to keep the tables clean. At four o'clock, we'll stop for a snack. Then at half past four, we'll turn on the little lights inside and walk round the playground. Your parents can watch from the gate. The afternoon costs three pounds. That pays for the sticks and the lights. Please bring the money by Monday. Thank you!"
          ]
         ]
        }
       }
      ]
     },
     {
      "num": 9,
      "dok": 1,
      "lo": [
       "5Ld.04"
      ],
      "v": [
       {
        "hint": {
         "step": "Two times are close together. Which one is half past four?"
        },
        "worked": "'At half past four, we'll turn on the little lights inside and walk round the playground.' At four o'clock they have a snack.",
        "type": "tfill",
        "q": "Write the missing information for question 9.",
        "lines": [
         "At 4.30, walk round the {0}"
        ],
        "ans": [
         [
          "playground",
          "play ground",
          "school playground"
         ]
        ],
        "fig": {
         "k": "stim",
         "id": "sm-summit-l2",
         "kind": "audio",
         "head": "<b>LANTERN-MAKING AFTERNOON</b><br>Place: <b>school hall</b> (example)<br>(6) Date: ________ September<br>(7) Lantern shape: a star or a ________<br>(8) Bring: scissors and an old ________<br>(9) At 4.30, walk round the ________<br>(10) Price: £________",
         "lines": [
          [
           "bf_isabella",
           "Teacher",
           "Good morning, everyone. Next week our class is having a lantern-making afternoon in the school hall. It's on Thursday the eighteenth of September. We'll start at quarter past two, straight after lunch. Last year, everyone made a moon lantern. This year, you can choose. You can make a star or a fish. The fish lanterns are a bit harder, but they look lovely! We've got lots of coloured paper and glue, so you don't need to bring those. But please bring scissors and an old newspaper to keep the tables clean. At four o'clock, we'll stop for a snack. Then at half past four, we'll turn on the little lights inside and walk round the playground. Your parents can watch from the gate. The afternoon costs three pounds. That pays for the sticks and the lights. Please bring the money by Monday. Thank you!"
          ]
         ]
        }
       }
      ]
     },
     {
      "num": 10,
      "dok": 1,
      "lo": [
       "5Ld.04"
      ],
      "v": [
       {
        "hint": {
         "step": "Listen for the word 'costs'. Other numbers are a date and times."
        },
        "worked": "'The afternoon costs three pounds.' Monday is the day to bring the money.",
        "type": "tfill",
        "q": "Write the missing information for question 10.",
        "lines": [
         "Price: £{0}"
        ],
        "ans": [
         [
          "3",
          "three",
          "3.00",
          "three pounds",
          "3 pounds",
          "£3",
          "£3.00"
         ]
        ],
        "fig": {
         "k": "stim",
         "id": "sm-summit-l2",
         "kind": "audio",
         "head": "<b>LANTERN-MAKING AFTERNOON</b><br>Place: <b>school hall</b> (example)<br>(6) Date: ________ September<br>(7) Lantern shape: a star or a ________<br>(8) Bring: scissors and an old ________<br>(9) At 4.30, walk round the ________<br>(10) Price: £________",
         "lines": [
          [
           "bf_isabella",
           "Teacher",
           "Good morning, everyone. Next week our class is having a lantern-making afternoon in the school hall. It's on Thursday the eighteenth of September. We'll start at quarter past two, straight after lunch. Last year, everyone made a moon lantern. This year, you can choose. You can make a star or a fish. The fish lanterns are a bit harder, but they look lovely! We've got lots of coloured paper and glue, so you don't need to bring those. But please bring scissors and an old newspaper to keep the tables clean. At four o'clock, we'll stop for a snack. Then at half past four, we'll turn on the little lights inside and walk round the playground. Your parents can watch from the gate. The afternoon costs three pounds. That pays for the sticks and the lights. Please bring the money by Monday. Thank you!"
          ]
         ]
        }
       }
      ]
     }
    ]
   },
   {
    "n": 3,
    "title": "Part 3",
    "instr": "You will hear Luna talking to her friend Tam about his cousin's wedding. For each question, choose the correct answer.",
    "items": [
     {
      "num": 11,
      "dok": 1,
      "lo": [
       "5Ld.04"
      ],
      "v": [
       {
        "hint": {
         "step": "Luna makes a guess. Listen to Tam's answer after 'but'."
        },
        "worked": "Tam says 'That's what I expected, but it was in my uncle's garden.'",
        "type": "mcq",
        "q": "Where was the wedding?",
        "opts": [
         "in a garden",
         "in a big hotel",
         "at Tam's house"
        ],
        "at": 1,
        "whys": [
         null,
         "Tam expected a hotel, but he says the wedding wasn't there.",
         "Tam's house is where his cousin is bringing her photos next Sunday."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-l3",
         "kind": "audio",
         "head": "Listen to Luna and her friend Tam talking about his cousin's wedding.",
         "lines": [
          [
           "bf_lily",
           "Luna",
           "Hi, Tam! Was your cousin's wedding in a big hotel?"
          ],
          [
           "bm_lewis",
           "Tam",
           "That's what I expected, but it was in my uncle's garden."
          ],
          [
           "bf_lily",
           "Luna",
           "Lovely! Did your mum and dad go too?"
          ],
          [
           "bm_lewis",
           "Tam",
           "Mum had to work, so I went with Dad and Grandma."
          ],
          [
           "bf_lily",
           "Luna",
           "Did you wear something special?"
          ],
          [
           "bm_lewis",
           "Tam",
           "Yes, a new suit. But I didn't want to wear the jacket. It was so hot!"
          ],
          [
           "bf_lily",
           "Luna",
           "Was it too small? My brother's jacket was too small at our aunt's party."
          ],
          [
           "bm_lewis",
           "Tam",
           "No, it fitted me. Dad said I could take it off after the photos."
          ],
          [
           "bf_lily",
           "Luna",
           "What was the best part? The food?"
          ],
          [
           "bm_lewis",
           "Tam",
           "The fireworks at the end were the best! The food was delicious, and the dancing was even more fun."
          ],
          [
           "bf_lily",
           "Luna",
           "Will you see your cousin again soon?"
          ],
          [
           "bm_lewis",
           "Tam",
           "Yes. Last week we helped her choose flowers. We were going to watch the wedding video next Sunday, but it isn't ready. So she's bringing her photos to our house instead."
          ]
         ]
        }
       }
      ]
     },
     {
      "num": 12,
      "dok": 1,
      "lo": [
       "5Ld.04"
      ],
      "v": [
       {
        "hint": {
         "step": "One person couldn't go. Who was it, and who went instead?"
        },
        "worked": "Tam says 'Mum had to work, so I went with Dad and Grandma.'",
        "type": "mcq",
        "q": "Who went to the wedding with Tam?",
        "opts": [
         "his dad and grandma",
         "his mum and dad",
         "his mum and grandma"
        ],
        "at": 0,
        "whys": [
         null,
         "Luna asks about his mum and dad, but Tam says his mum had to work.",
         "His mum couldn't go. She had to work."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-l3",
         "kind": "audio",
         "head": "Listen to Luna and her friend Tam talking about his cousin's wedding.",
         "lines": [
          [
           "bf_lily",
           "Luna",
           "Hi, Tam! Was your cousin's wedding in a big hotel?"
          ],
          [
           "bm_lewis",
           "Tam",
           "That's what I expected, but it was in my uncle's garden."
          ],
          [
           "bf_lily",
           "Luna",
           "Lovely! Did your mum and dad go too?"
          ],
          [
           "bm_lewis",
           "Tam",
           "Mum had to work, so I went with Dad and Grandma."
          ],
          [
           "bf_lily",
           "Luna",
           "Did you wear something special?"
          ],
          [
           "bm_lewis",
           "Tam",
           "Yes, a new suit. But I didn't want to wear the jacket. It was so hot!"
          ],
          [
           "bf_lily",
           "Luna",
           "Was it too small? My brother's jacket was too small at our aunt's party."
          ],
          [
           "bm_lewis",
           "Tam",
           "No, it fitted me. Dad said I could take it off after the photos."
          ],
          [
           "bf_lily",
           "Luna",
           "What was the best part? The food?"
          ],
          [
           "bm_lewis",
           "Tam",
           "The fireworks at the end were the best! The food was delicious, and the dancing was even more fun."
          ],
          [
           "bf_lily",
           "Luna",
           "Will you see your cousin again soon?"
          ],
          [
           "bm_lewis",
           "Tam",
           "Yes. Last week we helped her choose flowers. We were going to watch the wedding video next Sunday, but it isn't ready. So she's bringing her photos to our house instead."
          ]
         ]
        }
       }
      ]
     },
     {
      "num": 13,
      "dok": 2,
      "lo": [
       "5Ld.03",
       "5Lm.01"
      ],
      "v": [
       {
        "hint": {
         "step": "Luna talks about her brother's jacket. Is that Tam's reason or someone else's?"
        },
        "worked": "Tam says 'I didn't want to wear the jacket. It was so hot!' So it made him feel too hot.",
        "type": "mcq",
        "q": "Tam didn't want to wear his jacket because",
        "opts": [
         "it made him feel too hot.",
         "it was too small for him.",
         "Dad told him to take it off."
        ],
        "at": 0,
        "whys": [
         null,
         "The small jacket was Luna's brother's. Tam says 'No, it fitted me.'",
         "Dad said he COULD take it off after the photos. That isn't why Tam didn't want to wear it."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-l3",
         "kind": "audio",
         "head": "Listen to Luna and her friend Tam talking about his cousin's wedding.",
         "lines": [
          [
           "bf_lily",
           "Luna",
           "Hi, Tam! Was your cousin's wedding in a big hotel?"
          ],
          [
           "bm_lewis",
           "Tam",
           "That's what I expected, but it was in my uncle's garden."
          ],
          [
           "bf_lily",
           "Luna",
           "Lovely! Did your mum and dad go too?"
          ],
          [
           "bm_lewis",
           "Tam",
           "Mum had to work, so I went with Dad and Grandma."
          ],
          [
           "bf_lily",
           "Luna",
           "Did you wear something special?"
          ],
          [
           "bm_lewis",
           "Tam",
           "Yes, a new suit. But I didn't want to wear the jacket. It was so hot!"
          ],
          [
           "bf_lily",
           "Luna",
           "Was it too small? My brother's jacket was too small at our aunt's party."
          ],
          [
           "bm_lewis",
           "Tam",
           "No, it fitted me. Dad said I could take it off after the photos."
          ],
          [
           "bf_lily",
           "Luna",
           "What was the best part? The food?"
          ],
          [
           "bm_lewis",
           "Tam",
           "The fireworks at the end were the best! The food was delicious, and the dancing was even more fun."
          ],
          [
           "bf_lily",
           "Luna",
           "Will you see your cousin again soon?"
          ],
          [
           "bm_lewis",
           "Tam",
           "Yes. Last week we helped her choose flowers. We were going to watch the wedding video next Sunday, but it isn't ready. So she's bringing her photos to our house instead."
          ]
         ]
        }
       }
      ]
     },
     {
      "num": 14,
      "dok": 2,
      "lo": [
       "5Ld.03",
       "5Lm.01"
      ],
      "v": [
       {
        "hint": {
         "step": "Tam compares three things. Listen for the word 'best'."
        },
        "worked": "Tam says 'The fireworks at the end were the best!' The food was delicious and the dancing 'even more fun', but not the best.",
        "type": "mcq",
        "q": "What did Tam enjoy most at the wedding?",
        "opts": [
         "the fireworks",
         "the dancing",
         "the food"
        ],
        "at": 1,
        "whys": [
         null,
         "The dancing was more fun than the food, but Tam says the fireworks were the best.",
         "Tam liked the food, but he says the dancing was even more fun."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-l3",
         "kind": "audio",
         "head": "Listen to Luna and her friend Tam talking about his cousin's wedding.",
         "lines": [
          [
           "bf_lily",
           "Luna",
           "Hi, Tam! Was your cousin's wedding in a big hotel?"
          ],
          [
           "bm_lewis",
           "Tam",
           "That's what I expected, but it was in my uncle's garden."
          ],
          [
           "bf_lily",
           "Luna",
           "Lovely! Did your mum and dad go too?"
          ],
          [
           "bm_lewis",
           "Tam",
           "Mum had to work, so I went with Dad and Grandma."
          ],
          [
           "bf_lily",
           "Luna",
           "Did you wear something special?"
          ],
          [
           "bm_lewis",
           "Tam",
           "Yes, a new suit. But I didn't want to wear the jacket. It was so hot!"
          ],
          [
           "bf_lily",
           "Luna",
           "Was it too small? My brother's jacket was too small at our aunt's party."
          ],
          [
           "bm_lewis",
           "Tam",
           "No, it fitted me. Dad said I could take it off after the photos."
          ],
          [
           "bf_lily",
           "Luna",
           "What was the best part? The food?"
          ],
          [
           "bm_lewis",
           "Tam",
           "The fireworks at the end were the best! The food was delicious, and the dancing was even more fun."
          ],
          [
           "bf_lily",
           "Luna",
           "Will you see your cousin again soon?"
          ],
          [
           "bm_lewis",
           "Tam",
           "Yes. Last week we helped her choose flowers. We were going to watch the wedding video next Sunday, but it isn't ready. So she's bringing her photos to our house instead."
          ]
         ]
        }
       }
      ]
     },
     {
      "num": 15,
      "dok": 2,
      "lo": [
       "5Ld.03",
       "5Lm.01"
      ],
      "v": [
       {
        "hint": {
         "step": "Listen for a plan that changed. What will they do 'instead'?"
        },
        "worked": "The video 'isn't ready', so his cousin is 'bringing her photos to our house instead'.",
        "type": "mcq",
        "q": "What will Tam do next Sunday?",
        "opts": [
         "look at some wedding photos",
         "watch the wedding video",
         "help choose some flowers"
        ],
        "at": 2,
        "whys": [
         null,
         "That was the first plan, but the video isn't ready.",
         "They helped choose flowers last week. That has already happened."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-l3",
         "kind": "audio",
         "head": "Listen to Luna and her friend Tam talking about his cousin's wedding.",
         "lines": [
          [
           "bf_lily",
           "Luna",
           "Hi, Tam! Was your cousin's wedding in a big hotel?"
          ],
          [
           "bm_lewis",
           "Tam",
           "That's what I expected, but it was in my uncle's garden."
          ],
          [
           "bf_lily",
           "Luna",
           "Lovely! Did your mum and dad go too?"
          ],
          [
           "bm_lewis",
           "Tam",
           "Mum had to work, so I went with Dad and Grandma."
          ],
          [
           "bf_lily",
           "Luna",
           "Did you wear something special?"
          ],
          [
           "bm_lewis",
           "Tam",
           "Yes, a new suit. But I didn't want to wear the jacket. It was so hot!"
          ],
          [
           "bf_lily",
           "Luna",
           "Was it too small? My brother's jacket was too small at our aunt's party."
          ],
          [
           "bm_lewis",
           "Tam",
           "No, it fitted me. Dad said I could take it off after the photos."
          ],
          [
           "bf_lily",
           "Luna",
           "What was the best part? The food?"
          ],
          [
           "bm_lewis",
           "Tam",
           "The fireworks at the end were the best! The food was delicious, and the dancing was even more fun."
          ],
          [
           "bf_lily",
           "Luna",
           "Will you see your cousin again soon?"
          ],
          [
           "bm_lewis",
           "Tam",
           "Yes. Last week we helped her choose flowers. We were going to watch the wedding video next Sunday, but it isn't ready. So she's bringing her photos to our house instead."
          ]
         ]
        }
       }
      ]
     }
    ]
   }
  ]
 },
 "reading": {
  "mins": 35,
  "parts": [
   {
    "n": 1,
    "title": "Part 1",
    "instr": "Read the story about Vinh. For each question, choose the correct word.",
    "items": [
     {
      "num": 1,
      "dok": 1,
      "lo": [
       "5Ug.04"
      ],
      "v": [
       {
        "hint": {
         "step": "Find the time words at the start of the sentence."
        },
        "worked": "'Last Sunday' is in the past, so we use the past simple: Vinh <b>went</b> to his uncle's flat.",
        "type": "mcq",
        "q": "Last Sunday, Vinh ________ to his uncle's flat to learn how to make spring rolls.",
        "opts": [
         "went",
         "goes",
         "going"
        ],
        "at": 0,
        "whys": [
         null,
         "'Goes' is for every day or every week. 'Last Sunday' is finished.",
         "'Going' needs 'was' or 'is' before it. Here the verb is alone."
        ],
        "letters": true
       }
      ]
     },
     {
      "num": 2,
      "dok": 1,
      "lo": [
       "5Us.04"
      ],
      "v": [
       {
        "hint": {
         "step": "Look at the word just before the gap. Is it a person, a thing or a place?"
        },
        "worked": "'A cook' is a person, so we use <b>who</b>: a cook <b>who</b> works in a busy restaurant.",
        "type": "mcq",
        "q": "His uncle is a cook ________ works in a busy restaurant near the river.",
        "opts": [
         "who",
         "which",
         "where"
        ],
        "at": 1,
        "whys": [
         null,
         "'Which' is for things and animals. A cook is a person.",
         "'Where' is for places. The word before the gap is a person."
        ],
        "letters": true
       }
      ]
     },
     {
      "num": 3,
      "dok": 1,
      "lo": [
       "5Uv.01"
      ],
      "v": [
       {
        "hint": {
         "step": "Which small word always comes after 'good' when we talk about a skill?"
        },
        "worked": "We say <b>good at</b> something: he wasn't very <b>good at</b> cooking.",
        "type": "mcq",
        "q": "Vinh felt a bit nervous because he wasn't very good ________ cooking.",
        "opts": [
         "at",
         "of",
         "in"
        ],
        "at": 0,
        "whys": [
         null,
         "We say 'afraid of' or 'proud of', but not 'good of'.",
         "We say 'interested in', but not 'good in' for an activity."
        ],
        "letters": true
       }
      ]
     },
     {
      "num": 4,
      "dok": 2,
      "lo": [
       "5Us.01"
      ],
      "v": [
       {
        "hint": {
         "step": "Can you count spring rolls? Which word goes with 'than' and a plural noun?"
        },
        "worked": "Spring rolls can be counted and he was slower, so he made <b>fewer</b> spring rolls <b>than</b> his uncle.",
        "type": "mcq",
        "q": "Vinh made ________ spring rolls than his uncle, because he rolled them much more slowly.",
        "opts": [
         "fewer",
         "less",
         "much"
        ],
        "at": 1,
        "whys": [
         null,
         "'Less' is for things we can't count, like rice or water. We can count spring rolls.",
         "'Much' doesn't go with 'than', and it is for things we can't count."
        ],
        "letters": true
       }
      ]
     },
     {
      "num": 5,
      "dok": 2,
      "lo": [
       "5Us.02"
      ],
      "v": [
       {
        "hint": {
         "step": "Read the end of the sentence: 'they all loved them'. How many people tried them?"
        },
        "worked": "'They all loved them' tells us all the family tried them, so the answer is <b>everyone</b>.",
        "type": "mcq",
        "q": "At dinner, ________ in the family tried Vinh's spring rolls, and they all loved them!",
        "opts": [
         "everyone",
         "anyone",
         "no-one"
        ],
        "at": 2,
        "whys": [
         null,
         "We use 'anyone' in questions and 'not' sentences. This sentence is positive.",
         "If no-one tried them, they couldn't all love them."
        ],
        "letters": true
       }
      ]
     }
    ]
   },
   {
    "n": 2,
    "title": "Part 2",
    "instr": "Read the texts. For each question, choose the correct answer.",
    "items": [
     {
      "num": 6,
      "dok": 1,
      "lo": [
       "5Ug.10"
      ],
      "v": [
       {
        "hint": {
         "step": "Read the first sentence. Who are the drums for? Is playing them a good idea, or not allowed?"
        },
        "worked": "The drums are 'only for the school band', so other students are not allowed to play them: Other students <b>mustn't</b> play them.",
        "type": "mcq",
        "q": "Which option correctly completes the notice?",
        "opts": [
         "mustn't",
         "should",
         "would"
        ],
        "at": 2,
        "whys": [
         null,
         "'Should' means it is a good idea. The drums are only for the band, so playing them is not a good idea for other students.",
         "'Would' is not used for a rule on a notice. A rule says what is allowed or not allowed."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-r2-6",
         "kind": "text",
         "head": "Notice",
         "html": "<b>MUSIC ROOM</b><br>The new drums are only for the school band. Other students ________ play them. You can listen to the band every Friday at lunchtime. Thank you!"
        }
       }
      ]
     },
     {
      "num": 7,
      "dok": 2,
      "lo": [
       "5Rd.03",
       "5Rm.01"
      ],
      "v": [
       {
        "hint": {
         "step": "Read the question at the end of the message. What does Isla want to do?"
        },
        "worked": "Isla can't go 'tomorrow' and asks 'Can we go next Saturday?', so she wants to change the day.",
        "type": "mcq",
        "q": "Why has Isla written to Felix?",
        "opts": [
         "to change the day of their trip",
         "to invite Felix to her house tomorrow",
         "to ask Felix to meet her grandparents"
        ],
        "at": 1,
        "whys": [
         null,
         "Isla must be at home, but she doesn't ask Felix to come to her house.",
         "Isla says her grandparents are coming, but she doesn't ask Felix to meet them."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-r2-7",
         "kind": "text",
         "head": "Text message",
         "html": "Hi Felix, sorry, I can't come to the ice rink with you tomorrow. My grandparents are arriving from Da Nang, and Mum says I must be at home. Can we go next Saturday? Isla"
        }
       }
      ]
     },
     {
      "num": 8,
      "dok": 1,
      "lo": [
       "5Ug.05"
      ],
      "v": [
       {
        "hint": {
         "step": "Look for the time words. Is Hugo talking about the past, every week or a plan?"
        },
        "worked": "'Next Saturday' is a plan for the future, so we use the present continuous: I <b>am buying</b> a new football.",
        "type": "mcq",
        "q": "Which option correctly completes the email?",
        "opts": [
         "am buying",
         "bought",
         "buy"
        ],
        "at": 0,
        "whys": [
         null,
         "'Bought' is the past, but 'next Saturday' is in the future.",
         "'I buy' is for things we do every day or every week, not for one plan."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-r2-8",
         "kind": "text",
         "head": "Email",
         "html": "Dear Uncle Rob,<br>Thank you for the gift card for my birthday! I ________ a new football with it next Saturday. Dad is taking me to the sports shop in town. I can't wait!<br>Love, Hugo"
        }
       }
      ]
     },
     {
      "num": 9,
      "dok": 1,
      "lo": [
       "5Rd.01"
      ],
      "v": [
       {
        "hint": {
         "step": "Find each option in the notice. Check small words like 'school' and 'centre'."
        },
        "worked": "'You don't need to bring any money, because the tickets are free.' So students don't have to pay to go in.",
        "type": "mcq",
        "q": "What does the notice say?",
        "opts": [
         "Students don't have to pay to go in.",
         "Students can buy lunch at the centre.",
         "The coach leaves the centre at 8.40."
        ],
        "at": 1,
        "whys": [
         null,
         "The notice asks students to bring a packed lunch, so they don't buy it there.",
         "The coach leaves SCHOOL at 8.40. It comes back to school at 2.30."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-r2-9",
         "kind": "text",
         "head": "School notice",
         "html": "<b>GRADE 4 TRIP TO THE SCIENCE CENTRE: THIS FRIDAY</b><br>The coach leaves school at 8.40 and comes back at 2.30. Please bring a packed lunch. You don't need to bring any money, because the tickets are free."
        }
       }
      ]
     },
     {
      "num": 10,
      "dok": 1,
      "lo": [
       "5Ug.10"
      ],
      "v": [
       {
        "hint": {
         "step": "Clara is asking her dad for help. Which word starts a polite request?"
        },
        "worked": "We start a polite request with <b>Could</b>: '<b>Could</b> you help me with my poster tonight?'",
        "type": "mcq",
        "q": "Which option correctly completes the note?",
        "opts": [
         "Could",
         "Must",
         "Should"
        ],
        "at": 2,
        "whys": [
         null,
         "'Must you ...?' asks if something is really necessary. It is not a polite way to ask for help.",
         "'Should you ...?' asks for advice. Clara wants to ask for help."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-r2-10",
         "kind": "text",
         "head": "Note",
         "html": "Dad,<br>________ you help me with my street art poster tonight? I need to finish it by Thursday, and I can't draw the shadows on the bricks. Thanks!<br>Clara"
        }
       }
      ]
     },
     {
      "num": 11,
      "dok": 2,
      "lo": [
       "5Rd.03",
       "5Rm.01"
      ],
      "v": [
       {
        "hint": {
         "step": "Find the two sentences about jobs. Which classes do each job? Look at the word 'also'."
        },
        "worked": "'All classes will plant young trees' and 'Grades 4 and 5 will also make name signs'. So Grade 4 does both.",
        "type": "mcq",
        "q": "What will Grade 4 students do on Monday afternoon?",
        "opts": [
         "plant trees and make signs",
         "make signs but not plant trees",
         "plant trees in the school garden"
        ],
        "at": 0,
        "whys": [
         null,
         "'Also' means Grades 4 and 5 do both jobs, not only the signs.",
         "The trees go along the school fence. The notice doesn't talk about the garden."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-r2-11",
         "kind": "text",
         "head": "School notice",
         "html": "<b>TREE-PLANTING AFTERNOON</b><br>On Monday afternoon, all classes will plant young trees along the school fence. Grades 4 and 5 will also make name signs for the trees. Please wear old shoes that day."
        }
       }
      ]
     },
     {
      "num": 12,
      "dok": 2,
      "lo": [
       "5Rd.03",
       "5Rm.01"
      ],
      "v": [
       {
        "hint": {
         "step": "Two things are different now. Find them both, then choose the option that says the same."
        },
        "worked": "The visit 'starts at ten now, not nine', and 'the firefighters are cooking for us', so they will get lunch there.",
        "type": "mcq",
        "q": "What does Grace want Ngoc to know?",
        "opts": [
         "It starts later, and lunch is at the fire station.",
         "They need to take their lunch to the fire station on Tuesday.",
         "The visit has moved from Tuesday to a different day."
        ],
        "at": 2,
        "whys": [
         null,
         "Grace says they DON'T need to bring lunch any more.",
         "Grace says the visit is still on Tuesday. Only the start time has changed."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-r2-12",
         "kind": "text",
         "head": "Phone message",
         "html": "Hi Ngoc, it's Grace. Our visit to the old fire station is still on Tuesday, but it starts at ten now, not nine. We don't need to bring lunch, because the firefighters are cooking for us. See you!"
        }
       }
      ]
     }
    ]
   },
   {
    "n": 3,
    "title": "Part 3",
    "instr": "Read the conversation between Matilda and Seb. Choose the best answer, A to H, for each gap. There is one example (0). You do not need to use all the letters.",
    "items": [
     {
      "num": 13,
      "dok": 2,
      "lo": [
       "5Rm.01",
       "5Rd.03"
      ],
      "v": [
       {
        "hint": {
         "step": "Read Matilda's NEXT line. What does 'film it' tell you about Seb's idea?"
        },
        "worked": "F fits: Seb suggests 'a short video', and Matilda then asks 'who can film it?'. E is about buying flowers, so 'who can film it?' doesn't follow.",
        "type": "bank",
        "q": "Choose the best answer for gap 13.",
        "bank": [
         [
          "A",
          "My dad has got one. He can lend it to us."
         ],
         [
          "B",
          "Not too long. About five minutes is enough."
         ],
         [
          "C",
          "Yes, she told us this morning. She's moving to another city."
         ],
         [
          "D",
          "We could do it on Friday at lunchtime, while she's at a meeting."
         ],
         [
          "E",
          "Maybe we could buy her some flowers instead."
         ],
         [
          "F",
          "Good idea! What about a short video with a message from everyone?"
         ],
         [
          "G",
          "Yes, she's always been very kind to us."
         ],
         [
          "H",
          "What about the school garden? There's lots of space there."
         ]
        ],
        "ans": "F",
        "fig": {
         "k": "stim",
         "id": "sm-summit-r3",
         "kind": "text",
         "head": "Conversation: Matilda and Seb",
         "html": "Matilda: Seb, did you know our teacher is leaving at the end of term?<br>Seb: (0) <b>C</b><br>Matilda: I'm going to miss her. Shall we make something to say thank you?<br>Seb: (13) ________<br>Matilda: That's perfect! But who can film it? I haven't got a camera.<br>Seb: (14) ________<br>Matilda: Great. Where should we film it? Our classroom is too small for everyone.<br>Seb: (15) ________<br>Matilda: Good, and it looks pretty in the sunshine. When can we do it?<br>Seb: (16) ________<br>Matilda: Yes, then she won't see us. How long should the video be?<br>Seb: (17) ________<br>Matilda: OK. I'll write a list of everyone's names tonight."
        }
       }
      ]
     },
     {
      "num": 14,
      "dok": 2,
      "lo": [
       "5Rm.01",
       "5Rd.03"
      ],
      "v": [
       {
        "hint": {
         "step": "Matilda has a problem: she has no camera. Find a line that solves it."
        },
        "worked": "A fits: 'My dad has got one' solves 'I haven't got a camera', and Matilda says 'Great.'",
        "type": "bank",
        "q": "Choose the best answer for gap 14.",
        "bank": [
         [
          "A",
          "My dad has got one. He can lend it to us."
         ],
         [
          "B",
          "Not too long. About five minutes is enough."
         ],
         [
          "C",
          "Yes, she told us this morning. She's moving to another city."
         ],
         [
          "D",
          "We could do it on Friday at lunchtime, while she's at a meeting."
         ],
         [
          "E",
          "Maybe we could buy her some flowers instead."
         ],
         [
          "F",
          "Good idea! What about a short video with a message from everyone?"
         ],
         [
          "G",
          "Yes, she's always been very kind to us."
         ],
         [
          "H",
          "What about the school garden? There's lots of space there."
         ]
        ],
        "ans": "A",
        "fig": {
         "k": "stim",
         "id": "sm-summit-r3",
         "kind": "text",
         "head": "Conversation: Matilda and Seb",
         "html": "Matilda: Seb, did you know our teacher is leaving at the end of term?<br>Seb: (0) <b>C</b><br>Matilda: I'm going to miss her. Shall we make something to say thank you?<br>Seb: (13) ________<br>Matilda: That's perfect! But who can film it? I haven't got a camera.<br>Seb: (14) ________<br>Matilda: Great. Where should we film it? Our classroom is too small for everyone.<br>Seb: (15) ________<br>Matilda: Good, and it looks pretty in the sunshine. When can we do it?<br>Seb: (16) ________<br>Matilda: Yes, then she won't see us. How long should the video be?<br>Seb: (17) ________<br>Matilda: OK. I'll write a list of everyone's names tonight."
        }
       }
      ]
     },
     {
      "num": 15,
      "dok": 2,
      "lo": [
       "5Rm.01",
       "5Rd.03"
      ],
      "v": [
       {
        "hint": {
         "step": "Matilda asks 'Where ...?'. Your answer must name a place with more space than the classroom."
        },
        "worked": "H fits: 'the school garden' has 'lots of space', and Matilda says it 'looks really pretty in the sunshine'.",
        "type": "bank",
        "q": "Choose the best answer for gap 15.",
        "bank": [
         [
          "A",
          "My dad has got one. He can lend it to us."
         ],
         [
          "B",
          "Not too long. About five minutes is enough."
         ],
         [
          "C",
          "Yes, she told us this morning. She's moving to another city."
         ],
         [
          "D",
          "We could do it on Friday at lunchtime, while she's at a meeting."
         ],
         [
          "E",
          "Maybe we could buy her some flowers instead."
         ],
         [
          "F",
          "Good idea! What about a short video with a message from everyone?"
         ],
         [
          "G",
          "Yes, she's always been very kind to us."
         ],
         [
          "H",
          "What about the school garden? There's lots of space there."
         ]
        ],
        "ans": "H",
        "fig": {
         "k": "stim",
         "id": "sm-summit-r3",
         "kind": "text",
         "head": "Conversation: Matilda and Seb",
         "html": "Matilda: Seb, did you know our teacher is leaving at the end of term?<br>Seb: (0) <b>C</b><br>Matilda: I'm going to miss her. Shall we make something to say thank you?<br>Seb: (13) ________<br>Matilda: That's perfect! But who can film it? I haven't got a camera.<br>Seb: (14) ________<br>Matilda: Great. Where should we film it? Our classroom is too small for everyone.<br>Seb: (15) ________<br>Matilda: Good, and it looks pretty in the sunshine. When can we do it?<br>Seb: (16) ________<br>Matilda: Yes, then she won't see us. How long should the video be?<br>Seb: (17) ________<br>Matilda: OK. I'll write a list of everyone's names tonight."
        }
       }
      ]
     },
     {
      "num": 16,
      "dok": 2,
      "lo": [
       "5Rm.01",
       "5Rd.03"
      ],
      "v": [
       {
        "hint": {
         "step": "Matilda asks 'When ...?'. Then she says 'she won't see us'. Which answer gives a time AND explains that?"
        },
        "worked": "D fits: 'on Friday at lunchtime, while she's at a meeting' answers 'When?', so the teacher 'won't see us'.",
        "type": "bank",
        "q": "Choose the best answer for gap 16.",
        "bank": [
         [
          "A",
          "My dad has got one. He can lend it to us."
         ],
         [
          "B",
          "Not too long. About five minutes is enough."
         ],
         [
          "C",
          "Yes, she told us this morning. She's moving to another city."
         ],
         [
          "D",
          "We could do it on Friday at lunchtime, while she's at a meeting."
         ],
         [
          "E",
          "Maybe we could buy her some flowers instead."
         ],
         [
          "F",
          "Good idea! What about a short video with a message from everyone?"
         ],
         [
          "G",
          "Yes, she's always been very kind to us."
         ],
         [
          "H",
          "What about the school garden? There's lots of space there."
         ]
        ],
        "ans": "D",
        "fig": {
         "k": "stim",
         "id": "sm-summit-r3",
         "kind": "text",
         "head": "Conversation: Matilda and Seb",
         "html": "Matilda: Seb, did you know our teacher is leaving at the end of term?<br>Seb: (0) <b>C</b><br>Matilda: I'm going to miss her. Shall we make something to say thank you?<br>Seb: (13) ________<br>Matilda: That's perfect! But who can film it? I haven't got a camera.<br>Seb: (14) ________<br>Matilda: Great. Where should we film it? Our classroom is too small for everyone.<br>Seb: (15) ________<br>Matilda: Good, and it looks pretty in the sunshine. When can we do it?<br>Seb: (16) ________<br>Matilda: Yes, then she won't see us. How long should the video be?<br>Seb: (17) ________<br>Matilda: OK. I'll write a list of everyone's names tonight."
        }
       }
      ]
     },
     {
      "num": 17,
      "dok": 2,
      "lo": [
       "5Rm.01",
       "5Rd.03"
      ],
      "v": [
       {
        "hint": {
         "step": "Matilda asks 'How long ...?'. Look for an amount of time."
        },
        "worked": "B fits: 'About five minutes is enough' answers 'How long should the video be?'.",
        "type": "bank",
        "q": "Choose the best answer for gap 17.",
        "bank": [
         [
          "A",
          "My dad has got one. He can lend it to us."
         ],
         [
          "B",
          "Not too long. About five minutes is enough."
         ],
         [
          "C",
          "Yes, she told us this morning. She's moving to another city."
         ],
         [
          "D",
          "We could do it on Friday at lunchtime, while she's at a meeting."
         ],
         [
          "E",
          "Maybe we could buy her some flowers instead."
         ],
         [
          "F",
          "Good idea! What about a short video with a message from everyone?"
         ],
         [
          "G",
          "Yes, she's always been very kind to us."
         ],
         [
          "H",
          "What about the school garden? There's lots of space there."
         ]
        ],
        "ans": "B",
        "fig": {
         "k": "stim",
         "id": "sm-summit-r3",
         "kind": "text",
         "head": "Conversation: Matilda and Seb",
         "html": "Matilda: Seb, did you know our teacher is leaving at the end of term?<br>Seb: (0) <b>C</b><br>Matilda: I'm going to miss her. Shall we make something to say thank you?<br>Seb: (13) ________<br>Matilda: That's perfect! But who can film it? I haven't got a camera.<br>Seb: (14) ________<br>Matilda: Great. Where should we film it? Our classroom is too small for everyone.<br>Seb: (15) ________<br>Matilda: Good, and it looks pretty in the sunshine. When can we do it?<br>Seb: (16) ________<br>Matilda: Yes, then she won't see us. How long should the video be?<br>Seb: (17) ________<br>Matilda: OK. I'll write a list of everyone's names tonight."
        }
       }
      ]
     }
    ]
   },
   {
    "n": 4,
    "title": "Part 4",
    "instr": "Read the letter. Write ONE word from the box in each gap. Use each word only once. There is one example (0).",
    "items": [
     {
      "num": 18,
      "dok": 1,
      "lo": [
       "5Ug.04"
      ],
      "v": [
       {
        "hint": {
         "step": "'That day' is in the past. Is 'hundreds of kites' one thing or many?"
        },
        "worked": "'That day' is the past and 'hundreds of kites' is plural, so we write There <b>were</b>.",
        "type": "tfill",
        "q": "Write ONE word from the box for gap 18.",
        "lines": [
         "There {0} hundreds of kites in the sky that day!"
        ],
        "ans": [
         [
          "were"
         ]
        ],
        "fig": {
         "k": "stim",
         "id": "sm-summit-r4",
         "kind": "text",
         "head": "Letter from Kenji",
         "html": "<b>Word box:</b> are, at, both, everyone, for, of, than, were, where, with<br><br><b>The Kite Festival</b><br>Hi Freya,<br>Thank you (0) <b>for</b> your letter. Guess what? Last Saturday, my family went to the kite festival at Sandy Bay beach. There (18) ________ hundreds of kites in the sky that day! My favourite was a giant red fish. It was even bigger (19) ________ our car! My little sister was afraid (20) ________ it at first, but later she wanted to hold its string. At lunchtime, we climbed up to the old lighthouse (21) ________ you can see the whole beach. It was so windy that (22) ________ on the beach had to hold on to their hats! Mum and Dad (23) ________ bought a kite, so now we have lots of kites at home. Next month, we (24) ________ going back for the night festival with lantern kites. Do you want to come too?<br>Write soon,<br>Kenji"
        }
       }
      ]
     },
     {
      "num": 19,
      "dok": 1,
      "lo": [
       "5Ug.11"
      ],
      "v": [
       {
        "hint": {
         "step": "Look at the word before the gap. Which word comes after a comparative?"
        },
        "worked": "After a comparative like 'bigger' we use <b>than</b>: bigger <b>than</b> our car.",
        "type": "tfill",
        "q": "Write ONE word from the box for gap 19.",
        "lines": [
         "It was even bigger {0} our car!"
        ],
        "ans": [
         [
          "than"
         ]
        ],
        "fig": {
         "k": "stim",
         "id": "sm-summit-r4",
         "kind": "text",
         "head": "Letter from Kenji",
         "html": "<b>Word box:</b> are, at, both, everyone, for, of, than, were, where, with<br><br><b>The Kite Festival</b><br>Hi Freya,<br>Thank you (0) <b>for</b> your letter. Guess what? Last Saturday, my family went to the kite festival at Sandy Bay beach. There (18) ________ hundreds of kites in the sky that day! My favourite was a giant red fish. It was even bigger (19) ________ our car! My little sister was afraid (20) ________ it at first, but later she wanted to hold its string. At lunchtime, we climbed up to the old lighthouse (21) ________ you can see the whole beach. It was so windy that (22) ________ on the beach had to hold on to their hats! Mum and Dad (23) ________ bought a kite, so now we have lots of kites at home. Next month, we (24) ________ going back for the night festival with lantern kites. Do you want to come too?<br>Write soon,<br>Kenji"
        }
       }
      ]
     },
     {
      "num": 20,
      "dok": 1,
      "lo": [
       "5Uv.01"
      ],
      "v": [
       {
        "hint": {
         "step": "Which small word always comes after 'afraid'?"
        },
        "worked": "We say <b>afraid of</b> something: she was <b>afraid of</b> it.",
        "type": "tfill",
        "q": "Write ONE word from the box for gap 20.",
        "lines": [
         "My little sister was afraid {0} it at first."
        ],
        "ans": [
         [
          "of"
         ]
        ],
        "fig": {
         "k": "stim",
         "id": "sm-summit-r4",
         "kind": "text",
         "head": "Letter from Kenji",
         "html": "<b>Word box:</b> are, at, both, everyone, for, of, than, were, where, with<br><br><b>The Kite Festival</b><br>Hi Freya,<br>Thank you (0) <b>for</b> your letter. Guess what? Last Saturday, my family went to the kite festival at Sandy Bay beach. There (18) ________ hundreds of kites in the sky that day! My favourite was a giant red fish. It was even bigger (19) ________ our car! My little sister was afraid (20) ________ it at first, but later she wanted to hold its string. At lunchtime, we climbed up to the old lighthouse (21) ________ you can see the whole beach. It was so windy that (22) ________ on the beach had to hold on to their hats! Mum and Dad (23) ________ bought a kite, so now we have lots of kites at home. Next month, we (24) ________ going back for the night festival with lantern kites. Do you want to come too?<br>Write soon,<br>Kenji"
        }
       }
      ]
     },
     {
      "num": 21,
      "dok": 2,
      "lo": [
       "5Us.04"
      ],
      "v": [
       {
        "hint": {
         "step": "The word before the gap is a place. Which word in the box joins a place to more information about it?"
        },
        "worked": "A lighthouse is a place, so we use <b>where</b>: the old lighthouse <b>where</b> you can see the whole beach.",
        "type": "tfill",
        "q": "Write ONE word from the box for gap 21.",
        "lines": [
         "At lunchtime, we climbed up to the old lighthouse {0} you can see the whole beach."
        ],
        "ans": [
         [
          "where"
         ]
        ],
        "fig": {
         "k": "stim",
         "id": "sm-summit-r4",
         "kind": "text",
         "head": "Letter from Kenji",
         "html": "<b>Word box:</b> are, at, both, everyone, for, of, than, were, where, with<br><br><b>The Kite Festival</b><br>Hi Freya,<br>Thank you (0) <b>for</b> your letter. Guess what? Last Saturday, my family went to the kite festival at Sandy Bay beach. There (18) ________ hundreds of kites in the sky that day! My favourite was a giant red fish. It was even bigger (19) ________ our car! My little sister was afraid (20) ________ it at first, but later she wanted to hold its string. At lunchtime, we climbed up to the old lighthouse (21) ________ you can see the whole beach. It was so windy that (22) ________ on the beach had to hold on to their hats! Mum and Dad (23) ________ bought a kite, so now we have lots of kites at home. Next month, we (24) ________ going back for the night festival with lantern kites. Do you want to come too?<br>Write soon,<br>Kenji"
        }
       }
      ]
     },
     {
      "num": 22,
      "dok": 2,
      "lo": [
       "5Us.02"
      ],
      "v": [
       {
        "hint": {
         "step": "The gap needs a word for people. Who had to hold their hats: one person or all the people?"
        },
        "worked": "It was very windy, so all the people had to hold their hats: <b>everyone</b> on the beach.",
        "type": "tfill",
        "q": "Write ONE word from the box for gap 22.",
        "lines": [
         "It was so windy that {0} on the beach had to hold on to their hats!"
        ],
        "ans": [
         [
          "everyone"
         ]
        ],
        "fig": {
         "k": "stim",
         "id": "sm-summit-r4",
         "kind": "text",
         "head": "Letter from Kenji",
         "html": "<b>Word box:</b> are, at, both, everyone, for, of, than, were, where, with<br><br><b>The Kite Festival</b><br>Hi Freya,<br>Thank you (0) <b>for</b> your letter. Guess what? Last Saturday, my family went to the kite festival at Sandy Bay beach. There (18) ________ hundreds of kites in the sky that day! My favourite was a giant red fish. It was even bigger (19) ________ our car! My little sister was afraid (20) ________ it at first, but later she wanted to hold its string. At lunchtime, we climbed up to the old lighthouse (21) ________ you can see the whole beach. It was so windy that (22) ________ on the beach had to hold on to their hats! Mum and Dad (23) ________ bought a kite, so now we have lots of kites at home. Next month, we (24) ________ going back for the night festival with lantern kites. Do you want to come too?<br>Write soon,<br>Kenji"
        }
       }
      ]
     },
     {
      "num": 23,
      "dok": 2,
      "lo": [
       "5Us.01"
      ],
      "v": [
       {
        "hint": {
         "step": "How many people are before the gap? Which word in the box is for two people?"
        },
        "worked": "Mum and Dad are two people, and each one bought a kite, so we write Mum and Dad <b>both</b> bought a kite.",
        "type": "tfill",
        "q": "Write ONE word from the box for gap 23.",
        "lines": [
         "Mum and Dad {0} bought a kite, so now we have lots of kites at home."
        ],
        "ans": [
         [
          "both"
         ]
        ],
        "fig": {
         "k": "stim",
         "id": "sm-summit-r4",
         "kind": "text",
         "head": "Letter from Kenji",
         "html": "<b>Word box:</b> are, at, both, everyone, for, of, than, were, where, with<br><br><b>The Kite Festival</b><br>Hi Freya,<br>Thank you (0) <b>for</b> your letter. Guess what? Last Saturday, my family went to the kite festival at Sandy Bay beach. There (18) ________ hundreds of kites in the sky that day! My favourite was a giant red fish. It was even bigger (19) ________ our car! My little sister was afraid (20) ________ it at first, but later she wanted to hold its string. At lunchtime, we climbed up to the old lighthouse (21) ________ you can see the whole beach. It was so windy that (22) ________ on the beach had to hold on to their hats! Mum and Dad (23) ________ bought a kite, so now we have lots of kites at home. Next month, we (24) ________ going back for the night festival with lantern kites. Do you want to come too?<br>Write soon,<br>Kenji"
        }
       }
      ]
     },
     {
      "num": 24,
      "dok": 1,
      "lo": [
       "5Ug.05"
      ],
      "v": [
       {
        "hint": {
         "step": "'Next month' is a plan. Which word goes before 'going' with 'we'?"
        },
        "worked": "A plan for the future uses the present continuous: we <b>are</b> going back next month.",
        "type": "tfill",
        "q": "Write ONE word from the box for gap 24.",
        "lines": [
         "Next month, we {0} going back for the night festival with lantern kites."
        ],
        "ans": [
         [
          "are",
          "'re"
         ]
        ],
        "fig": {
         "k": "stim",
         "id": "sm-summit-r4",
         "kind": "text",
         "head": "Letter from Kenji",
         "html": "<b>Word box:</b> are, at, both, everyone, for, of, than, were, where, with<br><br><b>The Kite Festival</b><br>Hi Freya,<br>Thank you (0) <b>for</b> your letter. Guess what? Last Saturday, my family went to the kite festival at Sandy Bay beach. There (18) ________ hundreds of kites in the sky that day! My favourite was a giant red fish. It was even bigger (19) ________ our car! My little sister was afraid (20) ________ it at first, but later she wanted to hold its string. At lunchtime, we climbed up to the old lighthouse (21) ________ you can see the whole beach. It was so windy that (22) ________ on the beach had to hold on to their hats! Mum and Dad (23) ________ bought a kite, so now we have lots of kites at home. Next month, we (24) ________ going back for the night festival with lantern kites. Do you want to come too?<br>Write soon,<br>Kenji"
        }
       }
      ]
     }
    ]
   },
   {
    "n": 5,
    "title": "Part 5",
    "instr": "Read what three children say about helping at home. For each question, choose the correct person.",
    "items": [
     {
      "num": 25,
      "dok": 2,
      "lo": [
       "5Rm.01",
       "5Rd.03"
      ],
      "v": [
       {
        "hint": {
         "step": "'Worried' has a similar meaning to another feeling word. Look for it in the three texts."
        },
        "worked": "Mai writes 'Cooking used to make me nervous'. Nervous is like worried.",
        "type": "mcq",
        "q": "Which person was worried about doing a job at first?",
        "opts": [
         "Mai",
         "Theo",
         "Harriet"
        ],
        "at": 1,
        "whys": [
         null,
         "Theo hated washing the car because it took a long time. He wasn't worried about it.",
         "Harriet says her jobs are important, but she never says she was worried about them."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-r5",
         "kind": "text",
         "head": "Magazine page",
         "html": "<b>Helping at home</b><br><br><b>Theo</b><br>I help at home every day. I feed our two cats and wash their bowls. At the weekend, I help Dad clean the car. I used to hate that job, because it took all morning. Now my friend from next door helps us, so we finish quickly. Mum says I'm hard-working, but sometimes I forget the cats' dinner. Then they follow me round the flat until I remember! Dad gives me a little pocket money, and I'm saving it for a skateboard.<br><br><b>Mai</b><br>My mum works late on Tuesdays and Thursdays, so on those days I make dinner with my grandma. I wash and chop the vegetables, and she cooks the rice. Grandma is very patient. She showed me how to cut carrots safely. My little brother is too young to cook, so he lays the table. Sometimes he puts the forks in the wrong place, but I don't mind. Cooking used to make me nervous, but now I'm proud of our meals.<br><br><b>Harriet</b><br>In our flat, everyone has a job every evening. Mine is to water the plants on the balcony and take out the rubbish. I don't get any money for it, but I know it's important. Last month, I started a new job: I sort the bottles and paper for recycling. Dad used to put paper in the wrong bin, so I made a poster with pictures for him. Now he never makes that mistake! Helping at home is good practice for when I'm older."
        }
       }
      ]
     },
     {
      "num": 26,
      "dok": 2,
      "lo": [
       "5Rm.01",
       "5Rd.03"
      ],
      "v": [
       {
        "hint": {
         "step": "Look for words about money in all three texts. Be careful: one text says 'don't'."
        },
        "worked": "Theo writes 'Dad gives me a little <b>pocket money</b>'. Pocket money is money for children.",
        "type": "mcq",
        "q": "Which person is paid for the jobs they do at home?",
        "opts": [
         "Theo",
         "Mai",
         "Harriet"
        ],
        "at": 0,
        "whys": [
         null,
         "Mai feels proud of the meals, but she doesn't talk about money.",
         "Harriet says 'I don't get any money for it'."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-r5",
         "kind": "text",
         "head": "Magazine page",
         "html": "<b>Helping at home</b><br><br><b>Theo</b><br>I help at home every day. I feed our two cats and wash their bowls. At the weekend, I help Dad clean the car. I used to hate that job, because it took all morning. Now my friend from next door helps us, so we finish quickly. Mum says I'm hard-working, but sometimes I forget the cats' dinner. Then they follow me round the flat until I remember! Dad gives me a little pocket money, and I'm saving it for a skateboard.<br><br><b>Mai</b><br>My mum works late on Tuesdays and Thursdays, so on those days I make dinner with my grandma. I wash and chop the vegetables, and she cooks the rice. Grandma is very patient. She showed me how to cut carrots safely. My little brother is too young to cook, so he lays the table. Sometimes he puts the forks in the wrong place, but I don't mind. Cooking used to make me nervous, but now I'm proud of our meals.<br><br><b>Harriet</b><br>In our flat, everyone has a job every evening. Mine is to water the plants on the balcony and take out the rubbish. I don't get any money for it, but I know it's important. Last month, I started a new job: I sort the bottles and paper for recycling. Dad used to put paper in the wrong bin, so I made a poster with pictures for him. Now he never makes that mistake! Helping at home is good practice for when I'm older."
        }
       }
      ]
     },
     {
      "num": 27,
      "dok": 2,
      "lo": [
       "5Rm.01",
       "5Rd.03"
      ],
      "v": [
       {
        "hint": {
         "step": "All three texts talk about a mistake. Who did something so the mistake stopped?"
        },
        "worked": "Harriet made a poster because Dad 'used to put paper in the wrong bin'. 'Now he never makes that mistake!'",
        "type": "mcq",
        "q": "Which person helped someone in the family to stop making a mistake?",
        "opts": [
         "Harriet",
         "Theo",
         "Mai"
        ],
        "at": 2,
        "whys": [
         null,
         "Theo is the one who makes a mistake: he forgets the cats' dinner.",
         "Mai's brother puts the forks in the wrong place, but Mai doesn't help him change it. She says 'I don't mind'."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-r5",
         "kind": "text",
         "head": "Magazine page",
         "html": "<b>Helping at home</b><br><br><b>Theo</b><br>I help at home every day. I feed our two cats and wash their bowls. At the weekend, I help Dad clean the car. I used to hate that job, because it took all morning. Now my friend from next door helps us, so we finish quickly. Mum says I'm hard-working, but sometimes I forget the cats' dinner. Then they follow me round the flat until I remember! Dad gives me a little pocket money, and I'm saving it for a skateboard.<br><br><b>Mai</b><br>My mum works late on Tuesdays and Thursdays, so on those days I make dinner with my grandma. I wash and chop the vegetables, and she cooks the rice. Grandma is very patient. She showed me how to cut carrots safely. My little brother is too young to cook, so he lays the table. Sometimes he puts the forks in the wrong place, but I don't mind. Cooking used to make me nervous, but now I'm proud of our meals.<br><br><b>Harriet</b><br>In our flat, everyone has a job every evening. Mine is to water the plants on the balcony and take out the rubbish. I don't get any money for it, but I know it's important. Last month, I started a new job: I sort the bottles and paper for recycling. Dad used to put paper in the wrong bin, so I made a poster with pictures for him. Now he never makes that mistake! Helping at home is good practice for when I'm older."
        }
       }
      ]
     },
     {
      "num": 28,
      "dok": 2,
      "lo": [
       "5Rm.01",
       "5Rd.03"
      ],
      "v": [
       {
        "hint": {
         "step": "Look for a word with the opposite meaning of 'remember'. Who is it about: the writer or someone else?"
        },
        "worked": "Theo writes 'sometimes I <b>forget</b> the cats' dinner'. Forget means you don't remember.",
        "type": "mcq",
        "q": "Which person sometimes doesn't remember to do a job?",
        "opts": [
         "Theo",
         "Mai",
         "Harriet"
        ],
        "at": 0,
        "whys": [
         null,
         "Mai's little brother gets the forks wrong, but nobody forgets a job in Mai's text.",
         "Harriet's dad made a mistake with the bins. That is not forgetting."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-r5",
         "kind": "text",
         "head": "Magazine page",
         "html": "<b>Helping at home</b><br><br><b>Theo</b><br>I help at home every day. I feed our two cats and wash their bowls. At the weekend, I help Dad clean the car. I used to hate that job, because it took all morning. Now my friend from next door helps us, so we finish quickly. Mum says I'm hard-working, but sometimes I forget the cats' dinner. Then they follow me round the flat until I remember! Dad gives me a little pocket money, and I'm saving it for a skateboard.<br><br><b>Mai</b><br>My mum works late on Tuesdays and Thursdays, so on those days I make dinner with my grandma. I wash and chop the vegetables, and she cooks the rice. Grandma is very patient. She showed me how to cut carrots safely. My little brother is too young to cook, so he lays the table. Sometimes he puts the forks in the wrong place, but I don't mind. Cooking used to make me nervous, but now I'm proud of our meals.<br><br><b>Harriet</b><br>In our flat, everyone has a job every evening. Mine is to water the plants on the balcony and take out the rubbish. I don't get any money for it, but I know it's important. Last month, I started a new job: I sort the bottles and paper for recycling. Dad used to put paper in the wrong bin, so I made a poster with pictures for him. Now he never makes that mistake! Helping at home is good practice for when I'm older."
        }
       }
      ]
     },
     {
      "num": 29,
      "dok": 2,
      "lo": [
       "5Rm.01",
       "5Rd.03"
      ],
      "v": [
       {
        "hint": {
         "step": "Look for 'showed me' or 'taught me' in the texts. Who did the showing?"
        },
        "worked": "Mai writes that Grandma 'showed me how to cut carrots safely'.",
        "type": "mcq",
        "q": "Which person learned how to do something from an older person?",
        "opts": [
         "Mai",
         "Theo",
         "Harriet"
        ],
        "at": 1,
        "whys": [
         null,
         "Theo's friend helps with the car, but he doesn't teach Theo anything.",
         "Harriet taught her dad. She didn't learn from an older person."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-r5",
         "kind": "text",
         "head": "Magazine page",
         "html": "<b>Helping at home</b><br><br><b>Theo</b><br>I help at home every day. I feed our two cats and wash their bowls. At the weekend, I help Dad clean the car. I used to hate that job, because it took all morning. Now my friend from next door helps us, so we finish quickly. Mum says I'm hard-working, but sometimes I forget the cats' dinner. Then they follow me round the flat until I remember! Dad gives me a little pocket money, and I'm saving it for a skateboard.<br><br><b>Mai</b><br>My mum works late on Tuesdays and Thursdays, so on those days I make dinner with my grandma. I wash and chop the vegetables, and she cooks the rice. Grandma is very patient. She showed me how to cut carrots safely. My little brother is too young to cook, so he lays the table. Sometimes he puts the forks in the wrong place, but I don't mind. Cooking used to make me nervous, but now I'm proud of our meals.<br><br><b>Harriet</b><br>In our flat, everyone has a job every evening. Mine is to water the plants on the balcony and take out the rubbish. I don't get any money for it, but I know it's important. Last month, I started a new job: I sort the bottles and paper for recycling. Dad used to put paper in the wrong bin, so I made a poster with pictures for him. Now he never makes that mistake! Helping at home is good practice for when I'm older."
        }
       }
      ]
     }
    ]
   },
   {
    "n": 6,
    "title": "Part 6",
    "instr": "Read the article. For each question, choose the correct answer.",
    "items": [
     {
      "num": 30,
      "dok": 1,
      "lo": [
       "5Rd.01"
      ],
      "v": [
       {
        "hint": {
         "step": "Read the first paragraph. What happened 'one morning'?"
        },
        "worked": "'One morning, the head teacher asked Iris's class for ideas to make it brighter.'",
        "type": "mcq",
        "q": "What started the project?",
        "opts": [
         "The head teacher asked the class for ideas.",
         "Some children planted flowers next to the wall.",
         "A local artist offered to paint the wall."
        ],
        "at": 1,
        "whys": [
         null,
         "Some children only WANTED to plant flowers. Nobody planted any.",
         "The artist came later, to look at the finished mural."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-r6",
         "kind": "text",
         "head": "Magazine article",
         "html": "<b>A Wall Full of Colour</b><br><i>Iris, aged 10, helped her class to paint a huge picture on their school wall.</i><br><br>The wall next to Iris's school playground was grey and dirty. One morning, the head teacher asked Iris's class for ideas to make it brighter. Some children wanted to plant flowers. Iris had a different idea: a mural, a big painting on the wall.<br><br>Iris thought the planning would be quick. She was wrong! The class chose the theme 'Our sports day', and everyone drew sketches. Her friends loved drawing, but Iris found it slow and tiring. The planning took three weeks, much longer than the painting.<br><br>When the painting began, Iris wanted to paint the runners, because she is good at faces. But a quiet boy in her class was even better at tiny details. So Iris let him paint the faces, and she painted the sky.<br><br>Later, a local artist came to see the mural. He said the colours were bright, but the thing he liked most was a small dog asleep under a bench.<br><br>Now younger children stop to look at it every day. Iris's classmates want to paint the wall in the school hall next. But Iris has a bigger plan. She wants to ask the town if children can paint the walls of the town library."
        }
       }
      ]
     },
     {
      "num": 31,
      "dok": 2,
      "lo": [
       "5Rd.03",
       "5Rm.01"
      ],
      "v": [
       {
        "hint": {
         "step": "Read the second paragraph. What did Iris think BEFORE, and what really happened?"
        },
        "worked": "'Iris thought the planning would be quick. She was wrong!' It took three weeks and she 'found it slow and tiring'.",
        "type": "mcq",
        "q": "What did Iris think about the planning?",
        "opts": [
         "It was slower than she expected.",
         "It was the best part of the project.",
         "It was quicker than the painting."
        ],
        "at": 2,
        "whys": [
         null,
         "Iris's friends loved drawing the sketches, but Iris found the planning slow and tiring.",
         "The planning took three weeks, much longer than the painting."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-r6",
         "kind": "text",
         "head": "Magazine article",
         "html": "<b>A Wall Full of Colour</b><br><i>Iris, aged 10, helped her class to paint a huge picture on their school wall.</i><br><br>The wall next to Iris's school playground was grey and dirty. One morning, the head teacher asked Iris's class for ideas to make it brighter. Some children wanted to plant flowers. Iris had a different idea: a mural, a big painting on the wall.<br><br>Iris thought the planning would be quick. She was wrong! The class chose the theme 'Our sports day', and everyone drew sketches. Her friends loved drawing, but Iris found it slow and tiring. The planning took three weeks, much longer than the painting.<br><br>When the painting began, Iris wanted to paint the runners, because she is good at faces. But a quiet boy in her class was even better at tiny details. So Iris let him paint the faces, and she painted the sky.<br><br>Later, a local artist came to see the mural. He said the colours were bright, but the thing he liked most was a small dog asleep under a bench.<br><br>Now younger children stop to look at it every day. Iris's classmates want to paint the wall in the school hall next. But Iris has a bigger plan. She wants to ask the town if children can paint the walls of the town library."
        }
       }
      ]
     },
     {
      "num": 32,
      "dok": 2,
      "lo": [
       "5Rd.03",
       "5Rm.01"
      ],
      "v": [
       {
        "hint": {
         "step": "Look for 'even better' in the third paragraph. Who was better, and at what?"
        },
        "worked": "'A quiet boy in her class was even better at tiny details', so Iris 'let him paint the faces'.",
        "type": "mcq",
        "q": "Why did Iris let the boy paint the faces?",
        "opts": [
         "He could paint small things better than her.",
         "She wasn't very good at painting faces.",
         "The teacher asked her to paint the sky."
        ],
        "at": 0,
        "whys": [
         null,
         "The text says Iris IS good at faces. The boy was even better.",
         "Iris painted the sky, but the text doesn't say a teacher asked her to."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-r6",
         "kind": "text",
         "head": "Magazine article",
         "html": "<b>A Wall Full of Colour</b><br><i>Iris, aged 10, helped her class to paint a huge picture on their school wall.</i><br><br>The wall next to Iris's school playground was grey and dirty. One morning, the head teacher asked Iris's class for ideas to make it brighter. Some children wanted to plant flowers. Iris had a different idea: a mural, a big painting on the wall.<br><br>Iris thought the planning would be quick. She was wrong! The class chose the theme 'Our sports day', and everyone drew sketches. Her friends loved drawing, but Iris found it slow and tiring. The planning took three weeks, much longer than the painting.<br><br>When the painting began, Iris wanted to paint the runners, because she is good at faces. But a quiet boy in her class was even better at tiny details. So Iris let him paint the faces, and she painted the sky.<br><br>Later, a local artist came to see the mural. He said the colours were bright, but the thing he liked most was a small dog asleep under a bench.<br><br>Now younger children stop to look at it every day. Iris's classmates want to paint the wall in the school hall next. But Iris has a bigger plan. She wants to ask the town if children can paint the walls of the town library."
        }
       }
      ]
     },
     {
      "num": 33,
      "dok": 1,
      "lo": [
       "5Rd.01"
      ],
      "v": [
       {
        "hint": {
         "step": "Find 'the thing he liked most'."
        },
        "worked": "'The thing he liked most was a small dog asleep under a bench.' A dog is a little animal.",
        "type": "mcq",
        "q": "What did the artist like best about the mural?",
        "opts": [
         "a little animal in it",
         "the bright colours in it",
         "the people's faces"
        ],
        "at": 0,
        "whys": [
         null,
         "The artist said the colours were bright, 'but' something else was his favourite.",
         "The text doesn't say what the artist thought about the faces."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-r6",
         "kind": "text",
         "head": "Magazine article",
         "html": "<b>A Wall Full of Colour</b><br><i>Iris, aged 10, helped her class to paint a huge picture on their school wall.</i><br><br>The wall next to Iris's school playground was grey and dirty. One morning, the head teacher asked Iris's class for ideas to make it brighter. Some children wanted to plant flowers. Iris had a different idea: a mural, a big painting on the wall.<br><br>Iris thought the planning would be quick. She was wrong! The class chose the theme 'Our sports day', and everyone drew sketches. Her friends loved drawing, but Iris found it slow and tiring. The planning took three weeks, much longer than the painting.<br><br>When the painting began, Iris wanted to paint the runners, because she is good at faces. But a quiet boy in her class was even better at tiny details. So Iris let him paint the faces, and she painted the sky.<br><br>Later, a local artist came to see the mural. He said the colours were bright, but the thing he liked most was a small dog asleep under a bench.<br><br>Now younger children stop to look at it every day. Iris's classmates want to paint the wall in the school hall next. But Iris has a bigger plan. She wants to ask the town if children can paint the walls of the town library."
        }
       }
      ]
     },
     {
      "num": 34,
      "dok": 2,
      "lo": [
       "5Rd.03",
       "5Rm.01"
      ],
      "v": [
       {
        "hint": {
         "step": "Read the last paragraph. Whose plan is each idea: the classmates' or Iris's?"
        },
        "worked": "'Iris has a bigger plan. She wants to ask the town if children can paint the walls of the <b>town library</b>.' The library is a building in the town.",
        "type": "mcq",
        "q": "What does Iris want to do next?",
        "opts": [
         "paint walls on a building in the town",
         "paint a wall in the school hall",
         "teach younger children to paint"
        ],
        "at": 1,
        "whys": [
         null,
         "Painting the school hall is her classmates' plan, not Iris's.",
         "Younger children look at the wall, but Iris doesn't say she will teach them."
        ],
        "letters": true,
        "fig": {
         "k": "stim",
         "id": "sm-summit-r6",
         "kind": "text",
         "head": "Magazine article",
         "html": "<b>A Wall Full of Colour</b><br><i>Iris, aged 10, helped her class to paint a huge picture on their school wall.</i><br><br>The wall next to Iris's school playground was grey and dirty. One morning, the head teacher asked Iris's class for ideas to make it brighter. Some children wanted to plant flowers. Iris had a different idea: a mural, a big painting on the wall.<br><br>Iris thought the planning would be quick. She was wrong! The class chose the theme 'Our sports day', and everyone drew sketches. Her friends loved drawing, but Iris found it slow and tiring. The planning took three weeks, much longer than the painting.<br><br>When the painting began, Iris wanted to paint the runners, because she is good at faces. But a quiet boy in her class was even better at tiny details. So Iris let him paint the faces, and she painted the sky.<br><br>Later, a local artist came to see the mural. He said the colours were bright, but the thing he liked most was a small dog asleep under a bench.<br><br>Now younger children stop to look at it every day. Iris's classmates want to paint the wall in the school hall next. But Iris has a bigger plan. She wants to ask the town if children can paint the walls of the town library."
        }
       }
      ]
     }
    ]
   }
  ]
 },
 "writing": {
  "mins": 35,
  "tasks": [
   {
    "id": "sw1",
    "task": 1,
    "dok": 2,
    "lo": [
     "5Wc.02",
     "5Wca.02",
     "5Wca.04",
     "5Wor.02",
     "5Ug.10"
    ],
    "title": "How to get ready for a school sleepover",
    "prompt": "Your class is having a sleepover at school next month. Write 1 to 2 paragraphs (7 to 8 sentences) explaining how students can get ready for it. Use modal verbs (must, mustn't, should, shouldn't, need to) and connectives. Check your spelling, grammar and punctuation.",
    "bullets": [
     "what students need to pack",
     "what good habits they should follow on the night",
     "what they mustn't do",
     "why it is important to get ready well",
     "use modal verbs (must, mustn't, should, shouldn't, need to)"
    ],
    "min": 60,
    "max": 90,
    "needTitle": false,
    "starters": [
     "Before the sleepover, you need to ...",
     "You should pack ...",
     "On the night, you should ...",
     "You mustn't ...",
     "This is important because ..."
    ],
    "models": [
     {
      "level": "Developing",
      "text": "For the sleepover, you need bring a sleeping bag, pyjamas and a toothbrush. You should packing a torch too. At night, you should listen to the teacher. You mustn't run in the corridors. You mustn't play with your torch after the lights go off it is time to sleep. Sleeping at school is great fun.",
      "notes": [
       "Task achievement and content 1/2: what to pack, a good habit and what you mustn't do are there, but it never says why getting ready well is important. It is a little short.",
       "Organisation and layout 1/2: one short paragraph in a sensible order, but only 'and' and 'too' link the ideas.",
       "Grammar range and accuracy 1/2: modal verbs are used, but two are wrong: 'need bring' should be 'need to bring', and 'should packing' should be 'should pack'.",
       "Vocabulary and spelling 1/2: correct sleepover words (sleeping bag, pyjamas, toothbrush), but the other words are basic and 'torch' and 'mustn't' are repeated.",
       "Fluency 1/2: mostly easy to read, but the fifth sentence runs two sentences together. Put a full stop after 'go off'."
      ],
      "marks": {
       "content": 1,
       "organisation": 1,
       "grammar": 1,
       "vocabulary": 1,
       "fluency": 1
      }
     },
     {
      "level": "Secure",
      "text": "Before the school sleepover, you need to pack a sleeping bag, your pyjamas and a toothbrush. You should bring a torch and a water bottle too. On the night, you should listen to the teachers and stay with your group. You mustn't walk around the school alone in the dark. You shouldn't stay awake too late. You will be tierd the next day. It is important to get ready well because then you can enjoy the night with your friends.",
      "notes": [
       "Task achievement and content 2/2: every bullet point is covered: what to pack, good habits, what you mustn't do and why it matters.",
       "Organisation and layout 1/2: the advice is in a sensible order, but there are few linking words. 'You shouldn't stay awake too late. You will be tired ...' needs 'because' to join the reason.",
       "Grammar range and accuracy 2/2: a good range of correct modal verbs: need to, should, mustn't, shouldn't.",
       "Vocabulary and spelling 1/2: good topic words (sleeping bag, pyjamas, torch), but 'tierd' should be 'tired'.",
       "Fluency 2/2: complete sentences with capital letters and full stops; easy to read."
      ],
      "marks": {
       "content": 2,
       "organisation": 1,
       "grammar": 2,
       "vocabulary": 1,
       "fluency": 2
      }
     },
     {
      "level": "Excellent",
      "text": "Getting ready for a school sleepover is exciting, but you need to plan carefully. First, you should pack a warm sleeping bag, comfortable pyjamas, a toothbrush and a small torch. You must also write your name on everything, because bags easily get mixed up. On the night, you should follow the teachers' instructions. However, you mustn't wander around the dark corridors alone. Finally, you shouldn't chat all night. If you prepare well, you will feel safe, sleep well and enjoy the best night of the term!",
      "notes": [
       "Task achievement and content 2/2: all bullet points are covered with useful detail (names on bags, why to sleep, feeling safe).",
       "Organisation and layout 2/2: a clear opening and ending, and the advice is in order with First, However and Finally.",
       "Grammar range and accuracy 2/2: accurate and varied modal verbs (need to, should, must, mustn't, shouldn't) and an 'If' sentence.",
       "Vocabulary and spelling 2/2: good topic words (comfortable, instructions, wander, corridors, prepare), all spelt correctly.",
       "Fluency 2/2: 7 smooth, complete sentences that are easy to read."
      ],
      "marks": {
       "content": 2,
       "organisation": 2,
       "grammar": 2,
       "vocabulary": 2,
       "fluency": 2
      }
     }
    ]
   },
   {
    "id": "sw2",
    "task": 2,
    "dok": 2,
    "lo": [
     "5Wc.02",
     "5Wc.03",
     "5Wca.02",
     "5Wca.04",
     "5Wor.02",
     "5Ug.11"
    ],
    "title": "The best family celebration I would plan",
    "prompt": "Write 1 to 2 paragraphs (7 to 8 sentences) about the best family celebration you would plan. It can be real or imaginary. Use descriptive adjectives, connectives and one or more comparatives or superlatives. Check your spelling, grammar and punctuation.",
    "bullets": [
     "what the celebration is and what it would look like",
     "what makes it special or interesting",
     "what you and your family would do",
     "why you chose it",
     "use adjectives and one or more comparatives or superlatives"
    ],
    "min": 60,
    "max": 90,
    "needTitle": false,
    "starters": [
     "The best celebration I would plan is ...",
     "It would look ...",
     "It would be special because ...",
     "First, we would ...",
     "I chose it because ..."
    ],
    "models": [
     {
      "level": "Developing",
      "text": "I would plan a party for my grandpa birthday. It would be in our house. There would be a big cake and lots of balloons. We would sing songs and eat noodles together. it would be the most big party in my family. I chose it because I love my grandpa. He is very nice.",
      "notes": [
       "Task achievement and content 1/2: it says what the party is, what they would do and why, but what makes it special is very thin (only that it is big). It is a little short.",
       "Organisation and layout 1/2: one short paragraph in a sensible order, but 'because' is the only linking word.",
       "Grammar range and accuracy 1/2: 'would' is used well, but 'the most big' should be 'the biggest', and 'my grandpa birthday' should be 'my grandpa's birthday'.",
       "Vocabulary and spelling 1/2: simple describing words only (big, nice), and 'grandpa' is repeated.",
       "Fluency 1/2: mostly easy to read, but 'it would be the most big party' needs a capital letter at the start: 'It'."
      ],
      "marks": {
       "content": 1,
       "organisation": 1,
       "grammar": 1,
       "vocabulary": 1,
       "fluency": 1
      }
     },
     {
      "level": "Secure",
      "text": "The best celebration I would plan is a Tet party at my grandparents' house in the countryside. The house would look very nice. There would be red lanterns and yellow flowers everywhere. It would be special because all my cousins would come, even the ones who live far away. We would cook a big feast and play games. At midnight, we would watch the fireworks. I chose it because Tet is the happiest time of the year for my family.",
      "notes": [
       "Task achievement and content 2/2: all four bullet points are covered with some detail.",
       "Organisation and layout 1/2: a clear order, but few linking words: only 'because' and 'and'. 'First' or 'Then' would guide the reader.",
       "Grammar range and accuracy 2/2: correct 'would' sentences, a relative clause ('the ones who live far away') and a correct superlative ('the happiest').",
       "Vocabulary and spelling 1/2: good topic words (lanterns, feast, fireworks), but some describing words are basic ('very nice', 'big'); try 'bright' or 'colourful'.",
       "Fluency 2/2: complete sentences with capital letters and full stops; they read smoothly."
      ],
      "marks": {
       "content": 2,
       "organisation": 1,
       "grammar": 2,
       "vocabulary": 1,
       "fluency": 2
      }
     },
     {
      "level": "Excellent",
      "text": "The best celebration I would plan is a surprise party for my parents' anniversary. It would be on a boat on the river at night. Hundreds of tiny golden lights would shine above us. First, we would share a delicious feast of grilled fish and sticky rice. Then my sister and I would show a funny video of our happiest moments. It would be more special than a birthday, because my parents never celebrate it. I chose this idea because they work hard and deserve the most wonderful evening!",
      "notes": [
       "Task achievement and content 2/2: every bullet point is covered with interesting detail (the boat, the lights, the video, the reason).",
       "Organisation and layout 2/2: ideas are in a clear order with First, Then and because, and the ending sums up the choice.",
       "Grammar range and accuracy 2/2: accurate 'would' sentences, a comparative ('more special than') and two superlatives ('happiest', 'the most wonderful').",
       "Vocabulary and spelling 2/2: rich adjectives (tiny, golden, delicious, sticky, funny, wonderful) and topic words (anniversary, feast), all spelt correctly.",
       "Fluency 2/2: 7 smooth, varied sentences that are easy and enjoyable to read."
      ],
      "marks": {
       "content": 2,
       "organisation": 2,
       "grammar": 2,
       "vocabulary": 2,
       "fluency": 2
      }
     }
    ]
   }
  ]
 }
};
})(window.T = window.T || {});
