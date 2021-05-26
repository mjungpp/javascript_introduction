// Don't give up
// 포기하지 마세요!

// 함수?
// 1. 함수 선언
// 2. 함수 호출

                    // 전달받을 인자
function doSomething(add) {
    console.log('do something 실행됨'); // do something 실행됨
    console.log(add);
    /*
    ƒ add(a, b) {
    const sum = a + b; // a + b의 값을 sum에 할당
    return sum;
    }
    */
    const result = add(2, 3);
    console.log(`result : ${result}`); // result : 5
} // 함수 선언

function add(a, b) {
    const sum = a + b; // a + b의 값을 sum에 할당
    return sum;
}

// 함수 호출
doSomething(add); // doSomething의 인자로 add 함수 자체를 전달

const addFun = add;
console.log(`addfun :${add}`);
/*
    addfun :function add(a, b) {
        const sum = a + b; // a + b의 값을 sum에 할당
        return sum;
    }
*/
addFun(5, 6);
// -------------------------------------------------------------------
// ❌ 자주 하기 쉬운 오류! ㅠㅠㅠ
// doSomething(add()); 
// add()와 같이 기술하면, doSomething이 호출되기 전에 add()가 수행됨
// 1. add() 메소드의 return값인 sum이 doSomething의 인자로 들어감
// 2. add() 안에 어떤 인자도 넘기지 않았기 때문에 NaN(Not a Number)이 출력됨
// -------------------------------------------------------------------
const result = add(1, 2);
console.log(`result:${result}`); // result:3
