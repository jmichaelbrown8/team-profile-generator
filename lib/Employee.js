/** Employee class defines the structure for all inherited employee types */
class Employee {

    /**
     * The constructor for the Employee class expects id, name, and email to store as properties.
     * 
     * @param {number} id - an integer id number for the employee
     * @param {string} name - a string to contain the employee's full name
     * @param {string} email - a string to contain the employee's email address
     */
    constructor(id, name, email) {

        if (!id || !name || !email)
            throw new Error('You must specify an integer id, string name, and string email');

        this.id = id;
        this.name = name;
        this.email = email;

    }

    /** Returns the employee's name */
    getName() {
        return this.name;
    }

    /** Returns the employee's id */
    getId() {
        return this.id;
    }

    /** Returns the employee's email */
    getEmail() {
        return this.email;
    }

    /** Returns the employee's role */
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;