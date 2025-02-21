---
title: 'Boundary'
date: '2025-02-22'
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
    > In programming, when defining a range, it’s essential to set a minimum (min) and maximum (max) value. These values establish the boundaries of the range and are often used for validating data or setting conditions.
2.  Inclusive vs. Exclusive:

    > Inclusive: This means that the minimum and maximum values are included within the range. For example, a range from 1 to 10 inclusive would include both 1 and 10 as valid values.

    > Exclusive: This means that the minimum and maximum values are excluded from the range. For example, a range from 1 to 10 exclusive would only include values greater than 1 and less than 10.

3.  Naming Conventions:
    > • When writing code, it’s important to clearly indicate whether the minimum and maximum values are inclusive or exclusive in variable names or function names. This enhances code readability and helps prevent mistakes or misunderstandings.

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

> Using prefixes and suffixes in variable and component names can greatly enhance code readability, maintainability, and convey the purpose of the variable or function more clearly. Here’s a breakdown of common conventions:

1. Variables Naming

- **`get`/`set`**
  > `get` is often used as a prefix for functions that retrieve a value.
  > `set` is used for functions that assign or update a value.

```javascript
function getUserName() {
  return this.userName;
}

function setUserName(name) {
  this.userName = name;
}
```

- **`use`**
  > `use` is typically used in React hooks or other contexts to indicate that the function or variable is a hook or special utility.

```javascript
const [user, setUser] = useState(null);

function useAuth() {}
```

- **`$`**
  > `$` is often used as a prefix to denote variables that store DOM elements or jQuery objects. This convention is inherited from jQuery, where `$` was used as the main function.

```javascript
const $button = document.querySelector('button');
const $inputField = $('#input');
```

- **`_`**
  > `_` is commonly used as a prefix to denote private variables or methods within a class or module, indicating that they are intended for internal use only.

```javascript
class User {
  _password = 'secret'; // Private variable

  _encryptPassword() {}
}
```

- **`#`**
  > In modern JavaScript (ES6+), `#` is used to denote private class fields and methods, ensuring they cannot be accessed outside the class definition.

```javascript
class User {
  #password = 'secret'; // Private field

  #encryptPassword() {}

  getPassword() {
    return this.#password;
  }
}
```

2. Components Naming

- PascalCase
  > Component names, especially in React or other component-based frameworks, are usually written in PascalCase. This convention helps distinguish components from regular functions or variables.

```javascript
function UserProfile() {
  return (
    <div>
      <h1>User Profile</h1>
    </div>
  );
}
```

- Descriptive Suffixes
  > Adding descriptive suffixes can clarify the role of a component. Common suffixes include `Container`, `Component`, `Button`, `List`, etc.

```javascript
const UserListContainer = () => {
  // Logic for managing the list of users
  return <UserList users={userArray} />;
};

const UserButton = () => {
  return <button>Click Me</button>;
};
```

- Prefix for Components
  > Using prefixes like `Admin`, `User`, `Guest`, etc., can help in organizing components related to specific functionalities or user roles.

```javascript
const AdminDashboard = () => {
  return <Dashboard />;
};

const UserDashboard = () => {
  return <Dashboard />;
};
```
