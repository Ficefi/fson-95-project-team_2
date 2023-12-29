let qtyCardProducts = cart.length;

const cart = JSON.parse(localStorage.getItem('cart')) || [];
qty-card-products.textContent = String(qtyCardProducts);
