'use strict';

// 2. variable : 변경될 수 있는 값
// let (ES6에서 추가된 변수)

let name = 'ellie'; // 변수 name에 값 ellie 할당
console.log('name : ', name);

name = 'hello'; // 다시 변수 name에 hello 할당
console.log(name);

// var (don't ever use this !)

// 변수를 선언하기도 전에 사용할 수 있음
// (1) var를 사용하면 안되는 이유 - hoisting

console.log(age); // console 창에 undefined(변수는 선언되었지만 값이 할당되지 않았네요)
age = 4;
console.log(age); // var를 선언하지도 않았는데 console에 4가 출력됨
var age;
// var hoisting(끌어올려주다)
// 호이스팅은 어디에 선언했냐에 상관 없이 항상 제일 위로 선언을 끌어 올려주는 것


// (2) var를 사용하면 안되는 이유 - block 레벨이 없음
{
    num = 4;
    var num;
} // 블록 레벨 안에만 값을 할당해도 어디에서나 값이 출력됨
console.log('num : ', num);

/*
val = 4; // let을 선언하기도 전에 값을 넣으면 어떡해! 하고 에러 발생!!! (이게 정상)
let val;
*/



// 4. Variable types
// (1) Primitive Type, single item : number, string, boolean, null, undefined, symbol
// 더이상 작은 단위로 나눠질 수 없는 한가지의 아이템

// (2) Object Type, box container
// 싱글 아이템들을 묶어서 한 단위, 한 박스 단위로 관리하는 것

// (3) function, first-class function

// 자바스크립트에서는 데이터 타입을 선언하지 않아도 된다!
// 타입이 다이나믹하게 결정되기 때문!
let a = 1;
let b = 1.2;

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value : ${count}, type : ${typeof count}`); // value : 17, type : number
console.log(`value : ${size}, type:${typeof size}`); // value : 17.1, type:number

const infinity = 1 / 0; // 0으로 나누면 무한대의 값이 됨
const negativeInfinity = -1 / 0; // -1을 0으로 나누면 NEGATIVE INFINITY가 됨
const nAn = 'not a number' / 2; // 숫자가 아닌 값을 숫자로 나누게 되면 NaN이 출력됨
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// 나중에 DOM 요소의 포지션을 바꾸거나 계산할 떄 나누고자 하는 값이 0인지, 숫자가 아닌 값인지가 아닌지 확인해야한다!
// valid 여부 확인

// bigInt
const bigInt = 12345678901234567890123456789012345678901234567890n;
console.log(`type :  ${typeof bigInt}`); // type :  bigint

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`); // value : hello brendan, type : string
const helloBob = `hi ${brendan}!`; // template literals(string)
// 백틱(``) 기호를 이용해 문자열을 입력하고 $ 안에 변수를 넣으면 값을 이어서 출력해줌

// 1. 백틱 미사용
console.log('value : ' + helloBob + 'type : ' + typeof helloBob); // value : hi brendan!type : string
// 2. 백틱 사용
console.log(`value : ${helloBob}, type:${typeof helloBob}`); // value : hi brendan!, type:string

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other values
const canRead = true;
const test = 3 < 1; // false
console.log(`value : ${canRead}, type: ${typeof canRead}`); // value : true, type: boolean
console.log(`value : ${test}, type : ${typeof test}`); // value : false, type : boolean

// null : 텅텅 비어있는 empty 값
let nothing = null; 
console.log(`value : ${nothing}, type : ${typeof nothing}`); // value : null, type : object

// undefined : 선언은 되어있지만, 값이 지정되어 있지 않은 상태
// 비어있는지, 값이 들어있는지도 명확하지 않은 상태
let x;
console.log(`value : ${x}, type : ${typeof x}`); // value : undefined, type : undefined

// symbol
/*
map이나 다른 자료 구조에서 고유한 식별자가 필요하거나, 동시에 다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때
고유한 식별자를 주기 위해 사용
*/
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

// 동일하게 string을 사용했을지라도 symbol1과 symbol2는 다름
// 주어진 string과는 상관없이 고유한 식별자를 만들때 사용
console.log(symbol1 === symbol2); // false

// 같은 symbol을 만들고 싶을 때 for 사용
// for : 주어진 string에 맞는 symbol 생성
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
// symbol은 그냥 출력하면 에러, 꼭 .description 사용해서 string으로 변화해서 출력
console.log(`value : ${symbol1.description}, type: ${typeof symbol1.description}`); // value : id, type: string

// 5. Dynamic Typing
// 자바스크립트는 타입을 선언하지 않더라도 런타임(프로그램이 동작)할 때 할당한 값에 따라 타입이 변할 수 있음
let text = 'hello';
// 배열의 0번째 글자, h를 가져옴
console.log(text.charAt(0)); // h
console.log(`value : ${text}, type: ${typeof text}`); // value : hello, type: string
text = 1;
console.log(`value : ${text}, type: ${typeof text}`); // value : 1, type: number
text = '7' + 5;
console.log(`value : ${text}, type: ${typeof text}`); // value : 75, type: string
text = '8' / '2';
console.log(`value : ${text}, type: ${typeof text}`); // value : 4, type: number
console.log(text.charAt(0)); 

// object
// 일상생활에서 보는 물건, 물체들을 대표할 수 있는 박스 형태
const ellie = {name : 'ellie', age : 20};
// const로 선언한 ellie 객체는 잠겨있지만, name값과 age값은 변경할 수 있음
ellie.age = 21;


// variable rw(read/write)
// varible은 메모리에 값을 읽고 쓰는게 가능!

// constant r(read only)
// const는 값을 읽기만 가능

// 3. Constant
// 한번 할당하면 값이 절대로 바뀌지 않음
// 변수를 이용하면 메모리 어딘가에 할당된 박스를 가리키고 있어서 포인터로 값을
// 계속 바꿔 나갈 수 있었으나
// const는 값을 가리키는 포인터가 잠겨있다. 값을 선언하고 할당하면 값을 절대로 바꿀 수 없음
// 값을 계속 변경할 수 있는 타입을 Mutable data type --> let
// 값이 한번 선언되면 변경할 수 없는 것 Immutable data type --> const
// 왠만하면 값이 한번 할당되면 다시는 바뀌지 않을 값에 대해서만 const로 선언
// const 사용 이유?
// 1. 보안상의 이유
// 2. 쓰레드 안전성
// 3. 사용자의 실수를 줄여줌

// note!
// Immutable data types : premitive types, frozen object(i.e. object.freeze())
// let name = 'ellie'를 할당하면, name에 새로운 값을 할당할 수는 있지만 
// ellie의 세번짜 글자만 바꾸던지 하는 방법은 X
// Mutable data types : all objects by default are mutable in JS

