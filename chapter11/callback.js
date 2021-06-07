'use strict';

// 1. 동기와 비동기
// Javascript is synchronous (자바스크립트는 동기적)
// <-> asynchronous(비동기) : 언제 코드가 수행될 지 알 수 없는 것
// Execute the code block by orger after hoisting
// - 호이스팅이 된 이후부터 코드가 우리가 작성한 순서에 맞춰 하나씩 동기적으로 실행됨
// hoisting : var, function declartion과 같은 선언들이 가장 위로 끌어올려지는것,
// 호이스팅이 된 이후부터 코드가 나타난 순서로 자동적으로 실행
console.log('1');
// setTimeout() : 지정한 시간이 지나면 콜백함수(전달한 함수를 나중에 부르는 것)를 호출하는 것
setTimeout(() => console.log('2'), 1000); // 1000 :1초
console.log('3');
/*
1
3
2
*/

// Synchronous Callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));
/*
1
3
hello
2
*/
// 자바스크립트의 실행순서
// 1. 함수의 선언을 가장 위로 끌어올려짐(hoisting) function printImmediately()
// 2. console.log('1');
// 3. console.log('3');
// 4. 함수 호출 printImmediately(() => console.log('hello'));
// 5. setTimeout(() => console.log('2'), 1000); // 1000 :1초 

// Asynchronous Callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

/*
1
3
hello
2
async callback
*/
// 자바스크립트의 실행순서
// 1. 함수의 선언이 가장 위로 끌어올려짐(hoisting)
// -> function printImmediately, function printWithDelay
// 2. console.log('1'); 동기
// 3. setTimeout(() => console.log('2'), 1000); // 1000 :1초 (비동기)
// 4. console.log('3'); 비동기
// 5. 함수 호출 printImmediately(() => console.log('hello')); 
// 6. 함수 호출 printWithDelay(() => console.log('async callback'), 2000); 비동기

// callback은 유용하게 쓰일 때도 있지만,
// callback을 계~~속 묶어나가게 되면 callback을 부르고 부르고 부르고 부르게 되면
// callback hell!🔥🔥 발생!!! ㅠㅠㅠㅠ

// callback hell example
class UserStorage {
    // 함수 1
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=> {
            if (
                (id === 'ellie' && password == 'dream') ||
                (id === 'coder' && password == 'academy')
            ) {
                onSuccess(id); // callback
            }else {
                onError(new Error('not found')); // callback
            }
        },2000);
    }
    // 함수2
    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'ellie'){
                onSuccess({name : 'ellie', role : 'admin'});
            }else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

// 1. 사용자에게 id와 password를 입력받음
// 2. 서버에게 login을 전송
// 3. login이 성공적이면 login에 성공한 id를 받아옴, 받아온 id를 이용해 역할을 요청해
// 4. 요청이 성공적으로 받아와진다면, 이름과 역할 값을 출력

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
            );
            },
            (error) => {
            console.log(error);
        }
    );
    },
    error => {
        console.log(error);
    }
);
// 콜백 체인의 문제점 -> 비즈니스 로직을 한눈에 이해하는 것이 너~무 어려움