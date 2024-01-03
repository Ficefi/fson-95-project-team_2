import { getAllProducts, getCategoriesProducts, getDiscountProducts, getPopularProducts, getProductById, createNewOrder, sendSubscription } from "./fetchAPI"
import { disableScroll, openModal } from './modal_window';
import svg from '../img/icons.svg';
import { addToStorageCart, removeFromStorageCart, isExistInCart } from "./localStorage"
import { handleCartItem, qty_card_products } from './header.js';

const card = document.querySelector('.discount_container');
// Ліміт карток на сторінці
const cardsPerPage = 2;

function createMarkup(images, names, startIndex = 0) {
  const endIndex = startIndex + cardsPerPage;
  const slicedImages = images.slice(startIndex, endIndex);

  const res = slicedImages.map(({ img, price, _id, desc }, index) =>
    `<li class="card_item" data-id="${_id}">
      <div class="discount-icon-container">
        <svg class="discount-icon" width="60" height="60">
          <use href="${svg}#icon-discount"></use>
        </svg>
      </div>
      <div class="card-content">
        <img src="${img}" alt="${desc}" class="card-img" width="105" height="105">
      </div>
      <div class="title-box">
        <h3 class="card-title">${names[index]}</h3>
        <p class="card-price">$${price}</p>
      </div>
      <button class="basket" data-id="${_id}">
        <svg class="basket-icon" width="18" height="18">
          <use href="${svg}#icon-cart"></use>
        </svg>
      </button>
    </li>`
  ).join('');
  return res;
}

async function addToBasket() {
  const result = await getDiscountProducts();
  const shortNames = result.reduce((acc, product) => {
    if (product.name.length > 10) {
      acc.push(product.name.slice(0, 10) + "...");
    } else {
      acc.push(product.name);
    }
    return acc;
  }, []);

  card.innerHTML = createMarkup(result, shortNames);

  // Виклик модалки
  card.addEventListener('click', (event) => {
    const item = event.target.closest('.card_item');
    if (item) {
      const id = item.dataset.id;
      openModal(id).then(disableScroll);
    }
  });


  // Зміна кнопки
  const btn = document.querySelectorAll('.basket');

  btn.forEach((button) => {
    button.addEventListener("click", handleAddToCart);
    const id = button.dataset.id;
    if (isExistInCart(id)) {
      button.setAttribute("disabled", "true");
      button.innerHTML = `
        <svg class="basket-icon-check" width="18" height="18">
          <use href="${svg}#icon-check"></use>
        </svg>
      `;
      addToStorageCart(id)
      handleCartItem(Number(qty_card_products.outerText) + Number(1));
    }
  });


}
addToBasket();

function handleAddToCart(e) {
  const button = e.target;
  const id= button.closest(".card_item").dataset.id;

  // if (isExistInCart(id)) {
  //   removeFromStorageCart(id)
  //   button.removeAttribute(id);
  //   button.innerHTML = `
  //     <svg class="basket-icon" width="18" height="18">
  //       <use href="${svg}#icon-cart"></use>
  //     </svg>
  //   `;
  // } else if (isExistInCart(id)) {
  //   addToStorageCart(id)
  //   button.setAttribute("disabled", true);
  //   button.innerHTML = `
  //     <svg class="basket-icon-check" width="18" height="18">
  //       <use href="${svg}#icon-check"></use>
  //     </svg>
  //   `;
  // }
}





