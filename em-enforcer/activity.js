var questions = [
  {
    question: 'What’s the pixel measurement for the `font-size` of the `<p>`?',
    inputGroup: 'question-1',
    inputs: {
      pixels: '16'
    }
  },
  {
    question: 'What’s the pixel measurement for the `font-size` of the `<p>`?',
    inputGroup: 'question-2',
    inputs: {
      pixels: '20'
    }
  },
  {
    question: 'What’s the pixel measurement for the `font-size` of the `<p>`?',
    inputGroup: 'question-3',
    inputs: {
      pixels: '16'
    }
  },
  {
    question: 'What’s the pixel measurement for the `font-size` of the `<p>`?',
    inputGroup: 'question-4',
    inputs: {
      pixels: '33'
    }
  },
  {
    question: 'What’s the pixel measurement for the `font-size` of the `<p>`?',
    inputGroup: 'question-5',
    inputs: {
      pixels: '22.5'
    }
  },
  {
    question: 'What’s the pixel measurement for the `padding` of the `<p>`?',
    inputGroup: 'question-6',
    inputs: {
      pixels: '30'
    }
  },
  {
    question: 'What’s the pixel measurement for the `padding` of the `<p>`?',
    inputGroup: 'question-7',
    inputs: {
      pixels: '20'
    }
  },
  {
    question: 'What’s the pixel measurement for the `font-size` of `.item-3`?',
    inputGroup: 'question-8',
    inputs: {
      pixels: '13.5'
    }
  },
  {
    question: 'What’s the pixel measurement for the `font-size` of the `<p>`, assuming the `38em` media query is active?',
    inputGroup: 'question-9',
    inputs: {
      pixels: '19.36'
    }
  },
  {
    question: 'What’s the pixel measurement for the `line-height` of the `<p>`, assuming the `38em` media query is active?',
    inputGroup: 'question-10',
    inputs: {
      pixels: '24.64'
    }
  }
];

questions.forEach(function (item, i) {
  questions[i].onStart = function () {
    document.getElementById('pixels').focus();
    Prism.highlightElement(document.querySelector('.language-markup'));
    Prism.highlightElement(document.querySelector('.language-css'));
  };
});

FormValidator(ActivityRunner(), questions);
