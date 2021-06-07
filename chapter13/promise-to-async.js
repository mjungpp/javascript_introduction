
// async & await를 이용해 하단 코드 바꿔보기
class UserStorage {

    async loginUser(id, password){
        if(
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')
        ){
            return id;
        }else {
            throw 'error : id or password not found!';
        }
    }

    async getRoles(user){
       if(user === 'ellie'){
           return ({name : 'ellie', role : 'admin'});
       }else {
           throw 'error : no access';
       }
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);