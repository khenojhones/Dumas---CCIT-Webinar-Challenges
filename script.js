const generateBtn = document.querySelector('#generate-password');
let passwordField = document.querySelector('#exampleInputPassword1');

const generatePassword = (event) => {
    event.preventDefault();
    const value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"; // Fixed typo
    const len = 16;

    let password = "";
    for (let i = 0; i < len; i++) {
        const randomNumber = Math.floor(Math.random() * value.length);
        password += value.charAt(randomNumber);
    }

    passwordField.value = password;
};

generateBtn.addEventListener('click', generatePassword);