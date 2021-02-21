window.addEventListener('load', function () {
    const btnLogSign = document.getElementById('log-sign');


    btnLogSign.addEventListener('click', function () {
        renderPopup(logSign);
    });


    const logSign = {
        img: 'img/logo.png',
        title: 'SIGN-UP',
        inputName: 'Username',
        inputEmail: 'Email',
        inputPassword: 'Password',
        btn: 'SIGN-UP',
        text: "IF YOU ALREADY HAVE AN ACCOUNT?",
        link: 'LOG-IN'
    }

    function renderPopup(object) {
        const popup = document.createElement('section');
        popup.classList.add('popup');
        popup.id = 'popup'
        const popupBox = document.createElement('div');
        popupBox.classList.add('popup__box');
        popup.appendChild(popupBox);
        popupBox.innerHTML = `
                           <div class="popup__close" id="popup-close">x</div>
                           <div class="popup__logo">
                              <img src=${object.img} alt="logo">  
                           </div>
                           <div class="popup__title">${object.title}</div>
                           <form class="popup__form" action="" method="post">
                                <input class="popup__input" type="text" placeholder=${object.inputName}>
                                <input class="popup__input" type="email" placeholder=${object.inputEmail}>
                                <input class="popup__input" type="password" placeholder=${object.inputPassword}>
                                <button class="popup__form-btn" type="submit">${object.btn}</button>
                           </form>
                            <div class="popup__text">${object.text}
                                <a href="#" class="popup__link">${object.link}</a>
                            </div>`

        document.body.prepend(popup);


        const btnClose = document.getElementById('popup-close');
        btnClose.addEventListener('click', function () {
            popup.remove();
        });
    }

})