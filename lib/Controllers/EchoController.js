
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
const _EchoResponse = require('../Models/EchoResponse');

const EchoController = {
    /**
     * TODO: type endpoint description here
     * @param {Dictionary} queryParameters    Optional parameter: Additional optional query parameters are supported by this endpoint
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {EchoResponse}    Returns an instance of EchoResponse type
     */
    queryEcho: function queryEcho(queryParameters, callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/'}`;

        // append optional parameters to the query
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder,
            queryParameters == null ? null : queryParameters);

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        const cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'queryEcho');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _EchoResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'queryEcho');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * Sends the request including any form params as JSON
     * @param {object} input    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}    Returns an instance of mixed type
     */
    formEcho: function formEcho(input, callback) {
        // Validating required parameters
        if (input === null || input === undefined) {
            callback({ errorMessage: 'The parameter `input` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // prepare form data
        const _form = {
            input: input,
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
                errorResponse = _BaseController.validateResponse(_context, 'formEcho');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                const parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'formEcho');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * Echo's back the request
     * @param {object} input    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}    Returns an instance of mixed type
     */
    jsonEcho: function jsonEcho(input, callback) {
        // Validating required parameters
        if (input === null || input === undefined) {
            callback({ errorMessage: 'The parameter `input` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(input);

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(input),
        };

        // Build the response processing.
        const cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'jsonEcho');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                const parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'jsonEcho');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

};

module.exports = EchoController;
