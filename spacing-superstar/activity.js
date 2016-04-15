var
  questions = [],
  incorrectSamples = document.querySelectorAll('[data-question]'),
  i = 0, t = incorrectSamples.length
;

for (i; i<t; i++) {
  var id = incorrectSamples[i].getAttribute('data-question');

  questions.push({
    question: 'Correct the spacing & indentation issues.',
    incorrect: incorrectSamples[i].innerText,
    correct: document.querySelector('[data-answer="' + id + '"]').innerText,
    lang: 'javascript'
  });
}

CodeCompare(ActivityRunner(), questions);
