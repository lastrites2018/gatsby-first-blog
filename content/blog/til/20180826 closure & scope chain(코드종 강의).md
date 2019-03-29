---
title: 20180826 closure & scope chain(코드종 강의)
date: 2018-08-26
category: TIL
---

```javascript
기존 자바스크립트 클로저 스코프 설명은 너무 상세하게 설명하기 때문에 오히려 초심자에겐 힘들다. 간단한 설명 :

function outer() {
    var a = 1;
    console.log(a);
    // a가 어떤 값인지 찾는 것이 scope

    function inner() {
        var a = 2;
        console.log(a);
    }
    inner();
}

outer();
// 표가 생기는데, 표가 scope!
// 자바스크립트는 함수단위로 scope가 생성.

var d = 'X'; // global scope

function outer() {
    var a = 1;
    var b = 'B';

    function inner() {
        var a = 2;
        console.log(a);
        console.log(b); // B
        // 여기서 a를 찾는 것이 scope
    }
    return inner;
}
var someFun = outer();
someFun();
->
outer가 실행된 다음에도 outer 내부의 변수 b에 접근 가능해
B가 찍힘.

// 뭔가 찾을때 들여다 보는 표가 scope.
// inner의 표에서 scope를 찍음.
// console.log(b);에서 inner에서 b가 없기 때문에, 다음에 찾는 표는 outer(); 왜냐하면 inner가 생성된 곳이 outer 범위 안에 있기 때문에.

```
