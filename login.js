function register(e){

    e.preventDefault();
  
    let username= document.getElementById("username").value;
    let password= document.getElementById("password").value;
  
  let UserDetails = {
    username :username,
    password: password
  };
  console.log(UserDetails);
  
  };
  document.addEventListener('DOMContentLoaded',function(){
    const loginPage = document.getElementById('loginForm');
    loginPage.addEventListener('submit', register); 
  });
