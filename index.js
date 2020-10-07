const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown= require("./generateMarkdown")
// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

// function to initialize program
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "what is the title?"
        },
        {
            type: "input",
            name: "description",
            message: "what is the description?"
        },
        {
            type: "input",
            name: "installation",
            message: "what is the installation?"
        },
        {
            type: "input",
            name: "usage",
            message: "what is the usage?"
        },
        {
            type: "input",
            name: "contributing",
            message: "how does one contribute?"
        },
        {
            type: "input",
            name: "tests",
            message: "how do you test your application?"
        },
        {
            type: "list",
            name: "license",
            message: "what is license does your project use?",
            choices: ["MIT","GPLv2"]
        },
    ]).then(function (answers) {
        const mdText= generateMarkdown(answers)
        writeToFile("output.md",mdText)
    })
}

// function call to initialize program
init();
