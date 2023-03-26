const users = [{
    mail: "mymail@mail.dk",
    password: "mypassword1234",
},
    {
    mail: "isa@mail.dk",
    password: "isa",
    }
];

const loginContainer = document.getElementById("loginContainer");

// //Show and hide function for login
// function showLoginContainer() {
//     loginContainer.classList.add("loginVisible");
// }
// function hideLoginContainer() {
//     loginContainer.classList.remove("loginVisible");
// }

function submitLoginForm() {
    const userMail = document.getElementById("userMail").value;
    const userPassword = document.getElementById("userPassword").value;
    const rememberMe = document.getElementById("rememberMe").checked;
    // Empty error message box
    setErrorMessage("");

    // Check that form is filled correct before looking up user in "database"
    if (userMail === "" || userPassword === "") {
        setErrorMessage("Felter ikke udfyldt");
    } else {
        // Form is filled correct. Find user in "database"
        const user = findUserByMail(userMail);
        // Check whether a user was found at all
        if (user === null){
            setErrorMessage("E-mail og/eller adgangskode er ikke korrekt.");
        } else {
            // A user was found. Check if passwords match
            if (userPassword !== user.password){
                setErrorMessage("E-mail og/eller adgangskode er ikke korrekt.");
            } else {
                // Passwords match; Login: success
                location.href = '../navSite/navSite.html';
            }
        }
    }
}

//error message recipe
function setErrorMessage(errorMessage) {
    if (errorMessage === "") {
        // Set error message box to empty if string in parameter is an empty string
        document.getElementById("errorMessageContainer").innerHTML = "";
    } else {
        // Otherwise, set error message box content to a generic headline and a custom paragraph containing the content of the parameter
        document.getElementById("errorMessageContainer").innerHTML = "<p>" + errorMessage + "</p>";
    }
}

function findUserByMail (mail) { //inputting mail
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].mail === mail) {
            foundUser = users[i]; //since im changing this variable it will give an error, unless the variable type is let
            break;
        }
    }
    return foundUser; //returns user, if found
}