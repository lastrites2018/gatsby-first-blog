---
title: Recursion 2
date: 2018-08-01
category: TIL
---

# Recursion

- Recursion, Recursive way 순환적 방법

자신 안에서 정의했던 함수를 다시 호출함. 모든 Recursion은 for나 while로 대신할 수 있다.

-> 굉장히 면접에서 질문 많이 나오는 문제.

## BASIC FORM OF Recursive Function

```javascript
var function_name = function(input) {
  if (termination_condition) {
    // 종료조건 to prevent infinite recursion, invaild case
    return value
  } else if (base_case) {
    return value
  }

  //recursive case

  return expression_with_recursion_call
}
```

1. Base Case와 Termination condition을 꼭 만들어야 한다.

무한루프가 돌지 않도록 termination_condition -> invaild 들어올 경우를 만들어줘야 한다.

그냥 돌아가는 코드를 짜는 것도 중요하지만, 직관적인 코드를 짜는 것이 더 중요하다. 다른 사람이 쉽게 이해할 수 있는 코드를 짜는 것. 그래서 재귀 함수가 중요하다.

```javascript
// iterator way
function fibonacci(num) {
  var a = 1,
    b = 0,
    temp

  while (num >= 0) {
    temp = a
    a = a + b
    b = temp
    num--
  }
  return b
}
```

```javascript
//recursive way
function fib(num) {
  //num은 피보나치 인덱스
  //base case
  if (num <= 1) {
    return num
  }
  return fib(num - 1) + fib(num - 2)
}
```

Recursion의 단점

직관적인 코드를 짤 때는 좋지만, 호출 횟수가 지나치게 많다. 실행횟수가 급격히 증가. 따라서 메모이제이션 필요.

Recursion USE CASES

- fibonacci numbers
- tree traversal 트리 구조
  - finding a node
  - stringifyJSON -> json.org에서 정보 구할 수 있음. json도 트리구조.
  - getElementsByClassName

```
//슈도 코드로 작성하는 먼저 작성하는 습관?
function findNode(selector) {
document.children.있니(selector)
}
```

- 메모이제이션

  input -> output

  {} key : value

  {} input : output

특정한 입력에 대한 함수의 결과는 변동되지 않으니까 캐싱할 수 있다. 메모이제이션을 사용하면, recursion을 좀 더 효율적으로 만들 수 있다. 리커시브 케이스일 경우에 메모이제이션 해주는 것은 알아둬야 할 기법.

```javascript
//슈도코드로 만든 메모이제이션 피보나치
function memoizefib(num) {
  //num은 피보나치 인덱스
  var cache = {} //input : output
  // base case
  if (num <= 1) {
    return 1
  }
  // fib(num-1)를 캐시에 있는지 확인해서 사용? 없으면 불러오기
  //fib(num-2)
  return memoizefib(num - 1) + memoizefib(num - 2)
}
```

길 찾기 문제, 계단 문제 같은 경우에 recursion으로 풀 수 있음.

- 과제

amazon coding interview question - recursive staircase problem

https://www.youtube.com/watch?v=5o-kdjv7FD0

```javascript
//메모이제이션을 사용한 피보나치 함수
var cache = {}
function fib(n) {
  if (n < 2) {
    return n
  } else if (!cache[n]) {
    cache[n] = fib(n - 1) + fib(n - 2)
  }
  return cache[n]
}
```
