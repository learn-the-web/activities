var questions = [
  {
    question: 'Relative path to the CSS file written from index.html.',
    inputGroup: 'question-1',
    inputs: {
      path: 'css/main.css'
    }
  },
  {
    question: 'Relative path to about.html written from index.html.',
    inputGroup: 'question-2',
    inputs: {
      path: 'about.html'
    }
  },
  {
    question: 'Relative path to the velociraptor image from index.html.',
    inputGroup: 'question-3',
    inputs: {
      path: 'img/dinos/velociraptor.jpg'
    }
  },
  {
    question: 'Relative path to the background image from the CSS file.',
    inputGroup: 'question-4',
    inputs: {
      path: '../img/background.png'
    }
  },
  {
    question: 'Relative path to meat-eaters index.html from velociraptor.html.',
    inputGroup: 'question-5',
    inputs: {
      path: 'index.html'
    }
  },
  {
    question: 'Relative path to dinos index.html from velociraptor.html.',
    inputGroup: 'question-6',
    inputs: {
      path: '../index.html'
    }
  },
  {
    question: 'Relative path to the velociraptor image from velociraptor.html.',
    inputGroup: 'question-7',
    inputs: {
      path: '../../img/dinos/velociraptor.jpg'
    }
  },
  {
    question: 'Absolute path to about.html from index.html.',
    inputGroup: 'question-8',
    inputs: {
      path: '/about.html'
    }
  },
  {
    question: 'Absolute path to the stegosaurus image from stegosaurus.html.',
    inputGroup: 'question-9',
    inputs: {
      path: '/img/dinos/stegosaurus.jpg'
    }
  },
  {
    question: 'Absolute path to stegosaurus.html from dinos index.html.',
    inputGroup: 'question-10',
    inputs: {
      path: '/dinos/plant-eaters/stegosaurus.html'
    }
  }
];



FormValidator(ActivityRunner(), questions);
