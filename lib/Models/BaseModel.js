/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */
 'use strict';

/**
 * Creates a instance of BaseModel
 *
 * @constructor
 */
const BaseModel = function BaseModel() {
    // Maintain a name mapping dictionary
    this._variableDict = [];
    this.toJSON = function toJSON() {
        let newDict = {};
        for (let prop in this) {
            if (typeof this[prop] !== 'function' && prop !== '_variableDict') {
                if (prop in this._variableDict) {
                    let value = this._variableDict[prop];
                    newDict[value] = this[prop];
                } else {
                    newDict[prop] = this[prop];
                }
            }
        }
        return (newDict);
    };
};
module.exports = BaseModel;
