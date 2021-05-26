'use strict';

// 1. Literals and properties
// 원시 타입
// 값 하나만 저장이 가능함

const name = 'ellie';
const age = '20';

// 이름과 나이를 모두 출력하려면 각각 변수를 매개변수로 받아야 하며,
// 값이 추가되었을 때 추가되어야 할 매개변수가 많아 복잡하고 관리가 어려움
print(name, age);
function print(name, age){
    console.log(name); // ellie
    console.log(age); // 20
}

// object
const ellie = {name : 'ellie', age : 4};
// 자바스크립트는 runtime
// 즉? 실행 중에 타입이 결정되어, 객체에 값을 뒤늦게 추가할 수도 있음!
ellie.hasJob = true;
console.log('ellie.hasJob : ', ellie.hasJob); // ellie.hasJob :  true

// 추가? 삭제도 가능하다~!
delete ellie.hasJob;
console.log('delete ellie.hasJob : ', ellie.hasJob); // delete ellie.hasJob :  undefined

function person(person){
    console.log(person.name); 
    console.log(person.age);
}

person(ellie);
// ellie
// 4

// 0bject 생성
const obj1 = {}; // 'object litera' syntax
const obj2 = new Object(); // 'object constructor' syntax
/*
'object는 key와 value의 집합체이다.'
*/ 

// 2. Computed properties
// key should be always string
// 동적으로 key에 관련된 value를 받아와야 할 때 유용하게 쓰일 수 있다

console.log(ellie.name); // ellie
// Computed properties 
// 실시간으로 원하는 key의 값을 받아오고 싶을 때
console.log(ellie['name']);  // ellie
ellie['hasJob'] = true;
console.log(ellie.hasJob); // true

function printValue(obj, key){
    // console.log(obj.key); --> object에 key라는 속성이 들어있니? 그런거 없어! (인식 못함)
    console.log(obj[key]); // ellie
}
printValue(ellie, 'name');

//  3. Property value shorthand
const rabbit1 = {color : 'white', age : 2};
const rabbit2 = {color : 'black', age : 1};
const rabbit3 = {color : 'cream', age : 3};
const rabbit4 = makeRabbit('speckled', 4);
console.log(rabbit4); // {color: "speckled", age: 4}

// 함수를 이용해 값만 전달해주면 object를 생성함
function makeRabbit(color, age){
    return {
        color, // color : color
        age, // age: age
    }
}

// 4. Constructor Function
/*
계산은 하지 않고, 순수하게 object만 생성하는 함수
함수 이름이 대문자로 시작함
*/

const person1 = {name : 'bob', age : 2};
const person2 = {name : 'steve', age : 3 };
const person3 = {name : 'dave', age : 4};
const person4 = new People('ellie', 30);
console.log('person4 : ', person4); // {name: "ellie", age: 30}

function People(name, age){
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator
// 해당하는 object 안에 key가 있는지 없는지 확인하는 것
console.log('name' in ellie); // true
console.log('hobby' in ellie); // false
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
// ellie가 가지고 있는 key들이 block을 돌 때마다 key라는 지역 변수에 할당되어짐
// console.clear();
for (let key in ellie){
    console.log(key); 
    /*
    name
    age
    hasJob
    */
}

// for(value of iterable)
const array = [1, 2, 3, 4, 5];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
/*
    1
    2
    3
    4
    5
*/
}
// 복잡!
//  for.. of를 이용해 간단하게!
for(let value of array){
    console.log(value);
/*
    1
    2
    3
    4
    5
*/
}

// cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name : 'ellie', age : '20'};
const user2 = user; // user2가 user의 clone되어 있기 때문에, 같은 ref를 갖고 같은 값을 가리킴
user2.name = 'coder';
console.log(user); // {name: "coder", age: "20"}
 // user2의 값을 바꿨을 때 user도 같이 변함!

// old way
const user3 = {};
for (let key in user){
    user3[key] = user[key];
}
// console.clear();
console.log('user3 : ', user3); // user3 : {name: "coder", age: "20"}

// Object.assign
/*
1.
const user4 = {};
Object.assign(user4, user);
console.log(user4);
*/

const user4 = Object.assign({}, user); // (복사할 대상 객체, 복사될 객체)
console.log('user4 : ', user4); // user4 :  {name: "coder", age: "20"}

// another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 복사될 대상 객체에서 값이 자꾸 덮어 씌워짐 
console.log(mixed.color); // blue
console.log(mixed.size); // big