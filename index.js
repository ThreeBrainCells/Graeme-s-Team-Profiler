const { managerQuestions, EngineerQuestions, internQuestions } = require('./questions')
const writeHTML = require('./writer')
const { rendMgrCard, rendEngCards, rendIntCards } = require('./cards')
const {Employee} = require('./library/Employee')
const {Manager} = require('./library/Manager')
const {Engineer} = require('./library/Engineer')
const {Intern} = require('./library/Intern')
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
    //makes a new engineer object then puts it in an array
    inquirer.prompt(EngineerQuestions).then(data => {
        const eng = new Engineer(data.engName, data.engID, data.engEmail, data.engGit)
        engCdArr.push(eng)
        continueWriting()
    })

}
function intQuest() {
    //the same, but with interns
    inquirer.prompt(internQuestions).then(data => {
        const int = new Intern(data.intName, data.intID, data.intEmail, data.intSchool)
        intCdArr.push(int)
        continueWriting()
    })

}

function exitApp() {
    //make an HTML string out of the array of Eng objects
    if(engCdArr.length !== 0){
        engCards = rendEngCards(engCdArr)
    }
    //make another one out of the array of Int objects
    if(intCdArr.length !== 0){
        intCards = rendIntCards(intCdArr)
    }
    //this writes the actual file
    const HTML = writeHTML(mgrCard, engCards, intCards)
    console.log(HTML)
    fs.writeFile('index.html', HTML, (err) =>
        err ? console.error(err) : console.log('Your team is ready!'))
};

function continueWriting() {
    
    inquirer.prompt(continueQuestion).then(data => {
        console.log(data)
        switch (data.AddtlMmbrs) {
            case "Engineer":
                //in this case, construct an engineer object
                EngQuest()
                break;
            case "Intern":
                //in this case, construct an intern object
                intQuest()
                break;
            case "That's the whole team":
                //in this case, exit and go on to write the file
                exitApp()
                break;
        }
    })
}

function init() {
//first, write a Manager object
    inquirer.prompt(managerQuestions).then(data => {
        const mgr = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOffice)
        console.log(mgr)
        console.log(mgr.getRole())
//then create an html string with that object
        mgrCard = rendMgrCard(mgr)
        return mgrCard
    }).then(() => {
        //then ask if there is anyone else in the team
        continueWriting()
    })
}




//initializes the program
init();

