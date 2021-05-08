// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeToFile = require("./utils/writeToFile");

const handleAnswers = (answers) => {
  console.log(answers);
};

const getAnswersFromQuestions = async (questions) => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

// TODO: Create a function to initialize app
const init = async () => {
  // TODO: Create an array of questions for user input
  const questions = [
    {
      type: "input",
      message: "What is the title of your project",
      name: "title",
    },
    {
      type: "input",
      message: "What is your project about? Please give a brief description",
      name: "description",
    },
    {
      type: "confirm",
      message:
        "Do you wish to add any installation guidelines for your project? (it's gonna be y/n)",
      name: "installation",
    },
    {
      type: "input",
      message: "Please enter your installation guidelines",
      name: "installationGuidelines",
    },
    {
      type: "confirm",
      message:
        "Do you wish to add any contribution guidelines for your project?",
      name: "contribution",
    },
    {
      type: "input",
      message: "Please enter your contribution guidelines",
      name: "contributionGuidelines",
    },
    {
      type: "confirm",
      message: "Do you wish to add testing guidelines for your project?",
      name: "testing",
    },
    {
      type: "input",
      message: "Please enter your testing guidelines",
      name: "testingGuidelines",
    },
    {
      type: "list",
      message: "Please select a license for your project from the list",
      name: "license",
      choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
    },
    {
      type: "input",
      message: "Please provide your GitHub username",
      name: "github",
    },
    {
      type: "input",
      message: "Please provide your email address",
      name: "email",
    },
  ];
  const answers = await getAnswersFromQuestions(questions);
  handleAnswers(answers);
};

// Function call to initialize app
init();
