//require node fetch
const fetch = require('node-fetch');

//get current year
const thisYear = new Date().getFullYear();

//license information array
const licenseArr = [
  {name: "Apache 2.0", badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", content:""},
  {name: "MIT", badge: "", content:""},
  {name: "GPL 3.0", badge: "", content:""},
  {name: "BSD 3.0", badge: "", content:""},
  {name: "LGPL 2.1", badge: "", content:""},
  {name: "None", badge: "", content:""}
];

//language information array
const languageArr = [

];
const generateMarkdown = projectData => {
    //create variables from projectData
    console.log(projectData);
    const { license, title, language, description, installation, usage, contributing, tests, github, email, questions } = projectData;
    return `# ${title}
// license bade
${renderLicenseBadge(license)}

## Description\n
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

## Tests
${tests}

## Questions
${questions}
${email}
[${github}](https://github.com/${github})
  `;
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  for (var i=0; i < licenseArr.length; i++){
    if(license = licenseArr[i].name && license != "None"){
      return `
        \n${licenseArr[i].badge}
      `;
    }
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

};

//function to get license badges and add them 


module.exports = generateMarkdown;