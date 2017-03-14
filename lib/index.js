/**
  * @module TesterLib
  *
  * Testing various  api  features
  */

var Configuration = require("./configuration");
var Servers = require("./Servers");
var Environments = require("./Environments");
var BaseController = require("./Controllers/BaseController");
var TemplateParamsController = require("./Controllers/TemplateParamsController");
var EchoController = require("./Controllers/EchoController");
var QueryParamController = require("./Controllers/QueryParamController");
var FormParamsController = require("./Controllers/FormParamsController");
var BodyParamsController = require("./Controllers/BodyParamsController");
var ResponseTypesController = require("./Controllers/ResponseTypesController");
var HeaderController = require("./Controllers/HeaderController");
var ErrorCodesController = require("./Controllers/ErrorCodesController");
var Person = require("./Models/Person");
var ServerResponse = require("./Models/ServerResponse");
var EchoResponse = require("./Models/EchoResponse");
var QueryParameter = require("./Models/QueryParameter");
var Days = require("./Models/Days");
var SuiteCode = require("./Models/SuiteCode");
var Employee = require("./Models/Employee");
var Boss = require("./Models/Boss");
var GlobalTestException = require("./Exceptions/GlobalTestException");
var LocalTestException = require("./Exceptions/LocalTestException");
var APIException = require("./Exceptions/APIException");


var initializer = function initializer() { };

// Main functional components of TesterLib
initializer.Configuration = Configuration;
initializer.Servers = Servers;
initializer.Environments = Environments;
initializer.BaseController = BaseController;
initializer.TemplateParamsController = TemplateParamsController;
initializer.EchoController = EchoController;
initializer.QueryParamController = QueryParamController;
initializer.FormParamsController = FormParamsController;
initializer.BodyParamsController = BodyParamsController;
initializer.ResponseTypesController = ResponseTypesController;
initializer.HeaderController = HeaderController;
initializer.ErrorCodesController = ErrorCodesController;

// Main Models of TesterLib
initializer.Person = Person;
initializer.ServerResponse = ServerResponse;
initializer.EchoResponse = EchoResponse;
initializer.QueryParameter = QueryParameter;
initializer.Days = Days;
initializer.SuiteCode = SuiteCode;
initializer.Employee = Employee;
initializer.Boss = Boss;

// Main Exceptions of TesterLib
initializer.GlobalTestException = GlobalTestException;
initializer.LocalTestException = LocalTestException;
initializer.APIException = APIException;

module.exports = initializer;
