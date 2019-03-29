---
title: poiemaweb.com 연산자
date: 2018-08-28
category: TIL
---

## 타입 변환

```javascript
// 변수 x의 값을 숫자 타입으로 변환
console.log('Number : ' + Number(x)) // 0

// 변수 x의 값을 문자열 타입으로 변환
console.log('String : ' + String(x)) // 'false'

// 변수 x의 값을 불리언 타입으로 변환
console.log('Boolean: ' + Boolean(x)) // false
```

## 삼항 연산자ternary operator

조건 ? 조건이 true일때 반환할 값 : 조건이 false일때 반환할 값

```javascript
var condition = true
var result = condition ? 'true' : 'false'
console.log(result) // 'true'
```

## 단축 평가 Short-Circuit Evalution

논리 연산자가 Boolean 값과 함께 사용하지 않을 경우, Boolean 값을 반환하지 않을 수 있다. 이는 논리 연산자가 피연산자 중 하나를 반환하기 때문이다. 논리 연산자는 다음의 규칙을 따라 "단축 평가"로 검사된다.

|       평가식        | 평가 결과 |
| :-----------------: | :-------: |
| true \|\| anything  |   true    |
| false \|\| anything | anything  |
|  true && anything   | anything  |
|  false && anything  |   false   |

Boolean 값으로 평가하기 위해 참조하여야 할 곳까지 진행한 후, 평가를 중지하게 된 계기가 된 값을 반환한다.

```javascript
var foo = 'Cat' && 'Dog' // true && true returns 'Dog'
```

'Cat'은 true로 평가되므로 연산 결과를 알기 위해 'Dog'까지 평가해보아야 하고 따라서 평가를 중지하게 된 계기가 된 값('Dog')을 반환한다.

```javascript
var foo = false && 'Dog' // false && true returns false
```

더 이상 진행하지 않아도 결과를 반환할 수 있기에 평가는 중지되고 평가를 중지하게 된 계기가 된 값인 false가 반환.

```javascript
var foo = 'Cat' || 'Dog' // true && true returns 'Cat'
```

'Cat'이 true로 평가되었기 때문에 평가는 중지되고 Cat이 반환.

```javascript
var o1 = 'Cat' || 'Dog'  // true  || true returns Cat
var o2 = false || 'Cat'  // false || true returns Cat
var o3 - 'Cat' || false; // true  || false returns Cat

// &&(논리곱) 연산자
var a1 = 'Cat' && 'Dog'; // true & true returns Dog
var a2 = false && 'Cat'; // false && true returns false
var a3 = 'Cat' && false; // true && false returns false

```

## 타입 연산자 Type Operators

| Operator   | Description                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| typeof     | 피연산자의 데이터 타입(자료형)을 문자열로 반환한다. null과 배열의 경우 object, 함수의 경우 function를 반환하는 것에 유의하여야 한다. |
| instanceof | 객체가 동일 객체형의 인스턴스이면 `true`를 반환한다.                                                                                 |

```javascript
typeof undefined //undefined
typeof null // object(설계적 결함)
typeof undeclared //undefined(설계적 결함)
```

## !!

!!의 역할은 피연산자를 Boolean 값으로 변환하는 것.

```javascript
console.log(!!1); // true
console.log(!!0); // false
console.log(!!'string'); // true
console.log(!!''); // false
console.log(!!null); // false
console.log(!!undefined); // false

객체(배열 포함)의 경우 빈 객체라도 존재하기만 하면 true로 변환된다.
즉, 객체나 배열이 undefined, null이 아니면 truthy value로 취급된다.
객체의 존재 확인 후 그 결과를 반환해야 하는 경우, !!를 사용하면 강제로 피연산자를 Boolean으로 형 변환할 수 있다.
console.log(!!{}); // true
console.log(!![]); // true

```
