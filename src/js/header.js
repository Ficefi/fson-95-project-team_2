export const qty_card_products = document.querySelector('.qty-card')

const cart = JSON.parse(localStorage.getItem('cart')) || [];
export let numberOfProducts = cart.length;


export function handleCartItem(num) {
  qty_card_products.textContent = String(num);
}

handleCartItem(numberOfProducts)