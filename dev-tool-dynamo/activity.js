var questions = [
  {
    question: 'Inspect the element below and make the child `<div>` visible.',
    contentGroup: 'question-1',
    onTick: function () {
      if (getComputedStyle(document.getElementById('question-1-hidden-div')).display !== 'none') return true;
    }
  },
  {
    question: 'Order the numbers numerically.',
    contentGroup: 'question-2',
    onTick: function () {
      var lis = document.getElementById('question-2-nums').getElementsByTagName('li');
      var totalLis = lis.length;
      var possible = [];

      for (var i = 0; i < totalLis; i++) {
        possible.push(lis[i].innerHTML.replace(/[^\d]/, ''))
      }

      if (possible[0] == 1 && possible[1] == 2 && possible[2] == 3 && possible[3] == 4 && possible[4] == 5) return true;
    }
  },
  {
    question: 'Add a border.',
    contentGroup: 'question-3',
    onTick: function () {
      if (getComputedStyle(document.getElementById('question-3-box')).borderTopWidth !== '0px') return true;
    }
  },
  {
    question: 'Make both the background colours the same.',
    contentGroup: 'question-4',
    onTick: function () {
      var leftBg = getComputedStyle(document.getElementById('question-4-left')).backgroundColor;
      var rightBg = getComputedStyle(document.getElementById('question-4-right')).backgroundColor;

      if (leftBg == rightBg) return true;
    }
  },
  {
    question: 'Make the rear element come to the front.',
    contentGroup: 'question-5',
    onTick: function () {
      var backZ = parseInt(getComputedStyle(document.getElementById('question-5-back')).zIndex, 10);
      var frontZ = parseInt(getComputedStyle(document.getElementById('question-5-front')).zIndex, 10);

      if (backZ > frontZ) return true;
    }
  },
  {
    question: 'Make both shapes look identical.',
    contentGroup: 'question-6',
    onTick: function () {
      var leftStyle = getComputedStyle(document.getElementById('question-6-left'))
      var rightStyle = getComputedStyle(document.getElementById('question-6-right'))

      if (
        leftStyle.width == rightStyle.width
        && leftStyle.height == rightStyle.height
        && leftStyle.background == rightStyle.background
        && leftStyle.borderRadius == rightStyle.borderRadius
        && leftStyle.border == rightStyle.border
        && leftStyle.transform == rightStyle.transform
        && leftStyle.opacity == rightStyle.opacity
        && leftStyle.boxShadow == rightStyle.boxShadow
      ) return true;
    }
  },
  {
    question: 'Align the arrow’s point to the guides.',
    contentGroup: 'question-7',
    onTick: function () {
      var vertL = document.getElementById('question-7-vert').offsetLeft;
      var horzT = document.getElementById('question-7-horz').offsetTop;
      var arrow = document.getElementById('question-7-arrow');
      var arrowL = arrow.offsetLeft;
      var arrowT = arrow.offsetTop;

      if (vertL == arrowL && horzT == arrowT) return true;
    }
  },
  {
    question: 'Align the circle’s centre to the guides.',
    contentGroup: 'question-8',
    onTick: function () {
      var vertL = document.getElementById('question-8-vert').offsetLeft;
      var horzT = document.getElementById('question-8-horz').offsetTop;
      var circle = document.getElementById('question-8-circle');
      var circleL = circle.offsetLeft;
      var circleT = circle.offsetTop;

      if (vertL - 124 == circleL && horzT - 123 == circleT) return true;
    }
  },
  {
    question: 'Type the word that is commented out at the top of the `activity.css` file.',
    contentGroup: 'question-9',
    onStart: function () {
      var question9Form = document.getElementById('question-9-form');

      question9FormSubmitted = false;
      question9Form.addEventListener('submit', function (e) {
        e.preventDefault();
        question9FormSubmitted = true;
      });
      question9Form.reset();
    },
    onTick: function () {
      var word = document.getElementById('word').value.trim().toLowerCase();

      if (question9FormSubmitted) {
        question9FormSubmitted = false;

        if (word == 'platypus') {
          return true;
        } else {
          return false;
        }
      }
    }
  },
  {
    question: 'A new image was downloaded; what’s its file size?',
    contentGroup: 'question-10',
    onStart: function () {
      var question10Form = document.getElementById('question-10-form');
      var img = document.createElement('img');

      question10FormSubmitted = false;
      question10Form.addEventListener('submit', function (e) {
        e.preventDefault();
        question10FormSubmitted = true;
      });
      question10Form.reset();

      img.src = 'new-image.png?' + Date.now();
      img.setAttribute('hidden', true);
      document.body.appendChild(img);
    },
    onTick: function () {
      var filesize = parseFloat(document.getElementById('size').value.trim());

      if (question10FormSubmitted) {
        question10FormSubmitted = false;

        if (filesize >= 2.5 && filesize <= 3.3) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
];

var question9FormSubmitted = false;
var question10FormSubmitted = false;
var timedCallback = TimedCallback(ActivityRunner(), questions);
