var questions = [
  {
    question: 'Alpacas are domesticated animals from which continent?',
    correct: 2,
    extras: 'question-1',
    choices: [
      'Asia',
      'North America',
      'South America',
    ],
    onStart: function () {
      main.style.filter = 'blur(3px)';
      instructions.innerText = 'Low vision acuity';
      document.body.appendChild(instructions);
    }
  },
  {
    question: 'How many breeds of alpacas are there?',
    correct: 0,
    extras: 'question-2',
    choices: [
      '2 breeds',
      '3 breeds',
      '4 breeds',
    ],
    onStart: function () {
      main.style.filter = 'none';
      instructions.innerText = 'Floaters';
      document.body.appendChild(instructions);
    }
  },
  {
    question: 'Alpacas graze in herds on level heights in what mountain range?',
    correct: 0,
    extras: 'question-3',
    choices: [
      'Andes',
      'Himalayas',
      'Rockies',
    ],
    onStart: function () {
      main.style.filter = 'none';
      instructions.innerText = 'Macular degeneration';
      document.body.appendChild(instructions);
    }
  },
  {
    question: 'For how many years have alpacas been domesticated?',
    correct: 0,
    extras: 'question-4',
    choices: [
      'Over one thousand years',
      'Over two thousand years',
      'Over three thousand years',
    ],
    onStart: function () {
      main.style.filter = 'blur(1px)';
      main.style.animationName = 'flutters';
      instructions.innerText = 'Flutters';
      document.body.appendChild(instructions);
    }
  },
  {
    question: 'What are alpacas bred for?',
    correct: 0,
    extras: 'question-5',
    choices: [
      'As fibre to make textiles',
      'As pack animals',
      'As guard animals',
    ],
    onStart: function () {
      main.style.filter = 'blur(1px)';
      main.style.animationName = 'none';
      instructions.innerText = 'Diabetic retinopathy';
      document.body.appendChild(instructions);
      document.body.appendChild(document.querySelector('.diabetic-retinopathy'));
    }
  },
  {
    question: 'What sound is the alpaca making?',
    correct: 1,
    extras: 'question-6',
    choices: [
      '(Humming)',
      '(Munching)',
      '(Screaming)',
    ],
    onStart: function () {
      main.style.filter = 'none';
      instructions.innerText = 'Deafness';
      document.body.appendChild(instructions);
      [].forEach.call(document.querySelectorAll('.diabetic-retinopathy'), function (elem) {
        elem.style.display = 'none';
      });
    }
  },
  {
    question: 'Which alpaca is red?',
    correct: 2,
    extras: 'question-7',
    choices: [
      'Alpaca A',
      'Alpaca B',
      'Alpaca C',
    ],
    onStart: function () {
      main.style.filter = 'url(#color-blindness)';
      instructions.innerText = 'Colour blindness';
      document.body.appendChild(instructions);
    }
  },
  {
    question: 'Alpacas generally eat:',
    correct: 1,
    extras: 'question-8',
    choices: [
      'Fruits & vegetables',
      'Hay & grasses',
      'Plants & insects',
    ],
    onStart: function () {
      main.style.filter = 'none';
      instructions.innerText = 'Broken wrist on mousing hand';
      document.body.appendChild(instructions);
      document.addEventListener('mousemove', mouseMoveError);
    }
  },
  {
    question: 'How many chambers does an alpaca’s stomach have?',
    correct: 2,
    extras: 'question-9',
    choices: [
      '1 stomach chambers',
      '2 stomach chambers',
      '3 stomach chambers',
      '4 stomach chambers',
    ],
    onStart: function () {
      cursor = document.querySelector('#extras .cursor');
      main.style.filter = 'none';
      instructions.innerText = 'Limited fine motor control';
      document.body.appendChild(instructions);
      document.removeEventListener('mousemove', mouseMoveError);
      document.addEventListener('mousemove', bigCursorMove);
      document.addEventListener('click', bigCursorClick);

      document.querySelector('#extras #pointer-lock-engage').addEventListener('click', function (e) {
        e.preventDefault();
        document.body.requestPointerLock();
        document.querySelector('#extras #pointer-lock-overlay').style.display = 'none';
      })
    }
  },
  {
    question: 'What does the below image depict?',
    correct: 2,
    extras: 'question-10',
    choices: [
      'A herd of alpacas grazing on grass',
      'A red coloured shorn alpaca',
      'Fuzzy, funny looking, white & brown alpaca',
    ],
    onStart: function () {
      theTitle = document.getElementById('question-title');
      option1 = document.querySelector('#question-choices li:nth-child(1) input');
      option2 = document.querySelector('#question-choices li:nth-child(2) input');
      option3 = document.querySelector('#question-choices li:nth-child(3) input');
      theButton = document.querySelector('#question-form button');
      theImage = document.querySelector('#question-form .alpaca-img');

      theTitle.dataset.speak = 'Question: What does the below image depict?';
      option1.dataset.speak = 'Answer option 1: A herd of alpacas grazing on grass. Press “Space” to select.';
      option2.dataset.speak = 'Answer option 2: A red-coloured, shorn alpaca. Press “Space” to select.';
      option3.dataset.speak = 'Answer option 3: Fuzzy, funny looking, white & brown alpaca. Press “Space” to select.';
      theButton.dataset.speak = 'Button: Check answer.';

      main.style.filter = 'none';
      instructions.innerText = 'Blindness';
      document.body.appendChild(instructions);
      document.exitPointerLock();
      document.removeEventListener('mousemove', bigCursorMove);
      document.removeEventListener('click', bigCursorClick);

      theTitle.addEventListener('focus', speechifyElem);
      option1.addEventListener('focus', speechifyElem);
      option2.addEventListener('focus', speechifyElem);
      option3.addEventListener('focus', speechifyElem);
      theButton.addEventListener('focus', speechifyElem);
      theImage.addEventListener('focus', speechifyElem);

      var toSpeak = new SpeechSynthesisUtterance('Question: What does the below image depict?');
      window.speechSynthesis.speak(toSpeak);
    }
  },
];

var runner = ActivityRunner();
var main = document.querySelector('main.wrapper');
var instructions = document.createElement('h2');
var showingMouseError = false;
var cursorX = document.documentElement.clientWidth / 2;
var cursorY = document.documentElement.clientHeight / 2;
var cursor, theTitle, option1, option2, option3, theButton, theImage;

var mouseMoveError = function () {
  if (!showingMouseError) {
    showingMouseError = true;

    runner.send('failure', function () {
      showingMouseError = false;
    });
  }
};

var getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var bigCursorMove = function (e) {
  cursorX += getRandomIntInclusive(0, e.movementX * getRandomIntInclusive(1, 27));
  cursorY += getRandomIntInclusive(0, e.movementY * getRandomIntInclusive(1, 36));

  if (cursorX > document.documentElement.clientWidth) cursorX = 0;
  if (cursorY > document.documentElement.clientHeight) cursorY = 0;
  if (cursorX < 0) cursorX = document.documentElement.clientWidth;
  if (cursorY < 0) cursorY = document.documentElement.clientHeight;

  cursor.style.top = cursorY + 'px';
  cursor.style.left = cursorX + 'px';
};

var bigCursorClick = function (e) {
  var rectSelection = cursor.getBoundingClientRect();
  var elems = [
    document.querySelector('#question-choices li:nth-child(1) input'),
    document.querySelector('#question-choices li:nth-child(1) label'),
    document.querySelector('#question-choices li:nth-child(2) input'),
    document.querySelector('#question-choices li:nth-child(2) label'),
    document.querySelector('#question-choices li:nth-child(3) input'),
    document.querySelector('#question-choices li:nth-child(3) label'),
    document.querySelector('#question-choices li:nth-child(4) input'),
    document.querySelector('#question-choices li:nth-child(4) label'),
    document.querySelector('#question-form button[type="submit"]'),
  ];

  elems.forEach(function(elem) {
    var rect = elem.getBoundingClientRect();

    if(rect.top + rect.height > rectSelection.top
    && rect.left + rect.width > rectSelection.left
    && rect.bottom - rect.height < rectSelection.top + 10
    && rect.right - rect.width < rectSelection.left + 10) {
      elem.click();
    }
  });
};

var speechifyElem = function (e) {
  var toSpeak = new SpeechSynthesisUtterance(e.target.dataset.speak);
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(toSpeak);
};

runner.listen('end', function () {
  window.speechSynthesis.cancel();
  theTitle.removeEventListener('focus', speechifyElem);
  option1.removeEventListener('focus', speechifyElem);
  option2.removeEventListener('focus', speechifyElem);
  option3.removeEventListener('focus', speechifyElem);
  theButton.removeEventListener('focus', speechifyElem);
  theImage.removeEventListener('focus', speechifyElem);
  instructions.style.display = 'none';
});

MultipleChoice(runner, questions);
instructions.className += ' instructions';
