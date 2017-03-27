

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
const _Employee = require('../Models/Employee');
const moment = require('moment');

class ResponseTypesController {
    /**
     * @todo Add general description for this endpoint
     *

     * @return {array} response from the API call
     */
    static getUnixDateTimeArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/response/unixdatetime'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
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
                parsed = parsed.map(dateTimeString =>
                    new Date(dateTimeString).getTime());
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

     * @return {array} response from the API call
     */
    static get1123DateTimeArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/response/1123datetime'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
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
                parsed = parsed.map(dateTimeString =>
                    new Date(dateTimeString).toUTCString());
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

     * @return {dateTime} response from the API call
     */
    static getUnixDateTime(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/response/unixdatetime'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
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
                const _strResult = JSON.parse(_response.body);
                const _result = new Date(_strResult).getTime();
                callback(null, _result, _context);
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

     * @return {dateTime} response from the API call
     */
    static get1123DateTime(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/response/1123datetime'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
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
                const _strResult = _response.body;
                const _result = new Date(_strResult).toUTCString();
                callback(null, _result, _context);
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

     * @return {void} response from the API call
     */
    static getHeaders(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/response/headers'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
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
                callback(null, null, _context);
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

     * @return {array} response from the API call
     */
    static getBooleanArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/response/boolean'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
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
                const parsed = JSON.parse(_response.body);
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

     * @return {bool} response from the API call
     */
    static getBoolean(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/response/boolean'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
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
                const _strResult = _response.body;
                const _result = JSON.parse(_strResult);
                callback(null, _result, _context);
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

     * @return {array} response from the API call
     */
    static get3339DatetimeArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/response/3339datetime'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
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
                parsed = parsed.map(dateTimeString =>
                    moment(dateTimeString).parseZone().format());
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

     * @return {dateTime} response from the API call
     */
    static get3339Datetime(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/response/3339datetime'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
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
                const _strResult = _response.body;
                const _result = moment(_strResult).parseZone().format();
                callback(null, _result, _context);
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

     * @return {mixed} response from the API call
     */
    static getDynamicArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/response/dynamic'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
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
                const parsed = JSON.parse(_response.body);
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

     * @return {mixed} response from the API call
     */
    static getDynamic(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/response/dynamic'}`;

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
    }

    /**
     * Get an array of integers.
     *

     * @return {array} response from the API call
     */
    static getIntegerArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/response/integer'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
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
                const parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

    /**
     * Gets a integer response
     *

     * @return {int} response from the API call
     */
    static getInteger(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/response/integer'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
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
                const _strResult = _response.body;
                const _result = JSON.parse(_strResult);
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

    /**
     * gets a binary object
     *

     * @return {binary} response from the API call
     */
    static getBinary(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/response/binary'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
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
                callback(null, _response.body, _context);
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

     * @return {double} response from the API call
     */
    static getPrecision(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/response/precision'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
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
                const _strResult = _response.body;
                const _result = JSON.parse(_strResult);
                callback(null, _result, _context);
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

     * @return {array} response from the API call
     */
    static getIntEnumArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/response/enum'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
            type: 'int',
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
                const parsed = JSON.parse(_response.body);
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

     * @return {SuiteCode} response from the API call
     */
    static getIntEnum(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/response/enum'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            type: 'int',
        });

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
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
                const _strResult = _response.body;
                const _result = parseInt(_strResult, 10);
                callback(null, _result, _context);
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

     * @return {array} response from the API call
     */
    static getModelArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/response/model'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
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
                parsed = parsed.map(model =>
                    new _Employee(model));
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

     * @return {Days} response from the API call
     */
    static getStringEnum(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/response/enum'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            type: 'string',
        });

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
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
                const _strResult = _response.body;
                const _result = _strResult;
                callback(null, _result, _context);
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

     * @return {array} response from the API call
     */
    static getStringEnumArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/response/enum'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
            type: 'string',
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
                const parsed = JSON.parse(_response.body);
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

     * @return {Employee} response from the API call
     */
    static getModel(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/response/model'}`;

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
                parsed = new _Employee(parsed);
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

     * @return {long} response from the API call
     */
    static getLong(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri(_servers.MDEFAULT);

        const _queryBuilder = `${_baseUri}${'/response/long'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
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
                const _strResult = _response.body;
                const _result = Number(_strResult);
                callback(null, _result, _context);
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

     * @return {dateTime} response from the API call
     */
    static getDate(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/response/date'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
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
                const _strResult = _response.body;
                const _result = moment(_strResult).format('YYYY-MM-DD');
                callback(null, _result, _context);
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

     * @return {array} response from the API call
     */
    static getDateArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/response/date'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
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
                parsed = parsed.map(dateTimeString =>
                    moment(dateTimeString).format('YYYY-MM-DD'));
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

}

module.exports = ResponseTypesController;
