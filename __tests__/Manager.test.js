const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('constructor', () => {
        it('should work when passing in the required fields', () => {
            const myEmployee = new Manager(20, 'John Doe', 'johndoe@generic.com', 5);

            // it should still work with the super class
            expect(myEmployee.id).toEqual(20);
            expect(myEmployee.name).toEqual('John Doe');
            expect(myEmployee.email).toEqual('johndoe@generic.com');

            // and collect the school property
            expect(myEmployee.officeNumber).toEqual(5);

        })

        it('should throw an error when no officeNumber is passed', () => {
            
            const cb = () => {
                const myEmployee = new Manager(20, 'John Doe', 'johndoe@generic.com');
            }

            expect(cb).toThrow(new Error("You must include officeNumber for a Manager class"));
        })
    })

    describe('getRole', () => {
        it('should return overwrite the base Employee class and return "Manager"', () => {
            const myEmployee = new Manager(20, 'John Doe', 'johndoe@generic.com', 5);
            expect(myEmployee.getRole()).toEqual('Manager');
        })
    })

})