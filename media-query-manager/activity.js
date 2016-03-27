var tickHandler = function () {
  var
    viewportW = document.documentElement.clientWidth,
    mqRangeStyles = getComputedStyle(document.querySelector('.mq-range')),
    mqRangeWidth = parseInt(mqRangeStyles.width.replace(/px/, ''), 10),
    mqRangeLeft = parseInt(mqRangeStyles.left.replace(/px/, ''), 10),
    mqRangeBorder = parseInt(mqRangeStyles.borderRightWidth.replace(/px/, ''), 10),
    minW = mqRangeWidth + mqRangeLeft - mqRangeBorder,
    maxW = mqRangeWidth + mqRangeLeft
    ;

  if (viewportW >= minW && viewportW < maxW) return true;
};

var questions = [];

for (var i = 1; i <= 20; i++) {
  questions.push({
    question: 'Resize the viewport to within the range.',
    contentGroup: 'question-' + i,
    onTick: tickHandler
  });
}

var
  timedCallback = TimedCallback(ActivityRunner(), questions),
  qna = document.getElementById('questions-answers'),
  minLeft = 10000 - 75,
  maxLeft = 10000 - 1200,
  totalQuestions = questions.length;
  ;

timedCallback.setTickTime(100);
timedCallback.setStartHandler(function () {
  questions.forEach(function (item, index) {
    var
      div = document.createElement('div'),
      mqRange = document.createElement('div')
      ;

    div.dataset.contentGroup = 'question-' + (index + 1);
    mqRange.classList.add('mq-range');
    mqRange.style.left = '-' + (Math.floor(Math.random() * (maxLeft - minLeft + 1)) + minLeft) + 'px';

    if (index < totalQuestions - 1) {
      mqRange.style.borderWidth = (100 / (index + 1)) + 'px';
    } else {
      mqRange.style.borderWidth = '1px';
    }

    div.appendChild(mqRange);
    qna.appendChild(div);
  });
});
