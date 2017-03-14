/*
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */

/**
 * Contains utility methods for comparing objects and arrays
 */
var TestHelper = {

    /**
     * Helper function to get common elements of 2 arrays
     * @param   {array}   arr1     The first array
     * @param   {array}   arr2     The second array
     * @return  {array}            Returns an array of common elements from both arrays
     */
    getIntersection: function getIntersection(arr1, arr2) {
        return arr1.filter(function filter(num) {
            return arr2.indexOf(num) !== -1;
        });
    },

    /**
     * Helper function to check if 2 arrays are equal
     * @param   {array}   arr1     The first array to compare
     * @param   {array}   arr2     The second array to compare
     * @return  {boolean}          True if both arrays are equal.Matches order as well
     */
    areEqual: function areEqual(arr1, arr2) {
        return JSON.stringify(arr1) === JSON.stringify(arr2);
    },

    /**
     * Helper function to check if the response object has extra keys
     * @param   {object}   respObj     The actual response object
     * @param   {object}   expObj      The expected response object
     * @return  {boolean}              True if respObj has extra keys as compared to expObj
     */
    hasExtraKeys: function hasExtraKeys(respObj, expObj) {
        var respKeys = Object.keys(respObj);
        var expKeys = Object.keys(expObj);
        var common = TestHelper.getIntersection(respKeys, expKeys);
        var commonLen = common.length;

        return respKeys.length > common.length;
    },

    /**
     * Helper function to check the order of elements of the response and expected object
     * @param   {object}   respObj     The actual response object
     * @param   {object}   expObj      The expected response object
     * @param   {boolean}  allow       Are extra elements allowed in the actual response?
     * @return  {boolean}              True if order of elements of response and expected object match
     */
    checkOrdering: function checkOrdering(respObj, expObj, allow) {
        var respKeys = Object.keys(respObj);
        var expKeys = Object.keys(expObj);

        var rIntersect = TestHelper.getIntersection(respKeys, expKeys);
        var eIntersect = TestHelper.getIntersection(expKeys, respKeys);

        var eqOrder = TestHelper.areEqual(rIntersect, eIntersect);

        var exKey = TestHelper.hasExtraKeys(respObj, expObj);
        exKey = exKey && allow;

        return eqOrder;
    },

    /**
     * Recursively check whether the keys in response object match the keys in expected object
     * @param   {object}   response      The actual response object
     * @param   {object}   expected      The expected response object
     * @param   {boolean}  allow         Are extra elements allowed in the actual response?
     * @param   {boolean}  ordered       Should elements in response be compared in order to expected?
     * @return  {boolean}                True if response is a subset of expected
     */
    checkKeys: function checkKeys(response, expected, allow, ordered) {
        var nestedCheck;
        var objectInArray;

        var resp = Object.keys(response);
        var exp = Object.keys(expected);

        for (var key in exp) {
            objectInArray = false;
            nestedCheck = false;

            if (!response.hasOwnProperty(exp[key])) {
                return false;
            }

            if (expected[exp[key]] instanceof Array) {
                for (var nk in expected[exp[key]]) {
                    if (expected[exp[key]][nk] instanceof Object) {
                        objectInArray = true;
                        break;
                    }
                }
                if (objectInArray) {
                    nestedCheck = TestHelper.isArrayOfJsonObjectsProperSubsetOf(response[exp[key]], expected[exp[key]], false, allow, ordered);
                } else {
                    nestedCheck = TestHelper.isListProperSubsetOf(response[exp[key]], expected[exp[key]], allow, ordered);
                }
                if (!nestedCheck) {
                    return false;
                }
            } else if (expected[exp[key]] instanceof Object) {
                var expObj = expected[exp[key]];
                var respObj = response[exp[key]];

                nestedCheck = TestHelper.checkKeys(respObj, expObj, allow, ordered);
                if (!nestedCheck) {
                    return false;
                }
            }
        }
        return true;
    },

    /**
     * Recursively check whether the values in response object match the values in expected object
     * @param   {object}   response      The actual response object
     * @param   {object}   expected      The expected response object
     * @param   {boolean}  allow         Are extra elements allowed in the actual response?
     * @param   {boolean}  ordered       Should elements in response be compared in order to expected?
     * @param   {number}   orderResp     The index of response object being compared (set if it is an array's element)
     * @param   {number}   orderExp      The index of expected response object being compared (set if it is an array's element)
     * @return  {boolean}                True if response is a subset of expected
     */
    checkVals: function checkVals(response, expected, allow, ordered) {
        var objectInArray;
        var nestedCheck;

        var resp = Object.keys(response);
        var exp = Object.keys(expected);

        for (var key in exp) {
            objectInArray = false;
            nestedCheck = false;

            var rVal = response[exp[key]];
            var eVal = expected[exp[key]];

            if (typeof (rVal) === "string" && typeof (eVal) === "string") {
                if (!(rVal.toLowerCase() === eVal.toLowerCase())) {
                    return false;
                }
            } else if (!(eVal instanceof Object)) {
                if (!rVal === eVal) {
                    return false;
                }
            } else if (eVal instanceof Array) {
                for (var nk in exp[key]) {
                    if (eVal[nk] instanceof Object) {
                        objectInArray = true;
                        break;
                    }
                }
                if (objectInArray) {
                    nestedCheck = TestHelper.isArrayOfJsonObjectsProperSubsetOf(response[exp[key]], expected[exp[key]], true, allow, ordered);
                } else {
                    nestedCheck = TestHelper.isListProperSubsetOf(expected[exp[key]], response[exp[key]], allow, ordered);
                }

                if (!nestedCheck) {
                    return false;
                }
            } else if (eVal instanceof Object) {
                nestedCheck = TestHelper.checkVals(rVal, eVal, allow, ordered);
                if (!nestedCheck) {
                    return false;
                }
            }
        }

        return true;
    },

    /**
     * Recursively check whether the leftTree is a proper subset of the right tree
     * @param   {object}   leftTree       The actual response
     * @param   {object}   rightTree      The expected response
     * @param   {boolean}  checkValues    Check primitive values for equality?
     * @param   {boolean}  allowExtra     Are extra elements allowed in the actual response
     * @param   {boolean}  isOrdered      Should elements in left be compared in order to right?
     * @param   {number}   orderResp      The index of response array object being compared
     * @param   {number}   orderExp       The index of expected response array object being compared
     * @return  {boolean}                 True if leftTree is a subset of rightTree
     */
    isProperSubsetOf: function isProperSubsetOf(leftTree, rightTree, checkValues, allowExtra, isOrdered) {
        if (leftTree === null) {
            return true;
        }

        if ((leftTree instanceof Object) && (rightTree instanceof Object)) {
            if (!TestHelper.checkKeys(leftTree, rightTree, allowExtra, isOrdered)) {
                return false;
            }

            if (checkValues) {
                if (!TestHelper.checkVals(leftTree, rightTree, allowExtra, isOrdered)) {
                    return false;
                }
            }
        } else if ((leftTree instanceof Array) && (rightTree instanceof Array)) {
            if (!TestHelper.isArrayOfJsonObjectsProperSubsetOf(leftTree, rightTree, checkValues, allowExtra, isOrdered)) {
                return false;
            }
        }

        return true;
    },

    /**
     * Recursively check whether the left JSON object is a proper subset of the right JSON object
     * @param   {object}   leftObject     Actual Response JSON object as string
     * @param   {object}   rightObject    Expected Response JSON object as string
     * @param   {boolean}  checkValues    Check primitive values for equality?
     * @param   {boolean}  allowExtra     Are extra elements allowed in actual response?
     * @param   {boolean}  isOrdered      Should elements in left be compared in order to right?
     * @return  {boolean}                 If Json object is a subset
     */
    isJsonObjectProperSubsetOf: function isJsonObjectProperSubsetOf(leftObject, rightObject, checkValues, allowExtra, isOrdered) {
        return TestHelper.isProperSubsetOf(JSON.stringify(leftObject),
            JSON.stringify(rightObject), checkValues, allowExtra,
            isOrdered);
    },

    /**
     * Check if left array of objects is a subset of right array
     * @param   {array}   leftObject     Actual response array as a JSON string
     * @param   {array}   rightObject    Expected response array as a JSON string
     * @param   {boolean} checkValues    Check primitive values for equality?
     * @param   {boolean} allowExtra     Are extra elements allowed in left array?
     * @param   {boolean} isOrdered      Should elements in left be compared in order to right?
     * @return  {boolean}                True if it is a subset
     */
    isArrayOfStringifiedJsonObjectsProperSubsetOf: function isArrayOfStringifiedJsonObjectsProperSubsetOf(leftObject, rightObject, checkValues, allowExtra, isOrdered) {
        var left = JSON.stringify(leftObject);
        var right = JSON.stringify(rightObject);

        return TestHelper.isArrayOfJsonObjectsProperSubsetOf(left, right, checkValues, allowExtra, isOrdered);
    },

    /**
     * Check if left array of objects is a subset of right array objects
     * @param   {array}   left           Actual response array comprising of objects
     * @param   {array}   right          Expected response array comprising of objects
     * @param   {boolean} checkValues    Check primitive values for equality?
     * @param   {boolean} allowExtra     Are extra elements allowed in actual response array?
     * @param   {boolean} isOrdered      Should elements in left be compared in order to right?
     * @return  {boolean}                True if it is a subset
     */
    isArrayOfJsonObjectsProperSubsetOf: function isArrayOfJsonObjectsProperSubsetOf(left, right, checkValues, allowExtra, isOrdered) {
        if (left.length !== right.length) {
            if (!allowExtra) {
                return false;
            }
        }
        var found;

        for (var ri in right) {
            found = false;

            var rightKey = ri;
            var rightObj = right[ri];

            for (var rj in left) {
                var leftKey = rj;
                var leftObj = left[rj];

                if (TestHelper.isProperSubsetOf(leftObj, rightObj, checkValues, allowExtra, isOrdered, leftKey, rightKey)) {
                    if (isOrdered && checkValues) {
                        found = leftKey === rightKey;
                        if (!found) {
                            return false;
                        }
                    } else {
                        found = true;
                    }
                    break;
                }
            }

            if (!found) {
                if (!allowExtra) {
                    return false;
                }
            }
        }

        return true;
    },

    /**
     * Check whether the a list is a subset of another list [simple js arrays]
     * @param   {array}   leftList   List to check
     * @param   {array}   rightList  Expected List
     * @param   {boolean} allowExtra Are extras allowed in the list to check?
     * @param   {boolean} isOrdered  Should checking be in order?
     * @return  {boolean}            True if leftList is a subset of rightList
     */
    isListProperSubsetOf: function isListProperSubsetOf(leftList, rightList, allowExtra, isOrdered) {
        var found = false;
        var intersect;

        if (isOrdered && !allowExtra) {
            if (leftList.length !== rightList.length) {
                return false;
            }
            return TestHelper.areEqual(leftList, rightList);
        } else if (isOrdered && allowExtra) {
            intersect = TestHelper.getIntersection(leftList, rightList);
            return TestHelper.areEqual(intersect, rightList);
        } else if (!isOrdered && !allowExtra) {
            var equal = false;
            if (leftList.length !== rightList.length) {
                return false;
            }

            rightList = rightList.sort();

            intersect = TestHelper.getIntersection(leftList, rightList);
            intersect = intersect.sort();

            for (var key in intersect) {
                if (key > rightList.length) {
                    break;
                }
                if (rightList.indexOf(intersect[key]) > -1) {
                    equal = true;
                } else {
                    equal = false;
                }
            }
            return equal;
        } else if (!isOrdered && allowExtra) {
            rightList = rightList.sort();
            intersect = TestHelper.getIntersection(leftList, rightList);
            intersect = intersect.sort();

            for (var key2 in intersect) {
                if (key2 > rightList.length) {
                    break;
                }
                if (rightList.indexOf(intersect[key2]) > -1) {
                    found = true;
                } else {
                    found = true;
                }
            }
            return found;
        }
        return true;
    },

    /**
     * Recursively check whether the left headers map is a proper subset of
     * the right headers map. Header keys & values are compared case-insensitive.
     *
     * @param  {array}    leftTree       Actual Response headers map
     * @param  {array}    rightTree      Expected Response headers map
     * @param  {boolean}  checkValues    Check header values for equality?
     * @return {boolean}                 True if leftTree is a subset of rightTree
     */
    areHeadersProperSubsetOf: function areHeadersProperSubsetOf(leftTree, rightTree, checkValues) {
        var left = {};
        var right = {};

        for (var lkey in leftTree) {
            left[lkey.toLowerCase()] = leftTree[lkey];
        }

        for (var rkey in rightTree) {
            right[rkey.toLowerCase()] = rightTree[rkey];
        }

        return TestHelper.isProperSubsetOf(left, right, checkValues, true, false) || TestHelper.isProperSubsetOf(right, left, checkValues, true, false);
    },

    /**
     * Helper function to download a file and return its contents
     *
     * @param  {string}   fileUrl        The URL of the file to be downloaded
     * @param  {function} callback       Callback function which receives contents of file
     * @return {stream}                  The contents of the file
     */
    getFileContents: function getFileContents(fileUrl, callback) {
        var http = require("http");
        var url = require("url");
        var fs = require("fs");
        var request = require("request");
        var dir = "../Files";
        var fileName = url.parse(fileUrl)
            .pathname.split("/")
            .pop();

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        fileName = dir + "/" + fileName;

        request(fileUrl)
            .pipe(fs.createWriteStream(fileName))
            .on("close", function fileReturn() {
                fs.readFile(fileName, function fileRead(err, data) {
                    if (err) {
                        // return error message
                    } else if (data) {
                        return callback(data);
                    }
                });
            });
    },

    /**
     * Helper function to download a file and return its path
     *
     * @param  {string}   fileUrl        The URL of the file to be downloaded
     * @param  {function} callback       Callback function which receives the file path
     * @return {string}                  The path where the file is saved
     */
    getFilePath: function getFilePath(fileUrl, callback) {
        var http = require("http");
        var url = require("url");
        var fs = require("fs");
        var request = require("request");
        var dir = "../Files";
        var fileName = url.parse(fileUrl)
            .pathname.split("/")
            .pop();

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        fileName = dir + "/" + fileName;

        request(fileUrl)
            .pipe(fs.createWriteStream(fileName))
            .on("close", function fileReturn() {
                return callback(fileName);
            });
    }
};

module.exports = TestHelper;