var ActivityRunner = function () {
  "use strict";

  var
    boundListeners = {
      start: null
    },
    screenTimeout,
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

  var displayFailureScreen = function (callback) {
    displayTimedScreen('failure', callback);
    displaySaying(sayings.failure);
  };

  var displayEndScreen = function () {
    toggleScreen('main');
    dispatchEvent('on-end');
    toggleScreen('end');
  };

  var send = function (ev, cb) {
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
    }
  };

  var listen = function (ev, cb) {
    boundListeners[ev] = cb;
  };

  var dispatchEvent = function (ev) {
    if (boundListeners[ev]) boundListeners[ev]();
  };

  var bindEvents = function () {
    document.getElementById('start-button').addEventListener('click', function () {
      toggleScreen('start');
      dispatchEvent('on-start');
      toggleScreen('main');
      dispatchEvent('start');
    });
  };

  findScreens();
  bindEvents();

  return {
    escape: escape,
    toggleScreen: toggleScreen,
    send: send,
    listen: listen
  }
};
