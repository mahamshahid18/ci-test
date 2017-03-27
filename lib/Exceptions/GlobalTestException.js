/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';


const APIException = require('./APIException');


/**
 * Creates an instance of GlobalTestException
 */
class GlobalTestException extends APIException {
    /**
     * @constructor
     * @param   {string}         reason      The message for error cause
     * @param   {HttpContext}   _context     HttpContext containing request and response objects
     */
    constructor(reason, _context) {
        if (!_context) {
            super(reason || null, null);
            /**
             * Represents the server's exception message
             */
            this.serverMessage = null;

            /**
             * Represents the server's error code
             */
            this.serverCode = null;
        } else {
            super(reason, _context);
            if (_context.response.body === undefined
                   || _context.response.body === null
                   || _context.response.body === '') return;

            let response;
            try {
                response = JSON.parse(_context.response.body);
            } catch (ex) {
                response = JSON.parse(JSON.stringify(_context.response.body));
            }

            /**
             * Represents the server's exception message
             */
            this.serverMessage = (response.ServerMessage !== null
                && response.ServerMessage !== undefined) ?
                    response.ServerMessage : null;

            /**
             * Represents the server's error code
             */
            this.serverCode = (response.ServerCode !== null
                && response.ServerCode !== undefined) ?
                    response.ServerCode : null;
        }
    }
}

module.exports = GlobalTestException;
