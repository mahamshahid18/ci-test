
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');
const moment = require('moment');
/**
 * Creates an instance of Person
 *
 * @constructor
 * @param   {Object}  obj    The object passed to constructor
 */
const Person = function Person(obj) {
    if (!obj) {
        this.address = null;
        this.age = null;
        this.birthday = null;
        this.birthtime = null;
        this.name = null;
        this.uid = null;
    } else {
        this.address = (obj.address !== undefined &&
            obj.address !== null) ? obj.address : null;
        this.age = (obj.age !== undefined &&
            obj.age !== null) ? obj.age : null;
        this.birthday = (obj.birthday !== undefined &&
            obj.birthday !== null) ? moment(obj.birthday).format('YYYY-MM-DD') : null;
        this.birthtime = (obj.birthtime !== undefined &&
            obj.birthtime !== null) ? moment(obj.birthtime).parseZone().format() : null;
        this.name = (obj.name !== undefined &&
            obj.name !== null) ? obj.name : null;
        this.uid = (obj.uid !== undefined &&
            obj.uid !== null) ? obj.uid : null;
    }
};

Person.prototype = new BaseModel();
Person.prototype.constructor = Person;

/**
 * TODO: Write general description for this method
 *
 * @return {string}  Returns {address} property of Person class
 */
Person.prototype.getAddress =
    function getAddress() {
        return this.address;
    };

/**
 * Setter for Address
 *
 * @param {string} value  Sets the value of address property of Person class
 * @return {void}  Doesn't return anything
 */
Person.prototype.setAddress =
    function setAddress(value) {
        this.address = value;
    };

/**
 * TODO: Write general description for this method
 *
 * @return {long}  Returns {age} property of Person class
 */
Person.prototype.getAge =
    function getAge() {
        return this.age;
    };

/**
 * Setter for Age
 *
 * @param {long} value  Sets the value of age property of Person class
 * @return {void}  Doesn't return anything
 */
Person.prototype.setAge =
    function setAge(value) {
        this.age = value;
    };

/**
 * TODO: Write general description for this method
 *
 * @return {dateTime}  Returns {birthday} property of Person class
 */
Person.prototype.getBirthday =
    function getBirthday() {
        return this.birthday;
    };

/**
 * Setter for Birthday
 *
 * @param {dateTime} value  Sets the value of birthday property of Person class
 * @return {void}  Doesn't return anything
 */
Person.prototype.setBirthday =
    function setBirthday(value) {
        this.birthday = value;
    };

/**
 * TODO: Write general description for this method
 *
 * @return {dateTime}  Returns {birthtime} property of Person class
 */
Person.prototype.getBirthtime =
    function getBirthtime() {
        return this.birthtime;
    };

/**
 * Setter for Birthtime
 *
 * @param {dateTime} value  Sets the value of birthtime property of Person class
 * @return {void}  Doesn't return anything
 */
Person.prototype.setBirthtime =
    function setBirthtime(value) {
        this.birthtime = value;
    };

/**
 * TODO: Write general description for this method
 *
 * @return {string}  Returns {name} property of Person class
 */
Person.prototype.getName =
    function getName() {
        return this.name;
    };

/**
 * Setter for Name
 *
 * @param {string} value  Sets the value of name property of Person class
 * @return {void}  Doesn't return anything
 */
Person.prototype.setName =
    function setName(value) {
        this.name = value;
    };

/**
 * TODO: Write general description for this method
 *
 * @return {string}  Returns {uid} property of Person class
 */
Person.prototype.getUid =
    function getUid() {
        return this.uid;
    };

/**
 * Setter for Uid
 *
 * @param {string} value  Sets the value of uid property of Person class
 * @return {void}  Doesn't return anything
 */
Person.prototype.setUid =
    function setUid(value) {
        this.uid = value;
    };


module.exports = Person;
