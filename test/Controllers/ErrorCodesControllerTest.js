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

var controller = testerlib.ErrorCodesController;
var Person = testerlib.Person;
var ServerResponse = testerlib.ServerResponse;
var EchoResponse = testerlib.EchoResponse;
var QueryParameter = testerlib.QueryParameter;
var Days = testerlib.Days;
var SuiteCode = testerlib.SuiteCode;
var Employee = testerlib.Employee;
var GlobalTestException = testerlib.GlobalTestException;
var LocalTestException = testerlib.LocalTestException;
var Boss = testerlib.Boss;


describe("ErrorCodesController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Todo Add description for test testGet500
     */
    it("should testGet500 response", function testGet500Test(done) {
        controller.get500(function callback(error, response, context) {
            // Test response code
            assert.equal(500, context.response.statusCode);
            done();
        });
    });

    /**
     * Todo Add description for test testGet400
     */
    it("should testGet400 response", function testGet400Test(done) {
        controller.get400(function callback(error, response, context) {
            // Test response code
            assert.equal(400, context.response.statusCode);
            done();
        });
    });
});