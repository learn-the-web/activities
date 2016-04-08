var questions = [
  {
    question: 'Domain:',
    correct: 1,
    choices: [
      'The human-readable words representing someone’s property',
      'The human-readable words representing a location on the web',
      'The human-readable form of a single computer on the web'
    ]
  },
  {
    question: 'Web browser:',
    correct: 1,
    choices: [
      'The thing that does all the web stuff',
      'Just the interface used for accessing locations on the web',
      'Google'
    ]
  },
  {
    question: 'Rendering engine:',
    correct: 2,
    choices: [
      'The integrated system for rendering images on a web page',
      'The computer processing engine for activating three-dimensional graphics',
      'The underlying system that converts website code into something interactive'
    ]
  },
  {
    question: 'Viewport:',
    correct: 0,
    choices: [
      'The visible zone within a web browser',
      'The whole website, visible or not',
      'The whole screen, including the browser & other windows'
    ]
  },
  {
    question: 'Server:',
    correct: 1,
    choices: [
      'A computer connected to the internet that serves coffee',
      'A computer connected to the internet that serves web resources',
      'Any computer connected to the internet'
    ]
  },
  {
    question: 'Internet:',
    correct: 2,
    choices: [
      'Google',
      'A global network of information',
      'A global computer network'
    ]
  },
  {
    question: 'World Wide Web:',
    correct: 0,
    choices: [
      'An information exchange system built on top of the Internet',
      'An information restriction system build with the Internet',
      'Another name for the internet'
    ]
  },
  {
    question: 'Version Control:',
    correct: 1,
    choices: [
      'A way to save past files by naming them with version numbers',
      'A system that tracks changes in files over time',
      'A small controller tag attached to files that remember their version'
    ]
  },
  {
    question: 'Markup:',
    correct: 0,
    choices: [
      'A set of tags assigned to text to give it meaning or presentation',
      'Another name for any code',
      'Code that’s used to make things interactive'
    ]
  },
  {
    question: 'Semantics:',
    correct: 0,
    choices: [
      'Meanings and purposes',
      'Interactions and functionality',
      'Design and effects'
    ]
  },
];

MultipleChoice(ActivityRunner(), questions);
