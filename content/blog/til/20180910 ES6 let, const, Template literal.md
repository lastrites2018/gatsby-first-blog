---
title: ES6 let, const, Template literal
date: 2018-09-10
category: TIL
---

# ES6 문법 익숙해지기

자바스크립트는 함수 레벨 스코프(Function-level scope)를 갖는다.

- 함수 레벨 스코프(Function-level scope)

  함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없다. 즉, **함수 내부에서 선언한 변수는 지역 변수**이며 **함수 외부에서 선언한 변수는 모두 전역 변수**이다.

- 블록 레벨 스코프(Block-level scope)

  코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효하며 코드 블록 외부에서는 참조할 수 없다.

## let

let의 특징

- 블록 레벨 스코프
- 중복 선언 금지 (이름 같은 변수 중복 선언시 문법 오류)
- 호이스팅 : var 키워드로 선언된 변수와는 달리 let 키워드로 선언된 변수를 선언문 이전에 참조하면 참조 에러(ReferenceError)가 발생.

var 키워드는 선언과 초기화가 한번에 이루어진다. let 키워드는 선언 단계와 초기화 단계가 분리되어 진행된다. 참조 에러가 발생하는 이유는 변수가 아직 초기화되지 않았기 때문, 다시 말하면 변수를 위한 메모리 공간이 아직 확보되지 않았기 때문. 스코프 시작 지점부터 초기화 시작 지점까지의 구간을 일시적 사각지대 Teomporal Dead Zone이라고 부른다.

ES6에서는 호이스팅이 발생하지 않는 것처럼 보이지만 그렇지 않다.

```javascript
let foo = 1; // 전역 변수

{
  console.log(foo);
    // 1 정상출력
}

let foo = 1; // 전역 변수

{
  console.log(foo); // RefrenceError : foo is not defined
     let foo = 2; 지역 변수
}
// ES6의 선언문도 여전히 호이스팅이 발생하기에 참조 에러가 발생!

```

- 클로저

- ```javascript
  var ex = []

  for (var i = 0; i < 3; i++) {
    ex.push(function() {
      console.log(i)
    })
  }

  for (var j = 0; j < 3; j++) {
    ex[j]()
  } // 3만 세 번 출력, for 루프의 var i가 전역변수이기 때문.

  // 이 문제를 해결하기 위해선 아래와 같은 즉시실행 함수가 필요. 클로저를 활용해 해결.

  var ex = []
  for (var i = 0; i < 3; i++) {
    ;(function(index) {
      ex.push(function() {
        console.log(index)
      })
    })(i)
  }
  for (var j = 0; j < 3; j++) {
    ex[j]()
  }

  //ex6에서는 클로저 대신 let만 써도 해결
  var ex = []

  for (let i = 0; i < 3; i++) {
    ex.push(function() {
      console.log(i)
    })
  } //let은 for loop에서만 유효한 지역변수, i는 자유 변수로서 for 루프의 생명주기가 종료되어도 변수 i를 참조하는 함수가 존재하는 한 계속 유지.

  for (var j = 0; j < 3; j++) {
    ex[j]()
  }
  ```

- 전역 개체와 let

```javascript
var foo = 123
console.log(window.foo) //123

let bar = 123
console.log(window.bar) //undefined
// let 전역 변수는 전역 객체의 프로퍼티가 아닙니다.
// let 전역 변수는 보이지 않는 개념블록 내에 존재
```

## const

특징은 let과 대부분 동일함. let은 재할당이 자유로운 반면, const는 재할당이 금지. const는 let과 마찬가지로 블록 레벨 스코프.

const FOO = 123;

FOO = 456;

const는 **반드시 선언과 동시에 할당이 이루어져야 함.**

상수는 가독성과 유지보수의 편의를 위해 적극적으로 사용해야 한다. 예를 들어 아래 코드를 살펴보자.

```javascript
// 10의 의미를 알기 어렵기 때문에 가독성이 좋지 않다.
if (rows > 10) {
}

// 값의 의미를 명확히 기술하여 가독성이 향상되었다.
const MAXROWS = 10
if (rows > MAXROWS) {
}

// 조건문 내의 10은 어떤 의미로 사용하였는지 파악하기가 곤란하다. 하지만 네이밍이 적절한 상수로 선언하면 가독성과 유지보수성이 대폭 향상된다.
```

- const와 객체

const는 재할당이 금지된다. 이는 const 변수의 타입이 객체인 경우, 객체에 대한 참조를 변경하지 못한다는 것을 의미한다. 하지만 이때 **객체의 프로퍼티는 보호되지 않는다.** 다시 말하자면 재할당은 불가능하지만 할당된 객체의 내용(프로퍼티의 추가, 삭제, 프로퍼티 값의 변경)은 변경할 수 있다.

```javascript
const user = { name: 'Lee' }

// const 변수는 재할당이 금지된다.
// user = {}; // TypeError: Assignment to constant variable.
// 이처럼 user를 재할당하려고 하면 에러.

// const로 선언한 객체의 내용은 변경할 수 있다.
user.name = 'Kim'

console.log(user) // { name: 'Kim' }
```

객체의 내용이 변경되더라도 객체 타입 변수에 할당된 주소값은 변경되지 않는다. 따라서 객체 타입 변수 선언에는 const를 사용하는 것이 좋다. 만약에 명시적으로 객체 타입 변수의 주소값을 변경(재할당)하여야 한다면 let을 사용한다.

사용 방법

- ES6를 사용한다면 var 키워드는 사용하지 않는다.

- 재할당이 필요한 변수는 let을 사용하고, 변경이 발생하지 않는 (재할당이 필요 없는) 기본 자료형 변수와 객체형 변수에는 const를 사용한다.

## 템플릿 리터럴Template literal

백틱 문자backtick `를 사용한다.

일반적인 문자열에서는 줄바꿈이 허용되지 않고, 공백을 표현하기 위해서는 백슬래스로 시작하는 이스케이프 시퀀스Escape Sequence를 사용해야 한다. ES6는 일반적인 문자열과 달리 여러 줄에 걸쳐 문자열을 작성할 수 있고, 모든 공백은 있는 그대로 적용된다.

`${expression}` 을 템플릿 대입문(Template substitution)이라 하며, 자바스크립트 표현식까지도 사용할 수 있다.

```javascript
console.log(`1 + 1 = ${1 + 1}`)
const name = 'test'

console.log(`Hello ${name.toUpperCase()}`) // Hello TEST
// 함수 실행 가능
```

학습자료 : https://poiemaweb.com/
