let customerTendersSelect = document.getElementById('customer_tenders');
let firstPage = document.getElementById('first_page_container');
let secondPage = document.getElementById('second_page_container');
let goodsList = document.getElementById('goods_list');
let backArrow = document.getElementById('back_arrow');

let backToMainPage = () => {
    secondPage.style.display = 'none';
    firstPage.style.display = "block";
};

backArrow.addEventListener('click', backToMainPage);

customerTendersSelect.addEventListener('change', function () {
    if (customerTendersSelect.value == 1) {
        firstPage.style.display = "none";
        secondPage.style.display = 'block';
        goodsList.innerHTML = `
        <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;[01.61] - Услуги в области растениеводства
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;[01.61.1] - Услуги в области растениеводства
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;&#160;[01.61.10] - Услуги в области растениеводства
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;&#160;&#160;[01.61.10.100] - Услуги в области полеводства, овощеводства открытого
                    грунта и цветоводства; услуги по выращиванию сельскохозяйственных культур в защищенном грунте
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;&#160;&#160;[01.61.10.110] - Услуги в области полеводства (кроме овощеводства
                    открытого грунта)
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;&#160;&#160;[01.61.10.111] - Услуги по подготовке почвы для посадки полевых культур
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;&#160;&#160;[01.61.10.112] - Услуги по проведению сева и посадки полевых культур
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;&#160;&#160;[01.61.10.113] - Услуги по уходу за посевами полевых культур
                </div>
            </div>`;

    } else if (customerTendersSelect.value == 2) {
        firstPage.style.display = "none";
        secondPage.style.display = 'block';
        goodsList.innerHTML = `
        <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;[84] - Услуги в области государственного управления и
                    обороны,
                    предоставляемые обществу в целом;
                    услуги по обязательному социальному страхованию
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;[84.1] - Услуги в области государственного
                    управления общего
                    характера в социально экономической сфере
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;&#160;[84.11] - Услуги в области
                    государственного управления
                    общего характера
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;&#160;&#160;[84.11.11] - Услуги в области
                    исполнительной и законодательной
                    деятельности
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;&#160;&#160;&#160;[84.11.11.100] - Услуги
                    центральных органов исполнительной и
                    законодательной
                    власти
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;&#160;&#160;&#160;[84.11.11.200] - Услуги
                    органов управления и самоуправления
                    областного территориального уровня
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;&#160;&#160;&#160;[84.11.11.300] - Услуги
                    органов управления и самоуправления
                    базового территориального уровня
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;&#160;&#160;[84.11.11] - Услуги в области
                    исполнительной и законодательной
                    деятельности
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;[84] - Услуги в области государственного управления и
                    обороны,
                    предоставляемые обществу в целом;
                    услуги по обязательному социальному страхованию
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;[84.1] - Услуги в области государственного
                    управления общего
                    характера в социально экономической сфере
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;&#160;[84.11] - Услуги в области
                    государственного управления
                    общего характера
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;&#160;&#160;[84.11.11] - Услуги в области
                    исполнительной и законодательной
                    деятельности
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;&#160;&#160;&#160;[84.11.11.100] - Услуги
                    центральных органов исполнительной и
                    законодательной
                    власти
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;&#160;&#160;&#160;[84.11.11.200] - Услуги
                    органов управления и самоуправления
                    областного территориального уровня
                </div>
            </div>

            <div class="list_position">
                <input type="checkbox" class="list_position_input">
                <div>&#160;&#160;&#160;&#160;&#160;&#160;[84.11.11.300] - Услуги
                    органов управления и самоуправления
                    базового территориального уровня
                </div>
            </div>`
    }
});

let divContainer = document.querySelector("#goods_list");
let divsArray = divContainer.querySelectorAll('div.list_position');
console.log(divsArray);
