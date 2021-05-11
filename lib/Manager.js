const Employee = require('./Employee');

class Manager extends Employee {
    constructor(empName, empId, empEmail, empOffice) {
        super(empName, empId, empEmail);
        this._empOffice = empOffice;
        this._empRole = 'Manager';
    }
    get empOffice() {
        return this._empOffice;
    }
};

module.exports = Manager;