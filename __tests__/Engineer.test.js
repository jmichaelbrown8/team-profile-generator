const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('constructor', () => {
        it('should work when passing in the required fields', () => {
            const myEmployee = new Engineer(20, 'John Doe', 'johndoe@generic.com', 'johndoe123');

            // it should still work with the super class
            expect(myEmployee.id).toEqual(20);
            expect(myEmployee.name).toEqual('John Doe');
            expect(myEmployee.email).toEqual('johndoe@generic.com');

            // and collect the github property
            expect(myEmployee.github).toEqual('johndoe123');

        })

        it('should throw an error when no values are passed', () => {
            
            const cb = () => {
                const myEmployee = new Employee();
            }

            expect(cb).toThrow();
        })
    
    })

    describe('getGithub', () => {
        it('should return the correct github username', () => {
            const myEmployee = new Engineer(20, 'John Doe', 'johndoe@generic.com', 'johndoe123');

            expect(myEmployee.getGithub()).toEqual('johndoe123');
        })
    })

    describe('getRole', () => {
        it('should return overwrite the base Employee class and return "Engineer"', () => {
            const myEmployee = new Engineer(20, 'John Doe', 'johndoe@generic.com', 'johndoe123');

            expect(myEmployee.getRole()).toEqual('Engineer');
        })
    })

})