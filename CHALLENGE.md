# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

```
JavaScript is a versatile programming language that allows you to create dynamic content. It is a key technology for front-end web development.
```

## About values

### What is a primitive value?

```
Primitive values are data that are stored directly in a variable, this means that they cannot be further divided into smaller pieces, and they do not have any properties or methods. 
```

### Which are primitive values? Explain them with at least one example for primitive.

```
-Undefined:
let x;
console.log(x);

-Null:
let y = null;
console.log(y);

-Boolean:
let isTrue = true;
let isFalse = false;
console.log(isTrue);
console.log(isFalse);

-Number:
let num = 10;
console.log(num);
(The numbres can also be decimal)

-String:
let greeting = "Challenge 1";
console.log(greeting);

-Symbol:
const uniqueSymbol = Symbol('description');
console.log(uniqueSymbol);

```

## About variables

### What is a variable in JS?

```
A variable in JavaScript is a symbolic name or identifier that represents a value in a program.
```

### How many ways can we define a variable in JS? Is there any not recommended way?

```
-var

-let

-const

The recommended way to define variables in modern JavaScript is to use let and const depending on whether you need to reassign the variable or not.
```

### Which are the most used var naming conventions in JS?

```
-Camel case

-Pascal case

-Snake case

```

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

```
-Equal "==": 5 == "5";

-Strict equal "===": 5 === 5;

-Not equal "!=": 5 != "5";

-Not strict equal "!==": 5 !== "5";
```

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

```
-Logical AND "&&": true && true; // true, true && false; // false

-Logical OR "||": true || false; // true, false || false; // false

-Logical NOT "!": !true; // false, !false; // true


```
