
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
const _EchoResponse = require('../Models/EchoResponse');

const TemplateParamsController = {
    /**
     * TODO: type endpoint description here
     * @param {array} integers    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {EchoResponse}	Returns an instance of EchoResponse type
     */
    sendIntegerArray: function sendIntegerArray(integers, callback) {
        // Validating required parameters
        if (integers === null || integers === undefined) {
            return callback({errorMessage: 'The parameter 'integers' is a required parameter and cannot be null.', errorCode: -1}, null, null);
        }
        // prepare query string for API call;
        let _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/{integers}';

        // Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            'integers': integers
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK'
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendIntegerArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _EchoResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendIntegerArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {array} strings    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {EchoResponse}	Returns an instance of EchoResponse type
     */
    sendStringArray: function sendStringArray(strings, callback) {
        // Validating required parameters
        if (strings === null || strings === undefined) {
            return callback({errorMessage: 'The parameter 'strings' is a required parameter and cannot be null.', errorCode: -1}, null, null);
        }
        // prepare query string for API call;
        let _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/{strings}';

        // Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            'strings': strings
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK'
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendStringArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _EchoResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendStringArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

};

module.exports = TemplateParamsController;
