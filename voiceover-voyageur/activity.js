var questions = [
  {
    question: 'Activate VoiceOver and press the hidden button below.',
    inputGroup: 'question-1',
    inputs: {}
  },
  {
    question: 'Find the button labeled "The Go Button" and press it.',
    inputGroup: 'question-2',
    inputs: {}
  },
  {
    question: 'Enter your name into the input field.',
    inputGroup: 'question-3',
    inputs: {
      name: /.+/
    }
  },
  {
    question: 'Count the number of items in the list and enter the total below.',
    inputGroup: 'question-4',
    inputs: {
      total: 14
    }
  },
  {
    question: 'Press the "Go!" button.',
    inputGroup: 'question-5',
    inputs: {},
    onstart: function () {
      document.getElementById('question-title').className += ' visually-hidden';
    }
  },
  {
    question: 'Press the image of the dinosaur.',
    inputGroup: 'question-6',
    inputs: {}
  },
  {
    question: 'Press the button inside column “C”, row “4”.',
    inputGroup: 'question-7',
    inputs: {}
  },
  {
    question: 'Press the <h5>.',
    inputGroup: 'question-8',
    inputs: {}
  },
  {
    question: 'Press the green button.',
    inputGroup: 'question-9',
    inputs: {}
  },
  {
    question: 'Go to the primary navigation, find the finish link.',
    inputGroup: 'question-10',
    inputs: {}
  }
];

var
  form = document.getElementById('question-form'),
  activity,
  resetBtns = document.querySelectorAll('[type="reset"]'),
  i = 0, t = resetBtns.length
;

for (i; i<t; i++) {
  resetBtns[i].addEventListener('click', function (e) {
    activity.advanceOrFail('no');
  });
}

document.addEventListener('keydown', function (e) {
  switch (e.target.className) {
    case 'right':
      e.preventDefault();
      if (e.keyCode == 13 || e.keyCode == 32) activity.advanceOrFail('yes');
      break;
    case 'wrong':
      e.preventDefault();
      if (e.keyCode == 13 || e.keyCode == 32) activity.advanceOrFail('no');
      break;
  }
});

activity = FormValidator(ActivityRunner(), questions);
