---
title: ES6 Rest parameter, Spread Operator (배열, 객체 다루기)
date: 2018-09-12
category: TIL
---

## 파라미터 기본값

ES6에서는 파라미터 기본값을 설정할 수 있어, 함수 내에 따로 파라미터 체크를 해줄 필요가 없다.

```javascript
// ES5
function plus(x, y) {
  x = x || 0 // 매개변수 x에 인수를 할당하지 않은 경우, 기본값 0을 할당한다.
  y = y || 0 // 매개변수 y에 인수를 할당하지 않은 경우, 기본값 0을 할당한다.
}

// ES6
function plus(x = 0, y = 0) {
  // 파라미터 x, y에 인수를 할당하지 않은 경우, 기본값 0을 할당한다.
}
```

## Rest Paramerter

Rest 파라미터(Rest Parameter)는 Spread 연산자(`...`)를 사용하여 파라미터를 정의한 것을 의미한다. Rest 파라미터를 사용하면 **인수의 리스트를 함수 내부에서 배열로 전달받을 수** 있다.

```javascript
function foo(...rest) {
  console.log(Array.isArray(rest)); // true
  console.log(rest); // [ 1, 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]

인수는 순차적으로 파라미터와 Rest 파라미터에 할당된다.

function foo(param, ...rest) {
  console.log(param); // 1
  console.log(rest);  // [ 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
  console.log(param1); // 1
  console.log(param2); // 2
  console.log(rest);   // [ 3, 4, 5 ]
}

bar(1, 2, 3, 4, 5);


```

**Rest 파라미터는 반드시 마지막 파라미터이어야 한다.**

```javascript
function foo( ...rest, param1, param2) { }

foo(1, 2, 3, 4, 5);
// SyntaxError: Rest parameter must be last formal parameter
```

## arguments

ES6에서는 위에서 상술했듯 rest 파라미터를 사용하여 가변 인자를 함수 내부에 배열로 전달할 수 있다. 유사 배열인 arguments 객체를 배열로 변환하는 번거로움을 피할 수 있다.

ES6의 화살표 함수에는 함수 객체의 arguments 프로퍼티가 없다. 따라서 화살표 함수로 가변 인자 함수를 구현해야 할 때는 **반드시 rest 파라미터**를 사용해야 한다.

```javascript
var normalFunc = function() {}
console.log(normalFunc.hasOwnProperty('arguments')) // true

const arrowFunc = () => {}
console.log(arrowFunc.hasOwnProperty('arguments')) // false
```

## Spread 연산자

```javascript
// ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
console.log(...[1, 2, 3]) // 1, 2, 3

// 문자열은 이터러블이다.
console.log(...'Hello') // H e l l o

// Map과 Set은 이터러블이다.
console.log(...new Map([['a', '1'], ['b', '2']])) // [ 'a', '1' ] [ 'b', '2' ]
console.log(...new Set([1, 2, 3])) // 1 2 3
```

> 이터러블(iterable)

> 이터러블은 **순회 가능한 자료 구조**이다. **Symbol.iterator를 프로퍼티 키로 사용한 메소드를 구현**하는 것에 의해 순회 가능한 자료 구조인 이터러블이 된다.

rest 파라미터는 반드시 마지막 파라미터이어야 하지만 Spread 연산자를 사용한 인수는 자유롭게 사용할 수 있다.

## 배열에서 사용

```javascript
// ES6
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

// ...arr2는 [4, 5, 6]을 개별 요소로 분리한다
arr1.push(...arr2) // == arr1.push(4, 5, 6);

console.log(arr1) // [ 1, 2, 3, 4, 5, 6 ]
```

```javascript
Write a function called "joinArrayOfArrays".

Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.

let joinArrayOfArrays = (arr) => {
  // your code here
  let newArr = [];
  arr.forEach(ele => {
    newArr.push(...ele);
    })
    return newArr;
}

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']

```

## Spread 연산자를 이용한 배열 복사

```javascript
// ES5
var arr = [1, 2, 3]
var copy = arr.slice()

console.log(copy) // [ 1, 2, 3 ]

// copy를 변경한다.

// ES6
const arr = [1, 2, 3]
// ...arr은 [1, 2, 3]을 개별 요소로 분리한다
const copy = [...arr]
```

## 객체에서 사용하는 경우

Spread 연산자를 사용하면 객체를 손쉽게 병합 또는 변경할 수 있다.

```javascript
// 객체의 병합
const merged = { ...{ x: 1, y: 2 }, ...{ y: 10, z: 3 } }
console.log(merged) // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed = { ...{ x: 1, y: 2 }, y: 100 }
// changed = { ...{ x: 1, y: 2 }, ...{ y: 100 } }
console.log(changed) // { x: 1, y: 100 }

// 프로퍼티 추가
const added = { ...{ x: 1, y: 2 }, z: 0 }
// added = { ...{ x: 1, y: 2 }, ...{ z: 0 } }
console.log(added) // { x: 1, y: 2, z: 0 }
```

Object.assign 메소드를 사용해도 동일한 작업을 할 수 있다.

```javascript
// 객체의 병합
const merged = Object.assign({}, { x: 1, y: 2 }, { y: 10, z: 3 })
console.log(merged) // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed = Object.assign({}, { x: 1, y: 2 }, { y: 100 })
console.log(changed) // { x: 1, y: 100 }

// 프로퍼티 추가
const added = Object.assign({}, { x: 1, y: 2 }, { z: 0 })
console.log(added) // { x: 1, y: 2, z: 0 }
```

Spread 연산자를 사용하면 유사 배열 객체(Array-like Object)를 배열로 손쉽게 변환할 수 있다.

```javascript
const htmlCollection = document.getElementsByTagName('li')

// 유사 배열인 HTMLCollection을 배열로 변환한다.
const newArray = [...htmlCollection] // Spread 연산자

// ES6의 Array.from 메소드를 사용할 수도 있다.
// const newArray = Array.from(htmlCollection);
```

advanced를 얻을 거면 사전조건을 명확히 해야
