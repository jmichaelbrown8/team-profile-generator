const Employee = require("./Employee");

/** The Engineer class extends {@link Employee} and adds a github username */
class Engineer extends Employee {
    
    /**
     * @param {number} id - Employee id 
     * @param {string} name - Employee name
     * @param {string} email - Employee email
     * @param {string} github - Engineer github profile
     */
    constructor(id, name, email, github) {
        super(id, name, email);
        if (!github)
            throw new Error('You must include github profile for an Engineer class');
        this.github = github;
    }

    /** @see Employee.getRole */
    getRole() {
        return 'Engineer';
    }

    /** Returns the Engineer's github profile */
    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;