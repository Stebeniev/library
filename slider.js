/*slider*/
const sliderImages = document.querySelectorAll('.photo');
const sliderLine = document.querySelector('.slider-line');
const sliderDots = document.querySelectorAll('.slider__dot');
const sliderBtnNext = document.querySelector('.slider__btn-next');
const sliderBtnPrev = document.querySelector('.slider__btn-prev');

let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlide);

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    // sliderLine.style.width = sliderWidth * sliderImages.length +'px';
    sliderImages.forEach(item => item.style.width = sliderWidth - 900 + 'px');


    rollSlider();
}

showSlide();

function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
    // thisSlide(sliderCount);
    updateButtonsAndDots(sliderCount);

}

function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length - 1;

    rollSlider();
    thisSlide(sliderCount);
    updateButtonsAndDots(sliderCount);
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px`;
}

function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    // sliderDots[index].classList.add('active-dot');
    // thisSlide.style.backgroundColor = "#BB945F"
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderDots);
    })
})

function updateButtonsAndDots(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');

    if (sliderCount === 0) {
        sliderBtnPrev.disabled = true;
        sliderBtnNext.disabled = false;
    } else if (sliderCount === sliderImages.length - 1) {
        sliderBtnPrev.disabled = false;
        sliderBtnNext.disabled = true;
    } else {
        sliderBtnPrev.disabled = false;
        sliderBtnNext.disabled = false;
    }
}

updateButtonsAndDots(sliderCount);
// thisSlide.style.backgroundColor = "#BB945F";


/*-----------------------------------------------------------------------------------------------------------*/