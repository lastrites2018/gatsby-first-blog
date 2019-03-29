---
title: IM08D03 DATA Structure Day 1 - OOP, QueueStack
date: 2018-09-19
category: TIL
---

## checkpoint 3 this

```js
1. this는 arrow function 일 경우에만 lexicial

'this' means An object that the invoked function points to when executing.

2.
var x = 10;
var strangeAdd = function (y) {
  var x = 20;
  return this.x + y
};
result = strangeAdd(10);

'this'는 window
    -> function invocation, () 로 호출하는 경우엔 bind를 하지 않는 이상은 보통 window


3.
Look to the function in *which* it is defined
- that's what the context is bound to.
// 이건 arrow function 에서의 this 설명.

which(lexical 하다는 의미) arrow function을 사용한 함수는 '어디에서' 호출되는지만 고려해도 되기 때문.

화살표 함수는 언제나 자신을 포함하는 외부 스코프에서 this를 계승 받는다.
화살표 함수는 자신만의 this를 생성하지 않고 자신을 포함하고 있는 상위 컨텍스트로 부터 this를 계승 받는다.
이를 Lexical this라 한다

5. window or the global object.
6. obj
7.
// 틀림
var obj = {
  foo: function(){
    console.log(this);
  }
}
var fn = obj.foo;
fn();

window or the global object.

8.
var obj = {
  foo: function(){
    console.log(this);
  }
}
var obj2 = {
  foo: obj.foo
}

obj.foo.call(obj2);

//obj2
    obj.foo.call(obj2);
    call 나온 경우 앞뒤 안 보고 ()안만 보면 됨.

```

## free function invocation

```javascript
foo() // function invocation
obj.foo() // method invocation
```

-> free function invocation은 그냥 function invocation이라고 생각하면 됨. free에 특별한 의미는 없다.

## sprint review

멈춰서서 생각하거나 되돌아보지 않을 경우엔 실수를 반복한다. 그래서 되돌아보기 위한 장치가 필요하다.

## Computer Programming

CPU는 연산.

Compile -> 기계어로 변환. -> 101010으로 한번 더 바꿈.

컴파일은 오래 걸림. embeded programming(C, 한정된 메모리에서 최적화하기 위해 애를 쓰게 됨)

---

ES6 -> ES5 transpiler -> babel

HL languages -> High-Level

기존 프로그래밍은 procedural languages 위에서 아래로 내려가는 식의 절차적인 언어(procedural Languages)

## OOP(Object-Oriented Languages)

과거엔 웹 앱의 개념이 없었음

웹 사이트 - 정적static임

웹 앱 - 동적임dynamic

OOP는 확고한 무언가가 아니라 추상적인 프로그램 디자인 철학

- OOP는 세상이 객체로 이루어져있다고 생각하는 게 핵심 아이디어다.

  -- 세상을 객체로 생각하기에 객체를 지향하는 프로그래밍인 거겠지.

- 클래스는 객체를 만들기 위한 프로토타입이자 아이디어, 청사진이다.

뭔가 하나의 틀을 만들자! - 객체!

class -> 자바스크립트는 결국 function인데, (function은 object니까??)

- 특징(property)과 액션(method)

정적static인 성질(property), 동적인 메소드(dynamic) 2가지로 나눔.

## OOP의 4가지 컨셉

- 캡슐화Encapsulation

두 가지 색으로 구분되는 하나의 알약을 떠올려보자.
하얀색 면엔 밸류variables를 담고, 파란색 면엔 메소드methods를 담는다.
그 두 가지를 가지고 있는 캡슐이 클래스.

자바스크립트는 외부에서 수정 가능했다. 그 문제를 해결한 타입스크립트 이후 자바 세계가 달라짐.

캡슐화를 잘 해놓으면 하나만 바꾸면 되는데, 그렇지 못하면 전부 다 바꿔야 하니까 문제가 생김.

- 상속 Inheritance

  재사용성이 높아짐.

  class는 틀 , instance는 object, 즉 틀로 찍은 object

  `new DATE` -> 여기서 DATE가 틀

- 추상적 Abstarction

  무대 뒤(내부)를 보여주지 않음. 계산기를 떠올려보자. 중간과정을 보여주지 않고, 입력과 결과만 보여준다.

- 다형성 Polymorphism ??? (어려운 개념)

  아빠 class의 Draw()메소드와 아들 클래스sub class에서 쓰는 메소드가 다를 수 있다, 상속 받았는데도.

객체 지향 자체가 철학에 가깝기 때문에 추상적으로 대답할 수밖에 없다.
누가 물어본다면 OOP의 특징을 잘 설명하려고 할 것.

## 알고리즘

- 알고리즘 : 논리

페어 프로그래밍에선 무작정 코딩하기보다, 뭘 물어보는지를 먼저 파악하고 서로 동의하는 것이 첫 걸음이 되어야 한다.

- 슈도코드 : 스케치

중요한 건 전략이지, 문법이 아니다.

- 알고리즘을 설계할 때의 고려할 두 요소

시간

공간 - 부동산 개념

# 자료구조

데이터를 어떤 공간에 어떻게 저장할 것인지 설계

ex) Array, Object

> 적절한 자료 구조를 선택하는 것이 좋은 알고리즘을 만들 수 있다

- Queue : 줄

선입선출. 먼저 들어온 것이 먼저 빠짐. (KFC 줄 서기 생각)

> 과제에서 큐 구현시에 최적화는 신경쓰지 않고 구현한다

- Stack : 쌓인 접시 또는 프링글스

  선입후출.
  뒤에 들어온 애가 먼저 나감, 접시가 쌓여있는 걸 생각해보자. 맨 위에 올라온 접시가 맨 먼저 사용된다.

  - 전자계산기
  - 미로
  - 컴퓨터 메모리 관리 (call, stack)
