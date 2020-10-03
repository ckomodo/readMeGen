//TODO: npm init
//TODO: install dependencies - inquirer
//TODO: require all dependencies I'll need - fs
//TODO: create an array of questions
//TODO: write a readme in a markdown file as a template (copy/paste into readme gen function)
//TODO: function that will generate my readme template
//TODO: use inquirer to prompt users with questions(questions from readme file in class repo)
//TODO: object of answers expected from inquirer, use these answers to pass into my readme gen function. Check module.exports
//TODO:write file using template generated from readme function
//TODO: use back ticks e.g. return `# ${data.title}`
//TODO: 

const inquirer = require("inquirer")
const fs = require("fs");
const markDown = require("./generateMarkdown.js");
// const newMarkDown = require("./generateMarkdown.js")
require ("./generateMarkdown.js");
// const writeReadMe = markDown();

// const newMarkDown = generateMarkDown();
// console.log(newMarkDown.markDown());
// array of questions for user
const questions = inquirer.prompt([
    {
        type: "input",
        name: "Title",
        message: "What's the title of your project?"
    },
    {
        type: "input",
        name: "Description",
        message: "Please describe your project"
    },
    {
        type: "input",
        name: "Contents",
        message: "What are the contents of your README file?"
    },
    {
        type: "input",
        name: "Installation",
        message: "What's the installation process of your program?"
    },
    {
        type: "input",
        name: "Usage",
        message: "What is your program used for?"
    },
    {
        type: "checkbox",
        name: "License",
        message: "What's the license for your program?",
        choices:  [
            
            "free", 
            "private",
            "commercial", 
            "academic"
        ]
    },
    {
        type: "input",
        name: "Contributing",
        message: "Who worked on or contributed to this program?"
    },
    {
        type: "input",
        name: "Test",
        message: "Please write the test instructions for your program"
    },
    {
        type: "input",
        name: "Questions",
        message: ["Type in your Github username and email address"]
    },
]).then(function (data) {
    console.log(data);
    fs.writeFile("README.md", markDown(data), function(err){
        if (err){
            console.log(err);
        }else{
            console.log("README created!");
        }
        const writeReadMe = markDown(data);
    })
    // const writeReadMe = markDown();
    // writeReadMe(data);
});

// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile("README.md", markDown, function(err){
//         if (err){
//             console.log(err);
//         }else{
//             console.log("README created!");
//         }
//     })
    
// }

// function to initialize program
function init() {

}

// function call to initialize program
init();