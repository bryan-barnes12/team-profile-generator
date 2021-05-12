const page = require('./src/pageTemplate');
const inquirer = require('inquirer');
const header = page.generateHeader();
const footer = page.generateFooter();

const fs = require('fs');

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const idArray = [100,001];

function generateEmployeeId(arr) {
    let id = `${arr[0]}-${arr[1]}`;
    arr[1]++;
    return id;
}


const managerQuestions = [
    {
        type: 'input',
        name: 'empName',
        message: 'Manager Name:',
    },
    {
        type: 'input',
        name: 'empId',
        message: 'Employee ID:',
        default: generateEmployeeId(idArray)
    },
    {
        type: 'input',
        name: 'empEmail',
        message: 'Manager Email:'
    },
    {
        type: 'input',
        name: 'empOffice',
        message: 'Manager Office:'
    },
    {
      type: 'list',
      name: 'addEmployee',
      message: 'Would you like to add another employee:',
      choices: [
          'Engineer',
          'Intern',
          'Done'
      ]
  },
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'empName',
        message: 'Engineer Name:',
    },
    {
        type: 'input',
        name: 'empId',
        message: 'Employee ID:',
        default: generateEmployeeId(idArray)
    },
    {
        type: 'input',
        name: 'empEmail',
        message: 'Engineer Email:'
    },
    {
        type: 'input',
        name: 'empGitName',
        message: 'Github Username:'
    },
    {
      type: 'list',
      name: 'addEmployee',
      message: 'Would you like to add another employee:',
      choices: [
          'Engineer',
          'Intern',
          'Done'
      ]
  },
]

const internQuestions = [
    {
        type: 'input',
        name: 'empName',
        message: 'Intern Name:',
    },
    {
        type: 'input',
        name: 'empId',
        message: 'Employee ID:',
        default: generateEmployeeId(idArray)
    },
    {
        type: 'input',
        name: 'empEmail',
        message: 'Intern Email:'
    },
    {
        type: 'input',
        name: 'empSchool',
        message: 'Intern School:'
    },
    {
      type: 'list',
      name: 'addEmployee',
      message: 'Would you like to add another employee:',
      choices: [
          'Engineer',
          'Intern',
          'Done'
      ]
  },
]

function compileHtml(arr) {
    arr = arr.join('');
    fs.writeFile('./dist/team.html', arr, function (err) {
        if (err) throw err;
        console.log('File output successful.')
    });
};

function newTeamMember(arr) {
    let htmlArray = arr[1];
    arr = arr[0];
    if (arr === engineerQuestions) {
        inquirer
        .prompt(arr)
        .then((data) => {
            const { empName, empId, empEmail, empGitName, addEmployee } = data;
            const newEmployee = new Engineer(empName, empId, empEmail, empGitName);
            htmlArray.push(page.generateEngineer(newEmployee));
            return addEmployee;
        })
        .then((data) => {
            if (data === 'Done') {
                htmlArray.push(footer);
                compileHtml(htmlArray);
                return;
            }
            if (data === 'Engineer') {
                newTeamMember([engineerQuestions, htmlArray]);
            }
            if (data === 'Intern') {
                newTeamMember([internQuestions, htmlArray]);
            }
        })
    }
    if (arr === internQuestions) {
        inquirer
        .prompt(arr)
        .then((data) => {
            const { empName, empId, empEmail, empSchool, addEmployee } = data;
            const newEmployee = new Intern(empName, empId, empEmail, empSchool);
            htmlArray.push(page.generateIntern(newEmployee));
            return addEmployee;
        })
        .then((data) => {
            if (data === 'Done') {
                htmlArray.push(footer);
                compileHtml(htmlArray);
                return;
            }
            if (data === 'Engineer') {
                newTeamMember([engineerQuestions, htmlArray]);
            }
            if (data === 'Intern') {
                newTeamMember([internQuestions, htmlArray]);
            }
        })
    }
}

  function init() {
    let htmlArray = [header];
    inquirer
    .prompt(managerQuestions)
    .then((data) => {
      const { empName, empId, empEmail, empOffice, addEmployee } = data;
      const newManager = new Manager(empName, empId, empEmail, empOffice);
      htmlArray.push(page.generateManager(newManager));
      return addEmployee;
    })
    .then((data) => {
        if (data[0] === 'Done') {
            htmlArray.push(footer);
            compileHtml(htmlArray);
            return;
        }
        if (data === 'Engineer') {
            return [engineerQuestions, htmlArray];
        }
        if (data === 'Intern') {
            return [internQuestions, htmlArray];
        }
    })
    .then((data) => {
        newTeamMember(data);
    })
}
init();


