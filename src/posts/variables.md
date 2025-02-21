---
title: 'Variables'
date: '2025-02-26'
---

## Variables

---

## List

1. [Don't use 'var'](#dont-use-var)
2. [Scope](#scope)
3. [Global Scope](#global-scope)
4. [Temporary Variables](#temporary-variables)
5. [Hoisting](#hoisting)

---

#### Don't use 'var'

> Using let and const instead of var helps avoid issues with scope and hoisting.

```javascript
// Bad
var count = 1;

// Good
let count = 1;
const MAX_COUNT = 10;
```

#### Scope

> Understanding variable scope is essential for writing predictable and bug-free code.

```javascript
function example() {
  let localVariable = 'I am local';
  if (true) {
    let blockScoped = 'I am block scoped';
    console.log(blockScoped); // Output: I am block scoped
  }
  console.log(localVariable); // Output: I am local
  // console.log(blockScoped); // Error: blockScoped is not defined
}

example();
```

#### Global Scope

> Minimize the use of global variables to avoid conflicts and unexpected behavior.

```javascript
// Bad: Global variable
var globalCount = 0;

// Good: Encapsulated variable
function incrementCount() {
  let count = 0;
  count++;
  return count;
}

incrementCount(); // 1
incrementCount(); // 1 (no conflict with previous call)
```

#### Temporary Variables

> Use descriptive names for temporary variables and avoid unnecessary ones.

```javascript
// Bad: Global variable
var globalCount = 0;

// Good: Encapsulated variable
function incrementCount() {
  let count = 0;
  count++;
  return count;
}

incrementCount(); // 1
incrementCount(); // 1 (no conflict with previous call)
```

#### Hoisting

> Hoisting is JavaScript’s behavior of moving declarations to the top of their scope. Understanding hoisting helps prevent bugs.

```javascript
// Bad
console.log(hoistedVar); // Output: undefined
var hoistedVar = 'This is hoisted';

// Good
let notHoistedVar;
console.log(notHoistedVar); // Output: undefined
notHoistedVar = 'This is not hoisted';
```
