const allSlides = document.querySelectorAll('.slider__item');

function* circularIterator(array, increment = 1) {
     let index = increment > 0 ? 0 : array.length - 1; 
     while (true) {
         yield array[index];
         index = (index + increment + array.length) % array.length; 
        };
    };

const sliderIterator = circularIterator(allSlides, 1);

const prevButton = document.querySelector('.slider__arrow_prev'); 
const nextButton = document.querySelector('.slider__arrow_next');

function switchSlide(increment) {
      const currentSlide = sliderIterator.next().value;
      currentSlide.classList.remove('slider__item_active');
      const nextSlide = sliderIterator.next(increment).value;
      nextSlide.classList.add('slider__item_active'); 
    }

prevButton.addEventListener('click', () => { switchSlide(-1); });
nextButton.addEventListener('click', () => { switchSlide(1); });