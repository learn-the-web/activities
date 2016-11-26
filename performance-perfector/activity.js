var questions = [
  {
    question: 'Why does performance matter to websites?',
    correct: 3,
    choices: [
      'We all hate slow websites',
      'Search engine’s penalize slow websites',
      'Slow websites turn people away',
      'All of the above',
    ]
  },
  {
    question: 'What are some ramifications from slow websites?',
    correct: 3,
    choices: [
      'People not buying products',
      'People not hiring you',
      'People not finding you when searching',
      'All of the above',
    ]
  },
  {
    question: 'What is smushing?',
    correct: 3,
    choices: [
      'Removing extra cruft from images',
      'Compressing images more without losing quality',
      'A simple way to make images download more quickly',
      'All of the above',
    ]
  },
  {
    question: 'What is minification?',
    correct: 3,
    choices: [
      'Removing extra cruft from code',
      'Compressing the code without losing information',
      'A simple way to make code download more quickly',
      'All of the above',
    ]
  },
  {
    question: 'What is concatenation?',
    correct: 3,
    choices: [
      'Combining multiple files into one',
      'Getting the browser to download a single file instead of many',
      'A simple way to make code download more quickly',
      'All of the above',
    ]
  },
  {
    question: 'How does smushing, minification & concatenation help your website?',
    correct: 3,
    choices: [
      'Makes the website load faster',
      'Less & smaller files = faster websites',
      'Faster websites = happy people',
      'All of the above',
    ]
  },
  {
    question: 'How can JPGs be more fully compressed?',
    correct: 3,
    choices: [
      'Blur unimportant background parts',
      'Use “Save for Web” properly',
      'Smush ’em',
      'All of the above',
    ]
  },
  {
    question: 'Why compress your website on the server?',
    correct: 3,
    choices: [
      'Compression means less total data to download',
      'Less data to download = faster websites',
      'Faster websites = happy people',
      'All of the above',
    ]
  },
  {
    question: 'How do caching headers help your website perform better?',
    correct: 3,
    choices: [
      'Allow the browser to save resources in a cache for later',
      'Help the browser reuse resources instead of downloading again',
      'Not downloading files = faster websites',
      'All of the above',
    ]
  },
  {
    question: 'What kind of external resources can slow your website?',
    correct: 3,
    choices: [
      'Ads',
      'Tracking software',
      '3rd-party scripts',
      'All of the above',
    ]
  },
];

MultipleChoice(ActivityRunner(), questions);
