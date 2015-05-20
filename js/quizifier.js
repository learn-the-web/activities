(function (quiz) {
  "use strict";

  var
    current = 0,
    screenTimeout,
    screens = {
      start: document.getElementById('start-screen'),
      main: document.getElementById('main-screen'),
      failure: document.getElementById('failure-screen'),
      success: document.getElementById('success-screen'),
      end: document.getElementById('end-screen')
    },
    sayings = {
      failure: document.querySelectorAll('#failure-screen p'),
      success: document.querySelectorAll('#success-screen p')
    },
    question = {
      title: document.getElementById('question-title'),
      choices: document.getElementById('question-choices'),
      form: document.getElementById('question-form')
    }
  ;

  var escape = function (str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  };

  var toggleScreen = function (screen) {
    if (screens[screen].hidden) {
      screens[screen].hidden = false;
    } else {
      screens[screen].hidden = true;
    }
  };

  var populateQuizDetails = function () {
    document.querySelector('title').innerHTML = escape(quiz.title);
    document.getElementById('game-title').innerHTML = escape(quiz.title);
    document.getElementById('game-intro').innerHTML = escape(quiz.intro);
    document.getElementById('game-congrats').innerHTML = escape(quiz.congrats);
  };

  var bindEvents = function () {
    document.getElementById('start-button').addEventListener('click', function () {
      startQuiz();
    });
    question.form.addEventListener('submit', function (e) {
      e.preventDefault();
      advanceOrFail();
    });
  };

  var hasAnotherQuestion = function () {
    return !(current == quiz.questions.length - 1);
  };

  var createChoiceElement = function (i, label) {
    var tmpLi, tmpRadio, tmpLabel;
    tmpLi = document.createElement('li');

    tmpRadio = document.createElement('input');
    tmpRadio.setAttribute('type', 'radio');
    tmpRadio.setAttribute('name', 'question-choices');
    tmpRadio.id = 'choice-' + i;
    tmpRadio.setAttribute('data-id', i);
    tmpLi.appendChild(tmpRadio);

    tmpLabel = document.createElement('label');
    tmpLabel.setAttribute('for', 'choice-' + i);
    tmpLabel.innerHTML = escape(label);
    tmpLi.appendChild(tmpLabel);

    return tmpLi;
  };

  var populateQuestion = function (id) {
    var i = 0, t = quiz.questions[id].choices.length;

    question.choices.innerHTML = '';
    question.title.innerHTML = escape(quiz.questions[id].question);

    for (i; i<t; i++) {
      question.choices.appendChild(createChoiceElement(i, quiz.questions[id].choices[i]));
    }
  };

  var startQuiz = function () {
    populateQuestion(current);
    toggleScreen('start');
    toggleScreen('main');
  };

  var displayTimedScreen = function (screen, callback) {
    toggleScreen(screen);

    screenTimeout = setTimeout(function () {
      var scn = screen, cb = callback;

      clearTimeout(screenTimeout);
      toggleScreen(scn);

      if (cb) {
        cb();
      }
    }, 700);
  };

  var displaySaying = function (group) {
    var
      i = 0,
      t = group.length,
      rand = Math.floor(Math.random() * t)
    ;

    for (i; i<t; i++) {
      group[i].hidden = true;
    }

    group[rand].hidden = false;
  };

  var displaySuccessScreen = function (callback) {
    displayTimedScreen('success', callback);
    displaySaying(sayings.success);
  };

  var displayFailureScreen = function () {
    displayTimedScreen('failure');
    displaySaying(sayings.failure);
  };

  var displayEndScreen = function () {
    toggleScreen('main');
    toggleScreen('end');
  };

  var advanceQuestion = function () {
    if (hasAnotherQuestion()) {
      current++;
      populateQuestion(current);
    } else {
      displayEndScreen();
    }
  };

  var advanceOrFail = function () {
    switch (isAnswerCorrect()) {
      case 'yes':
        displaySuccessScreen(function () {
          advanceQuestion();
        });
        break;

      case 'no':
        displayFailureScreen();
        break;

      default:
        break;
    }
  };

  var isAnswerCorrect = function () {
    var choice = question.choices.querySelector(':checked');

    if (!choice) {
      return;
    }

    if (parseInt(choice.getAttribute('data-id'), 10) == quiz.questions[current].correct) {
      return 'yes';
    } else {
      return 'no';
    }
  };

  populateQuizDetails();
  bindEvents();
}(quiz));
