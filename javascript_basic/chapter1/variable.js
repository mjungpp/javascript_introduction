// primitive type
// number, string, boolean, null, undefined, symbol
let age =  2; // 숫자 2가 number라는 변수에 할당됨
console.log(`age : ${age}`);

let num = '2'; // 문자 2가 num이라는 변수에 할당됨
console.log(`num : ${num}`);

let number2 = age;
console.log(`age : ${age}`);
console.log(`number2 : ${number2}`);

number2 = 3;
console.log(`age : ${age}`);
console.log(`number2 : ${number2}`);

// object
// name과 age라는 값들을 하나로 묶어서 객체화, obj는 데이터가 있는 주소를 포함하고 있음
// 😑 const는 값이 한번 할당되면 안 바뀌기 때문에 obj 안의 references들을 다른 object를변경이 안됨
const obj = {
    name : 'minjung',
    age : 27,
};
/*
❌❌❌❌❌
obj = {
    name : 'james',
    age : 27,
};
*/
// 그런데, 다음과 같이는 가능함!
// ref라는 공간은 잠겨있지만, object 내부의 ref가 가리키는 것을 이용해 ref 안의 값을 변경하는 것은 가능하기 때문
obj.name = 'kitty';
console.log(obj.name); // obj라는 값이 가리키는 주소로 찾아감 -> 주소 안에 name이라는 key의 value인 minjung을 출력

let obj2 = obj;
// ✨ 무슨 일이 생길까 ?
// 1. obj2라는 변수에 새로운 메모리 공간이 할당
// 2. obj는 주소를 가리키고 있네? -> obj가 가지고 있는 주소가 복사되어 obj2에 할당됨
console.log(obj2.name); // obj가 가지고 있는 주소를 이용해, obj의 name을 출력!

obj.name = 'james';
// obj가 가리키는 주소 찾아감 -> name의 값을 james로 변경
console.log('-----------');
console.log(obj.name);
console.log(obj2.name);
// obj와 obj2 모두 가리키고 있는 object가 동일하기 때문에 (같은 주소를 가지고 있기 때문에)
// 어떤 곳을 통해서 이름을 업데이트해도 둘 다 값이 변경됨

let a = 2;
a = 5;
a = 9;

// const로 정의한 값은 변경이 불가능
// Uncaught SyntaxError: Identifier 'num' has already been declared
const number = 2;
// num = 4;
