const Engineer = require('../lib/Engineer')

const testEngineer = new Engineer('test', 1, 'a@b.c', 'github')
describe('Engineer Class initialization', () => {
    test('generates engineer object', () => {
        expect(testEngineer).toEqual({
            _empName: 'test',
            _empId: 1,
            _empEmail: 'a@b.c',
            _empRole: 'Engineer',
            _empGitName: 'github'
        });
    });

    test('returns engineer role', () => {
        expect(testEngineer.empRole).toEqual('Engineer');
    });
    test('returns engineer github username', () => {
        expect(testEngineer.empGitName).toEqual('github');
    });
});