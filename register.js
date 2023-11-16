
function register(e){
    e.preventDefault();
    let firstName= document.getElementById("firsname").value;
    let lastName= document.getElementById("lastname").value;
    let username= document.getElementById("username").value;
    let password= document.getElementById("password").value;

let details = {
    firstName: firstname,
    lastName:lastname,
    username :username,
    password: password
};
console.log(details);

};
document.addEventListener('DOMContentLoaded',function(){
    let registerForm = document.getElementById("registerForm")
    registerForm.addEventListener('submit', register); 
});
