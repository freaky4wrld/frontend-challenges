const emailSection = document.getElementById('email');
const validationMessage = document.getElementById('validation-mssg');
const formSubmitElement = document.getElementById('form');  
const signUpCard = document.getElementById('sign-up-form');
const succesMsseageCard = document.getElementById('success-mssg');
const successEmailElement = document.getElementById('email-response');
const dismissBtn = document.querySelector('button[type="button"]');
emailSection.addEventListener('input', ()=>{
    resetEmailValidation();
    if(!emailSection.validity.valid){
        emailSection.classList.add('invalid');
        validationMessage.innerText = 'Valid email required';
    }
})

formSubmitElement.addEventListener('submit', (event)=>{
    event.preventDefault(); 
    successMessageShow();  
})

formSubmitElement.addEventListener('invalid', (event)=>{
    resetEmailValidation();
    resetAnimation();
    if(emailSection.value == ''){
        event.preventDefault();
        emailSection.classList.add('animate__animated','animate__shakeX');
        emailSection.classList.add('invalid');
        validationMessage.innerText = 'Please fill email';
    }

}, true);

dismissBtn.addEventListener('click', successMessageHide);


function resetEmailValidation(){
    validationMessage.innerText = '';
    emailSection.classList.remove('invalid');
}
function resetAnimation(){
    emailSection.classList.remove('animate__animated','animate__shakeX');
}

function successMessageShow(){
    succesMsseageCard.style.display = 'flex';
    signUpCard.style.display = 'none';
    successEmailElement.innerText = emailSection.value;
    succesMsseageCard.classList.add('animate__animated', 'animate__backInDown');
}
function successMessageHide(){
    succesMsseageCard.style.display = 'none';
    signUpCard.style.display = 'flex';
    signUpCard.classList.add('animate__animated', 'animate__backInLeft');
    resetEmailValidation()
    emailSection.value = '';
}