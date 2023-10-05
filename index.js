/* popup  passive menu_list open/close  */
const userIcon = document.getElementById('user-icon');
const popup = document.getElementById('popup');

userIcon.addEventListener('click', () => {
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
});
const loginLink = document.getElementById('open-login');
const registerLink = document.getElementById('open-register');

loginLink.addEventListener('click', () => {
    popup.style.display = 'none';
});
registerLink.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target !== userIcon && !popup.contains(event.target)) {
        popup.style.display = 'none';
    }
});



/*-----------------------------------------------------------------------------------------------------------*/
/* popup active menu-list open/close */
const popup__active = document.querySelector('.popup__active');

function togglePopUp() {
    popup__active.classList.toggle("show");
}

document.addEventListener('click', (event) => {
    if (!event.target.matches('.name')) {
        if (popup__active.classList.contains("show")) {
            popup__active.classList.remove("show");
        }
    }
});


/*-----------------------------------------------------------------------------------------------------------*/
/* login menu -> open popUp modal window from login link */
const openLogin = document.getElementById('open-login');
const closeLogin = document.getElementById('close-login');
const login = document.getElementById('login');
const closeLoginWindow = document.querySelector(".login-window");

openLogin.addEventListener('click', function (e) {
    e.preventDefault();
    register.classList.remove('active')
    login.classList.add('active');
})

closeLogin.addEventListener('click', () => {
    login.classList.remove('active')
})
closeLoginWindow.addEventListener('click', (event) => {
    if (event.target === closeLoginWindow) {
        login.classList.remove('active');
        closeLoginWindow.classList.remove('active');
    }
});



/*-----------------------------------------------------------------------------------------------------------*/
/* register menu -> open popUp modal window from register link */
const openRegister = document.getElementById('open-register');
const closeRegister = document.getElementById('close-register');
const register = document.getElementById('register');
const closeRegisterWindow = document.querySelector(".register-window");

openRegister.addEventListener('click', function (e) {
    e.preventDefault();
    login.classList.remove('active')
    register.classList.add('active');
})

closeRegister.addEventListener('click', () => {
    register.classList.remove('active')

})
closeRegisterWindow.addEventListener('click', (event) => {
    if (event.target === closeRegisterWindow) {
        register.classList.remove('active');
        closeRegisterWindow.classList.remove('active');
    }
});



/*-----------------------------------------------------------------------------------------------------------*/
/* open register window => link from register window */
const registerUser = document.getElementById('to-register');
const userAddRegister = document.getElementById('register');

registerUser.addEventListener('click', function (e) {
    e.preventDefault();
    login.classList.remove('active')
    userAddRegister.classList.add('active');
})



/*-----------------------------------------------------------------------------------------------------------*/
/* register to login -link from login window */

const newLoginUser = document.getElementById('add-login');
const newUserAddLogin = document.getElementById('login');

newLoginUser.addEventListener('click', function (e) {
    e.preventDefault();
    register.classList.remove('active')
    newUserAddLogin.classList.add('active');
})



/*-----------------------------------------------------------------------------------------------------------*/
/*open register window ->  open Button SignUp */
const signUpButton = document.getElementById('signup');
const registerSignUp = document.getElementById('register');
const registerAnchor = document.getElementById("main")

signUpButton.addEventListener('click', function (e) {
    e.preventDefault();
    registerSignUp.classList.add('active');
    registerAnchor.scrollIntoView({behavior: "smooth"});

})



/*-----------------------------------------------------------------------------------------------------------*/
/*open login window ->  open Button LogIn */
const logInButton = document.getElementById('log-in');
const registerLogIn = document.getElementById('login');
const loginAnchor = document.getElementById("main")

logInButton.addEventListener('click', function (e) {
    e.preventDefault();
    registerLogIn.classList.add('active');
    loginAnchor.scrollIntoView({behavior: "smooth"});
})

const errorLogIn = document.querySelector('.errorLogin');
const errorRegister = document.querySelector('.errorRegister');

errorLogIn.addEventListener('click', function (e) {
    e.preventDefault();
    alert('You are in the system. To use the Login or Register function - you need to Log out.')
})
errorRegister.addEventListener('click', function (e) {
    e.preventDefault();
    alert('You are in the system. To use the Login or Register function - you need to Log out.')
})



/*-----------------------------------------------------------------------------------------------------------*/
/*open myProfile window ->  link myProfile */
const openMyProfile = document.getElementById('my-profile');
const closeProfile = document.getElementById('close-profile');
const myProfile = document.getElementById('user-profile');
const closeProfileWindow = document.querySelector(".my-profile__window");

openMyProfile.addEventListener('click', function (e) {
    e.preventDefault();
    myProfile.classList.add('active');
})
closeProfile.addEventListener('click', () => {
    myProfile.classList.remove('active')
})
closeProfileWindow.addEventListener('click', (event) => {
    if (event.target === closeProfileWindow) {
        myProfile.classList.remove('active');
        closeProfileWindow.classList.remove('active');
    }
});



/*-----------------------------------------------------------------------------------------------------------*/
/*localStorage*/

/*Register*/
const usernameFirstName = document.getElementById('first-name');
const usernameLastName = document.getElementById('last-name');
const usernameEmail = document.getElementById('email');
const usernamePassword = document.getElementById('password');
const addUser = document.getElementById('register-user');

let users = JSON.parse(localStorage.getItem('usersArr')) || [];
console.log(users)

class NewUser {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

function registerNewUser() {
    users.push(new NewUser(usernameFirstName.value, usernameLastName.value, usernameEmail.value, usernamePassword.value));
    localStorage.setItem('usersArr', JSON.stringify(users))
}

addUser.onclick = registerNewUser;

/*LogIn*/

const userEmail = document.getElementById('login-email');
const userPassword = document.getElementById('login-password');
const buttonConfirm = document.getElementById('login-button');
const userActiveIcon = document.querySelector(".main-active__icon");
const userPassiveIcon = document.querySelector(".header-logo");
const userPassiveCard = document.querySelector(".find__card");
const userActiveCard = document.querySelector(".find__card-active");

if ('true' === localStorage.getItem('loginResult')) {
    // userPassiveIcon.style.backgroundColor = "white"
    userActiveIcon.style.visibility = "visible"
    userPassiveIcon.style.visibility = "hidden"
    userPassiveCard.style.display = "none"
    userActiveCard.style.display = "block"
    userActiveCard.style.display = "flex"
}

let usersConfirm = JSON.parse(localStorage.getItem('usersArr')) || [];
console.log(users)

buttonConfirm.onclick = function () {
    for (let i = 0; i < usersConfirm.length; i++) {
        if (usersConfirm[i].email === userEmail.value && usersConfirm[i].password === userPassword.value) {
            localStorage.setItem('loginResult', 'true');
        }
    }
}
/* LogOut */

const logOut = document.getElementById('log-out');
const userPassive = document.getElementById('user-icon')

if (localStorage.getItem('loginResult') === 'true') {

    logOut.addEventListener('click', function (e) {
        e.preventDefault();
        userActiveIcon.style.visibility = "hidden"
        userPassiveIcon.style.visibility = "visible"
        localStorage.setItem('loginResult', 'false');
        location.reload()
    })
}

logOut.onclick = function () {
    localStorage.setItem('loginResult', 'false');
}



/*-----------------------------------------------------------------------------------------------------------*/
/* add initials firstname+lastname name to MyProfile */

// const initialsActiveIcon = document.querySelector(".name");
// const initialsIcon = document.querySelector(".avatar-icon");
// const fullNameIcon = document.querySelector(".avatar-info");

users.forEach(user => {
    const initials = user.firstName.charAt(0).toUpperCase() + user.lastName.charAt(0).toUpperCase();
    const fullName = user.firstName + " " + user.lastName;
    const initialsActiveIcon = document.querySelector(".name");
    const initialsIcon = document.querySelector(".avatar-icon");
    const fullNameIcon = document.querySelector(".avatar-info");
    const fullNameActiveIcon = document.querySelector(".fullName-user");

    // const initialsP = document.createElement("p");
    // const initialsDiv = document.createElement("div");
    // const fullNameDiv = document.createElement("div");
    // initialsP.textContent = initials;
    // initialsDiv.textContent = initials;
    // fullNameDiv.textContent = fullName

    // initialsActiveIcon.appendChild(initialsP);
    // initialsIcon.appendChild(initialsDiv);
    // fullNameIcon.appendChild(fullNameDiv);
    initialsActiveIcon.textContent = initials
    initialsIcon.textContent = initials
    fullNameIcon.textContent = fullName
    fullNameActiveIcon.textContent = fullName
});

const divPassiveElement = document.querySelector('.popup__active');
const divActiveElement = document.querySelector('.name');

function divClickHandler() {
    popup__active.classList.toggle("show")
}

divPassiveElement.addEventListener('click', divClickHandler);

function updateDivClickHandler() {
    divPassiveElement.removeEventListener('click', divClickHandler);
    divPassiveElement.addEventListener('click', updateDivClickHandler);
}

updateDivClickHandler();



/*-----------------------------------------------------------------------------------------------------------*/
/* add random number to MyProfile */

function generateRandomNumber() {
    return Math.floor(Math.random() * 900000000) + 100000000;
}

function decimalToHex(decimalNumber) {
    return decimalNumber.toString(16).toUpperCase();
}

function generateAndDisplayCardNumber() {
    const randomNumber = generateRandomNumber();
    const cardNumberHex = decimalToHex(randomNumber);

    const titleElement = document.querySelector(".profile-text__active");
    const numbersElement = document.querySelector(".my-profile__numbers");
    const randomUserNumber = document.querySelector(".random-user__number");

    titleElement.textContent = cardNumberHex;
    numbersElement.textContent = cardNumberHex;
    randomUserNumber.textContent = cardNumberHex;
}
generateAndDisplayCardNumber();



/*-----------------------------------------------------------------------------------------------------------*/
/* visits counter */

const userLogged = localStorage.getItem('loginResult') === 'true';
if (userLogged) {
    if (localStorage.getItem('userLoginCount') === null) {
        localStorage.setItem('userLoginCount', 1);
    } else {
        const currentCount = parseInt(localStorage.getItem('userLoginCount'));
        localStorage.setItem('userLoginCount', currentCount + 1);
    }
    const userLoginCount = localStorage.getItem('userLoginCount');
    // console.log(userLoginCount)
    document.getElementById('userLoginCount').textContent = userLoginCount
    document.getElementById('user-active__account').textContent = userLoginCount
}



/*-----------------------------------------------------------------------------------------------------------*/
/* title */
const titleIcons = document.querySelectorAll(".main-active__icon");

users.forEach((user, index) => {
    const Name = `${user.firstName}`;
    if (titleIcons[index]) {
        titleIcons[index].setAttribute("title", Name);
    } else {
        console.error(`Element at index ${index} not found in titleIcons`);
    }
});


/*-----------------------------------------------------------------------------------------------------------*/
/* open login when user is not logged in or open library card when user is logged in */
const userLoggedIn = localStorage.getItem('loginResult') === 'true';
// console.log(userLoggedIn)

const bookButtonActive = document.querySelectorAll('.book-button');
const openLogIn = document.getElementById('login');
const closeLibraryCard = document.getElementById('library-close__profile');
const openLibraryCard = document.getElementById('library-card__wrapper');
const closeLibraryCardWindow = document.querySelector(".library-card__wrapper");
const bookAnchorPassive = document.getElementById('main');
const bookAnchorActive = document.getElementById('favorites')

for (let i = 0; i < bookButtonActive.length; i++) {
    bookButtonActive[i].addEventListener('click', function () {
        if (userLoggedIn) {
            openLibraryCard.classList.add('active');
            bookAnchorActive.scrollIntoView({behavior: "smooth"});
        } else {
            openLogIn.classList.add('active');
            bookAnchorPassive.scrollIntoView({behavior: "smooth"});
        }
    })
    closeLibraryCard.addEventListener('click', () => {
        openLibraryCard.classList.remove('active')
    })
    closeLibraryCardWindow.addEventListener('click', (event) => {
        if (event.target === closeLibraryCardWindow) {
            openLibraryCard.classList.remove('active');
            closeLibraryCardWindow.classList.remove('active');
        }
    })
}



/*-----------------------------------------------------------------------------------------------------------*/
/* card number entry restriction */
document.addEventListener("DOMContentLoaded", function () {
    const cardNumberInput = document.querySelector(".user-bank_card__info");
    const expirationCodeInputs = document.querySelectorAll(".user-bank_card__label input");
    const cvcInput = document.querySelector(".cvs-number");

    cardNumberInput.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "").substring(0, 16);
    });

    expirationCodeInputs.forEach(function (input) {
        input.addEventListener("input", function () {
            this.value = this.value.replace(/[^0-9]/g, "").substring(0, 2);
        });
    });

    cvcInput.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "").substring(0, 3);
    });
});



/*-----------------------------------------------------------------------------------------------------------*/
/* copy card number */

const copyButton = document.getElementById('icon_copy');
const cardNumber = document.querySelector('.my-profile__numbers');

copyButton.addEventListener('click', function() {
    const textarea = document.createElement('textarea');
    textarea.value = cardNumber.textContent.trim();

    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);

    alert('Your card number has been copied');
});










