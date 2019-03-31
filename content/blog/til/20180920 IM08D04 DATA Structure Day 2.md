---
title: IM08D04 DATA Structure Day 2
date: 2018-09-20
category: TIL
---

## checkpoint 4

```javascript
//  5
obj1 = { x : 15}
참조만 함.
obj2.x = 15-> 직접적으로 부여하게 되면 값이 있기 때문에 상위로 올라가지 않으나, 값이 없는 경우엔 상위로 올라가면서 값을 찾음.


// 6
var obj1 = { x: 10 };
var obj2 = Object.create(obj1);
//obj1의 값을 불러올 수 있게 된다
obj2.x += 10;
obj1.x = 15;
// 이 시점에서 obj1  = { x : 15}; obj2 = { x : 20; }
var result = obj2.x;

// 7
자신이 원하는 값을 찾을때까지 상위로 올라감.

// 틀린 문제
8번 - 다음 코드를 실행한 후, result 의 값은 무엇이 될까요?
var obj1 = { x: 10 };
var obj2 = Object.create(obj1);
var obj3 = Object.create(obj2);
obj2.x = 20; // 중간에 값이 들어갔기 때문에 obj1까지 찾아갈 필요가 없음.
var result = obj3.x + 10;
result의 답은?

// 9
사실 Object.create 와 똑같은데, 과정은 똑같은데 new 키워드를 썼을 뿐이다.(더 편함)
함수가 생성되는 순간, 함수의 프로토타입 오브젝트가 메모리 어딘가에 생성이 된다.
(그리고 생성자도 생성이 됨. prototype : constructor : f())

var arr = [];
var arr = new Array()
// 이 표현이 위처럼 줄어든 것 뿐이고, array도 함수로 만들어짐. 다 Array.prototype에서 가져와서 쓰는 것.
//만들어진 새 배열에 그때마다 메소드를 넣어주는게 아니라, 부모의 힘(Array.prototype)을 가져와서 쓰기만 한다.

```

## Data Structures 2

1. Linked List 연결 리스트

다음 노드가 없는 경우 null 로 표현

앞 쪽이 head, 뒤 쪽이 tail

- 특징

한 번에 특정 값에 접근할 수 없다. (헤드부터 시작하거나)

이전의 노드로 돌아갈 수 없다. (Doubly Linked List는 가능!)

다음 노드 위치만 가지고 있다!

Memory Allocation : Javascript는 Array가 Object라 약간 다를 수 있음

Linked list는 메모리 관리를 효율적으로 함?

메모리 관리 면에서 일렬로 할 필요가 없음

JS에선 속도면에서는 큰 차이가 없다?

static으로 구현하면 메모리에 여유가 없을 것

ex)

- 웹 사이트 이동(go back/foward)

- 인간의 뇌 (잃어버린 기억을 찾는 방법 - 체이닝)

2. Tree

- 정렬 알고리즘(Binary Search Tree) 제일 많이 씀 BST

바이너리(1,0)라서 칠드런이 둘 밖에 없음. 중국의 산아제한정책

500 페이지 책의 190 페이지에 접근한다고 하자 그러면 절반 딱 나눠서 접근하고, 한번에 접근하는게 아니라 좁혀나감

- 계층 구조 (트리 구조 또한 다른 자료 구조로 만든다 array, linked list, stack, queue)

조상 수가 depth (level)

- 검색방법

  - Breadth First Search (BFS 너비 우선 탐색)

  - Depth First Search (DFS 깊이 우선 탐색)

    일단 던젼을 쭉 들어가서 그 옆에 있는 애 찾고 그 다음으로 큰 브랜치 들어가서 탐색

    // 일반적인 recursion에서 쓰는 방법

하나의 검색 방법만 사용하진 않음.

- Binary Search Tree 사용 예
  - spreadsheet

3. Graph

하나의 요소가 여러 엣지를 가짐. 2차원적인 자료 구조.

주로 SNS가 그래프 구조. facebook

네비게이션 시스템

> 엣지랑 노드랑 같은 개념인가?
>
> 혼용해서 씀. 노드는 value는 엣지랑 표현하기도 하고, 밸류 자체를 표현하기도 하고, 컨텍스트에 따라 다름...
>
> -\_-..

Undirected Graph(짝사랑, 일방통행도 있고 연결된 관계도 있고...)

길 찾기 알고리즘에서 많이 씀

그래프 그림 -> 옆에 관계가 있으면 1

- Weighted Edgeds 비용 개념을 넣어서, 거리를 생각해볼 수 있음

cost, distance 개념을 넣어서 얼마나 먼지, 얼마나 비용이 드는지

4. Hash Table

ex) 전화번호부의 주소록이 이런 식으로 구현

- 핵심은 결과물이 유니크해야 하나, 유니크 하지 않을 수도 있다

  속도가 빠르기 때문이니까

  유니크한 서로 다른 결과물을 낸다...가 원칙이나 그러지 않을 수도?

  헤시 테이블은 찜질방 락커룸?

  sha-256 이상 권장

  입력값 여러개 쓰지만 time을 주로 씀

  하나만 바꿔도 완벽하게 다른 애가 나옴

  운 나쁘게 index가 겹치게 된다면? 회피 알고리즘이 있음

  - Separate chaining

  ??

  - open addressing

거의 양 옆에 나올 확률이 없기에 그냥 옆에 둠 + 또 겹침? 또 아래 둠.

단점 :

데이터 정렬에는 맞지 않고, 계산자체가 오래 걸릴 수 있음

구현 및 사용이 어려움

- 인증
- 검색

자료 구조 공부 왜 하니?

- 효율적인 알고리즘 선택 위해서
- 사고 훈련에 도움 됨

레퍼런스가 없기 때문에 다양한 코드가 나올 수 있음

참조하면 비슷한 것들이 나오지만?

Lean? 조금씩 만들면서 테스트 해보는 개념

## complexity

time : 적은 시간

space : 적은 공간 (메모리?)

> 세션에서는 time에 집중함

> 몇 번의 작업이 필요한지가 중요하다!

n \* n

> 시간이 얼마나 걸리는지? ( 몇 번 )

Constant Time - Awesome

입력이 늘어나도 크게 변화하지 않는다

Big - O Notation

O(1)

o(n) 앞에 붙는 수는 크게 (컴퓨터에겐) 영향을 미치지 않기 때문에 2n-> n

o(n\*n)

O(log n) -> Binary Search

중간부터 검사해서 어느 쪽에 더 가까운지?

## 페어 프로그래밍

> 쉬운 말로 설명할 수 있을 때가 가장 잘 이해하는 것, 고수는 쉬운 말로 하고, 하수는 어려운 말로 혼란스럽게 한다
