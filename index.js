"use strict";
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
exports.__esModule = true;
exports.toWin = exports.isEnumValue = exports.isFiniteNumber = exports.isObject = exports.arrayOrSingleItemToArray = exports.toArray = exports.isArray = void 0;
/* @const */
var toString_ = Object.prototype.toString;
/**
 * Returns the ECMA [[Class]] of a value.
 * @param {unknown} value
 * @returns {string}
 */
function toString(value) {
    return toString_.call(value);
}
/**
 * Determines if value is actually an Array.
 * @param {unknown} value
 * @returns {boolean}
 */
function isArray(value) {
    return Array.isArray(value);
}
exports.isArray = isArray;
/**
 * Converts an array-like object to an array.
 * @param {?IArrayLike<T>|string} arrayLike
 * @returns {!Array<T>}
 * @template T
 */
function toArray(arrayLike) {
    return arrayLike ? Array.prototype.slice.call(arrayLike) : [];
}
exports.toArray = toArray;
/**
 * If the specified argument is an array, it's returned as is. If it's a
 * single item, the array containing this item is created and returned.
 * @param {!Array<T>|T} arrayOrSingleItem
 * @returns {!Array<T>}
 * @template T
 */
function arrayOrSingleItemToArray(arrayOrSingleItem) {
    return isArray(arrayOrSingleItem)
        ? /** @type {!Array<T>} */ (arrayOrSingleItem)
        : [arrayOrSingleItem];
}
exports.arrayOrSingleItemToArray = arrayOrSingleItemToArray;
/**
 * Determines if value is actually an Object.
 * @param {unknown} value
 * @returns {boolean}
 */
function isObject(value) {
    return toString(value) === '[object Object]';
}
exports.isObject = isObject;
/**
 * Determines if value is of number type and finite.
 * NaN and Infinity are not considered a finite number.
 * String numbers are not considered numbers.
 * @param {unknown} value
 * @returns {boolean}
 */
function isFiniteNumber(value) {
    return typeof value === 'number' && isFinite(value);
}
exports.isFiniteNumber = isFiniteNumber;
/**
 * Checks whether `s` is a valid value of `enumObj`.
 *
 * @param {!Object<T>} enumObj
 * @param {T} s
 * @returns {boolean}
 * @template T
 */
function isEnumValue(enumObj, s) {
    for (var k in enumObj) {
        if (enumObj[k] === s) {
            return true;
        }
    }
    return false;
}
exports.isEnumValue = isEnumValue;
/**
 * Externs declare that access `defaultView` from `document` or
 * `ownerDocument` is of type `(Window|null)` but most of our parameter types
 * assume that it is never null. This is OK in practice as we ever only get
 * null on disconnected documents or old IE.
 * This helper function casts it into just a simple Window return type.
 *
 * @param {!Window | null} winOrNull
 * @returns {!Window}
 */
function toWin(winOrNull) {
    return /** @type {!Window} */ (winOrNull);
}
exports.toWin = toWin;
