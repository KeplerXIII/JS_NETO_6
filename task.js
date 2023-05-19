const allSlides = document.querySelectorAll('.slider__item');
const prevArrow = document.querySelector('.slider__arrow_prev');
const nextArrow = document.querySelector('.slider__arrow_next');
const lenLine = allSlides.length;

nextArrow.addEventListener('click', () => {
    const currentSlide = document.querySelector('.slider__item_active')
    const nextElement = currentSlide.nextElementSibling;
    if (nextElement) {
        currentSlide.classList.remove('slider__item_active');
        nextElement.classList.add('slider__item_active');
    } else {
        currentSlide.classList.remove('slider__item_active');
        allSlides[0].classList.add('slider__item_active');
    }
});

prevArrow.addEventListener('click', () => {
    const currentSlide = document.querySelector('.slider__item_active');
    const prevElement = currentSlide.previousElementSibling;
    if (prevElement) {
        currentSlide.classList.remove('slider__item_active');
        prevElement.classList.add('slider__item_active');
    } else {
        currentSlide.classList.remove('slider__item_active');
        allSlides[lenLine-1].classList.add('slider__item_active');
    }
});