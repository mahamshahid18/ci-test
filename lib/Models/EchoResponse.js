
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
 *
 * @constructor
 * @param   {Object}  obj    The object passed to constructor
 */
const EchoResponse = function EchoResponse(obj) {
    if (!obj) {
        this.body = null;
        this.headers = null;
        this.method = null;
        this.path = null;
        this.query = null;
        this.uploadCount = null;
    } else {
        this.body = (obj.body !== undefined &&
            obj.body !== null) ? obj.body : null;
        this.headers = (obj.headers !== undefined &&
            obj.headers !== null) ? obj.headers : null;
        this.method = (obj.method !== undefined &&
            obj.method !== null) ? obj.method : null;
        this.path = (obj.path !== undefined &&
            obj.path !== null) ? obj.path : null;
        this.query = (obj.query !== undefined &&
            obj.query !== null) ? new QueryParameter(obj.query) : null;
        this.uploadCount = (obj.uploadCount !== undefined &&
            obj.uploadCount !== null) ? obj.uploadCount : null;
    }
};

EchoResponse.prototype = new BaseModel();
EchoResponse.prototype.constructor = EchoResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {dictionary|null}  Returns {body} property of EchoResponse class
 */
EchoResponse.prototype.getBody =
    function getBody() {
        return this.body;
    };

/**
 * Setter for Body
 *
 * @param {dictionary|null} value  Sets the value of body property of EchoResponse class
 * @return {void}  Doesn't return anything
 */
EchoResponse.prototype.setBody =
    function setBody(value) {
        this.body = value;
    };

/**
 * TODO: Write general description for this method
 *
 * @return {dictionary|null}  Returns {headers} property of EchoResponse class
 */
EchoResponse.prototype.getHeaders =
    function getHeaders() {
        return this.headers;
    };

/**
 * Setter for Headers
 *
 * @param {dictionary|null} value  Sets the value of headers property of EchoResponse class
 * @return {void}  Doesn't return anything
 */
EchoResponse.prototype.setHeaders =
    function setHeaders(value) {
        this.headers = value;
    };

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}  Returns {method} property of EchoResponse class
 */
EchoResponse.prototype.getMethod =
    function getMethod() {
        return this.method;
    };

/**
 * Setter for Method
 *
 * @param {string|null} value  Sets the value of method property of EchoResponse class
 * @return {void}  Doesn't return anything
 */
EchoResponse.prototype.setMethod =
    function setMethod(value) {
        this.method = value;
    };

/**
 * relativePath
 *
 * @return {string|null}  Returns {path} property of EchoResponse class
 */
EchoResponse.prototype.getPath =
    function getPath() {
        return this.path;
    };

/**
 * Setter for Path
 *
 * @param {string|null} value  Sets the value of path property of EchoResponse class
 * @return {void}  Doesn't return anything
 */
EchoResponse.prototype.setPath =
    function setPath(value) {
        this.path = value;
    };

/**
 * TODO: Write general description for this method
 *
 * @return {dictionary|null}  Returns {query} property of EchoResponse class
 */
EchoResponse.prototype.getQuery =
    function getQuery() {
        return this.query;
    };

/**
 * Setter for Query
 *
 * @param {dictionary|null} value  Sets the value of query property of EchoResponse class
 * @return {void}  Doesn't return anything
 */
EchoResponse.prototype.setQuery =
    function setQuery(value) {
        this.query = value;
    };

/**
 * TODO: Write general description for this method
 *
 * @return {int|null}  Returns {uploadCount} property of EchoResponse class
 */
EchoResponse.prototype.getUploadCount =
    function getUploadCount() {
        return this.uploadCount;
    };

/**
 * Setter for UploadCount
 *
 * @param {int|null} value  Sets the value of uploadCount property of EchoResponse class
 * @return {void}  Doesn't return anything
 */
EchoResponse.prototype.setUploadCount =
    function setUploadCount(value) {
        this.uploadCount = value;
    };


module.exports = EchoResponse;
