/**
 * Returns the ECMAScript [[Class]] internal property of a value.
 * @param {unknown} value
 * @returns {string} A specification-defined classification of objects.
 */
export declare function toString(value: unknown): string;
/**
 * Determines if value is actually of type `Array`.
 * @param {unknown} value
 * @returns {boolean}
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
 * Determines if value is actually of type `Object`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isObject(value: unknown): boolean;
/**
 * Determines if value is of number type and finite.
 * `NaN` and `Infinity` are not considered a finite number.
 * String numbers are not considered numbers.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isFiniteNumber(value: unknown): boolean;
/**
 * Determines if value is actually of type `ArrayBuffer` or `SharedArrayBuffer`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isAnyArrayBuffer(value: unknown): boolean;
/**
 * Determines if value is actually an [`ArrayBufferView`](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView).
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isArrayBufferView(value: unknown): boolean;
/**
 * Determines if value is actually an `Arguments` object.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isArgumentsObject(value: unknown): boolean;
/**
 * Determines if value is actually of type `ArrayBuffer`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isArrayBuffer(value: unknown): boolean;
/**
 * Determines if value is actually of type `AsyncFunction`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isAsyncFunction(value: unknown): boolean;
/**
 * Determines if value is actually of type `BigInt64Array`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isBigInt64Array(value: unknown): boolean;
/**
 * Determines if value is actually of type `BigUint64Array`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isBigUint64Array(value: unknown): boolean;
/**
 * Determines if value is actually a `Boolean` object.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isBooleanObject(value: unknown): boolean;
/**
 * Determines if value is actually one of the boxed primitives:
 * - `Boolean`
 * - `String`
 * - `Number`
 * - `Symbol`
 * - `BigInt`
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isBoxedPrimitive(value: unknown): boolean;
/**
 * Determines if value is actually of type `DataView`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isDataView(value: unknown): boolean;
/**
 * Determines if value is actually of type `Date`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isDate(value: unknown): boolean;
/**
 * Determines if value is actually of type `Float32Array`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isFloat32Array(value: unknown): boolean;
/**
 * Determines if value is actually of type `Float64Array`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isFloat64Array(value: unknown): boolean;
/**
 * Determines if value is actually of type `Function`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isOrdinaryFunction(value: unknown): boolean;
/**
 * Determines if value is actually of type `GeneratorFunction`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isGeneratorFunction(value: unknown): boolean;
/**
 * Determines if value is actually a `Generator` object.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isGeneratorObject(value: unknown): boolean;
/**
 * Determines if value is actually of type `Int8Array`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isInt8Array(value: unknown): boolean;
/**
 * Determines if value is actually of type `Int16Array`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isInt16Array(value: unknown): boolean;
/**
 * Determines if value is actually of type `Int32Array`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isInt32Array(value: unknown): boolean;
/**
 * Determines if value is actually of type `Map`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isMap(value: unknown): boolean;
/**
 * Determines if value is actually of type `Map Iterator`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isMapIterator(value: unknown): boolean;
/**
 * Determines if value is actually a `Module` namespace object.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isModuleNamespaceObject(value: unknown): boolean;
/**
 * Determines if value is actually one of the native Error types:
 * - `EvalError`
 * - `RangeError`
 * - `ReferenceError`
 * - `SyntaxError`
 * - `TypeError`
 * - `URIError`
 * - `AggregateError`
 * - `InternalError`
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isNativeError(value: unknown): boolean;
/**
 * Determines if value is actually a `Number` object.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isNumberObject(value: unknown): boolean;
/**
 * Determines if value is actually a `BigInt` object.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isBigIntObject(value: unknown): boolean;
/**
 * Determines if value is actually of type `Promise`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isPromise(value: unknown): boolean;
/**
 * Determines if value is actually of type `RegExp`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isRegExp(value: unknown): boolean;
/**
 * Determines if value is actually of type `Set`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isSet(value: unknown): boolean;
/**
 * Determines if value is actually of type `Set Iterator`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isSetIterator(value: unknown): boolean;
/**
 * Determines if value is actually of type `SharedArrayBuffer`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isSharedArrayBuffer(value: unknown): boolean;
/**
 * Determines if value is actually a `String` object.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isStringObject(value: unknown): boolean;
/**
 * Determines if value is actually a `Symbol` object.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isSymbolObject(value: unknown): boolean;
/**
 * Determines if value is one of the typed arrays:
 * - `Float32Array`
 * - `Float64Array`
 * - `Int8Array`
 * - `Uint8Array`
 * - `Int16Array`
 * - `Uint16Array`
 * - `Int32Array`
 * - `Uint32Array`
 * - `Uint8ClampedArray`
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isTypedArray(value: unknown): boolean;
/**
 * Determines if value is actually of type `Uint8Array`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isUint8Array(value: unknown): boolean;
/**
 * Determines if value is actually of type `Uint8ClampedArray`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isUint8ClampedArray(value: unknown): boolean;
/**
 * Determines if value is actually of type `Uint16Array`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isUint16Array(value: unknown): boolean;
/**
 * Determines if value is actually of type `Uint32Array`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isUint32Array(value: unknown): boolean;
/**
 * Determines if value is actually of type `WeakMap`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isWeakMap(value: unknown): boolean;
/**
 * Determines if value is actually of type `WeakSet`.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isWeakSet(value: unknown): boolean;
