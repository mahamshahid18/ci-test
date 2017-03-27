
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');
/**
 * Creates an instance of ServerResponse
 */
class ServerResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        if (!obj) {
            super();
            this.passed = null;
            this.message = null;
            this.input = null;
            // Append to variable dictionary
            this._variableDict.message = 'Message';
        } else {
            super();

            this.passed = (obj.passed !== undefined &&
                obj.passed !== null) ?
                    obj.passed : null;
            this.message = (obj.Message !== undefined &&
                obj.Message !== null) ?
                    obj.Message : null;
            this.input = (obj.input !== undefined &&
                obj.input !== null) ?
                    obj.input : null;
            // Append to variable dictionary
            this._variableDict.message = 'Message';
        }
    }
}

module.exports = ServerResponse;
