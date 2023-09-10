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


// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer
  .prompt([
    {
      name: 'name',
      message: 'Please input Manager details. Enter Manager Name',

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
    {
        type: 'rawlist',
        name: 'option',
        message: 'What do you want to do next?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team', 'Medium', 'Small', 'Micro'],
       
    },

  


  ])
  .then(answers => {

    if (answers.option == 1)
    {
        generateEngineer();
    }
    else if (answers.option == 2)
    {
        generateIntern();
    }
    else 
        buildTeam();
    // const textData = `<!DOCTYPE html>
    //                   <html>
    //                   <head>
    //                   <link rel="stylesheet" href="style.css">
    //                   </head>
    //                   <body>
    //                   <h1> Name:   ${answers.name}  </h1><br>
    //                   <b>Location:</b>   ${answers.location}  <br>
    //                   <b>Phone Number:</b>   ${answers.phone}  <br>
    //                   <b>GitHub:</b>   ${answers.github}  <br><br>
    //                   <b>Skills:</b>   ${answers.skills}  <br><br>
    //                   </body>
    //                   </html>`


    // const fileName = `${answers.name}.html`;
    // fs.writeFile(fileName, textData, (err) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   console.log(`HTML Report ${fileName} has been created!`);
    // })
  });