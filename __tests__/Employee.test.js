const Employee = require('../lib/Employee')


describe('Employee Class initialization', () => {
    test('should generate a new employee object', () => {
        const testEmployee = new Employee('test', 1, 'a@b.c')
        expect(testEmployee).toEqual({
            _empName: 'test',
            _empId: 1,
            _empEmail: 'a@b.c',
            _empRole: 'Employee'
        });
    });

    test('returns employee name', () => {
        const testEmployee = new Employee('test', 1, 'a@b.c')
        expect(testEmployee.empName).toEqual('test');
    });
    test('returns employee id', () => {
        const testEmployee = new Employee('test', 1, 'a@b.c')
        expect(testEmployee.empId).toEqual(1);
    });
    test('returns employee email', () => {
        const testEmployee = new Employee('test', 1, 'a@b.c')
        expect(testEmployee.empEmail).toEqual('a@b.c');
    });
    test('returns employee role', () => {
        const testEmployee = new Employee('test', 1, 'a@b.c')
        expect(testEmployee.empRole).toEqual('Employee');
    });
});