const title = document.getElementById('title');

console.dir(title);
title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "I own you now";

const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const helloC = document.querySelector(".duli h1:first-child");
console.log(helloC) 



function handleTitleClick(){
    title.style.color = "blue";
    console.log("title was clicked!");
}

function handleMouseEnter(){
    console.log("mouse is in here");
}

title.onclick = handleTitleClick;
title.addEventListener("mouseenter", handleMouseEnter); //remove event listener


function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("sos no wifi");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);