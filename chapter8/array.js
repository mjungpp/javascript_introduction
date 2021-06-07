'use strict';

// Array🎉

// 1. 배열 선언
const arr1 = new Array(); // 방법 1
const arr2 = [1, 2]; // 방법 2

// 2. Index position
// 배열은 인덱스를 기준으로 데이터를 검색할 수 있음
const fruits = ['🍌','🍎', '🍒'];
console.log(fruits); 
/* 0: "🍌"
1: "🍎"
2 : "🍒"
length: 2
*/
console.log(fruits.length); // 3
// console.log(fruits['key']); object의 추출법

// 배열의 index는 0부터 시작함
// fruits의 1번째 값
console.log(fruits[0]); // 🍌
// fruits의 2번째 값
console.log(fruits[1]); // 🍎
// 배열의 마지막 값
console.log(fruits[fruits.length - 1]);  // 🍒

// 3. Looping over an array
// print all fruits

console.clear();
// a. for
for(let i = 0; i < fruits.length; i ++){
    console.log(fruits[i]); 
    /*
    🍌
    🍎
    🍒
    */
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
    /*
    🍌
    🍎
    🍒
    */
}
console.clear();

// c. forEach
/* 배열에 들어있는 값마다 콜백 함수를 수행함.
    우리가 전달한 함수를 value 하나하나마다 호출함.
*/
/*
fruits.forEach(function(fruit, index, array) {
    console.log(fruit, index); // 🍌0 🍎1 🍒2
    // console.log(array); ["🍌", "🍎", "🍒"]
});
*/

// arrow function으로 정리
fruits.forEach((fruit) => console.log(fruit)); // 🍌 🍎 🍒

console.clear();

// 4. 배열의 추가(Addition), 삭제(deleteion), 복사(copy)
// push : 끝에 아이템 추가하기 add an item to the end
fruits.push('🍓','🍈','🍊');
console.log(fruits); // ["🍌", "🍎", "🍒", "🍓", "🍈", "🍊"]
// pop : 끝의 아이템 삭제하기 remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits); // ["🍌", "🍎", "🍒", "🍓"]
// console.clear();
// unshift : 맨 앞에서 아이템 추가하기
fruits.unshift('🌽','🍅');
console.log(fruits); // ["🌽", "🍅", "🍌", "🍎", "🍒", "🍓"]

// shift : 맨 앞에서 아이템 삭제하기
fruits.shift();
console.log(fruits); // ["🍅", "🍌", "🍎", "🍒", "🍓"]

// note!!
// shift, unshift는 pop과 push보다 느리다!
// 값을 추가하고 삭제할 떄 값을 당겨오거나 밀려나기 때문에 데이터가 많을수록 느림
// console.clear();
// splice :  아이템을 지정된 포지션에서 지우기
// console.clear();
console.log(fruits);
        //삭제할 인덱스 번호, 삭제할 아이템 갯수
/*fruits.splice(1); // 삭제할 아이템 갯수를 지정하지 않으면, 시작 인덱스 번호부터 데이터 끝까지 다~ 지워버림!*/
fruits.splice(1,1); // 1번째 인덱스 1개만 삭제
console.log(fruits); // ["🍅", "🍎", "🍒", "🍓"]

fruits.splice(1, 1, '🥝', '🍇'); // 1번째 인덱스 1개를 삭제하고, 그 자리를 🥝와 🍇로 채우기!
console.log(fruits); // ["🍅", "🥝", "🍇", "🍒", "🍓"]

// concat : 배열 이어붙이기(combine to array)
const vegetable = ['🥕','🧅'];
const newFruitsVegi = fruits.concat(vegetable);
console.log(newFruitsVegi); // ["🍅", "🥝", "🍇", "🍒", "🍓", "🥕", "🧅"]

// 5. searching (검사)
// indexOf : find the index
// console.clear();

console.log(fruits); // ["🍅", "🥝", "🍇", "🍒", "🍓"]
console.log(fruits.indexOf('🍓')); // 4
console.log(fruits.indexOf('🥝')); // 1
console.log(fruits.indexOf('🍙')); // -1 : 배열에 해당하는 값이 없을 경우, -1로 반환

// includes : 배열에 해당 값이 있는지 true/false로 반환
console.log(fruits.includes('🍫')); // false
console.log(fruits.includes('🍅')); // true

// console.clear();
// lastIndexOf : 마지막 index 값을 반환함
fruits.push('🍓');
console.log(fruits); // ["🍅", "🥝", "🍇", "🍒", "🍓", "🍓"]
console.log(fruits.indexOf('🍓')); // 4 : 제일 첫번째로 만나는 index 값을 리턴함
console.log(fruits.lastIndexOf('🍓')); // 5 : 제일 마지막으로 만나는 index 값을 리턴함

// quiz
// array에 사용할 수 있는 api들 읽어보고 갖고 놀아보고~ 해보기~
// console.clear();

console.log(fruits);

let api1 = fruits.toString();
console.log(api1); // 🍅,🥝,🍇,🍒,🍓,🍓

let api2 = fruits.toLocaleString();
console.log(api2); // 🍅,🥝,🍇,🍒,🍓,🍓

let pop = fruits.pop();
console.log(pop); // 🍓
// console.clear();

console.log(fruits); // ["🍅", "🥝", "🍇", "🍒", "🍓"]
console.log(vegetable); // ["🥕", "🧅"]

let join = fruits.join(vegetable);
console.log('join : ', join);
// 🍅🥕,🧅🥝🥕,🧅🍇🥕,🧅🍒🥕,🧅🍓

let reverse = fruits.reverse();
console.log(reverse);
// ["🍓", "🍒", "🍇", "🥝", "🍅"]

// console.clear();

let sort = fruits.sort();
console.log(sort);

let array = [1,2,3,4,5];

let check = array.every(item => {
    return item % 2 == 0;
});
console.log(check);
// false

let some = array.some(item => {
    return item % 2 == 0;
});
console.log(some);

let newArray = fruits.map(x => x+'💘');
console.log(newArray);

let filterArray = array.filter(x => x > 3);
console.log(filterArray);

let reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
}
// 1 + 2 + 3 + 4 + 5
console.log(array.reduce(reducer)); // 15
console.log(array.reduce(reducer, 5)); // 20
console.clear();

const array3 = [[4,3], [2,7], [1,0]].reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(array3); // [1, 0, 2, 7, 4, 3]

// const array3 = [[4,3], [2,7], [1,0]];
// let reducer2 = (accumulator, currentValue) => {
//     console.log('accumulator : ', accumulator);
//     console.log('currentValue : ', currentValue);
//     console.log(accumulator.concat(currentValue));
//     return accumulator.concat(currentValue);
// }
// array3.reduceRight(reducer2);

