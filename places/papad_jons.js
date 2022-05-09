let mass = [
    {   
        name: 'Пицца Деревенская',
        weight: '300г', 
        price: '4,45', 
        img: '../images/sets/pizza_10.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, бекон, лук, яйцо, маринованные огурцы, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Пицца Деревенская',
        weight: '400г', 
        price: '5,45', 
        img: '../images/sets/pizza_10.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, бекон, лук, яйцо, маринованные огурцы, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Пицца Деревенская',
        weight: '500г', 
        price: '6,45', 
        img: '../images/sets/pizza_10.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, бекон, лук, яйцо, маринованные огурцы, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Пицца Маргарита',
        weight: '300г', 
        price: '4,45', 
        img: '../images/sets/pizza_11.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, Моцарелла в рассоле, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Пицца Маргарита',
        weight: '400г', 
        price: '5,45', 
        img: '../images/sets/pizza_11.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, Моцарелла в рассоле, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Пицца Маргарита',
        weight: '600г', 
        price: '6,45', 
        img: '../images/sets/pizza_11.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, Моцарелла в рассоле, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Пицца Маргарита',
        weight: '700г', 
        price: '7,45', 
        img: '../images/sets/pizza_11.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, Моцарелла в рассоле, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Четыре сыра',
        weight: '170г', 
        price: '10', 
        img: '../images/sets/pizza_1.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, сыр с голубой плесенью, сыр Джюгас, сыр Чеддер, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Четыре сыра',
        weight: '370г', 
        price: '20', 
        img: '../images/sets/pizza_1.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, сыр с голубой плесенью, сыр Джюгас, сыр Чеддер, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Четыре сыра',
        weight: '570г', 
        price: '30', 
        img: '../images/sets/pizza_1.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, сыр с голубой плесенью, сыр Джюгас, сыр Чеддер, приправа к пицце, масло чесночное'
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


                
                
                
               
            