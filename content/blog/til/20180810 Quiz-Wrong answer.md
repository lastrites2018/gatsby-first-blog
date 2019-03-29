---
title: Quiz - Wrong answer
date: 2018-08-10
category: TIL
---

## Quiz - Wrong answer

```javascript
틀린 내용.
window.name = 'window'

var alice = {
  name: 'Alice',
  greet: function () {
    return "Hi I am " + this.name
  }
}

var bob = {
  name: 'Bob',
  greet: alice.greet
}

var greet = alice.greet
var result = greet() // Hi I am window


setTimeout 비교

var name = "Window";
var alice = {
  name: "Alice",
  sayHi: function() {
    alert(this.name + " says hi");
  }
};
var bob = { name: "Bob" };

setTimeout(alice.sayHi.call(bob), 1000);
// 바로 실행


var name = "Window";
var alice = {
  name: "Alice",
  sayHi: function() {
    alert(this.name + " says hi");
  }
};
var bob = { name: "Bob" };

setTimeout(alice.sayHi.bind(alice), 1000);
// 1초 후 실행

pre-section2-scopes-and-closures-03.js
var x = 10;

function outer () {
  x = 20;
  function inner () {
    var x = x + 20;
    return x;
  }
  inner();
}

outer();

var result = x;

How many closures are created in the following code?
 pre-section2-scopes-and-closures-04.js

function add (x, y) {
  return x + y
}

function double (x) {
  return add(x, x)
}

														답 : 1
```

`**Object.create()**` 메서드는 지정된 프로토타입 객체 및 속성(property)을 갖는 새 객체를 만듭니다.

Which of these instantiation patterns rely on prototype chains for method sharing? 다음 중 방법 공유를 위해 시제품 체인에 의존하는 인스턴트화 패턴은 무엇입니까?

답 : Prototypal, Pseudoclassical![스크린샷 2018-08-10 16.54.55](https://user-images.githubusercontent.com/39457256/45210970-0a427480-b2cc-11e8-83d3-49e0b0d31f8e.png)

![스크린샷 2018-08-10 20.57.06](https://user-images.githubusercontent.com/39457256/45211013-29d99d00-b2cc-11e8-80a2-ee783d87bd8b.png)

![스크린샷 2018-08-10 21.02.46](https://user-images.githubusercontent.com/39457256/45211043-38c04f80-b2cc-11e8-887b-f316b106e84a.png)

![스크린샷 2018-08-10 21.05.48](https://user-images.githubusercontent.com/39457256/45211059-4675d500-b2cc-11e8-83b0-c4bf7ef68d61.png)

```javascript
function box(w,h) {
	return {
        width:w,
        height:h,
        getArea: function() {
        return this.width * this.height;
        },
        printArea: function() {
          //  debugger;
            console.log(this.getArea());
        }
    }
}
var b = box(100,20);
setTimeout(b.printArea, 1000);
// VM398:10 Uncaught TypeError: this.getArea is not a function
//    at printArea (<anonymous>:10:30)
// 여기서 this는 윈도우 객체이기 때문에, 윈도우 객체에서 getArea는 있지 않다.
// 기억 : setTimeout은 뭔가를 넘기면 다 global로 처리함!

setTimeout(b.prinArea.bind(???),1000);
           //react에서 bind 많이 씀
           //이벤트 핸들러에서 박아줄때
           //callback 함수가 뭐에요? settimeout의 첫번째 인자가 콜백함수
           //나중에 실행되는 함수가 콜백 함수.



      // ???의 답 : setTimeout(b.printArea.bind(b),100);

function template(name, money) {
    return '<h1>' + name + '</h1></span>' + money + '</span>'};
}

var tmplIngi = template.bind(null, 'Ingi Kim');
var tmplHoyong = tmplate.bind(null, 'Hoyong Lee');
```
