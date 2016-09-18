var questions = [
  {
    question: 'In fractions, how wide is each grid unit?',
    inputGroup: 'question-1',
    inputs: {
      'q1-u1': /1[\-\/]2|½/,
      'q1-u2': /1[\-\/]2|½/,
    }
  },
  {
    question: 'In fractions, how wide is each grid unit?',
    inputGroup: 'question-2',
    inputs: {
      'q2-u1': /1[\-\/]3|⅓/,
      'q2-u2': /1[\-\/]3|⅓/,
      'q2-u3': /1[\-\/]3|⅓/,
    }
  },
  {
    question: 'In fractions, how wide is each grid unit?',
    inputGroup: 'question-3',
    inputs: {
      'q3-u1': '1',
    }
  },
  {
    question: 'In fractions, how wide is each grid unit?',
    inputGroup: 'question-4',
    inputs: {
      'q4-u1': /1[\-\/]3|⅓/,
      'q4-u2': /2[\-\/]3|⅔/,
    }
  },
  {
    question: 'In fractions, how wide is each grid unit?',
    inputGroup: 'question-5',
    inputs: {
      'q5-u1': /1[\-\/]4|¼/,
      'q5-u2': /1[\-\/]2|½/,
      'q5-u3': /1[\-\/]4|¼/,
    }
  },
  {
    question: 'In fractions, how wide is each grid unit?',
    inputGroup: 'question-6',
    inputs: {
      'q6-u1': /1[\-\/]5|⅕/,
      'q6-u2': /4[\-\/]5|⅘/,
    }
  },
  {
    question: 'In fractions, how wide is each grid unit?',
    inputGroup: 'question-7',
    inputs: {
      'q7-u1': /1[\-\/]2|½/,
      'q7-u2': /1[\-\/]2|½/,
    }
  },
  {
    question: 'In fractions, how wide is each grid unit?',
    inputGroup: 'question-8',
    inputs: {
      'q8-u1': /1[\-\/]6|⅙/,
      'q8-u2': /2[\-\/]3|⅔/,
      'q8-u3': /1[\-\/]6|⅙/,
    }
  },
  {
    question: 'In fractions, how wide is each grid unit?',
    inputGroup: 'question-9',
    inputs: {
      'q9-u1': /1[\-\/]2|½/,
      'q9-u2': /1[\-\/]6|⅙/,
      'q9-u3': /1[\-\/]3|⅓/,
    }
  },
  {
    question: 'In fractions, how wide is each grid unit?',
    inputGroup: 'question-10',
    inputs: {
      'q10-u1': /1[\-\/]8|⅛/,
      'q10-u2': /1[\-\/]2|½/,
      'q10-u3': /1[\-\/]4|¼/,
      'q10-u4': /1[\-\/]8|⅛/,
    }
  }
];

FormValidator(ActivityRunner(), questions);
