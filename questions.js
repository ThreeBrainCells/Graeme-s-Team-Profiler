// array of arrays of questions

const inquirer = require('inquirer')

const managerQuestions = [
    {
        type: "input",
        message: "What is the Manager's name?",
        name: "managerName",
        default: "Manager"
    },{
        type: "input",
        message: "What is their employee ID?",
        name: "managerID",
        default: "555"
    },{
        type: "input",
        message: "What is their email?",
        name: "managerEmail",
        default: "something@email.net"
    },{
        type: "input",
        message: "What is their office number?",
        name: "managerOffice",
        default: "1111"
    }
]
const EngineerQuestions = [
    {
        type: "input",
        message: "What is their name?",
        name: "engName",
        default: "Bob"
    },{
        type: "input",
        message: "What is their employee ID?",
        name: "engID",
        default: "444"
    },{
        type: "input",
        message: "What is their email?",
        name: "engEmail",
        default: "something@email.net"
    },{
        type: "input",
        message: "What is their GITHUB username?",
        name: "engGit",
        default: "github.com/MyGitz"
    }
]
const internQuestions = [
    {
        type: "input",
        message: "What is their name?",
        name: "intName",
        default: "Bob"
    },{
        type: "input",
        message: "What is their ID?",
        name: "intID",
        default: "student"
    },{
        type: "input",
        message: "What is their email?",
        name: "intEmail",
        default: "something@email.org"
    },{
        type: "input",
        message: "What school do they belong to?",
        name: "intSchool",
        default: "CU Denver"
    }
]
module.exports = {managerQuestions, EngineerQuestions, internQuestions}