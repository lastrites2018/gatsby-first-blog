---
title: 20180904-20180907 recursion challenge, recursion example
date: 2018-09-04
category: TIL
---

## javascript Recursion challenge

20180904

1. JS-challenge https://github.com/JS-Challenges/recursion-prompts
2. w3resource https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php

---

1. 답? https://repl.it/@kanak/recursion-All-Problems

## 그외 리커전 예제들

20180907 countdown, countSheep, Guessing Game

```javascript
// countdown

// Iterative way
function countdown(n) {
  for (var i = n; i > 0; i--) {
    console.log(i)
  }
  console.log('Done!')
}

// Recursive
function countdown(n) {
  if (n < 0) {
    // base case
    console.log('Done!')
  } else {
    console.log(n)
    countdown(n - 1)
  }
}

countdown(10)
```

```javascript
// countSheep
function countSheep(number) {
  if (number === 0) {
    console.log('Zzzzzz')
  } else {
    console.log('Another sheep jumps over the fence.')
    // Define the variable newNumber as
    // 1 less than the input variable number
    var newNumber = number - 1

    //Recursively call the function
    //with newNumber as the parameter
    return countSheep(newNumber)
  }
}

countSheep(2)
```

```javascript
// Guessing game
// Guessing game example with recursive when the number of times to repeat function is not specified

function guessNumber(number) {
  //  Prompt the user for a number
  var guess = prompt('Guess a number between 1 and 100')

  // Convert their guess to a number using Number
  guess = Number(guess)

  //  Define base case
  if (guess === number) {
    return console.log('You got it! The number was ' + number)
  }
  //  Define recursive case with a function call
  guessNumber(number)
}

//  Call the function guessNumber() with an integer for an argument
guessNumber(2)
```
