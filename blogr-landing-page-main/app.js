const menuExpandBtn = document.querySelectorAll('.icon');

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
    })
})

