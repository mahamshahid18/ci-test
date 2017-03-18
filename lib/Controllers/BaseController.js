/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const GlobalTestException = require('../Exceptions/GlobalTestException');
const LocalTestException = require('../Exceptions/LocalTestException');

const BaseController = {

    /**
     * Global error handling
     * @param   {HttpContext}   _context   HttpContext containing request and response objects
     * @param   {string}        endpName   Name of the endpoint called
     * @return  {function}      callback   Callback function which returns error, response, context
     */
    validateResponse(_context, endpName) {
        let errorObj = {
            errorMessage: '',
            errorCode: '',
            errorResponse: _context.response.body,
        };
        let returnObj = {
            error: errorObj,
            response: null,
            context: _context,
        };

        if (_context.response.statusCode === 400) {
            returnObj.error.errorMessage = '400 Global';
            returnObj.error.errorCode = 400;
        } else if (_context.response.statusCode === 402) {
            returnObj.error.errorMessage = '402 Global';
            returnObj.error.errorCode = 402;
        } else if (_context.response.statusCode === 403) {
            returnObj.error.errorMessage = '403 Global';
            returnObj.error.errorCode = 403;
        } else if (_context.response.statusCode === 404) {
            returnObj.error.errorMessage = '404 Global';
            returnObj.error.errorCode = 404;
        } else if (_context.response.statusCode === 500) {
            returnObj.error.errorMessage = '500 Global';
            returnObj.error.errorCode = 500;
            returnObj.error.errorResponse = new GlobalTestException('500 Global', _context);
        } else if (_context.response.statusCode === 0) {
            returnObj.error.errorMessage = 'Invalid response.';
            returnObj.error.errorCode = 0;
            returnObj.error.errorResponse = new GlobalTestException('Invalid response.', _context);
        } else {
            returnObj.error.errorMessage = 'HTTP Response Not OK';
            returnObj.error.errorCode = _context.response.statusCode;
        }

        return returnObj;
    },
};

module.exports = BaseController;
