var ActivityRunner = function () {
  "use strict";

  var
    boundListeners = {
      start: null
    },
    screens = {},
    sayings = {
      failure: document.querySelectorAll('[data-screen="failure"] p'),
      success: document.querySelectorAll('[data-screen="success"] p')
    }
  ;

  var escape = function (str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  };

  var findScreens = function () {
    var
      tmpScreens = document.querySelectorAll('[data-screen]'),
      i = 0, t = tmpScreens.length
    ;

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
    screens.success.focus();
  };

  var displayFailureScreen = function (callback) {
    displayTimedScreen('failure', callback);
    displaySaying(sayings.failure);
    screens.failure.focus();
  };

  var displayEndScreen = function (callback) {
    toggleScreen('main');
    dispatchEvent('end');
    toggleScreen('end');
    document.querySelector('[data-screen="end"] > h2').focus();
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
        displaySuccessScreen(cb);
        break;
      case 'failure':
        displayFailureScreen(cb);
        break;
      case 'end':
        displayEndScreen(cb);
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
  };

  findScreens();
  bindEvents();

  return {
    escape: escape,
    toggleScreen: toggleScreen,
    send: send,
    listen: listen,
    start: start
  }
};
