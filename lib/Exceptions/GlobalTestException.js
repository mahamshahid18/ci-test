/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
 'use strict';


const APIException = require('./APIException');


/**
 * Creates an instance of GlobalTestException
 *
 * @constructor
 * @param	{string}		reason			The message for error cause
 * @param	{HttpContext}	_context		HttpContext containing request and response objects
 */
const GlobalTestException = function GlobalTestException(reason, _context) {
    if (!_context) {
        APIException.call(this, reason || null, null);

        /**
         * Represents the server's exception message
         */
        this.serverMessage = null;

        /**
         * Represents the server's error code
         */
        this.serverCode = null;
    } else {
        APIException.call(this, reason, _context);

        if (_context.response.body === undefined || _context.response.body === null || _context.response.body === '') return;

        let response;
        try {
            response = JSON.parse(_context.response.body);
        } catch (ex) {
            response = JSON.parse(JSON.stringify(_context.response.body));
        }

        /**
         * Represents the server's exception message
         */
        this.serverMessage = (response.ServerMessage !== null && response.ServerMessage !== undefined) ? response.ServerMessage : null;

        /**
         * Represents the server's error code
         */
        this.serverCode = (response.ServerCode !== null && response.ServerCode !== undefined) ? response.ServerCode : null;
    }
};

GlobalTestException.prototype = new APIException();
GlobalTestException.prototype.constructor = GlobalTestException;

/**
 * Represents the server's exception message
 *
 * @return {string}  Returns "serverMessage" property
 */
GlobalTestException.prototype.getServerMessage = function getServerMessage() {
    return this.serverMessage;
};

/**
 * Setter for ServerMessage
 *
 * @param  {string} value  Sets the value of value property
 * @return {void}						 Does not return anything
 */
GlobalTestException.prototype.setServerMessage = function setServerMessage(value) {
    this.serverMessage = value;
};

/**
 * Represents the server's error code
 *
 * @return {int}  Returns "serverCode" property
 */
GlobalTestException.prototype.getServerCode = function getServerCode() {
    return this.serverCode;
};

/**
 * Setter for ServerCode
 *
 * @param  {int} value  Sets the value of value property
 * @return {void}						 Does not return anything
 */
GlobalTestException.prototype.setServerCode = function setServerCode(value) {
    this.serverCode = value;
};


module.exports = GlobalTestException;
