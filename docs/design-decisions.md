# Design decisions (Grade 4, from the playbook agreed with Jovan, 25 November 2026)

| Topic | Decision |
| --- | --- |
| Exam | Grade 4 ESL End of Semester 1, Cambridge Primary ESL Stage 5, SY 2026-27. |
| Units | Talking about people; Food and health; Places; Special occasions (the school's pacing guide, Semester 1). |
| Scope | Full, like Grade 5: 9 stops + the Summit. Speaking is NOT included. |
| Stops | 1 Word Vault, 2 Time Machine, 3 Grammar Toolkit, 4 Listening Lounge (pictures and notes), 5 Chat Café (conversations), 6 Notice Board (messages and dialogue), 7 Gap Garage, 8 Reading Lighthouse, 9 Writing Workshop. Every exam part is trained in a stop. |
| Listening | 15 questions as on the real paper: Part 1 pictures (5), Part 2 notes from a teacher's talk (5), Part 3 a conversation (5). Every recording plays two times on a test paper, like the exam. |
| Reading and Use of English | 34 questions: Part 1 choose the word (5), Part 2 short texts (7), Part 3 dialogue A to H (5), Part 4 a letter with a word box (7), Part 5 which person (5), Part 6 a longer text (5). |
| Writing | Task 1 explain and advise (with modal verbs), Task 2 describe a choice (with comparatives); 7 to 8 sentences (60 to 90 words) each. Marked with the school's real Grade 4 rubric: five categories, 0 to 2 marks each, 10 per task (Task achievement and content, Organisation and layout, Grammar range and accuracy, Vocabulary and spelling, Handwriting and fluency (shown on screen as "Fluency")). |
| Sign-in | Student / Teacher / Visitor; classes 4B01 to 4B09; progress codes; How to use guide; school label "Vinschool Times City T36 Primary School – Advanced Programme". |
| Look | The Grade 5 paper look with ink cartoon animation, black line-drawing pictures (Fluent Emoji high-contrast), Map and Stops buttons, listening exam mode. |
| Summit | Open for everyone. Full practice exam: Listening 15 + Reading and Use of English 34 = 49 marks; trophy at 35 (70%); "Practise again" names the stop for each Part. Writing paper on its own card (2 tasks, 35 minutes, self-marked). |
| Teacher-only labels | The objective code and DOK label under questions show for teachers and TAs only. |
| Saved data | Keys start with `g4-esl-trail-` so the Grade 3, 4 and 5 trails never share stars on one device. |
| Item security | Analyst and checker only open the real papers. The list of reserved situations from the papers is kept privately, outside this package. |
| Publishing | A private claude.ai link, this GitHub repository (website), and zip backups in the grade's Drive folder. |

## Lessons from Grade 5 built in from the start
Summit totals from the ESL papers; a Summit that does not repeat any stop's texts or writing prompts; no answer-length pattern (the right answer is the longest option in about a third of questions); real grammatical distractors only; listening distractors all heard in the talk; hints that teach a strategy; every correct typed answer accepted; honest DOK labels; definition-based Words step; writing models with marks per category; clearer recordings (exact letter names, equal loudness); separate saved-data keys; British spelling; no em dashes.

## Expert review (25 November 2026, version 2)

Asked by Jovan ("improve these two apps"). Four specialist reviewers (listening, grammar and Use of English, reading, writing) and a child play-through tester worked without seeing the papers; the checker then re-compared every change with the papers.

| Area | Change |
| --- | --- |
| Content (96 fixes) | Questions with two right answers fixed; word-box gaps made single-answer; more accepted forms for times, dates and prices; listening talks trimmed to exam lengths and answers no longer always after "but" (12 recordings remade); Summit reading texts shortened; writing models re-marked to match the rubric exactly. |
| Play-through content fixes | Gap numbers match question numbers in Mini tests and practice; answer positions re-mixed; clearer word pictures; different names for different people in the Summit and Stop 8. |
| Engine | Letters A to J on 8-option questions; question kept in view beside long texts; word box and typing box stay visible above the letter pad on phones; letter pad fits a phone; Lightning cannot be won by random tapping; one compact letter row per gap; writing desk wording per grade, must mark before moving on; "Fluency" descriptor mentions run-on and choppy sentences; flip cards show bold words; Summit clock always visible; then/than and similar mix-ups no longer called spelling slips; many small phone layout fixes. |
| Item security | Re-check after the review: 0 shared names; copied runs only on standard instructions; 3 reused situations or prompt wordings found and rewritten. The style guide now describes the writing prompts in general terms only. |

## Colour-coded look (26 November 2026)

Asked by Jovan ("colour themes for pictures and images"). A watercolour storybook look was tried first and turned down as not suitable for learning. Chosen in an interview, one question at a time, then approved from a preview:

| Choice | Decision |
| --- | --- |
| Direction | Colour-coded skills: white pages, one calm colour per exam skill, so children always know which skill they practise. |
| Skill colours | Words and grammar (Stops 1, 2, 3, 7) orange; Listening (4, 5) blue; Reading (6, 8) teal; Writing (9) purple; the Summit and home navy. Each colour reads at 5:1 or more with white text. A colour key sits under the map. |
| Map | Same trail, order and shape; each stop circle and its badge in the skill colour; gold ring when done. |
| Pictures | Flat colour Fluent Emoji (`img/emoji-c/`). |
| Zip | Same shape and moods, flat colour: soft blue, white face, coral cheeks. |
| Font | Andika (made for children learning to read; Vietnamese included), inside the page so it works offline. |
| Right and wrong | Always green with a tick and red with a cross, never a skill colour. The next step on a stop page is in the stop colour, not green. |
| Movement | Calm and quick: the ink wobble (99-cartoon.css) is removed; pages slide in once; nothing moves while children read; off when the device asks for less motion. |
| Tests | The Mini tests and the Summit keep the exam-paper look (Arial, black on white, line drawings), like the real paper. |
| Grades | Grade 3 and Grade 4 only; Grade 5 is unchanged. |
