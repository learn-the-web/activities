var questions = [
  {
    question: 'Jekyll is a tool for generating websites with shared headers and footers.',
    correct: 0,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'Jekyll is started using a GUI application.',
    correct: 1,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'The `_site` folder is extremely critical and should never be deleted.',
    correct: 1,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'The `_layouts` folder is where the shared header/footer files are stored.',
    correct: 0,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'This snippet of code is how you tell Jekyll what layout a page should use:',
    extras: 'question-5-extras',
    correct: 1,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'The `{{content}}` placeholder is used to define the region where all of a page’s HTML will be inserted.',
    correct: 0,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'If a page defined a variable like this `title: "Stegosaurus"` it could be written out in the layout with this placeholder: `{{page.title}}`.',
    correct: 0,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: ' The `permalink: pretty` configuration option remove the `.html` extension from URLs making them more SEO friendly and easier to type.',
    correct: 0,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'The `baseurl` configuration option is used to serve the website from a folder on GitHub and from the root domain on localhost.',
    correct: 0,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'The default URL for accessing Jekyll, after its running, is `localhost:8000`.',
    correct: 1,
    choices: [
      'True',
      'False',
    ]
  },
];

MultipleChoice(ActivityRunner(), questions);
