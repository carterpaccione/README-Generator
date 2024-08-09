// TODO: Include packages needed for this application

import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown';

// TODO: Create an array of questions for user input

const questions = [
    "What is the title of your project?", 
    "Enter a brief description of your application.",
    "Enter any installation instructions.",
    "Provide usage instructions",
    "List your contributors.",
    "Test instructions.",
    "Choose an open source license",
    "What is your GitHub username?",
    "What is your email address?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, (generateMarkdown))
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
