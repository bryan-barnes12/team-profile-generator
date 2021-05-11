const Employee = require('./Employee');

class Intern extends Employee {
    constructor(empName, empId, empEmail, empSchool) {
        super(empName, empId, empEmail);
        this._empSchool = empSchool;
        this._empRole = 'Intern';
    }
    get empSchool() {
        return this._empSchool;
    }
};

module.exports = Intern;