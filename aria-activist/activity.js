var questions = [
  {
    question: 'ARIA stands for:',
    correct: 1,
    choices: [
      'Accessibility Right In Authority',
      'Accessible Rich Internet Applications',
      'Accessibility (En)Riches Individual Anybodies',
    ]
  },
  {
    question: 'Does ARIA solve all accessibility problems?',
    correct: 3,
    choices: [
      'No.',
      'Nope.',
      'Negative.',
      'Most definitely not.',
    ]
  },
  {
    question: 'ARIA provides lots more benefits when combined with this programming language:',
    correct: 2,
    choices: [
      'CSS',
      'PHP',
      'Javascript',
    ]
  },
  {
    question: 'How many `role="navigation"` elements can be used on the page?',
    correct: 0,
    choices: [
      '1',
      '2',
      'As many as you want',
    ]
  },
  {
    question: 'Why use the `aria-label` attribute?',
    correct: 1,
    choices: [
      'Because it’s more accessible than `alt=""`',
      'Because it allows an accessible piece of text to be announced to the user',
      'Because it’s fancy',
    ]
  },
  {
    question: 'Why use `aria-hidden="true"` when we’re also using the `hidden` attribute?',
    correct: 0,
    choices: [
      'Best compatibility with accessibility tools',
      'Don’t—just use `hidden`',
      'Because it can be controlled by Javascript',
    ]
  },
  {
    question: 'What benefit does `aria-details` give us over the standard `alt` attribute?',
    correct: 3,
    choices: [
      'Allows us to use full HTML tags to describe something',
      'It isn’t tied just to images',
      'Allows the same thing to describe multiple items on the page',
      'All of the above',
    ]
  },
  {
    question: 'Which is better to use: `<button>` or `role="button"`?',
    correct: 0,
    choices: [
      '`<button>` because it already has built-in accessibility support',
      '`role="button"` because it’s newer technology',
      'Neither, use something else',
    ]
  },
  {
    question: 'The `aria-controls` attribute is used to define:',
    correct: 2,
    choices: [
      'The element that will get focused by the keyboard',
      'The element that will is owned by another element on the page',
      'The element on the page that this element has ownership over',
    ]
  },
  {
    question: 'The `aria-selected` attribute is used to define when an element is:',
    correct: 1,
    choices: [
      'Currently focused by the keyboard or not',
      'Currently enabled and chosen or not',
      'Currently visible or hidden',
    ]
  },
];

MultipleChoice(ActivityRunner(), questions);
