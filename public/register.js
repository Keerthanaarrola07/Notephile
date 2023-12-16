async function register(event) {
    event.preventDefault();

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;  
    let username = document.getElementById("username").value; 
    let password = document.getElementById("password").value;

    let formData = {
        firstname,
        lastname,
        username,
        password,
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }
    await fetch("http://localhost:3000/users/register", options).then(res => res.json()).then(data => { 
        
        console.log('data: ', data);
        if(data?.UserId){
            console.log('data: ', data);
            
            document.getElementById('registerForm').reset();
            window.location.href="./login.html"
        }
     })

    console.log(formData);
};
document.addEventListener('DOMContentLoaded', function () {
    let registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', register)

});