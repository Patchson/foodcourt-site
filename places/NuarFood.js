let mass = [
    {   
        name: 'Пицца Гавайская',
        weight: '200г', 
        price: '3,3', 
        img: '../images/sets/pizza_7.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, ветчина, ананасы, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Пицца Гавайская',
        weight: '300г', 
        price: '4,3', 
        img: '../images/sets/pizza_7.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, ветчина, ананасы, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Пицца Гавайская',
        weight: '500г', 
        price: '5,3', 
        img: '../images/sets/pizza_7.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, ветчина, ананасы, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Пицца Греческая',
        weight: '200г', 
        price: '3,3', 
        img: '../images/sets/pizza_8.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, рассольный сыр, томаты Черри, шпинат, сметанный соус с чесноком, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Пицца Греческая',
        weight: '300г', 
        price: '4,3', 
        img: '../images/sets/pizza_8.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, рассольный сыр, томаты Черри, шпинат, сметанный соус с чесноком, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Пицца Греческая',
        weight: '500г', 
        price: '5,3', 
        img: '../images/sets/pizza_8.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, рассольный сыр, томаты Черри, шпинат, сметанный соус с чесноком, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Пицца Греческая',
        weight: '600г', 
        price: '6,3', 
        img: '../images/sets/pizza_8.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, рассольный сыр, томаты Черри, шпинат, сметанный соус с чесноком, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Пицца Грибная',
        weight: '300г', 
        price: '3,3', 
        img: '../images/sets/pizza_9.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, шампиньоны, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Пицца Грибная',
        weight: '400г', 
        price: '4,3', 
        img: '../images/sets/pizza_9.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, шампиньоны, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Пицца Грибная',
        weight: '500г', 
        price: '5,3', 
        img: '../images/sets/pizza_9.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, шампиньоны, приправа к пицце, масло чесночное'
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


                
                
                
               
            