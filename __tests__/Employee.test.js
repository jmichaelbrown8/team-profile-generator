const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('constructor', () => {
        it('should work when passing in the required fields', () => {
            const myEmployee = new Employee(20, 'John Doe', 'johndoe@generic.com');

            expect(myEmployee.id).toEqual(20);
            expect(myEmployee.name).toEqual('John Doe');
            expect(myEmployee.email).toEqual('johndoe@generic.com');

        })

        it('should throw an error when no values are passed', () => {
            
            const cb = () => {
                const myEmployee = new Employee();
            }

            expect(cb).toThrow();
        })
    })

    describe('getName', () => {
        it('should return the correct name', () => {
            const myEmployee = new Employee(20, 'John Doe', 'johndoe@generic.com');

            expect(myEmployee.getName()).toEqual('John Doe');
        })
    })

    describe('getId', () => {
        it('should return the correct id', () => {
            const myEmployee = new Employee(20, 'John Doe', 'johndoe@generic.com');

            expect(myEmployee.getId()).toEqual(20);
        })
    })

    describe('getEmail', () => {
        it('should return the correct email', () => {
            const myEmployee = new Employee(20, 'John Doe', 'johndoe@generic.com');

            expect(myEmployee.getEmail()).toEqual('johndoe@generic.com');
        })
    })

    describe('getRole', () => {
        it('should return "Employee"', () => {
            const myEmployee = new Employee(20, 'John Doe', 'johndoe@generic.com');

            expect(myEmployee.getRole()).toEqual('Employee');
        })
    })
    
});