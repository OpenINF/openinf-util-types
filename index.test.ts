// Copyright 2021 The OpenINF Authors. All rights reserved. MIT license.
//
// Adapted from AMP HTML. Copyright The AMP HTML Authors.
// @see https://github.com/ampproject/amphtml/blob/HEAD/test/unit/test-types.js
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

import {
  toArray,
  isObject,
  isFiniteNumber,
  isAnyArrayBuffer,
  isArgumentsObject,
  isArrayBuffer,
  isArrayBufferView,
  isAsyncFunction,
  isBigInt64Array,
  isBigIntObject,
  isBigUint64Array,
  isBooleanObject,
  isBoxedPrimitive,
  isDataView,
  isDate,
  isFloat32Array,
  isFloat64Array,
  isGeneratorFunction,
  isGeneratorObject,
  isInt16Array,
  isInt32Array,
  isInt8Array,
  isMap,
  isMapIterator,
  isModuleNamespaceObject,
  isNativeError,
  isNumberObject,
  isPromise,
  isRegExp,
  isSet,
  isSetIterator,
  isSharedArrayBuffer,
  isStringObject,
  isSymbolObject,
  isTypedArray,
  isUint16Array,
  isUint32Array,
  isUint8Array,
  isUint8ClampedArray,
  isWeakMap,
  isWeakSet,
} from './index';
import test from 'tape';

// Used to test isModuleNamespaceObject
// import * as testModuleNamespaceOpbject from "./index";

// Used to test toArray
import { JSDOM } from 'jsdom';
const { document } = (new JSDOM(`<!DOCTYPE html>`)).window;

// toArray
test('should return empty array if null is passed', (t) => {
  t.strictEquals(toArray(null).length, 0);
  t.strictEquals(toArray(undefined).length, 0);
  t.end();
});

test('should convert NodeList to array', (t) => {
  const parent = document.createElement('div');
  parent.appendChild(document.createElement('p'));
  parent.appendChild(document.createElement('span'));
  parent.appendChild(document.createElement('div'));
  const arr = toArray(parent.childNodes);
  t.strictEquals(arr[0], parent.childNodes[0]);
  t.strictEquals(arr.length, 3);
  t.strictEquals(Array.isArray(arr), true);
  t.end();
});

test('should convert HTMLCollection to array', (t) => {
  const parent = document.createElement('div');
  parent.appendChild(document.createElement('form'));
  parent.appendChild(document.createElement('form'));
  document.body.appendChild(parent);
  const arr = toArray(document.forms);
  t.strictEquals(arr[0], document.forms[0]);
  t.strictEquals(arr.length, 2);
  t.strictEquals(Array.isArray(arr), true)
  document.body.removeChild(parent);
  t.end();
});

test('should convert HTMLOptionsCollection to array', (t) => {
  const parent = document.createElement('select');
  parent.appendChild(document.createElement('option'));
  parent.appendChild(document.createElement('option'));
  parent.appendChild(document.createElement('option'));
  parent.appendChild(document.createElement('option'));
  const arr = toArray(parent.options);
  t.strictEquals(arr[0], parent.options[0]);
  t.strictEquals(arr.length, 4);
  t.strictEquals(Array.isArray(arr), true);
  t.end();
});

// isObject
test("should yield true for valid Object types", (t) => {
  t.strictEquals(isObject({}), true);
  t.strictEquals(isObject(new Object()), true);
  t.end();
});

test("should yield false for invalid Object types", (t) => {
  t.strictEquals(isObject(3), false);
  t.strictEquals(isObject('2'), false);
  t.strictEquals(isObject(true), false);
  t.end();
});

// isFiniteNumber
test('should yield false for non-numbers', (t) => {
  t.strictEquals(isFiniteNumber(null), false);
  t.strictEquals(isFiniteNumber(undefined), false);
  t.strictEquals(isFiniteNumber(''), false);
  t.strictEquals(isFiniteNumber('2'), false);
  t.strictEquals(isFiniteNumber([]), false);
  t.strictEquals(isFiniteNumber([2]), false);
  t.strictEquals(isFiniteNumber({}), false);
  t.strictEquals(isFiniteNumber({'a': 2}), false);
  t.strictEquals(isFiniteNumber(true), false);
  t.strictEquals(isFiniteNumber(NaN), false);
  t.end();
});

test('should yield true for numbers', (t) => {
  t.strictEquals(isFiniteNumber(3), true);
  t.strictEquals(isFiniteNumber(3.2), true);
  t.strictEquals(isFiniteNumber(123e5), true);
  t.end();
});

// Adapted from Deno. Copyright the Deno authors.
// @see https://github.com/denoland/deno_std/blob/HEAD/node/_util/_util_types_test.ts
//
// Adapted from Node.js. Copyright Joyent, Inc. and other Node contributors.
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

// isAnyArrayBuffer
test("should yield true for valid ArrayBuffer types", (t) => {
  t.strictEquals(isAnyArrayBuffer(new ArrayBuffer(0)), true);
  t.strictEquals(isAnyArrayBuffer(new SharedArrayBuffer(0)), true);
  t.end();
});

test("should yield false for invalid ArrayBuffer types", (t) => {
  t.strictEquals(isAnyArrayBuffer({}), false);
  t.strictEquals(isAnyArrayBuffer([]), false);
  t.strictEquals(isAnyArrayBuffer(new Error()), false);
  t.end();
});

// isArrayBufferView
test("should yield true for valid ArrayBufferView types", (t) => {
  t.strictEquals(isArrayBufferView(new Int8Array(0)), true);
  t.strictEquals(isArrayBufferView(new Uint8Array(0)), true);
  t.strictEquals(isArrayBufferView(new Uint8ClampedArray(0)), true);
  t.strictEquals(isArrayBufferView(new Int16Array(0)), true);
  t.strictEquals(isArrayBufferView(new Uint16Array(0)), true);
  t.strictEquals(isArrayBufferView(new Int32Array(0)), true);
  t.strictEquals(isArrayBufferView(new Uint32Array(0)), true);
  t.strictEquals(isArrayBufferView(new Float32Array(0)), true);
  t.strictEquals(isArrayBufferView(new Float64Array(0)), true);
  t.strictEquals(isArrayBufferView(new DataView(new ArrayBuffer(0))), true);
  t.end();
});

test("should yield false for invalid ArrayBufferView types", (t) => {
  t.strictEquals(isArrayBufferView({}), false);
  t.strictEquals(isArrayBufferView([]), false);
  t.strictEquals(isArrayBufferView(new Error()), false);
  t.strictEquals(isArrayBufferView(new ArrayBuffer(0)), false);
  t.end();
});

// isArgumentsObject
// Note: not testable in TS

test("should yield false for invalid Argument types", (t) => {
  t.strictEquals(isArgumentsObject({}), false);
  t.strictEquals(isArgumentsObject([]), false);
  t.strictEquals(isArgumentsObject(new Error()), false);
  t.end();
});

// isArrayBuffer
test("should yield true for valid ArrayBuffer types", (t) => {
  t.strictEquals(isArrayBuffer(new ArrayBuffer(0)), true);
  t.end();
});

test("should yield false for invalid ArrayBuffer types", (t) => {
  t.strictEquals(isArrayBuffer(new SharedArrayBuffer(0)), false);
  t.strictEquals(isArrayBuffer({}), false);
  t.strictEquals(isArrayBuffer([]), false);
  t.strictEquals(isArrayBuffer(new Error()), false);
  t.end();
});

// isAsyncFunction
test("should yield true for valid async function types", (t) => {
  const asyncFunction = async (): Promise<void> => {};
  t.strictEquals(isAsyncFunction(asyncFunction), true);
  t.end();
});

test("should yield false for invalid async function types", (t) => {
  const syncFunction = (): void => {};
  t.strictEquals(isAsyncFunction(syncFunction), false);
  t.strictEquals(isAsyncFunction({}), false);
  t.strictEquals(isAsyncFunction([]), false);
  t.strictEquals(isAsyncFunction(new Error()), false);
  t.end();
});

// isBigInt64Array
test("should yield true for valid BigInt64Array types", (t) => {
  t.strictEquals(isBigInt64Array(new BigInt64Array()), true);
  t.end();
});

test("should yield false for invalid BigInt64Array types", (t) => {
  t.strictEquals(isBigInt64Array(new BigUint64Array()), false);
  t.strictEquals(isBigInt64Array(new Float32Array()), false);
  t.strictEquals(isBigInt64Array(new Int32Array()), false);
  t.end();
});

// isBigUint64Array
test("should yield true for valid isBigUint64Array types", (t) => {
  t.strictEquals(isBigUint64Array(new BigUint64Array()), true);
  t.end();
});

test("should yield false for invalid isBigUint64Array types", (t) => {
  t.strictEquals(isBigUint64Array(new BigInt64Array()), false);
  t.strictEquals(isBigUint64Array(new Float32Array()), false);
  t.strictEquals(isBigUint64Array(new Int32Array()), false);
  t.end();
});

// isBooleanObject
test("should yield true for valid Boolean object types", (t) => {
  t.strictEquals(isBooleanObject(new Boolean(false)), true);
  t.strictEquals(isBooleanObject(new Boolean(true)), true);
  t.end();
});

test("should yield false for invalid isBigUint64Array types", (t) => {
  t.strictEquals(isBooleanObject(false), false);
  t.strictEquals(isBooleanObject(true), false);
  t.strictEquals(isBooleanObject(Boolean(false)), false);
  t.strictEquals(isBooleanObject(Boolean(true)), false);
  t.end();
});

// isBoxedPrimitive
test("should yield true for valid boxed primitive values", (t) => {
  t.strictEquals(isBoxedPrimitive(new Boolean(false)), true);
  t.strictEquals(isBoxedPrimitive(Object(Symbol("foo"))), true);
  t.strictEquals(isBoxedPrimitive(Object(BigInt(5))), true);
  t.strictEquals(isBoxedPrimitive(new String("foo")), true);
  t.end();
});

test("should yield false for invalid boxed primitive values", (t) => {
  t.strictEquals(isBoxedPrimitive(false), false);
  t.strictEquals(isBoxedPrimitive(Symbol("foo")), false);
  t.end();
});

// isDateView
test("should yield true for valid DataView types", (t) => {
  t.strictEquals(isDataView(new DataView(new ArrayBuffer(0))), true);
  t.end();
});

test("should yield false for invalid DataView types", (t) => {
  t.strictEquals(isDataView(new Float64Array(0)), false);
  t.end();
});

// isDate
test("should yield true for valid date types", (t) => {
  t.strictEquals(isDate(new Date()), true);
  t.strictEquals(isDate(new Date(0)), true);
  t.strictEquals(isDate(new (eval("Date"))()), true);
  t.end();
});

test("should yield false for invalid date types", (t) => {
  t.strictEquals(isDate(Date()), false);
  t.strictEquals(isDate({}), false);
  t.strictEquals(isDate([]), false);
  t.strictEquals(isDate(new Error()), false);
  t.strictEquals(isDate(Object.create(Date.prototype)), false);
  t.end();
});

// isFloat32Array
test("should yield true for valid Float32Array types", (t) => {
  t.strictEquals(isFloat32Array(new Float32Array(0)), true);
  t.end();
});

test("should yield false for invalid Float32Array types", (t) => {
  t.strictEquals(isFloat32Array(new ArrayBuffer(0)), false);
  t.strictEquals(isFloat32Array(new Float64Array(0)), false);
  t.end();
});

// isFloat64Array
test("should yield true for valid Float64Array types", (t) => {
  t.strictEquals(isFloat64Array(new Float64Array(0)), true);
  t.end();
});

test("should yield false for invalid Float64Array types", (t) => {
  t.strictEquals(isFloat64Array(new ArrayBuffer(0)), false);
  t.strictEquals(isFloat64Array(new Uint8Array(0)), false);
  t.end();
});

// isGeneratorFunction
test("should yield true for valid generator functions", (t) => {
  t.strictEquals(
    isGeneratorFunction(function* foo() {}),
    true,
  );
  t.end();
});

test("should yield false for invalid generator functions", (t) => {
  t.strictEquals(
    isGeneratorFunction(function foo() {}),
    false,
  );
  t.end();
});

// isGeneratorObject
test("should yield true for valid generator object types", (t) => {
  function* foo(): Iterator<void> {}
  t.strictEquals(isGeneratorObject(foo()), true);
  t.end();
});

test("should yield false for invalid generation object types", (t) => {
  t.strictEquals(
    isGeneratorObject(function* foo() {}),
    false,
  );
  t.end();
});

// isInt8Array
test("should yield true for valid Int8Array types", (t) => {
  t.strictEquals(isInt8Array(new Int8Array(0)), true);
  t.end();
});

test("should yield false for invalid Int8Array types", (t) => {
  t.strictEquals(isInt8Array(new ArrayBuffer(0)), false);
  t.strictEquals(isInt8Array(new Float64Array(0)), false);
  t.end();
});

// isInt16Array
test("should yield true for valid Int16Array types", (t) => {
  t.strictEquals(isInt16Array(new Int16Array(0)), true);
  t.end();
});

test("should yield false for invalid Int16Array type", (t) => {
  t.strictEquals(isInt16Array(new ArrayBuffer(0)), false);
  t.strictEquals(isInt16Array(new Float64Array(0)), false);
  t.end();
});

// isInt32Array
test("should yield true for valid isInt32Array types", (t) => {
  t.strictEquals(isInt32Array(new Int32Array(0)), true);
  t.end();
});

test("should yield false for invalid isInt32Array type", (t) => {
  t.strictEquals(isInt32Array(new ArrayBuffer(0)), false);
  t.strictEquals(isInt32Array(new Float64Array(0)), false);
  t.end();
});

// isStringObject
test("should yield true for valid String types", (t) => {
  t.strictEquals(isStringObject(new String("")), true);
  t.strictEquals(isStringObject(new String("Foo")), true);
  t.end();
});

test("should yield false for invalid String types", (t) => {
  t.strictEquals(isStringObject(""), false);
  t.strictEquals(isStringObject("Foo"), false);
  t.end();
});

// isMap
test("should yield true for valid Map types", (t) => {
  t.strictEquals(isMap(new Map()), true);
  t.end();
});

test("should yield false for invalid Map types", (t) => {
  t.strictEquals(isMap({}), false);
  t.strictEquals(isMap([]), false);
  t.strictEquals(isMap(new Date()), false);
  t.strictEquals(isMap(new Error()), false);
  t.end();
});

// isMapIterator
test("should yield true for valid Map Iterator types", (t) => {
  const map = new Map();
  t.strictEquals(isMapIterator(map.keys()), true);
  t.strictEquals(isMapIterator(map.values()), true);
  t.strictEquals(isMapIterator(map.entries()), true);
  t.strictEquals(isMapIterator(map[Symbol.iterator]()), true);
  t.end();
});

test("should yield false for invalid Map iterator types", (t) => {
  t.strictEquals(isMapIterator(new Map()), false);
  t.strictEquals(isMapIterator([]), false);
  t.strictEquals(isMapIterator(new Date()), false);
  t.strictEquals(isMapIterator(new Error()), false);
  t.end();
});

// TODO: Maybe get this working with an ESM targer?
// isModuleNamespaceObject
// test("should yield true for valid module namespace objects", (t) => {
//   t.strictEquals(isModuleNamespaceObject(testModuleNamespaceOpbject), true);
//   t.end();
// });

test("should yield false for invalid  module namespace objects", (t) => {
  t.strictEquals(isModuleNamespaceObject(t.strictEquals), false);
  t.end();
});

// isNativeError
test("should yield true for valid Error types", (t) => {
  t.strictEquals(isNativeError(new Error()), true);
  t.strictEquals(isNativeError(new TypeError()), true);
  t.strictEquals(isNativeError(new RangeError()), true);
  t.end();
});

test("should yield false for invalid Error types", (t) => {
  t.strictEquals(isNativeError(null), false);
  t.strictEquals(isNativeError(NaN), false);
  t.end();
});

// isNumberObject
test("should yield true for valid number objects", (t) => {
  t.strictEquals(isNumberObject(new Number(0)), true);
  t.end();
});

test("should yield false for invalid number types", (t) => {
  t.strictEquals(isNumberObject(0), false);
  t.end();
});

// isBigIntObject
test("should yield true for valid number objects", (t) => {
  t.strictEquals(isBigIntObject(new Object(BigInt(42))), true);
  t.end();
});

test("should yield false for invalid number types", (t) => {
  t.strictEquals(isBigIntObject(BigInt(42)), false);
  t.end();
});

// isPromise
test("should yield true for valid Promise types", (t) => {
  t.strictEquals(isPromise(Promise.resolve(42)), true);
  t.end();
});

test("should yield false for invalid Promise types", (t) => {
  t.strictEquals(isPromise(new Object()), false);
  t.end();
});

// isRegExp
test("should yield true for valid RegExp", (t) => {
  t.strictEquals(isRegExp(/abc/), true);
  t.strictEquals(isRegExp(new RegExp("abc")), true);
  t.end();
});

test("should yield false for invalid RegExp types", (t) => {
  t.strictEquals(isRegExp({}), false);
  t.strictEquals(isRegExp("/abc/"), false);
  t.end();
});

// isSet
test("should yield true for valid Set types", (t) => {
  t.strictEquals(isSet(new Set()), true);
  t.end();
});

test("should yield false for invalid Set types", (t) => {
  t.strictEquals(isSet({}), false);
  t.strictEquals(isSet([]), false);
  t.strictEquals(isSet(new Map()), false);
  t.strictEquals(isSet(new Error()), false);
  t.end();
});

// isSetIterator
test("should yield true for valid Set Iterator types", (t) => {
  const set = new Set();
  t.strictEquals(isSetIterator(set.keys()), true);
  t.strictEquals(isSetIterator(set.values()), true);
  t.strictEquals(isSetIterator(set.entries()), true);
  t.strictEquals(isSetIterator(set[Symbol.iterator]()), true);
  t.end();
});

test("should yield false for invalid Set Iterator types", (t) => {
  t.strictEquals(isSetIterator(new Set()), false);
  t.strictEquals(isSetIterator([]), false);
  t.strictEquals(isSetIterator(new Map()), false);
  t.strictEquals(isSetIterator(new Error()), false);
  t.end();
});

// isSharedArrayBuffer
test("should yield true for valid SharedArrayBuffer types", (t) => {
  t.strictEquals(isSharedArrayBuffer(new SharedArrayBuffer(0)), true);
  t.end();
});

test("should yield false for invalid SharedArrayBuffer types", (t) => {
  t.strictEquals(isSharedArrayBuffer(new ArrayBuffer(0)), false);
  t.end();
});

// isStringObject
test("should yield true for valid String Object types", (t) => {
  t.strictEquals(isStringObject(new String("")), true);
  t.strictEquals(isStringObject(new String("Foo")), true);
  t.end();
});

test("should yield false for invalid String Object types", (t) => {
  t.strictEquals(isStringObject(""), false);
  t.strictEquals(isStringObject("Foo"), false);
  t.end();
});

// isSymbolObject
test("should yield true for valid Symbol types", (t) => {
  t.strictEquals(isSymbolObject(Object(Symbol("foo"))), true);
  t.end();
});

test("should yield false for invalid Symbol types", (t) => {
  t.strictEquals(isSymbolObject(Symbol("foo")), false);
  t.end();
});

// isTypedArray
test("should yield true for valid TypedArray types", (t) => {
  t.strictEquals(isTypedArray(new Uint8Array(0)), true);
  t.strictEquals(isTypedArray(new Float64Array(0)), true);
  t.end();
});

test("should yield false for invalid TypedArray types", (t) => {
  t.strictEquals(isTypedArray(new ArrayBuffer(0)), false);
  t.end();
});

// isUint8Array
test("should yield true for valid Uint8Array types", (t) => {
  t.strictEquals(isUint8Array(new Uint8Array(0)), true);
  t.end();
});

test("should yield false for invalid Uint8Array types", (t) => {
  t.strictEquals(isUint8Array(new ArrayBuffer(0)), false);
  t.strictEquals(isUint8Array(new Float64Array(0)), false);
  t.end();
});

// isUint8ClampedArray
test("should yield true for valid Uint8ClampedArray types", (t) => {
  t.strictEquals(isUint8ClampedArray(new Uint8ClampedArray(0)), true);
  t.end();
});

test("should yield false for invalid Uint8Array types", (t) => {
  t.strictEquals(isUint8ClampedArray(new ArrayBuffer(0)), false);
  t.strictEquals(isUint8ClampedArray(new Float64Array(0)), false);
  t.end();
});

// isUint16Array
test("should yield true for valid isUint16Array types", (t) => {
  t.strictEquals(isUint16Array(new Uint16Array(0)), true);
  t.end();
});

test("should yield false for invalid Uint16Array types", (t) => {
  t.strictEquals(isUint16Array(new ArrayBuffer(0)), false);
  t.strictEquals(isUint16Array(new Float64Array(0)), false);
  t.end();
});

// isUint32Array
test("should yield true for valid Uint32Array types", (t) => {
  t.strictEquals(isUint32Array(new Uint32Array(0)), true);
  t.end();
});

test("should yield false for invalid isUint16Array types", (t) => {
  t.strictEquals(isUint32Array(new ArrayBuffer(0)), false);
  t.strictEquals(isUint32Array(new Float64Array(0)), false);
  t.end();
});

// isWeakMap
test("should yield true for valid WeakMap types", (t) => {
  t.strictEquals(isWeakMap(new WeakMap()), true);
  t.end();
});

test("should yield false for invalid WeakMap types", (t) => {
  t.strictEquals(isWeakMap(new Set()), false);
  t.strictEquals(isWeakMap(new Map()), false);
  t.end();
});

// isWeakSet
test("should yield true for valid WeakSet types", (t) => {
  t.strictEquals(isWeakSet(new WeakSet()), true);
  t.end();
});

test("should yield false for invalid WeakSet types", (t) => {
  t.strictEquals(isWeakSet(new Set()), false);
  t.strictEquals(isWeakSet(new Map()), false);
  t.end();
});
