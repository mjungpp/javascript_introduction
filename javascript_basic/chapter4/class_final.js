/*
class Counter {
    constructor(){
        this.counter = 0;
    }
    // class 내에 함수를 선언할 때에는 function을 붙이지 않아도 됨
    increase() {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0){
            console.log('yo!😎');
        }
    }
}

const coolCounter = new Counter();
coolCounter.increase(); // 1
coolCounter.increase(); // 2
coolCounter.increase(); // 3
coolCounter.increase(); // 4
coolCounter.increase(); 
// 5
    yo!😎
*/

/*
// 콜백 함수로 바꿔보기
class Counter {
    constructor(){
        this.counter = 0;
    }
    // class 내에 함수를 선언할 때에는 function을 붙이지 않아도 됨
    increase(runIf5Times) {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0){
            runIf5Times(this.counter);
        }
    }
}

const coolCounter = new Counter();
function printSomething(num) {
    console.log(`yo!😎 ${num}`);
    // alert(`wow!😎 ${num}`);
}
coolCounter.increase(printSomething); // 1
coolCounter.increase(printSomething); // 2
coolCounter.increase(printSomething); // 3
coolCounter.increase(printSomething); // 4
coolCounter.increase(printSomething); // 5
// yo!😎 5

coolCounter.increase(printSomething); // 6
coolCounter.increase(printSomething); // 7
coolCounter.increase(printSomething); // 8
coolCounter.increase(printSomething); // 9
coolCounter.increase(printSomething); // 10
// yo!😎 10

// 콜백 함수로 바꿨을 때의 장점
// -> 함수 안에 내부 동작을 자유롭게 변형할 수 있음
*/


// 콜백 함수 constructor에서 받기
class Counter {
    // constructor도 함수
    constructor(runEveryFiveTimes){
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0){
            // callback이 undefined가 아니라면 수행
            // 1.
            // if(this.callback){
            //     this.callback(this.counter);
            // }
            // 2.
            this.callback && this.callback(this.counter);
        }
    }
}

function printSomething(num) {
    console.log(`yo!😎 ${num}`);
}

// counter를 만들때 생성자에 원하는 callback 함수를 전달
// const coolCounter = new Counter(printSomething);
// const coolCounter = new Counter(alert);

const coolCounter = new Counter();
/*어떠한 인자도 전달하지 않으면, class의 constructor(runEveryFiveTimes) 내부의
runEveryFiveTimes는 undefined가 됨
--> class_final.js:74 Uncaught TypeError: this.callback is not a function 에러 발생
undefined를 호출할 수 없으므로, error가 됨
따라서 undefined가 아닐 때만 호출할 수 있도록 조건을 부여
*/
const printCounter = new Counter(printSomething);
// const alertCounter = new Counter(alertNum);

printCounter.increase(); // 1
printCounter.increase(); // 2
printCounter.increase(); // 3
printCounter.increase(); // 4
printCounter.increase(); // 5
// yo!😎 5

printCounter.increase(); // 6
printCounter.increase(); // 7
printCounter.increase(); // 8
printCounter.increase(); // 9
printCounter.increase(); // 10
// yo!😎 10