
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');
/**
 * Creates an instance of QueryParameter
 */
class QueryParameter extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        if (!obj) {
            super();
            this.key = null;
        } else {
            super();

            this.key = (obj.key !== undefined &&
                obj.key !== null) ?
                    obj.key : null;
        }
    }
}

module.exports = QueryParameter;
