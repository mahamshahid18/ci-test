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

var controller = testerlib.TemplateParamsController;
var EchoResponse = testerlib.EchoResponse;

describe("TemplateParamsController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

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
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"path": "/1/2/3/4/5"}, true, true, false));
            done();
        });
    });

    /**
     * Todo Add description for test testSendStringArray
     */
    it("should testSendStringArray response", function testSendStringArrayTest(done) {
        // Parameters for the API call
        var strings = ["abc", "def"];

        controller.sendStringArray(strings, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"path": "/abc/def"}, true, true, false));
            done();
        });
    });
});
