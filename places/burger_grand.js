let mass = [
    {   
        name: 'Салат с тунцом',
        weight: '100 г', 
        price: '3', 
        img: '../images/sets/breakfest_4.jpg',
        description: 'Кресс-салат, дыня, лосось, редис'
    }, 
    {   
        name: 'Салат с Ницарда',
        weight: '200 г', 
        price: '9', 
        img: '../images/sets/breakfest_5.jpg',
        description: 'Листья салата, куриное филе, сухари, фирменный соус'
    }, 
    {   
        name: 'Салат с креветками, кальмаром и соусом манго',
        weight: '300 г', 
        price: '12', 
        img: '../images/sets/breakfest_3.jpg',
        description: 'Креветка, кальмар, микс-салат, апельсин, грейпфрут, соус манго (пюре манго, лимонный сок, оливковое масло), перец красный, огурец свежий, шпинат свежий'
    }, 
    {   
        name: 'Салат с тёплой говядиной, апельсином, авокадо и маковой заправкой',
        weight: '100 г', 
        price: '3', 
        img: '../images/sets/breakfest_7.jpg',
        description: 'Кресс-салат, дыня, лосось, редис'
    }, 
    {   
        name: 'Фермерский овощной салат',
        weight: '200 г', 
        price: '9', 
        img: '../images/sets/breakfest_8.jpg',
        description: 'Листья салата, куриное филе, сухари, фирменный соус'
    }, 
    {   
        name: 'Классический салат Цезарь с куриной грудкой ',
        weight: '300 г', 
        price: '12', 
        img: '../images/sets/breakfest_9.jpeg',
        description: 'Креветка, кальмар, микс-салат, апельсин, грейпфрут, соус манго (пюре манго, лимонный сок, оливковое масло), перец красный, огурец свежий, шпинат свежий'
    }, 
    {   
        name: 'Салат вегетарианский',
        weight: '300 г', 
        price: '12', 
        img: '../images/sets/breakfest_6.jpg',
        description: 'Креветка, кальмар, микс-салат, апельсин, грейпфрут, соус манго (пюре манго, лимонный сок, оливковое масло), перец красный, огурец свежий, шпинат свежий'
    }, 
    {   
        name: 'Салат с дыней',
        weight: '100 г', 
        price: '3', 
        img: '../images/sets/breakfest_1.jpeg',
        description: 'Кресс-салат, дыня, лосось, редис'
    }, 
    {   
        name: 'Салат Цезарь',
        weight: '200 г', 
        price: '9', 
        img: '../images/sets/breakfest_2.jpeg',
        description: 'Листья салата, куриное филе, сухари, фирменный соус'
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


                
                
                
               
            