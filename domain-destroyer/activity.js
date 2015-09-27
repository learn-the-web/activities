var questions = [
  {
    question: 'What does the acronym DNS mean:',
    correct: 0,
    choices: [
      'Domain Name System',
      'Domain Name Scheme',
      'Domain Name Space',
      'Domain Name Status'
    ]
  },
  {
    question: 'What’s the purpose of a domain name?',
    correct: 3,
    choices: [
      'To be a human readable representation of a website.',
      'To be a human readable representation of a computer.',
      'To be a human readable representation of an IP address.',
      'All of the above.'
    ]
  },
  {
    question: 'Which of these is not a valid IP address:',
    correct: 3,
    choices: [
      '10.0.1.0',
      '128.0.0.1',
      '2001:db8::ff00:42:8329',
      '192.168.1.1.1'
    ]
  },
  {
    question: 'Looking at this domain, “learn-the-web.algonquindesign.ca”, what part is the TLD:',
    correct: 2,
    choices: [
      '“learn-the-web”',
      '“algonquindesign”',
      '“ca”'
    ]
  },
  {
    question: 'What’s the purpose of a registrar, like Hover?',
    correct: 2,
    choices: [
      'A place to get an e-mail address.',
      'A place to host a website.',
      'A place to lease a domain and add it to the DNS.',
      'All of the above.'
    ]
  },
  {
    question: 'What’s the purpose of an “A” record?',
    correct: 1,
    choices: [
      'To point to the domain of the host.',
      'To point to the IP address of the host.',
      'To point to the domain of the registrar.',
      'All of the above.'
    ]
  },
  {
    question: 'What’s the purpose of a “MX” record?',
    correct: 1,
    choices: [
      'To point to the master exchanger servers.',
      'To point to the mail exchanger servers.',
      'To point to the management exabyte server.',
      'Any of the above.'
    ]
  },
  {
    question: 'What’s the purpose of a content delivery network, like CloudFlare?',
    correct: 3,
    choices: [
      'To increase website performance.',
      'To distribute assets around the world.',
      'To decrease the latency between a user and the host.',
      'All of the above.',
      'None of the above.'
    ]
  },
  {
    question: 'Here’s some DNS records records, what server has more authoritative domain information?',
    extras: 'question-9',
    correct: 1,
    choices: [
      '192.168.1.1',
      'vera.ns.cloudflare.com',
      'in1-smtp.messagingengine.com',
      'algonquindesign.ca'
    ]
  },
  {
    question: 'Here’s a trace route for a domain, what’s the IP address of the host?',
    extras: 'question-10',
    correct: 3,
    choices: [
      '10.0.1.1',
      '64.230.200.134',
      '198.32.118.206',
      '104.28.13.18'
    ]
  }
];

MultipleChoice(ActivityRunner(), questions);
