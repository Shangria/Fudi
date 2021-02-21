window.addEventListener('load', function () {
    const menuOdj = [
        {href: './index.html', name: 'Home'},
        {href: './index.html', name: 'Home'},
        {href: './index.html', name: 'Home'},
        {href: './index.html', name: 'Home'},
    ];

    const hamburgerBtn = document.getElementById('header__hamburger-btn');
    const headerInner = document.getElementById('header__inner');
    const menuList = document.createElement('ul');
    menuList.classList.add('header__menu');

    hamburgerBtn.addEventListener('click', function () {
        if (hamburgerBtn.classList.toggle('header_active-hamburger')) {
            renderMenu(menuOdj, headerInner);
        } else {
            removeContainer(menuList);
        }
    });

    function renderMenu(obj, container) {
        menuList.innerHTML = '';
        obj.forEach(function (item) {
            const li = document.createElement('li');
            li.classList.add('header__list-menu');
            menuList.appendChild(li);
            li.innerHTML = `<a href=${item.href}>${item.name}</a>`
            container.appendChild(menuList);
        })
    }

    function removeContainer(container) {
        container.remove();
    }
})