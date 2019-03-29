---
title: What is node + html review
date: 2018-08-20
category: TIL
---

## 노드가 뭐야?

HTML 문서의 모든 것이 노드. 문서는 곧 노드의 집합.

## 노드의 종류

- 문서 노드 document node

  HTML 문서 전체를 나타내는 노드임.

- 요소 노드 element node

  모든 HTML 요소는 요소 노드. 속성 노드를 가질 수 있는 유일한 노드임.

  태그나 element라고 하는 것들.

  ```html
  ex)
  <body>
    <head>
      <ul>
        <h1></h1>
      </ul>
    </head>
  </body>
  ```

  요소 노드들끼리는 서로 포함 관계

- 텍스트 노드 text node

  HTML 문서의 모든 텍스트는 텍스트 노드임.

  <p>'이 안에 있는 부분이 텍스트 노드'</p>

  '' 사이가 텍스트 노드. XHTML에서 텍스트 노드는 보통 요소 노드 안에 포함된다.

- 속성 노드 attribute node

  모든 HTML 요소의 속성은 속성 노드이며, 요소 노드에 관한 정보를 가지고 있음.

  하지만 해당 요소 노드의 자식 노드(child node)에는 포함되지 않음.

  ```html
  <p title="nodeName">U Can do it</p>
  위의 소스에서 보면 p라는 요소노드가 있고
  <p></p>
  사이에 U Can do it이라는 텍스트 노드가 보인다. p라는 요소 노드 내에 title이
  바로 속성 노드이다.
  ```

  속성 노드는 항상 요소 노드 태그 내에 포함되어 있다.

- 주석 노드

  HTML 문서의 모든 주석은 주석 노드임.

## 노드의 관계

HTML 문서의 정보는 노드 트리(node tree)라고 불리는 계층적 구조에 저장됩니다. 이러한 노드 트리는 노드들의 집합이며, 노드 간의 관계를 보여줍니다.

노드 트리는 최상위 레벨인 루트 노드(root node)로부터 시작하여, 가장 낮은 레벨인 텍스트 노드까지 뻗어 내려갑니다. 자바스크립트에서는 HTML DOM을 이용하여 노드 트리에 포함된 모든 노드에 접근할 수 있습니다.

노드 트리의 가장 상위에는 단 하나의 루트 노드(root node)가 존재합니다. 루트 노드를 제외한 모든 노드는 단 하나의 부모 노드(parent node)만을 가집니다 모든 요소 노드는 자식 노드(child node)를 가질 수 있습니다.

형제 노드(sibling node)란 같은 부모 노드를 가지는 모든 노드를 가리킵니다.

조상 노드(ancestor node)란 부모 노드를 포함해 계층적으로 현재 노드보다 상위에 존재하는 모든 노드를 가리킵니다.

자손 노드(descendant node)란 자식 노드를 포함해 계층적으로 현재 노드보다 하위에 존재하는 모든 노드를 가리킵니다.

## 참조한 사이트

http://liketh.tistory.com/entry/%EB%85%B8%EB%93%9C%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80

http://tcpschool.com/javascript/js_dom_node

## HTML 태그

`<h>` heading을 의미, 크기에 따라 h1~h6까지 있음

`<div>` content divison을 뜻함

`<span>` 줄바꿈이 없는 content 컨테이너

## 트리 구조

- html 문서 시작
  - html
    - head
      - title
    - body
      - h1 : hell world
      - div : contents here
        - span : here too!

## html에 css 삽입하기

1. inline
2. 내부 삽입 : `<Head>` 안에,
3. 외부 삽입 : `<link>`태그 사용

`<link rel="stylesheet" type="text/css" href="location.css" />`

## 용어 정의

태그 : 시작 및 종료 태그와 같이 마크업(Markup)을 의미

요소 : 의미를 갖는 하나의 구조
