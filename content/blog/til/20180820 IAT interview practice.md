---
title: IAT interview practice
date: 2018-08-20
category: TIL
---

- `.call`과 `.apply`의 차이점은 무엇인가요?

* `Function.prototype.bind`을 설명하세요.

- `function foo() {}`와 `var foo = function() {}`에서 foo 의 차이가 무엇인지 설명해보세요.
- `let`, `var`, `const`의 차이점에 관해서 설명해주세요.

---

다른 사람의 답안

## 8. .call과 .apply의 차이점은 무엇인가요?

Function.prototype 이 소유한 method 들이다. 이들은 함수와 메서드가 실행될 때 바인딩할 객체를 지정하여 함수가 실행될때의 context 의 유요범위를 직접 지정하며 this 를 할당 할수 있다.

이들은 호출의 동적인 변화에 따라 각각 다르게 되는데 정적인 호출인 경우 call 을 동적인 호출에서는 apply를 사용하게 된다. 즉 호출시 동적인 인자전달등이 필요할 경우 apply 를 정적으로 고정된 함수를 호출할 경우 call 사용하면 된다.

bind() 메소드나 동적 callback 을 구현할때 apply가 사용되는 이유이기도 한다.

## 9. Function.prototype.bind을 설명 하시오

8번 문제에서 잠깐 다루었던 내용과 비슷하다. 함수객체는 실행 시점에서 execution context 를 생성하며 현재의 실행 코드 범위를 뜻하는 this 를 할당하게 된다. 하지만 this 를 동적으로 할당해야 하는 경우가 있다. 특히 다양한 객체에서 동적으로 특정 액션을 할당하여 사용되는 함수의 경우 this 에 할당되는 객체를 예측하기가 힘들다.

이럴때 bind 를 이용하여 실행 시점에서 context의 this 를 임의로 할당 해 주어 동적인 호출시에도 오류 없이 코드가 동작하게 할수 있다.

ECMA-262, 5th edition 에 의하면 Function.prototype.bind()는 아래 코드와 같이 구현되어 있다.

## 13. "호이스팅(Hoisting)"에 대해서 설명 하시오.

호이스팅은 자바스크립트 엔진이 실행 컨텍스트를 생성하면서 scope 를 정의 할때 기술된 순서에 상관없이 선언부에 대한 처리를 해석 우선순위 최우선으로 끌어올려 먼저 해석하는 것을 의미한다.

싶게 말해서 코드 작성 순서에 상관없이 선언구문을 최우선으로 해석한다는 것이다.

```
foo='hello'
console.log(foo);
var foo;
> hello
```

이때 유념해야할 것이 하나 있는데 호이스팅은 선언에만 적용되고 할당구문에는 적용되지 않는다.

```
console.log(foo);
var foo='hello world';
>undefined
```

이처럼 선언과 동시에 값을 할당하는 경우 호이스팅 되지 않으며 해당구문을 만나야만 해석하게 된다.

## 18. ==와 ===의 차이점은 무엇인가요?

`===`는 typeof 를 포함 한다. 즉 단순히 값이 같다는 것외에도 데이터타입도 같이 검사하게 된다. javascript 에서는 아래와 같은 동작을 하게 됨으로 비교연산시 주의를 요한다.

```
if('3'==3) console.log('equal');
else console.log('not equal');
>equal;

if('3'===3) console.log('equal');
else console.log('not equal');
>not equal;
```

7. 다음 코드의 차이점은 무엇인가요? javascript function Person(){}, var person = Person(), var person = new Person()

```
function Person() {
  return 'hello world';
}
```

위 코드는 함수 선언이다. 이는 함수 객체 생성을 위한 기본 그릇이 되면 prototype 이 참조할 함수객체의 환경을 담고 있다. global scope 에서는 Person 이라는 함수가 선언되었다는 것만을 저장하면 내부구현 로직은 알지 못한다.

`var person = Parson();` 은 함수 수행에 따른 return 을 변수에 저장한다는 의미이다. 즉 person 에는 'hello world' 가 할당된다.

`var person = new Person()` 은 person 변수에 Person 함수 객체를 생성하여 할당한다는 의미가 된다. 이때 할달되는 객체는 Person 함수의 프로토타입을 기반으로 생성된다.

## 3. 클로져(Closure)는 무엇이며, 어떻게/왜 사용하는지 설명해주세요

클로져를 제대로 이해하기 위해서는 javascript 의 `scope`, `scope chain`, `context` 에 대한 이해가 선행 되어야 한다.

간단히 설명하자면 클로저는 현재의 유효범위를 넘어 scope chain으로 연결되어 있는 객체,변수등의 참조를 발생시키는 것을 말한다.

javascript는 실행코드 블럭 단위로 context 를 스텍에 쌓게 되고 push, pop 을 통해 코드블럭이 실행 된다. 이때 각각의 실행 코드블럭이 수행되는 시점에서 실행 환경을 저장하게 되는데 이는 실행 유효범위인 scope 에 의해 결정된다.

이 scope 는 chain구조로 연결되어 있어 현재 실행 시점 이전의 scope 를 타고 올라가는 형태로 참조 되기 때문에 현재 scope 에 선언되지 않는 객체참조가 가능하다.

이는 java 등의 언어만 다루던 사람들에겐 좀 의아한 모습으로 동작한다. local 변수와 global 변수의 경계와 유요범위 설정에 대한 이해를 한번에 무너트려버리기 때문이다.

javascript를 대충 공부하게 되면 `undefined` 와 `null` 의 차이를 잘 이해하지 못하는 경우도 많다.

모든것이 object 로 통하는 javascript 에서의 `null` 은 값이 아닌 객체 참조의 연결을 해지하는 것을 말한다. 즉 어떤 참조값이 존재 하지 않음으로 비어있는 값을 가진 변수가 되는 것이다.

undefined 는 선언만 되어지고 특정 값이 할당되지 않는 경우 javascript 엔진에 의해 자동으로 할당되는 값이다. 즉 특별히 할당된 값이 없는경우 일반적인 언어처럼 null 이 아니고 undefiend 가 할당 되는 것이다.
