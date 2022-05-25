let rest = [
        {name: 'SUSHI FROST'    , cat: 'sushi'          , rew: '4.9'    , src: '../places/sushi_frost.html'       , img: '../images/sushi_frost_small.jpg'},
        {name: 'НуарФуд'        , cat: 'pizza'          , rew: '5.0'    , src: '../places/NuarFood.html'          , img: '../images/NuarFood_small.jpg'},
        {name: 'MommyLight'     , cat: 'breakfest'      , rew: '4.9'    , src: '../places/mommy_light.html'       , img: '../images/mommy_light_small.jpg'},
        {name: '#КУШАЕМДОМА'    , cat: 'breakfest'      , rew: '3.9'    , src: '../places/kushayem_doma.html'     , img: '../images/kushaem_doma_small.jpg'},
        {name: 'ГигаРолл'       , cat: 'sushi'          , rew: '4.2'    , src: '../places/GigaRoll.html'          , img: '../images/giga_roll_small.jpg'},
        {name: 'RoflPizza'      , cat: 'pizza'          , rew: '4.7'    , src: '../places/rofl_pizza.html'        , img: '../images/rofl_pizza_small.jpg'},
        {name: 'Папад Жонс'     , cat: 'pizza'          , rew: '3.1'    , src: '../places/papad_jons.html'        , img: '../images/papad_jons_small.jpg'},
        {name: 'ELITE'          , cat: 'exotic'         , rew: '4.7'    , src: '../places/elite.html'             , img: '../images/elite_small.jpg'},
        {name: 'Морская Тишина' , cat: 'exotic'         , rew: '4.5'    , src: '../places/morskaya_tishina.html'  , img: '../images/morskaya_tishina_small.jpg'},
        {name: 'Новый Болен'    , cat: 'exotic'         , rew: '4.3'    , src: '../places/noviy_bolen.html'       , img: '../images/noviy_bolen_small.jpg'},
        {name: 'JustOK'         , cat: 'breakfest'      , rew: '4.7'    , src: '../places/justok.html'            , img: '../images/justok_small.jpg'},
        {name: 'SushiMooshi'    , cat: 'sushi'          , rew: '4.6'    , src: '../places/sushi_frost.html'        , img: '../images/sushi_frost_small.jpg'},
        {name: 'BurgerGrand'    , cat: 'breakfest'      , rew: '4.7'    , src: '../places/burger_grand.html'      , img: '../images/burger_grand_small.jpg'},
        {name: 'ХАРДФУД'        , cat: 'dinner'         , rew: '4.8'    , src: '../places/hardfood.html'          , img: '../images/hardfood_small.jpg'},
        {name: 'кебап'          , cat: 'breakfest'      , rew: '4.7'    , src: '../places/kebap.html'             , img: '../images/kebap_small.jpg'},
        {name: 'сили рэбит'     , cat: 'dinner'         , rew: '4.3'    , src: '../places/silly_rabbit.html'      , img: '../images/silly_rabbit_small.jpg'},
        {name: 'Новый Пирог'    , cat: 'dinner'         , rew: '3.6'    , src: '../places/noviy_pirog.html'       , img: '../images/noviy_pirog_small.jpg'},
        {name: 'Быстро-Вкусно'  , cat: 'breakfest'      , rew: '3.8'    , src: '../places/bistro_vkusno.html'     , img: '../images/bistro_vkusno_small.jpg'},
        {name: 'cowfix'         , cat: 'coffee'         , rew: '3.2'    , src: '../places/cowfix.html'            , img: '../images/cowfix_small.jpg'},
        {name: 'Blizzard Cringe', cat: 'pizza'          , rew: '5.0'    , src: '../places/blizzard_cringe.html'   , img: '../images/blizzard_cringe_small.jpg'},
        {name: '4illySup'       , cat: 'dinner'         , rew: '3.5'    , src: '../places/chilly_sup.html'        , img: '../images/chilly_sup_small.jpg'},
        {name: 'FallFoot'       , cat: 'dinner'         , rew: '2.9'    , src: '../places/fall_foot.html'         , img: '../images/fall_foot_small.jpg'},
        {name: 'MagaRolls'      , cat: 'sushi'          , rew: '3.0'    , src: '../places/MagaRolls.html'        , img: '../images/maga_rolls_small.jpg'},
        {name: 'Half-Pizza'     , cat: 'pizza'          , rew: '3.1'    , src: '../places/half_pizza.html'        , img: '../images/half_pizza_small.jpg'},
        {name: 'LoTiU'          , cat: 'exotic'         , rew: '4.7'    , src: '../places/lotiu.html'             , img: '../images/lotiu_small.jpg'}
];

let inJson = JSON.stringify(rest);
console.log(inJson);
let mass = JSON.parse(inJson);
console.log(mass);
console.log(rest);

for (let i = 0; i < mass.length; i++) {
    document.write(`<a class="box" href="${mass[i].src}" style="background-image: url(${mass[i].img});">`);
        document.write(`<div class="vision"></div>`);
        document.write(`<div class="info">`);
        document.write(`<span class="info_name">${mass[i].name}</span>`);
        document.write(`<span class="info_rew">Оценка: ${mass[i].rew}</span>`);
        document.write(`</div>`);
    document.write(`</a>`);
}

function check() {
    alert('kek');
}

function sort_all() {
    location.reload()
}

function sort_sushi() {
    var div = document.getElementById('rest_all');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    for (let i = 0; i < mass.length; i++) {
        if(mass[i].cat == 'sushi') {
            div.innerHTML=div.innerHTML+''+`<a id="box${i}" class="box" href="${mass[i].src}" style="background-image: url(${mass[i].img});"></a>`;
            var box = document.getElementById(`box${i}`);
            box.innerHTML=box.innerHTML+''+`<div class="vision"></div>`;
            box.innerHTML=box.innerHTML+''+`<div id="info${i}" class="info"></div>`;
            var info = document.getElementById(`info${i}`);
            info.innerHTML=info.innerHTML+''+`<span class="info_name">${mass[i].name}</span>`;
            info.innerHTML=info.innerHTML+''+`<span class="info_rew">Оценка: ${mass[i].rew}</span>`;
        }
    }
}

function sort_dinner() {
    var div = document.getElementById('rest_all');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    for (let i = 0; i < mass.length; i++) {
        if(mass[i].cat == 'dinner') {
            div.innerHTML=div.innerHTML+''+`<a id="box${i}" class="box" href="${mass[i].src}" style="background-image: url(${mass[i].img});"></a>`;
            var box = document.getElementById(`box${i}`);
            box.innerHTML=box.innerHTML+''+`<div class="vision"></div>`;
            box.innerHTML=box.innerHTML+''+`<div id="info${i}" class="info"></div>`;
            var info = document.getElementById(`info${i}`);
            info.innerHTML=info.innerHTML+''+`<span class="info_name">${mass[i].name}</span>`;
            info.innerHTML=info.innerHTML+''+`<span class="info_rew">Оценка: ${mass[i].rew}</span>`;
        }
    }
}

function sort_breakfest() {
    var div = document.getElementById('rest_all');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    for (let i = 0; i < mass.length; i++) {
        if(mass[i].cat == 'breakfest') {
            div.innerHTML=div.innerHTML+''+`<a id="box${i}" class="box" href="${mass[i].src}" style="background-image: url(${mass[i].img});"></a>`;
            var box = document.getElementById(`box${i}`);
            box.innerHTML=box.innerHTML+''+`<div class="vision"></div>`;
            box.innerHTML=box.innerHTML+''+`<div id="info${i}" class="info"></div>`;
            var info = document.getElementById(`info${i}`);
            info.innerHTML=info.innerHTML+''+`<span class="info_name">${mass[i].name}</span>`;
            info.innerHTML=info.innerHTML+''+`<span class="info_rew">Оценка: ${mass[i].rew}</span>`;
        }
    }
}

function sort_coffee() {
    var div = document.getElementById('rest_all');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    for (let i = 0; i < mass.length; i++) {
        if(mass[i].cat == 'coffee') {
            div.innerHTML=div.innerHTML+''+`<a id="box${i}" class="box" href="${mass[i].src}" style="background-image: url(${mass[i].img});"></a>`;
            var box = document.getElementById(`box${i}`);
            box.innerHTML=box.innerHTML+''+`<div class="vision"></div>`;
            box.innerHTML=box.innerHTML+''+`<div id="info${i}" class="info"></div>`;
            var info = document.getElementById(`info${i}`);
            info.innerHTML=info.innerHTML+''+`<span class="info_name">${mass[i].name}</span>`;
            info.innerHTML=info.innerHTML+''+`<span class="info_rew">Оценка: ${mass[i].rew}</span>`;
        }
    }
}

function sort_exotic() {
    var div = document.getElementById('rest_all');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    for (let i = 0; i < mass.length; i++) {
        if(mass[i].cat == 'exotic') {
            div.innerHTML=div.innerHTML+''+`<a id="box${i}" class="box" href="${mass[i].src}" style="background-image: url(${mass[i].img});"></a>`;
            var box = document.getElementById(`box${i}`);
            box.innerHTML=box.innerHTML+''+`<div class="vision"></div>`;
            box.innerHTML=box.innerHTML+''+`<div id="info${i}" class="info"></div>`;
            var info = document.getElementById(`info${i}`);
            info.innerHTML=info.innerHTML+''+`<span class="info_name">${mass[i].name}</span>`;
            info.innerHTML=info.innerHTML+''+`<span class="info_rew">Оценка: ${mass[i].rew}</span>`;
        }
    }
}

function sort_pizza() {
    var div = document.getElementById('rest_all');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    for (let i = 0; i < mass.length; i++) {
        if(mass[i].cat == 'pizza') {
            div.innerHTML=div.innerHTML+''+`<a id="box${i}" class="box" href="${mass[i].src}" style="background-image: url(${mass[i].img});"></a>`;
            var box = document.getElementById(`box${i}`);
            box.innerHTML=box.innerHTML+''+`<div class="vision"></div>`;
            box.innerHTML=box.innerHTML+''+`<div id="info${i}" class="info"></div>`;
            var info = document.getElementById(`info${i}`);
            info.innerHTML=info.innerHTML+''+`<span class="info_name">${mass[i].name}</span>`;
            info.innerHTML=info.innerHTML+''+`<span class="info_rew">Оценка: ${mass[i].rew}</span>`;
        }
    }
}