const list = document.querySelector('.list-product');

function createMarkup(array) {
  const markup = array
    .map(({ name, img, category, price, size, popularity, is10PercentOff }) => {
      if (is10PercentOff == true) {
        return `
              <li class="item-product">
                <div class="product-container" id="svg-discount">
                  <svg width="60" height="60" class="discount-svg">
                    <use href="../img/icons.svg#icon-discount"></use>
                  </svg>
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
      } else {
        return `
              <li class="item-product">
                <div class="product-container" id="svg-discount">
                  <img class="img-product" src="${img}" width="400" height="200">
                  <h2 class="caption-product">${name}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${String(
                        category
                      ).replace('_', ' ')}</span></p>
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
      }
    })
    .join('');
  list.innerHTML = '';
  list.insertAdjacentHTML('beforeend', markup);
}

export { createMarkup };
