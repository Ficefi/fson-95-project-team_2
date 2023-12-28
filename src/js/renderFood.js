import { getProducts, getCategoriesProducts } from './fetchAPI';
// import SlimSelect from "slim-select"

const list = document.querySelector('.list-product');

const formSearch = document.querySelector(".form-search");
const errors = document.querySelector(".error");
const selected = document.querySelector("#selected")

 
// errors.style.display = 'none';

errors.style.display = "none";


export let keywords;
export let selectedForm;

// formSearch.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { search } = event.currentTarget.elements;
  keywords = search.value;

  localStorage.setItem('SaveFilters', JSON.stringify(keywords) || null);
  //    localStorage.setItem("savetext", key.keywords);
  //    console.log(searchForm)
  renderFood();
  // console.log(keys)
  console.log(keywords);
}

// formSearch.elements.search.value = localStorage.getItem('savetext');

renderFood();

// selected.addEventListener('change', handleChange);

function handleChange(event) {
  const select = event.target.value;
  const selecteds = event.target.value;
  selectedForm = selecteds;
  console.log(selected.value);
  selectedForm = selecteds;
  localStorage.setItem('SaveCategpries', JSON.stringify(selectedForm) || null);
  //    localStorage.setItem("saveselected", categories.selectedForm);
  //    console.log(categories.selectedForm)
  console.log(select);
  console.log(selectedForm);
  renderFood();
}

// formSearch.elements.selecteds.value = localStorage.getItem('saveselected');

function renderCategory() {
  // const category = null;
  getCategoriesProducts()
    .then(data => {
      const category = data
        .map(data => {
          return `<option value="${data}">${data}</option>`;
        })
        .join('');
      selected.insertAdjacentHTML('beforeend', category);
    })
    .catch(error => {
      // console.log(error);
    });
}

renderCategory();

function renderFood() {
  getProducts()
    .then(foodImages => {
      if (foodImages.results.length === 0) {
        errors.style.display = "flex"
      }
      createMarkup(foodImages.results);
    })
    .catch(error => {
      throw new Error(error);
    });
}

function createMarkup(array) {
  const markup = array
    .map(({ name, img, category, price, size, popularity, is10PercentOff }) => {
      if (is10PercentOff == true) {
        return `
              <li class="item-product">
                <div class="product-container" id="svg-discount">
                  <svg width="60" height="60" class="discount-svg">
                    <use href="/img/icons.svg#icon-discount"></use>
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
                          <use href="/img/icons.svg#icon-cart"></use>
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
                          <use href="/img/icons.svg#icon-cart"></use>
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