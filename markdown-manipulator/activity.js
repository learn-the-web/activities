var questions = [
  {
    question: 'Make this text a level 1 heading.',
    lang: 'markdown',
    incorrect: document.querySelector('[data-question="1"]').innerHTML,
    correct: document.querySelector('[data-answer="1"]').innerHTML,
  },
  {
    question: 'Make this text a level 4 heading.',
    lang: 'markdown',
    incorrect: document.querySelector('[data-question="2"]').innerHTML,
    correct: document.querySelector('[data-answer="2"]').innerHTML,
  },
  {
    question: 'Make the word “Spinosaurus” bold.',
    lang: 'markdown',
    incorrect: document.querySelector('[data-question="3"]').innerHTML,
    correct: document.querySelector('[data-answer="3"]').innerHTML,
  },
  {
    question: 'Make the word “Maiasaura” italic.',
    lang: 'markdown',
    incorrect: document.querySelector('[data-question="4"]').innerHTML,
    correct: document.querySelector('[data-answer="4"]').innerHTML,
  },
  {
    question: 'Convert this text into an unordered list.',
    lang: 'markdown',
    incorrect: document.querySelector('[data-question="5"]').innerHTML,
    correct: document.querySelector('[data-answer="5"]').innerHTML,
  },
  {
    question: 'Convert this text into an ordered list.',
    lang: 'markdown',
    incorrect: document.querySelector('[data-question="6"]').innerHTML,
    correct: document.querySelector('[data-answer="6"]').innerHTML,
  },
  {
    question: 'Demonstrate that the phrase “<h1>Dimetrodon</h1>” is code.',
    lang: 'markdown',
    incorrect: document.querySelector('[data-question="7"]').innerHTML,
    correct: document.querySelector('[data-answer="7"]').innerHTML,
  },
  {
    question: 'Link this word to the URL.',
    lang: 'markdown',
    incorrect: document.querySelector('[data-question="8"]').innerHTML,
    correct: document.querySelector('[data-answer="8"]').innerHTML,
  },
  {
    question: 'Make this image display in a Markdown document.',
    lang: 'markdown',
    incorrect: document.querySelector('[data-question="9"]').innerHTML,
    correct: document.querySelector('[data-answer="9"]').innerHTML,
  },
  {
    question: 'Convert this list into a task list, with the first item complete.',
    lang: 'markdown',
    incorrect: document.querySelector('[data-question="10"]').innerHTML,
    correct: document.querySelector('[data-answer="10"]').innerHTML,
  },
];

var ac = ActivityRunner();

ac.allowReset();
CodeCompare(ac, questions);
