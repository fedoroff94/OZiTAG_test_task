let customerTendersSelect = document.getElementById('customer_tenders');
let firstPage = document.getElementById('first_page_container');
let secondPage = document.getElementById('second_page_container');
let goodsList = document.getElementById('goods_list');
let backArrow = document.getElementById('back_arrow');
let soldGoodsInput = document.getElementById('sold_goods_input');
let applyBtn = document.getElementById('apply_btn');
let clearBtn = document.getElementById('clear_btn');
let checkedGoods = document.getElementById('checked_goods');

let someFunction = () => {

    firstPage.style.display = "none";
    secondPage.style.display = 'block';

    let backToMainPage = () => {
        secondPage.style.display = 'none';
        firstPage.style.display = "block";
        customerTendersSelect.value = 0;
    };

    let divContainer = document.querySelector("#goods_list");
    let divsNodeList = divContainer.querySelectorAll('div.list_position > div');
    let positionsArray = [];
    let checkboxInputsNodes = divContainer.querySelectorAll('div.list_position > input');
    let containers = document.querySelectorAll('div.list_position');

    divsNodeList.forEach(positionText => positionsArray.push(positionText.innerText.trim()));

    let lowerCasePositionsArray = positionsArray.map(string => string.replace('Услуги', 'услуги'));

    let searchInputText = () => {
        let find = false;
        for (let i = 0; i < lowerCasePositionsArray.length; i++) {
            divsNodeList[i].style.background = 'none';
            divsNodeList[i].style.fontWeight = 'normal';
            if (lowerCasePositionsArray[i].includes(soldGoodsInput.value.toLowerCase()) &&
                soldGoodsInput.value.length) {
                divsNodeList[i].style.background = '#F2F7F8';
                find = true;
                divsNodeList[i].innerHTML = divsNodeList[i].innerHTML.replace(new RegExp(soldGoodsInput.value, 'g'),
                    "<b>" + soldGoodsInput.value + "</b>");
            }
        }
        if (!find && soldGoodsInput.value.length != 0) {
            alert(`There is no substring: "${soldGoodsInput.value}" in the list...`);
        }
    };

    let addBackgroundIfChecked = () => {
        let count = 0;
        for (let i = 0; i < checkboxInputsNodes.length; i++) {
            if (checkboxInputsNodes[i].checked) {
                divsNodeList[i].style.background = '#F2F7F8';
                count++;
            } else {
                divsNodeList[i].style.background = 'none';
            }
        }

        count !== 0 ? checkedGoods.style.display = 'block' : checkedGoods.style.display = 'none';
        checkedGoods.innerHTML = `Выбранное (${count})`;
    };

    checkboxInputsNodes.forEach(checkbox => checkbox.addEventListener('change', addBackgroundIfChecked));
    applyBtn.addEventListener('click', searchInputText);

    soldGoodsInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            searchInputText();
        }
    });

    let refreshAll = () => {
        soldGoodsInput.value = '';
        checkedGoods.style.display = 'none';
        for (let checkbox of checkboxInputsNodes) {
            checkbox.checked = false;
        }
        for (let position of divsNodeList) {
            position.style.background = 'none';
        }
        for (let container of containers) {
            container.style.display = 'flex';
        }
    };

    clearBtn.addEventListener('click', refreshAll);

    let showOnlyChecked = () => {
        for (let i = 0; i < checkboxInputsNodes.length; i++) {
            if (!checkboxInputsNodes[i].checked) {
                containers[i].style.display = 'none';
            }
        }
    };

    checkedGoods.addEventListener('click', showOnlyChecked);
    backArrow.addEventListener('click', backToMainPage);
    backArrow.addEventListener('click', refreshAll);
};

let drawCurrentGoodsList = () => {
    if (customerTendersSelect.value == 1) {
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

        someFunction();

    } else if (customerTendersSelect.value == 2) {
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
            </div>`;

        someFunction();
    }
};

customerTendersSelect.addEventListener('change', drawCurrentGoodsList);

