var questions = [
  {
    question: 'At what point does copyright start on a work?',
    correct: 0,
    choices: [
      'Immediately after its creation',
      'When its registered with the Canadian Intellectual Property Office',
      'When you add the © copyright statement',
      'When you sell the work',
    ]
  },
  {
    question: 'How long does copyright last in Canada?',
    correct: 1,
    choices: [
      'Only while the creator is alive',
      '50 years after the creator’s death',
      '75 years after the creator’s death',
      'Forever',
    ]
  },
  {
    question: 'What does “public domain” mean?',
    correct: 2,
    choices: [
      'The creator is allowing other people to use their work',
      'The creator has just died, so their work is freely available',
      'The copyright for a work has expired and it’s freely available to be used',
      'All creative work that is found in “public”',
    ]
  },
  {
    question: 'What is the purpose of a license on copyrighted works?',
    correct: 1,
    choices: [
      'Grants people rights to do anything they want with the work',
      'Grants people specific privileges for using the work',
      'Prevents the copyrighted work from being used',
    ]
  },
  {
    question: 'Digital Rights Management (DRM) is a locking system to prevent copyright abuse by:',
    correct: 4,
    choices: [
      'Removing & restricting legal user rights',
      'Preventing users with accessibility concerns from accessing the creative work',
      'Making it more difficult to access copyrighted works',
      'Preventing users from making legal derivative works, like parodies or fan films',
      'All of the above',
    ]
  },
  {
    question: 'The Creative Commons license is best when applied to:',
    correct: 1,
    choices: [
      'Code',
      'Images, audio, video',
      'Software & hardware',
    ]
  },
  {
    question: 'The MIT code & software license allows users to:',
    correct: 1,
    choices: [
      'Do whatever they want with the creative work',
      'Do whatever they want with the creative work, if the copyright notice is retained',
      'Do whatever they want with the creative work, if the copyright notice is retained, and your derivative work is also licensed under the MIT',
      'Use the work for its singular purpose and not make any changes',
    ]
  },
  {
    question: 'The GPL code & software license allows users to:',
    correct: 2,
    choices: [
      'Do whatever they want with the creative work',
      'Do whatever they want with the creative work, if the copyright notice is retained',
      'Do whatever they want with the creative work, if the copyright notice is retained, and your derivative work is also licensed under the GPL',
      'Use the work for its singular purpose and not make any changes',
    ]
  },
  {
    question: 'You search on Flickr and find a photograph with no license, only a copyright notice. Can you use this?',
    correct: 3,
    choices: [
      'No',
      'Yes',
      'Yes, only if you give credit back to the creator',
      'Yes, only if you get explicit, written permission from the creator',
    ]
  },
  {
    question: 'You search on GitHub and find Javascript slideshow code that has the MIT license. Can you use this?',
    correct: 2,
    choices: [
      'No',
      'Yes',
      'Yes, only if their copyright statement remains',
      'Yes, but you must also license your work under the MIT license',
    ]
  }
];

MultipleChoice(ActivityRunner(), questions);
