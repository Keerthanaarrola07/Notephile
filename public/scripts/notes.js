const notesCont=document.querySelector(".notes-container");
const butn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

butn.addEventListener("click", ()=> {
    let inputBox=document.createElement("p");
    let img = document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="public/images/trash-solid.jpg";
    notesCont.appendChild(inputBox).appendChild(img);
})

notesCont.addEventListener("click", function(el){
    if(el.target.tagName=== "IMG"){
        el.target.parentElement.remove(); 
    }
})
