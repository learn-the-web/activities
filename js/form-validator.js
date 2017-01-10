var FormValidator = function (runner, questions) {
  "use strict";

  var
    current = 0,
    elems = {
      title: document.getElementById('question-title'),
      inputs: document.getElementById('question-inputs'),
      form: document.getElementById('question-form')
    },
    inputGroups = {}
  ;

  var bindEvents = function () {
    elems.form.addEventListener('submit', function (e) {
      e.preventDefault();
      advanceOrFail();
    });
  };

  var findInputGroups = function () {
    var
      groups = document.querySelectorAll('[data-input-group]'),
      i = 0, t = groups.length
    ;

    for (i; i<t; i++) {
      inputGroups[groups[i].getAttribute('data-input-group')] = groups[i];
      groups[i].parentNode.removeChild(groups[i]);
    }
  }

  var hasAnotherQuestion = function () {
    return !(current == questions.length - 1);
  };

  var populateQuestion = function (id) {
    if (typeof questions[id].question === 'function') {
      elems.title.innerHTML = questions[id].question(runner);
    } else {
      elems.title.innerHTML = runner.convertToCode(runner.escape(questions[id].question));
    }

    elems.inputs.innerHTML = '';
    elems.inputs.appendChild(inputGroups[questions[id].inputGroup]);

    if (questions[id].onStart) {
      questions[id].onStart();
    }
  };

  var advanceQuestion = function () {
    if (hasAnotherQuestion()) {
      current++;
      populateQuestion(current);
    } else {
      runner.send('end');
    }
  };

  var advanceOrFail = function (forceDirection) {
    var yesNo = forceDirection || isAnswerCorrect();

    switch (yesNo) {
      case 'yes':
        runner.send('success', function () {
          advanceQuestion();
        });
        break;

      case 'no':
        runner.send('failure');
        break;

      default:
        runner.send('failure');
        break;
    }
  };

  var isAnswerCorrect = function () {
    var valid = 'yes';

    Object.keys(questions[current].inputs).forEach(function(key) {
      var
        elem = document.getElementById(key),
        answer = questions[current].inputs[key]
      ;

      switch (typeof answer) {
        case 'string':
        case 'number':
          if (elem.value.trim() != answer) valid = 'no';
          break;
        case 'boolean':
          if (!elem.checked) valid = 'no';
          break;
        case 'function':
          if (!answer(elem.value)) valid = 'no';
          break;
        case 'object': // Regex
          if (!elem.value.trim().match(answer)) valid = 'no';
          break;
        default:
          valid = 'no';
      }
    });

    return valid;
  };

  bindEvents();
  findInputGroups();

  runner.listen('start', function () {
    populateQuestion(current);
  });

  return {
    runner: runner,
    advanceOrFail: advanceOrFail
  }
};
