var questions = [
  {
    question: 'What’s wrong with this code?',
    extras: 'question-1',
    correct: 2,
    choices: [
      'There needs to be a <p1> tag before a <p2> tag',
      'The paragraph tag needs more content',
      'The <p2> tag doesn’t exist'
    ]
  },
  {
    question: 'What’s wrong with this code?',
    extras: 'question-2',
    correct: 1,
    choices: [
      'There can’t be a <strong> tag inside a <p> tag',
      'The <p> tag needs to close after the <strong> tag',
      'There’s a slash missing before the second strong tag'
    ]
  },
  {
    question: 'What’s wrong with this code?',
    extras: 'question-3',
    correct: 0,
    choices: [
      'The <dl> cannot have <li> tags directly inside it',
      'The <li> tags aren’t closed properly',
      'The <dl> tag needs to be inside a <ul> tag'
    ]
  },
  {
    question: 'What’s wrong with this code?',
    extras: 'question-4',
    correct: 2,
    choices: [
      'The <h1> tag should be inside the <head>',
      'The DOCTYPE shouldn’t have an exclamation at the start',
      'A <header> tag cannot go inside a <footer> tag'
    ]
  },
  {
    question: 'What’s wrong with this code?',
    extras: 'question-5',
    correct: 0,
    choices: [
      'The <h1> tag must be inside the <body>',
      'The <head> tag should be inside the <body>',
      'The <title> tag should be inside the <body>'
    ]
  },
  {
    question: 'What’s wrong with this code?',
    extras: 'question-6',
    correct: 2,
    choices: [
      'The semicolon is missing',
      '“red” isn’t a proper colour name',
      'Colour is spelled the Canadian way'
    ]
  },
  {
    question: 'What’s wrong with this code?',
    extras: 'question-7',
    correct: 0,
    choices: [
      'A colon is missing',
      'A semicolon is missing',
      'A curly brace is missing'
    ]
  },
  {
    question: 'What’s wrong with this code?',
    extras: 'question-8',
    correct: 1,
    choices: [
      'A colon is missing',
      'A semicolon is missing',
      'A curly brace is missing'
    ]
  },
  {
    question: 'What’s wrong with this code?',
    extras: 'question-9',
    correct: 0,
    choices: [
      'A colon is missing',
      'A semicolon is missing',
      'A curly brace is missing'
    ]
  },
  {
    question: 'What’s wrong with this code?',
    extras: 'question-10',
    correct: 2,
    choices: [
      'A colon is missing',
      'A semicolon is missing',
      'A curly brace is missing'
    ]
  }
];

MultipleChoice(ActivityRunner(), questions);
