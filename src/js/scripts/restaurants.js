import * as dataStorage from './data-storage';

window.addEventListener('load', function () {

    const container = document.getElementById('restaurants-list');
    const btnArrowUp=document.getElementById('arrow-up');
    const btnArrowDown=document.getElementById('arrow-down');


    function createRestaurantsList(data) {
        container.innerHTML='';
        const list = document.createElement('ul');
        list.classList.add('restaurants__list');
        container.appendChild(list);
        data.forEach(function (element) {
            const item = document.createElement('li');
            item.classList.add('restaurants__item')
            item.innerHTML = `
                            <img src="${element.src}" alt="${element.alt}">
                            <div class="restaurants__item-box">
                                 <span class="restaurants__item_quantity">${element.text}</span>
                                 <h3 class="restaurants__item_title">${element.title}</h3>
                            </div>`;
            list.appendChild(item);
        });
    }
    createRestaurantsList(dataStorage.restaurants);

    function sortRestaurantsListUp(data){
        debugger
        data.sort(function (elem1,elem2){
            const number1=parseInt(elem1.text);
            const number2=parseInt(elem2.text);
            return number1-number2;
        })
        createRestaurantsList(data);
    }

    function sortRestaurantsListDown(data){
        data.sort(function (elem1,elem2){
            const number1=parseInt(elem1.text);
            const number2=parseInt(elem2.text);
            return number2-number1;
        })
        createRestaurantsList(data);
    }

    btnArrowUp.addEventListener('click', function (){
        sortRestaurantsListUp(dataStorage.restaurants);

    });

    btnArrowDown.addEventListener('click', function (){
        sortRestaurantsListDown(dataStorage.restaurants);
    });
})