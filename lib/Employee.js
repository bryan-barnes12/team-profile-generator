class Employee {
    constructor(empName, empId, empEmail) {
        this._empName = empName;
        this._empId = empId;
        this._empEmail = empEmail;
        this._empRole = 'Employee'
    }
    get empName() {
        return this._empName;
    }
    get empId() {
        return this._empId;
    }
    get empEmail() {
        return this._empEmail;
    }
    get empRole() {
        return this._empRole;
    }
};


module.exports = Employee;