"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const tape_1 = __importDefault(require("tape"));
// Used to test isModuleNamespaceObject
// import * as testModuleNamespaceOpbject from "./index";
// Used to test toArray
const jsdom_1 = require("jsdom");
const { document } = (new jsdom_1.JSDOM(`<!DOCTYPE html>`)).window;
// toArray
tape_1.default('should return empty array if null is passed', (t) => {
    t.strictEquals(index_1.toArray(null).length, 0);
    t.strictEquals(index_1.toArray(undefined).length, 0);
    t.end();
});
tape_1.default('should convert NodeList to array', (t) => {
    const parent = document.createElement('div');
    parent.appendChild(document.createElement('p'));
    parent.appendChild(document.createElement('span'));
    parent.appendChild(document.createElement('div'));
    const arr = index_1.toArray(parent.childNodes);
    t.strictEquals(arr[0], parent.childNodes[0]);
    t.strictEquals(arr.length, 3);
    t.strictEquals(Array.isArray(arr), true);
    t.end();
});
tape_1.default('should convert HTMLCollection to array', (t) => {
    const parent = document.createElement('div');
    parent.appendChild(document.createElement('form'));
    parent.appendChild(document.createElement('form'));
    document.body.appendChild(parent);
    const arr = index_1.toArray(document.forms);
    t.strictEquals(arr[0], document.forms[0]);
    t.strictEquals(arr.length, 2);
    t.strictEquals(Array.isArray(arr), true);
    document.body.removeChild(parent);
    t.end();
});
tape_1.default('should convert HTMLOptionsCollection to array', (t) => {
    const parent = document.createElement('select');
    parent.appendChild(document.createElement('option'));
    parent.appendChild(document.createElement('option'));
    parent.appendChild(document.createElement('option'));
    parent.appendChild(document.createElement('option'));
    const arr = index_1.toArray(parent.options);
    t.strictEquals(arr[0], parent.options[0]);
    t.strictEquals(arr.length, 4);
    t.strictEquals(Array.isArray(arr), true);
    t.end();
});
// isObject
tape_1.default("should yield true for valid Object types", (t) => {
    t.strictEquals(index_1.isObject({}), true);
    t.strictEquals(index_1.isObject(new Object()), true);
    t.end();
});
tape_1.default("should yield false for invalid Object types", (t) => {
    t.strictEquals(index_1.isObject(3), false);
    t.strictEquals(index_1.isObject('2'), false);
    t.strictEquals(index_1.isObject(true), false);
    t.end();
});
// isFiniteNumber
tape_1.default('should yield false for non-numbers', (t) => {
    t.strictEquals(index_1.isFiniteNumber(null), false);
    t.strictEquals(index_1.isFiniteNumber(undefined), false);
    t.strictEquals(index_1.isFiniteNumber(''), false);
    t.strictEquals(index_1.isFiniteNumber('2'), false);
    t.strictEquals(index_1.isFiniteNumber([]), false);
    t.strictEquals(index_1.isFiniteNumber([2]), false);
    t.strictEquals(index_1.isFiniteNumber({}), false);
    t.strictEquals(index_1.isFiniteNumber({ 'a': 2 }), false);
    t.strictEquals(index_1.isFiniteNumber(true), false);
    t.strictEquals(index_1.isFiniteNumber(NaN), false);
    t.end();
});
tape_1.default('should yield true for numbers', (t) => {
    t.strictEquals(index_1.isFiniteNumber(3), true);
    t.strictEquals(index_1.isFiniteNumber(3.2), true);
    t.strictEquals(index_1.isFiniteNumber(123e5), true);
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
tape_1.default("should yield true for valid ArrayBuffer types", (t) => {
    t.strictEquals(index_1.isAnyArrayBuffer(new ArrayBuffer(0)), true);
    t.strictEquals(index_1.isAnyArrayBuffer(new SharedArrayBuffer(0)), true);
    t.end();
});
tape_1.default("should yield false for invalid ArrayBuffer types", (t) => {
    t.strictEquals(index_1.isAnyArrayBuffer({}), false);
    t.strictEquals(index_1.isAnyArrayBuffer([]), false);
    t.strictEquals(index_1.isAnyArrayBuffer(new Error()), false);
    t.end();
});
// isArrayBufferView
tape_1.default("should yield true for valid ArrayBufferView types", (t) => {
    t.strictEquals(index_1.isArrayBufferView(new Int8Array(0)), true);
    t.strictEquals(index_1.isArrayBufferView(new Uint8Array(0)), true);
    t.strictEquals(index_1.isArrayBufferView(new Uint8ClampedArray(0)), true);
    t.strictEquals(index_1.isArrayBufferView(new Int16Array(0)), true);
    t.strictEquals(index_1.isArrayBufferView(new Uint16Array(0)), true);
    t.strictEquals(index_1.isArrayBufferView(new Int32Array(0)), true);
    t.strictEquals(index_1.isArrayBufferView(new Uint32Array(0)), true);
    t.strictEquals(index_1.isArrayBufferView(new Float32Array(0)), true);
    t.strictEquals(index_1.isArrayBufferView(new Float64Array(0)), true);
    t.strictEquals(index_1.isArrayBufferView(new DataView(new ArrayBuffer(0))), true);
    t.end();
});
tape_1.default("should yield false for invalid ArrayBufferView types", (t) => {
    t.strictEquals(index_1.isArrayBufferView({}), false);
    t.strictEquals(index_1.isArrayBufferView([]), false);
    t.strictEquals(index_1.isArrayBufferView(new Error()), false);
    t.strictEquals(index_1.isArrayBufferView(new ArrayBuffer(0)), false);
    t.end();
});
// isArgumentsObject
// Note: not testable in TS
tape_1.default("should yield false for invalid Argument types", (t) => {
    t.strictEquals(index_1.isArgumentsObject({}), false);
    t.strictEquals(index_1.isArgumentsObject([]), false);
    t.strictEquals(index_1.isArgumentsObject(new Error()), false);
    t.end();
});
// isArrayBuffer
tape_1.default("should yield true for valid ArrayBuffer types", (t) => {
    t.strictEquals(index_1.isArrayBuffer(new ArrayBuffer(0)), true);
    t.end();
});
tape_1.default("should yield false for invalid ArrayBuffer types", (t) => {
    t.strictEquals(index_1.isArrayBuffer(new SharedArrayBuffer(0)), false);
    t.strictEquals(index_1.isArrayBuffer({}), false);
    t.strictEquals(index_1.isArrayBuffer([]), false);
    t.strictEquals(index_1.isArrayBuffer(new Error()), false);
    t.end();
});
// isAsyncFunction
tape_1.default("should yield true for valid async function types", (t) => {
    const asyncFunction = async () => { };
    t.strictEquals(index_1.isAsyncFunction(asyncFunction), true);
    t.end();
});
tape_1.default("should yield false for invalid async function types", (t) => {
    const syncFunction = () => { };
    t.strictEquals(index_1.isAsyncFunction(syncFunction), false);
    t.strictEquals(index_1.isAsyncFunction({}), false);
    t.strictEquals(index_1.isAsyncFunction([]), false);
    t.strictEquals(index_1.isAsyncFunction(new Error()), false);
    t.end();
});
// isBigInt64Array
tape_1.default("should yield true for valid BigInt64Array types", (t) => {
    t.strictEquals(index_1.isBigInt64Array(new BigInt64Array()), true);
    t.end();
});
tape_1.default("should yield false for invalid BigInt64Array types", (t) => {
    t.strictEquals(index_1.isBigInt64Array(new BigUint64Array()), false);
    t.strictEquals(index_1.isBigInt64Array(new Float32Array()), false);
    t.strictEquals(index_1.isBigInt64Array(new Int32Array()), false);
    t.end();
});
// isBigUint64Array
tape_1.default("should yield true for valid isBigUint64Array types", (t) => {
    t.strictEquals(index_1.isBigUint64Array(new BigUint64Array()), true);
    t.end();
});
tape_1.default("should yield false for invalid isBigUint64Array types", (t) => {
    t.strictEquals(index_1.isBigUint64Array(new BigInt64Array()), false);
    t.strictEquals(index_1.isBigUint64Array(new Float32Array()), false);
    t.strictEquals(index_1.isBigUint64Array(new Int32Array()), false);
    t.end();
});
// isBooleanObject
tape_1.default("should yield true for valid Boolean object types", (t) => {
    t.strictEquals(index_1.isBooleanObject(new Boolean(false)), true);
    t.strictEquals(index_1.isBooleanObject(new Boolean(true)), true);
    t.end();
});
tape_1.default("should yield false for invalid isBigUint64Array types", (t) => {
    t.strictEquals(index_1.isBooleanObject(false), false);
    t.strictEquals(index_1.isBooleanObject(true), false);
    t.strictEquals(index_1.isBooleanObject(Boolean(false)), false);
    t.strictEquals(index_1.isBooleanObject(Boolean(true)), false);
    t.end();
});
// isBoxedPrimitive
tape_1.default("should yield true for valid boxed primitive values", (t) => {
    t.strictEquals(index_1.isBoxedPrimitive(new Boolean(false)), true);
    t.strictEquals(index_1.isBoxedPrimitive(Object(Symbol("foo"))), true);
    t.strictEquals(index_1.isBoxedPrimitive(Object(BigInt(5))), true);
    t.strictEquals(index_1.isBoxedPrimitive(new String("foo")), true);
    t.end();
});
tape_1.default("should yield false for invalid boxed primitive values", (t) => {
    t.strictEquals(index_1.isBoxedPrimitive(false), false);
    t.strictEquals(index_1.isBoxedPrimitive(Symbol("foo")), false);
    t.end();
});
// isDateView
tape_1.default("should yield true for valid DataView types", (t) => {
    t.strictEquals(index_1.isDataView(new DataView(new ArrayBuffer(0))), true);
    t.end();
});
tape_1.default("should yield false for invalid DataView types", (t) => {
    t.strictEquals(index_1.isDataView(new Float64Array(0)), false);
    t.end();
});
// isDate
tape_1.default("should yield true for valid date types", (t) => {
    t.strictEquals(index_1.isDate(new Date()), true);
    t.strictEquals(index_1.isDate(new Date(0)), true);
    t.strictEquals(index_1.isDate(new (eval("Date"))()), true);
    t.end();
});
tape_1.default("should yield false for invalid date types", (t) => {
    t.strictEquals(index_1.isDate(Date()), false);
    t.strictEquals(index_1.isDate({}), false);
    t.strictEquals(index_1.isDate([]), false);
    t.strictEquals(index_1.isDate(new Error()), false);
    t.strictEquals(index_1.isDate(Object.create(Date.prototype)), false);
    t.end();
});
// isFloat32Array
tape_1.default("should yield true for valid Float32Array types", (t) => {
    t.strictEquals(index_1.isFloat32Array(new Float32Array(0)), true);
    t.end();
});
tape_1.default("should yield false for invalid Float32Array types", (t) => {
    t.strictEquals(index_1.isFloat32Array(new ArrayBuffer(0)), false);
    t.strictEquals(index_1.isFloat32Array(new Float64Array(0)), false);
    t.end();
});
// isFloat64Array
tape_1.default("should yield true for valid Float64Array types", (t) => {
    t.strictEquals(index_1.isFloat64Array(new Float64Array(0)), true);
    t.end();
});
tape_1.default("should yield false for invalid Float64Array types", (t) => {
    t.strictEquals(index_1.isFloat64Array(new ArrayBuffer(0)), false);
    t.strictEquals(index_1.isFloat64Array(new Uint8Array(0)), false);
    t.end();
});
// isOrdinaryFunction
tape_1.default("should yield true for valid ordinary functions", (t) => {
    t.strictEquals(index_1.isOrdinaryFunction(function foo() { }), true);
    t.end();
});
tape_1.default("should yield false for invalid ordinary functions", (t) => {
    t.strictEquals(index_1.isOrdinaryFunction(function* foo() { }), false);
    t.strictEquals(index_1.isOrdinaryFunction(async function foo() { }), false);
    t.strictEquals(index_1.isOrdinaryFunction(async function* foo() { }), false);
    t.end();
});
// isGeneratorFunction
tape_1.default("should yield true for valid generator functions", (t) => {
    t.strictEquals(index_1.isGeneratorFunction(function* foo() { }), true);
    t.end();
});
tape_1.default("should yield false for invalid generator functions", (t) => {
    t.strictEquals(index_1.isGeneratorFunction(function foo() { }), false);
    t.end();
});
// isGeneratorObject
tape_1.default("should yield true for valid generator object types", (t) => {
    function* foo() { }
    t.strictEquals(index_1.isGeneratorObject(foo()), true);
    t.end();
});
tape_1.default("should yield false for invalid generation object types", (t) => {
    t.strictEquals(index_1.isGeneratorObject(function* foo() { }), false);
    t.end();
});
// isInt8Array
tape_1.default("should yield true for valid Int8Array types", (t) => {
    t.strictEquals(index_1.isInt8Array(new Int8Array(0)), true);
    t.end();
});
tape_1.default("should yield false for invalid Int8Array types", (t) => {
    t.strictEquals(index_1.isInt8Array(new ArrayBuffer(0)), false);
    t.strictEquals(index_1.isInt8Array(new Float64Array(0)), false);
    t.end();
});
// isInt16Array
tape_1.default("should yield true for valid Int16Array types", (t) => {
    t.strictEquals(index_1.isInt16Array(new Int16Array(0)), true);
    t.end();
});
tape_1.default("should yield false for invalid Int16Array type", (t) => {
    t.strictEquals(index_1.isInt16Array(new ArrayBuffer(0)), false);
    t.strictEquals(index_1.isInt16Array(new Float64Array(0)), false);
    t.end();
});
// isInt32Array
tape_1.default("should yield true for valid isInt32Array types", (t) => {
    t.strictEquals(index_1.isInt32Array(new Int32Array(0)), true);
    t.end();
});
tape_1.default("should yield false for invalid isInt32Array type", (t) => {
    t.strictEquals(index_1.isInt32Array(new ArrayBuffer(0)), false);
    t.strictEquals(index_1.isInt32Array(new Float64Array(0)), false);
    t.end();
});
// isStringObject
tape_1.default("should yield true for valid String types", (t) => {
    t.strictEquals(index_1.isStringObject(new String("")), true);
    t.strictEquals(index_1.isStringObject(new String("Foo")), true);
    t.end();
});
tape_1.default("should yield false for invalid String types", (t) => {
    t.strictEquals(index_1.isStringObject(""), false);
    t.strictEquals(index_1.isStringObject("Foo"), false);
    t.end();
});
// isMap
tape_1.default("should yield true for valid Map types", (t) => {
    t.strictEquals(index_1.isMap(new Map()), true);
    t.end();
});
tape_1.default("should yield false for invalid Map types", (t) => {
    t.strictEquals(index_1.isMap({}), false);
    t.strictEquals(index_1.isMap([]), false);
    t.strictEquals(index_1.isMap(new Date()), false);
    t.strictEquals(index_1.isMap(new Error()), false);
    t.end();
});
// isMapIterator
tape_1.default("should yield true for valid Map Iterator types", (t) => {
    const map = new Map();
    t.strictEquals(index_1.isMapIterator(map.keys()), true);
    t.strictEquals(index_1.isMapIterator(map.values()), true);
    t.strictEquals(index_1.isMapIterator(map.entries()), true);
    t.strictEquals(index_1.isMapIterator(map[Symbol.iterator]()), true);
    t.end();
});
tape_1.default("should yield false for invalid Map iterator types", (t) => {
    t.strictEquals(index_1.isMapIterator(new Map()), false);
    t.strictEquals(index_1.isMapIterator([]), false);
    t.strictEquals(index_1.isMapIterator(new Date()), false);
    t.strictEquals(index_1.isMapIterator(new Error()), false);
    t.end();
});
// TODO: Maybe get this working with an ESM targer?
// isModuleNamespaceObject
// test("should yield true for valid module namespace objects", (t) => {
//   t.strictEquals(isModuleNamespaceObject(testModuleNamespaceOpbject), true);
//   t.end();
// });
tape_1.default("should yield false for invalid  module namespace objects", (t) => {
    t.strictEquals(index_1.isModuleNamespaceObject(t.strictEquals), false);
    t.end();
});
// isNativeError
tape_1.default("should yield true for valid Error types", (t) => {
    t.strictEquals(index_1.isNativeError(new Error()), true);
    t.strictEquals(index_1.isNativeError(new TypeError()), true);
    t.strictEquals(index_1.isNativeError(new RangeError()), true);
    t.end();
});
tape_1.default("should yield false for invalid Error types", (t) => {
    t.strictEquals(index_1.isNativeError(null), false);
    t.strictEquals(index_1.isNativeError(NaN), false);
    t.end();
});
// isNumberObject
tape_1.default("should yield true for valid number objects", (t) => {
    t.strictEquals(index_1.isNumberObject(new Number(0)), true);
    t.end();
});
tape_1.default("should yield false for invalid number types", (t) => {
    t.strictEquals(index_1.isNumberObject(0), false);
    t.end();
});
// isBigIntObject
tape_1.default("should yield true for valid number objects", (t) => {
    t.strictEquals(index_1.isBigIntObject(new Object(BigInt(42))), true);
    t.end();
});
tape_1.default("should yield false for invalid number types", (t) => {
    t.strictEquals(index_1.isBigIntObject(BigInt(42)), false);
    t.end();
});
// isPromise
tape_1.default("should yield true for valid Promise types", (t) => {
    t.strictEquals(index_1.isPromise(Promise.resolve(42)), true);
    t.end();
});
tape_1.default("should yield false for invalid Promise types", (t) => {
    t.strictEquals(index_1.isPromise(new Object()), false);
    t.end();
});
// isRegExp
tape_1.default("should yield true for valid RegExp", (t) => {
    t.strictEquals(index_1.isRegExp(/abc/), true);
    t.strictEquals(index_1.isRegExp(new RegExp("abc")), true);
    t.end();
});
tape_1.default("should yield false for invalid RegExp types", (t) => {
    t.strictEquals(index_1.isRegExp({}), false);
    t.strictEquals(index_1.isRegExp("/abc/"), false);
    t.end();
});
// isSet
tape_1.default("should yield true for valid Set types", (t) => {
    t.strictEquals(index_1.isSet(new Set()), true);
    t.end();
});
tape_1.default("should yield false for invalid Set types", (t) => {
    t.strictEquals(index_1.isSet({}), false);
    t.strictEquals(index_1.isSet([]), false);
    t.strictEquals(index_1.isSet(new Map()), false);
    t.strictEquals(index_1.isSet(new Error()), false);
    t.end();
});
// isSetIterator
tape_1.default("should yield true for valid Set Iterator types", (t) => {
    const set = new Set();
    t.strictEquals(index_1.isSetIterator(set.keys()), true);
    t.strictEquals(index_1.isSetIterator(set.values()), true);
    t.strictEquals(index_1.isSetIterator(set.entries()), true);
    t.strictEquals(index_1.isSetIterator(set[Symbol.iterator]()), true);
    t.end();
});
tape_1.default("should yield false for invalid Set Iterator types", (t) => {
    t.strictEquals(index_1.isSetIterator(new Set()), false);
    t.strictEquals(index_1.isSetIterator([]), false);
    t.strictEquals(index_1.isSetIterator(new Map()), false);
    t.strictEquals(index_1.isSetIterator(new Error()), false);
    t.end();
});
// isSharedArrayBuffer
tape_1.default("should yield true for valid SharedArrayBuffer types", (t) => {
    t.strictEquals(index_1.isSharedArrayBuffer(new SharedArrayBuffer(0)), true);
    t.end();
});
tape_1.default("should yield false for invalid SharedArrayBuffer types", (t) => {
    t.strictEquals(index_1.isSharedArrayBuffer(new ArrayBuffer(0)), false);
    t.end();
});
// isStringObject
tape_1.default("should yield true for valid String Object types", (t) => {
    t.strictEquals(index_1.isStringObject(new String("")), true);
    t.strictEquals(index_1.isStringObject(new String("Foo")), true);
    t.end();
});
tape_1.default("should yield false for invalid String Object types", (t) => {
    t.strictEquals(index_1.isStringObject(""), false);
    t.strictEquals(index_1.isStringObject("Foo"), false);
    t.end();
});
// isSymbolObject
tape_1.default("should yield true for valid Symbol types", (t) => {
    t.strictEquals(index_1.isSymbolObject(Object(Symbol("foo"))), true);
    t.end();
});
tape_1.default("should yield false for invalid Symbol types", (t) => {
    t.strictEquals(index_1.isSymbolObject(Symbol("foo")), false);
    t.end();
});
// isTypedArray
tape_1.default("should yield true for valid TypedArray types", (t) => {
    t.strictEquals(index_1.isTypedArray(new Uint8Array(0)), true);
    t.strictEquals(index_1.isTypedArray(new Float64Array(0)), true);
    t.end();
});
tape_1.default("should yield false for invalid TypedArray types", (t) => {
    t.strictEquals(index_1.isTypedArray(new ArrayBuffer(0)), false);
    t.end();
});
// isUint8Array
tape_1.default("should yield true for valid Uint8Array types", (t) => {
    t.strictEquals(index_1.isUint8Array(new Uint8Array(0)), true);
    t.end();
});
tape_1.default("should yield false for invalid Uint8Array types", (t) => {
    t.strictEquals(index_1.isUint8Array(new ArrayBuffer(0)), false);
    t.strictEquals(index_1.isUint8Array(new Float64Array(0)), false);
    t.end();
});
// isUint8ClampedArray
tape_1.default("should yield true for valid Uint8ClampedArray types", (t) => {
    t.strictEquals(index_1.isUint8ClampedArray(new Uint8ClampedArray(0)), true);
    t.end();
});
tape_1.default("should yield false for invalid Uint8Array types", (t) => {
    t.strictEquals(index_1.isUint8ClampedArray(new ArrayBuffer(0)), false);
    t.strictEquals(index_1.isUint8ClampedArray(new Float64Array(0)), false);
    t.end();
});
// isUint16Array
tape_1.default("should yield true for valid isUint16Array types", (t) => {
    t.strictEquals(index_1.isUint16Array(new Uint16Array(0)), true);
    t.end();
});
tape_1.default("should yield false for invalid Uint16Array types", (t) => {
    t.strictEquals(index_1.isUint16Array(new ArrayBuffer(0)), false);
    t.strictEquals(index_1.isUint16Array(new Float64Array(0)), false);
    t.end();
});
// isUint32Array
tape_1.default("should yield true for valid Uint32Array types", (t) => {
    t.strictEquals(index_1.isUint32Array(new Uint32Array(0)), true);
    t.end();
});
tape_1.default("should yield false for invalid isUint16Array types", (t) => {
    t.strictEquals(index_1.isUint32Array(new ArrayBuffer(0)), false);
    t.strictEquals(index_1.isUint32Array(new Float64Array(0)), false);
    t.end();
});
// isWeakMap
tape_1.default("should yield true for valid WeakMap types", (t) => {
    t.strictEquals(index_1.isWeakMap(new WeakMap()), true);
    t.end();
});
tape_1.default("should yield false for invalid WeakMap types", (t) => {
    t.strictEquals(index_1.isWeakMap(new Set()), false);
    t.strictEquals(index_1.isWeakMap(new Map()), false);
    t.end();
});
// isWeakSet
tape_1.default("should yield true for valid WeakSet types", (t) => {
    t.strictEquals(index_1.isWeakSet(new WeakSet()), true);
    t.end();
});
tape_1.default("should yield false for invalid WeakSet types", (t) => {
    t.strictEquals(index_1.isWeakSet(new Set()), false);
    t.strictEquals(index_1.isWeakSet(new Map()), false);
    t.end();
});
