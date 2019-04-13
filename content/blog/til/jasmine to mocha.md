---
title: jasmine to mocha(chai)
date: 2019-01-07
category: TIL
---

```js
// jasmine
//     var input = ['Mars', 'Wayne', 'Mary'];
//     var copy = input.slice(0);
    expect(input.length).toBe(copy.length);

// mocha + chai
    expect(input.length).to.be(copy.length); // TypeError: expect(…).to.be is not a function
    expect(input.length).to.equal(copy.length);
// jasmine처럼 to.be 로 할 수 없음. 함수인 경우엔 equal를 써줘야 함.
// Boolean으로 결과가 나와야 할 테스트인 경우 to.be.true, to.be.false 이런 식으로 변환해줄 수 있음. 다만, 'be'가 소문자인 것에 유의할 것.
the be is an object that affects the meaning of the tests. Therefor you can't call it as it was a function but you need to access its properties or methods. chaijs.com/api/bdd

```

toEqual->to.be.equal
toBe -> to.be.equal
toBeUndefined() -> to.be.undefined
beforeAll -> before or beforeEach
afterAll -> after or afterEach

## 참조

https://raygun.com/blog/mocha-vs-jasmine-chai-sinon-cucumber/
