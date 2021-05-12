const Intern = require('../lib/Intern')

const testIntern = new Intern('test', 1, 'a@b.c', 'school')

test('generates intern object', () => {
    expect(testIntern).toEqual({
        _empName: 'test',
        _empId: 1,
        _empEmail: 'a@b.c',
        _empRole: 'Intern',
        _empSchool: 'school'
    });
});

test('returns intern role', () => {
    expect(testIntern.empRole).toEqual('Intern');
});
test('returns intern school', () => {
    expect(testIntern.empSchool).toEqual('school');
});
