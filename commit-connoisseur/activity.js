var commitMatcher = function (val, matches) {
  var isValid = true;

  val = val.trim();

  matches.forEach(function (match) {
    if (!match.test(val)) isValid = false;
  });

  if (val.split(/\s{1,}/).length < 3) isValid = false;

  return isValid;
};

var questions = [
  {
    question: 'Select a correctly formatted commit message.',
    inputGroup: 'question-1',
    inputs: {
      'choice-2': true,
    }
  },
  {
    question: 'Select a correctly formatted commit message.',
    inputGroup: 'question-2',
    inputs: {
      'choice-0': true,
    }
  },
  {
    question: 'Select a correctly formatted commit message.',
    inputGroup: 'question-3',
    inputs: {
      'choice-1': true,
    }
  },
  {
    question: 'Select a correctly formatted commit message.',
    inputGroup: 'question-4',
    inputs: {
      'choice-0': true,
    }
  },
  {
    question: 'Select a correctly formatted commit message.',
    inputGroup: 'question-5',
    inputs: {
      'choice-2': true,
    }
  },
  {
    question: 'Write a correctly formatted commit message.',
    inputGroup: 'question-6',
    inputs: {
      'commit-message': function (val) {
        var matches = [
          /^(Add|Create|Make|Code|Write)/,
          /index/,
          /html/i,
        ]
        return commitMatcher(val, matches);
      },
    }
  },
  {
    question: 'Write a correctly formatted commit message.',
    inputGroup: 'question-7',
    inputs: {
      'commit-message': function (val) {
        var matches = [
          /^(Add|Create|Make|Code|Write|Append)/,
          /(header|masthead|heading)/,
          /(tag|code)/,
        ]
        return commitMatcher(val, matches);
      },
    }
  },
  {
    question: 'Write a correctly formatted commit message.',
    inputGroup: 'question-8',
    inputs: {
      'commit-message': function (val) {
        var matches = [
          /^(Fix|Change|Correct|Repair|Ammend)/,
          /(typo|misspell|incorrect|error|mistake)/,
          /(class)/,
        ]
        return commitMatcher(val, matches);
      },
    }
  },
  {
    question: 'Write a correctly formatted commit message.',
    inputGroup: 'question-9',
    inputs: {
      'commit-message': function (val) {
        var matches = [
          /^(Change|Fix|Replace|Correct|Repair|Redesign)/,
          /masthead/,
          /background-color/,
        ]
        return commitMatcher(val, matches);
      },
    }
  },
  {
    question: 'Write a correctly formatted commit message.',
    inputGroup: 'question-10',
    inputs: {
      'commit-message': function (val) {
        var matches = [
          /^(Delete|Remove|Trash)/,
          /duplicate|unneeded|unnecessary|extra|double/,
          /h1|heading/,
        ]
        return commitMatcher(val, matches);
      },
    }
  }
];

questions.forEach(function (item, i) {
  questions[i].onStart = function () {
    var codes = document.querySelectorAll('[class^="language-"]');
    var input = document.getElementById('commit-message');

    if (input) input.focus();

    [].forEach.call(codes, function (elem) {
      Prism.highlightElement(elem);
    });
  };
});

FormValidator(ActivityRunner(), questions);
