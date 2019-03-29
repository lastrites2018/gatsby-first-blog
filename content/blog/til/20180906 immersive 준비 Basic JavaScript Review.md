---
title: 20180825 this 또 복습
date: 2018-09-06
category: TIL
---

## JavaScript Fundamentals

#### Slides: Values and Types

프로그램이 실행되면, 다양한 데이터 조각들을 추적할 필요가 있음.

이러한 이유로 프로그래밍 언어에는 값 개념(notion of value)이 포함되는 경향이 있는데, 이것은 프로그램이 컴퓨터의 하드웨어 메모리에 저장함으로써 프로그램이 추적하는 데이터의 작은 단위이다.

우리는 실제로 값을 볼 수 없다.

Sinppets of code

'hi'

컴퓨터 하드웨어 실제로 저장되는 값은

Type : String

Data : 'hi'

...

## Object.keys 사용하기

```javascript
function countNumberOfKeys(obj) {
  // your code here
  return Object.keys(obj).length
} //Object.keys(변수명)으로 Object의 키를 배열로 만든 다음에 길이 세기
```
