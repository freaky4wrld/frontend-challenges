const slides = document.querySelectorAll('.slide')
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');


btn.addEventListener('click', ()=>{
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
})

const arraySlides = []

slides.forEach((slide)=>{
    arraySlides.push(slide)
})

let index = 0

const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')

nextBtn.addEventListener('click', ()=>{
    if (index>=arraySlides.length-1){
        index = 0
        hideSlide(arraySlides.length-1)
        arraySlides[index].classList.toggle('hidden')
        arraySlides[index].classList.toggle('flex')
        arraySlides[index].classList.toggle('animate-[slide_1.5s-ease-in-out]')
        console.log(index)
    }else{
        hideSlide(index);
        index +=1;
        arraySlides[index].classList.toggle('hidden')
        arraySlides[index].classList.toggle('flex')
        arraySlides[index].classList.toggle('animate-[slide_1.5s-ease-in-out]')
        console.log(index)
    }
})

prevBtn.addEventListener('click', ()=>{
    if (index<=0){
        index = arraySlides.length-1
        hideSlide(0)
        arraySlides[index].classList.toggle('hidden')
        arraySlides[index].classList.toggle('flex')
        arraySlides[index].classList.toggle('animate-[slide_1.5s-ease-in-out]')
        console.log(index)
    }else{
        hideSlide(index);
        index -=1;
        arraySlides[index].classList.toggle('hidden')
        arraySlides[index].classList.toggle('flex')
        arraySlides[index].classList.toggle('animate-[slide_1.5s-ease-in-out]')
        console.log(index)
    }
})

function hideSlide(index){
    arraySlides[index].classList.toggle('hidden')
    arraySlides[index].classList.toggle('flex')
    arraySlides[index].classList.toggle('animate-[slide_1.5s-ease-in-out]')
}
