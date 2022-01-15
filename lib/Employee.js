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
            throw new Error();

        this.id = id;
        this.name = name;
        this.email = email;

    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;