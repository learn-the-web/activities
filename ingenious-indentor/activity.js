var
  questions = [],
  incorrectSamples = document.querySelectorAll('[data-question]'),
  i = 0, t = incorrectSamples.length
;

for (i; i<t; i++) {
  var id = incorrectSamples[i].getAttribute('data-question');

  questions.push({
    incorrect: incorrectSamples[i].innerHTML,
    correct: document.querySelector('[data-answer="' + id + '"]').innerHTML
  });
}

CodeCompare(ActivityRunner(), questions);
