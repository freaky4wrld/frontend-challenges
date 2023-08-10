const submitBtn = document.querySelector('#submit-btn');
const supportCard = document.querySelector('.support-card-component');
const thankYouCard = document.querySelector('#thank-you-card');
const buttons = document.querySelectorAll('.rating-star');
const ratingDisplay = document.querySelector('.rating-display');

function disableAllSelection(){
    buttons.forEach((btn) => {
        btn.setAttribute('disabled','true');
    })
}
function enableAllSelection(){
    buttons.forEach((btn) => {
        btn.setAttribute('disabled','false');
    })
}

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let ratingValue = event.target.innerText;
      ratingDisplay.innerText = `You selected ${ratingValue} out of 5`;
      event.target.style.backgroundColor = 'hsl(25, 97%, 53%)';
      event.target.style.color = 'white';
      event.target.style.borderColor = 'hsl(25, 97%, 53%)';
      setTimeout(disableAllSelection,500);
      setTimeout(enableAllSelection,500);
    });
  });


submitBtn.addEventListener('click',() =>{
    supportCard.classList.toggle('no-show');
    thankYouCard.style.display = 'flex';
})