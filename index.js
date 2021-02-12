const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        type: 'input',
        name: 'gitHub1',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'gitHub2',
        message: 'Please enter the link to your GitHub profile'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give installation instructions for your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how your project is used'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Explain how your project is tested'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines'
    },
    {
        type: 'list',
        name: 'license',
        choices: ["MIT", "Apache 2.0", "BSD 3", "GPL 3.0", "None"],
        message: 'Pick a license for your project'
    }
];

function writeToFile(output) { 
    fs.writeFileSync('README.md', output)
    console.log(`Successfully created a README file`) 
}

async function init() { 
    const response = await inquirer.prompt(questions)
    const output = generateMarkdown(response)
    writeToFile(output)
}

init();
