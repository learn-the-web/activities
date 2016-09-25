var questions = [
  {
    question: 'Make this text a level 1 heading.',
    incorrect: document.querySelector('[data-question="1"]').innerHTML,
    correct: document.querySelector('[data-answer="1"]').innerHTML,
  },
  {
    question: 'Make this text a level 4 heading.',
    incorrect: document.querySelector('[data-question="2"]').innerHTML,
    correct: document.querySelector('[data-answer="2"]').innerHTML,
  },
  {
    question: 'Make the word “Spinosaurus” bold.',
    incorrect: document.querySelector('[data-question="3"]').innerHTML,
    correct: document.querySelector('[data-answer="3"]').innerHTML,
  },
  {
    question: 'Make the word “Maiasaura” italic.',
    incorrect: document.querySelector('[data-question="4"]').innerHTML,
    correct: document.querySelector('[data-answer="4"]').innerHTML,
  },
  {
    question: 'Convert this text into an unordered list.',
    incorrect: document.querySelector('[data-question="5"]').innerHTML,
    correct: document.querySelector('[data-answer="5"]').innerHTML,
  },
  {
    question: 'Convert this text into an ordered list.',
    incorrect: document.querySelector('[data-question="6"]').innerHTML,
    correct: document.querySelector('[data-answer="6"]').innerHTML,
  },
  {
    question: 'Demonstrate that the phrase “<h1>Dimetrodon</h1>” is code.',
    incorrect: document.querySelector('[data-question="7"]').innerHTML,
    correct: document.querySelector('[data-answer="7"]').innerHTML,
  },
  {
    question: 'Link this word to the URL.',
    incorrect: document.querySelector('[data-question="8"]').innerHTML,
    correct: document.querySelector('[data-answer="8"]').innerHTML,
  },
  {
    question: 'Make this image display in a Markdown document.',
    incorrect: document.querySelector('[data-question="9"]').innerHTML,
    correct: document.querySelector('[data-answer="9"]').innerHTML,
  },
  {
    question: 'Convert this list into a task list, with the first item complete.',
    incorrect: document.querySelector('[data-question="10"]').innerHTML,
    correct: document.querySelector('[data-answer="10"]').innerHTML,
  },
];

CodeCompare(ActivityRunner(), questions);
