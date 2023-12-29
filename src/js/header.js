document.querySelector('.qty-card-products')
let qtyCardProducts = cart.length;

const cart = JSON.parse(localStorage.getItem('qty-card-products')) || [];
selector.qty-card-products.textContent = String(qtyCardProducts);
