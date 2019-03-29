---
title: 20180903 poiemaweb.com 함수Function의 프로퍼티property
date: 2018-09-03
category: TIL
---

# 함수 객체의 프로퍼티

함수는 객체이다. 따라서, 함수도 프로퍼티를 가질 수 있다.

## 1. arguments 프로퍼티

매개변수(parameter)는 인수(argument)로 초기화된다.

- 매개변수의 갯수보다 인수를 적게 전달했을 때(multiply(), multiply(1)) 인수가 전달되지 않은 매개변수는 `undefined`으로 초기화된다.
- 매개변수의 갯수보다 인수를 더 많이 전달한 경우, 초과된 인수는 무시된다.

arguments 객체는 배열의 형태로 인자값 정보를 담고 있지만 실제 배열이 아닌 **유사배열객체(array-like object)**이다.

유사배열객체란 length 프로퍼티를 가진 객체를 말한다. 유사배열객체는 배열이 아니므로 배열 메소드를 사용하는 경우 에러가 발생하게 된다.

## 2. caller는 자신을 호출한 함수를 의미

```javascript
function foo(func) {
  var res = func()
  return res
}

function bar() {
  return 'caller : ' + bar.caller
}

console.log(foo(bar))
/* 
  caller : function foo(func) {
  var res = func();
  return res;
}
*/

console.log(bar())
//"caller : null" bar()를 호출한 함수가 없기 때문에 null을 반영.
```

## 3. 함수에서도 length 사용 가능

length 프로퍼티는 함수 정의 시 작성된 매개변수parameter 갯수를 의미한다.

```javascript
function foo() {}
console.log(foo.length) // 0

function bar(x) {
  return x
}
console.log(bar.length) // 1

function baz(x, y) {
  return x * y
}
console.log(baz.length) // 2
```

## 4. name 프로퍼티

함수명을 나타낸다. 기명함수의 경우 함수명을 값으로 갖고 익명함수의 경우 빈 문자열을 값으로 갖는다.

```javascript
// 기명 함수표현식(named function expression)
var namedFunc = function multiply(a, b) {
  return a * b
}
// 익명 함수표현식(anonymous function expression)
var anonymousFunc = function(a, b) {
  return a * b
}

console.log(namedFunc.name) // multiply
console.log(anonymousFunc.name) // ''
```

## 5. **proto** 프로퍼티

ECMAScript spec에서는 **모든 객체는 자신의 프로토타입을 가리키는 [[Prototype]]이라는 숨겨진 프로퍼티를 가진다** 라고 되어있다. 크롬, 파이어폭스 등에서는 숨겨진 [[Prototype]] 프로퍼티가 **proto** 프로퍼티로 구현되어 있다. 즉, **proto**과 [[Prototype]]은 같은 개념이다.

```javascript
function square(number) {
  return number * number
}

console.dir(square)
```

square() 함수 역시 객체이므로 [[Prototype]] 프로퍼티(**proto** 프로퍼티)을 가지며 이를 통해 자신의 부모 역할을 하는 프로토타입 객체를 가리킨다.

함수의 프로토타입 객체는 `Function.prototype`이며 이것 역시 함수이다.

## 6. prototype 프로퍼티

함수 객체만이 가지고 있는 프로퍼티로 자바스크립트 객체지향의 근간이다.

**주의해야 할 것은 함수 객체만이 가지고 있는 prototype 프로퍼티는 프로토타입 객체를 가리키는 [[Prototype]] 프로퍼티(**proto** 프로퍼티)와는 다르다는 것이다.**

prototype 프로퍼티와 [[Prototype]] 프로퍼티는 모두 프로토타입 객체를 가리키지만 관점의 차이가 있다.

- [[Prototype]] 프로퍼티
  - 모든 객체가 가지고 있는 프로퍼티이다.
  - **객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리키며 함수 객체의 경우 Function.prototype를 가리킨다.**
- prototype 프로퍼티
  - 함수 객체만 가지고 있는 프로퍼티이다.
  - **함수 객체가 생성자로 사용될 때 이 함수를 통해 생성된 객체의 부모 역할을 하는 객체를 가리킨다.**
  - 함수가 생성될 때 만들어 지며 `constructor` 프로퍼티를 가지는 객체를 가리킨다. 이 `constructor` 프로퍼티는 함수 객체 자신을 가리킨다.

-> 아직 명확히 이해할 수 있는 개념은 아니다.
