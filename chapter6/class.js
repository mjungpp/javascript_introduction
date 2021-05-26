/*
class나 object가 없다면?
정의한 변수들이 둥~둥 떠다니면서 규모 있는 프로젝트를 진행하기 힘들었을 것!
class는 연관 있는 데이터를 한데 묶어놓은 container과 같은 아이
class person {
    name; // 1. 속성(fields)
    age;
    speak(); 2.행동(method)
}
class = fields + methods
class? (붕어빵을 만들 수 있는 붕어빵 틀과 같은것) = 템플릿, 청사진 
- 템플릿만 정의해두는 것
- 클래스에는 이런 데이터가 들어올 수 있어라고 정의해놓고 한번만 선언하는 것

class를 실제로 구현한 것 -> object (붕어빵)
- 클래스를 이용해 새로운 인스턴스를 생성하는 것
- 클래스를 이용해 굉장히 많이 만들 수 있음
- 실제로 데이터를 넣은 것 (팥 넣으면 팥 붕어빵, 슈크림 넣으면 슈크림 붕어빵!)

*/

// modern하게 개발하자~!
'use strict';

/*
객체 지향 프로그래밍
class : template
object : 클래스의 인스턴스

Javascript classes
- ES6에서 도입됨 (ES6 이전에는 클래스 없이 객체를 만들었음)
- 완전히 새롭게, 완벽하게 추가된 것이 아니라 기존에 존재하던 프로토 타입을 기반으로 문법만 클래스가 추가된 것(Syntatical sugar)
*/


// 1. class & object
// Class 선언
class Person {
    // constructor(생성자)
    constructor(name, age){
        // fields
        // 전달된 데이터를 받아서 할당
        this.name = name;
        this. age = age;
    }
    // methods
    speak() {
        // this :생성된 object
        console.log(`${this.name} : hello!`);
    }
}

// Object 생성
// 새로운 Object 생성시 new 키워드 붙임!
const ellie = new Person('ellie', '20');
console.log(ellie.name); // ellie
console.log(ellie.age); // 20
ellie.speak(); // ellie : hello!

// 2. Getter & Setter
// const user1 = new User('Steve', 'Job', -1); 
// console.log(user1.age); // -1 : 엥? 나이가 -1 말도 안돼, 제한을 주고 싶어 -> 이때 사용하는 것이 ⭐Getter/Setter⭐

class User {
// 1. class내에 getter와 setter가 정의되어있다면, 정의되어있는 프로퍼티에 한해서 작용함 
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        // 2. age가 getter와 setter로 정의됨
        // 3. "User" object에서의 age를 access 하려고하면 자동으로 JS가 getter / setter를 호출
        this.age = age; // 4. this.age = age; 에서 'this.age =' 는 set age(value)를 호출
    }

    get age(){
        return this._age; 
    }
    // 값을 설정

    // 4. 
    /*set age()가 다음과 같이 정의되어 있었을 때
        set age(value){
        this.age = value;
        set age가 처음에 호출 -> function body를 execute할 때, this.age = value; 여기서 "this.age = " 는 다시 set age(value)를 호출 ->
        다시 호출된 set age에서 "this.age = "는 또 다시 set age(value)를 호출하고.. infinite recursion이 되서 callstack overflow 에러가 발생
        // Maximum call stack size exceeded
        그래서 나온 방법이 private property convention을 이용,
        getter와 setter 안에 따로 age를 다른 이름으로 사용하자고 해서 _age로 define
        }
    */
    set age(value) {
        /* 5. 다음과 같이 this.age를 -> this._age로 변경했을 경우,
        constructor에서 this.age = age; 이 실행될때 "this.age = "는 set age()를 호출
        set age()의 body에서 age가 아니라 _age 라는 또 다른 이름의 변수에 저장 
        여기서 _age는 setter가 define되어있지 않기 때문에 바로 메모리에 _age의 값을 저장

        실제로는 _age라는 변수가 저장된 것
        const user1 = new User('Java', 'Script', 10);
        console.log(user1.age);
        console.log(user1._age);
        하면 둘다 같은 10이 나옵니다.

        실제로는 age가 아니라 _age에 저장되었는데 왜 user1.age 도 10이 나오냐? 
        -> 자동으로 getter를 호출하기 때문에 getter에서 우리가 _age 값을 return하기로 정의를 바꾸어 주었기 때문에 user1.age 도 10을 리턴

        그래서 사실상 깊이 들어가서 메모리 레벨까지 보게되면 age는 실제로 undefined이고 _age 가 -1
        하지만 외부 코드가 user1의  object를 access 할때는 age가 아니라  _age로 re-direct되기 때문에
        high level에서 볼때 user1.age이 문제없이 -1로 작용하게 됨. 외부에는 불필요한 정보를 숨기는 것이고 이것이 바로 encapsulation
        */
        this._age = value < 0 ? 0 : value;
    }
}




// 3. Fields(public, private)
// 최근에 추가됨!

class Experiment {
    publicField = 2; // 외부에서 접근 가능
    #privateField = 0;
    // class 내부에서만 값이 보여지고 접근 가능, 값 변경 가능.
    // 클래스 밖에서는 이 값을 읽을 수도, 변경할 수도 X
}

const experiment = new Experiment();
console.log('publicField : ', experiment.publicField); // publicField :  2
console.log('privateField : ', experiment.privateField); // privateField :  undefined

// 4. Static properties and methods
// 이것도 최근에 추가됨!
// 데이터에 상관없이, 클래스의 고유한 값과 동일하게 반복적으로 사용되어지는 method를 사용할 때

class Article {
    static publisher = 'Dream Coding'; // object에 상관 없이 값이 class에 연결되어 있음
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // object의 publisher 값 출력하려고 함 ---> 엥? undefined
// --> static은 object마다 값이 할당되어 지는 것이 아니라, 클래스 자체에 붙어있기 때문에
Article.printPublisher(); // Dream Coding
// object에 상관 없이, 들어오는 데이터에 상관 없이 공통적으로 class에서 사용할 값들이 있을때 사용하면 좋음~!


// 5. 상속 & 다양성
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

// 상속
// extends를 사용하면 Shape에 있는 모든 것들이 Rectangle에 포함됨
class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){
        super.draw(); // 부모의 메소드 호출
        console.log('🔺'); // 새로 정의한 메소드 호출
    }
    // ⭐ 다양성이 빛을 발하는 순간 (함수 재정의!) overriding
    getArea(){
        return (this.width * this.height) / 2;
    }
    // 자바스크립트에서 만든 모든 class들은 JS의 Object를 상속한 것
    // object에서 정의한 함수를 사용할 수 있음
    // object의 toString 함수 재정의해서 사용하기
    toString(){
        return `Triangle- color : ${this.color}`;
    }

}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color!
console.log(rectangle.getArea()); // 400

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
/*
drawing red color!
🔺
*/
console.log(triangle.getArea()); // 엥..? 하지만 triangle : (width * height) / 2

// 6. instanceof
// 클래스를 이용해서 만들어진 새로운 인스턴스
// 왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스를 활용해 생성된 인스턴스인지 아닌지 확인 (true/false) return
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true : 자바스크립트에서 만든 모든 class들은 JS의 Object를 상속한 것