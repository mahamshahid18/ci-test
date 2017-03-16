/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
 'use strict';

const stream = require('stream');

const APIHelper = {

    /**
     * Replaces template parameters in the given url
     * @param   {String} queryBuilder    The query string builder to replace the template parameters
     * @param   {Array}  parameters      The parameters to replace in the queryBuilder
     * @returns {String} queryBuilder    The query string builder with replaced template parameters
     */
    appendUrlWithTemplateParameters(queryBuilder, parameters) {
        // perform parameter validation
        if (queryBuilder === null) {
            return;
        }
        if (parameters === null) {
            return queryBuilder;
        }

        // iterate and replace parameters
        for (let key in parameters) {
            let replaceValue = '';

            // load parameter value
            let element = parameters[key];
            if (element === null) {
                replaceValue = '';
            } else if (element instanceof Array) {
                replaceValue = element.map(el => encodeURIComponent(el));
                replaceValue = replaceValue.join('/');
            } else {
                replaceValue = encodeURIComponent(element.toString());
            }
            queryBuilder = queryBuilder.replace('{' + (key) + '}', replaceValue);
        }
        return queryBuilder;
    },

    /**
     * Appends the given set of parameters to the given query string
     * @param   {String} queryBuilder    The query url string to append the parameters
     * @param   {Array}  parameters      The parameters to append
     * @returns {String} queryBuilder    The query string appended with parameters
     */
    appendUrlWithQueryParameters(queryBuilder, parameters) {
        // perform parameter validation
        if (queryBuilder === null) {
            return;
        }
        if (parameters === queryBuilder) {
            return queryBuilder;
        }
        let hasParams = queryBuilder.indexOf('?') > -1;

        // iterate and replace parameters
        let encoded = this.urlEncodeObject(parameters);
        let separator = (hasParams) ? '&' : '?';
        queryBuilder = queryBuilder + separator + encoded;
        return queryBuilder;
    },

    /**
     * Validates and processes the given Url
     * @param  {String}  url  The Url to process
     * @return {String}       Processed url
     */
    cleanUrl(url) {
        // ensure that the urls are absolute
        let re = /^https?:\/\/[^/]+/;
        let str = url;
        let match = url.match(re);
        if (match === null) {
            return;
        }

        // remove redundant forward slashes
        let protocol = match[0];
        let queryUrl = url.substring(protocol.length);
        queryUrl = queryUrl.replace(/\/\/+/, '/');
        let result = protocol + queryUrl;
        return result;
    },

    /**
     * JSON Serialization of a given object.
     * @param	{Object} data The object to serialize into JSON
     * @return	{Object}      The serialized Json string representation of the given object
     */
    jsonSerialize(data) {
        return JSON.stringify(data);
    },

    /**
     * Formats the template parameters in the string
     * @param   {string}    str     The string containing the template
     * @return  {string}            The string with template parameters filled in.
     */
    formatString(str) {
        if (!str || arguments.length <= 1) return str;
        let args = arguments;
        for (let iter = 1; iter < arguments.length; iter = iter + 1) {
            const reg = new RegExp('\\{' + (iter - 1) + '\\}', 'gm');
            str = str.replace(reg, arguments[iter]);
        }
        return str;
    },

    /**
     * Cleans the object by removing null properties.
     * @param   {object} input Object or dictionary.
     * @return  {object} Returns the cleaned version of the object.
     */
    cleanObject(input) {
        if (input instanceof stream.Stream) {
            return input;
        }
        for (let key in input) {
            let value = input[key];
            if (value === null || value === undefined) {
                if (input.constructor === Array) {
                    input.splice(key, 1);
                } else delete input[key];
            } else if (Object.prototype.toString.call(value) === '[object Object]') {
                this.cleanObject(value);
            } else if (value.constructor === Array) {
                this.cleanObject(value);
            }
        }
        return input;
    },


    /**
     * Shallow merges the properties of two objects
     * @param {object} first   The object to merge in to
     * @param {object} second  The object to be added to first
     *
     * @return {object}        The merged (modified) first object
     */
    merge(first, second) {
        for (let attrname in second) {
            first[attrname] = second[attrname];
        }
        return first;
    },

    /**
     * Checks if the elements of the given array are all primitives
     * @param {array}  value   The array to be checked
     *
     * @return {bool}          The result of primitive checking
     */
    isPrimitiveArray(value) {
        if (value.constructor && value.constructor !== Array) {
            return false;
        }
        if (value.length === 0) return true;
        return value.every(obj =>
            (obj === null
              || obj === undefined)
              || (obj.constructor
              && [String, Number, Boolean].indexOf(obj.constructor) >= 0));
    },

    /**
     * Converts an object to formdata serialization.
     * @param {Object} obj  The object to serialize
     * @param {array} keys The keys of the object
     * @return {array<key,value>} Result of serialization
     */
    formDataEncodeObject(obj, keys) {
        let query = '';
        let key;
        let value;
        let fullSubName;
        let subName;
        let subValue;
        let innerObj;
        let iter;
        if (!keys) {
            keys = [];
        }
        for (key in obj) {
            value = obj[key];
            if (value instanceof stream.Stream) {
                keys.push({
                    key: key,
                    value: value
                });
            } else if (value instanceof Array) {
                let arrayFormat = '{0}[{1}]';
                for (iter = 0; iter < value.length; iter = iter + 1) {
                    subValue = value[iter];
                    fullSubName = this.formatString(arrayFormat, key, iter);
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    this.formDataEncodeObject(innerObj, keys);
                }
            } else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = key + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    this.formDataEncodeObject(innerObj, keys);
                }
            } else if (value !== undefined && value !== null) {
                if (!(value instanceof Object)) {
                    keys.push({
                        key: key,
                        value: value
                    });
                }
            }
        }
        return keys;
    },

    /**
     * Converts an object to x-www-form-urlencoded serialization.
     * @param  {Object} obj The object to be serialized
     * @return {String}     The result of serialization
     */
    urlEncodeObject(obj) {
        let params = this.formDataEncodeObject(obj);
        let query = '';
        for (let index in params) {
            let pair = params[index];
            let key = pair.key;
            let value = pair.value;
            query = query += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
        }
        return query.length ? query.substr(0, query.length - 1) : query;
    }
};

module.exports = APIHelper;
