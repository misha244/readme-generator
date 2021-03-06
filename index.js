// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeToFile = require("./utils/writeToFile");

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
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "What is your project about? Please give a brief description: ",
      name: "description",
    },
    {
      type: "input",
      message: "Please give information on the usage for your project: ",
      name: "usage",
    },
    {
      type: "confirm",
      message:
        "Do you wish to add any installation guidelines for your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "Please enter your installation guidelines: ",
      name: "installationGuidelines",
      when: (answers) => {
        return answers.installation;
      },
    },
    {
      type: "confirm",
      message:
        "Do you wish to add any contribution guidelines for your project?",
      name: "contribution",
    },
    {
      type: "input",
      message: "Please enter your contribution guidelines: ",
      name: "contributionGuidelines",
      when: (answers) => {
        return answers.contribution;
      },
    },
    {
      type: "confirm",
      message: "Do you wish to add testing guidelines for your project?",
      name: "testing",
    },
    {
      type: "input",
      message: "Please enter your testing guidelines: ",
      name: "testingGuidelines",
      when: (answers) => {
        return answers.testing;
      },
    },
    {
      type: "list",
      message: "Please select a license for your project from the list",
      name: "license",
      choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
    },
    {
      type: "input",
      message: "Please provide your GitHub username: ",
      name: "github",
    },
    {
      type: "input",
      message: "Please provide your email address: ",
      name: "email",
    },
    {
      type: "input",
      message:
        "What name do you wish to give your README file? Don't include the .md extension. ",
      name: "readme",
      default: "GENERATED_README",
    },
  ];
  const answers = await getAnswersFromQuestions(questions);

  const generatedMarkdown = generateMarkdown(answers);

  writeToFile(answers.readme, generatedMarkdown);
};

// Function call to initialize app
init();
