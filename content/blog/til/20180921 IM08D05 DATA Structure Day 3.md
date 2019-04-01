---
title: Immersive Sprint - DATA Structure Day 3
date: 2018-09-21
category: TIL
---

## checkpoint 5~checkpoint 6

![3](https://ws4.sinaimg.cn/large/006tNbRwgy1fvloh4ncf4j30hb0auq3p.jpg)

![4](https://ws1.sinaimg.cn/large/006tNbRwgy1fvloh4bvxdj30hj0atmxw.jpg)

3, 6은 같은 원리다. Array의 특성은 연속성이다. 하나를 지우면, 뒤의 것이 다 옮겨져야 한다. 하나를 삽입한다고 해도 다 이동하겠지.

```javascript
2. time complexity 최악의 경우를 가정하고 해야 한다.
4. linked list index라는 값이 없고 우리가 알 수 있는 것은 tail과 head 밖에 없기 때문에 Linear
6. 3번과 같은 원리
7. 어떤 값을 제거 한다고 해서 값을 일일히 옮겨주는 것이 아니기 때문에, constant( 빠른 계산들은 constant 라고 보면 된다.)
9. 값을 다 돌아봐야 하기 때문
11. binary search의 worst case
12. 검색하는 것과 시간 복잡도는 같다.
// hash 자료를 찾는 것과 자료를 지우는 것은 같은 시간
13.
14.
//
2. 수도클래스의 함수는 리턴을 하지 않는다
```

## 시간 복잡도 계산해보기

Array

- remove : 하나를 지우면 n번을 움직여줘야 하니까

Linked Lists

- Lookup

Head에서 시작할 수밖에 없다(singled linked list)

o(n) n 번 걸리니까

- Insertion ( insert constant O(1))

  node를 알고 있다는 전제하에 insert 하는 거기 때문에 constant

- 내 논리가 있는 것이 중요
- Removal ( 헤드만 옮겨주면 됨-> 문서 순서대로)

실제로는 메모리상 어딘가에 있다. 자바스크립트의 자료 구조가 배열, 객체밖에 없기 때문에. 연습을 위해서 하는 것일뿐.

- 리밸런싱

O(n) 리밸런싱 -> O(log n)

정렬을 하는 이유? 더 빨리 찾기 위해서. 자료가 많이 쌓이기 전인 초반에 리밸런싱 하는 것이 비용이 적게 든다.

바꾸거나 넣는 것은 연산이 아니라 constant로 본다.

시간의 복잡도는 최악의 경우를 상정하여 생각해야 한다.

## 시간 복잡도 보충학습

- 문제를 해결하려고 할 때마다 시간복잡도를 분석하는 습관을 들이면 좋은 개발자가 될 수 있습니다.

> 문제에 있어 최고의 답이나, 정답이 무엇인지 말하긴 어렵다. 좀 더 낫거나 더 나쁜 해결책에 대해서 말하는 건 가능하다.

1. **O(1) – 상수 시간** : 알고리즘이 문제를 해결하는데 오직 한 단계만 거칩니다.

   값을 검색할 때, 객체에서 키를 알거나 배열에서 인덱스를 알고 있으면 언제나 한 단계만 걸립니다.

2. **O(log n) – 로그 시간** : 문제를 해결하는데 필요한 단계들이 연산마다 특정 요인에 의해 줄어듭니다.

   배열에서 값을 찾을 때, 어느 쪽에서 시작할지를 알고 있으면 검색하는 시간이 두배로 줄어듭니다

3. **O(n) – 직선적 시간** : 문제를 해결하기 위한 단계의 수와 입력값 n이 1:1 관계를 가집니다.

4. **O(n^2) – 2차 시간** : 문제를 해결하기 위한 단계의 수는 입력값 n의 제곱입니다.

   _지수 시간은 보통 문제를 풀기 위해 모든 조합과 방법을 시도할 때 사용됩니다._

5. **O(C^n) – 지수 시간** : 문제를 해결하기 위한 단계의 수는 주어진 상수값 C 의 n 제곱입니다.

참조 : https://joshuajangblog.wordpress.com/2016/09/21/time_complexity_big_o_in_easy_explanation/

## Hash Table

Hash : 잘게 쪼개서 알 수 없는 형태로 만듬

1. 해쉬 함수의 특징

- 같은 input으론 항상 같은 output이 나와야 한다

가장 간단한 hash function이 %(나머지)

우리가 hashing algorithm을 구현할 일은 없다

## GIT upsream/merge

upstream -> origin -> local

오리진에 푸쉬하고 업스트림에 풀을 요청하는데...

local이 먼저 commit하고 upsteram이 커밋 했을때

```javascript
git pull upstream master로 변경

이미 merge를 한 상황이면 esc + :wq

conflict의 경우 push를 하면 충돌되는 파일이 열림. 필요한 부분만 수정하고 add해서 커밋하면 됨.

```
