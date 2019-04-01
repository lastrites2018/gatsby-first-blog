---
title: Immersive Sprint - DATA Structure Day 4
date: 2018-09-22
category: TIL
---

## checkpoint 7~checkpoint 8

```javascript

setTimeout(펑션, 시간)

1. alice.sayHi(); // 호출
function)(익명 함수를 만들어놓았고), 실행을 하는 것은 setTimeout이 한다. 1000 밀리 세컨즈 후에.
1번은 앨리스가 실행하는 거고 실행을 하는 주체, 닷(dot) 잘 보면 된다.

2. alice가 실행하는 것처럼 보이지만 function만 던져주고
alice.sayHi-> 메소드만을 끄집어내는 것일뿐
function.alert.this.name.sayhi()
2번은 실행을 하는 것이 alert(this.name + 'says hi') 주체가 없기 때문에 window,
그리고 실행은 안 한 상태로 메소드만 가져왔기 때문에 1초후에 실행

3. 이건 함수
주체에 alice를 bind

4. setTimeout(alice.sayHi(), 1000)
즉시 실행을 넣어버린 것 setTimeout 잘못 쓰는 예제

6. call이기 때문에 즉시 실행. (call,apply 는 즉시 실행, bind는 새로운 함수를 반환해줌)

이후는 녹화 강의 다시 들을 것.


checkpoint 08
time이랑 f를 받는데,

비동기 영역 안에서는 순서가 없다
비동기로 부른 애들이 불려나올 시간은 늘어날 수 있지만 줄어들 수는 없다

wait(0, f) 비동기 영역
// second 수가 중요한게 아니다. 비동기인 이상 일단 비동기 영역으로 방문하게 되어있다.
console.log('hello') 동기


wait(100, 함수)
console.log('hello')
wait(0,f)

콜백을 통해 개별적으로 순서를 확정시켜줄 수 있음

4. exercise(callback())

6. function foo () {
  var data = 10;

  bar(function (players) {
    data = players;
  });
  // 비동기는 저 멀리 여행 가버리고,
  return data; // 리턴해버림.
}

function bar (callback) {
  setTimeout(function () {
    callback(20);
  }, 500);

7. 다시 공부해보기

* 함수들이 아무리 많아도, 다 실행된 다음에 당장 콜 스택에 들어올 애들이 없을때 이벤트 루프에서 올려줌.
```

## 팁

개발자도구 - Eager evalution - 엔터 안 쳐도 값 볼 수 있음

## 공부할 부분

!! (애매한 값을 확실하게 Boolean 값으로 바꿔줌)

contains -> mdn 찾아보고 사용할 것
