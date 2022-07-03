
let navLinks = document.getElementById("navLinks");
let closeIcon = document.getElementById("closeIcon");
let burgerIcon = document.getElementById("burgerIcon");


function showNav() {

navLinks.style.display = "flex";
closeIcon.style.display = "block";
burgerIcon.style.display = "none";

}

function hideNav() {

navLinks.style.display = "none";
closeIcon.style.display = "none";
burgerIcon.style.display = "block";

}