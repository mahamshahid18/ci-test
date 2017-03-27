/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';


const GlobalTestException = require('./GlobalTestException');


/**
 * Creates an instance of LocalTestException
 */
class LocalTestException extends GlobalTestException {
    /**
     * @constructor
     * @param   {string}         reason      The message for error cause
     * @param   {HttpContext}   _context     HttpContext containing request and response objects
     */
    constructor(reason, _context) {
        if (!_context) {
            super(reason || null, null);
            /**
             * Represents the specific endpoint info
             */
            this.secretMessageForEndpoint = null;
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
             * Represents the specific endpoint info
             */
            this.secretMessageForEndpoint = (response.SecretMessageForEndpoint !== null
                && response.SecretMessageForEndpoint !== undefined) ?
                    response.SecretMessageForEndpoint : null;
        }
    }
}

module.exports = LocalTestException;
