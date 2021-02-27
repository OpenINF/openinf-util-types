"use strict";
// Copyright 2021 The OpenINF Authors. All rights reserved. MIT license.
//
// Adapted from AMP HTML. Copyright The AMP HTML Authors.
// @see https://github.com/ampproject/amphtml/blob/HEAD/src/types.js
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWeakSet = exports.isWeakMap = exports.isUint32Array = exports.isUint16Array = exports.isUint8ClampedArray = exports.isUint8Array = exports.isTypedArray = exports.isSymbolObject = exports.isStringObject = exports.isSharedArrayBuffer = exports.isSetIterator = exports.isSet = exports.isRegExp = exports.isPromise = exports.isBigIntObject = exports.isNumberObject = exports.isNativeError = exports.isModuleNamespaceObject = exports.isMapIterator = exports.isMap = exports.isInt32Array = exports.isInt16Array = exports.isInt8Array = exports.isGeneratorObject = exports.isGeneratorFunction = exports.isOrdinaryFunction = exports.isFloat64Array = exports.isFloat32Array = exports.isDate = exports.isDataView = exports.isBoxedPrimitive = exports.isBooleanObject = exports.isBigUint64Array = exports.isBigInt64Array = exports.isAsyncFunction = exports.isArrayBuffer = exports.isArgumentsObject = exports.isArrayBufferView = exports.isAnyArrayBuffer = exports.isFiniteNumber = exports.isObject = exports.toArray = exports.isArray = exports.toString = void 0;
const _toString = Object.prototype.toString;
/**
 * Returns the ECMAScript [[Class]] internal property of the passed value.
 * @param {unknown} value The value to be checked.
 * @returns {string} A specification-defined classification of objects.
 */
function toString(value) {
    return _toString.call(value);
}
exports.toString = toString;
/**
 * Determines whether the passed value is of type `Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an Array; otherwise, `false`.
 */
function isArray(value) {
    return Array.isArray(value);
}
exports.isArray = isArray;
/**
 * Converts an array-like object to an array.
 * @param {!(ArrayLike<T> | string)} arrayLike
 * @returns {!Array<T>}
 * @template T
 */
function toArray(arrayLike) {
    return arrayLike ? Array.prototype.slice.call(arrayLike) : [];
}
exports.toArray = toArray;
/**
 * Determines whether the passed value is of type `Object`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Object`; otherwise, `false`.
 */
function isObject(value) {
    return toString(value) === '[object Object]';
}
exports.isObject = isObject;
/**
 * Determines whether the passed value is of number type and finite. `NaN` and
 * `Infinity` are not considered a finite number. String numbers are not
 * considered numbers.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a finite number; otherwise,
 *     `false`.
 */
function isFiniteNumber(value) {
    return typeof value === 'number' && isFinite(value);
}
exports.isFiniteNumber = isFiniteNumber;
// Adapted from Deno. Copyright the Deno authors.
// @see https://github.com/denoland/deno_std/blob/HEAD/node/_util/_util_types.ts
//
// Adapted from Node.js. Copyright Joyent, Inc. and other Node contributors.
// @see https://github.com/nodejs/node/blob/HEAD/lib/internal/util/types.js
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
/**
 * Determines if value is actually object-like.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is object-like; otherwise, `false`.
 * @private
 */
const _isObjectLike = (value) => value !== null && typeof value === "object";
/**
 * Determines if value is actually function-like.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is function-like; otherwise, `false`.
 * @private
 */
const _isFunctionLike = (value) => value !== null && typeof value === "function";
/**
 * Determines whether the passed value is one of either `ArrayBuffer` or
 * `SharedArrayBuffer`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an any array buffer; otherwise,
 *     `false`.
 */
function isAnyArrayBuffer(value) {
    return (_isObjectLike(value) &&
        (toString(value) === "[object ArrayBuffer]" ||
            toString(value) === "[object SharedArrayBuffer]"));
}
exports.isAnyArrayBuffer = isAnyArrayBuffer;
/**
 * Determines whether the passed value is an [`ArrayBufferView`](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `ArrayBufferView`; otherwise, `false`.
 */
function isArrayBufferView(value) {
    return ArrayBuffer.isView(value);
}
exports.isArrayBufferView = isArrayBufferView;
/**
 * Determines whether the passed value is of type `Arguments` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Arguments` object; otherwise,
 *     `false`.
 */
function isArgumentsObject(value) {
    return _isObjectLike(value) && toString(value) === "[object Arguments]";
}
exports.isArgumentsObject = isArgumentsObject;
/**
 * Determines whether the passed value is of type `ArrayBuffer`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `ArrayBuffer`; otherwise,
 *  false`.
 */
function isArrayBuffer(value) {
    return (_isObjectLike(value) && toString(value) === "[object ArrayBuffer]");
}
exports.isArrayBuffer = isArrayBuffer;
/**
 * Determines whether the passed value is of type `AsyncFunction`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `AsyncFunction`; otherwise,
 *     `false`.
 */
function isAsyncFunction(value) {
    return (_isFunctionLike(value) && toString(value) === "[object AsyncFunction]");
}
exports.isAsyncFunction = isAsyncFunction;
/**
 * Determines whether the passed value is of type `BigInt64Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `BigInt64Array`; otherwise,
 *     `false`.
 */
function isBigInt64Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object BigInt64Array]");
}
exports.isBigInt64Array = isBigInt64Array;
/**
 * Determines whether the passed value is of type `BigUint64Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `BigUint64Array`; otherwise,
 *     `false`.
 */
function isBigUint64Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object BigUint64Array]");
}
exports.isBigUint64Array = isBigUint64Array;
/**
 * Determines whether the passed value is a `Boolean` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Boolean`; otherwise, `false`.
 */
function isBooleanObject(value) {
    return _isObjectLike(value) && toString(value) === "[object Boolean]";
}
exports.isBooleanObject = isBooleanObject;
/**
 * Determines whether the passed value is one of the boxed primitives:
 * - `Boolean`
 * - `String`
 * - `Number`
 * - `Symbol`
 * - `BigInt`
 *
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is one of the boxed primitives;
 *     otherwise, `false`.
 */
function isBoxedPrimitive(value) {
    return (isBooleanObject(value) ||
        isStringObject(value) ||
        isNumberObject(value) ||
        isSymbolObject(value) ||
        isBigIntObject(value));
}
exports.isBoxedPrimitive = isBoxedPrimitive;
/**
 * Determines whether the passed value is of type `DataView`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `DataView`; otherwise, `false`.
 */
function isDataView(value) {
    return _isObjectLike(value) && toString(value) === "[object DataView]";
}
exports.isDataView = isDataView;
/**
 * Determines whether the passed value is of type `Date`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Date`; otherwise, `false`.
 */
function isDate(value) {
    return _isObjectLike(value) && toString(value) === "[object Date]";
}
exports.isDate = isDate;
/**
 * Determines whether the passed value is of type `Float32Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Float32Array`; otherwise,
 *     `false`.
 */
function isFloat32Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object Float32Array]");
}
exports.isFloat32Array = isFloat32Array;
/**
 * Determines whether the passed value is of type `Float64Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Float64Array`; otherwise,
 *     `false`.
 */
function isFloat64Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object Float64Array]");
}
exports.isFloat64Array = isFloat64Array;
/**
 * Determines whether the passed value is of type `Function`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Function`; otherwise, `false`.
 */
function isOrdinaryFunction(value) {
    return (_isFunctionLike(value) &&
        toString(value) === "[object Function]");
}
exports.isOrdinaryFunction = isOrdinaryFunction;
/**
 * Determines whether the passed value is of type `GeneratorFunction`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `GeneratorFunction`; otherwise,
 *     `false`.
 */
function isGeneratorFunction(value) {
    return (_isFunctionLike(value) &&
        toString(value) === "[object GeneratorFunction]");
}
exports.isGeneratorFunction = isGeneratorFunction;
/**
 * Determines whether the passed value is of type `Generator` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Generator`; otherwise, `false`.
 */
function isGeneratorObject(value) {
    return _isObjectLike(value) && toString(value) === "[object Generator]";
}
exports.isGeneratorObject = isGeneratorObject;
/**
 * Determines whether the passed value is of type `Int8Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Int8Array`; otherwise, `false`.
 */
function isInt8Array(value) {
    return _isObjectLike(value) && toString(value) === "[object Int8Array]";
}
exports.isInt8Array = isInt8Array;
/**
 * Determines whether the passed value is of type `Int16Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Int16Array`; otherwise,
 *     `false`.
 */
function isInt16Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object Int16Array]");
}
exports.isInt16Array = isInt16Array;
/**
 * Determines whether the passed value is of type `Int32Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Int32Array`; otherwise,
 *     `false`.
 */
function isInt32Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object Int32Array]");
}
exports.isInt32Array = isInt32Array;
/**
 * Determines whether the passed value is of type `Map`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Map`; otherwise, `false`.
 */
function isMap(value) {
    return _isObjectLike(value) && toString(value) === "[object Map]";
}
exports.isMap = isMap;
/**
 * Determines whether the passed value is of type `Map Iterator`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Map Iterator`; otherwise,
 *     `false`.
 */
function isMapIterator(value) {
    return (_isObjectLike(value) && toString(value) === "[object Map Iterator]");
}
exports.isMapIterator = isMapIterator;
/**
 * Determines whether the passed value is a `Module` namespace object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Module`; otherwise, `false`.
 */
function isModuleNamespaceObject(value) {
    return _isObjectLike(value) && toString(value) === "[object Module]";
}
exports.isModuleNamespaceObject = isModuleNamespaceObject;
/**
 * Determines whether the passed value is a one of the native error types:
 * - `EvalError`
 * - `RangeError`
 * - `ReferenceError`
 * - `SyntaxError`
 * - `TypeError`
 * - `URIError`
 * - `AggregateError`
 * - `InternalError`
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a native error; otherwise, `false`.
 */
function isNativeError(value) {
    return _isObjectLike(value) && toString(value) === "[object Error]";
}
exports.isNativeError = isNativeError;
/**
 * Determines if value is actually a `Number` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Number`; otherwise, `false`.
 */
function isNumberObject(value) {
    return _isObjectLike(value) && toString(value) === "[object Number]";
}
exports.isNumberObject = isNumberObject;
/**
 * Determines if value is actually a `BigInt` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `BigInt`; otherwise, `false`.
 */
function isBigIntObject(value) {
    return _isObjectLike(value) && toString(value) === "[object BigInt]";
}
exports.isBigIntObject = isBigIntObject;
/**
 * Determines whether the passed value is of type `Promise`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Promise`; otherwise, `false`.
 */
function isPromise(value) {
    return _isObjectLike(value) && toString(value) === "[object Promise]";
}
exports.isPromise = isPromise;
/**
 * Determines whether the passed value is of type `RegExp`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `RegExp`; otherwise, `false`.
 */
function isRegExp(value) {
    return _isObjectLike(value) && toString(value) === "[object RegExp]";
}
exports.isRegExp = isRegExp;
/**
 * Determines whether the passed value is of type `Set`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Set`; otherwise, `false`.
 */
function isSet(value) {
    return _isObjectLike(value) && toString(value) === "[object Set]";
}
exports.isSet = isSet;
/**
 * Determines whether the passed value is of type `Set Iterator`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Set Iterator`; otherwise,
 *     `false`.
 */
function isSetIterator(value) {
    return (_isObjectLike(value) && toString(value) === "[object Set Iterator]");
}
exports.isSetIterator = isSetIterator;
/**
 * Determines whether the passed value is of type `SharedArrayBuffer`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `SharedArrayBuffer`; otherwise,
 *     `false`.
 */
function isSharedArrayBuffer(value) {
    return (_isObjectLike(value) &&
        toString(value) === "[object SharedArrayBuffer]");
}
exports.isSharedArrayBuffer = isSharedArrayBuffer;
/**
 * Determines if value is actually a `String` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `String`; otherwise, `false`.
 */
function isStringObject(value) {
    return _isObjectLike(value) && toString(value) === "[object String]";
}
exports.isStringObject = isStringObject;
/**
 * Determines if value is actually a `Symbol` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Symbol`; otherwise, `false`.
 */
function isSymbolObject(value) {
    return _isObjectLike(value) && toString(value) === "[object Symbol]";
}
exports.isSymbolObject = isSymbolObject;
// Adapted from Lodash
/**
 * Determines if value is one of the typed arrays:
 * - `Float32Array`
 * - `Float64Array`
 * - `Int8Array`
 * - `Uint8Array`
 * - `Uint8ClampedArray`
 * - `Int16Array`
 * - `Uint16Array`
 * - `Int32Array`
 * - `Uint32Array`
 *
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is one of the typed arrays; otherwise,
 *     `false`.
 */
function isTypedArray(value) {
    // Used to match `toStringTag` values of typed arrays.
    const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/;
    return _isObjectLike(value) && reTypedTag.test(toString(value));
}
exports.isTypedArray = isTypedArray;
/**
 * Determines whether the passed value is of type `Uint8Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint8Array`; otherwise, `false`.
 */
function isUint8Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object Uint8Array]");
}
exports.isUint8Array = isUint8Array;
/**
 * Determines whether the passed value is of type `Uint8ClampedArray`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint8ClampedArray`; otherwise,
 *     `false`.
 */
function isUint8ClampedArray(value) {
    return (_isObjectLike(value) &&
        toString(value) === "[object Uint8ClampedArray]");
}
exports.isUint8ClampedArray = isUint8ClampedArray;
/**
 * Determines whether the passed value is of type `Uint16Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint16Array`; otherwise,
 *     `false`.
 */
function isUint16Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object Uint16Array]");
}
exports.isUint16Array = isUint16Array;
/**
 * Determines whether the passed value is of type `Uint32Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint32Array`; otherwise,
 *     `false`.
 */
function isUint32Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object Uint32Array]");
}
exports.isUint32Array = isUint32Array;
/**
 * Determines whether the passed value is of type `WeakMap`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `WeakMap`; otherwise, `false`.
 */
function isWeakMap(value) {
    return _isObjectLike(value) && toString(value) === "[object WeakMap]";
}
exports.isWeakMap = isWeakMap;
/**
 * Determines whether the passed value is of type `WeakSet`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `WeakSet`; otherwise, `false`.
 */
function isWeakSet(value) {
    return _isObjectLike(value) && toString(value) === "[object WeakSet]";
}
exports.isWeakSet = isWeakSet;
