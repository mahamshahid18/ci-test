

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

class TemplateParamsController {
    /**
     * @todo Add general description for this endpoint
     *
     * @param array integers TODO: type description here

     * @return {EchoResponse} response from the API call
     */
    static sendIntegerArray(integers, callback) {
        // Validating required parameters
        if (integers === null || integers === undefined) {
            callback({ errorMessage: 'The parameter `integers` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/{integers}'}`;

        // Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            integers,
        });

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
                errorResponse = _BaseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _EchoResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

    /**
     * @todo Add general description for this endpoint
     *
     * @param array strings TODO: type description here

     * @return {EchoResponse} response from the API call
     */
    static sendStringArray(strings, callback) {
        // Validating required parameters
        if (strings === null || strings === undefined) {
            callback({ errorMessage: 'The parameter `strings` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/{strings}'}`;

        // Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            strings,
        });

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
                errorResponse = _BaseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _EchoResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

}

module.exports = TemplateParamsController;
