'use strict';

// 1. shorthand property names
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
{
    const ellie = {
        name : 'ellie',
        age : 18
    };
    const name = 'minjung';
    const age = 27;

    const minjung1 = {
        // Ellie
        // name : name (name과 value가 동일하다면 축약해서 아래와 같이 사용할 수 있음) 
        name,
        // 18
        // age : age (name과 value가 동일하다면 축약해서 아래와 같이 사용할 수 있음) 
        age
    }

    const minjung2 = {
        name : name,
        age : age
    }
    console.log(ellie, minjung1, minjung2);
    /*
    {name: "ellie", age: 18} {name: "minjung", age: 27} {name: "minjung", age: 27}
    */
}

// 2. Destructuring Assignment
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
{
    // object
    const student = {
        name : 'anna',
        level : 1
    };

    // 💩
    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    // 👍
    {
        // object 내부에 있는 key의 이름을 {} 안에 정의
        const {name, level } = student;
        console.log(name, level);
    
        //  object의 key가 아닌 다른 이름으로 정의하고 싶다면?
        const {name : studentName, level: studentLevel } = student;
        console.log(studentName, studentLevel);
    }

    // array 🐶
    const animals = ['🐶','🐱'];

    // 💩
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    // ✨
    {
        const[first, second] = animals;
        console.log(first, second);
    }
}

// 3. spread syntax
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
{
    const obj1 = {key : 'key1'};
    const obj2 = {key : 'key2'};
    const array = [obj1, obj2];

    // array copy
    const arrayCopy = [...array]; // ...로 간단하게 배열 복사~! (주소 값만 복사 -> 동일한 object를 갖고 있음)
    console.log('array : ', array);
    console.log('arrayCopy : ', arrayCopy);

    const arrayCopy2 = [...array, {key : 'key3'}];
    obj1.key = 'newKey';
    console.log('array : ', array);
    console.log('arrayCopy : ', arrayCopy);
    console.log('arrayCopy2 : ', arrayCopy2);

    // 배열 뿐만 아니라 object도 copy가 가능하다!
    // object copy
    const obj3 = {...obj1};
    console.log('obj3 : ', obj3);

    // array concatenation
    const fruits1 = ['🍑', '🍓'];
    const fruits2 = ['🍌', '🥝'];
    const fruits = [...fruits1, ...fruits2]; // concat
    console.log('fruits1 : ', fruits1);
    console.log('fruits2 : ', fruits2);
    console.log('fruits : ', fruits);

    // object merge
    const dog1 = {dog1 : '🦮'};
    const dog2 = {dog2 : '🐶'};
    const dog = {...dog1, ...dog2};
    console.log('dog1 : ', dog1);
    console.log('dog2 : ', dog2);
    console.log('merge dog : ', dog);

    // 주의점!
    // 만약 병합하려는 객체의 key 값이 동일하면, 뒤에 있는 값이 앞을 덮어씌움!
    const cat1 = {cat : '🐱'};
    const cat2 = {cat : '🐈'};
    const cat = {...cat1, ...cat2};
    console.log('cat1 : ', cat1);
    console.log('cat2 : ', cat2);
    console.log('동일한 key merge : ', cat);
}

// 4. Default Parameters
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
console.clear();
// 💩
{
    function printMessage(message){
        if(message == null){
            message = 'default message';
        }
        console.log(message);
    }
    printMessage('hello');
    printMessage();
}

// ✨
{
    function printMessage(message = 'default message'){
        console.log(message);
    }
    printMessage('Hello');
    printMessage();
}

// 5. Ternary Operator
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// 💩
{
    const isCat = true;
    {
        let component;
        if(isCat){
            component = '🐱';
        }else{
            component = '🐶';
        }
        console.log('component : ', component);
    }
}

// ✨
{
    const isCat = true;
    const component = isCat ? '🐱' : '🐶';
    console.log('component : ', component);
    console.log(isCat ? '🐱' : '🐶');
}

// 6. Template Literals
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
{
    const weather = '🌤';
    const temparature = '16°C';

    // 💩
    console.log('Today weather is ' + weather + ' and temparature is ' + temparature);

    // ✨
    console.log(`Today weather is ${weather} and temparature is ${temparature}`);
}