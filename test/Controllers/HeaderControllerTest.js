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

const controller = testerlib.HeaderController;
const ServerResponse = testerlib.ServerResponse;

describe("HeaderController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Todo Add description for test testSendHeaders
     */
    it("should testSendHeaders response", function testSendHeadersTest(done) {
        // Parameters for the API call
        let customHeader = 'TestString';
        let value = 'TestString';

        controller.sendHeaders(customHeader, value, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"passed": true}, true, true, false));
            done();
        });
    });
});
