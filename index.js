
const inquirer = require("inquirer")
const fs = require("fs");
const markDown = require("./generateMarkdown.js");
require ("./generateMarkdown.js");

// array of questions for user
const questions = [
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
        message: "What are the contents of your README file? Use commas to separate"
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
        name: "Contributors",
        message: "Who worked on or contributed to this program?"
    },
    {
        type: "input",
        name: "Test",
        message: "Please write the test instructions for your program"
    },
    {
        type: "input",
        name: "Github",
        message: ["Type in your Github username"]
    },
    {
        type: "input",
        name: "Email",
        message: ["Type in your email address"]
    }
]

inquirer.prompt(questions).then(function (data) { // prints each response to readme

    fs.appendFileSync("README.md", ("# Project Title" + '\n' + data.Title) + '\n', function (err){ 
        if (err){
            return console.log(err);
        }else{
            console.log("added to readme.md");
        }
       
    })
    fs.appendFileSync("README.md", ("# Description" + '\n' + data.Description) + '\n', function (err){
        if (err){
            return console.log(err);
        }else{
            console.log("added to readme.md");
        }
       
    })
    fs.appendFileSync("README.md", ("# Contents" + '\n' + data.Contents) + '\n', function (err){
        if (err){
            return console.log(err);
        }else{
            console.log("added to readme.md");
        }
       
    })
    fs.appendFileSync("README.md", ("# Installation" + '\n' + data.Installation) + '\n', function (err){
        if (err){
            return console.log(err);
        }else{
            console.log("added to readme.md");
        }
       
    })
    fs.appendFileSync("README.md", ("# Usage" + '\n' + data.Usage) + '\n', function (err){
        if (err){
            return console.log(err);
        }else{
            console.log("added to readme.md");
        }
       
    })
    fs.appendFileSync("README.md", ("# Licence" + '\n' + data.License) + '\n', function (err){
        if (err){
            return console.log(err);
        }else{
            console.log("added to readme.md");
        }
       
    })
    fs.appendFileSync("README.md", ("# Authors" + '\n' + data.Contributors) + '\n', function (err){
        if (err){
            return console.log(err);
        }else{
            console.log("added to readme.md");
        }
       
    })
    fs.appendFileSync("README.md", ("# Program Testing" + '\n' + data.Test) + '\n', function (err){
        if (err){
            return console.log(err);
        }else{
            console.log("added to readme.md");
        }
       
    })
    fs.appendFileSync("README.md", ("# Github" + '\n' + data.Github) + '\n', function (err){
        if (err){
            return console.log(err);
        }else{
            console.log("added to readme.md");
        }
       
    })
    fs.appendFileSync("README.md", ("# Email address" + '\n' + data.Email) + '\n', function (err){
        if (err){
            return console.log(err);
        }else{
            console.log("added to readme.md");
        }
       
    })



   
});
