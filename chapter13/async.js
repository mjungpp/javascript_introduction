/* async & await
    - 기존에 존재하는 promise 위에 더 간편한 api를 제공(syntatic sugar)
    - 깔끔하게 promise를 사용할 수 있는 방법!
*/ 

// promise
/*
function fetchUser(){
    return new Promise((resolve, reject) => {
        // do network request in 10 secs.....
        resolve('ellie');
    });
}
*/

// 1. async
async function fetchUser(){
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await✨

function delay(ms){
    // 정해진 ms가 지나면 resolve를 호출하는 promise를 리턴
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    // throw 'error'; 에러 처리 pickFruits에서 try ~ catch로
    return '🍎';
}

async function getBanana(){
    await delay(1000);
    return '🍌';
}

function getBanana() {
    return delay(1000)
    .then(() => '🍌');
}

/*
콜백지옥!
function pickFruits() {
    return getApple()
    .then(apple => {
        return getBanana()
        .then(banana => `${apple} + ${banana}`);
    });
}
*/
async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. Useful Promise APIs
function pickAllFruits(){
    // 모든 promise를 병렬적으로 받을 때까지 모아줌
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
