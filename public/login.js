async function login (event) {
  event.preventDefault();
  
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  let formData={
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
  await fetch("http://localhost:3000/users/login", options).then(res => res.json()).then(data => { console.log('data: ', data);
  localStorage.setItem("user",JSON.stringify(data))
  window.location.href="./notes.html"
  console.log('window.location: ', window.location.pathname.split("/"));
})

  console.log("FormData" , formData);

};
document.addEventListener('DOMContentLoaded',function(){
let loginform =document.getElementById('loginform');

console.log("loginForm", loginform)
loginform?.addEventListener('submit',login)
  
});