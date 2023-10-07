const form= document.querySelector("form"),
 emailField= form.querySelector(".email-field"),
 emailInput= emailField.querySelector(".email"),
 passField= form.querySelector(".create-password"),
 passInput= passField.querySelector(".password"),
 cPassField= form.querySelector(".confirm-password"),
 cPassInput= cPassField.querySelector(".cPassword");

 //Email Validtion
 function checkEmail(){
   const pattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   if(!emailInput.value.match(pattern)){
   return emailField.classList.add("invalid");
   }
   emailField.classList.remove("invalid");
 }

//hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach(eyeIcon => {
    eyeIcon .addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input");
       if (pInput.type === "password"){
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return pInput.type = "text";
       }
       eyeIcon.classList.replace("bx-show", "bx-hide");
       pInput.type = "password";
    })
})

//Password Validation
function createPass(){
const passPattern = 
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passInput.value.match(passPattern)){
      return passField.classList.add("invalid");
    }
     passField.classList.remove("invalid");
}

// Confirm password validation
function confirmPass(){
    if(passInput.value !== cPassInput.value || cPassInput.value === ""){
      return cPassField.classList.add("invalid");
    }
     cPassField.classList.remove("invalid");
}

 //Calling Function on form Submit
form.addEventListener("submit", (e) =>{
e.preventDefault(); //Preventing form submit
checkEmail();
createPass();
confirmPass();

//Calling function to key up
emailInput.addEventListener("keyup", checkEmail);
passInput.addEventListener("keyup", createPass);
cPassInput.addEventListener("keyup", confirmPass);

if (!emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
    ){
    location.href = form.getAttribute("action")
}
 });