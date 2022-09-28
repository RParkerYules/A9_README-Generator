// The following packages are required for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// This is the first question
const questions = [{
    type: 'input', 
    name: 'Project Title',
    message: 'What is your Project Title?'
},
{
    type: 'input', 
    name: 'GitHub Username',
    message: 'What is your GitHub Username?'
},
{
    type: 'input', 
    name: 'Email Address',
    message: 'What is your email address?'
},
{
    type: 'input', 
    name: 'Description',
    message: 'Write a short description for your project.'
},
{
    type: 'input', 
    name: 'License(s)',
    message: 'What licenses should your project have?',
    choices: [
        'Apache license 2.0',
        'BSD 2-clause "Simplified" license',
        'BSD 3-clause "New" or "Revised" license',
        'GNU General Public License family',
        'GNU Library or "Lesser" General Public License (LGPL)',
        'MIT',
        'Mozilla Public License 2.0',
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
    name: 'User Information',
    message: 'What does the user need to know about using the repo?'
},
{
    type: 'input', 
    name: 'Contributors',
    message: 'What does the user need to know about contributing to the repo?'
},

]

// TODO: Create a function to write README file
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








