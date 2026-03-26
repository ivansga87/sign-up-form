const firstName = document.querySelector("#name");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email")
const phone = document.querySelector("#phone");
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmPassword")
const firstNameError = document.querySelector("#nameError")
const lastNameError = document.querySelector("#lastNameError")
const emailError = document.querySelector("#emailError")
const phoneError = document.querySelector("#phoneError")
const passwordError = document.querySelector("#passwordError")
const confirmPasswordError = document.querySelector("#confirmPasswordError")
const button = document.querySelector("button")
const errorMessages = document.querySelectorAll(".error-text")
const inputs = document.querySelectorAll("input")
 
firstName.addEventListener("input", () =>{
    if(firstName.value.length >= 2){
        firstName.classList.add("valid");
        firstName.classList.remove("invalid");
        firstNameError.hidden = true;
        
    }
    else {
        firstName.classList.add("invalid");
        firstName.classList.remove("valid");
        firstNameError.hidden = false;
        
    }
})


lastName.addEventListener("input", () =>{
    if(lastName.value.length >= 2){
        lastName.classList.add("valid");
        lastName.classList.remove("invalid");
        lastNameError.hidden = true;
        
    }
    else {
        lastName.classList.add("invalid");
        lastName.classList.remove("valid");
        lastNameError.hidden = false;
       
    }
})

email.addEventListener("input", () =>{
    
    if(email.value.includes("@") && email.value.length >= 6){
        email.classList.add("valid");
        email.classList.remove("invalid");
        emailError.hidden = true;
        
    }
    else {
        email.classList.add("invalid");
        email.classList.remove("valid");
        emailError.hidden = false;
        
    }
})


phone.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
    if(!e.target.value || e.target.value.length <= 8){
        phone.classList.add("invalid")
        phone.classList.remove("valid")
        phoneError.hidden = false;
        
    }
    else if(e.target.value.length > 8){
        phone.classList.add("valid")
        phone.classList.remove("invalid")
        phoneError.hidden = true;
    }
});

password.addEventListener("input", () =>{
     if(password.value !== confirmPassword.value){
        confirmPassword.classList.add("invalid");
        confirmPassword.classList.remove("valid")
        confirmPasswordError.hidden = false;
        
        
    }
    if(password.value.length >= 8){
        password.classList.add("valid");
        password.classList.remove("invalid");
        passwordError.hidden = true;
       
    }
    else {
        password.classList.add("invalid");
        password.classList.remove("valid");
        passwordError.hidden = false;
      
    }
})

confirmPassword.addEventListener("input", () =>{
    if(password.value !== confirmPassword.value){
        confirmPassword.classList.add("invalid");
        confirmPasswordError.hidden = false;
        
        
    }
    else if (password.value === confirmPassword.value){
        confirmPassword.classList.add("valid");
        confirmPassword.classList.remove("invalid");
        confirmPasswordError.hidden = true;
   
    }
})
button.addEventListener("click", (e) => {
    e.preventDefault();

    const hasErrors = Array.from(errorMessages).some(msg => !msg.hidden);
    const hasEmptyFields = Array.from(inputs).some(input => input.value.trim() === "");

    if(hasErrors){
        alert("Please fix the errors before submitting");
    }else if (hasEmptyFields){
        alert("please fill out the form before submiting")
    }else {
        alert("Form looks good! Submitting now...");
        location.reload();
       
    }
 
})