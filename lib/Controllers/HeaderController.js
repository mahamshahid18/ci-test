
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
 'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _servers = require('../Servers');
const _APIHelper = require('../APIHelper');
const _BaseController = require('./BaseController');
const _ServerResponse = require('../Models/ServerResponse');

const HeaderController = {
    /**
     * Sends a single header params
     * @param {string} customHeader    Required parameter: Example:
     * @param {string} value    Required parameter: Represents the value of the custom header
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}	Returns an instance of ServerResponse type
     */
    sendHeaders: function sendHeaders(customHeader, value, callback) {
        // Validating required parameters
        if (customHeader === null || customHeader === undefined) {
            return callback({errorMessage: 'The parameter 'customHeader' is a required parameter and cannot be null.', errorCode: -1}, null, null);
        } else if (value === null || value === undefined) {
            return callback({errorMessage: 'The parameter 'value' is a required parameter and cannot be null.', errorCode: -1}, null, null);
        }
        // prepare query string for API call;
        let _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/header';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'custom-header': customHeader,
            'user-agent': 'Stamplay SDK'
        };

        // prepare form data
        let _form = {
            'value': value
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendHeaders');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendHeaders');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

};

module.exports = HeaderController;
