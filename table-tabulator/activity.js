var questions = [
  {
    question: 'Turn this data into a single table row—leave off the `<table>` tag.',
    incorrect: document.querySelector('[data-question="1"]').innerHTML,
    correct: document.querySelector('[data-answer="1"]').innerHTML,
  },
  {
    question: 'Mark these up as a single row of column headings—leave off the `<table>` tag.',
    incorrect: document.querySelector('[data-question="2"]').innerHTML,
    correct: document.querySelector('[data-answer="2"]').innerHTML,
  },
  {
    question: 'Group the rows to represent their purpose within the table.',
    incorrect: document.querySelector('[data-question="3"]').innerHTML,
    correct: document.querySelector('[data-answer="3"]').innerHTML,
  },
  {
    question: 'Make this table more accessible with this text:',
    extras: 'question-4-extras',
    incorrect: document.querySelector('[data-question="4"]').innerHTML,
    correct: document.querySelector('[data-answer="4"]').innerHTML,
  },
  {
    question: 'This cell should be merged horizontally so it takes up 4 total columns.',
    incorrect: document.querySelector('[data-question="5"]').innerHTML,
    correct: document.querySelector('[data-answer="5"]').innerHTML,
  },
  {
    question: 'This cell should be merged vertically so it takes up 3 total rows.',
    incorrect: document.querySelector('[data-question="6"]').innerHTML,
    correct: document.querySelector('[data-answer="6"]').innerHTML,
  },
  {
    question: 'Add `colspan` and `rowspan` to the right elements to make the table match the image.',
    extras: 'question-7-extras',
    incorrect: document.querySelector('[data-question="7"]').innerHTML,
    correct: document.querySelector('[data-answer="7"]').innerHTML,
  },
  {
    question: 'Correct the indentation issues.',
    incorrect: document.querySelector('[data-question="8"]').innerHTML,
    correct: document.querySelector('[data-answer="8"]').innerHTML,
  },
  {
    question: 'Correct the indentation issues.',
    incorrect: document.querySelector('[data-question="9"]').innerHTML,
    correct: document.querySelector('[data-answer="9"]').innerHTML,
  },
  {
    question: 'Correct the indentation issues.',
    incorrect: document.querySelector('[data-question="10"]').innerHTML,
    correct: document.querySelector('[data-answer="10"]').innerHTML,
  },
];

var ac = ActivityRunner();

ac.allowReset();
CodeCompare(ac, questions);
