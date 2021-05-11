const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(empName, empId, empEmail, empGitName) {
        super(empName, empId, empEmail);
        this._empGitName = empGitName;
        this._empRole = 'Engineer';
    }
    get empSchool() {
        return this._empGitName;
    }
};

module.exports = Engineer;