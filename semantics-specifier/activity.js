var questions = [
  {
    question: 'What tag is used to create a hyperlink?',
    correct: 0,
    choices: [
      '<a>',
      '<link>',
      '<button>'
    ]
  },
  {
    question: 'What tag is used to make text look italic?',
    correct: 3,
    choices: [
      '<i>',
      '<em>',
      'All of the above',
      'None of the above'
    ]
  },
  {
    question: 'Which tag defines the most important piece of text?',
    correct: 1,
    choices: [
      'The <title> tag',
      'The <h1> tag',
      'The <strong> tag'
    ]
  },
  {
    question: 'The purpose of the `<br>` tag is:',
    correct: 1,
    choices: [
      'To create space between two pieces of text',
      'To add a content-dictated line-break in the text',
      'To add a visual line-break to the text',
      'All of the above'
    ]
  },
  {
    question: 'An `<ol>` tag does the following:',
    correct: 0,
    choices: [
      'Defines a list where the elements have a specific order',
      'Defines a list with numbers as bullets',
      'Defines a list only for navigation'
    ]
  },
  {
    question: 'When should the `<figure>` tag be used?',
    correct: 1,
    choices: [
      'Every time an image is inserted into the page',
      'When the image needs a visible caption',
      'It’s never necessary to use the <figure>'
    ]
  },
  {
    question: 'What’s the difference between a `<section>` and an `<article>`?',
    correct: 0,
    choices: [
      'An article is self-contained, where a section requires context',
      'There is no difference, they’re exactly the same',
      'A section must always be inside an article',
      'All of the above'
    ]
  },
  {
    question: 'What’s the semantic purpose of a `<div>`?',
    correct: 3,
    choices: [
      'The <div>’s meaning is inherited from its children',
      'To divide content into logical groups, if no other tag is better suited',
      'The <div> has no semantic purpose',
      'All of the above'
    ]
  },
  {
    question: 'When should the `<button>` tag be used?',
    correct: 2,
    choices: [
      'When you want to link to another page',
      'When you want something to look like a clickable button',
      'For when there’s on-page interactions'
    ]
  },
  {
    question: 'The `<body>` tag defines:',
    correct: 2,
    choices: [
      'The main content of the website',
      'Everything that isn’t the header or footer',
      'All the content of the HTML document',
      'All of the above'
    ]
  }
];

MultipleChoice(ActivityRunner(), questions);
