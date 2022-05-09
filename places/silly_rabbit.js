let mass = [
    {   
        name: 'Фирменная рулька',
        weight: '1 кг', 
        price: '64', 
        img: '../images/sets/dinner_10.jpg',
        description: 'Рулька свиная, запечённая в темном фирменном пиве и глазированная в соусе терияки. Подаётся с печёным молодым картофелем, обжаренным на гриле, тушеной капустой, хреном и острым томатным соусом'
    }, 
    {   
        name: 'Плато сыров',
        weight: '400 г', 
        price: '42', 
        img: '../images/sets/dinner_11.jpg',
        description: 'Сыр бри, дорблю, чеддер, грана падано, орехи в карамельной глазури, винoград и мёд'
    }, 
    {   
        name: 'Фирменный стейк из говядины',
        weight: '400 г', 
        price: '43', 
        img: '../images/sets/dinner_12.jpeg',
        description: 'Говяжья вырезка с грибным соусом, приготовленная на гриле, и картофель с сыром сулугуни по особому рецепту'
    }, 
    {   
        name: 'Ребра-гриль',
        weight: '1 кг', 
        price: '23', 
        img: '../images/sets/dinner_13.jpeg',
        description: 'Маринованные свиные ребра, приготовленные на гриле с травами. Подаются с картофелем фри в сырном соусе и кусочками бекона'
    }, 
    {   
        name: 'Карпаччо с муссом из пекорино',
        weight: '300 г', 
        price: '23', 
        img: '../images/sets/dinner_1.jpeg',
        description: 'Тонко нарезанная говяжья вырезка, мусс на основе сыра пекорино, томаты черри, пармезан, руккола, черный перец и картофель фри'
    }, 
    {   
        name: 'Плато мясной гастрономии',
        weight: '400 г', 
        price: '43', 
        img: '../images/sets/dinner_2.jpeg',
        description: 'Вяленый окорок, испанская салями, бекон, маринованный лук, маринованные огурцы, маринованные оливки и маслины, томаты черри, хлеб с семечками, горчичный соус и пряный томат'
    }, 
    {   
        name: 'Оливки и начос',
        weight: '300 г', 
        price: '23', 
        img: '../images/sets/dinner_3.jpeg',
        description: 'Маринованные оливки и маслины, кукурузные чипсы начос, мусс из пряного сыра и парма'
    }, 
    {   
        name: 'Тартар из говядины на компанию',
        weight: '400 г', 
        price: '34', 
        img: '../images/sets/dinner_4.jpg',
        description: 'Тартар из говядины с горчицей, каперсами, красным луком и миксом хлеба'
    }, 
    {   
        name: 'Тартар из говядины',
        weight: '300 г', 
        price: '54', 
        img: '../images/sets/dinner_5.jpg',
        description: 'Говяжья вырезка, корнишоны, каперсы, красный лук, перепелиное яйцо, соус табаско и соус ворчестер. Подается с чиабаттой'
    }, 
    {   
        name: 'Карпаччо из говядины',
        weight: '300 г', 
        price: '74', 
        img: '../images/sets/dinner_6.jpg',
        description: 'Ассорти из куриных наггетсов, сырных шариков с халапеньо, луковых колец и креветок в темпуре. Подаётся с соусами Пикаунт, Острый томатный и Сырный'
    }, 
    {   
        name: 'Брускетты с маринованным лососем',
        weight: '1 кг', 
        price: '54', 
        img: '../images/sets/dinner_7.jpg',
        description: 'Шницель из куриного филе в панировке с сыром и беконом. Подаётся с картофелем фри, корнишонами и сливочно-сырным соусом'
    }, 
    {   
        name: 'Клевер сет',
        weight: '400 г', 
        price: '', 
        img: '../images/sets/dinner_8.jpeg',
        description: 'Чесночные гренки, сыр фри, наггетсы, куриные крылья в панировке, красный лук, корнишоны в беконе, соус тартар, кетчуп, медовый соус'
    }, 
    {   
        name: 'Медальоны из говядины',
        weight: '300 г', 
        price: '15', 
        img: '../images/sets/dinner_9.jpeg',
        description: 'С картофельным пюре, сыром пармезан и салатом'
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


                
                
                
               
            