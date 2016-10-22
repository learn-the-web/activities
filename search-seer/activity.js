var questions = [
  {
    question: 'Which of these things matter to search engine rankings?',
    correct: 4,
    choices: [
      'The speed your website loads',
      'The TLD, like “.ca”',
      'Whether your site is responsive or not',
      'If your site is secured with HTTPS',
      'All of the above',
    ]
  },
  {
    question: 'Why is the `<title>` tag so important?',
    correct: 1,
    choices: [
      'Because it’s the first line of code search engines see',
      'Because it’s used as the link on results pages',
      'Because it contains only text, not HTML'
    ]
  },
  {
    question: 'Which meta tag is useful for SEO?',
    correct: 0,
    choices: [
      'description',
      'keywords',
      'content'
    ]
  },
  {
    question: 'Where does the description under links on search results pages come from?',
    correct: 2,
    choices: [
      'The `<title>`',
      'The `<meta description>`',
      'The `<meta description>` or the first `<p>`',
      'Anywhere on the page',
    ]
  },
  {
    question: 'Links from other websites matter because:',
    correct: 3,
    choices: [
      'Links to your site are good',
      'The keywords people choose in the `<a>` tag add to your keywords',
      'It increases your websites perceived popularity',
      'All of the above',
    ]
  },
  {
    question: 'Which URL is the most SEO optimized?',
    correct: 2,
    choices: [
      '`http://robots.ca/robot-parts/`',
      '`http://robots.com/page1.html`',
      '`https://robots.ca/robot-parts/`',
      '`https://robots.ca/page1.html`'
    ]
  },
  {
    question: 'If you search “how far away is the moon?”, how do search engines know that information?',
    correct: 1,
    choices: [
      'Because search engines are learning, intelligent beings',
      'Because search engines understand the semantics of your website',
      'Because someone programmed that information into the search results page',
      'Because search engines are just people who respond to your questions',
    ]
  },
  {
    question: 'If you search for a recipe, how can search engines know what the ingredients are?',
    correct: 1,
    choices: [
      'Because search engines are learning, intelligent beings',
      'Because search engines understand the extra metadata added to your website',
      'Because someone programmed that information into the search results page',
      'Because search engines are just people who respond to your questions'
    ]
  },
  {
    question: '`humans.txt` has the following purpose:',
    correct: 2,
    choices: [
      'To tell humans how they can interact with the website',
      'To block humans from accessing certain parts of the website',
      'To include credits & technology choices of interest to humans',
      'To show that the website is targeted to humans and no robots',
    ]
  },
  {
    question: 'What is a robot (in the context of SEO)?',
    correct: 0,
    choices: [
      'The computer program that searches & categorizes websites',
      'A person who sits at a computer and searches & categorizes websites',
      'A piece of nanotechnology that follows the Internet’s wires finding computers and websites to search & categorize'
    ]
  }
];

MultipleChoice(ActivityRunner(), questions);
