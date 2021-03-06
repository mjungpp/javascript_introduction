'use strict';

// Arrayπ

// 1. λ°°μ΄ μ μΈ
const arr1 = new Array(); // λ°©λ² 1
const arr2 = [1, 2]; // λ°©λ² 2

// 2. Index position
// λ°°μ΄μ μΈλ±μ€λ₯Ό κΈ°μ€μΌλ‘ λ°μ΄ν°λ₯Ό κ²μν  μ μμ
const fruits = ['π','π', 'π'];
console.log(fruits); 
/* 0: "π"
1: "π"
2 : "π"
length: 2
*/
console.log(fruits.length); // 3
// console.log(fruits['key']); objectμ μΆμΆλ²

// λ°°μ΄μ indexλ 0λΆν° μμν¨
// fruitsμ 1λ²μ§Έ κ°
console.log(fruits[0]); // π
// fruitsμ 2λ²μ§Έ κ°
console.log(fruits[1]); // π
// λ°°μ΄μ λ§μ§λ§ κ°
console.log(fruits[fruits.length - 1]);  // π

// 3. Looping over an array
// print all fruits

console.clear();
// a. for
for(let i = 0; i < fruits.length; i ++){
    console.log(fruits[i]); 
    /*
    π
    π
    π
    */
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
    /*
    π
    π
    π
    */
}
console.clear();

// c. forEach
/* λ°°μ΄μ λ€μ΄μλ κ°λ§λ€ μ½λ°± ν¨μλ₯Ό μνν¨.
    μ°λ¦¬κ° μ λ¬ν ν¨μλ₯Ό value νλνλλ§λ€ νΈμΆν¨.
*/
/*
fruits.forEach(function(fruit, index, array) {
    console.log(fruit, index); // π0 π1 π2
    // console.log(array); ["π", "π", "π"]
});
*/

// arrow functionμΌλ‘ μ λ¦¬
fruits.forEach((fruit) => console.log(fruit)); // π π π

console.clear();

// 4. λ°°μ΄μ μΆκ°(Addition), μ­μ (deleteion), λ³΅μ¬(copy)
// push : λμ μμ΄ν μΆκ°νκΈ° add an item to the end
fruits.push('π','π','π');
console.log(fruits); // ["π", "π", "π", "π", "π", "π"]
// pop : λμ μμ΄ν μ­μ νκΈ° remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits); // ["π", "π", "π", "π"]
// console.clear();
// unshift : λ§¨ μμμ μμ΄ν μΆκ°νκΈ°
fruits.unshift('π½','π');
console.log(fruits); // ["π½", "π", "π", "π", "π", "π"]

// shift : λ§¨ μμμ μμ΄ν μ­μ νκΈ°
fruits.shift();
console.log(fruits); // ["π", "π", "π", "π", "π"]

// note!!
// shift, unshiftλ popκ³Ό pushλ³΄λ€ λλ¦¬λ€!
// κ°μ μΆκ°νκ³  μ­μ ν  λ κ°μ λΉκ²¨μ€κ±°λ λ°λ €λκΈ° λλ¬Έμ λ°μ΄ν°κ° λ§μμλ‘ λλ¦Ό
// console.clear();
// splice :  μμ΄νμ μ§μ λ ν¬μ§μμμ μ§μ°κΈ°
// console.clear();
console.log(fruits);
        //μ­μ ν  μΈλ±μ€ λ²νΈ, μ­μ ν  μμ΄ν κ°―μ
/*fruits.splice(1); // μ­μ ν  μμ΄ν κ°―μλ₯Ό μ§μ νμ§ μμΌλ©΄, μμ μΈλ±μ€ λ²νΈλΆν° λ°μ΄ν° λκΉμ§ λ€~ μ§μλ²λ¦Ό!*/
fruits.splice(1,1); // 1λ²μ§Έ μΈλ±μ€ 1κ°λ§ μ­μ 
console.log(fruits); // ["π", "π", "π", "π"]

fruits.splice(1, 1, 'π₯', 'π'); // 1λ²μ§Έ μΈλ±μ€ 1κ°λ₯Ό μ­μ νκ³ , κ·Έ μλ¦¬λ₯Ό π₯μ πλ‘ μ±μ°κΈ°!
console.log(fruits); // ["π", "π₯", "π", "π", "π"]

// concat : λ°°μ΄ μ΄μ΄λΆμ΄κΈ°(combine to array)
const vegetable = ['π₯','π§'];
const newFruitsVegi = fruits.concat(vegetable);
console.log(newFruitsVegi); // ["π", "π₯", "π", "π", "π", "π₯", "π§"]

// 5. searching (κ²μ¬)
// indexOf : find the index
// console.clear();

console.log(fruits); // ["π", "π₯", "π", "π", "π"]
console.log(fruits.indexOf('π')); // 4
console.log(fruits.indexOf('π₯')); // 1
console.log(fruits.indexOf('π')); // -1 : λ°°μ΄μ ν΄λΉνλ κ°μ΄ μμ κ²½μ°, -1λ‘ λ°ν

// includes : λ°°μ΄μ ν΄λΉ κ°μ΄ μλμ§ true/falseλ‘ λ°ν
console.log(fruits.includes('π«')); // false
console.log(fruits.includes('π')); // true

// console.clear();
// lastIndexOf : λ§μ§λ§ index κ°μ λ°νν¨
fruits.push('π');
console.log(fruits); // ["π", "π₯", "π", "π", "π", "π"]
console.log(fruits.indexOf('π')); // 4 : μ μΌ μ²«λ²μ§Έλ‘ λ§λλ index κ°μ λ¦¬ν΄ν¨
console.log(fruits.lastIndexOf('π')); // 5 : μ μΌ λ§μ§λ§μΌλ‘ λ§λλ index κ°μ λ¦¬ν΄ν¨

// quiz
// arrayμ μ¬μ©ν  μ μλ apiλ€ μ½μ΄λ³΄κ³  κ°κ³  λμλ³΄κ³ ~ ν΄λ³΄κΈ°~
// console.clear();

console.log(fruits);

let api1 = fruits.toString();
console.log(api1); // π,π₯,π,π,π,π

let api2 = fruits.toLocaleString();
console.log(api2); // π,π₯,π,π,π,π

let pop = fruits.pop();
console.log(pop); // π
// console.clear();

console.log(fruits); // ["π", "π₯", "π", "π", "π"]
console.log(vegetable); // ["π₯", "π§"]

let join = fruits.join(vegetable);
console.log('join : ', join);
// ππ₯,π§π₯π₯,π§ππ₯,π§ππ₯,π§π

let reverse = fruits.reverse();
console.log(reverse);
// ["π", "π", "π", "π₯", "π"]

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

let newArray = fruits.map(x => x+'π');
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

