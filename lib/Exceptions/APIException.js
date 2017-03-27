/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

 /**
 * Creates an instance of APIException
 */
class APIException {
    /**
     * @constructor
     * @param   {string}         reason       The message for error cause
     * @param   {HttpContext}   _context      HttpContext containing request and response objects
     */
    constructor(reason, _context) {
        this.reason = reason;
        this.context = _context;
    }
}

module.exports = APIException;
