---
title: Git Command Patch Failed + JS Math + ES6
date: 2018-09-05
category: TIL
---

## Git 터미널 커맨드 한글패치 실패

9/5 Git 에러 메세지를 잘 이해하기 위해서 git command Line 한글 패치를 시도해보려 했으나 실패했다. 자료가 너무 없다. 분명 ko.po 파일은 있는데(https://github.com/git-l10n/git-po) 이걸 어떻게 해야 하는 거지. 다만, 무수한 깃 관련 즐겨찾기만 생겼다. 열심히 찾아보았는데, 윈도우 버전만 발견. http://webdir.tistory.com/222

9/6 알 것 같다. Git을 삭제하고 저 릴리즈 된 걸 재설치하면 될 것 같은데, 과정을 생각하니 머리가 아프다.

---

## JS Math

```javascript
Math.PI 3.141592653589793 // PI 대문자,
Math.pow(num, exponent); //exponent : 지수
ex) Math.pow(2, 3) // 8
Math.sqrt(num) // returns root
ex) Math.sqrt(9) // 3

```

## ES6 연습

```javascript
function joinArrays(arr1, arr2) {
  // your code here
  //return arr1.concat(arr2); 기존
  return [...arr1, ...arr2] // [ 1, 2, 3, 4]
  // ...arr은 [1, 2, 3]을 개별 요소로 분리한다
  // 따라서 arr1, arr2를 개별 요소로 분리해서 새 배열을 만든 것
}
var output = joinArrays([1, 2], [3, 4])
console.log(output) // --> [1, 2, 3, 4]
```

```javascript
// 헷갈림
array.slice(1) //1번째 인덱스 포함(!),
// 다르게 이야기하면 1개 제외라고도 생각할 수 있다.
```
