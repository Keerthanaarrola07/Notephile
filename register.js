
function register(e){
    e.preventDefault();
    let firstName= document.getElementById("firstName").value;
    let lastName= document.getElementById("lastName").value;
    let username= document.getElementById("username").value;
    let password= document.getElementById("password").value;

let details = {
    firstName: firstName,
    lastName:lastName,
    username :username,
    password: password
};
console.log(details);

};
document.addEventListener('DOMContentLoaded',function(){
    let registerform = document.getElementById("registerForm")
    registerform.addEventListener('submit', register); 
});
