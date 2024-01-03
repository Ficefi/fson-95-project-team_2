export const qty_card_products = document.querySelector('.qty-card')

const cart = JSON.parse(localStorage.getItem('cart')) || [];

const num = cart.length > 0 ? cart.length : 0;
export let numberOfProducts = num;


export function handleCartItem(num) {
  qty_card_products.textContent = String(num);
}

handleCartItem(numberOfProducts)