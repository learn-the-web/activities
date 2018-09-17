var questions = [];
var incorrectSamples = document.querySelectorAll('[data-question]');
var i = 0, t = incorrectSamples.length;

for (i; i<t; i++) {
  var id = incorrectSamples[i].getAttribute('data-question');

  questions.push({
    question: 'Correct the indentation issues.',
    incorrect: incorrectSamples[i].innerHTML,
    correct: document.querySelector('[data-answer="' + id + '"]').innerHTML
  });
}

var ac = ActivityRunner();

ac.allowReset();
CodeCompare(ac, questions);
