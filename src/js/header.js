const qtyCart = document.querySelector('.qty-card-products');

const qtyProd = JSON.parse(localStorage.getItem('cart')) || [];
let qtyProducts = qtyProd.length;

qtyCart.textContent = String(qtyProducts);
