var nameInput = document.getElementById("userName");
var emailInput = document.getElementById("userEmail");
var passInput = document.getElementById("userPass");
var signInput = document.getElementById("signEmail");
var passSignInput = document.getElementById("signPass");
var users ;
 
if(localStorage.getItem("usersList")==null){
    var users=[];
}
else{
    users = JSON.parse(localStorage.getItem("usersList"));
}
function registerUser() {
    if (!isFormEmpty()) {
        if (isUserExist()) {
            showUserExistMessage();
        } else {
            var newUser = {
                name:nameInput.value,
                email:emailInput.value,
                password:passInput.value,
            };
            users.push(newUser);
            localStorage.setItem("usersList", JSON.stringify(users));
            showSuccessMessage();
        }
    } else {
        showRequiredMessage();
    }
}
function showWelcomeMessage() {
    document.getElementById("welcomeUser").innerHTML = `Welcome ${JSON.parse(localStorage.getItem("homeList"))}`;
}
function isUserExist() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === emailInput.value) {
            return true;
        }
    }
    return false;
}

function isLoginValid() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === signInput.value && users[i].password === passSignInput.value) {
            var userName = users[i].name;
            localStorage.setItem("homeList", JSON.stringify(userName));
            location.replace("main.html");
            return true;
        }
    }
}

function validateLogin() {
    if (isSignFormEmpty()) {
        showSignRequiredMessage();
    } else {
        if (isLoginValid()) {
        } else {
            showIncorrectMessage();
        }
    }
}

function resetForm() {
    nameInput.value = "";
    emailInput.value = "";
    passInput.value = "";
}

function isFormEmpty() {
    return nameInput.value === "" || passInput.value === "" || emailInput.value === "";
}

function isSignFormEmpty() {
    return signInput.value === "" || passSignInput.value === "";
}

function showRequiredMessage() {
    document.getElementById("required").innerHTML = `<span class='text-danger'>All inputs are required</span>`;
}

function showUserExistMessage() {
    document.getElementById("required").innerHTML = `<span class='text-danger'>Email already exists</span>`;
}

function showIncorrectMessage() {
    document.getElementById("result-sign").innerHTML = `<span class='text-danger'>Incorrect email or password</span>`;
}

function showSignRequiredMessage() {
    document.getElementById("result-sign").innerHTML = `<span class='text-danger'>All inputs are required</span>`;
}

function showSuccessMessage() {
    document.getElementById("required").innerHTML = `<span class='text-success'>Registration successful</span>`;
}
