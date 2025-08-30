const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

const allChar = uppercase + lowercase + numbers + symbols;
const passLength = 16;
const passwordBox = document.getElementById('password');

function createPassword(){
    let password = " ";
    
    password += uppercase.charAt(Math.floor((Math.random())*uppercase.length));
    password += lowercase.charAt(Math.floor((Math.random())*lowercase.length));
    password += numbers.charAt(Math.floor((Math.random())*numbers.length));
    password += symbols.charAt(Math.floor((Math.random())*symbols.length));
    
    while(password.length < passLength){
        password += allChar.charAt(Math.floor((Math.random())*allChar.length));
    }
    passwordBox.value = password
}

function copyPassword() {
    const copy = passwordBox.value
    if (copy) {
        navigator.clipboard.writeText(copy);
    }
}