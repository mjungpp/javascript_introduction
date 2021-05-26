// 5. callback hell을 promise를 이용헤 예쁘게 작성해보기~

// 수행 순서
// 1. 사용자에게 id와 password를 입력받음
// 2. 서버에게 login을 전송
// 3. login이 성공적이면 login에 성공한 id를 받아옴, 받아온 id를 이용해 역할을 요청해
// 4. 요청이 성공적으로 받아와진다면, 이름과 역할 값을 출력

class UserStorage {
    // 함수 1
    loginUser(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'ellie' && password == 'dream') ||
                    (id === 'coder' && password == 'academy')
                ) {
                    resolve(id);
                }else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }
    // 함수2
    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'ellie'){
                    resolve({name : 'ellie', role : 'admin'});
                }else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)
// .then(user => userStorage.getRoles)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);