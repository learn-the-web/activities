var questions = [
  {
    question: 'Which tag is most semantically appropriate?',
    extras: 'question-1',
    correct: 0,
    choices: [
      '`<h1>`',
      '`<header>`',
      '`<heading>`',
    ],
  },
  {
    question: 'Which tag is most semantically appropriate?',
    extras: 'question-2',
    correct: 2,
    choices: [
      '`<p2>`',
      '`<para>`',
      '`<p>`',
    ],
  },
  {
    question: 'Which tag is most semantically appropriate?',
    extras: 'question-3',
    correct: 0,
    choices: [
      '`<h2>`',
      '`<h3>`',
      '`<h4>`',
    ],
  },
  {
    question: 'Which tag is most semantically appropriate?',
    extras: 'question-4',
    correct: 1,
    choices: [
      '`<a>`',
      '`<nav>`',
      '`<ul>`',
      '`<ol>`',
    ],
  },
  {
    question: 'Which tag is most semantically appropriate?',
    extras: 'question-5',
    correct: 1,
    choices: [
      '`<b>`',
      '`<i>`',
      '`<em>`',
    ],
  },
  {
    question: 'Which tag is most semantically appropriate?',
    extras: 'question-6',
    correct: 2,
    choices: [
      '`<dl>`',
      '`<dt>`',
      '`<dd>`',
    ],
  },
  {
    question: 'Which tag is most semantically appropriate?',
    extras: 'question-7',
    correct: 4,
    choices: [
      '`<article>`',
      '`<section>`',
      '`<aside>`',
      '`<p>`',
      '`<address>`',
    ],
  },
  {
    question: 'Which tag is most semantically appropriate?',
    extras: 'question-8',
    correct: 2,
    choices: [
      '`<cite>`',
      '`<q>`',
      '`<blockquote>`',
    ],
  },
  {
    question: 'Which tag is most semantically appropriate?',
    extras: 'question-9',
    correct: 3,
    choices: [
      '`<dfn>`',
      '`<abbr>`',
      '`<del>`',
      '`<ins>`',
    ],
  },
  {
    question: 'Which tag is most semantically appropriate?',
    extras: 'question-10',
    correct: 1,
    choices: [
      '`<ul>`',
      '`<ol>`',
      '`<dl>`',
      '`<li>`',
    ],
  },
];

MultipleChoice(ActivityRunner(), questions);
