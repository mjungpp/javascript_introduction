/* promise
: 약속, javascript에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 Object
정해진 장시간의 기능을 수행하고 나서 정상적으로 기능이 수행되었다면,
성공의 메세지와 함께 처리된 결과값 전달
기능을 수행하다 예상치 못한 문제가 발생했다면 error를 전달
*/ 

'use strict';
/* promise is a javascript 내장 object for asynchronous operation
promise의 2가지 공부 포인트
1. state(상태) - process가 무거운 operation을 수행하고 있는 중인지,
기능 수행이 완료되어 성공 or 실패했는지
- state : operation이 수행중일 때 - pending -> 완료된 상태 (fulfilled) 
or 파일을 찾을 수 없거나 네트워크에 문제가 있는 상태 (rejected)

2. producer & consumer의 차이점을 아는 것
- producer : 원하는 데이터를 제공하는 사람
- consumer : 제공받은 데이터를 쓸 사람
*/

// 1. producer
// 새로운 promise가 만들어 질때는, execute라는 함수가 바로 실행됨
const promise = new Promise((resolve, reject) => {
    // doing some heavy work(네트워크 통신, 파일을 받아서 읽어올 때 등)
    // promise 객체가 만들어진 순간, 바로 promise 내부 코드가 실행됨
    console.log('doing something'); 
    setTimeout(() => {
        resolve('ellie'); 
        // reject(new Error('no network')); Uncaught (in promise) Error: no network at 
    }, 2000);
});
// 2. consumers : then, catch, finally
// then() : promise가 정상적으로 수행되면
// 최종적으로 resolve라는 콜백함수에서 전달된 ellie라는 value가 들어옴
promise
    .then((value) =>  {
        console.log(value);
        /*
        doing something
        ellie
        finally
        */
    })
    // then을 호출, return된 promise의 catch를 등록
    .catch(error => {
        console.log(error);
        /*
        doing something
        Error: no network
        finally
        */
    })
    // 성공하든, 실패하든 관계 없이 무조건 마지막에 호출되어짐
    .finally(() => {console.log('finally');
    });
    /*
    doing something
    no network
    finally
    */

// 3. Promise 연결하기(Promise Chaning)
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(num -1), 1000);
    });
})
.then(num => console.log('num : ', num)); // num :  5


// 4. Error handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        // setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen() //
    .then(getEgg) // .then(hen => getEgg(hen)) - 위와 같은 코드를 다음과 같이 생략 가능
    // 만약, 계란을 받아올 때 문제가 생긴다면 계란이라는 재료를 빵으로 대체하고 싶다면?
    .catch(error => {
        return '🌭'; // 🌭 => 🍳
    })
    .then(cook) // .then(egg => cook(egg))
    .then(console.log) // .then(meal => console.log(meal));
// 🐓 => 🥚 => 🍳
    .catch(console.log); // Error: 🐓 => 🥚

