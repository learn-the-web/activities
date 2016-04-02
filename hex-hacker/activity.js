var questions = [
  {
    question: 'Black:',
    correct: 1,
    choices: [
      '#fff',
      '#000'
    ]
  },
  {
    question: 'White:',
    correct: 0,
    choices: [
      '#fff',
      '#000'
    ]
  },
  {
    question: 'Red:',
    correct: 0,
    choices: [
      '#f00',
      '#0f0',
      '#00f'
    ]
  },
  {
    question: 'Yellow:',
    correct: 0,
    choices: [
      '#ff0',
      '#0ff',
      '#f0f'
    ]
  },
  {
    question: 'Blue:',
    correct: 4,
    choices: [
      '#fc9c00',
      '#fc009c',
      '#9cfc00',
      '#9c00fc',
      '#009cfc',
      '#00fc9c'
    ]
  },
  {
    question: 'Which letters represent the green component of #4484c2?',
    correct: 1,
    choices: [
      '44',
      '84',
      'c2'
    ]
  },
  {
    question: 'Which grey is the darkest?',
    correct: 0,
    choices: [
      '#333333',
      '#999999',
      '#e2e2e2'
    ]
  },
  {
    question: 'Which colour is lighter than #e2e2e2?',
    correct: 0,
    choices: [
      '#f2f2f2',
      '#e0e0e0',
      '#dddddd'
    ]
  },
  {
    question: 'Which colour is darker than #4484c2?',
    correct: 2,
    choices: [
      '#66a6e4',
      '#5595d3',
      '#3373b1'
    ]
  },
  {
    question: 'What colour writing style works for semi-transparency?',
    correct: 7,
    choices: [
      'Keywords',
      'Hex',
      'RGB',
      'RGBA',
      'HSL',
      'HSLA',
      'RGB or HSL',
      'RGBA or HSLA'
    ]
  }
];

MultipleChoice(ActivityRunner(), questions);
