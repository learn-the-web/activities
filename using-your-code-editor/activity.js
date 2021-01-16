var questions = [
  {
    question: "What’s the name of the code editor we’re using?",
    correct: 0,
    choices: ["Atom", "Dreamweaver", "Sublime Text", "Visual Studio Code"],
  },
  {
    question: "Why open the whole assignment folder in your code editor?",
    correct: 3,
    choices: [
      "Gives full access to all the different files",
      "Helps understand the overall structure of the code",
      "Cleans up & declutters your workspace",
      "All of the above",
    ],
  },
  {
    question: "What’s the purpose of the `⌘P` shortcut?",
    correct: 1,
    choices: [
      "To print your code for easier reading",
      "To quickly navigate between files",
      "To quickly make new code files",
    ],
  },
  {
    question: "Do you have to know the full filename when using `⌘P`?",
    correct: 2,
    choices: [
      "Yes, you need to know the full, correctly spelled name",
      "Yes, you even need to provide the full path & all folders",
      "No, the code editor “fuzzy matches” the name",
    ],
  },
  {
    question:
      "What’s the shortcut key for quickly making a new file & saving it to your folder?",
    correct: 3,
    choices: ["`⌘N`", "`⌘⌥N`", "`⌘O", "`⌘⌥O`"],
  },
  {
    question: "What’s the most efficient way to navigate between code tabs?",
    correct: 2,
    choices: [
      "Using your mouse to click them",
      "Using back-forward keys: `⌘⇧[` & `⌘⇧]`",
      "Using number keys: `⌘1`, `⌘2`, etc.",
    ],
  },
  {
    question:
      "What keyboard shortcut allows editing multiple lines at the same time?",
    correct: 2,
    choices: ["`⇧` + click", "`⌥` + click", "`⌘` + click"],
  },
  {
    question: "What does the keyboard shortcut `⌘⇧P` do?",
    correct: 2,
    choices: [
      "Prints our code to paper",
      "Searches for files within our folder",
      "Opens the command palette, for searching all features",
    ],
  },
  {
    question: "How do you find-and-replace within the open code file?",
    correct: 2,
    choices: ["`⌘F`", "`⌘⇧F`", "`⌘⌥F`"],
  },
  {
    question: "How do you find-and-replace within the open folder?",
    correct: 1,
    choices: ["`⌘F`", "`⌘⇧F`", "`⌘⌥F`"],
  },
];

MultipleChoice(ActivityRunner(), questions);
