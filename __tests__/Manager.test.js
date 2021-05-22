const Manager = require('../lib/Manager')

const testManager = new Manager('test', 1, 'a@b.c', 1)

describe('Manager Class initialization', () => {
    test('generates manager object', () => {
        expect(testManager).toEqual({
            _empName: 'test',
            _empId: 1,
            _empEmail: 'a@b.c',
            _empRole: 'Manager',
            _empOffice: 1
        });
    });

    test('returns Manager role', () => {
        expect(testManager.empRole).toEqual('Manager');
    });
    test('returns manager office', () => {
        expect(testManager.empOffice).toEqual(1);
    });
});
