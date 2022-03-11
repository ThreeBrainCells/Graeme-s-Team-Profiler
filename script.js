const { managerQuestions, EngineerQuestions, internQuestions } = require('./questions')
const writeHTML = require('./writer')
const { rendMgrCard, rendEngCards, rendIntCards } = require('./cards')
const team = require('./team')
const inquirer = require('inquirer')
const fs = require('fs')

let engCdArr = [];
let intCdArr = [];
let mgrCard = ``
let engCards = ``
let intCards = ``

const continueQuestion = {
    type: "list",
    message: "Are there any other team members?",
    name: "AddtlMmbrs",
    choices: ["Engineer", "Intern", "That's the whole team"]
}

function EngQuest() {
    inquirer.prompt(EngineerQuestions).then(data => {
        const eng = new team.Engineer(data.engName, data.engID, data.engEmail, data.engGit)
        engCdArr.push(eng)
        continueWriting()
    })

}
function intQuest() {
    inquirer.prompt(internQuestions).then(data => {
        const int = new team.Engineer(data.intName, data.intID, data.intEmail, data.intSchool)
        intCdArr.push(int)
        continueWriting()
    })

}


function continueWriting() {
    inquirer.prompt(continueQuestion).then(data => {
        console.log(data)
        switch (data.AddtlMmbrs) {
            case "Engineer":
                EngQuest()
                break;
            case "Intern":
                intQuest()
                break;
            case "That's the whole team":
                exitApp()
        }
    })
}

function init() {

    inquirer.prompt(managerQuestions).then(data => {
        const mgr = new team.Manager(data.managerName, data.managerID, data.managerEmail, data.managerOffice)
        console.log(mgr)

        mgrCard = rendMgrCard(mgr)
        return mgrCard
    }).then(mangerHTML => {
        continueWriting()

    })
}


function exitApp() {
    engCards = rendEngCards(engCdArr)
    intCards = rendIntCards(intCdArr)
    const HTML = writeHTML(mgrCard, engCards, intCards)
    console.log(HTML)
    fs.writeFile('index.html', HTML, (err) =>
        err ? console.error(err) : console.log('Your team is ready!'))
};


//use fs to write index.html using objects
//ask continueQuestion to determine whether engineers or interns are present




init();