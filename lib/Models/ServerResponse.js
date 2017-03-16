
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');
/**
 * Creates an instance of ServerResponse
 *
 * @constructor
 * @param   {Object}  obj    The object passed to constructor
 */
const ServerResponse = function ServerResponse(obj) {
    if (!obj) {
        this.passed = null;
        this.message = null;
        this.input = null;
        // Append to variable dictionary
        this._variableDict.message = 'Message';
    } else {
        this.passed = (obj.passed !== undefined && obj.passed !== null) ? obj.passed : null;
        this.message = (obj.Message !== undefined && obj.Message !== null) ? obj.Message : null;
        this.input = (obj.input !== undefined && obj.input !== null) ? obj.input : null;
        // Append to variable dictionary
        this._variableDict.message = 'Message';
    }
};

ServerResponse.prototype = new BaseModel();
ServerResponse.prototype.constructor = ServerResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {bool}  Returns {passed} property of ServerResponse class
 */
ServerResponse.prototype.getPassed = function getPassed() {
    return this.passed;
};

/**
 * Setter for Passed
 *
 * @param {bool} value  Sets the value of passed property of ServerResponse class
 * @return {void}  Doesn't return anything
 */
ServerResponse.prototype.setPassed = function setPassed(value) {
    this.passed = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}  Returns {message} property of ServerResponse class
 */
ServerResponse.prototype.getMessage = function getMessage() {
    return this.message;
};

/**
 * Setter for Message
 *
 * @param {string|null} value  Sets the value of message property of ServerResponse class
 * @return {void}  Doesn't return anything
 */
ServerResponse.prototype.setMessage = function setMessage(value) {
    this.message = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {dictionary|null}  Returns {input} property of ServerResponse class
 */
ServerResponse.prototype.getInput = function getInput() {
    return this.input;
};

/**
 * Setter for Input
 *
 * @param {dictionary|null} value  Sets the value of input property of ServerResponse class
 * @return {void}  Doesn't return anything
 */
ServerResponse.prototype.setInput = function setInput(value) {
    this.input = value;
};


module.exports = ServerResponse;
