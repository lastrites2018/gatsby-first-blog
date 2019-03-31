---
title: IM08D10 Brower apps and AJAX
date: 2018-10-02
category: TIL
---

## chatterbox

서버는 API(Application Programming Interface)를 클라이언트들이 사용할 수 있게 노출. 비동기 작업을 주로 하게 됨. 서버와의 통신시, 응답이 올때까지 기다릴 수밖에 없기 때문에.

XSS(Cross-Site-Scripting) attacks. 공격기법을 어떻게 방지할 수 있는가?

ES6로 작업할 것.

백그라운드에서 계속 리프레쉬 되면서 구현됨.

## Sever Client Model

서버와 접촉을 할때(엔드포인트)에 접근하기 위해 서버가 URL을 제공하는데 HTTP API라고 함. 원격 서버에 요청(RPC; Remote Procedure Call 리모트 프로시저 콜)

- MESSAGING PATTERNS
  - Request - Response(순차적으로 하기 때문에 동기적이라고 함)
- 푸쉬는 요청이 없고 서버에서 일방적으로 보내는 것.

## 주소창에 주소를 입력하면 무슨 일이 일어나는가?

- DNS(도메인 네임 서버)에 아이피를 요청하고, DNS 서버에서는 IP를 리턴함.

- 라우팅? 한 서버에서도 갈림길이 있듯, 디테일한 주소를 적어주는 것. www.google.com/intl/ko_kr 이라면 intl 부분.

- 구글에서 서치할 경우에 search는 비지니스 로직을 뜻함.

HTTP의 Status code

- 404 (not found 리소스를 찾을 수 없을 경우)

정상적인 응답일 경우에 200를 받음

보낼때 GET, HTTP 200

개발자도구 -> 네트워크 -> 새로고침(네트워크 보는 법에 익숙해져야 함. =)

URL 창에 뭘 치는 건 모두 GET, 폼 제출은 post

- HTTP FEATURES
  - HTTP는 특정 상태를 갖지 않고, 이전 요청이나 다음 요청을 기억하지 않고 바로 끝.
- URI(Identifier) - HTTP 요청
- http status code (mdn) 중요
- 400번대는 클라이언트 에러
- 500번대는 서버 에러

* 중요

get

post

Put - POST와 비슷하나 서버 자원 update 용도.

Delete - 서버 자원 삭제

라우팅은 주소의 개념

포트는 연결 통로의 개념

- RESTFUL의 의미와 사용하는 방법

payload : submit하는 input 하는 내용을 json에 넣어서 실어서 보내기 때문.

REST API는 가이드라인이고, 너가 이런 식으로 요청하면, 내가 이런 식으로 던져줄게. 규약임.

_왜 REST라고 부르는가?_

REST는 일종의 Style

목적에 맞게 정의되었을때, REsTFUL이라고 한다.

![rest][http://www.dropbox.com/s/0feam39ml18qyn7/%ec%8a%a4%ed%81%ac%eb%a6%b0%ec%83%b7%202018-10-02%2011.36.35.png]

https://www.dropbox.com/s/0feam39ml18qyn7/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-10-02%2011.36.35.png?dl=0

RestFUL API 테스트

```html

```

## 보안

iframes
