var questions = [
  {
    question: 'What’s the best way to do accessibility testing?',
    correct: 1,
    choices: [
      'Using the Chrome Accessibility Developer Tools',
      'User testing with real people',
      'Following checklists of things to consider',
    ]
  },
  {
    question: 'Why is it important to test with increased & decreased font sizes?',
    correct: 2,
    choices: [
      'Some people need different font-sizes when reading the text',
      'Some people prefer different font-sizes when reading the text',
      'All of the above',
    ]
  },
  {
    question: 'What problem might be found when testing with a screen magnifier?',
    correct: 0,
    choices: [
      'Hover elements that cover important text',
      'Confusing content order',
      'Missing alt attributes',
    ]
  },
  {
    question: 'What key is primarily used to navigate with the keyboard?',
    correct: 2,
    choices: [
      '`Arrow`',
      '`Space`',
      '`Tab`',
    ]
  },
  {
    question: 'Why may a person be unable to use a mouse for navigation?',
    correct: 3,
    choices: [
      'They have a broken wrist',
      'They have carpal tunnel syndrome',
      'They have poor eyesight',
      'All of the above',
    ]
  },
  {
    question: 'Disabling CSS helps us diagnose this problem:',
    correct: 2,
    choices: [
      'Missing ARIA landmark roles',
      'Confusing alt attributes',
      'Confusing content order',
    ]
  },
  {
    question: 'Why are `alt` attributes on images an important consideration for accessibility?',
    correct: 0,
    choices: [
      'They can be read out by screen readers',
      'When the image doesn’t download there’s backup text',
      'They aren’t really important for accessibility',
    ]
  },
  {
    question: 'The Sim Daltonism application simulates what kind of impairment?',
    correct: 1,
    choices: [
      'Macular degeneration',
      'Colour blindness',
      'Poor eyesight',
    ]
  },
  {
    question: 'VoiceOver is a tool that does what for users?',
    correct: 1,
    choices: [
      'Display captions on the screen',
      'Reads the text content audibly',
      'Describes the contents of videos',
    ]
  },
  {
    question: 'Why are the ARIA landmark roles helpful when using VoiceOver?',
    correct: 2,
    choices: [
      'Landmark roles group headings together',
      'Landmark roles hide unused images from VoiceOver',
      'Landmark roles provide navigational queues',
      'Landmark roles are not shown in VoiceOver',
    ]
  },
];

MultipleChoice(ActivityRunner(), questions);
