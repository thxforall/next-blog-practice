---
title: 'What is JavaScript?'
date: '2025-02-20'
---

## What is JavaScript?

---

## List

1. [Thinking about clean code](#thinking-about-clean-code)
2. [JavaScript is 'Monkey patch'](#javascript-is-monkey-patch)
3. [What are the anti-patterns?](#what-are-the-anti-patterns)

---

#### Thinking about clean code

- Clean Code for JavaScript[https://github.com/ryanmcdermott/clean-code-javascript]
- Is the Clean Code Book absolute?[https://www.youtube.com/watch?v=th7n1rmlO4I]
- JavaScript Style Guide
  - AirBnB[https://github.com/airbnb/javascript]
  - Google[https://google.github.io/styleguide/jsguide.html]
  - ECMA[https://ecma-international.org/]
  - Prettier[https://prettier.io/]
  - ESLint[https://eslint.org/]

#### JavaScript is 'Monkey patch'

> A monkey patch is a way for a program to extend or modify supporting system software locally (affecting only the running instance of the program)

```javascript
Monkey Patching Example
// Original function in a library
function greet() {
console.log('Hello, world!');
}

// Monkey patching the function
greet = function() {
console.log('Hello, clean code!');
};

// Calling the patched function
greet(); // Output: Hello, clean code!
```

> Clean Code Alternative: Instead of monkey patching, create a new function or use inheritance to extend functionality. This maintains the original behavior and adds new features in a clean way.

```javascript
// Original function in a library
function greet() {
  console.log('Hello, world!');
}

// Extending functionality without monkey patching
function greetWithCleanCode() {
  greet();
  console.log('Hello, clean code!');
}

// Calling the new function
greetWithCleanCode();
// Output:
// Hello, world!
// Hello, clean code!
```

#### What are the anti-patterns?

> [Anti-Patterns Examples](anti-patterns.md)
> Anti-patterns are common responses to recurring problems that are usually ineffective and counterproductive. Learning to recognize and avoid them is crucial for writing clean code.
