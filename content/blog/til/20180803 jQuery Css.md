---
title: 20180803 jQuery Css
date: 2018-08-03
category: TIL
---

## \*_ # HTML input의 값 접근하기._

<input type="hidden" id="test_id" class="test_class" name="test_name" value="test">

\1. input의 id로 접근해서 값 가져오기

var value =\$('#test_id').val();

\2. input의 class로 접근해서 값 가져오기

var value = \$('.test_class').val();

\3. input의 name으로 접근해서 값 가져오기

var value = \$('input[name=test_name]').val();

## CSS

과제 풀면서 몰랐던 부분.

1. border-width의 순서는 top, right, bottom, left.

2)

```
html에 <img></img> 태그만 있다고 치자.
여기에 src와 이미지를 넣어주는 방법.

$("img").attr("src", "http://static.jsbin.com/images/dave.min.svg");
```

3.

```
$(document).click(function (){
  alert('Don\'t click!');
})

# 버튼 클릭이었다.
$('button').on('click', function(event){
alert("You clicked me!")
})
or

$('button').click(function(event){
alert("You clicked me!")
})
```

4. https://gist.github.com/ingikim/054a2002dc22586ebf98fef4fc1fb6dc

```
내가 푼 방법
$("ol li:nth-child(3)").after('<li>Here is thing four.</li>');

이렇게 쉽게 갈 수도 있다!
$('div ol').append('<li>Here is the thing.</li>');
```
