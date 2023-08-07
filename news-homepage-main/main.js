const menu_btn = document.querySelector('.menu-btn');
const ul = document.querySelector('.nav-options');
const close_btn = document.querySelector('.show-btn')
menu_btn.addEventListener('click', () =>{
    ul.classList.toggle('show');
})
close_btn.addEventListener('click', () =>{
    ul.classList.toggle('show');
})