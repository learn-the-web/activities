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
      'People not hiring the company',
      'People not finding the website when searching',
      'All of the above',
    ]
  },
  {
    question: 'What tools help us compress images?',
    correct: 3,
    choices: [
      'Photoshop’s “Save for web”',
      'Illustrator’s “Export for screens”',
      'ImageOptim',
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
    question: 'How does smushing help your website?',
    correct: 3,
    choices: [
      'Makes the website load faster',
      'Less & smaller files = faster websites',
      'Faster websites = happy people',
      'All of the above',
    ]
  },
  {
    question: 'How do we make retina images performant?',
    correct: 3,
    choices: [
      'Make their size only double what’s necessary',
      'Compress them with a low quality, like 20%',
      'Never allow images to be greater than 2500 pixels wide',
      'All of the above',
    ]
  },
  {
    question: 'Why do many fonts & styles slow down websites?',
    correct: 3,
    choices: [
      'Because each font requires another file to download',
      'Because each font style requires another file to download',
      'More files = slower website',
      'All of the above',
    ]
  },
  {
    question: 'Why should CSS `<link>` tags be at the top of the HTML?',
    correct: 3,
    choices: [
      'To trigger their download more quickly',
      'Because the browser has to wait for them to display the page',
      'Allows the browser to load CSS in the background while it looks for other things to download',
      'All of the above',
    ]
  },
  {
    question: 'How do social media buttons slow websites?',
    correct: 3,
    choices: [
      'Because they link to lots of external sites',
      'Linking to external websites causes more DNS lookups',
      'DNS lookups & loading from other sites can be slow',
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
