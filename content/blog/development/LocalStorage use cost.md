---
title: 'LocalStorage use cost'
date: 2019-01-17
category: 'development'
---

<!-- ## **LocalStorage use cost** -->

- 1st test to call 1 million times localStorage to get item which does exist.

- 2nd test to call 1 million times localStorage to get item which does NOT exist.

Results:

> "Item found: 0.0007991071428571318ms per call""Item not found: 0.0006365004639793477ms per call"

**In short - just use it. It takes no time. 0.0007 of 1 millisecond.**

로컬 스토리지 액세스 시간은 쿠키보다 빠릅니다. 로컬 스토리지를 읽는 방식은 동기 방식이지만, 속도가 워낙 빠르기 때문에 blocking의 위험은 전혀 없음. 다만, 개인정보 같은 예민한 데이터는 가급적 로컬 스토리지에 저장하지 않는게 좋음. 암호화 해서 저장하는 방법도 있지만, 자바스크립트 암호 모듈이 썩 쓸만한게 아직 없는 모양.

IE 8에서도 사용 가능.

localStorage 사용법

<https://blog.teamtreehouse.com/storing-data-on-the-client-with-localstorage>

## **참조**

<https://jsperf.com/localstorage-vs-objects/47> (브라우저 별 벤치마크)

<https://stackoverflow.com/questions/8074218/speed-cost-of-localstorage>

<https://stackoverflow.com/questions/17246175/local-storage-vs-cookie-performance>

<https://stackoverflow.com/questions/17280390/can-local-storage-ever-be-considered-secure> 로컬스토리지 보안

<https://www.peterbe.com/plog/localstorage-is-fast>

<https://www.stevesouders.com/blog/2014/02/11/measuring-localstorage-performance/>

<http://crocodillon.com/blog/always-catch-localstorage-security-and-quota-exceeded-errors>
