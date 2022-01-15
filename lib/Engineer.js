const Employee = require("./Employee");

class Engineer extends Employee {
    
    constructor(id, name, email, github) {
        super(id, name, email);
        if (!github)
            throw new Error('You must include github');
        this.github = github;
    }

}

module.exports = Engineer;