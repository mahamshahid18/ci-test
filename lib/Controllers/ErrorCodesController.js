
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */

var _request = require("../Http/Client/RequestClient");
var _configuration = require("../configuration");
var _servers = require("../Servers");
var _APIHelper = require("../APIHelper");
var _BaseController = require("./BaseController");
var _LocalTestException = require("../Exceptions/LocalTestException");

var ErrorCodesController = {
    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}	Returns an instance of mixed type
     */
    get401: function get401(callback) {
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/error/401";

        // validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        // Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers
        };

        // Build the response processing.
        var cb = function cb(_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "get401");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else if (_response.statusCode === 401) {
                callback({errorMessage: "401 Local", errorCode: 401, errorResponse: new _LocalTestException("401 Local", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 421) {
                callback({errorMessage: "Default", errorCode: 421, errorResponse: new _LocalTestException("Default", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 431) {
                callback({errorMessage: "Default", errorCode: 431, errorResponse: new _LocalTestException("Default", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 432) {
                callback({errorMessage: "Default", errorCode: 432, errorResponse: new _LocalTestException("Default", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 441) {
                callback({errorMessage: "Default", errorCode: 441, errorResponse: new _LocalTestException("Default", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 0) {
                callback({errorMessage: "Invalid response.", errorCode: 0, errorResponse: new _LocalTestException("Invalid response.", _context)}, null, _context);
                return;
            } else {
                errorResponse = _BaseController.validateResponse(_context, "get401");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}	Returns an instance of mixed type
     */
    get500: function get500(callback) {
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/error/500";

        // validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        // Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers
        };

        // Build the response processing.
        var cb = function cb(_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "get500");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "get500");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * TODO: type endpoint description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}	Returns an instance of mixed type
     */
    get400: function get400(callback) {
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/error/400";

        // validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "Stamplay SDK"
        };

        // Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers
        };

        // Build the response processing.
        var cb = function cb(_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "get400");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "get400");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

};

module.exports = ErrorCodesController;
