// The following packages are required for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')


// List of question names with questions
const questions = [{
    type: 'input', 
    name: 'title',
    message: 'What is your Project Title?'
},
{
    type: 'input', 
    name: 'GitHubUsername',
    message: 'What is your GitHub Username?'
},
{
    type: 'input', 
    name: 'EmailAddress',
    message: 'What is your email address?'
},
{
    type: 'input', 
    name: 'Description',
    message: 'Write a short description for your project.'
},
{
    type: 'list', 
    name: 'License',
    message: 'What license should your project have?',
    choices: [
        'MIT',
        'Apache license 2.0',
        'BSD 2-clause license',
        'BSD 3-clause license',
        'Eclipse Public License 1.0', 
        'Mozilla Public License 2.0',
        'Open Database License (ODbL)',
    ],
    default: "MIT"
},
{
    type: 'input', 
    name: 'Dependencies',
    message: 'What command should be run to install dependencies?'
},
{
    type: 'input', 
    name: 'Tests',
    message: 'What command should be run to run tests?'
},
{
    type: 'input', 
    name: 'UserInformation',
    message: 'What does the user need to know about using the repo?'
},
{
    type: 'input', 
    name: 'Contributors',
    message: 'What does the user need to know about contributing to the repo?'
},

]

// TODO: Create a function to write to the README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) .then(answers => {
        console.log(answers)

        writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init()








