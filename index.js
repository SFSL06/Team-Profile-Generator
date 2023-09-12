// link to file which generates HTML
const generateTeam = require('./src/page-template.js');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//import inquirer from 'inquirer' to prompt user for input;
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

//Declare empty array for team
teamArr = [];

buildTeam();
// Gather information about the development team members
function buildTeam() {
  //Gather information about Manager
  inquirer
    .prompt([
      {
        name: 'name',
        message: 'Hi. Welcome to the Team Profile Generator app. First please input Manager details. Enter Manager Name',

      },
      {
        name: 'id',
        message: 'Please enter Employee ID',
      },
      {
        name: 'email',
        message: 'Please enter email',
      },
      {
        name: 'officeNumber',
        message: 'Please enter Office Number',
      },

    ])
    .then(answers => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      teamArr.push(manager);
      //Present options to add more team members
      renderChoices();

    });

}
function renderChoices() {
  inquirer
    .prompt([

      {
        type: 'list',
        name: 'option',
        message: 'Which team member do you want to add next?',
        choices: ['Engineer', 'Intern', 'None'],

      }
    ])
    .then(answers => {
      if (answers.option == 'Engineer') {
        inputEngineer();
      }
      else if (answers.option == 'Intern') {
        inputIntern();
      }
      else if (answers.option == 'None')
        createHTML();
    }
    )
};
//input Engineer details
function inputEngineer() {
  inquirer
    .prompt([
      {
        name: 'name',
        message: 'Please enter Engineer Name',

      },
      {
        name: 'id',
        message: 'Please enter Engineer ID',
      },
      {
        name: 'email',
        message: 'Please enter email',
      },
      {
        name: 'gitHub',
        message: 'Please enter GitHub username'
      },
    ])
    .then(answers => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
      teamArr.push(engineer);
      renderChoices();

    });
}
//input Intern details
function inputIntern() {
  inquirer
    .prompt([
      {
        name: 'name',
        message: 'Please enter Intern Name',

      },
      {
        name: 'id',
        message: 'Please enter Intern ID',
      },
      {
        name: 'email',
        message: 'Please enter email',
      },
      {
        name: 'school',
        message: 'Please enter name of school'
      },
    ])
    .then(answers => {

      const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
      teamArr.push(intern);
      renderChoices();

    });
}
//generate HTML
function createHTML() {
  fs.writeFileSync(outputPath, generateTeam(teamArr), "UTF-8")
}
