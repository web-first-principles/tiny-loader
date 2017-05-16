"use strict";
/**
 * Basic utilities functions, reused across project
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if value is a correct object
 */
function isObject(value) {
    return (typeof value == 'object' &&
        ({}).toString.call(value) == '[object Object]');
}
exports.isObject = isObject;
/**
 * Check if object has certain property the right way
 */
function hasProperty(target, propKey) {
    return ({}).hasOwnProperty.call(target, propKey);
}
exports.hasProperty = hasProperty;
/**
 * Get object values as an array
 */
function getObjectValues(target) {
    const objKeys = Object.keys(target);
    const responseArray = [];
    objKeys.forEach(function (key) {
        responseArray.push(target[key]);
    });
    return responseArray;
}
exports.getObjectValues = getObjectValues;
