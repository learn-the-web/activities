var questions = [
  {
    question: 'Create a variable called `name` and put yours into it.',
    contentGroup: 'question-1',
    onTick: function () {
      if (typeof name === 'string' && name.length >= 2) return true;
    }
  },
  {
    question: 'Create a variable called `$box` and use jQuery to select the element on screen.',
    contentGroup: 'question-2',
    onTick: function () {
      if (typeof $box === 'object' && $box instanceof jQuery) {
        if ($box.get(0) === document.querySelector('.box')) return true;
      }
    }
  },
  {
    question: 'Add the class “red-giant” to `$box`.',
    contentGroup: 'question-3',
    onStart: function () {
      document.querySelector('[data-content-group="question-3"]').appendChild($box.get(0));
    },
    onTick: function () {
      if (typeof $box === 'object' && $box instanceof jQuery && $box.hasClass('red-giant')) return true;
    }
  },
  {
    question: 'Change the content inside `$box` to read “Galactic Mayhem”.',
    contentGroup: 'question-4',
    onStart: function () {
      $box.removeClass('red-giant');
      document.querySelector('[data-content-group="question-4"]').appendChild($box.get(0));
    },
    onTick: function () {
      if (typeof $box === 'object' && $box instanceof jQuery && $box.html() === 'Galactic Mayhem') return true;
    }
  },
  {
    question: 'Execute the `$box` variables `click()` method.',
    contentGroup: 'question-5',
    onStart: function () {
      document.querySelector('[data-content-group="question-5"]').appendChild($box.get(0));
      $box.html('This box.');
      $box.on('click', function () {
        question5Clicked = true;
      })
    },
    onTick: function () {
      if (question5Clicked) return true;
    }
  },
  {
    question: 'Clear the value from the input field.',
    contentGroup: 'question-6',
    onTick: function () {
      if (document.getElementById('clear-me').value == '') return true;
    }
  },
  {
    question: 'There’s a variable called `stars`, it’s an array, add “Tau Ceti” to it.',
    contentGroup: 'question-7',
    onTick: function () {
      if (window.stars[window.stars.length - 1] == 'Tau Ceti') return true;
    }
  },
  {
    question: 'Create a variable called `nearStar`, remove the first item from `stars` and put it into the new variable.',
    contentGroup: 'question-8',
    onTick: function () {
      if (typeof nearStar === 'string' && nearStar === 'Sirius') return true;
    }
  },
  {
    question: 'Using jQuery, select the third <li> and put the contents of the `nearStar` variable inside it.',
    contentGroup: 'question-9',
    onTick: function () {
      if (document.querySelector('.neighbourhood-stars li:nth-child(3)').innerHTML === 'Sirius') return true;
    }
  },
  {
    question: 'Using jQuery, loop over all the <li> tags and set their content to “Number 0”, “Number 1”, “Number 2”, etc.',
    contentGroup: 'question-10',
    onTick: function () {
      if (
        document.querySelector('.neighbourhood-stars li:nth-child(1)').innerHTML === 'Number 0'
        && document.querySelector('.neighbourhood-stars li:nth-child(2)').innerHTML === 'Number 1'
        && document.querySelector('.neighbourhood-stars li:nth-child(3)').innerHTML === 'Number 2'
        && document.querySelector('.neighbourhood-stars li:nth-child(4)').innerHTML === 'Number 3'
        && document.querySelector('.neighbourhood-stars li:nth-child(5)').innerHTML === 'Number 4'
      ) {
        return true;
      }
    }
  }
];

var
  timedCallback = TimedCallback(ActivityRunner(), questions),
  startButton = document.getElementById('start-button'),
  startMessage = document.createElement('span'),
  bigWord = 'color: #00675a; font-size: 24px; font-weight: bold;',
  boldStatement = 'color: #000; font-size: 18px; font-weight: bold;',
  brightStatement = 'color: #00deaf; font-size: 16px; font-weight: bold;';
  start = function () {
    timedCallback.runner.start();
    console.log('%cWatch the page for instructions.', boldStatement);
    return 'Awesome-sauce!';
  },
  question5Clicked = false;
;

window.stars = ['Sirius', 'EZ Aquarii', 'Procyon', 'Cygni'];

startMessage.className = 'btn btn--subtle btn--disabled giga';
startMessage.innerHTML = 'Start by opening the console.';

startButton.parentNode.appendChild(startMessage);
startButton.parentNode.removeChild(startButton);

console.clear();
console.log('%cWelcome to Javascript Journeyer!', bigWord);
console.log('%cTo begin the activity use the command line below and run the `start()` function.', boldStatement);
