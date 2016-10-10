var questions = [
  {
    question: 'Add a Modulifier class to remove the bullets.',
    incorrect: document.querySelector('[data-question="1"]').innerHTML,
    correct: document.querySelector('[data-answer="1"]').innerHTML,
  },
  {
    question: 'Add a Modulifier class to make the list horizontal.',
    incorrect: document.querySelector('[data-question="2"]').innerHTML,
    correct: document.querySelector('[data-answer="2"]').innerHTML,
  },
  {
    question: 'Add Modulifier classes to prevent this image from reflowing the content.',
    incorrect: document.querySelector('[data-question="3"]').innerHTML,
    correct: document.querySelector('[data-answer="3"]').innerHTML,
  },
  {
    question: 'This image is an icon with a label, make is so.',
    incorrect: document.querySelector('[data-question="4"]').innerHTML,
    correct: document.querySelector('[data-answer="4"]').innerHTML,
  },
  {
    question: 'Add a Modulifier class to hide the below `<div>`.',
    incorrect: document.querySelector('[data-question="5"]').innerHTML,
    correct: document.querySelector('[data-answer="5"]').innerHTML,
  },
  {
    question: 'Add a Modulifier class to shorten the text and add an ellipsis.',
    incorrect: document.querySelector('[data-question="6"]').innerHTML,
    correct: document.querySelector('[data-answer="6"]').innerHTML,
  },
  {
    question: 'Add Modulifier classes to display the caption like the below image.',
    extras: 'question-7-extras',
    incorrect: document.querySelector('[data-question="7"]').innerHTML,
    correct: document.querySelector('[data-answer="7"]').innerHTML,
  },
  {
    question: 'Add Modulifier classes to make two columns.',
    extras: 'question-8-extras',
    incorrect: document.querySelector('[data-question="8"]').innerHTML,
    correct: document.querySelector('[data-answer="8"]').innerHTML,
  },
  {
    question: 'Fix the indentation problems.',
    incorrect: document.querySelector('[data-question="9"]').innerHTML,
    correct: document.querySelector('[data-answer="9"]').innerHTML,
  },
  {
    question: 'Fix the indentation problems.',
    incorrect: document.querySelector('[data-question="10"]').innerHTML,
    correct: document.querySelector('[data-answer="10"]').innerHTML,
  },
];

CodeCompare(ActivityRunner(), questions);
