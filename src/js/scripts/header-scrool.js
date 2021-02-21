window.addEventListener('scroll', function () {
    const headerScroll = document.getElementById('header__scroll');
    const headerInner = document.getElementById('header__inner');
    const scrollDown = window.pageYOffset;

    if (scrollDown >= 100) {
        headerScroll.classList.add('header_background-color');
        headerInner.style.padding='0';
    } else if (scrollDown === 0) {
        headerScroll.classList.remove('header_background-color');
        headerInner.style.padding='10px';
    }
});
