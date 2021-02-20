window.addEventListener('load', function () {
    const btnLogIn = document.getElementById('log-in');
    const btnLogSign = document.getElementById('log-sign');

    btnLogIn.addEventListener('click', function () {
        renderPopup(login);
    });

    btnLogSign.addEventListener('click', function () {

    });

    const login = {
        img: './img/logo.png',
        title: 'LOG-IN',
        inputName: 'Username or email',
        inputPassword: 'Password',
        btn: 'LOG-IN',
        text: "DON'T HAVE AN ACCOUNT? SIGN-UP"
    }

    function renderPopup(object) {
        const popup = document.createElement('section');
        popup.classList.add('popup');
        popup.id = 'popup'
        const popupBox = document.createElement('div');
        popupBox.classList.add('popup__box');
        popup.appendChild(popupBox);
        popupBox.innerHTML = `
                           <div class="popup-close" id="popup-close">x</div>
                           <div class="popup__logo">
                              <img src=${object.img} alt="logo">  
                           </div>
                           <div class="popup__title">${object.title}</div>
                           <form class="popup__form" action="" method="post">
                                <label for="POST-name">Name:</label>
                                <div class="popup__input">
                                     <input type="text" placeholder=${object.inputName}>
                                </div>
                                <div class="popup__input">
                                     <input type="password" placeholder=${object.inputPassword}>
                                </div>
                               <div class="popup__form-btn">
                                    <input type="submit" value=${object.btn}>
                               </div>
                           </form>
                            <div class="popup__text">${object.text}</div>`

        document.body.prepend(popup);
    }
})