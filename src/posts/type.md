---
title: 'Type'
date: '2025-02-25'
thumbnail: '/images/posts/type.jpeg'
---

## Type

---

## List

1. [Type Check](#type-check)
2. [Dynamic Type](#dynamic-type)
3. [Type Checking Methods](#type-checking-methods)
4. [Undefined & NULL](#undefined--null)
5. [Reduce eqeq](#reduce-eqeq)
6. [Type Casting](#type-casting)

---

#### Type Check

> JavaScript is a dynamically typed language, meaning that variable types are determined at runtime rather than at compile-time. This provides flexibility but can sometimes lead to unexpected bugs. Therefore, knowing how to check types effectively is important.

#### Dynamic Type

> In JavaScript, variables do not have fixed types, allowing different types of values to be assigned to the same variable.

```javascript
let variable = 42; // Number
console.log(typeof variable); // Output: 'number'

variable = 'Hello'; // String
console.log(typeof variable); // Output: 'string'

variable = true; // Boolean
console.log(typeof variable); // Output: 'boolean'
```

#### Type Checking Methods

> typeof Operator : The typeof operator returns a string indicating the type of the unevaluated operand.

```javascript
console.log(typeof 42); // Output: 'number'
console.log(typeof 'Hello'); // Output: 'string'
console.log(typeof true); // Output: 'boolean'
console.log(typeof undefined); // Output: 'undefined'
console.log(typeof null); // Output: 'object' (known bug)
console.log(typeof {}); // Output: 'object'
console.log(typeof []); // Output: 'object' (arrays are objects)
console.log(typeof function () {}); // Output: 'function'
```

> instanceof Operator : The instanceof operator tests whether the prototype property of a constructor appears in the prototype chain of an object.

```javascript
console.log([] instanceof Array); // Output: true
console.log({} instanceof Object); // Output: true
console.log(function () {} instanceof Function); // Output: true
```

> Array.isArray Method : This method checks if a value is an array.

```javascript
console.log(Array.isArray([])); // Output: true
console.log(Array.isArray({})); // Output: false
```

> Custom Type Checking Function : For more refined type checking, you can create a custom function.

```javascript
function getType(value) {
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}

console.log(getType(42)); // Output: 'number'
console.log(getType('Hello')); // Output: 'string'
console.log(getType(true)); // Output: 'boolean'
console.log(getType(undefined)); // Output: 'undefined'
console.log(getType(null)); // Output: 'null'
console.log(getType({})); // Output: 'object'
console.log(getType([])); // Output: 'array'
console.log(getType(function () {})); // Output: 'function'
```

#### Undefined & NULL

> In JavaScript, undefined and null are two distinct values that represent the absence of a value, but they are used in different contexts and have different behaviors.

> undefiend : A variable that has been declared but not assigned a value, or a function that does not explicitly return a value, has the value undefined.

> null : An intentional absence of any object value. It is typically used to signify that a variable should be empty or that an object reference is missing.

```javascript
console.log(undefined == null); // Output: true
console.log(undefined === null); // Output: false

console.log(!undefined); // Output: true
console.log(!null); // Output: true

let uninitializedVar;
console.log(uninitializedVar); // Output: undefined

let obj = { key: 'value' };
obj.key = null;
console.log(obj.key); // Output: null

console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object"
```

#### Reduce eqeq

> In JavaScript, the == operator (often called "loose equality" or eqeq) allows for type coercion, which means it tries to convert the values being compared to a common type before making the comparison. While this can sometimes be convenient, it can also lead to unexpected behavior and bugs. For this reason, it is often recommended to use === (strict equality) instead, which does not perform type casting and only returns true if both the value and type are the same.

> When using ==, JavaScript will 'automatically attempt to convert' the values to the same type before comparing them. This process is called type coercion or type casting. Here are some examples of how == behaves:

```javascript
console.log(0 == false); // Output: true
console.log('' == false); // Output: true
console.log(1 == '1'); // Output: true
console.log(null == undefined); // Output: true
```

> The === operator, known as "strict equality," checks both the value and the type without performing any type casting. This leads to more predictable and reliable comparisons.

```javascript
console.log(0 === false); // Output: false
console.log('' === false); // Output: false
console.log(1 === '1'); // Output: false
console.log(null === undefined); // Output: false
```

#### Type Casting

> [JavaScript Type Table](https://dorey.github.io/JavaScript-Equality-Table/)

> Type casting refers to converting a value from one type to another. In JavaScript, this can happen either implicitly (automatically by the language) or explicitly (manually by the developer).

> Implicit type casting, also known as type coercion, occurs when JavaScript automatically converts one data type to another. This usually happens in expressions where values of different types are involved.

```javascript
// String to Number (concatenation wins in addition)
console.log('5' + 5); // Output: '55' (string)

// Number to String (concatenation wins)
console.log('5' + 5); // Output: '55' (string)

// String to Number (subtraction forces number conversion)
console.log('5' - 1); // Output: 4 (number)

// Boolean to Number
console.log(true + 1); // Output: 2 (true is coerced to 1)
console.log(false + 1); // Output: 1 (false is coerced to 0)

// Null to Number
console.log(null + 1); // Output: 1 (null is coerced to 0)

// Undefined to Number
console.log(undefined + 1); // Output: NaN (undefined is coerced to NaN)
```

> Explicit type casting involves manually converting a value from one type to another using JavaScript's built-in functions.

```javascript
let str = '123';
let num = Number(str); // Using Number()
console.log(num); // Output: 123 (number)

let floatStr = '123.45';
let floatNum = parseFloat(floatStr); // Using parseFloat()
console.log(floatNum); // Output: 123.45 (number)

let intNum = parseInt(floatStr); // Using parseInt()
console.log(intNum); // Output: 123 (number)

let num = 123;
let str = String(num); // Using String()
console.log(str); // Output: '123' (string)

let floatNum = 123.45;
let floatStr = floatNum.toString(); // Using toString()
console.log(floatStr); // Output: '123.45' (string)

let boolTrue = true;
let numTrue = Number(boolTrue); // true is converted to 1
console.log(numTrue); // Output: 1 (number)

let boolFalse = false;
let numFalse = Number(boolFalse); // false is converted to 0
console.log(numFalse); // Output: 0 (number)

let zero = 0;
let nonZero = 5;

let boolZero = Boolean(zero); // 0 is falsy
console.log(boolZero); // Output: false

let boolNonZero = Boolean(nonZero); // Non-zero numbers are truthy
console.log(boolNonZero); // Output: true

let emptyStr = '';
let nonEmptyStr = 'hello';

let boolEmptyStr = Boolean(emptyStr); // Empty string is falsy
console.log(boolEmptyStr); // Output: false

let boolNonEmptyStr = Boolean(nonEmptyStr); // Non-empty string is truthy
console.log(boolNonEmptyStr); // Output: true
```

#### isNaN

> In JavaScript, isNaN and Number.isNaN are used to check if a value is "Not-a-Number" (NaN). However, they behave differently, and understanding their differences is important for writing accurate code.

> The isNaN() function checks whether a value is NaN or can be coerced to NaN. If the value is not a number or cannot be converted to a number, it returns true.

```javascript
console.log(isNaN(NaN)); // Output: true (NaN is NaN)
console.log(isNaN('hello')); // Output: true ('hello' cannot be converted to a number, so it becomes NaN)
console.log(isNaN('123')); // Output: false ('123' is a valid number string)
console.log(isNaN(123)); // Output: false (123 is a number)
console.log(isNaN(true)); // Output: false (true is coerced to 1, which is a number)
console.log(isNaN(false)); // Output: false (false is coerced to 0, which is a number)
console.log(isNaN(undefined)); // Output: true (undefined becomes NaN when coerced to a number)
console.log(isNaN(null)); // Output: false (null is coerced to 0, which is a number)
```

> The Number.isNaN() method is more precise and checks whether the value is strictly NaN without performing type coercion.

```javascript
console.log(Number.isNaN(NaN)); // Output: true (NaN is NaN)
console.log(Number.isNaN('hello')); // Output: false ('hello' is a string, not NaN)
console.log(Number.isNaN('123')); // Output: false ('123' is a string, not NaN)
console.log(Number.isNaN(123)); // Output: false (123 is a number, not NaN)
console.log(Number.isNaN(true)); // Output: false (true is not NaN)
console.log(Number.isNaN(false)); // Output: false (false is not NaN)
console.log(Number.isNaN(undefined)); // Output: false (undefined is not NaN)
console.log(Number.isNaN(null)); // Output: false (null is not NaN)
```

> When dealing with '[floating-point numbers](/floatingnumber.md)' in JavaScript, you might encounter NaN in calculations, especially when performing operations that are undefined or invalid mathematically.

```javascript
let result = 0 / 0; // NaN (undefined operation)
console.log(Number.isNaN(result)); // Output: true

let sqrtResult = Math.sqrt(-1); // NaN (square root of a negative number is not a real number)
console.log(Number.isNaN(sqrtResult)); // Output: true
```
