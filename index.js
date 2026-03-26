let firstName = document.querySelector("#name");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let confirmPassword = document.querySelector("#confirmPassword")
let firstNameError = document.querySelector("#nameError")
let lastNameError = document.querySelector("#lastNameError")
let emailError = document.querySelector("#emailError")
let passwordError = document.querySelector("#passwordError")
let confirmPasswordError = document.querySelector("#confirmPasswordError")
let button = document.querySelector("button")
let ready = false;
button.addEventListener("click", (event) => {
    event.preventDefault();
    if(!ready){
        alert("Please review and correct mistakes")
    }else location.reload() 
})

firstName.addEventListener("input", () =>{
    if(firstName.value.length >= 2){
        firstNameError.hidden = true;
        firstName.classList.remove("invalid")
        firstName.classList.add("valid");
        ready = true;
    }
    else {
        firstName.classList.remove("valid")
        firstNameError.hidden = false;
        firstName.classList.add("invalid")
        ready = false;
    }
})


lastName.addEventListener("input", () =>{
    if(lastName.value.length >= 2){
        lastNameError.hidden = true;
        lastName.classList.remove("invalid")
        lastName.classList.add("valid");
        ready = true;
    }
    else {
        lastName.classList.remove("valid")
        lastNameError.hidden = false;
        lastName.classList.add("invalid")
        ready = false;
    }
})

email.addEventListener("input", () =>{
  
    if(email.value.includes("@") && email.value.length >= 2){
        emailError.hidden = true;
        email.classList.remove("invalid")
        email.classList.add("valid");
        ready = true;
    }
    else {
        emailError.hidden = false;
        email.classList.remove("valid")
        email.classList.add("invalid")
        ready = false;
    }
})

password.addEventListener("input", () =>{
    if(password.value.length >= 8){
        passwordError.hidden = true;
        password.classList.remove("invalid")
        password.classList.add("valid");
        ready = true;
    }
    else {
        password.classList.remove("valid")
        passwordError.hidden = false;
        password.classList.add("invalid")
        ready = false;
    }
})

confirmPassword.addEventListener("input", () =>{
    if(password.value !== confirmPassword.value){
        confirmPasswordError.hidden = false;
        confirmPassword.classList.add("invalid")
        ready = false;

    }
    else if (password.value === confirmPassword.value){
        confirmPasswordError.hidden = true;
        confirmPassword.classList.remove("invalid")
        confirmPassword.classList.add("valid")
        ready = true;
    }
})