---
title: '웹 개발을 막 시작하는 당신에게 권하는 도구들'
date: 2019-03-20
category: 'development'
---

프로그래밍이라는 영역에 막 던져졌습니다. 불편한 것은 너무 많고, 검색해보면 그 불편함을 해결해준다고 권하는 도구가 너무 많습니다. 괜히 잘못 무언가를 설치하면 돌이킬 수 없거나 나쁜 버릇이 들지도 모른다는 걱정이 듭니다. 비법까진 아니더라도 좀 편하게 프로그래밍에만 집중할 수 있게 길을 제시해줬으면 좋겠습니다.

아무것도 없이 '안녕, 세상'부터 외쳐볼 수도 있지만, 여러 툴을 가진 상태로 시작한다면 핵심적인 목적인 코딩에 더 집중할 수 있지 않을까요? 개발하기 전의 내게 누군가 좀 알려줬으면 좋았을 텐데 싶은 도구들만 싹싹 긁어서 모았습니다. 사용하신다면, 아마 이 글을 읽는 시간보다 많은 시간을 벌게 되실 겁니다.

![](https://images.unsplash.com/photo-1534190239940-9ba8944ea261?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80)

###### 대체 무엇을 써야 하는 걸까?

**아래 내용은 웹 개발자를 위한 도구이며, Mac을 기준으로 작성되어 있습니다. 제가 경험했거나, 사용하고 있는 도구만 담았습니다. 이제 막 개발을 시작한 분들을 대상으로 하지만, 개발에 능숙하신 분이라도 하나 정도는 건지실 수 있을 것 같습니다.**

- CLI Program

  - [Git-Open](https://github.com/paulirish/git-open) CLI에서 `git open` 이라고 치면 해당하는 레포지토리를 웹사이트 브라우저에 띄워줍니다. branch를 판 경우에도 branch 경로로 띄워줍니다.(Github, GitLab, BitBucket)
  - 설치 할 필요 없는 팁 : [맥 현재 파인더 경로에서 터미널 바로 여는 방법](http://blog.giftbot.kr/mac/open-terminal-in-finder/) 잠깐 배우면 내내 편합니다.

- Mac Utility
  - [Magnet](https://itunes.apple.com/us/app/magnet/id441258766?mt=12) 유료, 화면에 여러 앱을 빠르게 배치할 수 있습니다. 듀얼 모니터를 사용한다면 필수품.
  - [Alfred](https://www.alfredapp.com/) 하루에 가장 자주 쓰게되는 앱. 워크플로우 제외하고 무료. Spotlight의 강화 버전. 맥에 설치된 각종 응용 프로그램들을 실행하는 것은 물론이고, 다양한 검색을 키보드로만 수행할 수 있습니다. Custom Search를 만들어놓으면, 공식 문서와 친해질 수 있습니다. 추천하는 알프레드 호출 단축키는 오른쪽 command 두번 입력입니다.
- Chrome Extension

  - [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm) 웹 개발을 하게 되면 필요하다고 느끼는 대부분의 작업을 해줍니다. 사이트에 적용된 CSS를 일시적으로 비활성화하거나, 쿠키 관련 작업, Image를 숨기고, Color Picker 역할 등등.
  - [Wappalyzer](https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg/related?hl=en) 방문한 사이트에서 무슨 기술을 썼는지 궁금하다면 클릭 한번으로 간편하게 확인할 수 있습니다.
  - [Json-Viewer](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) JSON 보기 편해집니다.
  - [Surfingkeys](https://chrome.google.com/webstore/detail/surfingkeys/gfbliohnnapiefjpjlpjnehglfpaknnc) 브라우저에서 할 수 있는 모든 행동을 단축키화 할 수 있습니다.
  - [Check My Link](https://chrome.google.com/webstore/detail/check-my-links/ojkcdipcgfaekbeaelaapakgnjflfglf) 현재 웹 페이지에 깨진 링크가 있는지 빠르게 확인하고, 잘못된 링크가 있다면 클립보드에 복사해줍니다.
  - [Vimeo repeat & speed](https://chrome.google.com/webstore/detail/vimeo-repeat-speed/noonakfaafcdaagngpjehilgegefdima) Vimeo에서 배속, 반복 재생 기능을 사용할 수 있습니다.

- VSCODE Extension

  - [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) 괄호의 단계별로 다른 색을 적용해주는 확장. 괄호를 잘못 닫는 문제를 예방해주고, 작성 중인 코드 영역이 어디인지 분명하게 표시해줍니다.
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 코드 스타일은 Prettier에게 맡기고 더 심각한 문제, 변수 이름 작명 같은 걸 더 고민해봅시다.
  - [javascript console utils](https://marketplace.visualstudio.com/items?itemName=whtouche.vscode-js-console-utils) 자바스크립트 코딩하며 지겨울 정도로 쳐야 하는 console.log를 단축키로 해결해줍니다.
  - [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) CSS에서 RGB나 hex코드가 무슨 색인지 바로 표시해줍니다.
  - [Todo-Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight) 미래의 나에게 퀘스트를 보내봅시다. 주석에도 HightLight이 됩니다. 커스텀 키워드를 설정할 수도 있습니다.
  - [OverType](https://marketplace.visualstudio.com/items?itemName=adammaras.overtype) 코드 작성시에 삽입 모드 대신 가끔 수정 모드가 필요하다고 느끼신다면.
  - [Date & Time](https://marketplace.visualstudio.com/items?itemName=rid9.datetime) 스테이터스 바에 시간을 표시해줍니다. 시간을 확인하기 위해 마우스를 움직일 필요가 없습니다.

- Git

  - [Learn Git Branching](https://learngitbranching.js.org/) (웹사이트) 코드를 날려먹을 걱정 없는 안전한 환경에서, Git master가 되어보세요. Git에 어느정도 익숙하다면 원격 퀘스트부터 클리어 하는 것이 도움이 될 수도 있습니다. 한글판 지원!
  - [깃을 위한 flight rules](https://github.com/k88hudson/git-flight-rules/blob/master/README_kr.md) (웹사이트) 우주비행선 조종하는 것마냥 깃이 어렵게 느껴질 때가 있습니다. 깃 문제에 부딪히면 바로 찾아볼 수 있는 가이드.

- DB
  - [Database](https://dbdiagram.io/) 코드 입력만으로 DB 구조를 그릴 수 있습니다. 정성껏 선을 긋는데 시간을 버리지 맙시다.

새로운 툴을 시도하는 걸 두려워하지 마세요. '설치만 하고 나중에 써봐야지.' 안 됩니다. 설치하셨다면, 단 1분이라도 사용해보세요. 사용하지 않은 도구는 기억에서 잊혀집니다. 최소한 당신의 도구가 어떻게 생겼는지는 알아야 나중에라도 꺼내들 수 있습니다. 혹시 여기에 언급되진 않았지만, 개발을 이제 막 시작하는 친구에게 꼭 알려주고 싶은 도구가 있다면 코멘트를 남겨주시면 좋겠습니다.
