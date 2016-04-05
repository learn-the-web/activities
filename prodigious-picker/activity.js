var questions = [
  {
    question: 'Select the <h1> element.',
    inputGroup: 'question-1',
    inputs: {
      selector: "$('h1')"
    }
  },
  {
    question: 'Select the tag with the class “gamma”.',
    inputGroup: 'question-2',
    inputs: {
      selector: /\$\('p?\.gamma'\)/
    }
  },
  {
    question: 'Select the tag with the id “epsilon”.',
    inputGroup: 'question-3',
    inputs: {
      selector: /\$\('p?\#epsilon'\)/
    }
  },
  {
    question: 'Select all the <li> tags.',
    inputGroup: 'question-4',
    inputs: {
      selector: /\$\('(li|nav li|nav ul li|ul li)'\)/
    }
  },
  {
    question: 'Select all the <li> tags from the “alpha” list.',
    inputGroup: 'question-5',
    inputs: {
      selector: /\$\('(ul)?\.alpha li'\)/
    }
  },
  {
    question: 'Select the odd <li> tags.',
    inputGroup: 'question-6',
    inputs: {
      selector: /\$\('(ul )?li:nth-child\(odd\)'\)/
    }
  },
  {
    question: 'Select only the fourth <li> tag.',
    inputGroup: 'question-7',
    inputs: {
      selector: /\$\('(ul )?li:nth-child\(4\)'\)/
    }
  },
  {
    question: 'Get the tags that have data-state="enabled".',
    inputGroup: 'question-8',
    inputs: {
      selector: /\$\('(p)?\[data-state="enabled"\]'\)/
    }
  },
  {
    question: 'Get the <input> that is checked.',
    inputGroup: 'question-9',
    inputs: {
      selector: /\$\('(input)?:checked'\)/
    }
  },
  {
    question: 'Get all the <p> tags except the one with the “zeta” class.',
    inputGroup: 'question-10',
    inputs: {
      selector: "$('p:not(.zeta)')"
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
