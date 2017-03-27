
/**
 * TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');
const moment = require('moment');
/**
 * Creates an instance of Person
 */
class Person extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        if (!obj) {
            super();
            this.address = null;
            this.age = null;
            this.birthday = null;
            this.birthtime = null;
            this.name = null;
            this.uid = null;
        } else {
            super();

            this.address = (obj.address !== undefined &&
                obj.address !== null) ?
                    obj.address : null;
            this.age = (obj.age !== undefined &&
                obj.age !== null) ?
                    obj.age : null;
            this.birthday = (obj.birthday !== undefined &&
                obj.birthday !== null) ?
                    moment(obj.birthday).format('YYYY-MM-DD') : null;
            this.birthtime = (obj.birthtime !== undefined &&
                obj.birthtime !== null) ?
                    moment(obj.birthtime).parseZone().format() : null;
            this.name = (obj.name !== undefined &&
                obj.name !== null) ?
                    obj.name : null;
            this.uid = (obj.uid !== undefined &&
                obj.uid !== null) ?
                    obj.uid : null;
        }
    }
}

module.exports = Person;
