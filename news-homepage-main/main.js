const menu_btn = document.querySelector('.menu-btn');
const ul = document.querySelector('.nav-options');
const close_btn = document.querySelector('.show-btn');
const overlay_bg = document.querySelector('.overlay');
menu_btn.addEventListener('click', () =>{
    ul.classList.toggle('show');
    overlay_bg.classList.toggle('enabled');
})
close_btn.addEventListener('click', () =>{
    ul.classList.toggle('show');
    overlay_bg.classList.toggle('enabled');
})