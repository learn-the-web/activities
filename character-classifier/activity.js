var questions = [
  {
    question: 'Character used to denote a closing HTML tag:',
    correct: 2,
    choices: [
      '<',
      '\\',
      '/',
      'All of the above'
    ]
  },
  {
    question: 'Semicolon:',
    correct: 0,
    choices: [
      ';',
      ':',
      '…'
    ]
  },
  {
    question: 'Character used to open a CSS block:',
    correct: 1,
    choices: [
      '(',
      '{',
      '<'
    ]
  },
  {
    question: 'Acceptable characters in web filenames:',
    correct: 1,
    choices: [
      'Only letters, numbers & dashes',
      'Only lowercase letters, numbers & dashes',
      'Anything but spaces'
    ]
  },
  {
    question: 'Used to surround URLs in CSS:',
    correct: 3,
    choices: [
      "'",
      '"',
      'Nothing',
      'Any of the above'
    ]
  },
  {
    question: 'Ends a line in CSS & Javascript:',
    correct: 1,
    choices: [
      'Colon',
      'Semicolon',
      'Double colon'
    ]
  },
  {
    question: 'Used as a separator in URLs & paths:',
    correct: 0,
    choices: [
      'Forward slash',
      'Back slash',
      'Pipe'
    ]
  },
  {
    question: 'Valid in URLs:',
    correct: 4,
    choices: [
      'Space',
      'Angle bracket',
      'Percent',
      'All of the above',
      'None of the above'
    ]
  },
  {
    question: 'Brace:',
    correct: 0,
    choices: [
      '{ }',
      '( )',
      '< >',
      '[ ]'
    ]
  },
  {
    question: 'Symbol representing a new line:',
    correct: 1,
    choices: [
      '\\t',
      '\\n',
      '\\s'
    ]
  },
  {
    question: 'Cannot be written in HTML without being escaped:',
    correct: 3,
    choices: [
      '&',
      '<',
      '>',
      'All of the above',
      'None of the above'
    ]
  },
  {
    question: 'Character used to denote an ID:',
    correct: 1,
    choices: [
      '.',
      '#',
      '*'
    ]
  },
  {
    question: 'Character used to denote a class:',
    correct: 0,
    choices: [
      '.',
      '#',
      '*'
    ]
  },
  {
    question: 'Character encoding used for multiple languages in HTML:',
    correct: 0,
    choices: [
      'UTF-8',
      'UTF-16',
      'ISO 8859-1'
    ]
  },
  {
    question: 'Standard used for date & time formats in HTML:',
    correct: 1,
    choices: [
      'ISO-646',
      'ISO-8601',
      'ISO-8859'
    ]
  }
];

MultipleChoice(ActivityRunner(), questions);
