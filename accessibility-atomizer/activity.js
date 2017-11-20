var questions = [
  {
    question: 'At least 15% of all our users require some accessibility assistance.',
    correct: 0,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'WAI-ARIA stands for:',
    correct: 1,
    choices: [
      'Web Accessibility Initiative, Accessibility Rights Internet Awareness',
      'Web Accessibility Initiative, Accessible Rich Internet Applications',
      'Why Acronyms Indeed, Another Real Idiotic Acronym',
    ]
  },
  {
    question: 'The `alt` attribute is helpful for users with what kind of impairments?',
    correct: 0,
    choices: [
      'Visual impairments',
      'Auditory impairments',
      'Mobility & dexterity impairments',
      'Cognitive impairments',
    ]
  },
  {
    question: 'Keyboard access is helpful for users with what kind of impairments?',
    correct: 2,
    choices: [
      'Visual impairments',
      'Auditory impairments',
      'Mobility & dexterity impairments',
      'Cognitive impairments',
    ]
  },
  {
    question: 'When using video, what is helpful for users with auditory impairments?',
    correct: 3,
    choices: [
      'Not auto-playing the video',
      'Captions & transcripts',
      'Volume controls',
      'All of the above',
    ]
  },
  {
    question: 'Why is it important to underline links when designing websites?',
    correct: 3,
    choices: [
      'To easily distinguish links from the surrounding text',
      'Because colour by itself isn’t a good enough indicator',
      'To help the text be more scannable',
      'All of the above',
    ]
  },
  {
    question: 'The ARIA role of `banner` is used to denote:',
    correct: 1,
    choices: [
      'The location of the hero banner graphic of the website',
      'The location of the site-oriented content like the logo, identity & navigation',
      'The location on the page where the primary navigation is located',
    ]
  },
  {
    question: 'The ARIA role of `contentinfo` is used to denote:',
    correct: 0,
    choices: [
      'The region that contains copyright statements, privacy policies, etc.',
      'The region that contains information about the source of the content',
      'The region that contains extra information that’s not necessary for understanding',
    ]
  },
  {
    question: 'Why are headings important considerations when designing websites?',
    correct: 3,
    choices: [
      'To help navigating around pages',
      'To help understand the flow of pages',
      'To help make pages more scannable',
      'All of the above',
    ]
  },
  {
    question: 'Why are em-based media queries helpful from an accessibility perspective?',
    correct: 1,
    choices: [
      'Many browsers only support em-based media queries',
      'They allow the website to adjust its layout when the font-size changes',
      'They allow the user to redefine when the media queries are activated',
    ]
  },
];

MultipleChoice(ActivityRunner(), questions);
