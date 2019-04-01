---
title: Immersive Sprint - underbar review
date: 2018-09-18
category: TIL
---

## check point 1-2 solution

```javascript
// check point 1

6. call stack -> 순서대로 보기

8. outer() 들어가자마자 x를 var로 새로 선언하고,
   inner() 호출만 시키고, 리턴이 없기 때문에 글로벌 scope만 보면 됨.
   만약 리턴을 해준다고 해도, 대입을 새롭게 해주지 않았기 때문에.
   그냥 var x = 10;

var x = 10;
function outer () {
  var x = 20;
  function inner () {
    x = x + 10;
    return x;
  }
  inner();
}

outer();

var result = x;


9. inner의 x는 신경쓰지 않아도 되는 이유는
var로 새로 선언했기 때문에 local scope이기 때문.

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

// check point 2

3. 3,4 번만 아니어도 어느정도 이해를 하고 있는 셈.

4. 클로저의 정의 :
외부 함수의 context에 접근할 수 있는 내부 함수

inner, outer, 전역


```

## underbar rework

```javascript
var a = [1,2,3]
a.slice(0,0) // []; 마지막 0은 포함되지 않기 때문에 빈 배열

//deeply equal 과 strictly equal
eql과 equal의 차이 질문

// array.set -> 중복값 제거해줌

```

each 와 map 차이 -> map은 무조건 리턴

- for ~ of의 경우는 [반복가능한 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols#iterable) ([`Array`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Map`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map), [`Set`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set), [`String`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String), [`TypedArray`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), [arguments](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments) 객체 등을 포함)에 대해서 사용 가능하다. Object에서는 쓸 수 없으나 아래와 같은 방법으로 사용 가능. (출처 - https://esdiscuss.org/topic/es6-iteration-over-object-values)

```javascript
// 일반적인 for of 문
for (let value of iterable) {
  statement
}

// object를 위한 변형
for (let [key, value] of Object.entries(myObj)) {
  // do something with key and value
}
```

## this review

```javascript
setTimeout//은 기본적으로 window binding, free function invocation
function getSalarayFromServer(callback) {
    setTimeout(function() {
        callback(10000);
    },1000};
}


// Name : undefined undefined Salary 10000 나오는 문제를 해결하기 위해
function member() {
    return {
        first : 'Ingi',
        last : 'Kim',
        age : 40,
        printDetail : function() {
            //var that = this; 2번째 대안
            getSalarayFromServer(function(salary) {
                console.log(`Name: ${this.first} ${this.last}`);
                console.log(`Salary : ${salary}`);
            //}.bind(this)); 1. 대안은 bind
        	}
        }

    }
// ES5의 this는 어디에서보다 어떻게 호출되는지가 중요했으나
// arrow function을 사용한 함수는 어디에서 호출되는지만 고려해도 됨
// arguments를 바인딩하지 않음(REST 파라미터 사용)
//



```

```javascript
// Arrow를 안 쓰는 게 직관적인 경우도 있다.
var Foo = () => {}
var foo = new Foo() // error
```

## Strictly Equal vs Deeply equal

Strictly Equal은 === 완전히 동일한 객체를 자신과 비교

Deeply Equal은 동일한 값은 갖지만 === 하지는 않은(자신과는 비교하지 않음)

Object.keys

Object.values

[key,value] Object.entries (key 값과 value 값을 쌍으로 받아옴)

## throttle vs debounce 예제

http://jsfiddle.net/missinglink/19e2r2we

[Throttle, Debounce 개념 잡기](https://medium.com/@progjh/throttle-debounce-%EA%B0%9C%EB%85%90-%EC%9E%A1%EA%B8%B0-19cea2e85a9f) (검색 키워드 throttle 예시)

## 그외 참조

[자바스크립트 현재시간 timestamp](https://webisfree.com/2017-10-18/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%98%84%EC%9E%AC-%EC%8B%9C%EA%B0%84-timestamp-%EC%96%BB%EB%8A%94-%EB%B0%A9%EB%B2%95)

```javascript
timestamp = +new Date()
```
