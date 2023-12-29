const qtyCart = document.querySelector('.qty-card-products');
let qtyCardProducts = qtyCart.length;

function handleCart() {
  const qtyCart = JSON.parse(localStorage.getItem('cart')) || [];
  qtyCart.textContent = String(qtyCardProducts);
}
