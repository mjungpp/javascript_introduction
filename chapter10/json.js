'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple","banana"]

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);
// {"name":"tori","color":"white","size":null,
// "birthDate":"2021-06-07T04:52:06.473Z"}

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);
// {"name":"tori","color":"white","size":null}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  /*
  key: name, value: tori
  key: color, value: white
  key: size, value: null
  key: birthDate, value: 2021-06-07T05:39:56.179Z
  key: jump, value: function () {
      console.log(`${this.name} can jump!`);
  }
  */
  return key === 'name' ? 'ellie' : value;
});
console.log(json); // key: name, value: tori

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
// {name: "tori", color: "white", size: null, 
// birthDate: Mon Jun 07 2021 14:37:04 GMT+0900 (대한민국 표준시)}
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  /*
  key: name, value: tori
  key: color, value: white
  key: size, value: null
  key: birthDate, value: 2021-06-07T05:38:12.680Z
  */
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
// {name: "tori", color: "white", size: null,
// birthDate: Mon Jun 07 2021 14:41:23 GMT+0900 (대한민국 표준시)}
rabbit.jump(); // tori can jump!
// obj.jump(); obj.jump is not a function

console.log(rabbit.birthDate.getDate()); // 7
console.log(obj.birthDate.getDate()); // 7