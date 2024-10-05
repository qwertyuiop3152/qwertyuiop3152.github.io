let loginBtn = document.querySelector(".login-btn");
let dropLogin = document.querySelector(".drop-login");

loginBtn.onclick = () => {
    dropLogin.classList.toggle("drop-login-open");
};

let menu = document.querySelector(".menu-icon");
// let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle("move");
}

// UI
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });