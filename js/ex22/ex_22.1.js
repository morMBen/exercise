const myForm = document.querySelector('form[name="my-form"]');
// console.log(myForm);
myForm.addEventListener("submit", function (event) {


    confirm(`Please confirm Your information:
    
    Your name is: ${event.currentTarget.name.value}?
    You are ${event.currentTarget.age.value} years old?
    Your Email adress is ${event.currentTarget.email.value}?`) ? null : event.preventDefault();
})