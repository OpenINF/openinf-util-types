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
  console.log('The value of `maybeObject` is actually an Object.');
} else {
  console.log('The value of `maybeObject` not an Object.');
}
```

<br />

---

<br />

## Functions

<dl>
<dt><a href="#toString">toString(value)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the ECMA [[Class]] of a value.</p>
</dd>
<dt><a href="#isArray">isArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually an Array.</p>
</dd>
<dt><a href="#toArray">toArray(arrayLike)</a> ⇒ <code>Array.&lt;T&gt;</code></dt>
<dd><p>Converts an array-like object to an array.</p>
</dd>
<dt><a href="#isObject">isObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually an Object.</p>
</dd>
<dt><a href="#isFiniteNumber">isFiniteNumber(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is of number type and finite.
NaN and Infinity are not considered a finite number.
String numbers are not considered numbers.</p>
</dd>
<dt><a href="#_isObjectLike">_isObjectLike(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually object-like.</p>
</dd>
<dt><a href="#_isFunctionLike">_isFunctionLike(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually function-like.</p>
</dd>
<dt><a href="#isAnyArrayBuffer">isAnyArrayBuffer(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually an ArrayBuffer or SharedArrayBuffer.</p>
</dd>
<dt><a href="#isArrayBufferView">isArrayBufferView(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually an ArrayBufferView.</p>
</dd>
<dt><a href="#isArgumentsObject">isArgumentsObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually an Arguments object.</p>
</dd>
<dt><a href="#isArrayBuffer">isArrayBuffer(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually an ArrayBuffer.</p>
</dd>
<dt><a href="#isAsyncFunction">isAsyncFunction(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually an AsyncFunction.</p>
</dd>
<dt><a href="#isBigInt64Array">isBigInt64Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a BigInt64Array.</p>
</dd>
<dt><a href="#isBigUint64Array">isBigUint64Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a BigUint64Array.</p>
</dd>
<dt><a href="#isBooleanObject">isBooleanObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Boolean object.</p>
</dd>
<dt><a href="#isBoxedPrimitive">isBoxedPrimitive(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually one of the boxed primitives:</p>
<ul>
<li>Boolean</li>
<li>String</li>
<li>Number</li>
<li>Symbol</li>
<li>BigInt</li>
</ul>
</dd>
<dt><a href="#isDataView">isDataView(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a DataView.</p>
</dd>
<dt><a href="#isDate">isDate(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Date.</p>
</dd>
<dt><a href="#isFloat32Array">isFloat32Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Float32Array.</p>
</dd>
<dt><a href="#isFloat64Array">isFloat64Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Float64Array.</p>
</dd>
<dt><a href="#isGeneratorFunction">isGeneratorFunction(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a GeneratorFunction.</p>
</dd>
<dt><a href="#isGeneratorObject">isGeneratorObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Generator object.</p>
</dd>
<dt><a href="#isInt8Array">isInt8Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Int8Array.</p>
</dd>
<dt><a href="#isInt16Array">isInt16Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Int16Array.</p>
</dd>
<dt><a href="#isInt32Array">isInt32Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a isInt32Array.</p>
</dd>
<dt><a href="#isMap">isMap(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Map.</p>
</dd>
<dt><a href="#isMapIterator">isMapIterator(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Map Iterator.</p>
</dd>
<dt><a href="#isModuleNamespaceObject">isModuleNamespaceObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Module namespace object.</p>
</dd>
<dt><a href="#isNativeError">isNativeError(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a native Error.</p>
</dd>
<dt><a href="#isNumberObject">isNumberObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Number object.</p>
</dd>
<dt><a href="#isBigIntObject">isBigIntObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a BigInt object.</p>
</dd>
<dt><a href="#isPromise">isPromise(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Promise.</p>
</dd>
<dt><a href="#isRegExp">isRegExp(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a RegExp.</p>
</dd>
<dt><a href="#isSet">isSet(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Set.</p>
</dd>
<dt><a href="#isSetIterator">isSetIterator(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Set Iterator.</p>
</dd>
<dt><a href="#isSharedArrayBuffer">isSharedArrayBuffer(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a SharedArrayBuffer.</p>
</dd>
<dt><a href="#isStringObject">isStringObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a String object.</p>
</dd>
<dt><a href="#isSymbolObject">isSymbolObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Symbol object.</p>
</dd>
<dt><a href="#isTypedArray">isTypedArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is one of the typed arrays.</p>
</dd>
<dt><a href="#isUint8Array">isUint8Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Uint8Array.</p>
</dd>
<dt><a href="#isUint8ClampedArray">isUint8ClampedArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Uint8ClampedArray.</p>
</dd>
<dt><a href="#isUint16Array">isUint16Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Uint16Array.</p>
</dd>
<dt><a href="#isUint32Array">isUint32Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a Uint32Array.</p>
</dd>
<dt><a href="#isWeakMap">isWeakMap(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a WeakMap.</p>
</dd>
<dt><a href="#isWeakSet">isWeakSet(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is actually a WeakSet.</p>
</dd>
</dl>

<a name="toString"></a>

## toString(value) ⇒ <code>string</code>
Returns the ECMA [[Class]] of a value.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isArray"></a>

## isArray(value) ⇒ <code>boolean</code>
Determines if value is actually an Array.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="toArray"></a>

## toArray(arrayLike) ⇒ <code>Array.&lt;T&gt;</code>
Converts an array-like object to an array.

**Kind**: global function

| Param | Type |
| --- | --- |
| arrayLike | <code>ArrayLike.&lt;T&gt;</code> \| <code>string</code> |

<a name="isObject"></a>

## isObject(value) ⇒ <code>boolean</code>
Determines if value is actually an Object.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isFiniteNumber"></a>

## isFiniteNumber(value) ⇒ <code>boolean</code>
Determines if value is of number type and finite.
NaN and Infinity are not considered a finite number.
String numbers are not considered numbers.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="_isObjectLike"></a>

## \_isObjectLike(value) ⇒ <code>boolean</code>
Determines if value is actually object-like.

**Kind**: global function
**Internal**:

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="_isFunctionLike"></a>

## \_isFunctionLike(value) ⇒ <code>boolean</code>
Determines if value is actually function-like.

**Kind**: global function
**Internal**:

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isAnyArrayBuffer"></a>

## isAnyArrayBuffer(value) ⇒ <code>boolean</code>
Determines if value is actually an ArrayBuffer or SharedArrayBuffer.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isArrayBufferView"></a>

## isArrayBufferView(value) ⇒ <code>boolean</code>
Determines if value is actually an ArrayBufferView.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isArgumentsObject"></a>

## isArgumentsObject(value) ⇒ <code>boolean</code>
Determines if value is actually an Arguments object.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isArrayBuffer"></a>

## isArrayBuffer(value) ⇒ <code>boolean</code>
Determines if value is actually an ArrayBuffer.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isAsyncFunction"></a>

## isAsyncFunction(value) ⇒ <code>boolean</code>
Determines if value is actually an AsyncFunction.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isBigInt64Array"></a>

## isBigInt64Array(value) ⇒ <code>boolean</code>
Determines if value is actually a BigInt64Array.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isBigUint64Array"></a>

## isBigUint64Array(value) ⇒ <code>boolean</code>
Determines if value is actually a BigUint64Array.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isBooleanObject"></a>

## isBooleanObject(value) ⇒ <code>boolean</code>
Determines if value is actually a Boolean object.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isBoxedPrimitive"></a>

## isBoxedPrimitive(value) ⇒ <code>boolean</code>
Determines if value is actually one of the boxed primitives:
- Boolean
- String
- Number
- Symbol
- BigInt

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isDataView"></a>

## isDataView(value) ⇒ <code>boolean</code>
Determines if value is actually a DataView.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isDate"></a>

## isDate(value) ⇒ <code>boolean</code>
Determines if value is actually a Date.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isFloat32Array"></a>

## isFloat32Array(value) ⇒ <code>boolean</code>
Determines if value is actually a Float32Array.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isFloat64Array"></a>

## isFloat64Array(value) ⇒ <code>boolean</code>
Determines if value is actually a Float64Array.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isGeneratorFunction"></a>

## isGeneratorFunction(value) ⇒ <code>boolean</code>
Determines if value is actually a GeneratorFunction.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isGeneratorObject"></a>

## isGeneratorObject(value) ⇒ <code>boolean</code>
Determines if value is actually a Generator object.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isInt8Array"></a>

## isInt8Array(value) ⇒ <code>boolean</code>
Determines if value is actually a Int8Array.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isInt16Array"></a>

## isInt16Array(value) ⇒ <code>boolean</code>
Determines if value is actually a Int16Array.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isInt32Array"></a>

## isInt32Array(value) ⇒ <code>boolean</code>
Determines if value is actually a isInt32Array.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isMap"></a>

## isMap(value) ⇒ <code>boolean</code>
Determines if value is actually a Map.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isMapIterator"></a>

## isMapIterator(value) ⇒ <code>boolean</code>
Determines if value is actually a Map Iterator.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isModuleNamespaceObject"></a>

## isModuleNamespaceObject(value) ⇒ <code>boolean</code>
Determines if value is actually a Module namespace object.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isNativeError"></a>

## isNativeError(value) ⇒ <code>boolean</code>
Determines if value is actually a native Error.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isNumberObject"></a>

## isNumberObject(value) ⇒ <code>boolean</code>
Determines if value is actually a Number object.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isBigIntObject"></a>

## isBigIntObject(value) ⇒ <code>boolean</code>
Determines if value is actually a BigInt object.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isPromise"></a>

## isPromise(value) ⇒ <code>boolean</code>
Determines if value is actually a Promise.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isRegExp"></a>

## isRegExp(value) ⇒ <code>boolean</code>
Determines if value is actually a RegExp.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isSet"></a>

## isSet(value) ⇒ <code>boolean</code>
Determines if value is actually a Set.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isSetIterator"></a>

## isSetIterator(value) ⇒ <code>boolean</code>
Determines if value is actually a Set Iterator.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isSharedArrayBuffer"></a>

## isSharedArrayBuffer(value) ⇒ <code>boolean</code>
Determines if value is actually a SharedArrayBuffer.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isStringObject"></a>

## isStringObject(value) ⇒ <code>boolean</code>
Determines if value is actually a String object.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isSymbolObject"></a>

## isSymbolObject(value) ⇒ <code>boolean</code>
Determines if value is actually a Symbol object.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isTypedArray"></a>

## isTypedArray(value) ⇒ <code>boolean</code>
Determines if value is one of the typed arrays.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isTypedArray..reTypedTag"></a>

### isTypedArray~reTypedTag
Used to match `toStringTag` values of typed arrays.

**Kind**: inner constant of [<code>isTypedArray</code>](#isTypedArray)
<a name="isUint8Array"></a>

## isUint8Array(value) ⇒ <code>boolean</code>
Determines if value is actually a Uint8Array.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isUint8ClampedArray"></a>

## isUint8ClampedArray(value) ⇒ <code>boolean</code>
Determines if value is actually a Uint8ClampedArray.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isUint16Array"></a>

## isUint16Array(value) ⇒ <code>boolean</code>
Determines if value is actually a Uint16Array.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isUint32Array"></a>

## isUint32Array(value) ⇒ <code>boolean</code>
Determines if value is actually a Uint32Array.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isWeakMap"></a>

## isWeakMap(value) ⇒ <code>boolean</code>
Determines if value is actually a WeakMap.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |

<a name="isWeakSet"></a>

## isWeakSet(value) ⇒ <code>boolean</code>
Determines if value is actually a WeakSet.

**Kind**: global function

| Param | Type |
| --- | --- |
| value | <code>unknown</code> |


<br />

---

<br />

<p align="center">&copy; The OpenINF Authors</center></p>
<p align="center"><img height="32px" width="32px" src="https://raw.githubusercontent.com/openinf/openinf.github.io/live/logo.svg" /></p>
