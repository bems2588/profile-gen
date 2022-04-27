const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const Manager = require("./library/Manager");

const inquirer = require("inquirer");

const fs = require("fs")
let employeeHTML = ""

function acceptManager() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter Manager name: ",
      name: "name"
    },
    {
      type: "input",
      message: "Enter Manger ID: ",
      name: "id"
    },
    {
      type: "input",
      message: "Enter Manager email: ",
      name: "email"
    },
    {
      type: "input",
      message: "Enter Manager office number: ",
      name: "officeNumber"
    },
  ]).then(({ name, id, email, officeNumber }) => {
    const newManager = new Manager(name, id, email, officeNumber);
    employeeHTML += `<div class="card" style="width: 18rem;">
    <div class="text-center bg-primary">
    <h3>${newManager.name}</h3>
    <p>Manager</p>
    </div>
    <div class="card-body">
      <h5 class="card-title">ID: ${newManager.id}</h5>
      <p class="card-text">Office Number ${newManager.officeNumber}</p>
      <a href="mailto:${newManager.email}" class="btn btn-primary">Email: ${newManager.email}</a>
    </div>
  </div>`
    console.log(employeeHTML);
    addTeamMember();
  });
};

acceptManager();


function addTeamMember() {
  inquirer.prompt([
    {
      type: "list",
      name: "options",
      message: "Enter position",
      choices: ["Add Intern", "Add Engineer", "Exit App"]
    }
  ]).then(({ options }) => {
    switch (options) {
      case "Add Intern":
        addIntern();
        break;
      case "Add Engineer":
        addEngineer(); break;
      default:
        exitapp()

    }
  })
}

function acceptIntern() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter Intern name: ",
      name: "name"
    },
    {
      type: "input",
      message: "Enter Intern ID: ",
      name: "id"
    },
    {
      type: "input",
      message: "Enter Intern email: ",
      name: "email"
    },
    {
      type: "input",
      message: "Enter Intern school: ",
      name: "school"
    },
  ]).then(({ name, id, email, school }) => {
    const newIntern = new Intern(name, id, email, school);
    employeeHTML += `<div class="card" style="width: 18rem;">
    <div class="text-center bg-primary">
    <h3>${newIntern.name}</h3>
    <p>Intern</p>
    </div>
    <div class="card-body">
      <h5 class="card-title">ID: ${newIntern.id}</h5>
      <p class="card-text">School ${newIntern.school}</p>
      <a href="mailto:${newIntern.email}" class="btn btn-primary">Email: ${newIntern.email}</a>
    </div>
  </div>`
    console.log(employeeHTML);
    addTeamMember();
  });
};

acceptManager();