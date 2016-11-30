var questions = [
  {
    question: '200:',
    correct: 0,
    choices: [
      'OK',
      'Good',
      'Alright',
    ]
  },
  {
    question: '204:',
    correct: 1,
    choices: [
      'Empty',
      'No content',
      'Nothing found',
    ]
  },
  {
    question: '301:',
    correct: 2,
    choices: [
      'Permanent redirection',
      'Permanently moved',
      'Moved permanently',
    ]
  },
  {
    question: '304:',
    correct: 1,
    choices: [
      'Nothing new',
      'Not modified',
      'Already cached',
    ]
  },
  {
    question: '307:',
    correct: 2,
    choices: [
      'Moved temporarily',
      'Temporarily moved',
      'Temporary redirection',
    ]
  },
  {
    question: '401:',
    correct: 1,
    choices: [
      'Not allowed',
      'Unauthorized',
      'Restricted access',
    ]
  },
  {
    question: '402:',
    correct: 1,
    choices: [
      'Conflict',
      'Payment required',
      'Bandwidth exceeded',
    ]
  },
  {
    question: '404:',
    correct: 0,
    choices: [
      'Not found',
      'Move along',
      'Page deleted',
    ]
  },
  {
    question: '406:',
    correct: 0,
    choices: [
      'Not acceptable',
      'User input wrong',
      'Form validation error',
    ]
  },
  {
    question: '429:',
    correct: 1,
    choices: [
      'Too many users',
      'Too many requests',
      'Website overloaded',
    ]
  },
  {
    question: '500:',
    correct: 1,
    choices: [
      'External server error',
      'Internal server error',
      'All server error',
    ]
  },
];

MultipleChoice(ActivityRunner(), questions);
