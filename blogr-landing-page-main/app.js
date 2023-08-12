const menuExpandBtn = document.querySelectorAll('.icon');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const optionsList = document.querySelector('.grouped');
menuExpandBtn.forEach((btn) =>{
    btn.addEventListener('click', (event) =>{
        let whichOptionToOpen = event.target.getAttribute('id').toLowerCase();
        let subOptionId = '';
        switch (whichOptionToOpen) {
            case 'product':
                subOptionId = document.querySelector('#product');
                break;
            case 'company':
                subOptionId = document.querySelector('#company');
                break;
            case 'connect':
                subOptionId = document.querySelector('#connect');
                break;
            default:
                break;
        }
        console.log(subOptionId)
        subOptionId.classList.toggle('show');
        optionsList.style.height = '54vh';
    })
})


menuBtn.addEventListener('click', () =>{
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block'; 
    optionsList.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'block'; 
    optionsList.style.display = 'none';
})

