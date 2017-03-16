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

const controller = testerlib.TemplateParamsController;
const EchoResponse = testerlib.EchoResponse;

describe("TemplateParamsController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Todo Add description for test testSendIntegerArray
     */
    it("should testSendIntegerArray response", function testSendIntegerArrayTest(done) {
        // Parameters for the API call
        let integers = [1, 2, 3, 4, 5];

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
        let strings = ["abc", "def"];

        controller.sendStringArray(strings, function callback(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"path": "/abc/def"}, true, true, false));
            done();
        });
    });
});
