const inquirer = require('inquirer');
const fs = require('fs');

const { renderPage } = require('./src/Page');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Ask the user about their team members
console.log(renderPage( {teamName: 'The J', employees: [
    new Engineer(1, 'J. Michael Brown', 'jmichaelbrown8@Gmail.com', 'jmichaelbrown8'),
    new Intern(2, 'Jen Brown', 'jmichaelbrown8@Gmail.com', 'UCSD'),
    new Manager(3, 'Jesy Brown', 'jmichaelbrown8@Gmail.com', 8),
]} ));

// Write out the template code to the ./dist/index.html file
fs.mkdir('dist', { recursive: true }, () => {});

fs.writeFile('./dist/index.html', 
    renderPage({
        teamName: 'The J', 
        employees: [
            new Engineer(1, 'J. Michael Brown', 'jmichaelbrown8@Gmail.com', 'jmichaelbrown8'),
            new Intern(2, 'Jen Brown', 'jbro1@Gmail.com', 'UCSD'),
            new Manager(3, 'Jesy Brown', 'jbro2@Gmail.com', 8),
        ]
    }), 
    () => {}
);

