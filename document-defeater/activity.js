var questions = [
  {
    question: 'Add a class to the `<div>`.',
    inputGroup: 'question-1',
    inputs: {
      selector: /^\$\('div'\)\.addClass\('[a-z0-9\-]+'\)$/
    }
  },
  {
    question: 'Change the text to “Saber tooth tiger”.',
    inputGroup: 'question-2',
    inputs: {
      selector: /^\$\('div'\)\.(text|html)\('Saber tooth tiger'\)$/
    }
  },
  {
    question: 'Create a new `<h1>` element.',
    inputGroup: 'question-3',
    inputs: {
      selector: "$('<h1>')"
    }
  },
  {
    question: 'Add the new `<h1>` tag to the body.',
    inputGroup: 'question-4',
    inputs: {
      selector: "$('body').append($h1)"
    }
  },
  {
    question: 'Add this `<li>` to the start of list.',
    inputGroup: 'question-5',
    inputs: {
      selector: "$('ul').prepend($li)"
    }
  },
  {
    question: 'Add this `<h1>` before the list.',
    inputGroup: 'question-6',
    inputs: {
      selector: "$('ul').before($h1)"
    }
  },
  {
    question: 'Remove “Megatherium” from the list.',
    inputGroup: 'question-7',
    inputs: {
      selector: /^\$\('(ul )?li\:nth\-child\(2\)'\)\.remove\(\)$/
    }
  },
  {
    question: 'Change the `aria-hidden` attribute to `false`.',
    inputGroup: 'question-8',
    inputs: {
      selector: /^\$\('(div|\.lightbox)'\)\.attr\('aria-hidden'\, 'false'\)$/
    }
  },
  {
    question: 'Give the ball a random top coordinate.',
    inputGroup: 'question-9',
    inputs: {
      selector: /^\$\('(div|\.ball)'\)\.css\('top'\, Math\.random\(\)( \* \d+)?\)$/
    }
  },
  {
    question: 'Make the rectangle’s fill transition to orange.',
    inputGroup: 'question-10',
    inputs: {
      selector: "$('svg').addClass('active')"
    }
  }
];

questions.forEach(function (item, i) {
  questions[i].onStart = function () {
    var codes = document.querySelectorAll('[class^="language-"]');

    document.getElementById('selector').focus();

    [].forEach.call(codes, function (elem) {
      Prism.highlightElement(elem);
    });
  };
});

FormValidator(ActivityRunner(), questions);
