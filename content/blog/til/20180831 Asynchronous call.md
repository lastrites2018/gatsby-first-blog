---
title: Asynchronous call
date: 2018-08-31
category: TIL
---

## Asynchronous call 비동기 호출

콜백 callback : 파라미터로 넘겨줘서 나중에 실행되는 함수.

> 다른 코드의 인수argument로서 넘겨주는 function을 말한다.

바로 실행되는 녀석이 아니다. ex) iterator(동기함수), event handler(비동기함수, 이벤트가 발생됐을 때, 실행되는 함수이기 때문에)

## EXECUTION AND return

```javascript
otherCode(executableCode) // 그저 함수를 넘겨주는 것이고
otehrCode(executableCode()) // 함수를 실행시킨 리턴값을 넘겨줌.
```

자바 스크립트는 single thread 기반의 언어, 즉 하나의 call stack을 사용한다. 그렇다면 **JavaScript는 어떻게 동시성을 지원하는가?**

- 콜백 함수를 보관하는 공간(task queue)를 마련해놓고
- 동기 작업이 모두 끝나 call stack이 비워지면(execution context가 전부 사라지면)
- (event loop에 의해) 콜백이 실행된다

task를 하나 하나 적어보는 연습이 중요하다.

EVENT-DRIVEN TASKS

- 식당에서 식사하기
- 메뉴를 확인한다.
- 김밥을 주문한다.
- 수저와 젓가락을 탁자에 올려놓는다.
- 김치를 가져온다.
- 식사를 먹는다.
-

```javascript
haveLunch()
- checkMenu()
- order('김밥') // <- 이게 5분이 걸린다면? (return이 무의미해진다)
- putSpoon();
- bringKimchi();
- if(isReady) {
    eat()
}

function haveLunch()
- checkMenu()
- order('김밥') // <- order를 해놓고, 이게 ready 되면 먹자.
- putSpoon();
- bringKimchi();
- if(isReady) {
    eat()
}

-> 간단하게
order('김밥', eat)
//일단 실행하게 하고, 준비되면 (이벤트가 발생하면) 먹도록 하자

비동기는 비동기의 패턴으로 몰아넣는다.
```

## setTimeout(callback, millisecond)

일정 시간 후에 함수를 실행

```javascript
setTImeout(function() {
  console.log('3초 후에 실행')
}, 3000)

// setTimeout에 대응되는 clearTimeout도 있으나 clearInterval를 더 많이 씀.
```

## clearInterval(timerId)

반복 실행중인 타이머를 종료

```javascript
var timer = setInterval(function() {
  console.log('1초마다 실행')
}, 1000)
clearInterval(timer)
// 더 이상 반복 실행되지 않음
```

setTimeout 자체는 동기 함수이나, setTimeout 내부 구현은 비동기이기 때문에, chrome은 0초라는 게 없어서 실제로는 4밀리 세컨즈. task queue에 콜백 함수들이 넘어간다는게 중요.

## ASYNCHRONOUS USE CASES

- event handler
- 타이머에서의 callback
  - animation (DOM을 다루는 logic 등에서 씀.)
- 서버에 자원 요청 (가장 많이 쓰고 중요. Ajax call, db에 뭘 요청할 때)

ASYNCHRONOUS 패턴을 자주 쓸 때, callback을 넘기는 패턴이 굉장히 중요.
