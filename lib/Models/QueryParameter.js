
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
 'use strict';

const BaseModel = require('./BaseModel');
/**
 * Creates an instance of QueryParameter
 *
 * @constructor
 * @param   {Object}  obj    The object passed to constructor
 */
const QueryParameter = function QueryParameter(obj) {
    if (!obj) {
        this.key = null;
    } else {
        this.key = (obj.key !== undefined && obj.key !== null) ? obj.key : null;
    }
};

QueryParameter.prototype = new BaseModel();
QueryParameter.prototype.constructor = QueryParameter;

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}  Returns {key} property of QueryParameter class
 */
QueryParameter.prototype.getKey = function getKey() {
    return this.key;
};

/**
 * Setter for Key
 *
 * @param {string|null} value  Sets the value of key property of QueryParameter class
 * @return {void}  Doesn't return anything
 */
QueryParameter.prototype.setKey = function setKey(value) {
    this.key = value;
};


module.exports = QueryParameter;
