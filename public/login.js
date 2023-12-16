async function login (event) {
  event.preventDefault();
  
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  let formData={
  username: username, 
  password: password,
  };
  const options = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
  }
  await fetch("http://localhost:3000/users/login", options).then(res => res.json()).then(data => { //console.log('data: ', data);
  if(data.UserId)
{
  //localStorage.setItem("user",JSON.stringify(data))
  const expirationTime = new Date();
  expirationTime.setHours(expirationTime.getHours() + 5);
  setCookie('userId', data.UserId, { expires: expirationTime });
  window.location.href="/notes"
}  
else{
  alert(data.message)
}
 
  //console.log('window.location: ', window.location.pathname.split("/"));
})

  //console.log("FormData" , formData);

};
document.addEventListener('DOMContentLoaded',function(){
let loginform =document.getElementById('loginform');

//console.log("loginForm", loginform)
loginform?.addEventListener('submit',login)
  
});
function setCookie(name, value, options = {}) {
  if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

  for (let option in options) {
      updatedCookie += '; ' + option;
      if (options[option] !== true) {
          updatedCookie += '=' + options[option];
      }
  }

  document.cookie = updatedCookie;
}