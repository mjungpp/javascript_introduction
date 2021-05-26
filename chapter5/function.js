/*
Function
- 프로그램의 기본 구성 요소
- 여러번 사용할 수 있는 서브 프로그램
- 작업을 수행하거나 값을 계산

1. 함수 정의 방법
function name(param1, param2) { body(비즈니스 로직)... return; }
- ⭐하나의 함수는 한가지의 일만 하도록 작성해야한다 한다
함수 이름 작성법
- doSomething
- command
- 동사 형태
함수 작명이 어렵다면, 하나의 함수에 너무 많은 기능을 넣은것은 아닌지 고려해야함.
e.g. createCardAndPoint -> createCard, createPoint
- ⭐함수는 JS에서 객체이다.
*/


function printHello() {
    console.log('Hello'); 
}
printHello(); // Hello

// 자바스크립트엔 타입이 없어서 어떤 자료형을 전달해야하는지 모름.
// 타입스크립트를 배워야 하는 이유 👨‍💻
function log(message){
    console.log(message);
}

log('Hello~'); // Hello~
log(1234); // 1234

/*
Parameter(파라미터)
원시 파라미터 : 메모리에 값이 저장되어 있기 때문에 값이 전달됨
객체 파라미터 : 메모리에 reference가 저장되어 있기 때문에 reference가 전달됨
 */

function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name : 'ellie'};
changeName(ellie); 
console.log('changeName : ', ellie); // changeName :  {name: "coder"}

// 3.Default Parameter (es6에 추가된 사항)
function showMessage(message, from){
    console.log(`${message} by ${from}`);
}
// showMessgae에 인자가 2개인데, 인자 1개만 전달!
showMessage('Hi!'); // Hi! by undefined

                            // default parameter 지정
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hello!'); // Hello! by unknown

// 4. Rest parmater (es6에 추가된 사항)
                // ...args : 배열 형태로 값이 전달됨
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
        /*
        dream
        coding
        ellie
        */
    }
    // 배열 더욱 간단하게 출력
    for(const arg of args){
        console.log(arg);
        /*
        dream
        coding
        ellie
        */
    }

    args.forEach((arg) => console.log(arg));
    // = args.forEach(console.log);
        /*
        dream
        coding
        ellie
        */
}
printAll('dream', 'coding', 'ellie');

/*
⭐밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다⭐
block 안에서 선언한 변수 -> 지역 변수
지역 변수는 안에서만 접근이 가능함.
블록 범위 안의 지역 변수를 밖에서 출력할 때 에러가 발생함
*/

// 5. Local Scope (지역변수)
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    // local variable
    console.log('message : ', message); // message :  hello
    console.log('globalMessage : ', globalMessage); // globalMessage :  global

    printAnother();

    function printAnother() {
        // 자식은 부모 범위에 있는 변수를 사용할 수 있지만,
        console.log('자식에서 message : ', message); // 자식에서 message :  hello
        let childMessage = 'hello';
    }
    // 자식 범위 안에 있는 값을 부모에서는 사용 X
    // error -> childMessage is not defined
    // console.log(childMessage);
}
printMessage();
// console.log(message);

// 6. Return Value
function sum(a, b){
    return a + b;
     // 리턴 값이 없다는 것 = return undefined; (생략 가능)
}
const result = sum(1,2); // 3
console.log(`sum : ${sum(1, 2)}`);

// 7. Early Return, early exit
// bad
// 조건이 많을 때는, 조건이 맞지 않을 경우
function upgradeUser(user){
    if(user.point > 10){
    }
}

// good
// 다음과 같이 빨리 return하고 조건이 맞을 때만 필요한 로직을 실행하도록
// 하는 것이 효율적
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
}

// Function Expression
/*
First-class function
- 함수가 다른 변수처럼 취급됨
- 함수를 변수에 대한 값으로 지정할 수 있음
- 함수를 다른 함수에 인수로 전달할 수 있음
- 다른 함수에 의해 반환될 수 있음

1. 함수 표현
- 함수 선언은 정의 된 것보다 일찍 호출 될 수 있다. (호이스팅)
-> 함수를 선언하기 전에 호출할 수 있음
- 실행이 도달하면 함수 표현식이 생성됨
*/
const print = function() { // anonymous function(익명 함수)
    console.log('print'); 
}

// named funciton
// 디버깅할 때 디버깅의 stack trace에 함수 이름이 나오게 하기 위한 것
// 함수 안에서 함수 자신 스스로를 부르기 위해 (recursions)
/*
다음과 같이 함수 이름을 지정해 작성하는 것도 가능
const print = function print() { // named function
    console.log('print');
    print();
}
*/

print(); // print
const printAgain = print;
printAgain(); // print
const sumAgain = sum;
console.log(sumAgain(1,3)); // 4

// 2. Callback function using function expression
// 상황에 맞는 함수를 호출하도록 정의하는것, => callback function
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        // 정답이 love you인 경우 callback 함수로 printYes(); 호출
        printYes();
    }else {
        // 정답이 love you가 아닌 경우 callback 함수로 printNo(); 호출
        printNo();
    }
}

// anonymous function 
const printYes = function() {
    console.log('yes!');
}

// named function
const printNo = function print() {
    console.log('no!');
}

randomQuiz('wrong', printYes, printNo); // no!
randomQuiz('love you', printYes, printNo); // yes!

// Arrow Function
// 항상 익명
// const simplePrint = function() {
//     console.log('simplePrint!');
// };

const simplePrint = () => { console.log('simplePrint!') };
simplePrint(); // simplePrint!
const add = (a, b) => a + b;
/*
const add = function (a,b) {
    return a+b;
}
*/
// 블럭이 필요한 경우 블럭 사용 가능
// 하지만 블럭을 사용하면 반환값(return)이 있어야 함!
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIEF : Immediately Invoke Function Expression
// 함수를 선언함과 동시에 호출하는 것
(function hello() {
    console.log('IIFE'); // IIFE
})();

// Quiz
// function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder
//Answer
function calculate(command, a, b){
    switch(command){
        case 'add' :
        return a + b;

        case 'substract' :
        return a - b;
        
        case 'divide' : 
        return a / b;

        case 'multiply' :
        return a * b;

        case 'remainder' :
        return a % b;

        default :
        throw Error('unknown command');
    }
}

console.log(calculate('add', 2, 3)); // 5
console.log(calculate('substract', 2, 3)); // -1
console.log(calculate('divide', 2, 3)); // 0.6666666666666666
console.log(calculate('multiply', 2, 3)); // 6
console.log(calculate('remainder', 2, 3)); // 2