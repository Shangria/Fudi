window.addEventListener('load', function () {
    const counters = document.querySelectorAll('[data-counter-max]');

    counters.forEach(function (countElem) {
        const value = countElem.getAttribute('data-counter-max');

        const time = 2000;//ms
        const timePerTick=100;

        function countNumber(value,elem) {
            debugger
            const stopCount = Number(value.replace(',', ''));
            let startCount = 0;
            const step = Math.round(timePerTick*stopCount/time);

            const interval = setInterval(() => {
                debugger
                startCount = startCount + step;
                if (startCount >= stopCount) {
                    startCount=stopCount
                    clearInterval(interval);
                }
                elem.innerText =formatNumber(startCount);
            }, timePerTick)
        }
        function formatNumber (num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        }

        countNumber(value, countElem);
    })
});