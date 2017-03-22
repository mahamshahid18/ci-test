/*
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
 'use strict';

const assert = require("chai").assert;
const moment = require("moment");
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const config = require("../../lib/configuration");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.ResponseTypesController;
const SuiteCode = testerlib.SuiteCode;
const Employee = testerlib.Employee;
const Days = testerlib.Days;

describe("ResponseTypesController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Todo Add description for test testGetUnixDateTimeArray
     */
    it("should testGetUnixDateTimeArray response", function testGetUnixDateTimeArrayTest(done) {
        controller.getUnixDateTimeArray(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // this means it is a primitive array
            let expected = [1484719381, 1484719381];

            response = response.map(function mapper(resp) {
                return new Date(resp).getTime();
            });
            assert.equal(TestHelper.isListProperSubsetOf(response, expected, true, false), true);
            done();
        });
    });

    /**
     * Todo Add description for test testGet1123DateTimeArray
     */
    it("should testGet1123DateTimeArray response", function testGet1123DateTimeArrayTest(done) {
        controller.get1123DateTimeArray(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // this means it is a primitive array
            let expected = ["Sun, 06 Nov 1994 08:49:37 GMT", "Sun, 06 Nov 1994 08:49:37 GMT"];

            response = response.map(function mapper(resp) {
                return new Date(resp).toUTCString();
            });
            assert.equal(TestHelper.isListProperSubsetOf(response, expected, true, false), true);
            done();
        });
    });

    /**
     * Todo Add description for test testGetUnixDateTime
     */
    it("should testGetUnixDateTime response", function testGetUnixDateTimeTest(done) {
        controller.getUnixDateTime(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // not an array, do simple check
            assert.equal(new Date(1484719381).getTime(), response);
            done();
        });
    });

    /**
     * Todo Add description for test testGet1123DateTime
     */
    it("should testGet1123DateTime response", function testGet1123DateTimeTest(done) {
        controller.get1123DateTime(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // not an array, do simple check
            assert.equal(new Date('Sun, 06 Nov 1994 08:49:37 GMT').toUTCString(), response);
            done();
        });
    });

    /**
     * Todo Add description for test testGetHeadersAllowExtra
     */
    it("should testGetHeadersAllowExtra response", function testGetHeadersAllowExtraTest(done) {
        controller.getHeaders(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            // Test headers
            let headers = [];
            headers['NauManAli'] = null;
            headers['WaseemHasAn'] = null;
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            done();
        });
    });

    /**
     * Todo Add description for test testGetBooleanArray
     */
    it("should testGetBooleanArray response", function testGetBooleanArrayTest(done) {
        controller.getBooleanArray(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // this means it is a primitive array
            let expected = [true, false, true, true, false];

            assert.equal(TestHelper.isListProperSubsetOf(response, expected, true, false), true);
            done();
        });
    });

    /**
     * Todo Add description for test testGetBoolean
     */
    it("should testGetBoolean response", function testGetBooleanTest(done) {
        controller.getBoolean(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // not an array, do simple check
            assert.equal(true, response);
            done();
        });
    });

    /**
     * Todo Add description for test testGet3339DatetimeArray
     */
    it("should testGet3339DatetimeArray response", function testGet3339DatetimeArrayTest(done) {
        controller.get3339DatetimeArray(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // this means it is a primitive array
            let expected = ["2016-03-13T12:52:32.123Z", "2016-03-13T12:52:32.123Z", "2016-03-13T12:52:32.123Z"];

            expected = expected.map(function expMapper(exp) {
                return moment(exp).parseZone().format();
            });
            response = response.map(function mapper(resp) {
                return moment(resp).parseZone().format();
            });
            assert.equal(TestHelper.isListProperSubsetOf(response, expected, true, false), true);
            done();
        });
    });

    /**
     * Todo Add description for test testGet3339Datetime
     */
    it("should testGet3339Datetime response", function testGet3339DatetimeTest(done) {
        controller.get3339Datetime(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // not an array, do simple check
            assert.equal(moment('2016-03-13T12:52:32.123Z').parseZone().format(), response);
            done();
        });
    });

    /**
     * Todo Add description for test testGetDynamicArray
     */
    it("should testGetDynamicArray response", function testGetDynamicArrayTest(done) {
        controller.getDynamicArray(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"method": "GET", "body": {}, "uploadCount": 0}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testGetDynamic
     */
    it("should testGetDynamic response", function testGetDynamicTest(done) {
        controller.getDynamic(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"method": "GET", "body": {}, "uploadCount": 0}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testGetIntegerArray
     */
    it("should testGetIntegerArray response", function testGetIntegerArrayTest(done) {
        controller.getIntegerArray(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // this means it is a primitive array
            let expected = [1, 2, 3, 4, 5];

            assert.equal(TestHelper.isListProperSubsetOf(response, expected, true, false), true);
            done();
        });
    });

    /**
     * Todo Add description for test testGetInteger
     */
    it("should testGetInteger response", function testGetIntegerTest(done) {
        controller.getInteger(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // not an array, do simple check
            assert.equal(4, response);
            done();
        });
    });

    /**
     * Todo Add description for test testGetBinary
     */
    it("should testGetBinary response", function testGetBinaryTest(done) {
        TestHelper.getFileContents('http://localhost:3000/response/image', function fileContents(data) {
            controller.getBinary(function callback(error, response, context) {
                // Test response code
                assert.equal(200, context.response.statusCode);
                assert.isNotNull(response);
                assert.equal(data.toString(), response.toString());
                done();
            });
        });
    });

    /**
     * Todo Add description for test testGetPrecision
     */
    it("should testGetPrecision response", function testGetPrecisionTest(done) {
        controller.getPrecision(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // not an array, do simple check
            assert.equal(4.999, response);
            done();
        });
    });

    /**
     * Todo Add description for test testGetIntEnumArray
     */
    it("should testGetIntEnumArray response", function testGetIntEnumArrayTest(done) {
        controller.getIntEnumArray(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // this means it is a primitive array
            let expected = [1, 3, 4, 2, 3];

            assert.equal(TestHelper.isListProperSubsetOf(response, expected, true, false), true);
            done();
        });
    });

    /**
     * Todo Add description for test testGetIntEnum
     */
    it("should testGetIntEnum response", function testGetIntEnumTest(done) {
        controller.getIntEnum(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // not an array, do simple check
            assert.equal(parseInt('3', 10), response);
            done();
        });
    });

    /**
     * Todo Add description for test testGetModelArray
     */
    it("should testGetModelArray response", function testGetModelArrayTest(done) {
        controller.getModelArray(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isArrayOfJsonObjectsProperSubsetOf(context.response.body, [{"name": "Shahid Khaliq", "age": 5147483645, "address": "H # 531, S # 20", "uid": "123321", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z", "salary": 20000, "department": "Software Development", "joiningDay": "Saturday", "workingDays": ["Monday", "Tuesday", "Friday"], "boss": {"name": "Zeeshan Ejaz", "age": 5147483645, "address": "H # 531, S # 20", "uid": "123321", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z", "salary": 20000, "department": "Software Development", "joiningDay": "Saturday", "workingDays": ["Monday", "Tuesday", "Friday"], "dependents": [{"name": "Future Wife", "age": 5147483649, "address": "H # 531, S # 20", "uid": "123412", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z"}, {"name": "Future Kid", "age": 5147483648, "address": "H # 531, S # 20", "uid": "312341", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z"}], "hiredAt": "Sun, 06 Nov 1994 08: 49: 37 GMT", "promotedAt": 1484719381}, "dependents": [{"name": "Future Wife", "age": 5147483649, "address": "H # 531, S # 20", "uid": "123412", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z"}, {"name": "Future Kid", "age": 5147483648, "address": "H # 531, S # 20", "uid": "312341", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z"}], "hiredAt": "Sun, 06 Nov 1994 08: 49: 37 GMT"}, {"name": "Shahid Khaliq", "age": 5147483645, "address": "H # 531, S # 20", "uid": "123321", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z", "salary": 20000, "department": "Software Development", "joiningDay": "Saturday", "workingDays": ["Monday", "Tuesday", "Friday"], "boss": {"name": "Zeeshan Ejaz", "age": 5147483645, "address": "H # 531, S # 20", "uid": "123321", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z", "salary": 20000, "department": "Software Development", "joiningDay": "Saturday", "workingDays": ["Monday", "Tuesday", "Friday"], "dependents": [{"name": "Future Wife", "age": 5147483649, "address": "H # 531, S # 20", "uid": "123412", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z"}, {"name": "Future Kid", "age": 5147483648, "address": "H # 531, S # 20", "uid": "312341", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z"}], "hiredAt": "Sun, 06 Nov 1994 08: 49: 37 GMT", "promotedAt": 1484719381}, "dependents": [{"name": "Future Wife", "age": 5147483649, "address": "H # 531, S # 20", "uid": "123412", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z"}, {"name": "Future Kid", "age": 5147483648, "address": "H # 531, S # 20", "uid": "312341", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z"}], "hiredAt": "Sun, 06 Nov 1994 08: 49: 37 GMT"}], true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testGetStringEnum
     */
    it("should testGetStringEnum response", function testGetStringEnumTest(done) {
        controller.getStringEnum(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // not an array, do simple check
            assert.equal('Monday', response);
            done();
        });
    });

    /**
     * Todo Add description for test testGetStringEnumArray
     */
    it("should testGetStringEnumArray response", function testGetStringEnumArrayTest(done) {
        controller.getStringEnumArray(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // this means it is a primitive array
            let expected = ["Tuesday", "Saturday", "Wednesday", "Monday", "Sunday"];

            assert.equal(TestHelper.isListProperSubsetOf(response, expected, true, false), true);
            done();
        });
    });

    /**
     * Todo Add description for test testGetModel
     */
    it("should testGetModel response", function testGetModelTest(done) {
        controller.getModel(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"name": "Shahid Khaliq", "age": 5147483645, "address": "H # 531, S # 20", "uid": "123321", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z", "salary": 20000, "department": "Software Development", "joiningDay": "Saturday", "workingDays": ["Monday", "Tuesday", "Friday"], "boss": {"name": "Zeeshan Ejaz", "age": 5147483645, "address": "H # 531, S # 20", "uid": "123321", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z", "salary": 20000, "department": "Software Development", "joiningDay": "Saturday", "workingDays": ["Monday", "Tuesday", "Friday"], "dependents": [{"name": "Future Wife", "age": 5147483649, "address": "H # 531, S # 20", "uid": "123412", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z"}, {"name": "Future Kid", "age": 5147483648, "address": "H # 531, S # 20", "uid": "312341", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z"}], "hiredAt": "Sun, 06 Nov 1994 08: 49: 37 GMT", "promotedAt": 1484719381}, "dependents": [{"name": "Future Wife", "age": 5147483649, "address": "H # 531, S # 20", "uid": "123412", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z"}, {"name": "Future Kid", "age": 5147483648, "address": "H # 531, S # 20", "uid": "312341", "birthday": "1994-02-13", "birthtime": "1994-02-13T14: 01: 54.9571247Z"}], "hiredAt": "Sun, 06 Nov 1994 08: 49: 37 GMT"}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testGetLong
     */
    it("should testGetLong response", function testGetLongTest(done) {
        controller.getLong(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // not an array, do simple check
            assert.equal(5147483647, response);
            done();
        });
    });

    /**
     * Todo Add description for test testGetDate
     */
    it("should testGetDate response", function testGetDateTest(done) {
        controller.getDate(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // not an array, do simple check
            assert.equal(moment('1994-02-13').format('YYYY-MM-DD'), response);
            done();
        });
    });

    /**
     * Todo Add description for test testGetDateArray
     */
    it("should testGetDateArray response", function testGetDateArrayTest(done) {
        controller.getDateArray(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            // this means it is a primitive array
            let expected = ["1994-02-13", "1994-02-13"];

            response = response.map(function mapper(resp) {
                return moment(resp).format('YYYY-MM-DD');
            });
            assert.equal(TestHelper.isListProperSubsetOf(response, expected, true, false), true);
            done();
        });
    });
});
