/**
 * Returns the ECMAScript [[Class]] internal property of the passed value.
 * @param {unknown} value The value to be checked.
 * @returns {string} A specification-defined classification of objects.
 */
export declare function toString(value: unknown): string;
/**
 * Determines whether value is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object". Every JavaScript function is
 * actually a [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
 * object, so those are included as well.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is object-like; otherwise, `false`.
 * @private
 */
export declare function _isObjectLike(value: unknown): boolean;
/** ----------------------------------------------------------------------------
 * ## Standard objects by category
 * -------------------------------------------------------------------------- */
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
export declare function isUndefined(value: unknown): boolean;
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
export declare function isObject(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Function`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Function`; otherwise, `false`.
 */
export declare function isOrdinaryFunction(value: unknown): boolean;
/**
 * Determines whether the passed value is actually a [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
 * object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Boolean` object; otherwise,
 *     `false`.
 */
export declare function isBooleanObject(value: unknown): boolean;
/**
 * Determines whether the passed value is actually a [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
 * object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Symbol` object; otherwise,
 *     `false`.
 */
export declare function isSymbolObject(value: unknown): boolean;
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
export declare function isNativeError(value: unknown): boolean;
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
export declare function isNumberObject(value: unknown): boolean;
/**
 * Determines whether the passed value is actually a [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
 * object (boxed primitive).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `BigInt` object; otherwise,
 *     `false`.
 */
export declare function isBigIntObject(value: unknown): boolean;
/**
 * Determines whether the passed value is of number type and finite. `NaN` and
 * `Infinity` are not considered a finite number. String numbers are not
 * considered numbers.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a finite number; otherwise,
 *     `false`.
 */
export declare function isFiniteNumber(value: unknown): boolean;
/**
 * Determines whether the passed value is actually the [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
 * global object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is the `Math` object; otherwise, `false`.
 */
export declare function isMath(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Date`; otherwise, `false`.
 */
export declare function isDate(value: unknown): boolean;
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
export declare function isStringObject(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `RegExp`; otherwise, `false`.
 */
export declare function isRegExp(value: unknown): boolean;
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
export declare function isArray(value: unknown): boolean;
/**
 * Converts an array-like object to an array.
 * @param {!(ArrayLike<T> | string)} arrayLike
 * @returns {!Array<T>}
 * @template T
 */
export declare function toArray<T>(arrayLike: ArrayLike<T> | T): Array<T>;
/**
 * Determines whether the passed value is of type [`Int8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Int8Array`; otherwise, `false`.
 */
export declare function isInt8Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint8Array`; otherwise, `false`.
 */
export declare function isUint8Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`Uint8ClampedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint8ClampedArray`; otherwise,
 *     `false`.
 */
export declare function isUint8ClampedArray(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`Int16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Int16Array`; otherwise,
 *     `false`.
 */
export declare function isInt16Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`Uint16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint16Array`; otherwise,
 *     `false`.
 */
export declare function isUint16Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`Int32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Int32Array`; otherwise,
 *     `false`.
 */
export declare function isInt32Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`Uint32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint32Array`; otherwise,
 *     `false`.
 */
export declare function isUint32Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`Float32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Float32Array`; otherwise,
 *     `false`.
 */
export declare function isFloat32Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`Float64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Float64Array`; otherwise,
 *     `false`.
 */
export declare function isFloat64Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`BigInt64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `BigInt64Array`; otherwise,
 *     `false`.
 */
export declare function isBigInt64Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`BigUint64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigUInt64Array).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `BigUint64Array`; otherwise,
 *     `false`.
 */
export declare function isBigUint64Array(value: unknown): boolean;
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
export declare function isArrayBufferView(value: unknown): boolean;
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
export declare function isTypedArray(value: unknown): boolean;
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
export declare function isMap(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`Map Iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Map Iterator`; otherwise,
 *     `false`.
 */
export declare function isMapIterator(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Set`; otherwise, `false`.
 */
export declare function isSet(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`Set Iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Set Iterator`; otherwise,
 *     `false`.
 */
export declare function isSetIterator(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `WeakMap`; otherwise, `false`.
 */
export declare function isWeakMap(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `WeakSet`; otherwise, `false`.
 */
export declare function isWeakSet(value: unknown): boolean;
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
export declare function isArrayBuffer(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `SharedArrayBuffer`; otherwise,
 *     `false`.
 */
export declare function isSharedArrayBuffer(value: unknown): boolean;
/**
 * Determines whether the passed value is one of either [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
 * or [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is one of the array buffers;
 *     otherwise, `false`.
 */
export declare function isAnyArrayBuffer(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `DataView`; otherwise, `false`.
 */
export declare function isDataView(value: unknown): boolean;
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
export declare function isPromise(value: unknown): boolean;
/**
 * Determines whether the passed value is actually a [`Generator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
 * object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Generator`; otherwise, `false`.
 */
export declare function isGeneratorObject(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`GeneratorFunction`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `GeneratorFunction`; otherwise,
 *     `false`.
 */
export declare function isGeneratorFunction(value: unknown): boolean;
/**
 * Determines whether the passed value is of type [`AsyncFunction`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `AsyncFunction`; otherwise,
 *     `false`.
 */
export declare function isAsyncFunction(value: unknown): boolean;
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
export declare function isArgumentsObject(value: unknown): boolean;
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
export declare function isBoxedPrimitive(value: unknown): boolean;
/**
 * Determines whether the passed value is a `Module` namespace object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Module`; otherwise, `false`.
 */
export declare function isModuleNamespaceObject(value: unknown): boolean;
/**
 * Determines whether the passed value is of a [**primitive**](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
 * data type.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a primitive; otherwise, `false`.
 */
export declare function isPrimitive(value: unknown): boolean;
