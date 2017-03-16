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

const controller = testerlib.ErrorCodesController;
const Person = testerlib.Person;
const ServerResponse = testerlib.ServerResponse;
const EchoResponse = testerlib.EchoResponse;
const QueryParameter = testerlib.QueryParameter;
const Days = testerlib.Days;
const SuiteCode = testerlib.SuiteCode;
const Employee = testerlib.Employee;
const GlobalTestException = testerlib.GlobalTestException;
const LocalTestException = testerlib.LocalTestException;
const Boss = testerlib.Boss;


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
