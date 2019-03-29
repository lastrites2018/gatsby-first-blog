---
title: 20180826 poiemaweb.com 공부 시작 - 자료형과 변수
date: 2018-08-26
category: TIL
---

## 자료형과 변수 Javascript Data type & Variable

잘 몰랐던 개념들만 재정리.

변수란 위치(주소)를 기억하는 저장소이다. 위치란 메모리 상의 주소(address)를 의미한다. 즉, 변수란 메모리 주소(Memory address)에 접근하기 위해 사람이 이해할 수 있는 언어로 지정한 식별자(identifier)이다.

<h6> 값이 클수록 메모리를 많이 차지하겠지.</h6>

C나 Java 같은 C-family 언어는 정적 타이핑(Static Typing) 언어로 변수 선언시 사전에 자료형을 지정(Type annotation)이 필요하다.

반면에 자바스크립트는 동적 타이핑(Dynamic Typing)언어로 변수의 Type annotation이 필요없이 값이 할당되는 과정에서 자동으로 변수의 자료형이 결정(타입 추론 Type Inference).

- 기본 자료형 (primitive data type)
  - `Boolean`
  - `null`
  - `undefined`
  - `Number`
  - `String`
  - `Symbol` (ECMAScript 6에서 추가)
- 객체형 (Object type, Reference type)
  - `Object`

## 1. boolean

null, undefined, 0, false, '', ""은 false로 간주.

## 2. null

컴퓨터 사이언스에서 null은 의도적으로 기본자료형 또는 객체형 변수에 값이 없다는 것을 명시한 것이다. 이는 변수와 메모리 어드레스의 참조 정보를 제거하는 것을 의미하며, 자바스크립트 엔진은 참조가 없어진 메모리 영역에 대해 가비지 콜렉션을 수행한다.

```javascript
var foo = 'Lee'
foo = null // 참조 정보가 제거됨
```

## 3. undefined

선언 이후 값을 할당하지 않은 변수는 <code>undefined</code> 값을 가진다. 선언은 되었지만 값이 할당되지 않은 변수에 접근하거나, 존재하지 않는 객체 프로퍼티에 접근할 때 반환되는 값이 undefined다.

## 4. number

javascript는 하나의 숫자 자료형만 존재한다.

**프로그래밍 언어에서 실수는 일반적으로 소수를 가리킨다.**

## 5. string

C와 같은 언어와는 다르게, 자바스크립트의 문자열은 변경 불가능(immutable)하다. 한 번 문자열이 생성되면, 그 문자열을 변경할 수 없다는 의미.

```javascript
var str = 'Hello';
str = 'world';
이전에 생성된 문자열 'Hello'가 수정된 것이 아니라, 새로운 문자열 'world'를 메모리에 생성하고 식별자 str은 이것을 가리킨다. 이때 문자열 'Hello'와 'world'는 모두 메모리에 존재하고 있다.
```

문자열은 배열처럼 인덱스를 통해 접근할 수 있다. 이와 같은 특성을 갖는 데이터를 **유사 배열**이라 한다. `str[0] = 's'` 처럼 이미 생성된 문자열의 일부 문자를 변경해도 반영되지 않는다. 이때 에러는 발생하지 않는다! (위에 설명한 immutable)

그러나 새로운 문자열을 재할당하는 것은 물론 가능. 기존 문자열을 변경하는 것이 아니라 새로운 문자열을 할당하는 것.

## 7. Symbol

ES6에서 새롭게 추가된 7번째 타입. 애플리케이션 전체에서 유일하면서 변경 불가능(immutable)한 기본 자료형(primitive). 주로 객체의 프로퍼티 키 (property key)를 생성할 때 사용. Symbol 값은 애플리케이션 전역에서 유일하기에 Symbol 값을 키로 갖는 프로퍼티는 어떠한 프로퍼티와도 충돌하지 않는다.

```javascript
var key = Symbol('key')
console.log(typeof key) //symbol

var obj = {}
obj[key] = 'value'
console.log(obj[key]) //value
```

---

## 6. 객체형 (Object type, Reference type)

이름과 값을 가지는 데이터를 의미하는 *프로퍼티(property)*와 동작을 의미하는 *메소드(method)*를 포함할 수 있는 독립적 주체.

자바스크립트는 객체 기반의 스크립트 언어로서 자바스크립트를 이루고 있는 거의 '모든 것'이 객체이다. 기본자료형(Primitives)를 제외한 나머지 값들(배열, 함수, 정규표현식 등은) 모두 객체이다. 또한 객체는 pass-by-reference(참조에 의한 전달)이며 메모리의 힙 영역(Heap Segment)에 저장된다.

// heap segment??

## 변수 Variable

애플리케이션에서 값(value)를 유지할 필요가 있을때 변수를 사용한다.

- 반드시 영문자, underscore( \_ ), 또는 \$로 시작해야 한다.
- 자바스크립트는 대/소문자를 구별하므로 사용할 수 있는 문자는 [A-Z], [a-z]

변수는 중복 선언이 가능하다. 하지만, 의도치 않게 변수의 값을 변경할 수 있으므로 사용하지 않는 것이 좋다.

변수 선언시 var 키워드를 생략할 수 있으며, 이때 변수는 전역 변수가 된다. 역시 의도하지 않게 변수를 전역화할 수 있으니 사용을 피하자.

## 동적 타이핑(Dynamic Typing)

자바스크립트는 동적 타입 언어 혹은 느슨한 타입(loosely typed) 언어이다. 이것은 타입 어노테이션이 필요없이 값이 할당되는 과정에서 자동으로 자료형이 결정된다(Type Inference)는 뜻. 따라서 같은 변수에 여러 자료형의 값을 할당할 수 있고, 이를 동적 타이핑(Dynamic Typing)이라 한다.

## 호이스팅 Hoisting

자바스크립트의 모든 선언문은 호이스팅된다.

호이스팅이란 var 선언문이나 function 선언문 등 모든 선언문이 해당 스코프의 선두로 옮겨진 것처럼 동작하는 특성을 말한다.

그렇기에, 자바스크립트는 모든 선언문(var, let, const, function, [function\*](https://poiemaweb.com/es6-generateor), class)이 선언되기 이전에 참조 가능하다.

## 변수의 생성 3단계

선언 단계(Declaration phase)

변수 객체(Variable Object)에 변수를 등록한다. 이 변수 객체는 스코프가 참조하는 대상이 된다.

초기화 단계(Initialization phase)

변수 객체(Variable Object)에 등록된 변수를 메모리에 할당한다. 이 단계에서 변수는 undefined로 초기화된다.

할당 단계(Assignment phase)

undefined로 초기화된 변수에 실제값을 할당한다.

var 키워드로 선언된 변수는 **선언 단계와 초기화 단계가 한번에 이루어진다.** 따라서 변수 선언문 이전에 변수에 접근하여도 Variable Object에 변수가 존재하기 때문에 에러가 발생하지 않는다. 다만, undefiend를 반환한다. 이후 변수 할당문에 도달하면 비로소 값의 할당이 이루어진다.

## var 대신 let, const를 사용하자

ES5까지 변수를 선언할 수 있는 유일한 방법은 var 키워드였다. ES6부터 아래 문제를 해결하기 위해 let, const가 도입.

대부분의 문제는 전역 변수로 인해 발생한다. 전역 변수는 간단한 애플리케이션의 경우, 사용이 편리한 면이 있지만 불가피한 상황을 제외하고 사용을 억제해야 한다. 전역 변수는 유효 범위(scope)가 넓어서 어디에서 어떻게 사용될 지 파악하기 힘들다. 이는 의도치 않은 변수의 변경이 발생할 수 있는 가능성이 증가한다. 또한 여러 함수와 상호 의존하는 등 부수 효과(side effect)가 있을 수 있어서 복잡성이 증가한다.

변수의 유효 범위(scope)는 좁을수록 좋다.

---

[출처 poimeaweb](https://poiemaweb.com/js-data-type-variable)
