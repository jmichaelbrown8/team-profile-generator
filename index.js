const inquirer = require('inquirer');
const fs = require('fs');

const { renderPage } = require('./src/Page');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');

// Ask the user about their team members
async function recursiveAskAboutEmployee( employeeArray ) {
    
    // the first time the recursive function runs, there will not be a starting array
    if ( !employeeArray ) {
        employeeArray = [];
    }

    // the first time through, we assume it's a manager
    let role = 'Manager';

    if ( employeeArray.length ) {
        ({ role } = await inquirer.prompt(
            {
                type: 'list',
                message: 'Which role should we add next?',
                choices: ["I'm done", 'Engineer', 'Intern'],
                name: 'role'
            }
        ));
        if (role === "I'm done") {
            return employeeArray;
        }
    }
    
    let { id } = await inquirer.prompt(
        {
            type: 'number',
            message: `What is the ${role}'s employee ID?`,
            name: 'id'
        }
    );

    let { name } = await inquirer.prompt(
        {
            type: 'input',
            message: `What is the ${role}'s Name?`,
            name: 'name'
        }
    );

    let { email } = await inquirer.prompt(
        {
            type: 'input',
            message: `What is ${name}'s email address?`,
            name: 'email'
        }
    );

    switch( role ) {

        case 'Manager':
            let { officeNumber } = await inquirer.prompt({
                type: 'number',
                message: `What's ${name}'s office number?`,
                name: 'officeNumber'
            });
            employeeArray.push( new Manager(id, name, email, officeNumber) );
            break;

        case 'Engineer':
            let { github } = await inquirer.prompt({
                type: 'input',
                message: `What's ${name}'s github username?`,
                name: 'github'
            });
            employeeArray.push( new Engineer(id, name, email, github) );
            break;

        case 'Intern':
            let { school } = await inquirer.prompt({
                type: 'input',
                message: `What school does ${name} attend?`,
                name: 'school'
            });
            employeeArray.push( new Intern(id, name, email, school) );
            break;

        default:
            return employeeArray.push( new Employee(id, name, email) );
    }
        
    return recursiveAskAboutEmployee( employeeArray );

}

function writeIndexHTML( pageHTML ) {

    // Write out the template code to the ./dist/index.html file
    fs.mkdir('dist', 
        { recursive: true }, 
        err => err ? console.error(err) : console.log('Made ./dist folder')
    
    );
    
    fs.writeFile('./dist/index.html', 
        pageHTML, 
        err => err ? console.error(err) : console.log('Wrote ./dist/index.html')
    );
}

recursiveAskAboutEmployee()
    .then( employees => renderPage( employees ) )
    .then( pageHTML => writeIndexHTML( pageHTML ) );
    
