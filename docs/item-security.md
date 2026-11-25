# Item security

No question, text, talk, person's name, situation or writing prompt in the trail comes from the real Grade 4 EOS1 papers. This is the most important rule of the project.

## The process

1. **Analyst.** Reads the real papers and the test specification and writes `exam-style-guide-esl.md`: HOW each part asks questions (task types, counts, lengths, kinds of wrong answers, DOK mix), never WHAT it asks.
2. **Writers.** Write all content from the four writer documents only (`exam-style-guide-esl.md`, `content-format.md`, `stops-brief.md`, `learning-objectives.md`). They never open the real papers. `stops-brief.md` lists situations they must not use, and the situations kept for the Summit.
3. **Checker.** Compares every English string in `content/*.json` with the real papers using `scripts/overlap_check.py`: runs of 6 or more identical words, shared person names, near-copy sentences. Then reads the papers and the content for reused situations or writing prompts, and checks that the Summit does not repeat a situation from any stop. Fixes everything in the content JSON.

## Running the overlap check

Keep the paper texts in a private local folder that is NEVER part of this package, the app or any upload (for Grade 4 it sits outside the project folder, beside it):

```
private-papers/g4/
  overlap_check.py   (copy of scripts/overlap_check.py)
  reading.txt  listening.txt  writing.txt  answerkey.txt   (text of the real papers)
  listening-transcript.txt   (the real recordings, written out)
  names.txt          (people's names in the real papers, one per line)
```

Run it from the project folder:

```bash
python3 -I ../private-papers/g4/overlap_check.py content/stop{1,2,3,4,5,6,7,8,9}.json content/summit.json
```

The check reads every file slowly (a few minutes). Expected result: no NAME flags, and RUN and NEAR flags only on standard exam instructions ("For each question, choose the correct answer.", "Which option correctly completes the message?", "Check your spelling, grammar and punctuation.", "Why has ... written to ...?"). Those are format wording and are accepted.

Then run `python3 scripts/quality_check.py`: it prints 6-word runs shared by the Summit and the stops. Most are stock hint wording; read them to look for a shared SITUATION, not shared words.

## Result of the check on 25 November 2026

| Check | Found | Action |
| --- | --- | --- |
| Runs of 6+ identical words | 13 different wordings. 5 were task wording in writing prompts (Stop 9 and the Summit): the list of modal verbs, the comparative/superlative line, two prompt phrases. The rest were standard instructions (see below). | the 5 reworded (same meaning, different order or words) |
| Shared person names | 0 | none |
| Near-copy sentences | 7 everyday sentences in Stops 6, 7 and 8 and the Summit (an invitation line in two letters and two dialogues, a refusal in a dialogue bank, a Lightning prompt, two worked answers and one option in Stop 8, one Summit hint) | all reworded |
| Standard exam instructions | 9 wordings (part instructions, "Which option correctly completes the ...?", "What does the notice say?", "Why has ... written to ...?", "Write 1 to 2 paragraphs (7 to 8 sentences) ...", "Check your spelling, grammar and punctuation.") | kept (format wording) |
| Reused situations or writing prompts | 7 items in the stops (Stop 1: 1 letter; Stop 4: 1 notes-completion talk and 2 short dialogues; Stop 5: 1 dialogue; Stop 8: 2 reading texts) and 2 Summit texts (a letter and the long article) shared a setting and key details with a real item. No writing prompt was reused. | all rewritten with a new setting and new details, same format, keys and explanations checked; recordings of the changed talks to be remade |
| Summit vs stops | 10 Summit items repeated a situation already used in a stop (3 Listening Part 1 dialogues, 6 Reading Part 2 texts, 1 detail in the Part 5 magazine page) | rewritten in the Summit; the 3 changed dialogues need new recordings |

After the changes: `validate.py` reports NO PROBLEMS for every stop, `quality_check.py` ends QUALITY OK, and the overlap check shows only standard exam instructions.

## Re-check after the expert review (25 November 2026)

Four expert reviewers (grammar, listening, reading, writing) edited the content without seeing the papers. The checker then looked again at every item they changed.

| Check | Found | Action |
| --- | --- | --- |
| Runs of 6+ identical words | 1 new: a Stop 9 Task 1 prompt (t1b) had been reworded to follow the real prompt's wording | prompt reworded ("explaining how we can all keep our town clean and beautiful") |
| Shared person names | 0 | none |
| Near-copy sentences | none new; only standard exam instructions and question frames | kept (format wording) |
| Reused situations or writing prompts | 2. A Summit Reading Part 2 notice (r2-6), whose new options made it match a real notice item in setting, rule and option set; a Stop 6 conversation line (s6-d3, gap 14) that now set up a parent picking a friend up, a detail of a real item | r2-6 rewritten with a new setting (a school music room) and different wrong options, whys, hint and worked answer; s6-d3 gap 14 exchange rewritten (an early start solved by a wake-up phone call), worked answer updated |
| Writing prompts | no prompt repeats a real task topic; t1b fixed as above | none further |
| Summit vs stops (changed parts) | no Summit situation now repeated in a stop | none |
| Audio | no listening script changed by this check | no new recordings needed from this check |

After the changes: `validate.py` reports NO PROBLEMS for every stop, `quality_check.py` ends QUALITY OK, and the overlap check shows 0 names and only standard exam instructions.

## When you add content

Any new content goes through the same three roles. A writer never sees the papers. Run the overlap check and the quality check before publishing.
