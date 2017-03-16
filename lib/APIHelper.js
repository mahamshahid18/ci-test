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
     * @returns {String} queryString     The query string builder with replaced template parameters
     */
     appendUrlWithTemplateParameters(queryBuilder, parameters) {
        // perform parameter validation
        if (queryBuilder === null) {
            return null;
        }
        if (parameters === null) {
            return queryBuilder;
        }

        let queryString;
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
            queryString = queryBuilder.replace(`{ ${(key)} }`, replaceValue);
        }
        return queryString;
    },

    /**
     * Appends the given set of parameters to the given query string
     * @param   {String} queryBuilder    The query url string to append the parameters
     * @param   {Array}  parameters      The parameters to append
     * @returns {String} queryString     The query string appended with parameters
     */
     appendUrlWithQueryParameters(queryBuilder, parameters) {
        // perform parameter validation
        if (queryBuilder === null) {
            return null;
        }
        if (parameters === queryBuilder) {
            return queryBuilder;
        }
        const hasParams = queryBuilder.indexOf('?') > -1;

        // iterate and replace parameters
        const encoded = this.urlEncodeObject(parameters);
        const separator = (hasParams) ? '&' : '?';
        const queryString = queryBuilder + separator + encoded;
        return queryString;
    },

    /**
     * Validates and processes the given Url
     * @param  {String}  url  The Url to process
     * @return {String}       Processed url
     */
     cleanUrl(url) {
        // ensure that the urls are absolute
        const re = /^https?:\/\/[^/]+/;
        const str = url;
        const match = url.match(re);
        if (match === null) {
            return;
        }

        // remove redundant forward slashes
        const protocol = match[0];
        let queryUrl = url.substring(protocol.length);
        queryUrl = queryUrl.replace(/\/\/+/, '/');
        const result = protocol + queryUrl;
        return result;
    },

    /**
     * JSON Serialization of a given object.
     * @param   {Object} data The object to serialize into JSON
     * @return  {Object}      The serialized Json string representation of the given object
     */
     jsonSerialize(data) {
        return JSON.stringify(data);
    },

    /**
     * Formats the template parameters in the string
     * @param   {string}    str             The string containing the template
     * @return  {string}    formattedStr    The string with template parameters filled in.
     */
    formatString(str) {
        let formattedStr = str;
        if (!formattedStr || arguments.length <= 1) return formattedStr;
        let args = arguments;
        for (let iter = 1; iter < arguments.length; iter = iter + 1) {
            const reg = new RegExp('\\{' + (iter - 1) + '\\}', 'gm');
            formattedStr = formattedStr.replace(reg, arguments[iter]);
        }
        return formattedStr;
    },

    /**
     * Cleans the object by removing null properties.
     * @param   {object} input      Object or dictionary.
     * @return  {object} cleanedObj  Returns the cleaned version of the object.
     */
     cleanObject(input) {
        const cleanedObj = input;
        if (cleanedObj instanceof stream.Stream) {
            return cleanedObj;
        }
        for (let key in cleanedObj) {
            let value = cleanedObj[key];
            if (value === null || value === undefined) {
                if (cleanedObj.constructor === Array) {
                    cleanedObj.splice(key, 1);
                } else delete cleanedObj[key];
            } else if (Object.prototype.toString.call(value) === '[object Object]') {
                this.cleanObject(value);
            } else if (value.constructor === Array) {
                this.cleanObject(value);
            }
        }
        return cleanedObj;
    },


    /**
     * Shallow merges the properties of two objects
     * @param {object} first   The object to merge in to
     * @param {object} second  The object to be added to first
     *
     * @return {object} merged The merged (modified) first object
     */
    merge(first, second) {
        let merged = first;
        for (const attrname in second) {
            merged[attrname] = second[attrname];
        }
        return merged;
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
     * @param {Object} obj                     The object to serialize
     * @param {array} keys                     The keys of the object
     * @return {array<key,value>}  returnKeys  Result of serialization
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
        let returnKeys = keys;
        if (!keys) {
            returnKeys = [];
        }
        for (key in obj) {
            value = obj[key];
            if (value instanceof stream.Stream) {
                returnKeys.push({
                    key: key,
                    value: value,
                });
            } else if (value instanceof Array) {
                let arrayFormat = '{0}[{1}]';
                for (iter = 0; iter < value.length; iter = iter + 1) {
                    subValue = value[iter];
                    fullSubName = this.formatString(arrayFormat, key, iter);
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    this.formDataEncodeObject(innerObj, returnKeys);
                }
            } else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = key + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    this.formDataEncodeObject(innerObj, returnKeys);
                }
            } else if (value !== undefined && value !== null) {
                if (!(value instanceof Object)) {
                    returnKeys.push({
                        key: key,
                        value: value,
                    });
                }
            }
        }
        return returnKeys;
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
    },
};

module.exports = APIHelper;
