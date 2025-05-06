const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const loginClearIcon = document.getElementById('clear-login');
const passwordClearIcon = document.getElementById('clear-password');
const togglePasswordIcon = document.querySelector('.toggle-password');

function checkInputs() {
    if (loginInput.value.length > 0 && passwordInput.value.length > 0) {
        loginButton.classList.add('active');
    } else {
        loginButton.classList.remove('active');
    }

    if (loginInput.value.length > 0) {
        loginClearIcon.style.opacity = '1';
        loginClearIcon.style.visibility = 'visible';
    } else {
        loginClearIcon.style.opacity = '0';
        loginClearIcon.style.visibility = 'hidden';
    }

    if (passwordInput.value.length > 0) {
        passwordClearIcon.style.opacity = '1';
        passwordClearIcon.style.visibility = 'visible';
        togglePasswordIcon.style.opacity = '1';
        togglePasswordIcon.style.visibility = 'visible';
    } else {
        passwordClearIcon.style.opacity = '0';
        togglePasswordIcon.style.opacity = '0';
        passwordClearIcon.style.visibility = 'hidden';
        togglePasswordIcon.style.visibility = 'hidden';
    }
}

function clearInput(inputElement) {
    inputElement.value = '';
    const inputEvent = new Event('input', {bubbles: true});
    inputElement.dispatchEvent(inputEvent);
    inputElement.focus();
}

loginInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

loginClearIcon.addEventListener('click', () => {
    clearInput(loginInput);
});

passwordClearIcon.addEventListener('click', () => {
    clearInput(passwordInput);
});

if (togglePasswordIcon) {
    togglePasswordIcon.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        if (type === 'password') {
            this.src = eyeOnIconUrl;
        } else {
            this.src = eyeOffIconUrl;
        }

        passwordInput.focus();
    });

} else {
    console.error("Toggle password icon not found!");
}

checkInputs();