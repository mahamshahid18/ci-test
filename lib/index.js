/**
  * @module CalcLib
  *
  * Simple calculator API hosted on APIMATIC
  */

var Configuration = require("./configuration");
var BaseController = require("./Controllers/BaseController");
var SimpleCalculatorController = require("./Controllers/SimpleCalculatorController");
var OperationTypeEnum = require("./Models/OperationTypeEnum");
var CouldNotComputeException = require("./Exceptions/CouldNotComputeException");
var APIException = require("./Exceptions/APIException");


var initializer = function initializer() { };

// Main functional components of CalcLib
initializer.Configuration = Configuration;
initializer.BaseController = BaseController;
initializer.SimpleCalculatorController = SimpleCalculatorController;

// Main Models of CalcLib
initializer.OperationTypeEnum = OperationTypeEnum;

// Main Exceptions of CalcLib
initializer.CouldNotComputeException = CouldNotComputeException;
initializer.APIException = APIException;

module.exports = initializer;
