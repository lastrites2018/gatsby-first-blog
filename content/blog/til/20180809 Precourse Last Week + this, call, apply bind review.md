---
title: Precourse Last Week + this, call, apply bind review
date: 2018-08-09
category: TIL
---

# 어떻게 공부해야 하는가

- TIL 매일 매일 정리할 것.

오늘 무엇을 배웠는지, 이 부분이 어려웠는데, 이렇게 풀었다. 블로깅 할때도 유리.

- 혼자 공부하기 좋은 책

더글라스 크락포드의 자바스크립트 핵심 가이드 책

- 디버깅 연습

debuging 못하면 안 됨.

chrome devtools 제대로 공부할 것 디버깅

내가 어떻게 디버깅을 할 것인가

배운 것을 바탕으로 advanced로

http://lesterbx.github.io/

https://lesterbx.github.io/trello-clone-vanilla/

https://developers.google.com/web/tools/chrome-devtools/?hl=ko

**vue.js angular.js react.js**

프론트엔드 전문적

한 분야에서 전문가가 되어야 한다.

약한 부분은 있었지만 그래도 전체의 80%는 알고 있었다

끊임없이 배워야 하는 직업, 확실히 공부할게 많고 공부를 좋아하는 사람이 할 수 있는 직업

프리코스에서 기본기가 없어서 더 오래걸리는 경우가 많다. 늦어지는 분들은 복습을 안 한 분들, 프리코스 복습할 것. 콜백 이터레이터 애매하게 알고 있는 걸 확실하게 더 복습하는 걸 추천. 당연히 다 비슷비슷하게 느리기 때문에, 프리코스에서 잘 모르는 부분들을 확실하게 하는 것.

백엔드는 설계 시야가 넓고 프론트는 한 곳만

아이디어가 돋보이는 게 프론트엔드

리눅스 명령어 많이 공부할 것, 기본임.

리눅스 명령어 권한,

파일 옮기고 닫고 삭제하고 권한주고 특정 사용자한테 권한 주고 미리미리 해볼 것

node.js 세계의 가장 많이 쓰는 express.js

인증 authentication

callback promise async await event loop

## this 복습

this가 뭐에요? 한 마디로? 빨대? 참조?

실행excution 컨텍스트context는 함수가 어떻게 불리는지에 따라 결정된다

scope가 한 마디로 뭐에요? : 유효 범위

변수가 스코프 체인을 따라서 참조할 수 있는 유효범위

closure 외부 변수를 참조할 수 있는 내부 함수

---

apply()

bind()

call()

function에서 제공되는 메소드

## 프로토타입 prototype

Array.something()는 Array 클래스에서만 작동

Array.prototype.something()는 Array 인스턴스에서만 작동. 프로톹타입이 붙은 애들은.

이 둘의 차이점은?

var arr=[1,2,3,4];
arr.isArray();

```javascript
var arr=[1,2,3,4];
arr.isArray();

var arr = [1,2,3,4];
위와 같음 arr = new Array(1,2,3,4);

VM9965:1 Uncaught TypeError: arr.isArray is not a function
    at <anonymous>:1:5

Array.isArray는 있음

```

## prototype의 의미?

인스턴스가 생성 될 때 원형(original foam),

즉 프로토타입(prototype)의 모양대로 인스턴스가 생성.

prototype 붕어빵 틀

instance는 붕어

인스턴스의 메소드는 Object.prototype.

Object는 사실 함수(function)이다! // 디벨로퍼에서 찍어보면

```
Object
ƒ Object() { [native code] }
```

Car.prototype.ride = function () {

}

카라는 프로토타입에 라이드라는 메소드를 넣어주는 것

## 클래스랑 뭐가 다르지?

- JavaScript는 원래는 클래스 개념이 없었음. 지금도 prototype 기반 언어.
- prototype 기반으로 객체 지향 프로그래밍을 흉내냄
- 문법적인 편의로 class란 keyword를 도입 (ES6)

- 자바스크립트에서 기본적으로 제공되는 객체에 사용자 정의 메소드를 직접 추가할 수는 있음(그러나, 추천하지 않음)

- 메소드 확장은, 다른 코드와 충돌을 일으킬 수 있음

직접 객체(클래스)를 작성할 땐 프로토타입을 사용하세요.

---

foo.call (thisarg,)

첫번째는 무조건 this가 들어감

foo.bind

foo.bind

identify.call(me);

speak.call(me);

speak 그냥 함수 ()로 실행하면 this에 윈도우가 바인딩됨. 명시적으로 me를 바인딩 시켜서 this에 대입해주는 것.

프로토타입은 함수에서만 붙일 수 있어요. 그리고 class처럼 쓸 함수 대문자 Car 같은 것에만 쓸 수 있어요.

-> 아까 Array도 함수였고, Object도 함수였기 때문에.

```javascript
Object
ƒ Object() { [native code] }
Array
ƒ Array() { [native code] }
```

var add = function(x,y) {

this.val = x + y;

}

add.apply([2,8])는 apply 배열로

add.call(2,8)

## 왜 .call을 쓰나요?

arguments가 뭔가요?

- 유사 어레이 array-like objects

```javascript
function foo() {
  console.log(arguments) //"hello" "1" "2" "world"
  debugger
}
foo('hello', 1, 2, 'world')
```

_call의 첫번째 인자는 this로 삼을 녀석을 넣는다_

Array.prototype.slice.call(arguments);

arguments를 array로 변환시켜주는 자주 쓰는 패턴.

```javascript
.call을 컨스트럭터 체인을 쓰기 위해 사용할 수 있다
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.print = function () {
   console.log(this.name + ' ' + this.price);
}
var mouse = new Product('mouse', 1000);
mouse.name
mouse.price
function Food(name, price) {
    Product.call (this, name, price);
    this.taste = 'spicy';
}
var noodle = new Food('불닦볶음면', 2000);
noodle.tste

기능만 불러올 뿐이지 this는 instance 자신이 됨. new키워드 붙으면 다 인스턴스.
```

## apply 쓰기

var arr = [7,35,2,8,21];

Math.min.apply(null, arr);

Math는 new Math 하고 만들 수 없음.

두번째 파라미터는 항상 배열이 들어감.

Math는 인스턴스를 가질 수 있는게 아니라서 this가 무의미하기 때문에 null이 들어감.

## bind

실행시키는 애가 아니라, 새로운 함수를 반환

함수를 리턴해주는 함수는? 클로져

- Function.prototype.bind

  - 인자로 넘겨준 객체와 연결(bind)된 새로운 함수 반환
  - callback 함수를 특정 객체와 연결하고 싶을때 사용

  fn.bind(thisArg[, arg1[, arg2[,...]]]])

setTimeout(function() {

console.log('1초가 지났어요');

}, 1000)

1000 밀리 세컨즈 = 1초

이 바인드 부분 녹화 영상 보고 복습할 것
