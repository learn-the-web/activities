var questions = [
  {
    question: 'HTTPS:',
    correct: 1,
    choices: [
      'Hypertext Transfer Point Security',
      'Hypertext Transfer Protocol Secure',
      'Hypertension Transfer Personnel System',
    ]
  },
  {
    question: 'HTTPS helps protect against…',
    correct: 3,
    choices: [
      'Your ISP (Bell, Rogers) seeing what pages you visit on websites',
      'People on the network seeing what information you submit',
      'Malicious entities changing pages while in transit from the server',
      'All of the above',
    ]
  },
  {
    question: 'Signing into websites without HTTPS means…',
    correct: 3,
    choices: [
      'Your password is open and visible to any computer on the same network',
      'Your password is open and visible to your ISP (Bell, Rogers)',
      'Your password is open and visible to any computers in between you and the website’s server',
      'All of the above',
    ]
  },
  {
    question: 'Emails are secure from snooping.',
    correct: 5,
    choices: [
      'Nope',
      'Negative.',
      'Absolutely not!',
      'Quite the opposite, in fact',
      ['<i lang="tlh"></i>'],
      'All of the above',
    ]
  },
  {
    question: 'Sending passwords over email is like…',
    correct: 0,
    choices: [
      'Shouting to a friend on the other side of a room full of people',
      'Whispering to your friend’s ear in a sound-proof, locked room',
    ]
  },
  {
    question: 'Which password is the most secure?',
    correct: 2,
    choices: [
      'password',
      '66T}Bu',
      'betide-linnet-grotto-boss-offense-stench',
    ]
  },
  {
    question: 'Two-factor authentication helps security by requiring you to put in a temporary password you have on you alongside the password in your memory.',
    correct: 0,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'The best authentication system has…',
    correct: 6,
    choices: [
      'Something you know',
      'Something you have',
      'Something you are',
      'Something you know & something you have',
      'Something you know & something you are',
      'Something you have & something you are',
      'Something you know, something you have & something you are',
    ]
  },
  {
    question: 'The `target="_blank"` attribute shouldn’t be used because:',
    correct: 2,
    choices: [
      'It allows the new window to control the window that opened it',
      'Gives third-party pages complete access to the browser window showing your website',
      'All of the above',
    ]
  },
  {
    question: 'Social media buttons track you by…',
    correct: 3,
    choices: [
      'Loading content from their domains on every website that has a social media button',
      'Remembering every website you browse with social media buttons',
      'Remembering the geographic location where you post and browse',
      'All of the above',
    ]
  },
];

MultipleChoice(ActivityRunner(), questions);
