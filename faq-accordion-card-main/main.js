const btnIcon = document.querySelectorAll('.accordian-btn');
const faqSection = document.querySelector('#faq-section');
btnIcon.forEach((btn) =>{
    btn.addEventListener('click', (event) => {
        let answerToOpen = event.target.getAttribute('id');
        let answerToOpenElement = document.querySelector(`.${answerToOpen}`);
        answerToOpenElement.classList.toggle('show');
        btn.classList.toggle('rotate');
        // faqSection.style.padding = '2rem 3rem 2rem 0';
    })
})