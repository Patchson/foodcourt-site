let mass = [
    {   
        name: 'Гункан спайси амаи',
        weight: '40г', 
        price: '2,52', 
        img: '../images/sets/sushi_2.jpeg',
        description: 'Авокадо, соус спайси, кунжут, рис, нори'
    }, 
    {   
        name: 'Гункан спайси амаи',
        weight: '80г', 
        price: '3,52', 
        img: '../images/sets/sushi_2.jpeg',
        description: 'Авокадо, соус спайси, кунжут, рис, нори'
    }, 
    {   
        name: 'Гункан спайси амаи',
        weight: '160г', 
        price: '5,52', 
        img: '../images/sets/sushi_2.jpeg',
        description: 'Авокадо, соус спайси, кунжут, рис, нори'
    }, 
    {   
        name: 'Гункан спайси унаги',
        weight: '30г', 
        price: '1,5', 
        img: '../images/sets/sushi_1.jpeg',
        description: 'Водоросли хияши вакаме, рис, нори, ореховый соус, кунжут (1 шт.). На 100 граммов: К 139, Б 3.4, Ж 0.6, У 30'
    }, 
    {   
        name: 'Гункан спайси унаги',
        weight: '60г', 
        price: '4,5', 
        img: '../images/sets/sushi_1.jpeg',
        description: 'Водоросли хияши вакаме, рис, нори, ореховый соус, кунжут (1 шт.). На 100 граммов: К 139, Б 3.4, Ж 0.6, У 30'
    }, 
    {   
        name: 'Гункан спайси унаги',
        weight: '200г', 
        price: '10,5', 
        img: '../images/sets/sushi_1.jpeg',
        description: 'Водоросли хияши вакаме, рис, нори, ореховый соус, кунжут (1 шт.). На 100 граммов: К 139, Б 3.4, Ж 0.6, У 30'
    }, 
    {   
        name: 'Гункан спайси унаги',
        weight: '200г', 
        price: '10,5', 
        img: '../images/sets/sushi_1.jpeg',
        description: 'Водоросли хияши вакаме, рис, нори, ореховый соус, кунжут (1 шт.). На 100 граммов: К 139, Б 3.4, Ж 0.6, У 30'
    }, 
    {   
        name: 'Гункан Спайси туна',
        weight: '1г', 
        price: '100', 
        img: '../images/sets/sushi_5.jpeg',
        description: 'Тунец, рис, нори'
    }, 
    {   
        name: 'Гункан Спайси туна',
        weight: '2г', 
        price: '1000', 
        img: '../images/sets/sushi_5.jpeg',
        description: 'Тунец, рис, нори'
    }, 
    {   
        name: 'Гункан Спайси туна',
        weight: '5г', 
        price: '2000', 
        img: '../images/sets/sushi_5.jpeg',
        description: 'Тунец, рис, нори'
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


                
                
                
               
            