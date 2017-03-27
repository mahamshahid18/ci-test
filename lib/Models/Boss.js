
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const Employee = require('./Employee');
/**
 * Creates an instance of Boss
 */
class Boss extends Employee {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        if (!obj) {
            super(null);
            this.promotedAt = null;
            this.assistant = null;
        } else {
            super(obj);

            this.promotedAt = (obj.promotedAt !== undefined &&
                obj.promotedAt !== null) ?
                    new Date(obj.promotedAt).getTime() : null;
            this.assistant = (obj.assistant !== undefined &&
                obj.assistant !== null) ?
                    new Employee(obj.assistant) : null;
        }
    }
}

module.exports = Boss;
