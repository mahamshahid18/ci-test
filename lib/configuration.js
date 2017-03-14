/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
var servers = require("./Servers");
var environments = require("./Environments");
var apiHelper = require("./APIHelper");

var environmentsMap = [];
var envm = environments;
var srv = servers;

environmentsMap[envm.PRODUCTION] = [];
environmentsMap[envm.TESTING] = [];

environmentsMap[envm.PRODUCTION][srv.MDEFAULT] = "http://apimatic.hopto.org:{suites}";
environmentsMap[envm.PRODUCTION][srv.AUTH_SERVER] = "http://apimaticauth.hopto.org:3000";
environmentsMap[envm.TESTING][srv.MDEFAULT] = "http://192.168.0.100:{port}";
environmentsMap[envm.TESTING][srv.AUTH_SERVER] = "http://apimaticauth.xhopto.org:3000";

var Configuration = {
    /**
     * port
     * @type {string}
     */
    port: "80",

    /**
     * suites
     * @type {SuiteCode}
     */
    suites: 1,

    /**
     * Current API environment
     * @type {string}
     */
    currentEnvironment: environments.PRODUCTION,

    /**
     * Get base URI for a server in the current API environment
     * @param  {string|null} server Server name
     * @return {string}             Base URI for server
     */
    getBaseUri(server) {
        var url = environmentsMap[this.currentEnvironment][server || servers.MDEFAULT];
        var urlParams = {
            port: this.port,
            suites: this.suites
        };
        return apiHelper.appendUrlWithTemplateParameters(url, urlParams);
    }
};

module.exports = Configuration;