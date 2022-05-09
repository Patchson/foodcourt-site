let mass = [
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
    {   
        name: 'Кальцоне с ветчиной и грибами',
        weight: '195г', 
        price: '7,50', 
        img: '../images/sets/pizza_2.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, ветчина, шампиньоны, маслины, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Кальцоне с ветчиной и грибами',
        weight: '495г', 
        price: '17,50', 
        img: '../images/sets/pizza_2.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, ветчина, шампиньоны, маслины, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Кальцоне с ветчиной и грибами',
        weight: '695г', 
        price: '27,50', 
        img: '../images/sets/pizza_2.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, ветчина, шампиньоны, маслины, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Кальцоне с ветчиной и грибами',
        weight: '895г', 
        price: '37,50', 
        img: '../images/sets/pizza_2.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, ветчина, шампиньоны, маслины, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Кальцоне с курицей',
        weight: '215г', 
        price: '8', 
        img: '../images/sets/pizza_3.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, курица, шампиньоны, помидоры, лук-порей, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Кальцоне с курицей',
        weight: '315г', 
        price: '9', 
        img: '../images/sets/pizza_3.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, курица, шампиньоны, помидоры, лук-порей, приправа к пицце, масло чесночное'
    }, 
    {   
        name: 'Кальцоне с курицей',
        weight: '415г', 
        price: '11', 
        img: '../images/sets/pizza_3.jpeg',
        description: 'Соус из протертых томатов, Моцарелла, курица, шампиньоны, помидоры, лук-порей, приправа к пицце, масло чесночное'
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


                
                
                
               
            