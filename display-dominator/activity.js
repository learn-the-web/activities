var questions = [
  {
    question: 'This display value will cause an element to move to its own line:',
    correct: 3,
    choices: [
      'display: none',
      'display: inline',
      'display: inline-block',
      'display: block'
    ]
  },
  {
    question: 'This display value will allow other elements on the same line:',
    correct: 3,
    choices: [
      'display: inline',
      'display: inline-block',
      'display: block',
      'display: inline or inline-block',
      'display: inline-block or block'
    ]
  },
  {
    question: 'All elements default to:',
    correct: 1,
    choices: [
      'display: none',
      'display: inline',
      'display: block'
    ]
  },
  {
    question: 'Some elements, like <p>, <h1> & <div>, take up their own line because:',
    correct: 2,
    choices: [
      'We placing them on their own line in the HTML',
      'They have a line break build into them',
      'The browser adds `display: block` by default'
    ]
  },
  {
    question: 'To force a <strong> to stretch across the width of its parent you’d add:',
    correct: 2,
    choices: [
      'display: inline',
      'display: inline-block',
      'display: block'
    ]
  },
  {
    question: 'Padding won’t work on an <a> tag unless you add:',
    correct: 4,
    choices: [
      'display: inline',
      'display: inline-block',
      'display: block',
      'display: inline or inline-block',
      'display: inline-block or block'
    ]
  },
  {
    question: 'Adding a width to an <img> tag works by default because:',
    correct: 0,
    choices: [
      'The browser adds `display: inline-block` to images by default',
      'The browser adds `display: block` to images by default',
      'Image tags are special'
    ]
  },
  {
    question: 'The only difference between a <span> and a <div> is that a <div> has `display: block` added by the browser.',
    correct: 0,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'An <a> tag can surround many other tags if its display property set to:',
    correct: 4,
    choices: [
      'inline',
      'inline-block',
      'block',
      'inline or inline-block',
      'inline-block or block'
    ]
  },
  {
    question: 'These elements can be centred if their parent has `text-align: center`:',
    correct: 3,
    choices: [
      'inline',
      'inline-block',
      'block',
      'inline or inline-block',
      'inline-block or block'
    ]
  },
  {
    question: 'These elements can be centred with automatic margins:',
    correct: 2,
    choices: [
      'inline',
      'inline-block',
      'block'
    ]
  }
];

MultipleChoice(ActivityRunner(), questions);
