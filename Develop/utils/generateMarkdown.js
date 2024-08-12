// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
   switch(license) {
    case 'Apache':
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    break;
      case 'GNU':
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    break;
      case "MIT":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
      case "ISC":
      licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
      case "None":
      licenseBadge = "";
  }
  return licenseBadge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  switch(license) {
    case 'Apache':
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
      break;
    case 'GNU':
      licenseLink = "https://choosealicense.com/licenses/gpl-3.0/";
      break;
    case "MIT":
      licenseLink = "https://choosealicense.com/licenses/mit/";
      break;
    case "ISC":
      licenseLink = "https://choosealicense.com/licenses/isc/";
      break;
    default:
      licenseLink = "";
  }
  return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseLink, lincense) {
  let licenseSection = "";
  if(licenseLink) {
     licenseSection = `Distributed under ${lincense} License. See ${licenseLink} for more information.`;
  }
  return licenseSection;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, licenseSection, licenseBadge) {
  return `# <center>${data.title}   ${licenseBadge}</center>

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${licenseSection}

## Contributing

${data.contributors}

## Tests

${data.test}

## Questions

For any questions, please contact me at: \n${data.email}.
\nGitHub: ${data.github}`;
}

export default generateMarkdown;
export { renderLicenseBadge, renderLicenseLink, renderLicenseSection };