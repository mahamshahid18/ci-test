

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

class QueryParamController {
    /**
     * @todo Add general description for this endpoint
     *
     * @param array suites TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static integerEnumArray(suites, callback) {
        // Validating required parameters
        if (suites === null || suites === undefined) {
            callback({ errorMessage: 'The parameter `suites` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/query/integerenumarray'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            suites: (suites !== null) ? suites : null,
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
    static stringEnumArray(days, callback) {
        // Validating required parameters
        if (days === null || days === undefined) {
            callback({ errorMessage: 'The parameter `days` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/query/stringenumarray'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            days: (days !== null) ? days : null,
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
     * @param array strings TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static stringArray(strings, callback) {
        // Validating required parameters
        if (strings === null || strings === undefined) {
            callback({ errorMessage: 'The parameter `strings` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/query/stringarray'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
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
    static numberArray(integers, callback) {
        // Validating required parameters
        if (integers === null || integers === undefined) {
            callback({ errorMessage: 'The parameter `integers` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/query/numberarray'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
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
     * @param string url TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static urlParam(url, callback) {
        // Validating required parameters
        if (url === null || url === undefined) {
            callback({ errorMessage: 'The parameter `url` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/query/urlparam'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            url,
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
     * @param int number TODO: type description here
     * @param double precision TODO: type description here
     * @param string string TODO: type description here
     * @param string url TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static multipleParams(number, precision, string, url, callback) {
        // Validating required parameters
        if (number === null || number === undefined) {
            callback({ errorMessage: 'The parameter `number` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (precision === null || precision === undefined) {
            callback({ errorMessage: 'The parameter `precision` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (string === null || string === undefined) {
            callback({ errorMessage: 'The parameter `string` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (url === null || url === undefined) {
            callback({ errorMessage: 'The parameter `url` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/query/multipleparams'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            number,
            precision,
            string,
            url,
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
     * @param bool mboolean TODO: type description here
     * @param int number TODO: type description here
     * @param string string TODO: type description here
     * @param    {Dictionary}  queryParameters    Additional optional query parameters are supported
     * by this endpoint
     * @return {ServerResponse} response from the API call
     */
    static simpleQuery(mboolean, number, string, queryParameters, callback) {
        // Validating required parameters
        if (mboolean === null || mboolean === undefined) {
            callback({ errorMessage: 'The parameter `mboolean` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (number === null || number === undefined) {
            callback({ errorMessage: 'The parameter `number` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (string === null || string === undefined) {
            callback({ errorMessage: 'The parameter `string` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/query'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            boolean: mboolean,
            number,
            string,
        });

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
     * @param string string TODO: type description here

     * @return {ServerResponse} response from the API call
     */
    static stringParam(string, callback) {
        // Validating required parameters
        if (string === null || string === undefined) {
            callback({ errorMessage: 'The parameter `string` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/query/stringparam'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            string,
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

     * @return {ServerResponse} response from the API call
     */
    static noParams(callback) {
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/query/noparams'}`;

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
    static rfc3339DateTime(datetime, callback) {
        // Validating required parameters
        if (datetime === null || datetime === undefined) {
            callback({ errorMessage: 'The parameter `datetime` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/query/rfc3339datetime'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            datetime,
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
    static rfc3339DateTimeArray(datetimes, callback) {
        // Validating required parameters
        if (datetimes === null || datetimes === undefined) {
            callback({ errorMessage: 'The parameter `datetimes` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/query/rfc3339datetimearray'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            datetimes,
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
    static rfc1123DateTimeArray(datetimes, callback) {
        // Validating required parameters
        if (datetimes === null || datetimes === undefined) {
            callback({ errorMessage: 'The parameter `datetimes` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/query/rfc1123datetimearray'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            datetimes,
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
    static rfc1123DateTime(datetime, callback) {
        // Validating required parameters
        if (datetime === null || datetime === undefined) {
            callback({ errorMessage: 'The parameter `datetime` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/query/rfc1123datetime'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            datetime,
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
    static unixDateTime(datetime, callback) {
        // Validating required parameters
        if (datetime === null || datetime === undefined) {
            callback({ errorMessage: 'The parameter `datetime` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/query/unixdatetime'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            datetime,
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
    static unixDateTimeArray(datetimes, callback) {
        // Validating required parameters
        if (datetimes === null || datetimes === undefined) {
            callback({ errorMessage: 'The parameter `datetimes` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/query/unixdatetimearray'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            datetimes,
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
    static date(date, callback) {
        // Validating required parameters
        if (date === null || date === undefined) {
            callback({ errorMessage: 'The parameter `date` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/query/date'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            date,
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
    static dateArray(dates, callback) {
        // Validating required parameters
        if (dates === null || dates === undefined) {
            callback({ errorMessage: 'The parameter `dates` is a required parameter and cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/query/datearray'}`;

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            dates,
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

module.exports = QueryParamController;
