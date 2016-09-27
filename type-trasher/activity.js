var questions = [
  {
    question: 'Which font-size is the largest?',
    correct: 8,
    choices: [
      '`.exa`',
      '`.giga`',
      '`.kilo`',
      '`.mega`',
      '`.micro``',
      '`.milli`',
      '`.peta`',
      '`.tera`',
      '`.yotta`',
      '`.zetta`',
    ]
  },
  {
    question: 'Which font-size is the smallest?',
    correct: 4,
    choices: [
      '`.exa`',
      '`.giga`',
      '`.kilo`',
      '`.mega`',
      '`.micro``',
      '`.milli`',
      '`.peta`',
      '`.tera`',
      '`.yotta`',
      '`.zetta`',
    ]
  },
  {
    question: 'Which font-size is larger than `.peta`?',
    correct: 0,
    choices: [
      '`.exa`',
      '`.kilo`',
      '`.mega`',
      '`.milli`',
      '`.tera`',
    ]
  },
  {
    question: 'Which font-size is smaller than `.mega`?',
    correct: 2,
    choices: [
      '`.exa`',
      '`.giga`',
      '`.milli`',
      '`.tera`',
      '`.zetta`',
    ]
  },
  {
    question: 'All elements have their margins removed except for this side:',
    correct: 2,
    choices: [
      'Top',
      'Right',
      'Bottom',
      'Left',
    ]
  },
  {
    question: 'The `.gutter` class adds:',
    correct: 5,
    choices: [
      'Padding to the top',
      'Padding to the right',
      'Padding to the bottom',
      'Padding to the left',
      'Padding to the top & bottom',
      'Padding to the left & right',
      'Padding to all four sides',
    ]
  },
  {
    question: 'The `.island` class adds:',
    correct: 6,
    choices: [
      'Padding to the top',
      'Padding to the right',
      'Padding to the bottom',
      'Padding to the left',
      'Padding to the top & bottom',
      'Padding to the left & right',
      'Padding to all four sides',
    ]
  },
  {
    question: 'Which class is wider?',
    correct: 1,
    choices: [
      '`.max-length`',
      '`.wrapper`',
    ]
  },
  {
    question: 'The ¼, ½, and double sizes are multiples of what measurement:',
    correct: 3,
    choices: [
      '`padding`',
      '`margin`',
      '`font-size`',
      '`line-height`',
    ]
  },
  {
    question: 'To make this `<h1>` switch styles as shown you’d need what classes?',
    extras: 'question-10',
    correct: 2,
    choices: [
      '`.normal`, `.yotta`',
      '`.bold`, `.not-italic`, `.yotta`',
      '`.not-bold`, `.italic`, `.yotta`',
      '`.not-bold`, `.italic`, `.peta`',
    ]
  },
];

MultipleChoice(ActivityRunner(), questions);
