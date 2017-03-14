
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
var Employee = require("./Employee");
var Person = require("./Person");
var Days = require("./Days");
/**
 * Creates an instance of Boss
 *
 * @constructor
 * @param   {Object}  obj    The object passed to constructor
 */
var Boss = function Boss(obj) {
    if (!obj) {
        Employee.call(this, null);
        this.promotedAt = null;
        this.assistant = null;
    } else {
        Employee.call(this, obj);

        this.promotedAt = (obj.promotedAt !== undefined && obj.promotedAt !== null) ? new Date(obj.promotedAt).getTime() : null;
        this.assistant = (obj.assistant !== undefined && obj.assistant !== null) ? new Employee(obj.assistant) : null;
    }
};

Boss.prototype = new Employee();
Boss.prototype.constructor = Boss;

/**
 * TODO: Write general description for this method
 *
 * @return {dateTime}  Returns {promotedAt} property of Boss class
 */
Boss.prototype.getPromotedAt = function getPromotedAt() {
    return this.promotedAt;
};

/**
 * Setter for PromotedAt
 *
 * @param {dateTime} value  Sets the value of promotedAt property of Boss class
 * @return {void}  Doesn't return anything
 */
Boss.prototype.setPromotedAt = function setPromotedAt(value) {
    this.promotedAt = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {Employee|null}  Returns {assistant} property of Boss class
 */
Boss.prototype.getAssistant = function getAssistant() {
    return this.assistant;
};

/**
 * Setter for Assistant
 *
 * @param {Employee|null} value  Sets the value of assistant property of Boss class
 * @return {void}  Doesn't return anything
 */
Boss.prototype.setAssistant = function setAssistant(value) {
    this.assistant = value;
};


module.exports = Boss;
