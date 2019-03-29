---
title: 20180901 poiemaweb 객체object와 변경불가성Immutability
date: 2018-09-01
category: TIL
---

## 객체 리터럴?

```javascript
var foo = {
  val: 10,
}
// foo를 위와 같이 생성한 것이 바로 객체 리터럴. 이때 변수 foo는 객체 자체를 저장하고 있는 것이 아니라
// 생성된 객체의 참조값(address)를 저장하고 있다.
```

**객체는 참조(Reference) 방식으로 전달된다. 결코 복사되지 않는다.**

```javascript
var foo = { val: 10 }
var bar = { val: 10 }

foo === bar // false 변수
// foo와 변수 bar는 비록 내용은 같지만 별개의 객체를 생성하여 참조값을 할당하였다.
// 따라서 변수 foo와 변수 bar의 참조값 즉 어드레스는 동일하지 않다.

var a = {},
  b = {},
  c = {} // a, b, c는 각각 다른 빈 객체를 참조
console.log(a === b, a === c, b === c) // false false false

a = b = c = {} // a, b, c는 모두 같은 빈 객체를 참조
console.log(a === b, a === c, b === c) // true true true
```

## Pass-by-value

기본자료형의 값은 값value이 복사되어 전달된다. 이를 Pass-by-value(값에 의한 전달)이라 한다. 기본자료형은 값이 한번 정해지면 바꿀 수 없다.(immutable) 또한 이들 값은 런타임(변수 할당 시점)에 메모리의 스택(stack segment)에 고정된 메모리 영역을 점유하고 저장된다.

```
var a = 1;
var b = a;
// 이 떄 변수 a의 값 1이 복사되어 변수 b에 저장된다.
```

## 객체의 분류

[Built-in Object(내장 객체)](https://poiemaweb.com/js-built-in-object)는 웹페이지 등을 표현하기 위한 공통의 기능을 제공한다. 웹페이지가 브라우저에 의해 로드되자마자 별다른 행위없이 바로 사용이 가능하다. Built-in Object는 아래와 같이 구분할 수 있다.

- [Standard Built-in Objects (or Global Objects)](https://poiemaweb.com/js-standard-built-in-objects)
- [BOM (Browser Object Model)](http://www.w3schools.com/js/js_window.asp)
- [DOM (Document Object Model)](https://poiemaweb.com/js-dom)

**Standard Built-in Objects**(표준 빌트인 객체)를 제외한 BOM과 DOM을 **Native Object**라고 분류하기도 한다. 또한 사용자가 생성한 객체를 **Host Object**(사용자 정의 객체)라 한다.

- Host Object(사용자 정의 객체)

  사용자가 생성한 객체 . constructor 혹은 객체 리터럴을 통해 사용자가 객체를 정의하고 확장시킨 것이기 때문에 Built-in Object 와 Native Object가 구성된 이후에 구성된다.

## Immutability

Immutability(변경불가성)는 객체가 생성된 이후 그 상태를 변경할 수 없는 디자인 패턴을 의미한다. Immutability은 함수형 프로그래밍의 핵심 원리이다. 객체는 참조(reference) 형태로 전달하고 전달 받는다. 객체가 참조를 통해 공유되어 있다면 그 상태가 언제든지 변경될 수 있기 때문에 문제가 될 가능성도 커지게 된다. 이는 객체의 참조를 가지고 있는 어떤 장소에서 객체를 변경하면 참조를 공유하는 모든 장소에서 그 영향을 받기 때문.

# immutable value vs. mutable value

Javascript의 기본 자료형(primitive data type)은 변경 불가능한 값(immutable value)이다.

- Boolean
- null
- undefined
- Number
- String
- Symbol (New in ECMAScript 6)

기본 자료형 이외의 모든 값은 객체(Object) 타입이며 객체 타입은 변경 가능한 값(mutable value)이다. **즉, 객체는 새로운 값을 다시 만들 필요없이 직접 변경이 가능하다는 것이다.** **C 언어와는 다르게 Javascript의 문자열은 변경 불가능한 값(immutable value) 이다. 이런 값을 “primitive values” 라 한다.** (변경이 불가능하다는 뜻은 메모리 영역에서의 변경이 불가능하다는 뜻이다. 재할당은 가능하다.)

결과의 복사본을 리턴하는 문자열의 메소드 slice()와는 달리 배열(객체)의 메소드 push()는 `직접 대상 배열을 변경`한다. 그 이유는 배열은 객체이고 객체는 immutable value가 아닌 변경 가능한 값이기 때문이다.

```javascript
var user = {
  name: 'Lee',
  address: {
    city: 'Seoul',
  },
}

var myName = user.name // 변수 myName은 string 타입이다.

user.name = 'Kim'
console.log(myName) // Lee

myName = user.name // 재할당
console.log(myName) // Kim
```

user.name의 값을 변경했지만 변수 myName의 값은 변경되지 않았다. 이는 변수 myName에 user.name을 할당했을 때 **user.name의 참조를 할당하는 것이 아니라 immutable한 값 ‘Lee’가 메모리에 새로 생성되고 myName은 이것을 참조하기 때문이다.** 따라서 user.name의 값이 변경된다 하더라도 변수 myName이 참조하고 있는 ‘Lee’는 변함이 없다.

```javascript
var user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul',
  },
}

var user2 = user1 // 변수 user2는 객체 타입이다.

user2.name = 'Kim'

console.log(user1.name) // Kim
console.log(user2.name) // Kim
```

위의 경우 객체 user2의 name 프로퍼티에 새로운 값을 할당하면 객체는 변경 불가능한 값이 아니므로 객체 user2는 변경된다. 그런데 **변경하지도 않은 객체 user1도 동시에 변경된다. 이는 user1과 user2가 같은 어드레스를 참조하고 있기 때문이다.**

출처 : poiemaweb.com 정리
