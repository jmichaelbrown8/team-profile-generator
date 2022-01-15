const Employee = require("./Employee");

/** The Manager class extends {@link Employee} and adds an office number */
class Manager extends Employee {
    
    /**
     * @param {number} id - Employee id 
     * @param {string} name - Employee name
     * @param {string} email - Employee email
     * @param {number} officeNumber - Manager's office number
     */
    constructor(id, name, email, officeNumber) {

        super(id, name, email);
        if (!officeNumber)
            throw new Error("You must include officeNumber for a Manager class");
        this.officeNumber = officeNumber;
    }

    /** Overrides {@link Employee.getRole} */
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;