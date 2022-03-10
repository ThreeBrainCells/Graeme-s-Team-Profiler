const inquirer = require('inquirer')
const chalk = require ('chalk')
const fs = require('fs')

class Manager{
    constructor(name, id, email, office){
        this.name=name;
        this.id = id;
        this.email = email;
        this.office = office;
    }
}
class Engineer{
    constructor(name, id, email, github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
}
class Intern{
    constructor(name, id, email, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
}


module.exports = {Manager, Engineer, Intern}