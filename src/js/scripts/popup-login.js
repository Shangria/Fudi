window.addEventListener('load', function () {

    const logIn = {
        img: './img/logo.png',
        title: 'LOG-IN',
        inputName: 'Username or email',
        inputPassword: 'Password',
        btn: 'LOG-IN',
        text: "DON'T HAVE AN ACCOUNT?",
        link: 'SIGN-UP'
    }

    const btnLogIn = document.getElementById('log-in');

    btnLogIn.addEventListener('click', function () {
        renderPopup(logIn);
    });


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