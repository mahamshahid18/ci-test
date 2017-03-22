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
        const newDict = {};
        const props = Object.keys(this);
        for (let iter = 0; iter < props.length; iter += 1) {
            if (typeof this[props[iter]] !== 'function' && props[iter] !== '_variableDict') {
                if (props[iter] in this._variableDict) {
                    const value = this._variableDict[props[iter]];
                    newDict[value] = this[props[iter]];
                } else {
                    newDict[props[iter]] = this[props[iter]];
                }
            }
        }
        return (newDict);
    };
};
module.exports = BaseModel;
