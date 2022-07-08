document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');

    const userEmail = emailField.value;
    // get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check emaail password
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        //one page to another
        window.location.href = 'banking.html';

    }

});