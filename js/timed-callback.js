var TimedCallback = function (runner, questions) {
  "use strict";

  var current = 0;
  var onStart;
  var tickTime = 15;
  var ticker;
  var elems = {
    title: document.getElementById('question-title'),
    contents: document.getElementById('question-contents'),
  };
  var contentGroups = {};

  var setTickTime = function (time) {
    tickTime = time;
  };

  var setStartHandler = function (cb) {
    onStart = cb;
  };

  var stopTicker = function () {
    clearInterval(ticker);
  };

  var startTicker = function () {
    ticker = setTimeout(function () {
      advanceOrFail();
    }, tickTime);
  };

  var findContentGroups = function () {
    var groups = document.querySelectorAll('[data-content-group]');
    var i = 0, t = groups.length;

    for (i; i<t; i++) {
      contentGroups[groups[i].getAttribute('data-content-group')] = groups[i];
      groups[i].parentNode.removeChild(groups[i]);
    }
  };

  var hasAnotherQuestion = function () {
    return !(current == questions.length - 1);
  };

  var populateQuestion = function (id) {
    elems.title.innerHTML = runner.convertToCode(runner.escape(questions[id].question));
    elems.contents.innerHTML = '';
    elems.contents.appendChild(contentGroups[questions[id].contentGroup]);

    if (questions[id].onStart) {
      questions[id].onStart();
    }
  };

  var advanceQuestion = function () {
    if (hasAnotherQuestion()) {
      current++;
      populateQuestion(current);
      startTicker();
    } else {
      runner.send('end');
    }
  };

  var advanceOrFail = function () {
    stopTicker();

    switch (isAnswerCorrect()) {
      case 'yes':
        runner.send('success', function () {
          advanceQuestion();
        }, { questionId: current });
        break;
      case 'no':
        runner.send('failure', function () {
          startTicker();
        }, { questionId: current });
        break;
      default:
        startTicker();
        break;
    }
  };

  var isAnswerCorrect = function () {
    var isCorrect = questions[current].onTick();

    if (isCorrect === true) return 'yes';
    if (isCorrect === false) return 'no';

    return;
  };

  var reset = function () {
    runner.setState(current);
    window.location.reload();
  };

  runner.listen('start', function () {
    if (onStart) onStart();

    findContentGroups();
    current = runner.getState();
    populateQuestion(current);
    startTicker();
  });

  return {
    reset: reset,
    setTickTime: setTickTime,
    startTicker: startTicker,
    stopTicker: stopTicker,
    setStartHandler: setStartHandler,
    runner: runner,
  };
};
