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
var config = require("../../lib/configuration");
var testConfiguration = require("../TestBootstrap");

var controller = testerlib.BodyParamsController;
var ServerResponse = testerlib.ServerResponse;
var SuiteCode = testerlib.SuiteCode;
var Days = testerlib.Days;
var Employee = testerlib.Employee;

describe("BodyParamsController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Todo Add description for test testSendIntegerEnumArray
     */
    it("should testSendIntegerEnumArray response", function testSendIntegerEnumArrayTest(done) {
        // Parameters for the API call
        var suites = [1, 3, 4, 2, 3];

        controller.sendIntegerEnumArray(suites, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendStringEnumArray
     */
    it("should testSendStringEnumArray response", function testSendStringEnumArrayTest(done) {
        // Parameters for the API call
        var days = ["Tuesday", "Saturday", "Wednesday", "Monday", "Sunday"];

        controller.sendStringEnumArray(days, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendString
     */
    it("should testSendString response", function testSendStringTest(done) {
        // Parameters for the API call
        var value = "TestString";

        controller.sendString(value, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendDynamic
     */
    it("should testSendDynamic response", function testSendDynamicTest(done) {
        // Parameters for the API call
        var dynamic = {"uid": "1123213", "name": "Shahid"};

        controller.sendDynamic(dynamic, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendModelArray
     */
    it("should testSendModelArray response", function testSendModelArrayTest(done) {
        // Parameters for the API call
        var models = [{"name": "Shahid Khaliq", "age": 5147483645, "address": "H # 531, S # 20", "uid": "123321", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z", "salary": 20000, "department": "Software Development", "joiningDay": "Saturday", "workingDays": ["Monday", "Tuesday", "Friday"], "boss": {"name": "Zeeshan Ejaz", "age": 5147483645, "address": "H # 531, S # 20", "uid": "123321", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z", "salary": 20000, "department": "Software Development", "joiningDay": "Saturday", "workingDays": ["Monday", "Tuesday", "Friday"], "dependents": [{"name": "Future Wife", "age": 5147483649, "address": "H # 531, S # 20", "uid": "123412", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z"}, {"name": "Future Kid", "age": 5147483648, "address": "H # 531, S # 20", "uid": "312341", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z"}], "hiredAt": "Sun, 06 Nov 1994 08:49:37 GMT", "promotedAt": 1484719381}, "dependents": [{"name": "Future Wife", "age": 5147483649, "address": "H # 531, S # 20", "uid": "123412", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z"}, {"name": "Future Kid", "age": 5147483648, "address": "H # 531, S # 20", "uid": "312341", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z"}], "hiredAt": "Sun, 06 Nov 1994 08:49:37 GMT"}, {"name": "Shahid Khaliq", "age": 5147483645, "address": "H # 531, S # 20", "uid": "123321", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z", "salary": 20000, "department": "Software Development", "joiningDay": "Saturday", "workingDays": ["Monday", "Tuesday", "Friday"], "boss": {"name": "Zeeshan Ejaz", "age": 5147483645, "address": "H # 531, S # 20", "uid": "123321", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z", "salary": 20000, "department": "Software Development", "joiningDay": "Saturday", "workingDays": ["Monday", "Tuesday", "Friday"], "dependents": [{"name": "Future Wife", "age": 5147483649, "address": "H # 531, S # 20", "uid": "123412", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z"}, {"name": "Future Kid", "age": 5147483648, "address": "H # 531, S # 20", "uid": "312341", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z"}], "hiredAt": "Sun, 06 Nov 1994 08:49:37 GMT", "promotedAt": 1484719381}, "dependents": [{"name": "Future Wife", "age": 5147483649, "address": "H # 531, S # 20", "uid": "123412", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z"}, {"name": "Future Kid", "age": 5147483648, "address": "H # 531, S # 20", "uid": "312341", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z"}], "hiredAt": "Sun, 06 Nov 1994 08:49:37 GMT"}].map(function elemMapper(elem) {
            return new Employee(elem);
        });

        controller.sendModelArray(models, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendModel
     */
    it("should testSendModel response", function testSendModelTest(done) {
        // Parameters for the API call
        var model = new Employee({"name": "Shahid Khaliq", "age": 5147483645, "address": "H # 531, S # 20", "uid": "123321", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z", "salary": 20000, "department": "Software Development", "joiningDay": "Saturday", "workingDays": ["Monday", "Tuesday", "Friday"], "boss": {"name": "Zeeshan Ejaz", "age": 5147483645, "address": "H # 531, S # 20", "uid": "123321", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z", "salary": 20000, "department": "Software Development", "joiningDay": "Saturday", "workingDays": ["Monday", "Tuesday", "Friday"], "dependents": [{"name": "Future Wife", "age": 5147483649, "address": "H # 531, S # 20", "uid": "123412", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z"}, {"name": "Future Kid", "age": 5147483648, "address": "H # 531, S # 20", "uid": "312341", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z"}], "hiredAt": "Sun, 06 Nov 1994 08:49:37 GMT", "promotedAt": 1484719381}, "dependents": [{"name": "Future Wife", "age": 5147483649, "address": "H # 531, S # 20", "uid": "123412", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z"}, {"name": "Future Kid", "age": 5147483648, "address": "H # 531, S # 20", "uid": "312341", "birthday": "1994-02-13", "birthtime": "1994-02-13T14:01:54.9571247Z"}], "hiredAt": "Sun, 06 Nov 1994 08:49:37 GMT"});

        controller.sendModel(model, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendIntegerArray
     */
    it("should testSendIntegerArray response", function testSendIntegerArrayTest(done) {
        // Parameters for the API call
        var integers = [1, 2, 3, 4, 5];

        controller.sendIntegerArray(integers, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendStringArray
     */
    it("should testSendStringArray response", function testSendStringArrayTest(done) {
        // Parameters for the API call
        var sarray = ["abc", "def"];

        controller.sendStringArray(sarray, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendRfc3339DateTime
     */
    it("should testSendRfc3339DateTime response", function testSendRfc3339DateTimeTest(done) {
        // Parameters for the API call
        var datetime = "1994-02-13T14:01:54.9571247Z";

        controller.sendRfc3339DateTime(datetime, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendRfc3339DateTimeArray
     */
    it("should testSendRfc3339DateTimeArray response", function testSendRfc3339DateTimeArrayTest(done) {
        // Parameters for the API call
        var datetimes = ["1994-02-13T14:01:54.9571247Z", "1994-02-13T14:01:54.9571247Z"];

        controller.sendRfc3339DateTimeArray(datetimes, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendRfc1123DateTime
     */
    it("should testSendRfc1123DateTime response", function testSendRfc1123DateTimeTest(done) {
        // Parameters for the API call
        var datetime = "Sun, 06 Nov 1994 08:49:37 GMT";

        controller.sendRfc1123DateTime(datetime, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendRfc1123DateTimeArray
     */
    it("should testSendRfc1123DateTimeArray response", function testSendRfc1123DateTimeArrayTest(done) {
        // Parameters for the API call
        var datetimes = ["Sun, 06 Nov 1994 08:49:37 GMT", "Sun, 06 Nov 1994 08:49:37 GMT"];

        controller.sendRfc1123DateTimeArray(datetimes, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendUnixDateTime
     */
    it("should testSendUnixDateTime response", function testSendUnixDateTimeTest(done) {
        // Parameters for the API call
        var datetime = "1484719381";

        controller.sendUnixDateTime(datetime, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendUnixDateTimeArray
     */
    it("should testSendUnixDateTimeArray response", function testSendUnixDateTimeArrayTest(done) {
        // Parameters for the API call
        var datetimes = [1484719381, 1484719381];

        controller.sendUnixDateTimeArray(datetimes, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendDate
     */
    it("should testSendDate response", function testSendDateTest(done) {
        // Parameters for the API call
        var date = "1994-02-13";

        controller.sendDate(date, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendDateArray
     */
    it("should testSendDateArray response", function testSendDateArrayTest(done) {
        // Parameters for the API call
        var dates = ["1994-02-13", "1994-02-13"];

        controller.sendDateArray(dates, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });
});
