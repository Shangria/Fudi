window.addEventListener('load', function () {

    const sliders = document.querySelectorAll('[data-slider]');
    const dots = document.querySelectorAll('[data-dot]');
    let index = 0;


    callSliderFunctions();


    function callSliderFunctions() {
        activeSlide(sliders, index);
        activeDote(dots, index);
    }

    function activeSlide(arr, number) {
        arr.forEach(function (elem, indexElem) {
            elem.classList.remove('slider-reviews_active');
        })
        arr[number].classList.add('slider-reviews_active');
    }

    function activeDote(arr, number) {
        arr.forEach(function (elem, indexElem) {
            elem.classList.remove('slider-reviews_dot-active');
        })
        arr[number].classList.add('slider-reviews_dot-active');
    }

    const nextSlide = () => {
        if (index === sliders.length - 1) {
            index = 0;

        } else {
            index++;
            callSliderFunctions();
        }
    }

    const prevSlide = () => {
        if (index === 0) {
            index = sliders.length - 1;
            callSliderFunctions();
        } else {
            index--;
            callSliderFunctions();
        }
    }

    dots.forEach(function (elem, indexElem) {
        elem.addEventListener('click', function () {
            index = indexElem;
            callSliderFunctions();
        })
    })
})