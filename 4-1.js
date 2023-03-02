
function checkPassword(userString) {
    function tryOut () {
        let password = 'rectangle'
        let result;
        if (userString == password) {
            result = 'Вход разрешен'
        } else {
            result = 'Неверный пароль'
        } 
        return result
    }
    return tryOut()
}



console.log(checkPassword('orange'))
console.log(checkPassword('Rectangle'))
console.log(checkPassword('rectangle'))