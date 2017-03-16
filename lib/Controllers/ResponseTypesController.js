
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
const _SuiteCode = require('../Models/SuiteCode');
const _Employee = require('../Models/Employee');
const _Days = require('../Models/Days');
const moment = require('moment');

const ResponseTypesController = {
    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {array}  Returns an instance of array type
     */
    getUnixDateTimeArray: function getUnixDateTimeArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/unixdatetime';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getUnixDateTimeArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = parsed.map(dateTimeString =>
                    new Date(dateTimeString).getTime());
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getUnixDateTimeArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {array}  Returns an instance of array type
     */
    get1123DateTimeArray: function get1123DateTimeArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/1123datetime';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'get1123DateTimeArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = parsed.map(dateTimeString =>
                    new Date(dateTimeString).toUTCString());
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'get1123DateTimeArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {dateTime}  Returns an instance of dateTime type
     */
    getUnixDateTime: function getUnixDateTime(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/unixdatetime';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getUnixDateTime');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let _strResult = JSON.parse(_response.body);
                let _result = new Date(_strResult).getTime();
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getUnixDateTime');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {dateTime}  Returns an instance of dateTime type
     */
    get1123DateTime: function get1123DateTime(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/1123datetime';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'get1123DateTime');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let _strResult = _response.body;
                let _result = new Date(_strResult).toUTCString();
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'get1123DateTime');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {void}  Returns an instance of void type
     */
    getHeaders: function getHeaders(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/headers';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getHeaders');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, null, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getHeaders');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {array}  Returns an instance of array type
     */
    getBooleanArray: function getBooleanArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/boolean';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getBooleanArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getBooleanArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {bool}  Returns an instance of bool type
     */
    getBoolean: function getBoolean(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/boolean';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getBoolean');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let _strResult = _response.body;
                let _result = JSON.parse(_strResult);
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getBoolean');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {array}  Returns an instance of array type
     */
    get3339DatetimeArray: function get3339DatetimeArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/3339datetime';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'get3339DatetimeArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = parsed.map(dateTimeString =>
                    moment(dateTimeString).parseZone().format());
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'get3339DatetimeArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {dateTime}  Returns an instance of dateTime type
     */
    get3339Datetime: function get3339Datetime(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/3339datetime';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'get3339Datetime');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let _strResult = _response.body;
                let _result = moment(_strResult).parseZone().format();
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'get3339Datetime');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}  Returns an instance of mixed type
     */
    getDynamicArray: function getDynamicArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/dynamic';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getDynamicArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getDynamicArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}  Returns an instance of mixed type
     */
    getDynamic: function getDynamic(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/dynamic';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getDynamic');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getDynamic');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * Get an array of integers.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {array}  Returns an instance of array type
     */
    getIntegerArray: function getIntegerArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/integer';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getIntegerArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getIntegerArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * Gets a integer response
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {int}  Returns an instance of int type
     */
    getInteger: function getInteger(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/integer';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getInteger');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let _strResult = _response.body;
                let _result = JSON.parse(_strResult);
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getInteger');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * gets a binary object
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {binary}  Returns an instance of binary type
     */
    getBinary: function getBinary(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/binary';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getBinary');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getBinary');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {double}  Returns an instance of double type
     */
    getPrecision: function getPrecision(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/precision';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getPrecision');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let _strResult = _response.body;
                let _result = JSON.parse(_strResult);
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getPrecision');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {array}  Returns an instance of array type
     */
    getIntEnumArray: function getIntEnumArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/enum';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
            'type': 'int',
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getIntEnumArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getIntEnumArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {SuiteCode}  Returns an instance of SuiteCode type
     */
    getIntEnum: function getIntEnum(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/enum';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'type': 'int',
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getIntEnum');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let _strResult = _response.body;
                let _result = parseInt(_strResult);
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getIntEnum');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {array}  Returns an instance of array type
     */
    getModelArray: function getModelArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/model';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getModelArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = parsed.map(model =>
                    new _Employee(model));
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getModelArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {Days}  Returns an instance of Days type
     */
    getStringEnum: function getStringEnum(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/enum';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'type': 'string',
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getStringEnum');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let _strResult = _response.body;
                let _result = _strResult;
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getStringEnum');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {array}  Returns an instance of array type
     */
    getStringEnumArray: function getStringEnumArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/enum';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
            'type': 'string',
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getStringEnumArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getStringEnumArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {Employee}  Returns an instance of Employee type
     */
    getModel: function getModel(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/model';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getModel');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _Employee(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getModel');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {long}  Returns an instance of long type
     */
    getLong: function getLong(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri(_servers.MDEFAULT);

        let _queryBuilder = _baseUri + '/response/long';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getLong');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let _strResult = _response.body;
                let _result = Number(_strResult);
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getLong');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {dateTime}  Returns an instance of dateTime type
     */
    getDate: function getDate(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/date';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getDate');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let _strResult = _response.body;
                let _result = moment(_strResult).format('YYYY-MM-DD');
                callback(null, _result, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getDate');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {array}  Returns an instance of array type
     */
    getDateArray: function getDateArray(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/response/date';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'getDateArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = parsed.map(dateTimeString =>
                    moment(dateTimeString).format('YYYY-MM-DD'));
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'getDateArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

};

module.exports = ResponseTypesController;
