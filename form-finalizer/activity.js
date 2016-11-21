var questions = [
  {
    question: 'Does every form field need an associated label?',
    correct: 4,
    choices: [
      'Yes',
      'Absolutely yes!',
      '100%',
      'Totes def',
      'All of the above',
    ]
  },
  {
    question: 'Which is the most accessible way to label a form field?',
    correct: 2,
    choices: [
      function (r) { return r.e('<input placeholder="Your name">'); },
      function (r) { return r.e('<label>') + '<br>' + r.e('  Your name') + '<br>' + r.e('  <input>') + '<br>' + r.e('</label>'); },
      function (r) { return r.e('<label for="name">Your name</label>') + '<br>' + r.e('<input id="name">'); },
    ]
  },
  {
    question: 'Which form field will show a calendar picker?',
    correct: 2,
    choices: [
      function (r) { return r.e('<input type="calendar">'); },
      function (r) { return r.e('<input type="cal">'); },
      function (r) { return r.e('<input type="date">'); },
    ]
  },
  {
    question: 'Which form field will hide the characters a user types?',
    correct: 2,
    choices: [
      function (r) { return r.e('<input type="hidden">'); },
      function (r) { return r.e('<input type="bullets">'); },
      function (r) { return r.e('<input type="password">'); },
    ]
  },
  {
    question: 'Which of these radio button groups will work properly?',
    correct: 0,
    choices: [
      function (r) { return r.e('<input type="radio" id="dino" name="fav">') + '<br>' + r.e('<label for="dino">Dinosaurs</label>') + '<br><br>' + r.e('<input type="radio" id="pter" name="fav">') + '<br>' + r.e('<label for="pter">Pterosaurs</label>'); },
      function (r) { return r.e('<input type="radio" id="dino" name="dino">') + '<br>' + r.e('<label for="dino">Dinosaurs</label>') + '<br><br>' + r.e('<input type="radio" id="pter" name="pter">') + '<br>' + r.e('<label for="pter">Pterosaurs</label>'); },
      function (r) { return r.e('<input type="radio" id="dino" name="fav-dino">') + '<br>' + r.e('<label for="dino">Dinosaurs</label>') + '<br><br>' + r.e('<input type="radio" id="pter" name="fav-pter">') + '<br>' + r.e('<label for="pter">Pterosaurs</label>'); },
    ]
  },
  {
    question: 'Which element is used to denote a new entry in a drop-down menu?',
    correct: 1,
    choices: [
      function (r) { return r.e('<select>') + '<br>' + r.e('  <opt>…</opt>') + '<br>' + r.e('</select>'); },
      function (r) { return r.e('<select>') + '<br>' + r.e('  <option>…</option>') + '<br>' + r.e('</select>'); },
      function (r) { return r.e('<select>') + '<br>' + r.e('  <li>…</li>') + '<br>' + r.e('</select>'); },
    ]
  },
  {
    question: 'The `<fieldset>` tag groups…',
    correct: 1,
    choices: [
      'Just `radio` & `checkbox` inputs.',
      'Similar form fields together.',
      'All form fields together.',
    ]
  },
  {
    question: 'What element is needed immediately inside a `<fieldset>`?',
    correct: 2,
    choices: [
      function (r) { return r.e('<caption>…</caption>'); },
      function (r) { return r.e('<details>…</details>'); },
      function (r) { return r.e('<legend>…</legend>'); },
    ]
  },
  {
    question: 'Every form needs to have one of these:',
    correct: 1,
    choices: [
      function (r) { return r.e('<input type="submit" value="Send">'); },
      function (r) { return r.e('<button type="submit">Send</button>'); },
      function (r) { return r.e('<input type="reset" value="Reset">'); },
      function (r) { return r.e('<button type="reset">Reset</button>'); },
    ]
  },
  {
    question: 'The `action="…"` attribute is used to:',
    correct: 1,
    choices: [
      'Denote what pieces of the form’s information will be sent.',
      'Denote where the form’s information will be sent.',
      'Denote how the form’s information will be sent.',
    ]
  },
];

MultipleChoice(ActivityRunner(), questions);
