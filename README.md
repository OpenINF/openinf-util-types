<div align="center">

# @openinf/util-types

Fundamental JavaScript type-related utilities

<br />

[!['View on npm'][npm-badge--shields]][npm-badge-url]
!['TypeScript types: included'][types-included-badge]
[!['DeepScan grade'][deepscan-badge]][deepscan-url]
[!['License: MIT'][license-badge--shields]][license-badge-url]
[!['FOSSA Status'][fossa-badge]][fossa-url]

</div>

<br />

_The high-level goal of `@openinf/util-types` is to serve as a Node.js
package containing utilities for **fundamental JavaScript type-related
operations** primarily enabling users to perform native typechecking and
simplify type coercion. As is the case with any software project in continuous
development, omissions and errors may exist, for which contributions are
welcome._

<br />

<div align="center">

[![Code Style: Prettier][prettier-badge]][prettier-url]
[![Commit Style: Conventional Commits][conventional-commits-badge]][conventional-commits-url]
[![Active Issues: DeepSource][deepsource-badge]][deepsource-url]
[![Chat on Matrix][matrix-badge--shields]][matrix-url]

</div>

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
<dt><a href="#isUndefined">isUndefined(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is actually of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a>.</p>
</dd>
<dt><a href="#isObject">isObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Object</code>.</p>
</dd>
<dt><a href="#isOrdinaryFunction">isOrdinaryFunction(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <code>Function</code>.</p>
</dd>
<dt><a href="#isBooleanObject">isBooleanObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is actually a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean"><code>Boolean</code></a>
object.</p>
</dd>
<dt><a href="#isSymbolObject">isSymbolObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is actually a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol"><code>Symbol</code></a>
object.</p>
</dd>
<dt><a href="#isNativeError">isNativeError(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is one of the native error types:</p>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError"><code>EvalError</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError"><code>RangeError</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError"><code>ReferenceError</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"><code>SyntaxError</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError"><code>URIError</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError"><code>AggregateError </code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError"><code>InternalError</code></a></li>
</ul>
</dd>
<dt><a href="#isNumberObject">isNumberObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is actually a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a>
object (boxed primitive).</p>
</dd>
<dt><a href="#isBigIntObject">isBigIntObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is actually a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt"><code>BigInt</code></a>
object (boxed primitive).</p>
</dd>
<dt><a href="#isFiniteNumber">isFiniteNumber(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of number type and finite. <code>NaN</code> and
<code>Infinity</code> are not considered a finite number. String numbers are not
considered numbers.</p>
</dd>
<dt><a href="#isMath">isMath(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is actually the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math"><code>Math</code></a>
global object.</p>
</dd>
<dt><a href="#isDate">isDate(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"><code>Date</code></a>.</p>
</dd>
<dt><a href="#isStringObject">isStringObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is actually a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"><code>String</code></a>
object.</p>
</dd>
<dt><a href="#isRegExp">isRegExp(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"><code>RegExp</code></a>.</p>
</dd>
<dt><a href="#isArray">isArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a>.</p>
</dd>
<dt><a href="#toArray">toArray(arrayLike)</a> ⇒ <code>Array.&lt;T&gt;</code></dt>
<dd><p>Converts an array-like object to an array.</p>
</dd>
<dt><a href="#isInt8Array">isInt8Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array"><code>Int8Array</code></a>.</p>
</dd>
<dt><a href="#isUint8Array">isUint8Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array"><code>Uint8Array</code></a>.</p>
</dd>
<dt><a href="#isUint8ClampedArray">isUint8ClampedArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray"><code>Uint8ClampedArray</code></a>.</p>
</dd>
<dt><a href="#isInt16Array">isInt16Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array"><code>Int16Array</code></a>.</p>
</dd>
<dt><a href="#isUint16Array">isUint16Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array"><code>Uint16Array</code></a>.</p>
</dd>
<dt><a href="#isInt32Array">isInt32Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array"><code>Int32Array</code></a>.</p>
</dd>
<dt><a href="#isUint32Array">isUint32Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array"><code>Uint32Array</code></a>.</p>
</dd>
<dt><a href="#isFloat32Array">isFloat32Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array"><code>Float32Array</code></a>.</p>
</dd>
<dt><a href="#isFloat64Array">isFloat64Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array"><code>Float64Array</code></a>.</p>
</dd>
<dt><a href="#isBigInt64Array">isBigInt64Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array"><code>BigInt64Array</code></a>.</p>
</dd>
<dt><a href="#isBigUint64Array">isBigUint64Array(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigUInt64Array"><code>BigUint64Array</code></a>.</p>
</dd>
<dt><a href="#isArrayBufferView">isArrayBufferView(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is an <a href="https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView"><code>ArrayBufferView</code></a>,
which is a helper type representing any of the following JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray"><strong>TypedArray</strong></a>
types:</p>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array"><code>Int8Array</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array"><code>Uint8Array</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray"><code>Uint8ClampedArray</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array"><code>Int16Array</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array"><code>Uint16Array</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array"><code>Int32Array</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array"><code>Uint32Array</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array"><code>Float32Array</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array"><code>Float64Array</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a></li>
</ul>
</dd>
<dt><a href="#isTypedArray">isTypedArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if value is one of the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects"><strong>TypedArray</strong> element types</a>:</p>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array"><code>Int8Array</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array"><code>Uint8Array</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray"><code>Uint8ClampedArray</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array"><code>Int16Array</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array"><code>Uint16Array</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array"><code>Int32Array</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array"><code>Uint32Array</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array"><code>Float32Array</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array"><code>Float64Array</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array"><code>BigInt64Array</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array"><code>BigUint64Array</code></a></li>
</ul>
</dd>
<dt><a href="#isMap">isMap(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"><code>Map</code></a>.</p>
</dd>
<dt><a href="#isMapIterator">isMapIterator(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator"><code>Map Iterator</code></a>.</p>
</dd>
<dt><a href="#isSet">isSet(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set</code></a>.</p>
</dd>
<dt><a href="#isSetIterator">isSetIterator(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator"><code>Set Iterator</code></a>.</p>
</dd>
<dt><a href="#isWeakMap">isWeakMap(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap"><code>WeakMap</code></a>.</p>
</dd>
<dt><a href="#isWeakSet">isWeakSet(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet"><code>WeakSet</code></a>.</p>
</dd>
<dt><a href="#isArrayBuffer">isArrayBuffer(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a>.</p>
</dd>
<dt><a href="#isSharedArrayBuffer">isSharedArrayBuffer(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer"><code>SharedArrayBuffer</code></a>.</p>
</dd>
<dt><a href="#isAnyArrayBuffer">isAnyArrayBuffer(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is one of either <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a>
or <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer"><code>SharedArrayBuffer</code></a>.</p>
</dd>
<dt><a href="#isDataView">isDataView(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView"><code>DataView</code></a>.</p>
</dd>
<dt><a href="#isPromise">isPromise(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise</code></a>.</p>
</dd>
<dt><a href="#isGeneratorObject">isGeneratorObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is actually a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator"><code>Generator</code></a>
object.</p>
</dd>
<dt><a href="#isGeneratorFunction">isGeneratorFunction(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction"><code>GeneratorFunction</code></a>.</p>
</dd>
<dt><a href="#isAsyncFunction">isAsyncFunction(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of type <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction"><code>AsyncFunction</code></a>.</p>
</dd>
<dt><a href="#isArgumentsObject">isArgumentsObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is actually an
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments"><code>arguments</code></a>
object.</p>
</dd>
<dt><a href="#isBoxedPrimitive">isBoxedPrimitive(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is a primitive wrapped by its object
equivalent (a.k.a. &quot;boxed&quot;). Except for <code>null</code> and <code>undefined</code>, all primitive
values have object equivalents that wrap around the primitive values:</p>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean"><code>Boolean</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"><code>String</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol"><code>Symbol</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt"><code>BigInt</code></a></li>
</ul>
</dd>
<dt><a href="#isModuleNamespaceObject">isModuleNamespaceObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is a <code>Module</code> namespace object.</p>
</dd>
<dt><a href="#isPrimitive">isPrimitive(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the passed value is of a <a href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive"><strong>primitive</strong></a>
data type.</p>
</dd>
</dl>

<a name="toString"></a>

## toString(value) ⇒ <code>string</code>

Returns the ECMAScript [[Class]] internal property of the passed value.

**Kind**: global function  
**Returns**: <code>string</code> - A specification-defined classification of objects.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isUndefined"></a>

## isUndefined(value) ⇒ <code>boolean</code>

Determines whether the passed value is actually of type [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is `undefined`; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isObject"></a>

## isObject(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type `Object`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an `Object`; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isOrdinaryFunction"></a>

## isOrdinaryFunction(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type `Function`.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Function`; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isBooleanObject"></a>

## isBooleanObject(value) ⇒ <code>boolean</code>

Determines whether the passed value is actually a [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
object.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Boolean` object; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isSymbolObject"></a>

## isSymbolObject(value) ⇒ <code>boolean</code>

Determines whether the passed value is actually a [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
object.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Symbol` object; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isNativeError"></a>

## isNativeError(value) ⇒ <code>boolean</code>

Determines whether the passed value is one of the native error types:

- [`EvalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError)
- [`RangeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
- [`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
- [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
- [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
- [`URIError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError)
- [`AggregateError `](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)
- [`InternalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError)

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a native error; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isNumberObject"></a>

## isNumberObject(value) ⇒ <code>boolean</code>

Determines whether the passed value is actually a [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
object (boxed primitive).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Number` object; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isBigIntObject"></a>

## isBigIntObject(value) ⇒ <code>boolean</code>

Determines whether the passed value is actually a [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
object (boxed primitive).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `BigInt` object; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isFiniteNumber"></a>

## isFiniteNumber(value) ⇒ <code>boolean</code>

Determines whether the passed value is of number type and finite. `NaN` and
`Infinity` are not considered a finite number. String numbers are not
considered numbers.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a finite number; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isMath"></a>

## isMath(value) ⇒ <code>boolean</code>

Determines whether the passed value is actually the [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
global object.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is the `Math` object; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isDate"></a>

## isDate(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Date`; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isStringObject"></a>

## isStringObject(value) ⇒ <code>boolean</code>

Determines whether the passed value is actually a [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
object.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `String` object; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isRegExp"></a>

## isRegExp(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `RegExp`; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isArray"></a>

## isArray(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an `Array`; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="toArray"></a>

## toArray(arrayLike) ⇒ <code>Array.&lt;T&gt;</code>

Converts an array-like object to an array.

**Kind**: global function

| Param     | Type                                                    |
| --------- | ------------------------------------------------------- |
| arrayLike | <code>ArrayLike.&lt;T&gt;</code> \| <code>string</code> |

<a name="isInt8Array"></a>

## isInt8Array(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`Int8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an `Int8Array`; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isUint8Array"></a>

## isUint8Array(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Uint8Array`; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isUint8ClampedArray"></a>

## isUint8ClampedArray(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`Uint8ClampedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Uint8ClampedArray`; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isInt16Array"></a>

## isInt16Array(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`Int16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an `Int16Array`; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isUint16Array"></a>

## isUint16Array(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`Uint16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Uint16Array`; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isInt32Array"></a>

## isInt32Array(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`Int32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an `Int32Array`; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isUint32Array"></a>

## isUint32Array(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`Uint32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Uint32Array`; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isFloat32Array"></a>

## isFloat32Array(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`Float32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Float32Array`; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isFloat64Array"></a>

## isFloat64Array(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`Float64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Float64Array`; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isBigInt64Array"></a>

## isBigInt64Array(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`BigInt64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `BigInt64Array`; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isBigUint64Array"></a>

## isBigUint64Array(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`BigUint64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigUInt64Array).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `BigUint64Array`; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isArrayBufferView"></a>

## isArrayBufferView(value) ⇒ <code>boolean</code>

Determines whether the passed value is an [`ArrayBufferView`](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView),
which is a helper type representing any of the following JavaScript [**TypedArray**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
types:

- [`Int8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)
- [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
- [`Uint8ClampedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)
- [`Int16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)
- [`Uint16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)
- [`Int32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
- [`Uint32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)
- [`Float32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)
- [`Float64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)
- [`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an `ArrayBufferView`; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isTypedArray"></a>

## isTypedArray(value) ⇒ <code>boolean</code>

Determines if value is one of the [**TypedArray** element types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects):

- [`Int8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)
- [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
- [`Uint8ClampedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)
- [`Int16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)
- [`Uint16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)
- [`Int32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
- [`Uint32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)
- [`Float32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)
- [`Float64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)
- [`BigInt64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array)
- [`BigUint64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array)

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is one of the typed arrays; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isMap"></a>

## isMap(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Map`; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isMapIterator"></a>

## isMapIterator(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`Map Iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Map Iterator`; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isSet"></a>

## isSet(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Set`; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isSetIterator"></a>

## isSetIterator(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`Set Iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Set Iterator`; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isWeakMap"></a>

## isWeakMap(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `WeakMap`; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isWeakSet"></a>

## isWeakSet(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `WeakSet`; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isArrayBuffer"></a>

## isArrayBuffer(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an `ArrayBuffer`; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isSharedArrayBuffer"></a>

## isSharedArrayBuffer(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `SharedArrayBuffer`; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isAnyArrayBuffer"></a>

## isAnyArrayBuffer(value) ⇒ <code>boolean</code>

Determines whether the passed value is one of either [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
or [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is one of the array buffers;
otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isDataView"></a>

## isDataView(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `DataView`; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isPromise"></a>

## isPromise(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Promise`; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isGeneratorObject"></a>

## isGeneratorObject(value) ⇒ <code>boolean</code>

Determines whether the passed value is actually a [`Generator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
object.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Generator`; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isGeneratorFunction"></a>

## isGeneratorFunction(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`GeneratorFunction`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `GeneratorFunction`; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isAsyncFunction"></a>

## isAsyncFunction(value) ⇒ <code>boolean</code>

Determines whether the passed value is of type [`AsyncFunction`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an `AsyncFunction`; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isArgumentsObject"></a>

## isArgumentsObject(value) ⇒ <code>boolean</code>

Determines whether the passed value is actually an
[`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
object.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is an `arguments` object; otherwise,
`false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isBoxedPrimitive"></a>

## isBoxedPrimitive(value) ⇒ <code>boolean</code>

Determines whether the passed value is a primitive wrapped by its object
equivalent (a.k.a. "boxed"). Except for `null` and `undefined`, all primitive
values have object equivalents that wrap around the primitive values:

- [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is one of the boxed primitives;
otherwise, `false`.  
**See**: https://developer.mozilla.org/en-US/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isModuleNamespaceObject"></a>

## isModuleNamespaceObject(value) ⇒ <code>boolean</code>

Determines whether the passed value is a `Module` namespace object.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a `Module`; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<a name="isPrimitive"></a>

## isPrimitive(value) ⇒ <code>boolean</code>

Determines whether the passed value is of a [**primitive**](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
data type.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a primitive; otherwise, `false`.

| Param | Type                 | Description              |
| ----- | -------------------- | ------------------------ |
| value | <code>unknown</code> | The value to be checked. |

<br /><br />

---

<br />

<div align="center">

## Show Your Support

<!-- Give a ⭐️ if this project helped you! -->

If you like the project, [give it a star ⭐️], it will be a great encouragement to us.

<br /><br />

&copy; The OpenINF Authors

<br />

<a title="The OpenINF website" href="https://open.inf.is" rel="author">
  <img alt="The OpenINF logo" height="32px" width="32px" src="https://raw.githubusercontent.com/openinf/openinf.github.io/live/logo.svg?sanitize=true" />
</a>

</div>

<!-- prettier-ignore-start -->
<!-- PRESERVE LINK DEFINITION LABEL CASE - START -->

[give it a star ⭐️]: https://github.com/openinf/util-types/stargazers

[deepscan-badge]: https://badgen.net/deepscan/grade/team/18447/project/21804/branch/634015?icon=deepscan 'DeepScan grade'
[deepscan-url]: https://deepscan.io/dashboard#view=project&tid=18447&pid=21804&bid=634015 'DeepScan grade'
[deepsource-badge]: https://deepsource.io/gh/openinf/util-types.svg/?label=active+issues&show_trend=true&token=VOqe7OlG12sxcRKDxulf5-52
[deepsource-url]: https://deepsource.io/gh/openinf/util-types/?ref=repository-badge 'Active Issues: DeepSource'
[conventional-commits-badge]: https://img.shields.io/badge/commit%20style-Conventional-%23fa6673?logoColor=white&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggc3R5bGU9ImZpbGw6ICNGRkYiIGQ9Ik0xNSwyQTEzLDEzLDAsMSwxLDIsMTUsMTMsMTMsMCwwLDEsMTUsMm0wLTJBMTUsMTUsMCwxLDAsMzAsMTUsMTUsMTUsMCwwLDAsMTUsMFoiLz48L3N2Zz4K 'Commit Style: Conventional Commits'
[conventional-commits-url]: https://www.conventionalcommits.org 'Commit Style: Conventional Commits'
[fossa-badge]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Fopeninf%2Futil-types.svg?type=small 'FOSSA Status'
[fossa-url]: https://app.fossa.com/projects/git%2Bgithub.com%2Fopeninf%2Futil-types?ref=badge_small 'FOSSA Status'
[license-badge--shields]: https://img.shields.io/badge/license-MIT-blue.svg?logo=github 'License: MIT'
[license-badge-url]: https://spdx.org/licenses/MIT.html 'License: MIT'
[matrix-badge--shields]: https://img.shields.io/badge/matrix-join%20chat-%2346BC99?logo=matrix 'Chat on Matrix'
[matrix-url]: https://matrix.to/#/#openinf:matrix.org 'You&apos;re invited to talk on Matrix'
[npm-badge--shields]: https://img.shields.io/npm/v/@openinf/util-types/latest.svg?logo=npm 'View on npm'
[npm-badge-url]: https://www.npmjs.com/package/@openinf/util-types#top 'View on npm'
[prettier-badge]: https://img.shields.io/badge/code_style-Prettier-ff69b4.svg?logo=prettier 'Code Style: Prettier'
[prettier-url]: https://prettier.io/playground 'Code Style: Prettier'
[types-included-badge]: https://badgen.net/npm/types/@openinf/util-types?icon=typescript 'TypeScript types: included'

<!-- PRESERVE LINK DEFINITION LABEL CASE - END -->
<!-- prettier-ignore-end -->
