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

function addIntern() {
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



function addEngineer() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter Engineer name: ",
      name: "name"
    },
    {
      type: "input",
      message: "Enter Engineer ID: ",
      name: "id"
    },
    {
      type: "input",
      message: "Enter Engineer email: ",
      name: "email"
    },
    {
      type: "input",
      message: "Enter Engineer Github: ",
      name: "github"
    },
  ]).then(({ name, id, email, github }) => {
    const newEngineer = new Engineer(name, id, email, github);
    employeeHTML += `<div class="card" style="width: 18rem;">
    <div class="text-center bg-primary">
    <h3>${newEngineer.name}</h3>
    <p>Intern</p>
    </div>
    <div class="card-body">
      <h5 class="card-title">ID: ${newEngineer.id}</h5>
      <p class="card-text">Github ${newEngineer.github}</p>
      <a href="mailto:${newEngineer.email}" class="btn btn-primary">Email: ${newEngineer.email}</a>
    </div>
  </div>`
    console.log(employeeHTML);
    addTeamMember();
  });
};


function exitapp() {
  const html = `<!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
  
      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  
      <title>Team Profile Generator</title>
    </head>
    <body>
    <header class="bg-primary text-center">
      <h1>Team Profile Generator</h1>
       </header>
       <main class="d-flex flex-wrap container mt-2 pt-2">
       ${employeeHTML}
       </main>
      <!-- Optional JavaScript; choose one of the two! -->
  
      <!-- Option 1: Bootstrap Bundle with Popper -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  
      <!-- Option 2: Separate Popper and Bootstrap JS -->
      <!--
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
      -->
    </body>
  </html>`
  fs.writeFileSync("index.html", html, function (error) {
    if (error) throw error
  })
}

acceptManager();

