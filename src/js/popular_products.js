import { getPopularProducts } from './fetchAPI';
import {
  addToStorageCart,
  isExistInCart,
  removeFromStorageCart,
} from './localStorage.js';
import { disableScroll, openModal } from './modal_window';
import { handleCartItem, qty_card_products } from './header.js';
import svg from '../img/icons.svg';

const product_list = document.querySelector('.product-card');

function createPopularList() {
  getPopularProducts()
    .then(result => {
      createPopularMarkup(result);
      const button_list = document.querySelectorAll('.popular_basket');
      button_list.forEach(button => {
        button.addEventListener('click', handleAddToCart);
        const id = button.dataset.id;
        if (isExistInCart(id)) {
          button.setAttribute('disabled', 'true');
          button.innerHTML = `
            <svg class="svg-item-check" width="12" height="12">
              <use href="${svg}#icon-check"></use>
            </svg>
          `;
        }
      });

      function handleAddToCart(event) {
        const button = event.currentTarget;
        const id = button.dataset.id;

        if (isExistInCart(id)) {
          removeFromStorageCart(id);
          button.removeAttribute(id);
          button.innerHTML = `
            <svg class="svg-item" width="12" height="12">
              <use href="${svg}#icon-cart"></use>
            </svg>
          `;
        } else {
          addToStorageCart(id);
          button.setAttribute('disabled', true);
          if (isExistInCart(id)) {
            button.style.transform = `rotate(270deg)`;
            setTimeout(() => {
              {
                button.innerHTML = `
              <svg class="svg-item-check" width="12" height="12">
                <use href="${svg}#icon-check"></use>
              </svg>
              `;
                button.style.transform = `rotate(360deg)`;
              }
            }, 300);
            button.setAttribute('disabled', 'true');
          }
          handleCartItem(Number(qty_card_products.outerText) + Number(1));
        }
      }
    })
    .catch(error => {
      throw new Error(error);
    });
}

function createPopularMarkup(array) {
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('product-list-container');

  const markup = array
    .map(({ category, img, name, popularity, size, _id }) => {
      return `<li class="product-content" data-id=${_id}>
        <div class="background-img">
            <img src="${img}" alt="${name}" class="product-image" />
        </div>
        <div class="product-txt-bar">
            <h3 class="product-title">${name}</h3>
            <p class="product-category">
                <span class="span-category">Category:</span>${String(
                  category
                ).replace(`_`, ` `)}
            </p>
            <div class="product-txt-two">
                <p class="product-size">
                    <span class="span-category">Size:</span>${size}
                </p>
                <p class="product-popularity">
                    <span class="span-category">Popularity:</span>${popularity}
                </p>
            </div>
        </div>
        <button class="popular_basket" data-id="${_id}" data-modal-close>
            <svg class="svg-item" width="12" height="12">
                <use href="${svg}#icon-cart"></use>
            </svg>
        </button>
    </li>`;
    })
    .join('');

  containerDiv.innerHTML = markup;
  product_list.appendChild(containerDiv);
}

function modalCall(event) {
  const item = event.target.closest('.product-content');
  const btn = event.target.closest('.popular_basket');

  if (item && !btn) {
    const id = item.dataset.id;
    openModal(id).then(disableScroll);
  }
}

product_list.addEventListener('click', modalCall);

createPopularList();

export { createPopularList };
