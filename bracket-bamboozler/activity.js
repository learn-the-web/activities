var questions = [
  {
    question: 'Write out all the closing brackets missing from the bottom.',
    inputGroup: 'question-1',
    inputs: {
      brackets: function (val) { return /^\]$/.test(val.trim().replace(/[^\}\]\)]/g, '')) },
    }
  },
  {
    question: 'Write out all the closing brackets missing from the bottom.',
    inputGroup: 'question-2',
    inputs: {
      brackets: function (val) { return /^\}$/.test(val.trim().replace(/[^\}\]\)]/g, '')) },
    }
  },
  {
    question: 'Write out all the closing brackets missing from the bottom.',
    inputGroup: 'question-3',
    inputs: {
      brackets: function (val) { return /^\}$/.test(val.trim().replace(/[^\}\]\)]/g, '')) },
    }
  },
  {
    question: 'Write out all the closing brackets missing from the bottom.',
    inputGroup: 'question-4',
    inputs: {
      brackets: function (val) { return /^\}\}$/.test(val.trim().replace(/[^\}\]\)]/g, '')) },
    }
  },
  {
    question: 'Write out all the closing brackets missing from the bottom.',
    inputGroup: 'question-5',
    inputs: {
      brackets: function (val) { return /^\}\}\]$/.test(val.trim().replace(/[^\}\]\)]/g, '')) },
    }
  },
  {
    question: 'Write out all the closing brackets missing from the bottom.',
    inputGroup: 'question-6',
    inputs: {
      brackets: function (val) { return /^\}\)$/.test(val.trim().replace(/[^\}\]\)]/g, '')) },
    }
  },
  {
    question: 'Write out all the closing brackets missing from the bottom.',
    inputGroup: 'question-7',
    inputs: {
      brackets: function (val) { return /^\]\)\}\)$/.test(val.trim().replace(/[^\}\]\)]/g, '')) },
    }
  },
  {
    question: 'Write out all the closing brackets missing from the bottom.',
    inputGroup: 'question-8',
    inputs: {
      brackets: function (val) { return /^\}\}\)$/.test(val.trim().replace(/[^\}\]\)]/g, '')) },
    }
  },
  {
    question: 'Write out all the closing brackets missing from the bottom.',
    inputGroup: 'question-9',
    inputs: {
      brackets: function (val) { return /^\}\)\}\)$/.test(val.trim().replace(/[^\}\]\)]/g, '')) },
    }
  },
  {
    question: 'Write out all the closing brackets missing from the bottom.',
    inputGroup: 'question-10',
    inputs: {
      brackets: function (val) { return /^\}\}\}\)\}\)$/.test(val.trim().replace(/[^\}\]\)]/g, '')) },
    }
  }
];

questions.forEach(function (item, i) {
  questions[i].onStart = function () {
    var codes = document.querySelectorAll('[class^="language-"]');

    document.getElementById('brackets').focus();

    [].forEach.call(codes, function (elem) {
      Prism.highlightElement(elem);
    });
  };
});

FormValidator(ActivityRunner(), questions);
