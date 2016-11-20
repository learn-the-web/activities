var questions = [
  {
    question: 'How do you start a Jekyll Liquid template?',
    correct: 2,
    choices: [
      function () { return '==='; },
      function () { return '___<br>___'; },
      function () { return '---<br>---'; },
    ]
  },
  {
    question: 'What code represents a placeholder?',
    correct: 0,
    choices: [
      function () { return '{{content}}'; },
      function () { return '{%content%}'; },
      function () { return '[[content]]'; },
    ]
  },
  {
    question: 'Which code bit will wrap a page in a master page?',
    correct: 1,
    choices: [
      function () { return '---<br>master: default<br>---'; },
      function () { return '---<br>layout: default<br>---'; },
      function () { return '---<br>default: layout<br>---'; },
    ]
  },
  {
    question: 'What code will grab from another file and place it into this file?',
    correct: 2,
    choices: [
      function () { return '{% load other-file.html %}'; },
      function () { return '{% get other-file.html %}'; },
      function () { return '{% include other-file.html %}'; },
    ]
  },
  {
    question: 'What code would write out the `title` variable from the front matter?',
    extras: 'question-5-extras',
    correct: 2,
    choices: [
      function () { return '{{title}}'; },
      function () { return '{{this.title}}'; },
      function () { return '{{page.title}}'; },
    ]
  },
  {
    question: 'What code will write out the URL for the current page?',
    correct: 1,
    choices: [
      function () { return '{{url}}'; },
      function () { return '{{page.url}}'; },
      function () { return '{{page.the_url}}'; },
    ]
  },
  {
    question: 'Which path will be executed in the if-statement?',
    extras: 'question-7-extras',
    correct: 1,
    choices: [
      'True path',
      'False path',
    ]
  },
  {
    question: 'Which code block will execute multiple times?',
    correct: 1,
    choices: [
      function () { return '{% loop dino in dinos %}<br>  …<br>{% endloop %}'; },
      function () { return '{% for dino in dinos %}<br>  …<br>{% endfor %}'; },
      function () { return '{% forloop dino in dinos %}<br>  …<br>{% endforloop %}'; },
    ]
  },
  {
    question: 'Which code will access information in the following file?',
    extras: 'question-9-extras',
    correct: 1,
    choices: [
      function () { return '{{data.dinos}}'; },
      function () { return '{{site.data.dinos}}'; },
      function () { return '{{site.data.dinos.yml}}'; },
    ]
  },
  {
    question: 'Which code will multiply the number by 10?',
    extras: 'question-10-extras',
    correct: 0,
    choices: [
      function () { return '{{ page.total_dinos | times:10 }}'; },
      function () { return '{{ page.total_dinos | multiply:10 }}'; },
      function () { return '{{ page.total_dinos | x:10 }}'; },
    ]
  },
];

MultipleChoice(ActivityRunner(), questions);
