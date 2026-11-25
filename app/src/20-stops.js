/* 20-stops.js - the nine stops of the Grade 4 ESL trail: what the map and the hubs know about each one.

   T.stops[i] = { n, title, world, place, badge, unit, los, status, quick, dataWorld, badgeArt, sceneArt }
     n         the stop number, 1 to 9 (T.stops[n - 1]); a Number
     title     the maths topic (the same as the pack's title; the nine topics of docs/01-brief.md)
     world     the name of the stop's world (shown on the map, the hub, the big button)
     place     the world as a sentence says it: 'the Number Factory' ("Visit ...", "Try Stop N now: ...",
               "You finished every step of ...")
     badge     the badge that all five steps win
     unit      the unit of the course, for teachers (as in Maths v2)
     los       the learning objective codes of the stop (Cambridge Primary Mathematics Stage 6)
     status    'open' (it can be opened; a stop whose pack has not arrived yet shows a "coming soon" hub) or 'soon'
     quick     true for a quick-practice stop: only its Practise games are ready. Its hub says so ("Quick practice")
     dataWorld the value of data-world on #app inside the stop ('1' to '9'): it switches the world tokens
     badgeArt  the id of the round map picture, 'badge-N' (src/art/02-art-maths.js)
     sceneArt  the id of the world scene for the hub header (until it is drawn, the hub shows the badge on
               the world's own sky and hills)

   Also here: T.OBJECTIVES (code -> skill), T.TWM (the 8 TWM characteristics), T.DOK (the 3 DOK levels) and
   T.DOK_MIX (the DOK of the 10 Mini Practice test questions, in order).

   Session 1: all nine stops are open and every pack holds only its title and blurb, so every step
   says "Coming soon". The steps arrive stop by stop (docs/03-build-plan.md). */
(function (T) {
  'use strict';

  // the Cambridge Primary Mathematics Stage 5 objectives of the test (codes and official 0096 wording, as in the
  // school's "Maths Grade 5 Stage 6 Detailed test specifications", EOS1 SY 26-27): shown with every Practise question
  // the Cambridge Primary ESL Stage 5 objectives of the EOS1 test (codes and wording of the school's public test
  // specification, Grade 4, AY 2026-2027): shown with every Practise question and on the test papers
  T.OBJECTIVES = {
    "5Ld.01": "Understand, with little or no support, a range of instructions.",
    "5Ld.02": "Understand a range of questions which ask for information.",
    "5Ld.03": "Deduce meaning from context in short talk.",
    "5Ld.04": "Understand specific information and detail of short talk.",
    "5Lm.01": "Understand, with little or no support, most of the main points of short talk.",
    "5Ug.03": "Use an increasing range of present simple forms to describe routines, habits and states.",
    "5Ug.04": "Use an increasing range of past simple forms to describe routines, habits and states.",
    "5Ug.05": "Use present continuous forms with present and future meaning.",
    "5Ug.10": "Use modal forms (e.g. mustn\u2019t [prohibition], need [necessity], would, could [polite requests]).",
    "5Ug.11": "Use a range of adjectives, including common participle adjectives (e.g. bored/boring) and comparative and superlative adjectives in the correct order in front of nouns.",
    "5Us.01": "Use a range of quantifiers (e.g. both, all, less, fewer, not as many, not as much).",
    "5Us.02": "Use an increasing range of indefinite pronouns (e.g. someone, somebody, everybody, no-one).",
    "5Us.04": "Use an increasing range of defining relative clauses to give personal information and details.",
    "5Uv.01": "Begin to use common dependent prepositions following adjectives (e.g. good at).",
    "5Uv.05": "Use comparative and superlative forms with a range of adverbs.",
    "5Rd.01": "Understand most specific information and detail in short texts.",
    "5Rd.03": "Deduce meaning from context in short texts.",
    "5Rm.01": "Understand, with little or no support, most of the main points of short texts.",
    "5Rm.02": "Read, with little or no support, a range of short, simple fiction and non-fiction texts with confidence and enjoyment.",
    "5Wc.02": "Write, with little or no support, a short sequence of simple sentences which describe people, places and objects, and routine past and present actions and events.",
    "5Wc.03": "Express, with little or no support, opinions and feelings.",
    "5Wca.01": "Use legible handwriting in written work with increasing speed and fluency.",
    "5Wca.02": "Spell high-frequency words accurately on an increasing range of familiar topics when writing independently.",
    "5Wca.03": "Plan, write, edit and proofread short texts, with support.",
    "5Wca.04": "Use simple grammatical structures and sentence patterns correctly, allowing for occasional mistakes.",
    "5Wor.02": "Link, with little or no support, a short sequence of sentences using an increasing range of connectives to create a short text organised into paragraphs.",
    "5Wor.03": "Use, with little or no support, appropriate layout for a limited range of written genres."
  };

  // ESL has no TWM characteristics (they are a maths idea): the labels show the code, the skill and the DOK only
  T.TWM = {};

  // Depth of Knowledge (Webb), as in the public test specification. Grade 4 ESL EOS1: at least 40% DOK 1 and at least
  // 20% DOK 2 in Listening, Reading and Use of English; DOK 3 is not used. A Mini test is 5 DOK 1, then 5 DOK 2.
  T.DOK = {
    1: { name: "Recall", what: "Find or recognise what the text or the speaker says" },
    2: { name: "Skill and concept", what: "Understand a paraphrase, infer, compare, decide what someone means or thinks" },
    3: { name: "Strategic thinking", what: "Reason with evidence across a text" }
  };
  T.DOK_MIX = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2];

  T.stops = [
    { n: 1, title: 'Topic words and word partners', world: 'Word Vault', place: 'the Word Vault', badge: 'Word Wizard', unit: 'Units 1 to 4', los: ['5Ug.11', '5Uv.01', '5Rd.03', '5Rm.02'], status: 'open', dataWorld: '1', badgeArt: 'badge-1', sceneArt: 'world-word-vault' },
    { n: 2, title: 'Verb forms: every day, yesterday and now', world: 'Time Machine', place: 'the Time Machine', badge: 'Time Traveller', unit: 'Use of English', los: ['5Ug.03', '5Ug.04', '5Ug.05'], status: 'open', dataWorld: '2', badgeArt: 'badge-2', sceneArt: 'world-time-machine' },
    { n: 3, title: 'Modals, quantifiers, someone and who / which / where', world: 'Grammar Toolkit', place: 'the Grammar Toolkit', badge: 'Grammar Builder', unit: 'Use of English', los: ['5Ug.10', '5Us.01', '5Us.02', '5Us.04', '5Uv.05'], status: 'open', dataWorld: '3', badgeArt: 'badge-3', sceneArt: 'world-grammar-toolkit' },
    { n: 4, title: 'Listening: pictures and notes', world: 'Listening Lounge', place: 'the Listening Lounge', badge: 'Sharp Listener', unit: 'Listening Parts 1 and 2', los: ['5Ld.04', '5Ld.01', '5Ld.02'], status: 'open', dataWorld: '4', badgeArt: 'badge-4', sceneArt: 'world-listening-lounge' },
    { n: 5, title: 'Listening: conversations', world: 'Chat Caf\u00e9', place: 'the Chat Caf\u00e9', badge: 'Chat Champion', unit: 'Listening Part 3', los: ['5Lm.01', '5Ld.03', '5Ld.04'], status: 'open', dataWorld: '5', badgeArt: 'badge-5', sceneArt: 'world-chat-cafe' },
    { n: 6, title: 'Notes, messages and conversations', world: 'Notice Board', place: 'the Notice Board', badge: 'Message Master', unit: 'Reading Parts 2 and 3', los: ['5Rd.01', '5Rd.03', '5Rm.01'], status: 'open', dataWorld: '6', badgeArt: 'badge-6', sceneArt: 'world-notice-board' },
    { n: 7, title: 'Grammar in sentences and letters', world: 'Gap Garage', place: 'the Gap Garage', badge: 'Gap Fixer', unit: 'Reading Parts 1 and 4', los: ['5Ug.04', '5Ug.05', '5Ug.10', '5Us.01', '5Us.02', '5Us.04', '5Uv.01'], status: 'open', dataWorld: '7', badgeArt: 'badge-7', sceneArt: 'world-gap-garage' },
    { n: 8, title: 'Who says it? and longer texts', world: 'Reading Lighthouse', place: 'the Reading Lighthouse', badge: 'Reading Ranger', unit: 'Reading Parts 5 and 6', los: ['5Rm.01', '5Rd.01', '5Rd.03', '5Rm.02'], status: 'open', dataWorld: '8', badgeArt: 'badge-8', sceneArt: 'world-reading-lighthouse' },
    { n: 9, title: 'Explaining, advising and describing', world: 'Writing Workshop', place: 'the Writing Workshop', badge: 'Star Writer', unit: 'Writing Tasks 1 and 2', los: ['5Wc.02', '5Wc.03', '5Wca.03', '5Wca.04', '5Wor.02'], status: 'open', dataWorld: '9', badgeArt: 'badge-9', sceneArt: 'world-writing-workshop' }
  ];
})(window.T = window.T || {});

