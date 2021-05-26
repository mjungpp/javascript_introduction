// 1. String concatenation
console.log('my' + ' cat'); // my cat
console.log('1' + 2); // 12
console.log(`string literals : 1 + 2 = ${1 + 2}`); // string literals : 1 + 2 = 3
console.log('ellie\'s \n\ \t\ book') 
/*
ellie's 
 	 book
*/

// 2. Numeric operators
console.log(1 + 1); // 더하기
console.log(1 - 1 ); // 빼기
console.log(1 / 1 ); // 나누기
console.log(1 * 1); // 곱하기
console.log(5 % 2 ); // 나누고 나머지
console.log(2 ** 3); // 2의 3승

// 3. 전위 연산자, 후위 연산자

// (1) 전위 연산자
// 값 업데이트가 먼저 일어나고, 후에 할당함
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`); // preIncrement : 3, counter : 3

/*
 = counter = counter + 1;
   const preIncrement = counter;
*/

const preDecrement = --counter;
console.log(`preDecrement : ${preDecrement}, counter : ${counter}`); // preDecrement : 2, counter : 2

// (2) 후위 연산자
// 할당을 한 후, 뒤에 업데이트가 일어남
const postIncrement = counter++;
/*
 = postIncrement = counter;
 counter = counter + 1;
 */
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`); // postIncrement : 3, counter : 4

const postDecrement = counter--;
console.log(`postDecrement : ${postDecrement}, counter : ${counter}`); // postDecrement : 3, counter : 2

// 4. Assign operators
// 할당하는 operation

let x = 3;
let y = 6;

x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. <= (비교) Operators
console.log( 10 < 6 ); // false : 작다 
console.log( 10 <= 6 ); // false : 작거나 같다
console.log( 10 > 6 ); // true : 크다
console.log( 10 >= 6 ); // true : 크거나 같다

// 6. logical operators ||(or), &&(and), !(not)

const value1 = false;
const value2 = 4 < 2;

// || (or), 처음으로 true가 나오면 거기서 멈춤!
// 하나라도 true면 어차피 true니까~
// 하나라도 충족하면 true
// 따라서 or 연산자를 쓸 땐 단순한 값들을 제일 먼저 놓고, 시간이 오래 걸리는 function은 뒤에서 선언하자~!
console.log(`or : ${value1 || value2 || check()}`);
// value1 : false, value2 : false; check() : true

function check() {
    for(let i = 0; i < 10; i ++ ){
        // wasting time
        console.log('😖'); // 10 😖
    }
    return true;
}

// &&(and)
// 모든 조건을 만족해야 true
// 첫번째 조건이 false면 어차피 &&조건 성립 안함! -> 구문 종료
// 따라서 이것 또한 heavy한 operation를 뒤에 배치하는 것이 바람직
console.log(`and : ${value1 && value2 && check()}`);
// value1 : false, value2 : false; check() : true

// !(not)
// 값을 반대로 바꿔줌
console.log('!value1 : ',!value1); // !value1 :  true

// Equality Operators
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// string이나 number로 값이 같으면 같게 취급
// 문자열이긴 한데, 숫자 5가 들어가있잖아. 그럼 둘은 똑같아!
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
// 타입을 신경써서 검사
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // false

// object equality by reference
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
// 두 개는 똑같은 값을 갖고 있는 object지만 실제로 메모리에는 1과 2가 다른 레퍼런스가 들어있고, 다른 레퍼런스는 다른 오브젝트를 가리킴
// = 두개는 다른 값!
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true


// equalizer - puzzle
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log ('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// IF operators
// if, else if, else
const name = 'ellie';
// if가 true면 if 안의 블럭 실행
if(name === 'ellie'){
    console.log('wecome, ellie'); // wecome, ellie

// if가 false고 else if가 true면 else if안의 블럭 실행
}else if(name === 'coder'){
    console.log('You are amazing coder');
// if와 else if 모두 다 false면 else 안의 블럭 실행
}else {
    console.log('unknown');
}

// 삼항 연산자 Ternary operator : ?
// condition ? value1 : value2;
// name이 ellie면 yes 실행, 아니면 no 실행
console.log(name === 'ellie' ? 'yes' : 'no');

// switch
// 조건 분기
const browser = 'IE';

switch(browser) {
    case 'IE' : 
    console.log('go away ! ');
    break;

    /* 연달아 사용도 가능 */
    case 'Chrome' : 
    case 'Firefox' :
    console.log('love you ! ');
    break;

    default :
    console.log('same all!');
    break;
}

// 반복문
// while
// statement가 false가 나오기 전까지 무한대로 반복함

let i = 3;
while(i > 0){
    console.log(`while : ${i}`);
    i--;
}
/*
while : 3
while : 2
while : 1
*/

// do while
// 우선 블럭을 수행한 다음, 조건이 맞는지/틀린지 검사
do {
    console.log(`do while : ${i}`); // do while : 0
    i--;
}while(i > 0);

// for loop
// 시작,   조건,  단계
for(i = 3; i > 0; i--){
    console.log(`for : ${i}`);
    /*
    for : 3
    for : 2
    for : 1
    */
}

for(let i =3; i > 0; i = i - 2){
    //inline variable declaration
    console.log(`inline variable for : ${i}`);
    /*
    inline variable for : 3
    inline variable for : 1
    */
}

// nested loops
for (let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i : ${i}, j : ${j}`);
    }
}

// Q1. 0에서 10까지 짝수만 continue를 이용해 출력
for(i = 0; i < 11; i++){
    if(i % 2 !==0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

// Q2. 0에서 10까지 루프하되, 숫자 8을 만나면 그만하는 것을 작성
for(i = 0; i < 11; i ++){
    if(i > 8){
        console.log('break!');
        break;
    }
    console.log(i);
}

