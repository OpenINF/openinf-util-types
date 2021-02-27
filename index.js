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
//
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrimitive = exports.isModuleNamespaceObject = exports.isBoxedPrimitive = exports.isArgumentsObject = exports.isAsyncFunction = exports.isGeneratorFunction = exports.isGeneratorObject = exports.isPromise = exports.isDataView = exports.isAnyArrayBuffer = exports.isSharedArrayBuffer = exports.isArrayBuffer = exports.isWeakSet = exports.isWeakMap = exports.isSetIterator = exports.isSet = exports.isMapIterator = exports.isMap = exports.isTypedArray = exports.isArrayBufferView = exports.isBigUint64Array = exports.isBigInt64Array = exports.isFloat64Array = exports.isFloat32Array = exports.isUint32Array = exports.isInt32Array = exports.isUint16Array = exports.isInt16Array = exports.isUint8ClampedArray = exports.isUint8Array = exports.isInt8Array = exports.toArray = exports.isArray = exports.isRegExp = exports.isStringObject = exports.isDate = exports.isMath = exports.isFiniteNumber = exports.isBigIntObject = exports.isNumberObject = exports.isNativeError = exports.isSymbolObject = exports.isBooleanObject = exports.isOrdinaryFunction = exports.isObject = exports.isUndefined = exports._isObjectLike = exports.toString = void 0;
// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------
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
 * Determines whether value is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object". Every JavaScript function is
 * actually a [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
 * object, so those are included as well.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is object-like; otherwise, `false`.
 * @private
 */
function _isObjectLike(value) {
    return typeof value === "function" ||
        (typeof value === "object" && value !== null);
}
exports._isObjectLike = _isObjectLike;
/** ----------------------------------------------------------------------------
 * ## Standard objects by category
 * -------------------------------------------------------------------------- */
// JavaScript's standard, built-in objects
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// Standard Built-in ECMAScript Objects
// @see https://262.ecma-international.org/5.1/#sec-15
/** ----------------------------------------------------------------------------
 * ### Value properties
 * -----------------------------------------------------------------------------
 *
 * These global properties return a simple value. They have no properties or methods.
 *
 * - [`Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)
 * - [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
 * - [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
 * - [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis)
 *
 * -------------------------------------------------------------------------- */
/**
 * Determines whether the passed value is actually of type [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is `undefined`; otherwise, `false`.
 */
function isUndefined(value) {
    return value === undefined;
}
exports.isUndefined = isUndefined;
/** ----------------------------------------------------------------------------
 * ### Fundamental objects
 * -----------------------------------------------------------------------------
 *
 * These are the fundamental, basic objects upon which all other objects are
 * based. This includes general objects, booleans, functions, and symbols.
 *
 * - [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
 * - [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
 * - [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
 * - [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
 *
 * -------------------------------------------------------------------------- */
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
 * Determines whether the passed value is of type `Function`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Function`; otherwise, `false`.
 */
function isOrdinaryFunction(value) {
    return (_isObjectLike(value) && toString(value) === "[object Function]");
}
exports.isOrdinaryFunction = isOrdinaryFunction;
/**
 * Determines whether the passed value is actually a [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
 * object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Boolean` object; otherwise,
 *     `false`.
 */
function isBooleanObject(value) {
    return _isObjectLike(value) && toString(value) === "[object Boolean]";
}
exports.isBooleanObject = isBooleanObject;
/**
 * Determines whether the passed value is actually a [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
 * object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Symbol` object; otherwise,
 *     `false`.
 */
function isSymbolObject(value) {
    return _isObjectLike(value) && toString(value) === "[object Symbol]";
}
exports.isSymbolObject = isSymbolObject;
/** ----------------------------------------------------------------------------
 * ### Error objects
 * -----------------------------------------------------------------------------
 *
 * Error objects are a special type of fundamental object. They include the
 * basic Error type, as well as several specialized error types.
 *
 * [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
 * [`AggregateError `](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)
 * [`EvalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError)
 * [`InternalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError)
 * [`RangeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
 * [`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
 * [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
 * [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
 * [`URIError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError)
 *
 * -------------------------------------------------------------------------- */
/**
 * Determines whether the passed value is one of the native error types:
 * - [`EvalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError)
 * - [`RangeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
 * - [`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
 * - [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
 * - [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
 * - [`URIError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError)
 * - [`AggregateError `](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)
 * - [`InternalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError)
 *
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a native error; otherwise, `false`.
 */
function isNativeError(value) {
    return _isObjectLike(value) && toString(value) === "[object Error]";
}
exports.isNativeError = isNativeError;
/** ----------------------------------------------------------------------------
 * ### Numbers and dates
 * -----------------------------------------------------------------------------
 *
 * These are the base objects representing numbers, dates, and mathematical
 * calculations.
 *
 * - [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
 * - [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
 * - [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
 * - [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
 *
 * -------------------------------------------------------------------------- */
/**
 * Determines whether the passed value is actually a [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
 * object (boxed primitive).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Number` object; otherwise,
 *     `false`.
 */
function isNumberObject(value) {
    return _isObjectLike(value) && toString(value) === "[object Number]";
}
exports.isNumberObject = isNumberObject;
/**
 * Determines whether the passed value is actually a [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
 * object (boxed primitive).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `BigInt` object; otherwise,
 *     `false`.
 */
function isBigIntObject(value) {
    return _isObjectLike(value) && toString(value) === "[object BigInt]";
}
exports.isBigIntObject = isBigIntObject;
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
/**
 * Determines whether the passed value is actually the [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
 * global object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is the `Math` object; otherwise, `false`.
 */
function isMath(value) {
    return _isObjectLike(value) && toString(value) === "[object Math]";
}
exports.isMath = isMath;
/**
 * Determines whether the passed value is of type [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Date`; otherwise, `false`.
 */
function isDate(value) {
    return _isObjectLike(value) && toString(value) === "[object Date]";
}
exports.isDate = isDate;
/** ----------------------------------------------------------------------------
 * ### Text processing
 * -----------------------------------------------------------------------------
 *
 * These objects represent strings and support manipulating them.
 *
 * - [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 * - [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
 *
 * -------------------------------------------------------------------------- */
/**
 * Determines whether the passed value is actually a [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 * object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `String` object; otherwise,
 *     `false`.
 */
function isStringObject(value) {
    return _isObjectLike(value) && toString(value) === "[object String]";
}
exports.isStringObject = isStringObject;
/**
 * Determines whether the passed value is of type [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `RegExp`; otherwise, `false`.
 */
function isRegExp(value) {
    return _isObjectLike(value) && toString(value) === "[object RegExp]";
}
exports.isRegExp = isRegExp;
/** ----------------------------------------------------------------------------
 * ### Indexed collections
 * -----------------------------------------------------------------------------
 *
 * These objects represent collections of data which are ordered by an index
 * value. This includes (typed) arrays and array-like constructs.
 *
 * - [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 * - [`Int8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)
 * - [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
 * - [`Uint8ClampedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)
 * - [`Int16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)
 * - [`Uint16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)
 * - [`Int32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
 * - [`Uint32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)
 * - [`Float32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)
 * - [`Float64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)
 * - [`BigInt64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array)
 * - [`BigUint64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigUInt64Array)
 *
 * -------------------------------------------------------------------------- */
/**
 * Determines whether the passed value is of type [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Array`; otherwise, `false`.
 */
function isArray(value) {
    return Array.isArray(value);
}
exports.isArray = isArray;
// TODO: isArrayLike
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
 * Determines whether the passed value is of type [`Int8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Int8Array`; otherwise, `false`.
 */
function isInt8Array(value) {
    return _isObjectLike(value) && toString(value) === "[object Int8Array]";
}
exports.isInt8Array = isInt8Array;
/**
 * Determines whether the passed value is of type [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint8Array`; otherwise, `false`.
 */
function isUint8Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object Uint8Array]");
}
exports.isUint8Array = isUint8Array;
/**
 * Determines whether the passed value is of type [`Uint8ClampedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray).
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
 * Determines whether the passed value is of type [`Int16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Int16Array`; otherwise,
 *     `false`.
 */
function isInt16Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object Int16Array]");
}
exports.isInt16Array = isInt16Array;
/**
 * Determines whether the passed value is of type [`Uint16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint16Array`; otherwise,
 *     `false`.
 */
function isUint16Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object Uint16Array]");
}
exports.isUint16Array = isUint16Array;
/**
 * Determines whether the passed value is of type [`Int32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Int32Array`; otherwise,
 *     `false`.
 */
function isInt32Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object Int32Array]");
}
exports.isInt32Array = isInt32Array;
/**
 * Determines whether the passed value is of type [`Uint32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint32Array`; otherwise,
 *     `false`.
 */
function isUint32Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object Uint32Array]");
}
exports.isUint32Array = isUint32Array;
/**
 * Determines whether the passed value is of type [`Float32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Float32Array`; otherwise,
 *     `false`.
 */
function isFloat32Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object Float32Array]");
}
exports.isFloat32Array = isFloat32Array;
/**
 * Determines whether the passed value is of type [`Float64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Float64Array`; otherwise,
 *     `false`.
 */
function isFloat64Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object Float64Array]");
}
exports.isFloat64Array = isFloat64Array;
/**
 * Determines whether the passed value is of type [`BigInt64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `BigInt64Array`; otherwise,
 *     `false`.
 */
function isBigInt64Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object BigInt64Array]");
}
exports.isBigInt64Array = isBigInt64Array;
/**
 * Determines whether the passed value is of type [`BigUint64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigUInt64Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `BigUint64Array`; otherwise,
 *     `false`.
 */
function isBigUint64Array(value) {
    return (_isObjectLike(value) && toString(value) === "[object BigUint64Array]");
}
exports.isBigUint64Array = isBigUint64Array;
/**
 * Determines whether the passed value is an [`ArrayBufferView`](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView),
 * which is a helper type representing any of the following JavaScript [**TypedArray**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
 * types:
 * - [`Int8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)
 * - [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
 * - [`Uint8ClampedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)
 * - [`Int16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)
 * - [`Uint16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)
 * - [`Int32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
 * - [`Uint32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)
 * - [`Float32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)
 * - [`Float64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)
 * - [`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
 *
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `ArrayBufferView`; otherwise,
 *     `false`.
 */
function isArrayBufferView(value) {
    return ArrayBuffer.isView(value);
}
exports.isArrayBufferView = isArrayBufferView;
/**
 * Determines if value is one of the [**TypedArray** element types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects):
 * - [`Int8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)
 * - [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
 * - [`Uint8ClampedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)
 * - [`Int16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)
 * - [`Uint16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)
 * - [`Int32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
 * - [`Uint32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)
 * - [`Float32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)
 * - [`Float64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)
 * - [`BigInt64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array)
 * - [`BigUint64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array)
 *
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is one of the typed arrays; otherwise,
 *     `false`.
 */
function isTypedArray(value) {
    // Used to match `toStringTag` values of typed arrays. Adapted from Lodash.
    const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|(?:Big)(?:Int|Uint)(?:64)|Uint8Clamped)Array\]$/;
    return _isObjectLike(value) && reTypedTag.test(toString(value));
}
exports.isTypedArray = isTypedArray;
/** ----------------------------------------------------------------------------
 * ### Keyed collections
 * -----------------------------------------------------------------------------
 *
 * These objects represent collections which use keys. The iterable collections
 * (`Map` and `Set`) contain elements which are easily iterated in the order of
 * insertion.
 *
 * - [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
 * - [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
 * - [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
 * - [`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
 *
 * -------------------------------------------------------------------------- */
/**
 * Determines whether the passed value is of type [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Map`; otherwise, `false`.
 */
function isMap(value) {
    return _isObjectLike(value) && toString(value) === "[object Map]";
}
exports.isMap = isMap;
/**
 * Determines whether the passed value is of type [`Map Iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Map Iterator`; otherwise,
 *     `false`.
 */
function isMapIterator(value) {
    return (_isObjectLike(value) && toString(value) === "[object Map Iterator]");
}
exports.isMapIterator = isMapIterator;
/**
 * Determines whether the passed value is of type [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Set`; otherwise, `false`.
 */
function isSet(value) {
    return _isObjectLike(value) && toString(value) === "[object Set]";
}
exports.isSet = isSet;
/**
 * Determines whether the passed value is of type [`Set Iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Set Iterator`; otherwise,
 *     `false`.
 */
function isSetIterator(value) {
    return (_isObjectLike(value) && toString(value) === "[object Set Iterator]");
}
exports.isSetIterator = isSetIterator;
/**
 * Determines whether the passed value is of type [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `WeakMap`; otherwise, `false`.
 */
function isWeakMap(value) {
    return _isObjectLike(value) && toString(value) === "[object WeakMap]";
}
exports.isWeakMap = isWeakMap;
/**
 * Determines whether the passed value is of type [`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `WeakSet`; otherwise, `false`.
 */
function isWeakSet(value) {
    return _isObjectLike(value) && toString(value) === "[object WeakSet]";
}
exports.isWeakSet = isWeakSet;
/** ----------------------------------------------------------------------------
 * ### Structured data
 * -----------------------------------------------------------------------------
 *
 * These objects represent and interact with structured data buffers and data
 * coded using JavaScript Object Notation (JSON).
 *
 * - [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
 * - [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
 * - [`Atomics`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics)
 * - [`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
 * - [`JSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
 *
 * -------------------------------------------------------------------------- */
/**
 * Determines whether the passed value is of type [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `ArrayBuffer`; otherwise,
 *     `false`.
 */
function isArrayBuffer(value) {
    return (_isObjectLike(value) && toString(value) === "[object ArrayBuffer]");
}
exports.isArrayBuffer = isArrayBuffer;
/**
 * Determines whether the passed value is of type [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).
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
 * Determines whether the passed value is one of either [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
 * or [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is one of the array buffers;
 *     otherwise, `false`.
 */
function isAnyArrayBuffer(value) {
    return (_isObjectLike(value) &&
        (toString(value) === "[object ArrayBuffer]" ||
            toString(value) === "[object SharedArrayBuffer]"));
}
exports.isAnyArrayBuffer = isAnyArrayBuffer;
/**
 * Determines whether the passed value is of type [`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `DataView`; otherwise, `false`.
 */
function isDataView(value) {
    return _isObjectLike(value) && toString(value) === "[object DataView]";
}
exports.isDataView = isDataView;
/** ----------------------------------------------------------------------------
 * ### Control abstraction objects
 * -----------------------------------------------------------------------------
 *
 * Control abstractions can help to structure code, especially async code
 * (without using deeply nested callbacks, for example).
 *
 * - [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
 * - [`Generator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
 * - [`GeneratorFunction`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction)
 * - [`AsyncFunction`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)
 * - [`AsyncGenerator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)
 * - [`AsyncGeneratorFunction`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction)
 *
 * -------------------------------------------------------------------------- */
/**
 * Determines whether the passed value is of type [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Promise`; otherwise, `false`.
 */
function isPromise(value) {
    return _isObjectLike(value) && toString(value) === "[object Promise]";
}
exports.isPromise = isPromise;
/**
 * Determines whether the passed value is actually a [`Generator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
 * object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Generator`; otherwise, `false`.
 */
function isGeneratorObject(value) {
    return _isObjectLike(value) && toString(value) === "[object Generator]";
}
exports.isGeneratorObject = isGeneratorObject;
/**
 * Determines whether the passed value is of type [`GeneratorFunction`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `GeneratorFunction`; otherwise,
 *     `false`.
 */
function isGeneratorFunction(value) {
    return (_isObjectLike(value) &&
        toString(value) === "[object GeneratorFunction]");
}
exports.isGeneratorFunction = isGeneratorFunction;
/**
 * Determines whether the passed value is of type [`AsyncFunction`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `AsyncFunction`; otherwise,
 *     `false`.
 */
function isAsyncFunction(value) {
    return (_isObjectLike(value) && toString(value) === "[object AsyncFunction]");
}
exports.isAsyncFunction = isAsyncFunction;
// TODO:
// * - [`AsyncGenerator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)
// * - [`AsyncGeneratorFunction`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction)
/** ----------------------------------------------------------------------------
 * ### Other
 * -------------------------------------------------------------------------- */
/**
 * Determines whether the passed value is actually an
 * [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
 * object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `arguments` object; otherwise,
 *     `false`.
 */
function isArgumentsObject(value) {
    return _isObjectLike(value) && toString(value) === "[object Arguments]";
}
exports.isArgumentsObject = isArgumentsObject;
/**
 * Determines whether the passed value is a primitive wrapped by its object
 * equivalent (a.k.a. "boxed"). Except for `null` and `undefined`, all primitive
 * values have object equivalents that wrap around the primitive values:
 * - [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
 * - [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 * - [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
 * - [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
 * - [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript
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
 * Determines whether the passed value is a `Module` namespace object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Module`; otherwise, `false`.
 */
function isModuleNamespaceObject(value) {
    return _isObjectLike(value) && toString(value) === "[object Module]";
}
exports.isModuleNamespaceObject = isModuleNamespaceObject;
/**
 * Determines whether the passed value is of a [**primitive**](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
 * data type.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a primitive; otherwise, `false`.
 */
function isPrimitive(value) {
    return value !== Object(value);
}
exports.isPrimitive = isPrimitive;
