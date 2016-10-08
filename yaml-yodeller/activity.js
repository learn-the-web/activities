var questions = [
  {
    question: 'Write a YAML object for information:',
    extras: 'question-1-extras',
    lang: 'yaml',
    incorrect: document.querySelector('[data-question="1"]').innerHTML,
    correct: document.querySelector('[data-answer="1"]').innerHTML,
  },
  {
    question: 'Write a YAML object for information:',
    extras: 'question-2-extras',
    lang: 'yaml',
    incorrect: document.querySelector('[data-question="2"]').innerHTML,
    correct: document.querySelector('[data-answer="2"]').innerHTML,
  },
  {
    question: 'Write a YAML array for the following items:',
    lang: 'yaml',
    incorrect: document.querySelector('[data-question="3"]').innerHTML,
    correct: document.querySelector('[data-answer="3"]').innerHTML,
  },
  {
    question: 'Write the YAML necessary to represent this information:',
    extras: 'question-4-extras',
    lang: 'yaml',
    incorrect: document.querySelector('[data-question="4"]').innerHTML,
    correct: document.querySelector('[data-answer="4"]').innerHTML,
  },
  {
    question: 'Write the YAML necessary to represent this information:',
    extras: 'question-5-extras',
    lang: 'yaml',
    incorrect: document.querySelector('[data-question="5"]').innerHTML,
    correct: document.querySelector('[data-answer="5"]').innerHTML,
  },
  {
    question: 'Fix the indentation problems:',
    lang: 'yaml',
    incorrect: document.querySelector('[data-question="6"]').innerHTML,
    correct: document.querySelector('[data-answer="6"]').innerHTML,
  },
  {
    question: 'Fix the indentation problems:',
    lang: 'yaml',
    incorrect: document.querySelector('[data-question="7"]').innerHTML,
    correct: document.querySelector('[data-answer="7"]').innerHTML,
  },
  {
    question: 'Fix the indentation problems:',
    lang: 'yaml',
    incorrect: document.querySelector('[data-question="8"]').innerHTML,
    correct: document.querySelector('[data-answer="8"]').innerHTML,
  },
  {
    question: 'Fix the indentation problems:',
    lang: 'yaml',
    incorrect: document.querySelector('[data-question="9"]').innerHTML,
    correct: document.querySelector('[data-answer="9"]').innerHTML,
  },
  {
    question: 'Fix the indentation problems:',
    lang: 'yaml',
    incorrect: document.querySelector('[data-question="10"]').innerHTML,
    correct: document.querySelector('[data-answer="10"]').innerHTML,
  },
];

CodeCompare(ActivityRunner(), questions);
