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
            if (elem[indexElem] === 0) {
                elem.classList.add('slider-reviews_active');
            } else {
                elem.classList.remove('slider-reviews_active');
            }
        })
        arr[number].classList.add('slider-reviews_active');
    }

    function activeDote(arr, number) {
        arr.forEach(function (elem, indexElem) {
            if (elem[indexElem] === 0) {
                elem.classList.add('slider-reviews_dot-active');
            } else {
                elem.classList.remove('slider-reviews_dot-active');
            }
        })
        arr[number].classList.add('slider-reviews_dot-active');
    }

    const nextSlide = () => {
        if (index === sliders.length - 1) {
            index = 0;

        } else {
            index++;
            activeSlide(sliders, index);
            activeDote(dots, index);
        }
    }

    const prevSlide = () => {
        if (index === 0) {
            index = sliders.length - 1;
            activeSlide(sliders, index);
            activeDote(dots, index);
        } else {
            index--;
            activeSlide(sliders, index);
            activeDote(dots, index);
        }
    }

    dots.forEach(function (elem, indexElem) {
        elem.addEventListener('click', function () {
            index = indexElem;
            console.log(index)
            callSliderFunctions();
        })
    })

    setInterval(nextSlide, 2000)
})