var questions = [
  {
    question: 'Format the file to match the naming conventions:',
    inputGroup: 'question-1',
    inputs: {
      name: 'stegosaurus.jpg'
    }
  },
  {
    question: 'Format the file to match the naming conventions:',
    inputGroup: 'question-2',
    inputs: {
      name: 'tyrannosaurus-rex.jpg'
    }
  },
  {
    question: 'Format the file to match the naming conventions:',
    inputGroup: 'question-3',
    inputs: {
      name: 'the-dinosaurs-scarf.jpg'
    }
  },
  {
    question: 'Format the file to match the naming conventions:',
    inputGroup: 'question-4',
    inputs: {
      name: 'pteranodons-in-the-air.jpg'
    }
  },
  {
    question: 'Format the file to match the naming conventions:',
    inputGroup: 'question-5',
    inputs: {
      name: 'evolution-of-earth-v2.jpg'
    }
  },
  {
    question: 'Format the file & folder to match the naming conventions:',
    inputGroup: 'question-6',
    inputs: {
      name: '/images/hairy-mastodon.jpg'
    }
  },
  {
    question: 'Format the file & folder to match the naming conventions:',
    inputGroup: 'question-7',
    inputs: {
      name: '/images/mammals/big-shelled-glyptodon.jpg'
    }
  },
  {
    question: 'Format the file & folder to match the naming conventions:',
    inputGroup: 'question-8',
    inputs: {
      name: '/images/unicorns-are-cool/elasmotherium.jpg'
    }
  },
  {
    question: 'Format the file & folder to match the naming conventions:',
    inputGroup: 'question-9',
    inputs: {
      name: '/index.html'
    }
  },
  {
    question: 'Format the file & folder to match the naming conventions:',
    inputGroup: 'question-10',
    inputs: {
      name: '/mammals/index.html'
    }
  }
];

FormValidator(ActivityRunner(), questions);
