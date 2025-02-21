---
title: 'Boundary'
date: '2025-02-22'
thumbnail: '/images/posts/boundary.jpg'
---

## Boundary

---

## List

1. [Min-Max](#min-max)
2. [Prefix-Suffix in Naming Conventions](#prefix-suffix-in-naming-conventions)

---

#### Min-Max

(Begin-End / First-Last)

1.  Handling Min-Max Values:
    > In programming, when defining a range, it's essential to set a minimum (min) and maximum (max) value. These values establish the boundaries of the range and are often used for validating data or setting conditions.
2.  Inclusive vs. Exclusive:

    > Inclusive: This means that the minimum and maximum values are included within the range. For example, a range from 1 to 10 inclusive would include both 1 and 10 as valid values.

    > Exclusive: This means that the minimum and maximum values are excluded from the range. For example, a range from 1 to 10 exclusive would only include values greater than 1 and less than 10.

3.  Naming Conventions:
    > • When writing code, it's important to clearly indicate whether the minimum and maximum values are inclusive or exclusive in variable names or function names. This enhances code readability and helps prevent mistakes or misunderstandings.

```javascript
// Function that includes min and max values
function isWithinRangeInclusive(value, min, max) {
  return value >= min && value <= max; // Inclusive: includes min and max
}

// Function that excludes min and max values
function isWithinRangeExclusive(value, min, max) {
  return value > min && value < max; // Exclusive: excludes min and max
}

// Usage:
console.log(isWithinRangeInclusive(5, 1, 5)); // Output: true
console.log(isWithinRangeExclusive(5, 1, 5)); // Output: false
```

- Example: Handling Check-In and Check-Out Dates

```javascript
function isCheckInDateValidInclusive(checkInDate, startDate, endDate) {
  // Check-in date should be on or after the start date, and before or on the end date
  return checkInDate >= startDate && checkInDate <= endDate;
}

function isCheckOutDateValidInclusive(checkOutDate, startDate, endDate) {
  // Check-out date should be after the start date and on or before the end date
  return checkOutDate > startDate && checkOutDate <= endDate;
}

function isCheckInDateValidExclusive(checkInDate, startDate, endDate) {
  // Check-in date should be strictly after the start date and before the end date
  return checkInDate > startDate && checkInDate < endDate;
}

function isCheckOutDateValidExclusive(checkOutDate, startDate, endDate) {
  // Check-out date should be strictly after the start date and before the end date
  return checkOutDate > startDate && checkOutDate < endDate;
}

// Example Dates
const startDate = new Date('2024-08-01');
const endDate = new Date('2024-08-10');
const checkInDate = new Date('2024-08-01');
const checkOutDate = new Date('2024-08-10');

// Inclusive checks
console.log(isCheckInDateValidInclusive(checkInDate, startDate, endDate)); // Output: true
console.log(isCheckOutDateValidInclusive(checkOutDate, startDate, endDate)); // Output: true

// Exclusive checks
console.log(isCheckInDateValidExclusive(checkInDate, startDate, endDate)); // Output: false
console.log(isCheckOutDateValidExclusive(checkOutDate, startDate, endDate)); // Output: false
```

#### Prefix-Suffix in Naming Conventions

> Using prefixes and suffixes in variable and component names can greatly enhance code readability, maintainability, and convey the purpose of the variable or function more clearly. Here's a breakdown of common conventions:

1. Variables Naming

- **`get`/`set`**
  > `