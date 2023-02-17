const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password-confirmation');
const error = document.querySelector(".error");
const submitBtn = document.querySelector('#submit');
const form = document.querySelector('#form');

password.onblur = ( () => {
    if(password.value == '') {
        error.textContent = "Passwords must not be empty";
        form.setAttribute('onsubmit', 'return false');
    } else {
        error.textContent = "";
        form.removeAttribute('onsubmit')
    }
    console.log(error.textContent);
});

passwordConfirmation.onblur = ( () => {
    if(passwordConfirmation.value == '') {
        error.textContent = "Passwords must not be empty";
        form.setAttribute('onsubmit', 'return false');
    } else if (password.value != passwordConfirmation.value) {
        error.textContent = "Passwords must match";
        form.setAttribute('onsubmit', 'return false');
    } else {
        error.textContent = "";
        form.removeAttribute('onsubmit')
    }
});
