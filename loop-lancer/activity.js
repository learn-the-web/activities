var questions = [
  {
    question: 'How many times will the code inside the loop execute?',
    inputGroup: 'question-1',
    inputs: {
      looptotal: 10
    }
  },
  {
    question: 'How many times will the code inside the loop execute?',
    inputGroup: 'question-2',
    inputs: {
      looptotal: 9
    }
  },
  {
    question: 'How many times will the code inside the loop execute?',
    inputGroup: 'question-3',
    inputs: {
      looptotal: 11
    }
  },
  {
    question: 'How many times will the code inside the loop execute?',
    inputGroup: 'question-4',
    inputs: {
      looptotal: 59
    }
  },
  {
    question: 'How many times will the code inside the loop execute?',
    inputGroup: 'question-5',
    inputs: {
      looptotal: 100
    }
  },
  {
    question: 'How many times will the code inside the loop execute?',
    inputGroup: 'question-6',
    inputs: {
      looptotal: 110
    }
  },
  {
    question: 'How many times will the code inside the loop execute?',
    inputGroup: 'question-7',
    inputs: {
      looptotal: 10400
    }
  },
  {
    question: 'How many times will the code inside the loop execute?',
    inputGroup: 'question-8',
    inputs: {
      looptotal: 4
    }
  },
  {
    question: 'How many times will the code inside the loop execute?',
    inputGroup: 'question-9',
    inputs: {
      looptotal: 6
    }
  },
  {
    question: 'How many times will the code inside the loop execute?',
    inputGroup: 'question-10',
    inputs: {
      looptotal: 3
    }
  }
];

questions.forEach(function (item, i) {
  questions[i].onStart = function () {
    document.getElementById('looptotal').focus();
    Prism.highlightElement(document.querySelector('.language-javascript'));
  };
});

FormValidator(ActivityRunner(), questions);
