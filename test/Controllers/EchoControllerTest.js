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

var controller = testerlib.EchoController;
var EchoResponse = testerlib.EchoResponse;

describe("EchoController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Todo Add description for test testJsonEcho
     */
    it("should testJsonEcho response", function testJsonEchoTest(done) {
        // Parameters for the API call
        var input = {"uid": "1123213", "name": "Shahid"};

        controller.jsonEcho(input, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"body": {"uid": "1123213", "name": "Shahid"}}, true, true, false));
            done();
        });
    });
});
