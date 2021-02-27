<h1 align="center">@openinf/util-types</h1>

<p align="center">Fundamental JavaScript type-related utilities</p>

<br />

<p align="center">
  <a href="https://www.npmjs.com/package/@openinf/util-types"><img src="https://img.shields.io/npm/v/@openinf/util-types?style=plastic" alt="view on npm" /></a>
  <img src="https://img.shields.io/github/languages/top/openinf/util-types?color=blue&style=plastic" />
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/github/license/openinf/util-types?color=blue&style=plastic" alt="License: MIT" /></a>
</p>

<br />

_The high-level goal of `@openinf/util-types` is to serve as a Node.js
package containing utilities for **fundamental JavaScript type-related
operations** primarily enabling users to perform native typechecking and
simplify type coercion. As is the case with any software project in continuous
development, omissions and errors may exist, for which contributions are
welcome._

<br />

---

<br />

## Installation

`@openinf/util-types` runs on Node.js and is available via `npm`.

```shell
npm install @openinf/util-types
```

## Usage

Import the helper functions based on your platform.

```ts
import { isObject } from '@openinf/util-types';

const maybeObject = null;

if (isObject(maybeObject)) {
  console.log('The value of `maybeObject` is of type Object.');
} else {
  console.log('The value of `maybeObject` is not of type Object.');
}
```

<br />

---

<br />

## Functions

<dl>
<dt><a href="#toString">toString(value)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the ECMAScript [[Class]] internal property of the passed value.</p>
</dd>
<dt><a href="#isArray">isArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Array</code>.</p>
</dd>
<dt><a href="#toArray">toArray(arrayLike)</a> ⇒ <code>Array.&lt;T&gt;</code></dt>
<dd><p>Converts an array-like object to an array.</p>
</dd>
<dt><a href="#isObject">isObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Object</code>.</p>
</dd>
<dt><a href="#isFiniteNumber">isFiniteNumber(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of number type and finite. <code>NaN</code> and
<code>Infinity</code> are not considered a finite number. String numbers are not
considered numbers.</p>
</dd>
<dt><a href="#isAnyArrayBuffer">isAnyArrayBuffer(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is one of either <code>ArrayBuffer</code> or
<code>SharedArrayBuffer</code>.</p>
</dd>
<dt><a href="#isArrayBufferView">isArrayBufferView(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is an <a href="https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView"><code>ArrayBufferView</code></a>.</p>
</dd>
<dt><a href="#isArgumentsObject">isArgumentsObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Arguments</code> object.</p>
</dd>
<dt><a href="#isArrayBuffer">isArrayBuffer(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>ArrayBuffer</code>.</p>
</dd>
<dt><a href="#isAsyncFunction">isAsyncFunction(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>AsyncFunction</code>.</p>
</dd>
<dt><a href="#isBigInt64Array">isBigInt64Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>BigInt64Array</code>.</p>
</dd>
<dt><a href="#isBigUint64Array">isBigUint64Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>BigUint64Array</code>.</p>
</dd>
<dt><a href="#isBooleanObject">isBooleanObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is a <code>Boolean</code> object.</p>
</dd>
<dt><a href="#isBoxedPrimitive">isBoxedPrimitive(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is one of the boxed primitives:</p>
<ul>
<li><code>Boolean</code></li>
<li><code>String</code></li>
<li><code>Number</code></li>
<li><code>Symbol</code></li>
<li><code>BigInt</code></li>
</ul>
</dd>
<dt><a href="#isDataView">isDataView(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>DataView</code>.</p>
</dd>
<dt><a href="#isDate">isDate(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Date</code>.</p>
</dd>
<dt><a href="#isFloat32Array">isFloat32Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Float32Array</code>.</p>
</dd>
<dt><a href="#isFloat64Array">isFloat64Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Float64Array</code>.</p>
</dd>
<dt><a href="#isOrdinaryFunction">isOrdinaryFunction(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Function</code>.</p>
</dd>
<dt><a href="#isGeneratorFunction">isGeneratorFunction(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>GeneratorFunction</code>.</p>
</dd>
<dt><a href="#isGeneratorObject">isGeneratorObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Generator</code> object.</p>
</dd>
<dt><a href="#isInt8Array">isInt8Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Int8Array</code>.</p>
</dd>
<dt><a href="#isInt16Array">isInt16Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Int16Array</code>.</p>
</dd>
<dt><a href="#isInt32Array">isInt32Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Int32Array</code>.</p>
</dd>
<dt><a href="#isMap">isMap(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Map</code>.</p>
</dd>
<dt><a href="#isMapIterator">isMapIterator(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Map Iterator</code>.</p>
</dd>
<dt><a href="#isModuleNamespaceObject">isModuleNamespaceObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is a <code>Module</code> namespace object.</p>
</dd>
<dt><a href="#isNativeError">isNativeError(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is a one of the native error types:</p>
<ul>
<li><code>EvalError</code></li>
<li><code>RangeError</code></li>
<li><code>ReferenceError</code></li>
<li><code>SyntaxError</code></li>
<li><code>TypeError</code></li>
<li><code>URIError</code></li>
<li><code>AggregateError</code></li>
<li><code>InternalError</code></li>
</ul>
</dd>
<dt><a href="#isNumberObject">isNumberObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a <code>Number</code> object.</p>
</dd>
<dt><a href="#isBigIntObject">isBigIntObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a <code>BigInt</code> object.</p>
</dd>
<dt><a href="#isPromise">isPromise(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Promise</code>.</p>
</dd>
<dt><a href="#isRegExp">isRegExp(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>RegExp</code>.</p>
</dd>
<dt><a href="#isSet">isSet(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Set</code>.</p>
</dd>
<dt><a href="#isSetIterator">isSetIterator(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Set Iterator</code>.</p>
</dd>
<dt><a href="#isSharedArrayBuffer">isSharedArrayBuffer(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>SharedArrayBuffer</code>.</p>
</dd>
<dt><a href="#isStringObject">isStringObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a <code>String</code> object.</p>
</dd>
<dt><a href="#isSymbolObject">isSymbolObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a <code>Symbol</code> object.</p>
</dd>
<dt><a href="#isTypedArray">isTypedArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is one of the typed arrays:</p>
<ul>
<li><code>Float32Array</code></li>
<li><code>Float64Array</code></li>
<li><code>Int8Array</code></li>
<li><code>Uint8Array</code></li>
<li><code>Uint8ClampedArray</code></li>
<li><code>Int16Array</code></li>
<li><code>Uint16Array</code></li>
<li><code>Int32Array</code></li>
<li><code>Uint32Array</code></li>
</ul>
</dd>
<dt><a href="#isUint8Array">isUint8Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Uint8Array</code>.</p>
</dd>
<dt><a href="#isUint8ClampedArray">isUint8ClampedArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Uint8ClampedArray</code>.</p>
</dd>
<dt><a href="#isUint16Array">isUint16Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Uint16Array</code>.</p>
</dd>
<dt><a href="#isUint32Array">isUint32Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Uint32Array</code>.</p>
</dd>
<dt><a href="#isWeakMap">isWeakMap(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>WeakMap</code>.</p>
</dd>
<dt><a href="#isWeakSet">isWeakSet(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>WeakSet</code>.</p>
</dd>
</dl>

<a name="toString"></a>

## toString(value) ⇒ <code>string</code>
Returns the ECMAScript [[Class]] internal property of the passed value.

**Kind**: global function  
**Returns**: <code>string</code> - A specification-defined classification of objects.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isArray"></a>

## isArray(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Array`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an Array; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="toArray"></a>

## toArray(arrayLike) ⇒ <code>Array.&lt;T&gt;</code>
Converts an array-like object to an array.

**Kind**: global function  

| Param | Type |
| --- | --- |
| arrayLike | <code>ArrayLike.&lt;T&gt;</code> \| <code>string</code> | 

<a name="isObject"></a>

## isObject(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Object`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an `Object`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isFiniteNumber"></a>

## isFiniteNumber(value) ⇒ <code>boolean</code>
Determines whether the passed value is of number type and finite. `NaN` and
`Infinity` are not considered a finite number. String numbers are not
considered numbers.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a finite number; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isAnyArrayBuffer"></a>

## isAnyArrayBuffer(value) ⇒ <code>boolean</code>
Determines whether the passed value is one of either `ArrayBuffer` or
`SharedArrayBuffer`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an any array buffer; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isArrayBufferView"></a>

## isArrayBufferView(value) ⇒ <code>boolean</code>
Determines whether the passed value is an [`ArrayBufferView`](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an `ArrayBufferView`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isArgumentsObject"></a>

## isArgumentsObject(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Arguments` object.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an `Arguments` object; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isArrayBuffer"></a>

## isArrayBuffer(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `ArrayBuffer`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an `ArrayBuffer`; otherwise,
 false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isAsyncFunction"></a>

## isAsyncFunction(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `AsyncFunction`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an `AsyncFunction`; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isBigInt64Array"></a>

## isBigInt64Array(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `BigInt64Array`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `BigInt64Array`; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isBigUint64Array"></a>

## isBigUint64Array(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `BigUint64Array`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `BigUint64Array`; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isBooleanObject"></a>

## isBooleanObject(value) ⇒ <code>boolean</code>
Determines whether the passed value is a `Boolean` object.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Boolean`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isBoxedPrimitive"></a>

## isBoxedPrimitive(value) ⇒ <code>boolean</code>
Determines whether the passed value is one of the boxed primitives:
- `Boolean`
- `String`
- `Number`
- `Symbol`
- `BigInt`

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is one of the boxed primitives;
    otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isDataView"></a>

## isDataView(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `DataView`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `DataView`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isDate"></a>

## isDate(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Date`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Date`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isFloat32Array"></a>

## isFloat32Array(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Float32Array`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Float32Array`; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isFloat64Array"></a>

## isFloat64Array(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Float64Array`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Float64Array`; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isOrdinaryFunction"></a>

## isOrdinaryFunction(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Function`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Function`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isGeneratorFunction"></a>

## isGeneratorFunction(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `GeneratorFunction`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `GeneratorFunction`; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isGeneratorObject"></a>

## isGeneratorObject(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Generator` object.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Generator`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isInt8Array"></a>

## isInt8Array(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Int8Array`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an `Int8Array`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isInt16Array"></a>

## isInt16Array(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Int16Array`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an `Int16Array`; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isInt32Array"></a>

## isInt32Array(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Int32Array`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an `Int32Array`; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isMap"></a>

## isMap(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Map`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Map`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isMapIterator"></a>

## isMapIterator(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Map Iterator`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Map Iterator`; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isModuleNamespaceObject"></a>

## isModuleNamespaceObject(value) ⇒ <code>boolean</code>
Determines whether the passed value is a `Module` namespace object.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Module`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isNativeError"></a>

## isNativeError(value) ⇒ <code>boolean</code>
Determines whether the passed value is a one of the native error types:
- `EvalError`
- `RangeError`
- `ReferenceError`
- `SyntaxError`
- `TypeError`
- `URIError`
- `AggregateError`
- `InternalError`

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a native error; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isNumberObject"></a>

## isNumberObject(value) ⇒ <code>boolean</code>
Determines if value is actually a `Number` object.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Number`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isBigIntObject"></a>

## isBigIntObject(value) ⇒ <code>boolean</code>
Determines if value is actually a `BigInt` object.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `BigInt`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isPromise"></a>

## isPromise(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Promise`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Promise`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isRegExp"></a>

## isRegExp(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `RegExp`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `RegExp`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isSet"></a>

## isSet(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Set`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Set`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isSetIterator"></a>

## isSetIterator(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Set Iterator`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Set Iterator`; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isSharedArrayBuffer"></a>

## isSharedArrayBuffer(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `SharedArrayBuffer`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `SharedArrayBuffer`; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isStringObject"></a>

## isStringObject(value) ⇒ <code>boolean</code>
Determines if value is actually a `String` object.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `String`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isSymbolObject"></a>

## isSymbolObject(value) ⇒ <code>boolean</code>
Determines if value is actually a `Symbol` object.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Symbol`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isTypedArray"></a>

## isTypedArray(value) ⇒ <code>boolean</code>
Determines if value is one of the typed arrays:
- `Float32Array`
- `Float64Array`
- `Int8Array`
- `Uint8Array`
- `Uint8ClampedArray`
- `Int16Array`
- `Uint16Array`
- `Int32Array`
- `Uint32Array`

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is one of the typed arrays; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isUint8Array"></a>

## isUint8Array(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Uint8Array`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Uint8Array`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isUint8ClampedArray"></a>

## isUint8ClampedArray(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Uint8ClampedArray`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Uint8ClampedArray`; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isUint16Array"></a>

## isUint16Array(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Uint16Array`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Uint16Array`; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isUint32Array"></a>

## isUint32Array(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `Uint32Array`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Uint32Array`; otherwise,
    `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isWeakMap"></a>

## isWeakMap(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `WeakMap`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `WeakMap`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |

<a name="isWeakSet"></a>

## isWeakSet(value) ⇒ <code>boolean</code>
Determines whether the passed value is of type `WeakSet`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `WeakSet`; otherwise, `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to be checked. |


<br />

---

<br />

<p align="center">&copy; The OpenINF Authors</center></p>
<p align="center"><img height="32px" width="32px" src="https://raw.githubusercontent.com/openinf/openinf.github.io/live/logo.svg" /></p>
