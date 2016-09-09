var questions = [
  {
    question: '50% is the same as this fraction:',
    correct: 0,
    choices: [
      '1/2',
      '1/3',
      '1/3',
      '1/3',
    ]
  },
  {
    question: '33.3333% is the same as this fraction:',
    correct: 1,
    choices: [
      '1/2',
      '1/3',
      '1/4',
      '1/5',
    ]
  },
  {
    question: '66.6666% is the same as this fraction:',
    correct: 1,
    choices: [
      '1/3',
      '2/3',
      '3/3',
    ]
  },
  {
    question: '4/8 can be simplified to:',
    correct: 1,
    choices: [
      '1/4',
      '1/2',
      '1/3',
    ]
  },
  {
    question: '4/6 can be simplified to:',
    correct: 1,
    choices: [
      '1/3',
      '2/3',
      '3/3',
    ]
  },
  {
    question: '5/5 can be simplified to:',
    correct: 4,
    choices: [
      '1/5',
      '1/4',
      '1/3',
      '1/2',
      '1',
    ]
  },
  {
    question: 'If you’ve used 1/2 of the available space, how much is left?',
    correct: 2,
    choices: [
      '1/4',
      '1/3',
      '1/2',
    ]
  },
  {
    question: 'If you’ve used 2/3 of the available space, how much is left?',
    correct: 2,
    choices: [
      '3/3',
      '2/3',
      '1/3',
    ]
  },
  {
    question: 'If you’ve used 6/6 of the available space, how much is left?',
    correct: 0,
    choices: [
      '0',
      '1/6',
      '2/6',
    ]
  },
  {
    question: 'If you’ve used 6/8 of the available space, how much is left?',
    correct: 2,
    choices: [
      '2/8',
      '3/6',
      '1/4',
      '1/2',
    ]
  }
];

MultipleChoice(ActivityRunner(), questions);
