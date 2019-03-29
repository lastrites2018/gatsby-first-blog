---
title: wrong answer
date: 2018-09-14
category: TIL
---

1. 메모이제이션 구현 실패

```javascript

Write a function called "computeSummationToN".

Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.

Notes:
* If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.

var output = computeSummationToN(6);
console.log(output); // --> 21

let computeSummationToN = (n) => {
  // your code here
  if (n <= 0) { return 0; }
  let number = n -1;
  return n + computeSummationToN(number);
}

var output = computeSummationToN(6);
console.log(output); // --> 21

https://repl.it/student/submissions/3704928

// 메모이제이션을 넣어서 구현하고 싶었는데 실패했다. 아직도 너무 부족하다.
```

2. ???

```javascript
https://repl.it/student/submissions/3673320
Write a function called "getElementOfArrayProperty".

Given an object, a key, and a numerical index, "getElementOfArrayProperty" returns the value of the element at the given index of the array located within the given object at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the given index is out of range of the array located at the given key, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'

// 첫 풀이
let getElementOfArrayProperty = (obj, key, index) => {
  // your code here
  if (!obj.key || obj.key.length <=0) { return undefined;}
  if (!obj.key[index])
  { return undefined; }
  if (!obj[key]) {
    return undefined;
  }

  //???
  return obj[key][index];

}
//error 내용
Should_return_undefined_3
Error: Expected 'e' to be undefined.
중간에

if (typeof obj[key] !== 'object') {
    return undefined;
  } // 이거 넣으면 바로 통과한다. 왜?

var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'e', 'e');
console.log(output); // --> 'Jamil'
```
