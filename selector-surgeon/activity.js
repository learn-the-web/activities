var questions = [
  {
    question: 'Select the <body> element.',
    inputGroup: 'question-1',
    inputs: {
      selector: 'body'
    }
  },
  {
    question: 'Select the <header> & <footer> elements.',
    inputGroup: 'question-2',
    inputs: {
      selector: 'header, footer'
    }
  },
  {
    question: 'Select the <ul> inside the <nav>.',
    inputGroup: 'question-3',
    inputs: {
      selector: 'nav ul'
    }
  },
  {
    question: 'Select only the logo’s <img>.',
    inputGroup: 'question-4',
    inputs: {
      selector: '.logo'
    }
  },
  {
    question: 'Select the <p> tags next to the <h2> tags.',
    inputGroup: 'question-5',
    inputs: {
      selector: 'h2 + p'
    }
  },
  {
    question: 'Select the first <li> element only.',
    inputGroup: 'question-6',
    inputs: {
      selector: 'li:first-child'
    }
  },
  {
    question: 'Select only the first level of <li> tags.',
    inputGroup: 'question-7',
    inputs: {
      selector: 'ul > li'
    }
  },
  {
    question: 'Get the <a> tags with the external relationship.',
    inputGroup: 'question-8',
    inputs: {
      selector: 'a[rel="external"]'
    }
  },
  {
    question: 'Get the odd numbered <li> elements inside the first list.',
    inputGroup: 'question-9',
    inputs: {
      selector: '.first li:nth-child(odd)'
    }
  },
  {
    question: 'Get every third <li> element inside the second list.',
    inputGroup: 'question-10',
    inputs: {
      selector: '.second li:nth-child(3n)'
    }
  }
];

questions.forEach(function (item, i) {
  questions[i].onStart = function () {
    document.getElementById('selector').focus();
    Prism.highlightElement(document.querySelector('.language-markup'));
  };
});

FormValidator(ActivityRunner(), questions);
