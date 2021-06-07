/* ✨ function
    - function은 메모리 공간에 { } 블록 단위로 저장되어 있다
    - add는 function이 있는 ref를 가리키고 있다,
    - 즉 함수를 전달한다는 것은 함수가 있는 ref를 가리키는 것과 동일한 것
*/
function add(num1, num2){
    return num1 + num2;
}

function print(){
    console.log('print!🌭');
}

const doSomething = add;
 // doSomething에는 add가 가리키는 function의 reference가 할당됨 (Object와 동일)
console.log(doSomething); 
/*
add(num1, num2){
    return num1 + num2;
}
*/

const result = doSomething(2, 3);
console.log(`result : ${result}`); // result : 5
const result2 = add(2, 3);
console.log(`result2 : ${result2}`); // result2 : 5

print(2,3,4);  // print!🌭
// 아무리 많은 input을 받더라도, print()에서는 이 input을 무시! (쓰지 않음)
// 아무런 인자도 필요로 하지 않는 function이기 때문에

function divide(num1, num2){
    return num1 / num2;
}
// surprise에는 add라는 함수 인자를 전달했기 때문에, operator = add
// operator : add의 reference가 복사되어 전달됨
function surprise(operator){
    const result = operator(2,3); // add를 수행하는 것과 동일한 결과!
    console.log(result); 

    const result2 = add(2,3); 
    console.log(result2); 
}

// surprise();
// operator is not a function -> 어떠한 인자도 전달하지 않았기 때문에 현재 operator : undefined

surprise(add);
// 5
// 5
surprise(divide);
// 0.6666666666666666
// 5