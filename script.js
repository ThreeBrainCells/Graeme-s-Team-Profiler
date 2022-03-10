const {managerQuestions, EngineerQuestions, internQuestions} = require('./questions')
const writeHTML = require('./writer')
const team = require('./team')
const inquirer = require('inquirer')
const fs = require('fs')

let engCdArr = [];

const continueQuestion = {
    type: "list",
    message: "Are there any other team members?",
    name: "AddtlMmbrs",
    choices:["Engineer", "Intern", "That's the whole team"]
}

function EngQuest(){
    inquirer.prompt(EngineerQuestions).then(data=>{
        const eng = new team.Engineer(data.engName, data.engID, data.engEmail, data.engGit)
        console.log(eng)
        engCdArr.push(eng)
        continueWriting()
    })
    
}

function continueWriting(){
        inquirer.prompt(continueQuestion).then(data=>{
            console.log(data)
        switch(data.AddtlMmbrs){
            case "Engineer":
                EngQuest()
                break;
            case "Intern":
                console.log("let's add an intern!")
                break;
            case "That's the whole team":
                break;
        }
    })
}

function init(){
    
    // inquirer.prompt(managerQuestions).then(data=>{
    //     const mgr = new team.Manager(data.managerName, data.managerID, data.managerEmail, data.managerOffice)
    //     console.log(mgr)
    // });
    continueWriting()
    //use fs to write index.html using objects
    //ask continueQuestion to determine whether engineers or interns are present
    //a foreach loop for creating the engineer/intern cards
}

init();