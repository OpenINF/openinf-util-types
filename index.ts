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

const _toString = Object.prototype.toString;

/**
 * Returns the ECMAScript [[Class]] internal property of the passed value.
 * @param {unknown} value The value to be checked.
 * @returns {string} A specification-defined classification of objects.
 */
export function toString(value: unknown): string {
  return _toString.call(value);
}

/**
 * Determines whether the passed value is of type `Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an Array; otherwise, `false`.
 */
export function isArray(value: unknown): boolean {
  return Array.isArray(value);
}

/**
 * Converts an array-like object to an array.
 * @param {!(ArrayLike<T> | string)} arrayLike
 * @returns {!Array<T>}
 * @template T
 */
export function toArray<T>(arrayLike: (ArrayLike<T> | T)):  Array<T> {
  return arrayLike ? Array.prototype.slice.call(arrayLike) : [];
}

/**
 * Determines whether the passed value is of type `Object`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Object`; otherwise, `false`.
 */
export function isObject(value: unknown): boolean {
  return toString(value) === '[object Object]';
}

/**
 * Determines whether the passed value is of number type and finite. `NaN` and
 * `Infinity` are not considered a finite number. String numbers are not
 * considered numbers.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a finite number; otherwise,
 *     `false`.
 */
export function isFiniteNumber(value: unknown): boolean {
  return typeof value === 'number' && isFinite(value);
}

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
const _isObjectLike = (value: unknown): boolean =>
  value !== null && typeof value === "object";

/**
 * Determines if value is actually function-like.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is function-like; otherwise, `false`.
 * @private
 */
const _isFunctionLike = (value: unknown): boolean =>
  value !== null && typeof value === "function";

/**
 * Determines whether the passed value is one of either `ArrayBuffer` or
 * `SharedArrayBuffer`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an any array buffer; otherwise,
 *     `false`.
 */
export function isAnyArrayBuffer(value: unknown): boolean {
  return (
    _isObjectLike(value) &&
    (toString(value) === "[object ArrayBuffer]" ||
      toString(value) === "[object SharedArrayBuffer]")
  );
}

/**
 * Determines whether the passed value is an [`ArrayBufferView`](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `ArrayBufferView`; otherwise, `false`.
 */
export function isArrayBufferView(value: unknown): boolean {
  return ArrayBuffer.isView(value);
}

/**
 * Determines whether the passed value is of type `Arguments` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Arguments` object; otherwise,
 *     `false`.
 */
export function isArgumentsObject(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Arguments]";
}

/**
 * Determines whether the passed value is of type `ArrayBuffer`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `ArrayBuffer`; otherwise,
 *  false`.
 */
export function isArrayBuffer(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object ArrayBuffer]"
  );
}

/**
 * Determines whether the passed value is of type `AsyncFunction`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `AsyncFunction`; otherwise,
 *     `false`.
 */
export function isAsyncFunction(value: unknown): boolean {
  return (
    _isFunctionLike(value) && toString(value) === "[object AsyncFunction]"
  );
}

/**
 * Determines whether the passed value is of type `BigInt64Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `BigInt64Array`; otherwise,
 *     `false`.
 */
export function isBigInt64Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object BigInt64Array]"
  );
}

/**
 * Determines whether the passed value is of type `BigUint64Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `BigUint64Array`; otherwise,
 *     `false`.
 */
export function isBigUint64Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object BigUint64Array]"
  );
}

/**
 * Determines whether the passed value is a `Boolean` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Boolean`; otherwise, `false`.
 */
export function isBooleanObject(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Boolean]";
}

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
export function isBoxedPrimitive(value: unknown): boolean {
  return (
    isBooleanObject(value) ||
    isStringObject(value) ||
    isNumberObject(value) ||
    isSymbolObject(value) ||
    isBigIntObject(value)
  );
}

/**
 * Determines whether the passed value is of type `DataView`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `DataView`; otherwise, `false`.
 */
export function isDataView(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object DataView]";
}

/**
 * Determines whether the passed value is of type `Date`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Date`; otherwise, `false`.
 */
export function isDate(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Date]";
}

/**
 * Determines whether the passed value is of type `Float32Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Float32Array`; otherwise,
 *     `false`.
 */
export function isFloat32Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Float32Array]"
  );
}

/**
 * Determines whether the passed value is of type `Float64Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Float64Array`; otherwise,
 *     `false`.
 */
export function isFloat64Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Float64Array]"
  );
}

/**
 * Determines whether the passed value is of type `Function`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Function`; otherwise, `false`.
 */
export function isOrdinaryFunction(value: unknown): boolean {
  return (
    _isFunctionLike(value) &&
    toString(value) === "[object Function]"
  );
}

/**
 * Determines whether the passed value is of type `GeneratorFunction`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `GeneratorFunction`; otherwise,
 *     `false`.
 */
export function isGeneratorFunction(value: unknown): boolean {
  return (
    _isFunctionLike(value) &&
    toString(value) === "[object GeneratorFunction]"
  );
}

/**
 * Determines whether the passed value is of type `Generator` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Generator`; otherwise, `false`.
 */
export function isGeneratorObject(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Generator]";
}

/**
 * Determines whether the passed value is of type `Int8Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Int8Array`; otherwise, `false`.
 */
export function isInt8Array(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Int8Array]";
}

/**
 * Determines whether the passed value is of type `Int16Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Int16Array`; otherwise,
 *     `false`.
 */
export function isInt16Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Int16Array]"
  );
}

/**
 * Determines whether the passed value is of type `Int32Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Int32Array`; otherwise,
 *     `false`.
 */
export function isInt32Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Int32Array]"
  );
}

/**
 * Determines whether the passed value is of type `Map`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Map`; otherwise, `false`.
 */
export function isMap(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Map]";
}

/**
 * Determines whether the passed value is of type `Map Iterator`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Map Iterator`; otherwise,
 *     `false`.
 */
export function isMapIterator(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Map Iterator]"
  );
}

/**
 * Determines whether the passed value is a `Module` namespace object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Module`; otherwise, `false`.
 */
export function isModuleNamespaceObject(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Module]";
}

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
export function isNativeError(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Error]";
}

/**
 * Determines if value is actually a `Number` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Number`; otherwise, `false`.
 */
export function isNumberObject(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Number]";
}

/**
 * Determines if value is actually a `BigInt` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `BigInt`; otherwise, `false`.
 */
export function isBigIntObject(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object BigInt]";
}

/**
 * Determines whether the passed value is of type `Promise`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Promise`; otherwise, `false`.
 */
export function isPromise(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Promise]";
}

/**
 * Determines whether the passed value is of type `RegExp`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `RegExp`; otherwise, `false`.
 */
export function isRegExp(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object RegExp]";
}

/**
 * Determines whether the passed value is of type `Set`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Set`; otherwise, `false`.
 */
export function isSet(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Set]";
}

/**
 * Determines whether the passed value is of type `Set Iterator`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Set Iterator`; otherwise,
 *     `false`.
 */
export function isSetIterator(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Set Iterator]"
  );
}

/**
 * Determines whether the passed value is of type `SharedArrayBuffer`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `SharedArrayBuffer`; otherwise,
 *     `false`.
 */
export function isSharedArrayBuffer(value: unknown): boolean {
  return (
    _isObjectLike(value) &&
    toString(value) === "[object SharedArrayBuffer]"
  );
}

/**
 * Determines if value is actually a `String` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `String`; otherwise, `false`.
 */
export function isStringObject(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object String]";
}

/**
 * Determines if value is actually a `Symbol` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Symbol`; otherwise, `false`.
 */
export function isSymbolObject(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Symbol]";
}

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
export function isTypedArray(value: unknown): boolean {
  // Used to match `toStringTag` values of typed arrays.
  const reTypedTag =
    /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/;
  return _isObjectLike(value) && reTypedTag.test(toString(value));
}

/**
 * Determines whether the passed value is of type `Uint8Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint8Array`; otherwise, `false`.
 */
export function isUint8Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Uint8Array]"
  );
}

/**
 * Determines whether the passed value is of type `Uint8ClampedArray`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint8ClampedArray`; otherwise,
 *     `false`.
 */
export function isUint8ClampedArray(value: unknown): boolean {
  return (
    _isObjectLike(value) &&
    toString(value) === "[object Uint8ClampedArray]"
  );
}

/**
 * Determines whether the passed value is of type `Uint16Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint16Array`; otherwise,
 *     `false`.
 */
export function isUint16Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Uint16Array]"
  );
}

/**
 * Determines whether the passed value is of type `Uint32Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint32Array`; otherwise,
 *     `false`.
 */
export function isUint32Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Uint32Array]"
  );
}

/**
 * Determines whether the passed value is of type `WeakMap`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `WeakMap`; otherwise, `false`.
 */
export function isWeakMap(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object WeakMap]";
}

/**
 * Determines whether the passed value is of type `WeakSet`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `WeakSet`; otherwise, `false`.
 */
export function isWeakSet(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object WeakSet]";
}
