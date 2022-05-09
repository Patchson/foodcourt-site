let mass = [
    {   
        name: 'Дорадо филе',
        weight: '200 г', 
        price: '3', 
        img: '../images/sets/exotic_6.jpeg',
        description: 'Креветки 21/25, тимьян, чеснок, сливочное масло, растительное масло, белое сухое вино, лимон, соль, перец черный горошек, перец розовый горошек.'
    }, 
    {   
        name: 'Креветки королевские',
        weight: '200 г', 
        price: '4', 
        img: '../images/sets/exotic_7.jpeg',
        description: 'Тунец лайон очищенный, тимьян, масло сливочное, масло растительное, вино белое сухое, соль морская, перец черный горошек, перец розовый горошек, лимон, микрозелень.На 100 граммов: К 162.8, Б 0.4, Ж 16.6, У 1.2'
    }, 
    {   
        name: 'Лосось филе',
        weight: '200 г', 
        price: '2', 
        img: '../images/sets/exotic_1.jpeg',
        description: 'Филе лосося (на коже, без кости), тимьян, вино белое сухое, масло сливочное, масло растительное, соль, перец черный горошек, перец розовый горошек, соль морская, лимон, микрозелень.'
    }, 
    {   
        name: 'Лосось филе',
        weight: '300 г', 
        price: '3', 
        img: '../images/sets/exotic_1.jpeg',
        description: 'Филе лосося (на коже, без кости), тимьян, вино белое сухое, масло сливочное, масло растительное, соль, перец черный горошек, перец розовый горошек, соль морская, лимон, микрозелень.'
    }, 
    {   
        name: 'Тунец филе',
        weight: '200 г', 
        price: '12', 
        img: '../images/sets/exotic_4.jpeg',
        description: 'Дорадо филе, тимьян, сливочное масло, растительное масло, вино белое, соль, перец черный горошек, лимон, микрозелень, перец розовый горошек, соль морская.'
    }, 
    {   
        name: 'Креветки королевские',
        weight: '200 г', 
        price: '2', 
        img: '../images/sets/exotic_5.jpeg',
        description: 'Микс-салат, кальмар в кляре, морские водоросли, морковь маринованная, томат черри, мед, перец чили, масло кунжутное, масло оливковое, французская горчица'
    }, 
    {   
        name: 'Лосось филе',
        weight: '400 г', 
        price: '4', 
        img: '../images/sets/exotic_1.jpeg',
        description: 'Филе лосося (на коже, без кости), тимьян, вино белое сухое, масло сливочное, масло растительное, соль, перец черный горошек, перец розовый горошек, соль морская, лимон, микрозелень.'
    }, 
    {   
        name: 'Сибас филе',
        weight: '200 г', 
        price: '2', 
        img: '../images/sets/exotic_2.jpeg',
        description: 'Сибас филе, тимьян, сливочное масло, растительное масло, вино белое сухое, соль морская, лимон, перец черный горошек, перец розовый горошек, микрозелень.'
    }, 
    {   
        name: 'Дорадо филе',
        weight: '200 г', 
        price: '12', 
        img: '../images/sets/exotic_3.jpeg',
        description: 'Дорадо филе, тимьян, сливочное масло, растительное масло, вино белое, соль, перец черный горошек, лимон, микрозелень, перец розовый горошек, соль морская.'
    }, 
    {   
        name: 'Лосось филе',
        weight: '200 г', 
        price: '2', 
        img: '../images/sets/exotic_1.jpeg',
        description: 'Филе лосося (на коже, без кости), тимьян, вино белое сухое, масло сливочное, масло растительное, соль, перец черный горошек, перец розовый горошек, соль морская, лимон, микрозелень.'
    }, 
    {   
        name: 'Лосось филе',
        weight: '300 г', 
        price: '3', 
        img: '../images/sets/exotic_1.jpeg',
        description: 'Филе лосося (на коже, без кости), тимьян, вино белое сухое, масло сливочное, масло растительное, соль, перец черный горошек, перец розовый горошек, соль морская, лимон, микрозелень.'
    }, 
    {   
        name: 'Лосось филе',
        weight: '400 г', 
        price: '4', 
        img: '../images/sets/exotic_1.jpeg',
        description: 'Филе лосося (на коже, без кости), тимьян, вино белое сухое, масло сливочное, масло растительное, соль, перец черный горошек, перец розовый горошек, соль морская, лимон, микрозелень.'
    }, 
    {   
        name: 'Сибас филе',
        weight: '200 г', 
        price: '2', 
        img: '../images/sets/exotic_2.jpeg',
        description: 'Сибас филе, тимьян, сливочное масло, растительное масло, вино белое сухое, соль морская, лимон, перец черный горошек, перец розовый горошек, микрозелень.'
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


                
                
                
               
            