// Optional Chaining (ES11)
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
{
    const person1 = {
        name : 'Ellie',
        job : {
            title : 'S/W Engineer',
            manager : {
                name : 'Bob',
            },
        },
    };
    const person2 = {
        name : 'Bob'
    };

    // 💩
    {
        function printManager(person){
            console.log(person.job.manager.name);
        }
        printManager(person1);
        // printManager(person2); // manager가 존재하지 않아 --> error 발생
    }
    // ✨
    {
        function printManager(person){
            console.log(person.job?.manager?.name);
        }
        printManager(person1); // Bob
        printManager(person2); // undefined
    }
}
// Nullish Coalescing Operator (ES11)
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

    // Logical OR operator
    // false : false, '', 0, null, undefined,
    // 💩
{    
    {
        const name = 'Ellie';
        const userName = name || 'Guest'; // name이 false면 Guest가 수행됨
        console.log(userName); // Ellie
    }

    {
        const name = null;
        const userName = name || 'Guest'; // name이 null이거나 undefined일 경우에만 수행하고 싶은데, 문자열이 비어있는 ''경우도 false인 Guest로 할당됨!
        console.log(userName);

        const num = 0;
        // 숫자가 0이라는 값이 있음에도 불구하고 undefined가 출력됨
        const message = num || 'undefined';
        console.log(message);
    }

    
    // ✨
    {
        // 변수에 값이 있다면, 그 값을 할당하고 값이 없다면 ?? 뒤의 값이 할당됨
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName);

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message);
    }
}