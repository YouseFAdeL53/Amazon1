// Click On Toggle Make Class On Link

let toggle = document.getElementById("toggle");
let links = document.querySelector(".links");

toggle.addEventListener("click", function () {
  links.classList.toggle("show-links")
});





let myImg = document.querySelector(".img");
let allImg = document.querySelectorAll(".first .box .image img");

allImg.forEach((img) => {
  img.addEventListener("click", function () {
    myImg.src = this.src;
  })
})


let mySign = document.querySelector(".user-1");
let myContact = document.querySelector(".myuser");
let myExit = document.getElementById("exit");



let signUp = document.querySelector(".user-2");
let myReg = document.querySelector(".register");
let Exit = document.getElementById("exit2");

let myClick = document.getElementById("myclass2");
let myInfo = document.querySelector(".myuser-srv");
let myRegister = document.querySelector(".reg-srv");





