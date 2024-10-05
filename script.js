const adminUser = "admin"
const adminPassword = "1234"


function realizarLogin() {

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value


    if (username === adminUser && password === adminPassword) {

        document.getElementById('admin-login').style.display = 'none'
        document.getElementById('admin-section').style.display = 'block'
    } else {

        document.getElementById('login-error').style.display = 'block'
    }
}
document.getElementById('login-button').addEventListener('click', realizarLogin)