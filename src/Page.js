// This will house the base index.html template code with a title and a space for all the employee cards
const { renderCard } = require('./Card');

module.exports = {
    renderPage: ({ teamName, employees }) => {

        const employeeHTML = employees.reduce((html, employee) => html + renderCard(employee), '');

        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${teamName} Directory</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
        </head>
        <body>
            <header class="bg-danger text-light d-flex flex-wrap justify-content-center py-4 mb-4">
                <h1>${teamName}</h1>
            </header>
            <main class="d-flex flex-wrap justify-content-center p-4">
                ${employeeHTML}
            </main>
        </body>
        </html>
        `;

    }
}