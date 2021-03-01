const nav= document.querySelector("nav");
const inputText= document.getElementById("name");
const toggleBtn=document.getElementById("toggle");
inputText.focus();

toggleBtn.addEventListener("click",function(){
    nav.classList.toggle("hide");
})
