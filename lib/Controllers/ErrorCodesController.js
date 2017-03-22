

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
const _LocalTestException = require('../Exceptions/LocalTestException');

const ErrorCodesController = {
    /**
     * @todo Add general description for this endpoint
     *

     * @return {mixed} response from the API call
     */
    get401: function get401(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/error/401'}`;

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
                const parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else if (_response.statusCode === 401) {
                callback({ errorMessage: '401 Local', errorCode: 401, errorResponse: new _LocalTestException('401 Local', _context) }, null, _context);
            } else if (_response.statusCode === 421) {
                callback({ errorMessage: 'Default', errorCode: 421, errorResponse: new _LocalTestException('Default', _context) }, null, _context);
            } else if (_response.statusCode === 431) {
                callback({ errorMessage: 'Default', errorCode: 431, errorResponse: new _LocalTestException('Default', _context) }, null, _context);
            } else if (_response.statusCode === 432) {
                callback({ errorMessage: 'Default', errorCode: 432, errorResponse: new _LocalTestException('Default', _context) }, null, _context);
            } else if (_response.statusCode === 441) {
                callback({ errorMessage: 'Default', errorCode: 441, errorResponse: new _LocalTestException('Default', _context) }, null, _context);
            } else if (_response.statusCode === 0) {
                callback({ errorMessage: 'Invalid response.', errorCode: 0, errorResponse: new _LocalTestException('Invalid response.', _context) }, null, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * @todo Add general description for this endpoint
     *

     * @return {mixed} response from the API call
     */
    get500: function get500(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/error/500'}`;

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
                const parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * @todo Add general description for this endpoint
     *

     * @return {mixed} response from the API call
     */
    get400: function get400(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/error/400'}`;

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
                const parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

};

module.exports = ErrorCodesController;
