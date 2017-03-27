
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const Person = require('./Person');
/**
 * Creates an instance of Employee
 */
class Employee extends Person {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        if (!obj) {
            super(null);
            this.department = null;
            this.dependents = null;
            this.hiredAt = null;
            this.joiningDay = 'Monday';
            this.salary = null;
            this.workingDays = null;
            this.boss = null;
        } else {
            super(obj);

            this.department = (obj.department !== undefined &&
                obj.department !== null) ?
                    obj.department : null;
            this.dependents = (obj.dependents !== undefined &&
                obj.dependents !== null) ?
                    obj.dependents.map(model =>
                        new Person(model)) : null;
            this.hiredAt = (obj.hiredAt !== undefined &&
                obj.hiredAt !== null) ?
                    new Date(obj.hiredAt).toUTCString() : null;
            this.joiningDay = (obj.joiningDay !== undefined &&
                obj.joiningDay !== null) ?
                    obj.joiningDay : null;
            this.salary = (obj.salary !== undefined &&
                obj.salary !== null) ?
                    obj.salary : null;
            this.workingDays = (obj.workingDays !== undefined &&
                obj.workingDays !== null) ?
                    obj.workingDays : null;
            this.boss = (obj.boss !== undefined &&
                obj.boss !== null) ?
                    obj.boss : null;
        }
    }
}

module.exports = Employee;
