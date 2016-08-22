var questions = [
  {
    question: 'Shortcut for ‘Save’:',
    inputGroup: 'question-1',
    inputs: {
      'shortcut-save': /[sS]/
    }
  },
  {
    question: 'Shortcuts for…',
    inputGroup: 'question-2',
    inputs: {
      'shortcut-new': /[nN]/,
      'shortcut-open': /[oO]/
    }
  },
  {
    question: 'Shortcuts for…',
    inputGroup: 'question-3',
    inputs: {
      'shortcut-copy': /[cC]/,
      'shortcut-cut': /[xX]/,
      'shortcut-paste': /[vV]/,
      'shortcut-undo': /[zZ]/
    },
    onStart: function () {
      document.getElementById('shortcut-paste').addEventListener('keyup', function (e) {
        if (e.target.value.toLowerCase() == 'v') {
          document.getElementById('shortcut-cut-box').removeAttribute('hidden');
        }
      });

      document.getElementById('shortcut-cut').addEventListener('keyup', function (e) {
        if (e.target.value.toLowerCase() == 'x') {
          document.getElementById('shortcut-undo-box').removeAttribute('hidden');
        }
      });
    }
  },
  {
    question: 'Shortcuts for…',
    inputGroup: 'question-4',
    inputs: {
      'shortcut-win': /[wW]/,
      'shortcut-tab': /[tT]/,
      'shortcut-find': /[fF]/
    }
  },
  {
    question: '⌥R is the shortcut for refresh.',
    inputGroup: 'question-5',
    inputs: {
      'shortcut-refresh-f': function (val) {
        return document.getElementById('shortcut-refresh-f').checked;
      }
    }
  },
  {
    question: 'Key for highlighting text:',
    inputGroup: 'question-6',
    inputs: {
      'shortcut-highlight': 'shift'
    }
  },
  {
    question: 'Shortcuts for…',
    inputGroup: 'question-7',
    inputs: {
      'shortcut-select-meta': 'ctrl',
      'shortcut-select-letter': /[aA]/,
      'shortcut-start': 'home',
      'shortcut-end': 'end',
      'shortcut-next-meta': 'alt',
      'shortcut-next-letter': 'right',
      'shortcut-prev-meta': 'alt',
      'shortcut-prev-letter': 'left'
    }
  },
  {
    question: 'Go to another application then come back.',
    inputGroup: 'question-8',
    inputs: {
      'changed-app': 'yeppers'
    },
    onStart: function () {
      var windowBlurred = false;
      var windowFocused = false;

      var checkChangedApp = function () {
        if (windowBlurred && windowFocused) {
          document.getElementById('changed-app').value = 'yeppers';
          window.removeEventListener('blur', blurHandler);
          window.removeEventListener('focus', focusHandler);
          activity.advanceOrFail();
        }
      }

      var blurHandler = function (e) {
        e.preventDefault();
        windowBlurred = true;
        checkChangedApp();
      };

      var focusHandler = function (e) {
        e.preventDefault()
        windowFocused = true;
        checkChangedApp();
      };

      window.addEventListener('blur', blurHandler);
      window.addEventListener('focus', focusHandler);
    }
  },
  {
    question: 'Use a shortcut key to get to the URL bar.',
    inputGroup: 'question-9',
    inputs: {
      'hash-change': 'changed'
    },
    onStart: function () {
      var hashChangeHandler = function (e) {
        if (location.hash == '#keyboard') {
          window.removeEventListener('hashchange', hashChangeHandler);
          document.getElementById('hash-change').value = 'changed';
          activity.advanceOrFail();
        }
      };

      window.addEventListener('hashchange', hashChangeHandler);
      document.getElementById('hash-example-domain').innerHTML = location.href;
    }
  },
  {
    question: 'Trigger the back button with a shortcut key.',
    inputGroup: 'question-10',
    inputs: {
      'hash-change': 'changed'
    },
    onStart: function () {
      var currentHash = location.hash;

      var hashChangeHandler = function (e) {
        if (location.hash != currentHash) {
          window.removeEventListener('hashchange', hashChangeHandler);
          document.getElementById('hash-change').value = 'changed';
          activity.advanceOrFail();
        }
      };

      window.addEventListener('hashchange', hashChangeHandler);
    }
  },
  {
    question: 'Keyboards rule!',
    inputGroup: 'question-11',
    inputs: {
      'rule': true
    },
    onStart: function () {
      document.getElementById('finish-link').addEventListener('click', function (e) {
        activity.advanceOrFail('yes');
      });
    }
  }
];

var
  form = document.getElementById('question-form'),
  runner = ActivityRunner(),
  activity,
  os = (navigator.platform.search(/mac/i) > -1) ? 'mac' : 'win',
  notOs = (os == 'win') ? 'mac' : 'win'
;

var fatalMouseMove = function (e) {
  runner.send('fatal-error', null, {
    image: '/images/mouse.svg',
    message: 'Don’t use your mouse.'
  });

  document.removeEventListener('mousemove', fatalMouseMove);
};

runner.listen('start', function () {
  document.addEventListener('mousemove', fatalMouseMove);
});

runner.listen('end', function () {
  document.removeEventListener('mousemove', fatalMouseMove);
});

document.documentElement.className += 'os-' + os;

Array.prototype.forEach.call(document.getElementsByClassName(notOs), function (elem, i, array) {
  elem.parentNode.removeChild(elem);
});

activity = FormValidator(runner, questions);
