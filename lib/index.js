/**
  * @module TesterLib
  *
  * Testing various  api  features
  */
  'use strict';

const Configuration = require('./configuration');
const Servers = require('./Servers');
const Environments = require('./Environments');
const BaseController = require('./Controllers/BaseController');
const TemplateParamsController = require('./Controllers/TemplateParamsController');
const EchoController = require('./Controllers/EchoController');
const QueryParamController = require('./Controllers/QueryParamController');
const FormParamsController = require('./Controllers/FormParamsController');
const BodyParamsController = require('./Controllers/BodyParamsController');
const ResponseTypesController = require('./Controllers/ResponseTypesController');
const HeaderController = require('./Controllers/HeaderController');
const ErrorCodesController = require('./Controllers/ErrorCodesController');
const Person = require('./Models/Person');
const ServerResponse = require('./Models/ServerResponse');
const EchoResponse = require('./Models/EchoResponse');
const QueryParameter = require('./Models/QueryParameter');
const Days = require('./Models/Days');
const SuiteCode = require('./Models/SuiteCode');
const Employee = require('./Models/Employee');
const Boss = require('./Models/Boss');
const GlobalTestException = require('./Exceptions/GlobalTestException');
const LocalTestException = require('./Exceptions/LocalTestException');
const APIException = require('./Exceptions/APIException');


let initializer = function initializer() { };

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
