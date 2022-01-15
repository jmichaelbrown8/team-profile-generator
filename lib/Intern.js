const Employee = require("./Employee");

/** The Intern class extends {@link Employee} and adds a school name */
class Intern extends Employee {
    
    /**
     * @param {number} id - Employee id 
     * @param {string} name - Employee name
     * @param {string} email - Employee email
     * @param {string} school - Intern school
     */
    constructor(id, name, email, school) {

        super(id, name, email);
        if (!school)
            throw new Error("You must include school for an Intern class");
        this.school = school;
    }

    /** Returns the Intern's school */
    getSchool() {
        return this.school;
    }

    /** Overrides {@link Employee.getRole} */
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;