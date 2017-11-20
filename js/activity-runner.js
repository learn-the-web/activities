var ActivityRunner = function () {
  'use strict';

  var boundListeners = {
    start: null,
  };
  var screens = {};
  var sayings = {
    failure: document.querySelectorAll('[data-screen="failure"] p'),
    success: document.querySelectorAll('[data-screen="success"] p'),
  };
  var successAndFailures = {};

  var dateFormatter = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  var recordStartTime = function () {
    if (!sessionStorage.getItem(quizId + '-dtstart')) sessionStorage.setItem(quizId + '-dtstart', (new Date()).toJSON());
  };

  var recordEndTime = function () {
    sessionStorage.setItem(quizId + '-dtend', (new Date()).toJSON());
  };

  var recordSuccess = function (opts) {
    if (!successAndFailures.hasOwnProperty(opts.questionId)) successAndFailures[opts.questionId] = true;
  };

  var recordFailure = function (opts) {
    if (!successAndFailures.hasOwnProperty(opts.questionId)) successAndFailures[opts.questionId] = false;
  };

  var escape = function (str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  };

  var convertToCode = function (text) {
    while (text.match(/`/)) {
      text = text.replace(/`/, '<code>');
      text = text.replace(/`/, '</code>');
    }

    return text;
  };

  var wrapInCodeBlock = function (text) {
    return '<pre class="answer-code-block"><code>' + text + '</code></pre>';
  };

  var findScreens = function () {
    var tmpScreens = document.querySelectorAll('[data-screen]');
    var i = 0, t = tmpScreens.length;

    for (i; i<t; i++) {
      screens[tmpScreens[i].getAttribute('data-screen')] = tmpScreens[i];
    }
  };

  var toggleScreen = function (screen) {
    if (screens[screen].hidden) {
      screens[screen].hidden = false;
    } else {
      screens[screen].hidden = true;
    }
  };

  var displayTimedScreen = function (screen, callback) {
    toggleScreen(screen);

     setTimeout(function () {
      var scn = screen, cb = callback;

      toggleScreen(scn);
      document.querySelector('main h2').focus();

      if (cb) {
        cb();
      }
    }, 700);
  };

  var displaySaying = function (group) {
    var i = 0, t = group.length;
    var rand = Math.floor(Math.random() * t);

    for (i; i<t; i++) {
      group[i].hidden = true;
    }

    group[rand].hidden = false;
  };

  var displaySuccessScreen = function (callback, opts) {
    displayTimedScreen('success', callback);
    displaySaying(sayings.success);
    screens.success.focus();
    recordSuccess(opts);
  };

  var displayFailureScreen = function (callback, opts) {
    displayTimedScreen('failure', callback);
    displaySaying(sayings.failure);
    screens.failure.focus();
    recordFailure(opts);
  };

  var displayEndStats = function () {
    var dtstart = new Date(sessionStorage.getItem(quizId + '-dtstart'));
    var dtend = new Date(sessionStorage.getItem(quizId + '-dtend'));
    var totalQuestions = Object.keys(successAndFailures).length;
    var totalCorrect = 0;
    var percentCorrect = 100;
    var timeDiff = 20;
    var outOfExtras = '';

    Object.keys(successAndFailures).forEach(function (i) {
      if (successAndFailures[i] === true) totalCorrect++;
    });

    percentCorrect = (totalQuestions > 0) ? Math.round(totalCorrect / totalQuestions * 100) : 100;
    timeDiff = ((dtend.getTime() - dtstart.getTime()) / 1000 / 60).toFixed(2);
    outOfExtras = (totalQuestions > 0) ? '(' + totalCorrect + ' of ' + totalQuestions + ')' : '';

    document.getElementById('stats-start').innerHTML = dateFormatter.format(dtstart);
    document.getElementById('stats-end').innerHTML = dateFormatter.format(dtend);
    document.getElementById('stats-time').innerHTML = '~' + timeDiff + ' m';
    document.getElementById('stats-correct').innerHTML = percentCorrect + '%' + outOfExtras;
  };

  var displayEndScreen = function (callback, opts) {
    recordEndTime();
    toggleScreen('main');
    dispatchEvent('end');
    toggleScreen('end');
    document.querySelector('[data-screen="end"] > h2').focus();
    displayEndStats();
  };

  var displayFatalErrorScreen = function (callback, opts) {
    toggleScreen('main');
    dispatchEvent('fatal-error');
    toggleScreen('fatal-error');
    document.getElementById('fatal-error-img').src = opts.image;
    document.getElementById('fatal-error-message').innerHTML = escape(opts.message);
    document.querySelector('[data-screen="fatal-error"] > h2').focus();
  };

  var send = function (ev, cb, opts) {
    switch (ev) {
      case 'success':
        displaySuccessScreen(cb, opts);
        break;
      case 'failure':
        displayFailureScreen(cb, opts);
        break;
      case 'end':
        displayEndScreen(cb, opts);
        break;
      case 'fatal-error':
        displayFatalErrorScreen(cb, opts);
        break;
    }
  };

  var listen = function (ev, cb) {
    if (!boundListeners[ev]) boundListeners[ev] = [];

    boundListeners[ev].push(cb);
  };

  var dispatchEvent = function (ev) {
    if (boundListeners[ev]) {
      boundListeners[ev].forEach(function (item) {
        item();
      });
    };
  };

  var bindEvents = function () {
    var startButton = document.getElementById('start-button');

    if (startButton) {
      startButton.addEventListener('click', function () {
        start();
      });
    }
  };

  var start = function () {
    toggleScreen('start');
    toggleScreen('main');
    document.querySelector('main h2').focus();
    dispatchEvent('start');
    recordStartTime();
  };

  findScreens();
  bindEvents();

  return {
    escape: escape,
    e: escape,
    convertToCode: convertToCode,
    code: convertToCode,
    wrapInCodeBlock: wrapInCodeBlock,
    wrap: wrapInCodeBlock,
    toggleScreen: toggleScreen,
    send: send,
    listen: listen,
    start: start,
  };
};
