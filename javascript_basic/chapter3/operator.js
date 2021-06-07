if(true) {
    console.log('true!');
}else{
    console.log('false!');
}
// true!

// if 내부의 값이 true면 실행, false면 X
if(false) {
    console.log('true!');
}
// if 안의 값이 false이기 때문에 블록 내부의 코드 실행 x

// false : 0, -0, '', null, undefined, NaN
// true : -1, 'hello' ... (값이 들어있으면 true), [] (Object 자체이기 때문에, 비어있는 배열 자체라서 true)
// 프로그래밍 언어에서 값이 없거나, 비어있으면 false에 속한다.

let num; // 변수를 선언하고 값이 할당하지 않는다면, undefined가 할당되어짐
if(num) {
    console.log('true!');
}else{
    console.log('false!');
} // false!

let num2 = 9;
// num : num2에 data가 있다면, num2를 console에 출력
// && : 앞의 조건이 true여야 뒤가 실행됨, 현재 num2이 undefined이기 때문에, 뒤 문장은 수행되지 않음
num2 && console.log(num2);



let obj; // undefined
if(obj){
    console.log(obj);
} // obj가 undefined이므로 실행 안됨

// console.log(obj.name); // 없는 property에 접근, error시 프로그램이 죽음😭

// --> 따라서 다음과 같이 obj에 data가 있다면 obj.name에 접근해 값을 뽑도록 작성할것
obj && console.log(obj.name); 

let obj2 = {
    name : 'minjung'
}

// 1
obj2 && console.log(obj2.name); // minjung

// 2
if(obj2){
    console.log(obj2.name); // minjung
}

// 1과 2는 동일한 구문, 하지만 1번이 더 간결하고 깔끔!✨