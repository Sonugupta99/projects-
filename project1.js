let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Burger',
        image: '1.PNG',
        price: 70
    },
    {
        id: 2,
        name: 'Pizza',
        image : '11.PNG',
        price: 160
    },
    {
        id: 3,
        name: 'Pasta',
        image: '10.PNG',
        price: 100
    },
    {
        id: 4,
        name: 'Hotdog',
        image: '3.PNG',
        price: 80
    },
    {
        id: 5,
        name: 'Juice',
        image: '7.PNG',
        price: 50
    },
    {
        id: 6,
        name: 'Cake',
        image: '17.PNG',
        price: 350
    },
    {
        id: 7,
        name: 'Momos',
        image: '15.PNG',
        price: 70
    },
    {
        id: 8,
        name: 'Chocolate Drink',
        image: '3.PNG',
        price: 60
    },
    {
        id: 9,
        name: 'Sandwich',
        image: '13.PNG',
        price: 90
    },
    {
        id: 10,
        name: 'Food Plate',
        image: '14.PNG',
        price: 180
    },
    {
        id: 11,
        name: 'Veg Noodles',
        image: '1.PNG',
        price: 50
    },
    {
        id: 12,
        name: 'Idli Sambar',
        image: '6.PNG',
        price: 70
    },
    {
        id: 13,
        name: 'Aloo Parantha',
        image: '2.PNG',
        price: 40
    },
    {
        id: 14,
        name: 'Samosa',
        image: '12.PNG',
        price: 20
    },
    {
        id: 15,
        name: 'Spring Roll',
        image: '16.PNG',
        price: 90
    },
    {
        id: 16,
        name: 'Gulab Jamun',
        image: '4.PNG',
        price: 20
    },
    {
        id: 17,
        name: 'Kaju Barfi',
        image: '8.PNG',
        price: 60
    }

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


const reviews = [
    {
      id: 1,
      name: "ram",
      job: "web developer",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
    },
    {
      id: 2,
      name: "anees",
      job: "web designer",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
    },
    {
      id: 3,
      name: "james",
      job: "intern",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "SLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
    },
    {
      id: 4,
      name: "san",
      job: "the boss",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
    }
  ];
  
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  
  // show next person
  nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  // show prev person
  prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  
  