const num = 1;
const num2 = 2;
const result = num + num2;
console.log(`result : ${result}`);

// 반복적으로 수행되는 일들이 있다면 함수로 만들자
// 함수로 만들면 -> 재사용이 가능

// 인자 : 외부로부터 값을 받아오는 것
            // 인자로 받아온 이름으로 { } (블록 내부)에서 값에 접근이 가능해짐
function add(num1, num2){
    return num1 + num2;
}

const sum = add(3, 4);
console.log(`sum : ${sum}`);


