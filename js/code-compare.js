var CodeCompare = function (runner, questions) {
  "use strict";

  var editor = null;
  var current = 0;
  var elems = {
    title: document.getElementById('question-title'),
    extras: document.getElementById('question-extras'),
    form: document.getElementById('question-form'),
  };

  var init = function () {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/idle_fingers");
    editor.getSession().setMode("ace/mode/html");

    editor.getSession().setUseSoftTabs(true);
    editor.getSession().setTabSize(2);
    editor.getSession().setUseWrapMode(false);
    editor.setHighlightActiveLine(true);
    editor.setDisplayIndentGuides(true);
    editor.setShowInvisibles(true);
    editor.setShowPrintMargin(false);
    editor.setShowFoldWidgets(false);
    editor.getSession().setOption('useWorker', false);
  };

  var bindEvents = function () {
    elems.form.addEventListener('submit', function (e) {
      e.preventDefault();
      advanceOrFail();
    });
  };

  var hasAnotherQuestion = function () {
    return !(current == questions.length - 1);
  };

  var populateQuestion = function (id) {
    elems.title.innerHTML = runner.convertToCode(runner.escape(questions[id].question));

    if (questions[id].lang) editor.getSession().setMode('ace/mode/' + questions[id].lang);

    if (questions[id].extras) {
      elems.extras.innerHTML = document.getElementById(questions[id].extras).innerHTML;
    } else {
      elems.extras.innerHTML = '';
    }

    editor.setValue(questions[id].incorrect.trim());
    editor.navigateFileStart();
    editor.focus();
  };

  var advanceQuestion = function () {
    if (hasAnotherQuestion()) {
      current++;
      populateQuestion(current);
    } else {
      runner.send('end');
    }
  };

  var advanceOrFail = function () {
    switch (isAnswerCorrect()) {
      case 'yes':
        runner.send('success', function () {
          advanceQuestion();
        }, { questionId: current });
        break;
      case 'no':
        runner.send('failure', function () {
          editor.focus();
        }, { questionId: current });
        break;
      default:
        runner.send('failure', function () {
          editor.focus();
        }, { questionId: current });
        break;
    }
  };

  var isAnswerCorrect = function () {
    var valid = 'yes';

    switch (typeof questions[current].correct) {
      case 'string':
        if (editor.getValue().trim() !== questions[current].correct.trim()) valid = 'no';
        break;
      case 'function':
        if (!questions[current].correct(editor.getValue().trim())) valid = 'no';
        break;
      default:
        valid = 'no';
    }

    return valid;
  };

  init();
  bindEvents();

  runner.listen('start', function () {
    populateQuestion(current);
  });

  runner.listen('reset', function () {
    populateQuestion(current);
  });
};
