import { getPopularProducts } from './fetchAPI';

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
  const markup = array
    .map(({ category, img, name, popularity, size }) => {
      return `<li class="product-content">
        <div class="background-img">
            <img src="${img}" alt="${name}" class="product-image" />
        </div>
        <div class="product-txt-bar">
            <h3 class="product-title">${name}</h3>
            <p class="product-category">
                <span class="span-category">Category:</span>${category}
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
                <use href="./img/icons.svg#icon-cart"></use>
            </svg>
        </div>
    </li>`;
    })
    .join('');
  product_list.insertAdjacentHTML('beforeend', markup);
}

createPopularList();

export { createPopularList };
