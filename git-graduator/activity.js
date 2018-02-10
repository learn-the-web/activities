var questions = [
  {
    question: 'Why use branches when coding on teams?',
    correct: 3,
    choices: [
      'To help prevent code overwrites',
      'To track individual progress',
      'To separate code into smaller chunks',
      'All of the above',
    ]
  },
  {
    question: 'Why should every branch have an associated Issue?',
    correct: 1,
    choices: [
      'There doesn’t need to be an Issue for every branch',
      'Because each Issue and branch represent a single task',
      'Because it’s impossible to make branch without an Issue',
    ]
  },
  {
    question: 'Why protect the `master` branch when working on teams?',
    correct: 2,
    choices: [
      'To completely prevent code overwrites',
      'Because multiple people can’t commit to the same branch',
      'So the live website is always in perfect condition',
    ]
  },
  {
    question: 'Should branches be long- or short-running?',
    correct: 1,
    choices: [
      'Long-running: because each person should have their own branch',
      'Short-running: because they represent small features & changes',
    ]
  },
  {
    question: 'How much code should be written in a branch?',
    correct: 0,
    choices: [
      'The smallest chunk of code to solve a single problem',
      'A few chunks of code solving different small problems',
      'Lots of different code bits solving many problems',
    ]
  },
  {
    question: 'What’s the purpose of create a pull request?',
    correct: 3,
    choices: [
      'Track history & progress',
      'Get code reviewed by teammates',
      'As a gate-keeper to prevent code going into the live `master` branch',
      'All of the above'
    ]
  },
  {
    question: 'Do you create a new branch to fix problems if the code review is rejected?',
    correct: 0,
    choices: [
      'No, an active pull request & branch can still be committed to',
      'Yes, if the code is rejected a new pull request must be opened',
    ]
  },
  {
    question: 'Do branches need to be kept after the pull requests are approved?',
    correct: 0,
    choices: [
      'Nope, when the feature is finalized & merged the branch is useless',
      'Yep, if the branch is deleted all that code will be lost forever',
    ]
  },
  {
    question: 'When will Git automatically merge code into the `master` branch?',
    correct: 1,
    choices: [
      'Git will always automatically merge',
      'When that same line of code was not changed by another person',
      'When nobody else has made any commits'
    ]
  },
  {
    question: 'How would you solve this conflicted piece of code?',
    extras: 'question-10',
    correct: 1,
    choices: [
      'Do nothing',
      'Choose the correct code bit & delete the separators',
      'Choose the correct code bit & leave the separators',
    ]
  }
];

MultipleChoice(ActivityRunner(), questions);
