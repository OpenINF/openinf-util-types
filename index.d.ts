/**
 * Returns the ECMAScript [[Class]] internal property of the passed value.
 * @param {unknown} value The value to be checked.
 * @returns {string} A specification-defined classification of objects.
 */
export declare function toString(value: unknown): string;
/**
 * Determines whether the passed value is of type `Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an Array; otherwise, `false`.
 */
export declare function isArray(value: unknown): boolean;
/**
 * Converts an array-like object to an array.
 * @param {!(ArrayLike<T> | string)} arrayLike
 * @returns {!Array<T>}
 * @template T
 */
export declare function toArray<T>(arrayLike: (ArrayLike<T> | T)): Array<T>;
/**
 * Determines whether the passed value is of type `Object`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Object`; otherwise, `false`.
 */
export declare function isObject(value: unknown): boolean;
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
 * Determines whether the passed value is one of either `ArrayBuffer` or
 * `SharedArrayBuffer`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an any array buffer; otherwise,
 *     `false`.
 */
export declare function isAnyArrayBuffer(value: unknown): boolean;
/**
 * Determines whether the passed value is an [`ArrayBufferView`](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView).
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `ArrayBufferView`; otherwise, `false`.
 */
export declare function isArrayBufferView(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Arguments` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Arguments` object; otherwise,
 *     `false`.
 */
export declare function isArgumentsObject(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `ArrayBuffer`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `ArrayBuffer`; otherwise,
 *  false`.
 */
export declare function isArrayBuffer(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `AsyncFunction`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `AsyncFunction`; otherwise,
 *     `false`.
 */
export declare function isAsyncFunction(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `BigInt64Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `BigInt64Array`; otherwise,
 *     `false`.
 */
export declare function isBigInt64Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `BigUint64Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `BigUint64Array`; otherwise,
 *     `false`.
 */
export declare function isBigUint64Array(value: unknown): boolean;
/**
 * Determines whether the passed value is a `Boolean` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Boolean`; otherwise, `false`.
 */
export declare function isBooleanObject(value: unknown): boolean;
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
export declare function isBoxedPrimitive(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `DataView`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `DataView`; otherwise, `false`.
 */
export declare function isDataView(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Date`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Date`; otherwise, `false`.
 */
export declare function isDate(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Float32Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Float32Array`; otherwise,
 *     `false`.
 */
export declare function isFloat32Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Float64Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Float64Array`; otherwise,
 *     `false`.
 */
export declare function isFloat64Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Function`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Function`; otherwise, `false`.
 */
export declare function isOrdinaryFunction(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `GeneratorFunction`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `GeneratorFunction`; otherwise,
 *     `false`.
 */
export declare function isGeneratorFunction(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Generator` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Generator`; otherwise, `false`.
 */
export declare function isGeneratorObject(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Int8Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Int8Array`; otherwise, `false`.
 */
export declare function isInt8Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Int16Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Int16Array`; otherwise,
 *     `false`.
 */
export declare function isInt16Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Int32Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is an `Int32Array`; otherwise,
 *     `false`.
 */
export declare function isInt32Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Map`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Map`; otherwise, `false`.
 */
export declare function isMap(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Map Iterator`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Map Iterator`; otherwise,
 *     `false`.
 */
export declare function isMapIterator(value: unknown): boolean;
/**
 * Determines whether the passed value is a `Module` namespace object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Module`; otherwise, `false`.
 */
export declare function isModuleNamespaceObject(value: unknown): boolean;
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
export declare function isNativeError(value: unknown): boolean;
/**
 * Determines if value is actually a `Number` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Number`; otherwise, `false`.
 */
export declare function isNumberObject(value: unknown): boolean;
/**
 * Determines if value is actually a `BigInt` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `BigInt`; otherwise, `false`.
 */
export declare function isBigIntObject(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Promise`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Promise`; otherwise, `false`.
 */
export declare function isPromise(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `RegExp`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `RegExp`; otherwise, `false`.
 */
export declare function isRegExp(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Set`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Set`; otherwise, `false`.
 */
export declare function isSet(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Set Iterator`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Set Iterator`; otherwise,
 *     `false`.
 */
export declare function isSetIterator(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `SharedArrayBuffer`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `SharedArrayBuffer`; otherwise,
 *     `false`.
 */
export declare function isSharedArrayBuffer(value: unknown): boolean;
/**
 * Determines if value is actually a `String` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `String`; otherwise, `false`.
 */
export declare function isStringObject(value: unknown): boolean;
/**
 * Determines if value is actually a `Symbol` object.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Symbol`; otherwise, `false`.
 */
export declare function isSymbolObject(value: unknown): boolean;
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
export declare function isTypedArray(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Uint8Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint8Array`; otherwise, `false`.
 */
export declare function isUint8Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Uint8ClampedArray`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint8ClampedArray`; otherwise,
 *     `false`.
 */
export declare function isUint8ClampedArray(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Uint16Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint16Array`; otherwise,
 *     `false`.
 */
export declare function isUint16Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `Uint32Array`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `Uint32Array`; otherwise,
 *     `false`.
 */
export declare function isUint32Array(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `WeakMap`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `WeakMap`; otherwise, `false`.
 */
export declare function isWeakMap(value: unknown): boolean;
/**
 * Determines whether the passed value is of type `WeakSet`.
 * @param {unknown} value The value to be checked.
 * @returns {boolean} `true` if the value is a `WeakSet`; otherwise, `false`.
 */
export declare function isWeakSet(value: unknown): boolean;
