

/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _APIHelper = require('../APIHelper');
const _BaseController = require('./BaseController');
const _ServerResponse = require('../Models/ServerResponse');

const HeaderController = {
    /**
     * Sends a single header params
     *
     * @param string customHeader  TODO: type description here
     * @param string value         Represents the value of the custom header

     * @return {ServerResponse} response from the API call
     */
    sendHeaders: function sendHeaders(customHeader, value, callback) {
        // Validating required parameters
        if (customHeader === null || customHeader === undefined) {
            callback({ errorMessage: 'The parameter `customHeader` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (value === null || value === undefined) {
            callback({ errorMessage: 'The parameter `value` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/header'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'custom-header': customHeader,
            'user-agent': 'Stamplay SDK',
        };

        // prepare form data
        const _form = {
            value,
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
        };

        // Build the response processing.
        const cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

};

module.exports = HeaderController;
