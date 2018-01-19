var questions = [
  {
    question: 'A web browser is a combination of these two things:',
    correct: 2,
    choices: [
      'Operating system & application interface',
      'HTML engine & CSS engine',
      'Rendering engine & application interface',
    ]
  },
  {
    question: 'Safari uses this rendering engine:',
    correct: 3,
    choices: [
      'Blink',
      'Edge',
      'Gecko',
      'WebKit',
    ]
  },
  {
    question: 'Which desktop browser(s) use the Blink rendering engine?',
    correct: 0,
    choices: [
      'Chrome & Opera',
      'Edge',
      'Firefox',
      'Safari',
    ]
  },
  {
    question: 'Gecko is the rendering engine that powers this browser:',
    correct: 2,
    choices: [
      'Chrome',
      'Edge',
      'Firefox',
      'Opera',
      'Safari',
    ]
  },
  {
    question: 'On iOS what rendering engine do all browsers use?',
    correct: 3,
    choices: [
      'Blink',
      'Edge',
      'Gecko',
      'WebKit',
    ]
  },
  {
    question: 'How does a proxy browser render websites differently?',
    correct: 1,
    choices: [
      'It only renders small screen versions of websites',
      'The website is rendered on a server & an image is sent to the browser',
      'It renders everything except JavaScript',
    ]
  },
  {
    question: 'Which browser in this list is a proxy browser?',
    correct: 3,
    choices: [
      'Chrome',
      'Edge',
      'Firefox',
      'Opera Mini',
      'Safari',
    ]
  },
  {
    question: 'Which browser is not an evergreen browser (not a constantly updated browser)?',
    correct: 4,
    choices: [
      'Chrome',
      'Edge',
      'Firefox',
      'Opera',
      'Safari',
    ]
  },
  {
    question: 'Which website is a not good resource for determining if a browser supports a feature?',
    correct: 1,
    choices: [
      'Can I Use…',
      'W3 Schools',
      'Mozilla Development Network',
      'Individual browser platform status pages',
    ]
  },
  {
    question: 'What CSS code can we use to detect a browser’s features?',
    correct: 4,
    choices: [
      '`@font-face`',
      '`@import`',
      '`@keyframes`',
      '`@media`',
      '`@supports`',
    ]
  },
];

MultipleChoice(ActivityRunner(), questions);
