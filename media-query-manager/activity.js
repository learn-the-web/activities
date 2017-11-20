var tickHandler = function () {
  var viewportW = document.documentElement.clientWidth;
  var mqRangeStyles = getComputedStyle(document.querySelector('.mq-range'));
  var mqRangeWidth = parseInt(mqRangeStyles.width.replace(/px/, ''), 10);
  var mqRangeLeft = parseInt(mqRangeStyles.left.replace(/px/, ''), 10);
  var mqRangeBorder = parseInt(mqRangeStyles.borderRightWidth.replace(/px/, ''), 10);
  var minW = mqRangeWidth + mqRangeLeft - mqRangeBorder;
  var maxW = mqRangeWidth + mqRangeLeft;

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

var timedCallback = TimedCallback(ActivityRunner(), questions);
var qna = document.getElementById('questions-answers');
var minLeft = 10000 - 240;
var maxLeft = 10000 - 1200;
var totalQuestions = questions.length;

timedCallback.setTickTime(100);
timedCallback.setStartHandler(function () {
  questions.forEach(function (item, index) {
    var div = document.createElement('div');
    var mqRange = document.createElement('div');

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
