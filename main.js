let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
window.onscroll = () => {
menu.classList.remove('fa-times');
navbar.classList.remove('active');
}
menu.addEventListener('click', () => {
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
});

videoBtn.forEach(btn =>{
btn.addEventListener('click', ()=>{
document.querySelector('.controls .active').classList.remove('active');
btn.classList.add('active');
let src = btn.getAttribute('data-src');
document.querySelector('#video-slider').src = src
});
});

var swiper = new Swiper(".teachers-slider", {
spaceBetween: 20,
grabCursor: true,
loop: true,
pagination: {
el: ".swiper-pagination",
clickable: true,
},
breakpoints: {
540: {
slidesPerView: 1,
},
768: {
slidesPerView: 2,
},
1024: {
slidesPerView: 3,
},
},
});


