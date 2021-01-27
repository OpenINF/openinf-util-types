/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Determines if value is actually an Array.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isArray(value: any): boolean;
/**
 * Converts an array-like object to an array.
 * @param {?IArrayLike<T>|string} arrayLike
 * @returns {!Array<T>}
 * @template T
 */
export declare function toArray(arrayLike: any): any;
/**
 * If the specified argument is an array, it's returned as is. If it's a
 * single item, the array containing this item is created and returned.
 * @param {!Array<T>|T} arrayOrSingleItem
 * @returns {!Array<T>}
 * @template T
 */
export declare function arrayOrSingleItemToArray(arrayOrSingleItem: any): any;
/**
 * Determines if value is actually an Object.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isObject(value: any): boolean;
/**
 * Determines if value is of number type and finite.
 * NaN and Infinity are not considered a finite number.
 * String numbers are not considered numbers.
 * @param {unknown} value
 * @returns {boolean}
 */
export declare function isFiniteNumber(value: any): boolean;
/**
 * Checks whether `s` is a valid value of `enumObj`.
 *
 * @param {!Object<T>} enumObj
 * @param {T} s
 * @returns {boolean}
 * @template T
 */
export declare function isEnumValue(enumObj: any, s: any): boolean;
/**
 * Externs declare that access `defaultView` from `document` or
 * `ownerDocument` is of type `(Window|null)` but most of our parameter types
 * assume that it is never null. This is OK in practice as we ever only get
 * null on disconnected documents or old IE.
 * This helper function casts it into just a simple Window return type.
 *
 * @param {!Window | null} winOrNull
 * @returns {!Window}
 */
export declare function toWin(winOrNull: any): any;
