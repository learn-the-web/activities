var questions = [
  {
    question: 'Why won’t this code run?',
    extras: 'question-1',
    correct: 2,
    choices: [
      'You can’t have exclamations in strings',
      'There’s nothing to do',
      'The `alert()` function is spelled wrong',
      'A semicolon is missing'
    ]
  },
  {
    question: 'Why won’t this code run?',
    extras: 'question-2',
    correct: 1,
    choices: [
      'You can only use single quotes',
      'The quotes don’t match',
      'There’s nothing to do',
      'The `alert()` function is spelled wrong',
      'A semicolon is missing'
    ]
  },
  {
    question: 'Why won’t this code run?',
    extras: 'question-3',
    correct: 1,
    choices: [
      'The `var` keyword is spelled wrong',
      'There’s a spacing missing between `var` & `dino`',
      'There shouldn’t be a space between `=` & `\'Apatosaurus\'`',
      'A semicolon is missing'
    ]
  },
  {
    question: 'Why won’t this code run?',
    extras: 'question-4',
    correct: 2,
    choices: [
      'The `Apatosaurus` variable isn’t defined',
      '`Apatosaurus` should be in quotes',
      'Any of the above',
      'None of the above'
    ]
  },
  {
    question: 'Why is “58101” written instead of “159”?',
    extras: 'question-5',
    correct: 0,
    choices: [
      'Numbers shouldn’t be surround in quotes',
      'Plus is used for combining strings not addition',
      'You can perform math in `document.write()`'
    ]
  },
  {
    question: 'Why won’t “Brontosaurus” be written out?',
    extras: 'question-6',
    correct: 2,
    choices: [
      'A bracket is missing after `document.write()`',
      'A semicolon is missing in the loop',
      'The loop never runs'
    ]
  },
  {
    question: 'Why won’t “Brontosaurus” be written out?',
    extras: 'question-7',
    correct: 0,
    choices: [
      'A bracket is missing after `document.write()`',
      'A semicolon is missing in the loop',
      'The loop never runs'
    ]
  },
  {
    question: 'Why won’t “Fly” be written out?',
    extras: 'question-8',
    correct: 2,
    choices: [
      'Because `dino` is `Pteranodon` not `Velociraptor`',
      'Because there should be two equals for comparison',
      'Because the if statement is missing round brackets',
      'Because the if statement is missing curly braces',
      'A semicolon is missing'
    ]
  },
  {
    question: 'Why won’t “Fly” be written out?',
    extras: 'question-9',
    correct: 1,
    choices: [
      'Because `dino` is `Pteranodon` not `Velociraptor`',
      'Because there should be two equals for comparison',
      'Because the if statement is missing round brackets',
      'Because the if statement is missing curly braces',
      'A semicolon is missing'
    ]
  },
  {
    question: 'Why will both “Three horns” & “Amoured plates” be written out?',
    extras: 'question-10',
    correct: 2,
    choices: [
      'Because a triceratops has both those things',
      'Because the case statements should have curly braces',
      'Because the `break` clause is missing before “Stegosaurus”',
      'Because the switch statement needs a double-equals comparison'
    ]
  }
];

MultipleChoice(ActivityRunner(), questions);
