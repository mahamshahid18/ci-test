
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
const moment = require('moment');

const BodyParamsController = {
    /**
     * TODO: type endpoint description here
     * @param {array} suites    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendIntegerEnumArray: function sendIntegerEnumArray(suites, callback) {
        // Validating required parameters
        if (suites === null || suites === undefined) {
            return callback({ errorMessage: 'The parameter `suites` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/body/integerenum';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(suites);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(suites),
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendIntegerEnumArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendIntegerEnumArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {array} days    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendStringEnumArray: function sendStringEnumArray(days, callback) {
        // Validating required parameters
        if (days === null || days === undefined) {
            return callback({ errorMessage: 'The parameter `days` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/body/stringenum';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(days);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(days),
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendStringEnumArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendStringEnumArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {string} value    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendString: function sendString(value, callback) {
        // Validating required parameters
        if (value === null || value === undefined) {
            return callback({ errorMessage: 'The parameter `value` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/body/string';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'content-type': 'text/plain; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: value,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendString');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendString');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {object} dynamic    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendDynamic: function sendDynamic(dynamic, callback) {
        // Validating required parameters
        if (dynamic === null || dynamic === undefined) {
            return callback({ errorMessage: 'The parameter `dynamic` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/body/dynamic';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(dynamic);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(dynamic),
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendDynamic');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendDynamic');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {array} models    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendModelArray: function sendModelArray(models, callback) {
        // Validating required parameters
        if (models === null || models === undefined) {
            return callback({ errorMessage: 'The parameter `models` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/body/model';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(models);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(models),
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendModelArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendModelArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {Employee} model    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendModel: function sendModel(model, callback) {
        // Validating required parameters
        if (model === null || model === undefined) {
            return callback({ errorMessage: 'The parameter `model` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/body/model';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(model);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(model),
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendModel');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendModel');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {array} integers    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendIntegerArray: function sendIntegerArray(integers, callback) {
        // Validating required parameters
        if (integers === null || integers === undefined) {
            return callback({ errorMessage: 'The parameter `integers` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/body/number';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(integers);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(integers),
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendIntegerArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendIntegerArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * sends a string body param
     * @param {array} sarray    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendStringArray: function sendStringArray(sarray, callback) {
        // Validating required parameters
        if (sarray === null || sarray === undefined) {
            return callback({ errorMessage: 'The parameter `sarray` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/body/string';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(sarray);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(sarray),
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendStringArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendStringArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {dateTime} datetime    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendRfc3339DateTime: function sendRfc3339DateTime(datetime, callback) {
        // Validating required parameters
        if (datetime === null || datetime === undefined) {
            return callback({ errorMessage: 'The parameter `datetime` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/body/rfc3339datetime';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'content-type': 'text/plain; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: '' + datetime + '',
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendRfc3339DateTime');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendRfc3339DateTime');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {array} datetimes    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendRfc3339DateTimeArray: function sendRfc3339DateTimeArray(datetimes, callback) {
        // Validating required parameters
        if (datetimes === null || datetimes === undefined) {
            return callback({ errorMessage: 'The parameter `datetimes` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/body/rfc3339datetime';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(datetimes);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(datetimes),
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendRfc3339DateTimeArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendRfc3339DateTimeArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {dateTime} datetime    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendRfc1123DateTime: function sendRfc1123DateTime(datetime, callback) {
        // Validating required parameters
        if (datetime === null || datetime === undefined) {
            return callback({ errorMessage: 'The parameter `datetime` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/body/rfc1123datetime';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'content-type': 'text/plain; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: '' + datetime + '',
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendRfc1123DateTime');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendRfc1123DateTime');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {array} datetimes    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendRfc1123DateTimeArray: function sendRfc1123DateTimeArray(datetimes, callback) {
        // Validating required parameters
        if (datetimes === null || datetimes === undefined) {
            return callback({ errorMessage: 'The parameter `datetimes` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/body/rfc1123datetime';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(datetimes);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(datetimes),
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendRfc1123DateTimeArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendRfc1123DateTimeArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {dateTime} datetime    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendUnixDateTime: function sendUnixDateTime(datetime, callback) {
        // Validating required parameters
        if (datetime === null || datetime === undefined) {
            return callback({ errorMessage: 'The parameter `datetime` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/body/unixdatetime';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'content-type': 'text/plain; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: '' + datetime + '',
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendUnixDateTime');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendUnixDateTime');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {array} datetimes    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendUnixDateTimeArray: function sendUnixDateTimeArray(datetimes, callback) {
        // Validating required parameters
        if (datetimes === null || datetimes === undefined) {
            return callback({ errorMessage: 'The parameter `datetimes` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/body/unixdatetime';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(datetimes);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(datetimes),
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendUnixDateTimeArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendUnixDateTimeArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {dateTime} date    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendDate: function sendDate(date, callback) {
        // Validating required parameters
        if (date === null || date === undefined) {
            return callback({ errorMessage: 'The parameter `date` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/body/date';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'content-type': 'text/plain; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: '' + date + '',
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendDate');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendDate');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {array} dates    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendDateArray: function sendDateArray(dates, callback) {
        // Validating required parameters
        if (dates === null || dates === undefined) {
            return callback({ errorMessage: 'The parameter `dates` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/body/date';

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'array': true,
        });

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(dates);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(dates),
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendDateArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendDateArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

};

module.exports = BodyParamsController;
