/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
 'use strict';


const GlobalTestException = require('./GlobalTestException');


/**
 * Creates an instance of LocalTestException
 *
 * @constructor
 * @param	{string}		reason			The message for error cause
 * @param	{HttpContext}	_context		HttpContext containing request and response objects
 */
const LocalTestException = function LocalTestException(reason, _context) {
    if (!_context) {
        GlobalTestException.call(this, reason || null, null);

        /**
         * Represents the specific endpoint info
         */
        this.secretMessageForEndpoint = null;
    } else {
        GlobalTestException.call(this, reason, _context);

        if (_context.response.body === undefined || _context.response.body === null || _context.response.body === '') return;

        let response;
        try {
            response = JSON.parse(_context.response.body);
        } catch (ex) {
            response = JSON.parse(JSON.stringify(_context.response.body));
        }

        /**
         * Represents the specific endpoint info
         */
        this.secretMessageForEndpoint = (response.SecretMessageForEndpoint !== null && response.SecretMessageForEndpoint !== undefined) ? response.SecretMessageForEndpoint : null;
    }
};

LocalTestException.prototype = new GlobalTestException();
LocalTestException.prototype.constructor = LocalTestException;

/**
 * Represents the specific endpoint info
 *
 * @return {string}  Returns "secretMessageForEndpoint" property
 */
LocalTestException.prototype.getSecretMessageForEndpoint = function getSecretMessageForEndpoint() {
    return this.secretMessageForEndpoint;
};

/**
 * Setter for SecretMessageForEndpoint
 *
 * @param  {string} value  Sets the value of value property
 * @return {void}						 Does not return anything
 */
LocalTestException.prototype.setSecretMessageForEndpoint = function setSecretMessageForEndpoint(value) {
    this.secretMessageForEndpoint = value;
};


module.exports = LocalTestException;
