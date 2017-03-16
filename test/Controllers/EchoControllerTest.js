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

const controller = testerlib.EchoController;
const EchoResponse = testerlib.EchoResponse;

describe("EchoController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Todo Add description for test testJsonEcho
     */
    it("should testJsonEcho response", function testJsonEchoTest(done) {
        // Parameters for the API call
        let input = {"uid": "1123213", "name": "Shahid"};

        controller.jsonEcho(input, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"body": {"uid": "1123213", "name": "Shahid"}}, true, true, false));
            done();
        });
    });
});
