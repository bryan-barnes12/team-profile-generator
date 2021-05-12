const Employee = require('../lib/Employee')

const testEmployee = new Employee('test', 1, 'a@b.c')

test('generates employee object', () => {
    expect(testEmployee).toEqual({
        _empName: 'test',
        _empId: 1,
        _empEmail: 'a@b.c',
        _empRole: 'Employee'
    });
});

test('returns employee name', () => {
    expect(testEmployee.empName).toEqual('test');
});
test('returns employee id', () => {
    expect(testEmployee.empId).toEqual(1);
});
test('returns employee email', () => {
    expect(testEmployee.empEmail).toEqual('a@b.c');
});
test('returns employee role', () => {
    expect(testEmployee.empRole).toEqual('Employee');
});
