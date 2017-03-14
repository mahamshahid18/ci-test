/*
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
var assert = require("chai").assert;
var moment = require("moment");
var TestHelper = require("../TestHelper");
var APIHelper = require("../../lib/APIHelper");
var testerlib = require("../../lib");
var config = require("../../lib/Configuration");
var testConfiguration = require("../TestBootstrap");

var controller = testerlib.QueryParamController;
var ServerResponse = testerlib.ServerResponse;
var SuiteCode = testerlib.SuiteCode;
var Days = testerlib.Days;

describe("QueryParamController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Todo Add description for test testIntegerEnumArray
     */
    it("should testIntegerEnumArray response", function testIntegerEnumArrayTest(done) {
        // Parameters for the API call
        var suites = [1, 3, 4, 2, 3];

        controller.integerEnumArray(suites, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testStringEnumArray
     */
    it("should testStringEnumArray response", function testStringEnumArrayTest(done) {
        // Parameters for the API call
        var days = ["Tuesday", "Saturday", "Wednesday", "Monday", "Sunday"];

        controller.stringEnumArray(days, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testStringArray
     */
    it("should testStringArray response", function testStringArrayTest(done) {
        // Parameters for the API call
        var strings = ["abc", "def"];

        controller.stringArray(strings, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testNumberArray
     */
    it("should testNumberArray response", function testNumberArrayTest(done) {
        // Parameters for the API call
        var integers = [1, 2, 3, 4, 5];

        controller.numberArray(integers, function callback(error, response, context) {
            // Test response code
            assert.isAtLeast(context.response.statusCode, 200);
            assert.isAtMost(context.response.statusCode, 208);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testUrlParam
     */
    it("should testUrlParam response", function testUrlParamTest(done) {
        // Parameters for the API call
        var url = "https://www.shahidisawesome.com/and/also/a/narcissist?thisis=aparameter&another=one";

        controller.urlParam(url, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testMultipleParams
     */
    it("should testMultipleParams response", function testMultipleParamsTest(done) {
        // Parameters for the API call
        var number = 123412312;
        var precision = 1112.34;
        var string = "\"\"test./;\";12&&3asl\"\";\"qw1&34\"///..//.";
        var url = "http://www.abc.com/test?a=b&c=\"http://lolol.com?param=no&another=lol\"";

        controller.multipleParams(number, precision, string, url, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSimpleQuery
     */
    it("should testSimpleQuery response", function testSimpleQueryTest(done) {
        // Parameters for the API call
        var mboolean = true;
        var number = 4;
        var string = "TestString";

        // key-value map for optional query parameters
        var queryParams = [];

        controller.simpleQuery(mboolean, number, string, null, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testStringParam
     */
    it("should testStringParam response", function testStringParamTest(done) {
        // Parameters for the API call
        var string = "l;asd;asdwe[2304&&;'.d??\\a\\\\\\;sd//";

        controller.stringParam(string, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testNoParams
     */
    it("should testNoParams response", function testNoParamsTest(done) {
        controller.noParams(function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testRfc3339DateTime
     */
    it("should testRfc3339DateTime response", function testRfc3339DateTimeTest(done) {
        // Parameters for the API call
        var datetime = "1994-02-13T14:01:54.9571247Z";

        controller.rfc3339DateTime(datetime, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testRfc3339DateTimeArray
     */
    it("should testRfc3339DateTimeArray response", function testRfc3339DateTimeArrayTest(done) {
        // Parameters for the API call
        var datetimes = ["1994-02-13T14:01:54.9571247Z", "1994-02-13T14:01:54.9571247Z"];

        controller.rfc3339DateTimeArray(datetimes, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testRfc1123DateTimeArray
     */
    it("should testRfc1123DateTimeArray response", function testRfc1123DateTimeArrayTest(done) {
        // Parameters for the API call
        var datetimes = ["Sun, 06 Nov 1994 08:49:37 GMT", "Sun, 06 Nov 1994 08:49:37 GMT"];

        controller.rfc1123DateTimeArray(datetimes, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testRfc1123DateTime
     */
    it("should testRfc1123DateTime response", function testRfc1123DateTimeTest(done) {
        // Parameters for the API call
        var datetime = "Sun, 06 Nov 1994 08:49:37 GMT";

        controller.rfc1123DateTime(datetime, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testUnixDateTime
     */
    it("should testUnixDateTime response", function testUnixDateTimeTest(done) {
        // Parameters for the API call
        var datetime = "1484719381";

        controller.unixDateTime(datetime, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testUnixDateTimeArray
     */
    it("should testUnixDateTimeArray response", function testUnixDateTimeArrayTest(done) {
        // Parameters for the API call
        var datetimes = [1484719381, 1484719381];

        controller.unixDateTimeArray(datetimes, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testDate
     */
    it("should testDate response", function testDateTest(done) {
        // Parameters for the API call
        var date = "1994-02-13";

        controller.date(date, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testDateArray
     */
    it("should testDateArray response", function testDateArrayTest(done) {
        // Parameters for the API call
        var dates = ["1994-02-13", "1994-02-13"];

        controller.dateArray(dates, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });
});
