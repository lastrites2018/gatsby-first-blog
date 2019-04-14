---
title: Instantiation Patterns
date: 2018-09-25
category: TIL
---

## Instantiation Patterns

ES6 전의 Class 선언 방식

1. Functional
2. Functional Shared
3. Prototypal
4. Pseudoclassical

Class는 하나의 정형화 된 모델(틀)을 만들어 두고, 그 모델을 기반으로 한 인스턴스(복제품)를 만들기 위해 사용

1. Functional

인스턴스를 생성할 때 마다 모든 메소드를 someInstance에게 할당하므로, 각각의 인스턴스들이 메소드의 수만큼의 메모리를 더 차지함.

2. Functional Shared

프로퍼티(someInstance) 객체와 메소드(someMethods) 객체를 분리. 그 둘을 합치는 extend 함수를 만들어서 내부에서 합쳐줌. someMethods라는 객체에 있는 메소들의 메모리 주소만을 참조하여, Functional에 비해 메모리 효율이 상승

```javascript
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key]
  }
}
```

3. Prototypal

   Functional Shared에서 `var someInstance = {}` 부분을

`var someInstacne = Object.create(someMethods);` 로 변경해준 걸로 끝.

Object.create란 특정 객체를 프로토타입으로 하는 객체를 생성해주는 함수

4. Pesudoclasscial (가장 많이 쓰는 방식)

메소드를 프로토타입으로 바꿔주고, 프로퍼티 객체에선 this를 사용해서 지칭해줌.

```javascript
var Robot = function(position) {
  this.position = position
}

Robot.prototype.clean = function() {
  this.position += 1
}

var robot1 = new Robot(5)
var robot2 = new Robot(10)
// 찍어낼 때에 new operator 를 붙여줘야 함.
```

키/값 저장소로는 객체, 숫자 인덱스를 가진 저장소로는 배열을 쓰는 게 좋다.
