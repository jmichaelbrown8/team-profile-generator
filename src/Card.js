// This will be the html template code for the employee card, to be included on the page

function getIcon( role ) {
    switch ( role ) {
        case 'Engineer':
            return '<i class="bi bi-pc-display"></i>';
        case 'Intern':
            return '<i class="bi bi-mortarboard"></i>';
        case 'Manager':
            return '<i class="bi bi-briefcase"></i>';
        default:
            return '';
    }
}

function getDetail( employee ) {
    switch ( employee.getRole() ) {
        case 'Engineer':
            return `<li class="list-group-item">Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>`;
        case 'Intern':
            return `<li class="list-group-item">School: ${employee.getSchool()}</li>`;
        case 'Manager':
            return `<li class="list-group-item">Office: ${employee.officeNumber}</li>`;
        default:
            return '';
    }    
}

module.exports = {
    renderCard: ( employee => `
        <div class="card m-2" style="width: 20rem;">
            <div class="card-title bg-primary text-light p-2">
                <h2>${employee.getName()}</h2>
                <h3>
                    ${getIcon(employee.getRole())}
                    ${employee.getRole()}
                </h3>
            </div>
            <div class="py-4 px-3">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    ${getDetail(employee)}
                </ul>
            </div>
        </div>
    `)
}