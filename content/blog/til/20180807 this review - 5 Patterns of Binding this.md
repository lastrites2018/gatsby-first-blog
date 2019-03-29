---
title: this review - 5 Patterns of Binding this
date: 2018-08-07
category: TIL
---

# 복습 this

this는 어떻게 바인딩되느냐에 따라 값이 달라진다.

이 내용은 꼭 외워야 한다.

## 5 Patterns of Binding 'this'

1. Global : window
2. Function : window

펑션 안에서 괄호 닫고 열고로 호출해도 window

```javascript
1. Global Refrence
var name = 'global Variable';
console.log (this.name); //Global Variable : window


2. function
function foo () {
    console.log(this.name); //Global Variable : window
}
foo(); -> // window!
    괄호 열고 닫고로 실행해도 window!

       function outer() {
        function inner() {
            console.log(this.name);
        }
    }
        outer() -> 여기도 마찬가지로 window

        this의 바인딩은 scope와 상관 없다

```

일반적인 function 호출 : 값은 window

전역을 대표하는 변수가 window

3. Method 호출 : 부모 object

```javascript
var counter - {
    val: 0,
    increment: function() {
        this.val += 1;
        // counter.val과 동일
        // 부모 오브젝트를 뜻함.
    }
}
counter.increment();
console.log(counter.val); // 1
counter['increment']();
console.log(counter.val); // 2


var obj = {
    fn: function(a,b) {
        return this;
    }
};
var obj2 = {
    method: obj.fn
    // 레퍼런스를 카피한다고 생각하면 된다.
    // copy by refrence
    // 위의 내용을 그대로 가져온다고 생각.
}

// 이거 헷갈릴 수 있지만, true다!
obj2.method() === obj2 // true
obj.fn() === obj // true

```

4. Construction mode (new 연산자로 생성된 function 영역의 this)

   : 새로 생성된 객체

   -> ES6에서 클래스 개념 도입. ES5까진 없었음.

   컨스트럭션 모드가 클래스 형식.

   ```javascript
   function Car(name, brand) {
     // 대문자로 시작하는 이유가 클래스로 시작한다는 컨벤션
     this.name = name
     this.brand = brand
   }
   var avante = new Car('avante', 'hyundai')
   //인스턴스를 만드는 과정 avante와 car720d과 인스턴스
   //avante는 껍데기기

   avante.brand
   avante.name

   var car720d = new car('720d', 'bmw')

   function Human(name) {
     this.name = name
   }

   function Human(name, age) {
     this.name = name
     this.age = age
     debugger // 실행해보기
   }
   var hoyong = new Human('hoyong', 400)
   //new 키워드를 쓰는게 object를 바탕으로 construct 한다는 것
   hoyong.name
   hoyong.age

   //정의된 함수를 껍데기로 삼아서 새로운 것을 만드는 것

   function F(v) {
     this.val
     // 이 this가 무엇을 가리키냐가 중요한 개념,
     // 이때의 this는 새로 생성된 개념.
   }

   var f = new F()
   //이 this는 small f

   //new car() -> 인스턴스를 만드는 과정
   ```

Objected Orient Programming 객체 지향 프로그래밍 : 추상화를 시켜서

5. .call or .apply 호출 : call, apply의 첫번째 인자로 명시 된 객체

   ```javascript
   function identify() {
     return this.name.toUpperCase()
   }
   function speak() {
     var greeting = "Hello, I'm" + identify.call(this)
     console.log(greeting)
   }
   var me = { name: 'Kyle' }
   var you = { name: 'Reader' }

   //this를 명시적으로 넘겨주기 위해
   //call
   //apply(배열)

   identify.me(this)
   identify.call(me) //KYLE
   identify.call(you) //READER
   speak.call(me) // Hello, I'm KYLE
   speak.clll(you) // Hello, I'm READER
   // 이럴 경우 전역에 있는 name에 접근

   // 색으로 구분된 this 자료 찾아보기!!
   // 해보면서 해석해보기
   ```
