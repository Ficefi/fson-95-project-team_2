import { getPopularProducts } from './fetchAPI';
import { disableScroll, openModal } from './modal_window';
import svg from '../img/icons.svg';

const product_list = document.querySelector('.product-card');

function createPopularList() {
  getPopularProducts()
    .then(result => {
      createPopularMarkup(result);
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
        <div class="svg-svg">
            <svg class="svg-item" width="12" height="12">
                <use href="${svg}#icon-cart"></use>
            </svg>
        </div>
    </li>`;
    })
    .join('');

  containerDiv.innerHTML = markup;
  product_list.appendChild(containerDiv);
}

function modalCall(event) {
  const item = event.target.closest('.product-content');

  if (item) {
    const id = item.dataset.id;
    openModal(id).then(disableScroll);
  }
}

product_list.addEventListener('click', modalCall)

createPopularList();

export { createPopularList };
