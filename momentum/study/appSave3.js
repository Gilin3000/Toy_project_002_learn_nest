const h1 = document.querySelector("div.duli h1");

function handleTitleClick() {
    h1.classList.toggle("active");

}

h1.addEventListener("click", handleTitleClick);
