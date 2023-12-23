import { getAllProducts } from './fetchAPI';

const list = document.querySelector('.list-product');

function renderFood() {
  getAllProducts()
    .then(foodImages => {
      createmarkup(foodImages.results);
    })
    .catch(error => {
      throw new Error(error);
    });
}

function createmarkup(array) {
  const markup = array
    .map(({ name, img, category, price, size, popularity }) => {
      return `
        <li class="item-product">
          <div class="product-container">
            <img class="img-product" src="${img}" width="400" height="200">
            <h2 class="caption-product">${name}</h2>
            <div class="features-container">
                <p class="feature">Category: <span class=feature-black>${category}</span></p>
                <p class="feature">Size: <span class=feature-black>${size}</span></p>
                <p class="feature popularity">Popularity: <span class=feature-black>${popularity}</span></p>
            </div>
            <div class="sell-container">
                <p class="price-product">$${price}</p>
                <div class="svg-container">
                    <svg class="svg" width="18" height="18">
                    <use href="./img/icons.svg#icon-cart"></use>
                    </svg>
                </div>  
            </div>
          </div>
        </li>
        `;
    })
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}

export { renderFood };
