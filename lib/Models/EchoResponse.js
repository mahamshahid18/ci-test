
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const QueryParameter = require('./QueryParameter');
const BaseModel = require('./BaseModel');
/**
 * Creates an instance of EchoResponse
 */
class EchoResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        if (!obj) {
            super();
            this.body = null;
            this.headers = null;
            this.method = null;
            this.path = null;
            this.query = null;
            this.uploadCount = null;
        } else {
            super();

            this.body = (obj.body !== undefined &&
                obj.body !== null) ?
                    obj.body : null;
            this.headers = (obj.headers !== undefined &&
                obj.headers !== null) ?
                    obj.headers : null;
            this.method = (obj.method !== undefined &&
                obj.method !== null) ?
                    obj.method : null;
            this.path = (obj.path !== undefined &&
                obj.path !== null) ?
                    obj.path : null;
            this.query = (obj.query !== undefined &&
                obj.query !== null) ?
                    new QueryParameter(obj.query) : null;
            this.uploadCount = (obj.uploadCount !== undefined &&
                obj.uploadCount !== null) ?
                    obj.uploadCount : null;
        }
    }
}

module.exports = EchoResponse;
