---
title: 'If'
date: '2025-02-24'
---

## If

---

## List

1. [Value, Expression, Statement](#value-expression-statement)
2. [Ternary operator](#ternary-operator)
3. [Truthy & Falsy](#truthy--falsy)
4. [Short-Circuit Evaluation](#short-circuit-evaluation)
5. [Else If](#else-if)
6. [Else](#else)
7. [Negative Condition](#negative-condition)
8. [Default Case](#default-case)
9. [Explicit Operator](#explicit-operator)
10. [Nullish Coalescing Operator](#nullish-coalescing-operator)
11. [De Morgan’s Laws](#de-morgans-laws)

---

#### Value, Expression, Statement

> JavaScript syntax plays a crucial role in ensuring that your code is clear, maintainable, and error-free. This becomes even more evident when working with JSX in React, which is ultimately transformed into JavaScript code. By understanding this transformation process, you can appreciate why adhering to proper syntax is so important.

1. **JSX Ultimately Transforms into JavaScript**

> JSX is an extension of JavaScript that allows you to write HTML-like syntax within your JavaScript code, particularly in React. However, since browsers cannot directly interpret JSX, it must be transformed into JavaScript code that the browser can execute. This transformation is handled by tools like Babel. Understanding this process highlights the importance of JavaScript syntax because JSX is essentially JavaScript under the hood.

```jsx
// JSX code
const element = <h1>Hello, world!</h1>;

// Transformed JavaScript code
const element = React.createElement('h1', null, 'Hello, world!');
```

2. **Distinguishing Between Expressions and Statements**

> In JSX, you can only use JavaScript expressions, not statements. Expressions evaluate to a single value, whereas statements perform actions and control the flow of the program.

**Important Points:**

- **Conditional Rendering:** Use ternary operators (`condition ? trueExpression : falseExpression`) or logical `&&` operators for conditional rendering within JSX.

```jsx
const isLoggedIn = true;
return (
  <div>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}</div>
);
```

- **Looping Through Elements:** Use the `map()` function to iterate over arrays and render multiple elements in JSX.

```jsx
const items = ['Item1', 'Item2', 'Item3'];
return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

3. **Avoiding Confusion Between JavaScript and JSX Syntax**

> JSX looks similar to HTML, but it follows JavaScript syntax rules. Misunderstanding this can lead to errors.

**Important Points:**

- **Class Attribute:** Use `className` instead of `class` in JSX, because `class` is a reserved keyword in JavaScript.

```jsx
return <div className="container">Hello World</div>;
```

- **Inline Styles:** Use objects for inline styles in JSX, and remember to use camelCase for CSS properties.

```jsx
return (
  <div style={{ backgroundColor: 'red', fontSize: '20px' }}>Styled Text</div>
);
```

#### Ternary operator

> The ternary operator is a concise way to perform conditional logic in JavaScript. It allows you to evaluate a condition and return one of two values based on the outcome. However, while it can make code shorter and more readable, it's important to use it judiciously to avoid overcomplicating your code. Here are some guidelines and considerations for using the ternary operator, along with a comparison to `switch/case` statements.

1. **Basic Structure of Ternary Operator**

> The ternary operator in JavaScript follows this basic structure:

```javascript
condition ? expressionIfTrue : expressionIfFalse;
const isAdult = age >= 18 ? 'Yes' : 'No';
```

2. **Using Ternary Operator: My Own Rules**

> To keep your code clean and maintainable, consider these rules when using the ternary operator:

**Keep It Simple:**

- Use the ternary operator for simple, straightforward conditions. If the logic becomes complex or nested, consider using `if/else` or `switch/case` instead.

```javascript
// Good use
const status = isLoggedIn ? 'Welcome' : 'Please log in';

// Bad use (too complex)
const message =
  age < 18 ? (hasPermission ? 'Granted' : 'Denied') : 'Adult access';
```

**Avoid Nested Ternary Operators:**

- Nesting ternary operators can make the code hard to read and understand. If you find yourself nesting ternary operators, it's usually a sign that the logic should be refactored.

```javascript
// Avoid this
const result = condition1 ? (condition2 ? value1 : value2) : value3;

// Prefer this
let result;
if (condition1) {
  result = condition2 ? value1 : value2;
} else {
  result = value3;
}
```

**Consider Readability Over Conciseness:**

- While the ternary operator is useful for making code concise, readability should always come first. If the ternary operator makes the code harder to understand, it's better to use a full `if/else` statement.

```javascript
// Ternary operator is appropriate
const message = isError ? 'An error occurred' : 'Operation successful';

// `if/else` might be better for complex logic
let message;
if (isError) {
  message = 'An error occurred';
} else if (isWarning) {
  message = 'This is a warning';
} else {
  message = 'Operation successful';
}
```

3. **Ternary Operator vs. `switch/case`**

**Ternary Operator:**

- Best suited for simple conditions with two possible outcomes.
- Keeps the code concise but can become unreadable if overused or nested.

```javascript
const role = userType === 'admin' ? 'Admin Access' : 'User Access';
```

- **`switch/case`:**

> Best used when you have multiple conditions that lead to different outcomes. It provides a more structured way to handle multiple cases and can be more readable than a series of nested ternary operators.

```javascript
switch (userType) {
  case 'admin':
    console.log('Admin Access');
    break;
  case 'editor':
    console.log('Editor Access');
    break;
  case 'viewer':
    console.log('Viewer Access');
    break;
  default:
    console.log('No Access');
}
```

- **Pros of `switch/case`:** More readable when dealing with multiple conditions.
- **Cons of `switch/case`:** Slightly more verbose, but clarity often outweighs conciseness in complex logic.

4. **Avoiding Over-Simplification**

> Using the ternary operator to excessively simplify code can lead to confusion and maintenance challenges. Always balance between conciseness and clarity.

```javascript
// Overly simplified ternary operator
const level = score > 90 ? 'A' : score > 80 ? 'B' : score > 70 ? 'C' : 'D';

// Better to use `if/else` or `switch/case`
let level;
if (score > 90) {
  level = 'A';
} else if (score > 80) {
  level = 'B';
} else if (score > 70) {
  level = 'C';
} else {
  level = 'D';
}
```

#### Truthy & Falsy

> In JavaScript, every value is either "truthy" or "falsy." Understanding these concepts is crucial for writing effective and bug-free code, especially when working with conditions and logical operators like `!` (logical NOT).

1.  **Truthy Values**

A "truthy" value is any value that is considered true when evaluated in a boolean context, even if it is not explicitly `true`. In JavaScript, most values are truthy.

**Examples of Truthy Values:**

- `true`
- Non-zero numbers (e.g., `1`, `-42`, `3.14`)
- Non-empty strings (e.g., `"hello"`, `"0"`)
- Objects (e.g., `{}`, `[]`)
- Functions (e.g., `function() {}`)

**Usage:**

```javascript
if ('hello') {
  console.log('This is truthy!');
}
// Output: "This is truthy!"
```

2.  **Falsy Values**

A "falsy" value is any value that is considered false when evaluated in a boolean context. JavaScript has a small set of falsy values.

**Examples of Falsy Values:**

- `false`
- `0` (the number zero)
- `""` (empty string)
- `null`
- `undefined`
- `NaN` (Not-a-Number)

**Usage:**

```javascript
if (!0) {
  console.log('This is falsy!');
}
// Output: "This is falsy!"
```

3.  **Logical NOT Operator (`!`)**

The `!` (logical NOT) operator is used to invert the truthiness or falsiness of a value. It turns truthy values into `false` and falsy values into `true`.

**Examples:**

```javascript
console.log(!true); // Output: false
console.log(!false); // Output: true

console.log(!1); // Output: false (1 is truthy)
console.log(!0); // Output: true (0 is falsy)

console.log(!'hello'); // Output: false (non-empty string is truthy)
console.log(!''); // Output: true (empty string is falsy)
```

4.  **Double NOT Operator (`!!`)**

Using `!!` (double NOT) is a common pattern in JavaScript to explicitly convert a value to its boolean equivalent. The first `!` converts the value to a boolean and inverts it, and the second `!` inverts it back to the original truthy or falsy value in boolean form.

**Examples:**

```javascript
console.log(!!1); // Output: true (1 is truthy)
console.log(!!0); // Output: false (0 is falsy)

console.log(!!'hello'); // Output: true (non-empty string is truthy)
console.log(!!''); // Output: false (empty string is falsy)
```

**Summary**

- **Truthy:** Values that evaluate to `true` in a boolean context. Most values in JavaScript are truthy, except the small set of falsy values.
- **Falsy:** Values that evaluate to `false` in a boolean context. These include `false`, `0`, `""`, `null`, `undefined`, and `NaN`.
- **`!` Operator:** Inverts the truthiness or falsiness of a value.
- **`!!` Operator:** Converts a value to its boolean equivalent, making it explicitly `true` or `false`.

#### Short-Circuit Evaluation

> Short-circuit evaluation is a technique used by logical operators in JavaScript, where the second operand is only evaluated if necessary. This is crucial for optimizing performance and avoiding unnecessary computations. The two primary operators that utilize short-circuit evaluation are `&&` (AND) and `||` (OR). Understanding how these operators work, along with their precedence and order of evaluation, is important for writing efficient and correct code.

1.  **AND Operator (`&&`)**

The `&&` operator evaluates to `true` if both operands are truthy. If the first operand is falsy, the entire expression short-circuits and returns the first falsy value without evaluating the second operand.

**Examples:**

```javascript
console.log(false && true); // Output: false (short-circuits at false)
console.log(true && false); // Output: false (evaluates both operands)
console.log(true && 'hello'); // Output: "hello" (evaluates both operands)
console.log(null && 'world'); // Output: null (short-circuits at null)
```

**Usage in Code:**

```javascript
// Checking if an object and its property exist
const user = null;
console.log(user && user.name); // Output: null (short-circuits at null)
```

2.  **OR Operator (`||`)**

The `||` operator evaluates to `true` if at least one of the operands is truthy. If the first operand is truthy, the entire expression short-circuits and returns the first truthy value without evaluating the second operand.

**Examples:**

```javascript
console.log(true || false); // Output: true (short-circuits at true)
console.log(false || true); // Output: true (evaluates both operands)
console.log('hello' || false); // Output: "hello" (short-circuits at "hello")
console.log(null || 'world'); // Output: "world" (evaluates both operands)
```

**Usage in Code:**

```javascript
// Providing a default value
const name = null || 'Guest';
console.log(name); // Output: "Guest"
```

3.  **Precedence and Order of Evaluation**

Operator precedence determines the order in which operators are evaluated in expressions that contain multiple operators. In JavaScript:

- The `&&` operator has higher precedence than the `||` operator.
- Operators with higher precedence are evaluated before those with lower precedence.

**Example of Precedence:**

```javascript
const result = false || (true && false);
console.log(result); // Output: false

// This is evaluated as: false || (true && false)
// The && is evaluated first, resulting in false
// Then, false || false is evaluated, resulting in false
```

4.  **Order of Evaluation**

Even though precedence determines which operation is performed first, JavaScript still evaluates expressions from left to right within the same level of precedence. This order is crucial for understanding how short-circuit evaluation works.

**Example of Order:**

```javascript
const a = true || (false && console.log('This will not run'));
const b = false && (true || console.log('This will not run'));
```

- In the first expression, `true ||` short-circuits, so the rest of the expression isn’t evaluated.
- In the second expression, `false &&` short-circuits, so the `console.log` doesn’t run.

**Summary**

- **Short-Circuit Evaluation:** A technique where the second operand is evaluated only if necessary.
  - **`&&` (AND Operator):** Returns the first falsy value or the last truthy value if all are truthy.
  - **`||` (OR Operator):** Returns the first truthy value or the last falsy value if all are falsy.
- **Precedence:** The `&&` operator has higher precedence than the `||` operator.
- **Order of Evaluation:** Expressions are evaluated from left to right, and short-circuiting can stop further evaluation.

#### Else If

#### Else

#### Early Return

#### Negative Condition

#### Default Case

#### Explicit Operator

#### Nullish Coalescing Operator

#### De Morgan’s Laws
