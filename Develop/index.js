// The following packages are required for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// This is the first question
const questions = [{
    type: 'input', 
    name: 'github-user-name',
    message: 'What is your GitHub username?'
},

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers=>{
        console.log(answers)

        writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init()

