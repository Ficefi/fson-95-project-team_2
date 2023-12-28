import { getProductById } from './fetchAPI.js';
import { addToStorageCart } from './localStorage.js';

const selectors = {
  cart: document.querySelector('.cart'),
  basket_items: document.querySelector('.basket-items'),
  number_of_products: document.querySelector('.number-of-products'),
  total_price: document.querySelector('.total-price'),
};

// function displayCart() {
//   let j = 0;
//   document.getElementById(
//     'card-counter'
//   ).innerHTML = `<img class="basket-img" src = "../img/yellow-basket.png" width = "164px" height = "140px" alt = "Yellow shopping basket" >
// 		<h2 class="basket-title">
// 			Your basket is <span class="accent-txt">empty...</span>
// 		</h2>
// 		<p class="basket-txt">Go to the main page to select your favorite products and add them to the cart.</p>
// `;
// }

const cart = JSON.parse(localStorage.getItem('cart')) || [];

//////////////// IF SOMETHING IN CART HIDE BASKET IMAGE///////////////

if (cart.length > 0) {
  selectors.cart.style.display = 'none';
}

///////////////NUMBER OF PRODUCTS IN CART///////////
let numberOfProducts = cart.length;

selectors.number_of_products.textContent = String(numberOfProducts);

//////////////TOTAL PRODUCTS PRICE//////////////////
let totalPrice = 0;

///////////////ADD ONE ITEM BY ID///////////////
async function addItem(id) {
  let itemPrice;
  await getProductById(id).then(response => {
    const { name, category, size, price, img, desc, _id } = response;
    itemPrice = price;
    const markup = `<li class='basket-item' data-id="${_id}" >
		 <button class='remove-item-btn' data-modal-close aria-label='close modal button'>
        <svg class='remove-item-image' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
       <img class='cart-img' src="${img}" alt="${desc}">
     <div>
     <h2 class='product-title'>${name}</h2>
     <p class='product-value'><span class='product-desc'>Category:</span> ${category.replace(
       '_',
       ' '
     )}</p>
     <p class='product-value'><span class='product-desc'>Size:</span> ${size}</p>
     <p>$${price}</p>
     </div>

     </li>
     <hr>`;

    selectors.basket_items.insertAdjacentHTML('beforeend', markup);
  });
  return itemPrice;
}

for (const item of cart) {
  if (!item) {
  } else {
    await addItem(item).then(price => (totalPrice += price));
  }
}

selectors.total_price.textContent = '$' + totalPrice.toFixed(2);
