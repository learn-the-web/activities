var questions = [
  {
    question: 'Which syntax is correct for applying multiple transforms?',
    correct: 1,
    choices: [
      '`transform: rotate(42deg), scale(1.2);`',
      '`transform: rotate(42deg) scale(1.2);`',
      '`transform: rotate(42deg); transform: scale(1.2);`',
    ]
  },
  {
    question: 'Which effect, `transition` or `animation`, can play by itself?',
    correct: 1,
    choices: [
      '`transition`',
      '`animation`',
    ]
  },
  {
    question: 'How many keyframes does a transition have?',
    correct: 1,
    choices: [
      '0 keyframes',
      '2 keyframes',
      'As many as defined in `@keyframes`',
    ]
  },
  {
    question: 'Which syntax is correct for transitioning different properties at different speeds?',
    correct: 0,
    choices: [
      '`transition: color .5s linear, background-color 1s linear;`',
      '`transition: color .5s linear; transition: background-color 1s linear;`',
      '`transition: color/background-color .5s/1s linear;`',
    ]
  },
  {
    question: 'Which of these is not a valid filter effect?',
    correct: 3,
    choices: [
      '`grayscale()`',
      '`drop-shadow()`',
      '`hue-rotate()`',
      '`noise()`',
      '`saturate()`',
      '`invert()`',
    ]
  },
  {
    question: 'What does the animation keyword `forwards` do?',
    correct: 2,
    choices: [
      'Plays the animation forwards through the `@keyframes`',
      'Plays the animation forwards in time',
      'Keeps the elements in their final keyframe when the animation completes',
    ]
  },
  {
    question: 'What do the three possible numbers in an animation represent?',
    correct: 0,
    extras: 'question-7',
    choices: [
      'Duration, delay, iteration count',
      'Delay, duration, iteration count',
      'Duration, iteration count, delay',
    ]
  },
  {
    question: '`transition` or `animation`?',
    correct: 0,
    extras: 'question-8',
    choices: [
      '`transition`',
      '`animation`',
    ]
  },
  {
    question: '`transition` or `animation`?',
    correct: 1,
    extras: 'question-9',
    choices: [
      '`transition`',
      '`animation`',
    ]
  },
  {
    question: '`transition` or `animation`?',
    correct: 1,
    extras: 'question-10',
    choices: [
      '`transition`',
      '`animation`',
    ]
  },
];

MultipleChoice(ActivityRunner(), questions);
