
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const Person = require('./Person');
/**
 * Creates an instance of Employee
 *
 * @constructor
 * @param   {Object}  obj    The object passed to constructor
 */
const Employee = function Employee(obj) {
    if (!obj) {
        Person.call(this, null);
        this.department = null;
        this.dependents = null;
        this.hiredAt = null;
        this.joiningDay = 'Monday';
        this.salary = null;
        this.workingDays = null;
        this.boss = null;
    } else {
        Person.call(this, obj);

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
};
Employee.prototype = new Person();
Employee.prototype.constructor = Employee;

/**
 * TODO: Write general description for this method
 *
 * @return string  Returns {1} property of Employee class
 */
Employee.prototype.getDepartment =
    function getDepartment() {
        return this.department;
    };

/**
 * Setter for Department
 *
 * @param {0} value  Sets the value of department property of Employee class
 * @return {void}  Doesn't return anything
 */
Employee.prototype.setDepartment =
    function setDepartment(value) {
        this.department = value;
    };

/**
 * TODO: Write general description for this method
 *
 * @return array  Returns {1} property of Employee class
 */
Employee.prototype.getDependents =
    function getDependents() {
        return this.dependents;
    };

/**
 * Setter for Dependents
 *
 * @param {0} value  Sets the value of dependents property of Employee class
 * @return {void}  Doesn't return anything
 */
Employee.prototype.setDependents =
    function setDependents(value) {
        this.dependents = value;
    };

/**
 * TODO: Write general description for this method
 *
 * @return dateTime  Returns {1} property of Employee class
 */
Employee.prototype.getHiredAt =
    function getHiredAt() {
        return this.hiredAt;
    };

/**
 * Setter for HiredAt
 *
 * @param {0} value  Sets the value of hiredAt property of Employee class
 * @return {void}  Doesn't return anything
 */
Employee.prototype.setHiredAt =
    function setHiredAt(value) {
        this.hiredAt = value;
    };

/**
 * TODO: Write general description for this method
 *
 * @return Days  Returns {1} property of Employee class
 */
Employee.prototype.getJoiningDay =
    function getJoiningDay() {
        return this.joiningDay;
    };

/**
 * Setter for JoiningDay
 *
 * @param {0} value  Sets the value of joiningDay property of Employee class
 * @return {void}  Doesn't return anything
 */
Employee.prototype.setJoiningDay =
    function setJoiningDay(value) {
        this.joiningDay = value;
    };

/**
 * TODO: Write general description for this method
 *
 * @return int  Returns {1} property of Employee class
 */
Employee.prototype.getSalary =
    function getSalary() {
        return this.salary;
    };

/**
 * Setter for Salary
 *
 * @param {0} value  Sets the value of salary property of Employee class
 * @return {void}  Doesn't return anything
 */
Employee.prototype.setSalary =
    function setSalary(value) {
        this.salary = value;
    };

/**
 * TODO: Write general description for this method
 *
 * @return array  Returns {1} property of Employee class
 */
Employee.prototype.getWorkingDays =
    function getWorkingDays() {
        return this.workingDays;
    };

/**
 * Setter for WorkingDays
 *
 * @param {0} value  Sets the value of workingDays property of Employee class
 * @return {void}  Doesn't return anything
 */
Employee.prototype.setWorkingDays =
    function setWorkingDays(value) {
        this.workingDays = value;
    };

/**
 * TODO: Write general description for this method
 *
 * @return Boss|null  Returns {1} property of Employee class
 */
Employee.prototype.getBoss =
    function getBoss() {
        return this.boss;
    };

/**
 * Setter for Boss
 *
 * @param {0} value  Sets the value of boss property of Employee class
 * @return {void}  Doesn't return anything
 */
Employee.prototype.setBoss =
    function setBoss(value) {
        this.boss = value;
    };


module.exports = Employee;
