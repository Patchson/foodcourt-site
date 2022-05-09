let mass = [
    {   
        name: 'Кофе с булочкой',
        weight: '', 
        price: '1,99', 
        img: '../images/sets/cowfix_1.jpg',
        description: 'Как говориться - за себя и за булочку с кофе от лучшей в мире компании COWFIX'
    }, 
    {   
        name: 'Молочное кофе с молочным пирогом',
        weight: '', 
        price: '3,99', 
        img: '../images/sets/cowfix_2.jpg',
        description: 'Для людей с непереносимостью лактозы скидка 50%'
    }, 
    {   
        name: 'Микро-Кофе с разрезанной конфетой грильяж',
        weight: '', 
        price: '2,99', 
        img: '../images/sets/cowfix_3.jpg',
        description: 'Cowfix не несёт ответсвенности если вы недовольны размерами ваших стаканов'
    }, 
    {   
        name: 'Кофе с замороженной сметаной',
        weight: '', 
        price: '2,99', 
        img: '../images/sets/cowfix_4.jpg',
        description: 'Отличный вариант к славному дню масленице. Но вы можете не дожидаться этого праздника и купить УЖЕ СЕГОДНЯ со скидкой 3%. ПОСПЕШИТЕ!'
    }, 
    {   
        name: 'Кофе с экслюзивным пирогом',
        weight: '', 
        price: '12,99', 
        img: '../images/sets/cowfix_5.jpg',
        description: 'Экслюзивное предложение только для эксклюзивных людей'
    }, 
    {   
        name: 'Кофе с белой шаурмой',
        weight: '', 
        price: '5,99', 
        img: '../images/sets/cowfix_6.jpg',
        description: 'Кофе для людей старой закалки'
    }, 
    {   
        name: 'Кофе с тёмной шаурмой',
        weight: '', 
        price: '10,99', 
        img: '../images/sets/cowfix_7.jpg',
        description: 'Для людей с правильным взглядами'
    }, 
];

for (let i = 0; i < mass.length; i++) {
    document.write(`<div class="set">`);
        document.write(`<div class="set_info">`);
            document.write(`<span class="set_name">${mass[i].name} </span>`);
            document.write(`<span class="set_weight">${mass[i].weight}</span>`);
            document.write(`<span class="set_price">${mass[i].price} б.р.</span>`);
            document.write(`<div class="description">`);
                document.write(`<span>${mass[i].description}</span>`)
            document.write(`</div>`);
        document.write(`</div>`);
        document.write(`<img src="${mass[i].img}">`);
        document.write(`<button>Купить</button>`);
    document.write(`</div>`);
}


                
                
                
               
            