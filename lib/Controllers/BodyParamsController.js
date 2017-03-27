

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

class BodyParamsController {
    /**
     * @todo Add general description for this endpoint
     *
     * @param array suites TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static sendIntegerEnumArray(suites, callback) {
        // Validating required parameters
        if (suites === null || suites === undefined) {
            callback({ errorMessage: 'The parameter `suites` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/body/integerenum'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
        });

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(suites);

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(suites),
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
    }

    /**
     * @todo Add general description for this endpoint
     *
     * @param array days TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static sendStringEnumArray(days, callback) {
        // Validating required parameters
        if (days === null || days === undefined) {
            callback({ errorMessage: 'The parameter `days` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/body/stringenum'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
        });

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(days);

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(days),
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
    }

    /**
     * @todo Add general description for this endpoint
     *
     * @param string value TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static sendString(value, callback) {
        // Validating required parameters
        if (value === null || value === undefined) {
            callback({ errorMessage: 'The parameter `value` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/body/string'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'text/plain; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: value,
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
    }

    /**
     * @todo Add general description for this endpoint
     *
     * @param object dynamic TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static sendDynamic(dynamic, callback) {
        // Validating required parameters
        if (dynamic === null || dynamic === undefined) {
            callback({ errorMessage: 'The parameter `dynamic` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/body/dynamic'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(dynamic);

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(dynamic),
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
    }

    /**
     * @todo Add general description for this endpoint
     *
     * @param array models TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static sendModelArray(models, callback) {
        // Validating required parameters
        if (models === null || models === undefined) {
            callback({ errorMessage: 'The parameter `models` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/body/model'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
        });

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(models);

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(models),
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
    }

    /**
     * @todo Add general description for this endpoint
     *
     * @param Employee model TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static sendModel(model, callback) {
        // Validating required parameters
        if (model === null || model === undefined) {
            callback({ errorMessage: 'The parameter `model` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/body/model'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(model);

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(model),
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
    }

    /**
     * @todo Add general description for this endpoint
     *
     * @param array integers TODO: type description here

     * @return {ServerResponse} response from the API call
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

        let _queryBuilder = `${_baseUri}${'/body/number'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
        });

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(integers);

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(integers),
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
    }

    /**
     * sends a string body param
     *
     * @param array sarray TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static sendStringArray(sarray, callback) {
        // Validating required parameters
        if (sarray === null || sarray === undefined) {
            callback({ errorMessage: 'The parameter `sarray` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/body/string'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
        });

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(sarray);

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(sarray),
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
    }

    /**
     * @todo Add general description for this endpoint
     *
     * @param dateTime datetime TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static sendRfc3339DateTime(datetime, callback) {
        // Validating required parameters
        if (datetime === null || datetime === undefined) {
            callback({ errorMessage: 'The parameter `datetime` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/body/rfc3339datetime'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'text/plain; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: datetime,
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
    }

    /**
     * @todo Add general description for this endpoint
     *
     * @param array datetimes TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static sendRfc3339DateTimeArray(datetimes, callback) {
        // Validating required parameters
        if (datetimes === null || datetimes === undefined) {
            callback({ errorMessage: 'The parameter `datetimes` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/body/rfc3339datetime'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
        });

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(datetimes);

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(datetimes),
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
    }

    /**
     * @todo Add general description for this endpoint
     *
     * @param dateTime datetime TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static sendRfc1123DateTime(datetime, callback) {
        // Validating required parameters
        if (datetime === null || datetime === undefined) {
            callback({ errorMessage: 'The parameter `datetime` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/body/rfc1123datetime'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'text/plain; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: datetime,
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
    }

    /**
     * @todo Add general description for this endpoint
     *
     * @param array datetimes TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static sendRfc1123DateTimeArray(datetimes, callback) {
        // Validating required parameters
        if (datetimes === null || datetimes === undefined) {
            callback({ errorMessage: 'The parameter `datetimes` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/body/rfc1123datetime'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
        });

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(datetimes);

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(datetimes),
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
    }

    /**
     * @todo Add general description for this endpoint
     *
     * @param dateTime datetime TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static sendUnixDateTime(datetime, callback) {
        // Validating required parameters
        if (datetime === null || datetime === undefined) {
            callback({ errorMessage: 'The parameter `datetime` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/body/unixdatetime'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'text/plain; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: datetime,
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
    }

    /**
     * @todo Add general description for this endpoint
     *
     * @param array datetimes TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static sendUnixDateTimeArray(datetimes, callback) {
        // Validating required parameters
        if (datetimes === null || datetimes === undefined) {
            callback({ errorMessage: 'The parameter `datetimes` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/body/unixdatetime'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
        });

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(datetimes);

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(datetimes),
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
    }

    /**
     * @todo Add general description for this endpoint
     *
     * @param dateTime date TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static sendDate(date, callback) {
        // Validating required parameters
        if (date === null || date === undefined) {
            callback({ errorMessage: 'The parameter `date` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/body/date'}`;

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'text/plain; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: date,
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
    }

    /**
     * @todo Add general description for this endpoint
     *
     * @param array dates TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static sendDateArray(dates, callback) {
        // Validating required parameters
        if (dates === null || dates === undefined) {
            callback({ errorMessage: 'The parameter `dates` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/body/date'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            array: true,
        });

        // validate and preprocess url
        const _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'Stamplay SDK',
        };

        // Remove null values
        _APIHelper.cleanObject(dates);

        // Construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _APIHelper.jsonSerialize(dates),
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
    }

}

module.exports = BodyParamsController;
