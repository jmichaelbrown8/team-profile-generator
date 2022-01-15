const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('constructor', () => {
        it('should work when passing in the required fields', () => {
            const myEmployee = new Intern(20, 'John Doe', 'johndoe@generic.com', 'UW');

            // it should still work with the super class
            expect(myEmployee.id).toEqual(20);
            expect(myEmployee.name).toEqual('John Doe');
            expect(myEmployee.email).toEqual('johndoe@generic.com');

            // and collect the school property
            expect(myEmployee.school).toEqual('UW');

        })

        it('should throw an error when no school value is passed', () => {
            
            const cb = () => {
                const myEmployee = new Intern(20, 'John Doe', 'johndoe@generic.com');
            }

            expect(cb).toThrow(new Error("You must include school for an Intern class"));
        })
    })

    describe('getSchool', () => {
        it('should return the correct school', () => {
            const myEmployee = new Intern(20, 'John Doe', 'johndoe@generic.com', 'UW');

            expect(myEmployee.getSchool()).toEqual('UW');
        })
    })

    describe('getRole', () => {
        it('should return overwrite the base Employee class and return "Intern"', () => {
            const myEmployee = new Intern(20, 'John Doe', 'johndoe@generic.html', 'UW');

            expect(myEmployee.getRole()).toEqual('Intern');
        })
    })

})