import { getProductById } from './fetchAPI.js';
import { addToStorageCart, removeFromStorageCart } from './localStorage.js';
import { orderSuccessModal } from './modal_window.js';
import { handleCartItem, qty_card_products } from './header.js';
import svg from '../img/icons.svg';

const selectors = {
  cart: document.querySelector('.cart'),
  basket_items: document.querySelector('.basket-items-cart'),
  number_of_products: document.querySelector('.number-of-products'),
  total_price: document.querySelector('.total-price'),
  delete_all_btn: document.querySelector('.del-all-btn'),
  order_total: document.querySelector('.order-total'),
  cart_form_authorization: document.querySelector('.cart-form-authorization'),
  cart_label_wrap: document.querySelector('.cart-label-wrap'),
  qty_card: document.querySelector('.qty-card'),
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

///////////костилі///////////
const content = document.querySelectorAll('main');
const content1 = document.querySelectorAll('footer');
const content2 = document.querySelectorAll('header');
content[1].style.display = 'none';
content1[1].style.display = 'none';
content2[1].style.display = 'none';

const cart = JSON.parse(localStorage.getItem('cart')) || [];


//////////////// IF SOMETHING IN CART HIDE BASKET IMAGE///////////////

if (cart.length > 0) {
  selectors.cart.style.display = 'none';

} else if (cart.length === 0) {
  selectors.cart.style.display = 'flex';
  selectors.basket_items.style.display = 'none';
  selectors.delete_all_btn.style.display = 'none';
  selectors.order_total.style.display = 'none';
  selectors.cart_form_authorization.style.display = 'none';
  selectors.cart_label_wrap.style.display = 'none';
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
    const markup = `<li class='basket-item-cart' data-id='${_id}' data-price='${price}'>
  <button class='remove-item' data-modal-close aria-label='delete button'>
        <svg class='remove-item-image' width='20' height='20'>
          <use href='${svg}#icon-close-btn'></use>
        </svg>
      </button>
     <img class='product-img' src='${img}' alt='${desc}'>
     <div class='prod-items-wrap'>
     <h2 class='product-name'>${name}</h2>
		 <div class='prod-desc'>

     <p class='prod-value'><span class='product-category-cart'>Category:&nbsp;</span>${category.replace(
      '_',
      ' ',
    ).replace('&', '').replace('_', ' ')}</p>
     <p class='prod-value'><span class='product-category-cart'>Size:&nbsp;</span> ${size}</p>
     </div>
		 <p class='prod-price'>$${price}</p>
     </div>

     </li>
     `;

    selectors.basket_items.insertAdjacentHTML('beforeend', markup);
  });
  return itemPrice;
}

async function addAllItem() {
  for (const item of cart) {
    if (!item) {
    } else {
      await addItem(item).then(price => totalPrice += price);
    }
  }
}


addAllItem().then(resp => {
  selectors.total_price.textContent = '$' + totalPrice.toFixed(2);
  //////////////////  SUBMIT FORM ////////////////

  selectors.cart_form_authorization.addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();
    orderSuccessModal();
    selectors.cart_form_authorization.reset();
    deleteAllFromBasket();
    handleCartItem(0);
    selectors.cart_form_authorization.removeEventListener('submit', submitForm)
  }

  /////////////// INCREMENT AND DECREMENT /////////////////


  // const incrementBtn = document.querySelector('.increment-button');
  // incrementBtn.addEventListener('click', handleIncrement);
  //
  // function handleIncrement(event) {
  //   console.log(event.target.closest('.basket-item-cart'));
  //
  //   const cartArray = JSON.parse(localStorage.getItem('cart'));
  //
  //
  //   console.log(cartArray);
  // }

});


selectors.basket_items.addEventListener('click', handleRemove);

function handleRemove(e) {
  e.preventDefault();

  if (e.target.className !== 'remove-item') {
    return;
  }






  const number = selectors.qty_card.textContent;
  selectors.qty_card.textContent = String(number - 1);

  const item = e.target.closest('.basket-item-cart');

  totalPrice = totalPrice - Number(item.dataset.price);

  selectors.total_price.textContent = '$' + totalPrice.toFixed(2);

  e.target.closest('.basket-item-cart').classList.add("slide-out-elliptic-left-bck");
 function removeFromDom() {
   selectors.basket_items.removeChild(item);
 }

 setTimeout(removeFromDom, 500)
  removeFromStorageCart(item.dataset.id);


  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  let numberOfProducts = cart.length;

  selectors.number_of_products.textContent = String(numberOfProducts);



}

////////////DELETE ALL BUTTON LOGIC///////////
selectors.delete_all_btn.addEventListener('click', deleteAllFromBasket);

function deleteAllFromBasket() {
  localStorage.removeItem('cart');
  handleCartItem(0);
  selectors.cart.style.display = 'flex';
  selectors.basket_items.style.display = 'none';
  selectors.delete_all_btn.style.display = 'none';
  selectors.order_total.style.display = 'none';
  selectors.cart_form_authorization.style.display = 'none';
  selectors.cart_label_wrap.style.display = 'none';
  selectors.basket_items.removeEventListener('click', handleRemove);
}




