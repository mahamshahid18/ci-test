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

var controller = testerlib.HeaderController;
var ServerResponse = testerlib.ServerResponse;

describe("HeaderController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Todo Add description for test testSendHeaders
     */
    it("should testSendHeaders response", function testSendHeadersTest(done) {
        // Parameters for the API call
        var customHeader = "TestString";
        var value = "TestString";

        controller.sendHeaders(customHeader, value, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });
});
