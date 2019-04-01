---
title: Immersive Sprint 총 정리
date: 2018-10-23
category: TIL
---

## deploy

실질적으로 고객이 사용할 수 있도록 배포해야 함.

cloud computing 시스템이 있음으로 시작 cost를 낮출 수 있고, 한정된 개발자원을 효율적으로 쓸 수 있게 됨.

### EC2(Amazon Elastic Compute Cloud)

VM기반의 컴퓨팅 자원을 제공하는 서비스
일반적인 클라우드 서버 인스턴스를 의미

EC2는 처리 능력을 사용하여 서버에 응용 프로그램을 배포하기위한 것이고 서버는 각각 S3 및 RDS를 통해 내용을 제공합니다. 따라서 \*Amazon EC2는 모든 유형의 \*_처리\*\* 활동에 유용합니다._

#### **EBS(Elastic Block Store)**

`EC2` 인스턴스에 사용할 영구 블록 스토리지 볼륨을 제공
`Amazon EBS` 볼륨은 워크로드 실행에 필요한 **지연 시간이 짧고 일관된 성능을 제공**

-> _S3와의 큰 차이점_. 그러나 **S3에 비해 비쌈**.

### S3 (Simple Storage Service)

웹 인터페이스를 통해 데이터를 저장 및 검색할 수 있는 스토리지.
**RRS(Reduced Redundancy Storage)** 옵션으로 데이터 손실 위험도를 더 올리고 가격을 저렴하게 사용가능. 1. 대용량 저장 용기 2. 장기 보관

https://blog.uniqbuild.co.kr/?p=449

https://code.i-harness.com/ko-kr/q/db9acd

## 다대다 관계 juntion table

```mysql
CREATE TABLE Users (
    UserLogin varchar(50) PRIMARY KEY,
    UserPassword varchar(50) NOT NULL,
    UserName varchar(50) NOT NULL
);

CREATE TABLE Permissions (
    PermissionKey varchar(50) PRIMARY KEY,
    PermissionDescription varchar(500) NOT NULL
);

-- This is the junction table.
CREATE TABLE UserPermissions (
    UserLogin varchar(50) REFERENCES Users (UserLogin),
    PermissionKey varchar(50) REFERENCES Permissions (PermissionKey),
    PRIMARY KEY (UserLogin, PermissionKey)
);

A SELECT-statement on a junction table usually involves joining the main table with the junction table:

SELECT * FROM Users
JOIN UserPermissions USING (UserLogin);
https://en.wikipedia.org/wiki/Associative_entity

```

## Immersive Sprint 성취 평가시험 끝나고... 헷갈렸던 부분 정리

- Time Complexity

  ```javascript
  Constant - O(1), 이미 알고 있는 인덱스를 가지고 접근하는 것. 가장 빠른 시간 복잡도!
  Logarithmic - O(log n), divide and 퀀커 나누고 정복하고. 나누고 정복하는 알고리즘을 가장 실현한 것이 바이너리 서치 트리. log7은 3에 근사한다. 1/2정도로 생각하면 쉬움.
  Linear - O(n), 모든 엘리먼트 탐색하는 것은 n의 복잡도를 가진다. 즉 for문 한번의 경우.
  Quadratic - O(n^2), 중첩 for문. for문 2개. 3중도 quad.
  Exponential - O(C^n 즉, 상수 C의 N 제곱) -> 기하급수적으로 실행시간이 늘어남
  버그이거나 패스워드 추적하기 어렵게 만들 때.
  ```

* SQL 쿼리문

  ```mysql
  INSERT INTO 테이블 명 (a,b,c) values ('test','16','test')
  ## 자꾸 value라고 쓰는데 values다! 이번에 확실히 메모.
  ```

- node js 모듈

  ```javascript
  var http = require('http')
  var url = require('url') //!!
  var fs = require('fs')
  var path = require('path')
  ```

- react render 패턴

```react

// class로 선언한 경우엔
class FishTable extends Component {
render () {
    return (

    )
}
```

- map의 활용

```javascript
var sport = {
  name: 'basketball',
  players: [
    { name: 'LeBron James', age: 31 },
    { name: 'Kevin Durant', age: 28 },
  ],
  playerNames: function() {
    // YOUR CODE HERE
    return this.players.map(function(player) {
      return player.name + ' plays basketball'
    })
  },
} // 특별히 변수를 쓸 필요가 없을때 바로 리턴해주는 처리를 배워야 한다.

console.log(sport.playerNames())
```

- 함수 안에 함수를 만들지 않고 바로 리커전 시키기

```javascript
var printArray = function(arr) {
  var copiedArr = arr.slice()
  if (!copiedArr.length) return
  console.log(copiedArr[0])
  copiedArr.shift()
  printArray(copiedArr)
}
```

## weakpoint

- jQuery, HTML, CSS 기본적인 걸 좀 더 연습해봐야 함. html, css, jQuery의 경우는 붙여넣기 식으로 코딩했더니 손에 익지 않았음.

- HTML LOG INPUT

  ```html
  <!DOCTYPE html>

  <input type="text" id="input" placeholder="write text here" />
  ```

  ```css
  <-- css -->
  margin-left : 40%;
  margin-top : 25%;

  // 태그 중복 적용 ; 으로 구분
  <h1 style="color:blue;text-align:center">This is a header</h1>

  ```

  ```javascript
  // Dom manipulation
  var inputElement = document.getElementById('input')
  var btnElement = document.getElementById('button')

  btnElement.onclick = function() {
    console.log(inputElement.value)
    inputElem.value = ''
  }
  ```

{} 는 JSX에서 사용되는데 뷰 템플릿에서 동적 정보를 포함하기 위해 사용.

```javascript
var data = [
  {
    when: '2 minutes ago',
    who: 'jill dupre',
    description: 'Created new account',
  },
  {
    when: '4 minutes ago',
    who: 'ajill dupre',
    description: 'dCreated new account',
  },
  {
    when: '10 minutes ago',
    who: 'cjill dupre',
    description: 'eCreated new account',
  },
]
```
