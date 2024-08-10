// TODO: Include packages needed for this application

import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown';

// TODO: Create an array of questions for user input

const questions = [
    {
        message: "What is the title of your project?",
        type: "input",
        name: "title"
    }, 
    {
        message: "Enter a brief description of your application.",
        type: "input",
        name: "description"
    },
    {
        message: "Enter any installation instructions.",
        type: "input",
        name: "installation"
    },
    {
        message: "Provide usage instructions",
        type: "input",
        name: "usage"
    },
    {
        message: "List your contributors.",
        type: "input",
        name: "contributors"
    },
    {
        message: "Test instructions.",
        type: "input",
        name: "test"
    },
    {
        message: "Choose an open source license",
        type: "select",
        name: "license",
        choices: [ "Apache", "GNU", "MIT", "ISC"]
    },
    {
        message: "What is your GitHub username?",
        type: "input",
        name: "github"
    },
    {
        message: "What is your email address?",
        type: "input",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, (generateMarkdown))
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
