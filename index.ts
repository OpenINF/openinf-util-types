// Copyright 2021 the OpenINF authors. All rights reserved. MIT license.
//
// Adapted from AMP. Copyright The AMP HTML Authors.
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
 * Returns the ECMA [[Class]] of a value.
 * @param {unknown} value
 * @returns {string}
 */
export function toString(value: unknown): string {
  return _toString.call(value);
}

/**
 * Determines if value is actually an Array.
 * @param {unknown} value
 * @returns {boolean}
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
 * Determines if value is actually an Object.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isObject(value: unknown): boolean {
  return toString(value) === '[object Object]';
}

/**
 * Determines if value is of number type and finite.
 * NaN and Infinity are not considered a finite number.
 * String numbers are not considered numbers.
 * @param {unknown} value
 * @returns {boolean}
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
 * @param {unknown} value
 * @returns {boolean}
 * @internal
 */
const _isObjectLike = (value: unknown): boolean =>
  value !== null && typeof value === "object";

/**
 * Determines if value is actually function-like.
 * @param {unknown} value
 * @returns {boolean}
 * @internal
 */
const _isFunctionLike = (value: unknown): boolean =>
  value !== null && typeof value === "function";

/**
 * Determines if value is actually an ArrayBuffer or SharedArrayBuffer.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isAnyArrayBuffer(value: unknown): boolean {
  return (
    _isObjectLike(value) &&
    (toString(value) === "[object ArrayBuffer]" ||
      toString(value) === "[object SharedArrayBuffer]")
  );
}

/**
 * Determines if value is actually an ArrayBufferView.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isArrayBufferView(value: unknown): boolean {
  return ArrayBuffer.isView(value);
}

/**
 * Determines if value is actually an Arguments object.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isArgumentsObject(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Arguments]";
}

/**
 * Determines if value is actually an ArrayBuffer.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isArrayBuffer(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object ArrayBuffer]"
  );
}

/**
 * Determines if value is actually an AsyncFunction.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isAsyncFunction(value: unknown): boolean {
  return (
    _isFunctionLike(value) && toString(value) === "[object AsyncFunction]"
  );
}

/**
 * Determines if value is actually a BigInt64Array.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isBigInt64Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object BigInt64Array]"
  );
}

/**
 * Determines if value is actually a BigUint64Array.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isBigUint64Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object BigUint64Array]"
  );
}

/**
 * Determines if value is actually a Boolean object.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isBooleanObject(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Boolean]";
}

/**
 * Determines if value is actually one of the boxed primitives:
 * - Boolean
 * - String
 * - Number
 * - Symbol
 * - BigInt
 *
 * @param {unknown} value
 * @returns {boolean}
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
 * Determines if value is actually a DataView.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isDataView(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object DataView]";
}

/**
 * Determines if value is actually a Date.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isDate(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Date]";
}

/**
 * Determines if value is actually a Float32Array.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isFloat32Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Float32Array]"
  );
}

/**
 * Determines if value is actually a Float64Array.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isFloat64Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Float64Array]"
  );
}

/**
 * Determines if value is actually a GeneratorFunction.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isGeneratorFunction(value: unknown): boolean {
  return (
    _isFunctionLike(value) &&
    toString(value) === "[object GeneratorFunction]"
  );
}

/**
 * Determines if value is actually a Generator object.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isGeneratorObject(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Generator]";
}

/**
 * Determines if value is actually a Int8Array.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isInt8Array(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Int8Array]";
}

/**
 * Determines if value is actually a Int16Array.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isInt16Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Int16Array]"
  );
}

/**
 * Determines if value is actually a isInt32Array.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isInt32Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Int32Array]"
  );
}

/**
 * Determines if value is actually a Map.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isMap(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Map]";
}

/**
 * Determines if value is actually a Map Iterator.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isMapIterator(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Map Iterator]"
  );
}

/**
 * Determines if value is actually a Module namespace object.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isModuleNamespaceObject(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Module]";
}

/**
 * Determines if value is actually a native Error.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isNativeError(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Error]";
}

/**
 * Determines if value is actually a Number object.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isNumberObject(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Number]";
}

/**
 * Determines if value is actually a BigInt object.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isBigIntObject(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object BigInt]";
}

/**
 * Determines if value is actually a Promise.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isPromise(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Promise]";
}

/**
 * Determines if value is actually a RegExp.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isRegExp(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object RegExp]";
}

/**
 * Determines if value is actually a Set.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isSet(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Set]";
}

/**
 * Determines if value is actually a Set Iterator.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isSetIterator(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Set Iterator]"
  );
}

/**
 * Determines if value is actually a SharedArrayBuffer.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isSharedArrayBuffer(value: unknown): boolean {
  return (
    _isObjectLike(value) &&
    toString(value) === "[object SharedArrayBuffer]"
  );
}

/**
 * Determines if value is actually a String object.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isStringObject(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object String]";
}

/**
 * Determines if value is actually a Symbol object.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isSymbolObject(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object Symbol]";
}

// Adapted from Lodash

/**
 * Determines if value is one of the typed arrays.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isTypedArray(value: unknown): boolean {
  /** Used to match `toStringTag` values of typed arrays. */
  const reTypedTag =
    /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/;
  return _isObjectLike(value) && reTypedTag.test(toString(value));
}

/**
 * Determines if value is actually a Uint8Array.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isUint8Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Uint8Array]"
  );
}

/**
 * Determines if value is actually a Uint8ClampedArray.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isUint8ClampedArray(value: unknown): boolean {
  return (
    _isObjectLike(value) &&
    toString(value) === "[object Uint8ClampedArray]"
  );
}

/**
 * Determines if value is actually a Uint16Array.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isUint16Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Uint16Array]"
  );
}

/**
 * Determines if value is actually a Uint32Array.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isUint32Array(value: unknown): boolean {
  return (
    _isObjectLike(value) && toString(value) === "[object Uint32Array]"
  );
}

/**
 * Determines if value is actually a WeakMap.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isWeakMap(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object WeakMap]";
}

/**
 * Determines if value is actually a WeakSet.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isWeakSet(value: unknown): boolean {
  return _isObjectLike(value) && toString(value) === "[object WeakSet]";
}
