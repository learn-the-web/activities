var TimedCallback = function (runner, questions) {
  "use strict";

  var
    current = 0,
    onStart,
    tickTime = 15,
    ticker,
    elems = {
      title: document.getElementById('question-title'),
      contents: document.getElementById('question-contents')
    },
    contentGroups = {}
  ;

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
    var
      groups = document.querySelectorAll('[data-content-group]'),
      i = 0, t = groups.length
    ;

    for (i; i<t; i++) {
      contentGroups[groups[i].getAttribute('data-content-group')] = groups[i];
      groups[i].parentNode.removeChild(groups[i]);
    }
  };

  var hasAnotherQuestion = function () {
    return !(current == questions.length - 1);
  };

  var populateQuestion = function (id) {
    elems.title.innerHTML = runner.escape(questions[id].question);
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
        });
        break;

      case 'no':
        runner.send('failure', function () {
          startTicker();
        });
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

  runner.listen('start', function () {
    if (onStart) onStart();
    findContentGroups();
    populateQuestion(current);
    startTicker();
  });

  return {
    setTickTime: setTickTime,
    startTicker: startTicker,
    stopTicker: stopTicker,
    setStartHandler: setStartHandler,
    runner: runner
  };
};
