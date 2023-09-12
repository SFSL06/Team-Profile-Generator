const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//import inquirer from 'inquirer';
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Engineer = require("./lib/Engineer");
//Declare empty array for team
teamArr = [];
// TODO: Write Code to gather information about the development team members, and render the HTML file.
function buildTeam(){

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
    renderChoices();
   
  });

  
function renderChoices()
{
inquirer
  .prompt([

    {
      type: 'rawlist',
      name: 'option',
      message: 'What do you want to do next?',
      choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team'],
 
    }
])

{
  if (answers.option == 1)
  {
      inputEngineer();
  }
  else if (answers.option == 2)
  {
      inputIntern();
  }
  else 
      buildHTML();
  }
}

  function inputEngineer()
  {
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
      name:'gitHub',
      message: 'Please enter GitHub username'
    },
  ])
  .then(answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
    teamArr.push(engineer);
    renderChoices();

     });
  }

  function inputIntern()
  {
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
      name:'school',
      message: 'Please enter name of school'
    },
  ])
  .then(answers => {

    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    teamArr.push(intern);
    renderChoices();

     });
    }

  function buildHTML()
  {}

}