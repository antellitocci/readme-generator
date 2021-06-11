// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //https://choosealicense.com/appendix/
};

//function to get license badges and add them 

const generateMarkdown = projectData => {
    //create variables from projectData
    console.log(projectData);
    const { license, title, language, description, installation, usage, contributing, tests, github, email, questions } = projectData;
    return `# ${title}
// license bade

## Desciption\n
${description}

## Built With
${language}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## License
${license}

## Tests
${tests}

## Questions
${questions}
${email}

### &copy; //function to return current year  ${github} 
  `;
  }

  module.exports = generateMarkdown;