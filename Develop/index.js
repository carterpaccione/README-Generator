// TODO: Include packages needed for this application

import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import { renderLicenseBadge, renderLicenseLink, renderLicenseSection } from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input

const questions = [
    {
        message: "Enter the title of your application:",
        type: "input",
        name: "title"
    }, 
    {
        message: "Enter a brief description of your application:",
        type: "input",
        name: "description"
    },
    {
        message: "Enter any installation instructions:",
        type: "input",
        name: "installation"
    },
    {
        message: "Enter usage instructions:",
        type: "input",
        name: "usage"
    },
    {
        message: "Choose an open source license:",
        type: "list",
        name: "license",
        choices: ["Apache", "GNU", "MIT", "ISC", "None"]
    },
    {
        message: "Enter your contributors:",
        type: "input",
        name: "contributors"
    },
    {
        message: "Enter any unit tests:",
        type: "input",
        name: "test"
    },
    {
        message: "Enter your email address:",
        type: "input",
        name: "email"
    },
    {
        message: "Enter your GitHub username:",
        type: "input",
        name: "github"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data, licenseSection, licenseBadge) {
    fs.writeFile(fileName, generateMarkdown(data, licenseSection, licenseBadge), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("README.md generated successfully!");
        }
    }
)};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            let licenseBadge = renderLicenseBadge(answers.license);
            let licenseLink = renderLicenseLink(answers.license);
            let licenseSection = renderLicenseSection(licenseLink, answers.license);
            writeToFile("README.md", answers, licenseSection, licenseBadge);
        });
}

// Function call to initialize app
init();
