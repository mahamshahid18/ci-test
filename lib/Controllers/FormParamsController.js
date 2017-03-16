
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
const fs = require('fs');

const FormParamsController = {
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

        let _queryBuilder = _baseUri + '/form/stringenum';

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

        // prepare form data
        const _form = {
            'days': days,
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
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

        let _queryBuilder = _baseUri + '/form/integerenum';

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

        // prepare form data
        const _form = {
            'suites': suites,
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
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

        let _queryBuilder = _baseUri + '/form/string';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // prepare form data
        const _form = {
            'value': value,
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
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
     * @param {string} file    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendFile: function sendFile(file, callback) {
        // Validating required parameters
        if (file === null || file === undefined) {
            return callback({ errorMessage: 'The parameter `file` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/form/file';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // prepare form data
        const _formData = {
            file: fs.createReadStream(file),
        };

        // Remove null values
        _APIHelper.cleanObject(_formData);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            formData: _formData,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendFile');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendFile');
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

        let _queryBuilder = _baseUri + '/form/model';

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

        // prepare form data
        const _form = {
            'models': models,
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
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
     * Send a variety for form params. Returns file count and body params
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     *     {string} file    Required parameter: Example:
     *     {array} integers    Required parameter: Example:
     *     {array} models    Required parameter: Example:
     *     {array} strings    Required parameter: Example:
     *     {function} callback    Required parameter: Callback function in the form of function(error, response)
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendMixedArray: function sendMixedArray(input, callback) {
        // Validating required parameters
        if (input.file === null || input.file === undefined) {
            return callback({ errorMessage: 'The property `file` in the input object cannot be null.', errorCode: -1 }, null, null);
        } else if (input.integers === null || input.integers === undefined) {
            return callback({ errorMessage: 'The property `integers` in the input object cannot be null.', errorCode: -1 }, null, null);
        } else if (input.models === null || input.models === undefined) {
            return callback({ errorMessage: 'The property `models` in the input object cannot be null.', errorCode: -1 }, null, null);
        } else if (input.strings === null || input.strings === undefined) {
            return callback({ errorMessage: 'The property `strings` in the input object cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/form/mixed';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // prepare form data
        const _formData = {
            file: fs.createReadStream(input.file),
            integers: input.integers,
            models: input.models,
            strings: input.strings,
        };

        // Remove null values
        _APIHelper.cleanObject(_formData);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            formData: _formData,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendMixedArray');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendMixedArray');
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

        let _queryBuilder = _baseUri + '/form/model';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // prepare form data
        const _form = {
            'model': model,
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
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
     * @param {array} strings    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendStringArray: function sendStringArray(strings, callback) {
        // Validating required parameters
        if (strings === null || strings === undefined) {
            return callback({ errorMessage: 'The parameter `strings` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/form/string';

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

        // prepare form data
        const _form = {
            'strings': strings,
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
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

        let _queryBuilder = _baseUri + '/form/number';

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

        // prepare form data
        const _form = {
            'integers': integers,
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
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
     * TODO: type endpoint description here
     * @param {long} value    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ServerResponse}  Returns an instance of ServerResponse type
     */
    sendLong: function sendLong(value, callback) {
        // Validating required parameters
        if (value === null || value === undefined) {
            return callback({ errorMessage: 'The parameter `value` is a required parameter and cannot be null.', errorCode: -1 }, null, null);
        }
        // prepare query string for API call;
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = _baseUri + '/form/number';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // prepare form data
        const _form = {
            'value': value,
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
        };

        // Build the response processing.
        let cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, 'sendLong');
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                let parsed = JSON.parse(_response.body);
                parsed = new _ServerResponse(parsed);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, 'sendLong');
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

        let _queryBuilder = _baseUri + '/form/rfc3339datetime';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // prepare form data
        const _form = {
            'datetime': datetime,
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
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

        let _queryBuilder = _baseUri + '/form/rfc3339datetime';

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

        // prepare form data
        const _form = {
            'datetimes': datetimes,
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
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

        let _queryBuilder = _baseUri + '/form/rfc1123datetime';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // prepare form data
        const _form = {
            'datetime': datetime,
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
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

        let _queryBuilder = _baseUri + '/form/rfc1123datetime';

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

        // prepare form data
        const _form = {
            'datetimes': datetimes,
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
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

        let _queryBuilder = _baseUri + '/form/unixdatetime';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // prepare form data
        const _form = {
            'datetime': datetime,
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
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

        let _queryBuilder = _baseUri + '/form/unixdatetime';

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

        // prepare form data
        const _form = {
            'datetimes': datetimes,
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
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

        let _queryBuilder = _baseUri + '/form/date';

        // validate and preprocess url
        let _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        let _headers = {
            'accept': 'application/json',
            'user-agent': 'Stamplay SDK',
        };

        // prepare form data
        const _form = {
            'date': date,
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
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

        let _queryBuilder = _baseUri + '/form/date';

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

        // prepare form data
        const _form = {
            'dates': dates,
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        let _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
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

module.exports = FormParamsController;
