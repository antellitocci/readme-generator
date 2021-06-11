// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/markdown-template');
const generateReadMe = require('./utils/generate-readme');

// TODO: Create an array of questions for user input
const questions = [
    {prompt: "What is the title of your application? (Required)", id: "title"},
    {prompt: "Please provide a description of your application. (Required)", id: "description"},
    {prompt: "Is your project deployed?", id: "deployment"},
    {prompt: "Please provide a URL link to the deployed application.", id: "deploymentLink"},
    {prompt: "Please provide installation instructions for your application. (Required)", id: "install"},
    {prompt: "Please provide usage instructions for your application. (Required)", id: "usageOne"},
    {prompt: "Do you have screenshots of your application to include?", id: "usageTwo"},
    {prompt: "Please choose a license for your application. (Required)", id: "license"},
    {prompt: "Please provide contribution guidelines for your application. (Required)", id: "contribution"},
    {prompt: "Please provide testing instructions for your application. (Required)", id: "tests"},
    {prompt: "Please enter your name. (Required)", id: "userName"},
    {prompt: "Please enter your Github username (Required)", id: "githubName"},
    {prompt: "Please enter your email address. (Required)", id: "email"},
];

const promptQuestions = () => {
    return inquirer.prompt([
        {
            //title of application
            type: 'input',
            name: 'title',
            message: questions[0].prompt,
            validate: titleInput => {
                if(titleInput){
                    return true;
                }
                else{
                    console.log('Please enter the application title.');
                    return false;
                }
            }
        },
        {
            //description of application
            type: 'input',
            name: 'description',
            message: questions[1].prompt,
            validate: descriptInput => {
                if(descriptInput){
                    return true;
                }
                else{
                    console.log("Please enter a description for the application.");
                    return false;
                }
            }
        },
        {
            //project deployed?
            type: 'confirm',
            name: 'deployment',
            message: questions[2].prompt,
            default: true
        },
        {
            //deployment link
            type: 'input',
            name: 'deploymentLink',
            message: questions[3].prompt,
            when: ({ deployment }) => {
                if(deployment){
                    return true;
                }
                else{
                    return false;
                }
            }
        },
        {
            //install instructions
            type: 'input',
            name: 'install',
            message: questions[4].prompt,
            validate: installInput => {
                if(installInput){
                    return true;
                }
                else{
                    console.log("Please provide installation instructions for the application.");
                    return false;
                }
            }  
        }
    ]).then(answers => {
        //send to write file??
        console.log(answers);
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

};

// TODO: Create a function to initialize app
function init() {

};

// Function call to initialize app
promptQuestions();
