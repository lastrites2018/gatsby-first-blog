---
title: ES6 Arrow Function
date: 2018-09-11
category: TIL
---

## Arrow Function

```javascript
// 매개변수에 따라 차이
() => { ... } // 매개 변수 없을 경우
x  => {...} // 한 개인 경우에, 소괄호 생략 가능
(x, y) => { ... } // 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다.

// 함수 몸체 지정 방법
x = { return x * x} // single line block
x = > x * x // 함수 몸체가 한 줄의 구문이라면 중괄호를 생략할 수 있으며 암묵적으로 return 된다.
            // 위 표현과 동일하다.

() => { return { a: 1}; }
() ==> ({ a: 1 })  // 위와 동일. 객체 반환시에 소괄호를 사용한다.


() => { // multi line block
  const x = 10;
  return x * x;
}

```

- 화살표 함수는 익명 함수로만 사용 가능하다. 따라서 화살표 함수를 호출하기 위해서는 함수 표현식을 사용한다.

* function 키워드로 생성한 일반 함수와 화살표 함수의 가장 큰 차이점은 this이다.

- 일반 함수의 this

일반 함수의 경우는, 해당 함수를 호출하는 패턴에 따라 this에 바인딩되는 객체가 달라진다. 콜백 함수 내부의 this는 전역 객체 window를 가리킨다.

- 화살표 함수의 this

화살표 함수는 언제나 자신을 포함하는 외부 스코프에서 this를 계승받는다. 다시 말해 **화살표 함수는 자신만의 this를 생성하지 않고 자신을 포함하고 있는 상위 컨텍스트로부터 this를 계승 받는다.** 이를 Lexical this라 한다.

- 화살표 함수로 메소드 정의하는 건 피해야 한다.

  화살표 함수 내부의 this는 메소드를 호출한 객체를 가리키지 않고 상위 컨텍스트인 전역 객체 window를 가리킨다. 이 경우에 메소드를 위한 단축 표기법 축약 메소드 표현을 사용하면 된다.

```javascript
// Good
const person = {
  name: 'Kim',
  sayHi() {
    // === sayHi : function() {
    console.log(`Hi ${this.name}`)
  },
}

person.sayHi() // Hi Kim
```

- 화살표 함수는 prototype 프로퍼티를 가지고 있지 않다.

## addEventListener 함수의 콜백 함수

addEventListener 함수의 콜백 함수를 화살표 함수로 정의하면 this가 상위 컨택스트인 전역 객체 window를 가리킨다. (앞의 설명처럼 화살표 함수는 자신만의 this를 생성하지 않고 상위 컨텍스트에서 this를 계승받기 때문.)

```javascript
// Bad
var button = document.getElementById('myButton')

button.addEventListener('click', () => {
  console.log(this === window) // => true
  this.innerHTML = 'Clicked button'
})
```

따라서 addEventListener 함수의 콜백 함수에서 this를 사용하는 경우, function 키워드로 정의한 일반 함수를 사용하여야 한다. 일반 함수로 정의된 addEventListener 함수의 콜백 함수 내부의 [this](https://poiemaweb.com/js-event#43-dom-level-2-event-listener)는 이벤트 리스너에 바인딩된 요소(currentTarget)를 가리킨다. 아래의 경우는 이벤트 리스너의 타겟인 button을 가리킴.

```javascript
// Good
var button = document.getElementById('myButton')

button.addEventListener('click', function() {
  console.log(this === button) // => true
  this.innerHTML = 'Clicked button'
})
```

학습 : http://poiemaweb.com
