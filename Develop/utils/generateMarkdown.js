// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   switch(license) {
    case 'Apache':
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case 'GNU':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache':
      return "https://www.apache.org/licenses/LICENSE-2.0";
    case 'GNU':
      return "https://choosealicense.com/licenses/gpl-3.0/";
    case "MIT":
      return "https://choosealicense.com/licenses/mit/";
    case "ISC":
      return "https://choosealicense.com/licenses/isc/";
    default:
      return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    licenseSection = `## ${license}
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

   ## Description

  ${data.description}
  
  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}
  
  ## Contributing

  ${data.contributors}
  
  ## Tests
  
  ${data.test}
  
  ${licenseSection}`;
}

export default generateMarkdown;
