var questions = [
  {
    question: 'The MP4/H.264 video encoding is most compatible with web browsers.',
    correct: 0,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'Some good backup video encodings are WebM & OGV.',
    correct: 0,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'The `<vid>` tag used to show video in a website.',
    correct: 1,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'The `<source>` tag is for defining the copyright notice of a video.',
    correct: 1,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'The `autoplay` attribute will always start the video playing—no matter the speed of the connection or the device.',
    correct: 1,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'The `muted` attribute prevents the video from playing sounds.',
    correct: 0,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'The `controller` attribute is used to show the default video controls.',
    correct: 1,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'To show a static image while the video buffers the `poster` attribute should point to an image.',
    correct: 0,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'The `autobuffer` attribute is for automatically buffering the video so that it can be played more quickly.',
    correct: 1,
    choices: [
      'True',
      'False',
    ]
  },
  {
    question: 'The `#t=10,2:58` hash will play the video from 10 seconds to 2 minutes 58 seconds.',
    correct: 0,
    choices: [
      'True',
      'False',
    ]
  },
];

MultipleChoice(ActivityRunner(), questions);
