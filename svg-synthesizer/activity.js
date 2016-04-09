var svgSetup = function (val) {
  var
    svg = document.createElement('svg'),
    elem = document.createDocumentFragment()
    ;

  svg.innerHTML = val;
  elem.appendChild(svg);

  return elem;
};

var questions = [
  {
    question: 'Make circle: center `(50,50)`; radius: `100`',
    incorrect: document.querySelector('[data-question="1"]').value,
    correct: function (val) {
      var elem = svgSetup(val);
      var circle = elem.querySelector('circle');

      if (!circle) return false;
      if (circle.getAttribute('cx') != 50) return false;
      if (circle.getAttribute('cy') != 50) return false;
      if (circle.getAttribute('r') != 100) return false;

      return true;
    }
  },
  {
    question: 'Change the circle’s colour',
    incorrect: document.querySelector('[data-question="2"]').value,
    correct: function (val) {
      var elem = svgSetup(val);
      var circle = elem.querySelector('circle');

      if (!circle) return false;
      if (!circle.getAttribute('fill')) return false;

      return true;
    }
  },
  {
    question: 'Draw a rectangle that’s 100×50',
    incorrect: document.querySelector('[data-question="3"]').value,
    correct: function (val) {
      var elem = svgSetup(val);
      var rect = elem.querySelector('rect');

      if (!rect) return false;
      if (rect.getAttribute('width') != 100) return false;
      if (rect.getAttribute('height') != 50) return false;

      return true;
    }
  },
  {
    question: 'Add a stroke to the rectangle',
    incorrect: document.querySelector('[data-question="4"]').value,
    correct: function (val) {
      var elem = svgSetup(val);
      var rect = elem.querySelector('rect');

      if (!rect) return false;
      if (!rect.getAttribute('stroke')) return false;

      return true;
    }
  },
  {
    question: 'Round the rectangle’s corners',
    incorrect: document.querySelector('[data-question="5"]').value,
    correct: function (val) {
      var elem = svgSetup(val);
      var rect = elem.querySelector('rect');

      if (!rect) return false;
      if (!rect.getAttribute('rx')) return false;
      if (!rect.getAttribute('ry')) return false;

      return true;
    }
  },
  {
    question: 'Draw a line from `(0,0)` to `(100,100)`',
    incorrect: document.querySelector('[data-question="6"]').value,
    correct: function (val) {
      var elem = svgSetup(val);
      var line = elem.querySelector('line');

      if (!line) return false;
      if (line.getAttribute('x1') != 0) return false;
      if (line.getAttribute('y1') != 0) return false;
      if (line.getAttribute('x2') != 100) return false;
      if (line.getAttribute('y2') != 100) return false;

      return true;
    }
  },
  {
    question: 'Group these paths together',
    incorrect: document.querySelector('[data-question="7"]').value,
    correct: function (val) {
      var elem = svgSetup(val);
      var g = elem.querySelector('g');
      var paths = g.querySelectorAll('path');

      if (!g) return false;
      if (!paths) return false;
      if (paths.length != 3) return false;

      return true;
    }
  },
  {
    question: 'Add a class to the group',
    incorrect: document.querySelector('[data-question="8"]').value,
    correct: function (val) {
      var elem = svgSetup(val);
      var g = elem.querySelector('g');

      if (!g) return false;
      if (g.classList.length <= 0) return false;

      return true;
    }
  },
  {
    question: 'Put the word `Awesome!` into SVG text',
    incorrect: document.querySelector('[data-question="9"]').value,
    correct: function (val) {
      var elem = svgSetup(val);
      var text = elem.querySelector('text');

      if (!text) return false;
      if (text.innerHTML != 'Awesome!') return false;

      return true;
    }
  },
  {
    question: 'Fix the indentation',
    incorrect: document.querySelector('[data-question="10"]').value,
    correct: document.querySelector('[data-answer="10"]').value
  },
];

CodeCompare(ActivityRunner(), questions);
