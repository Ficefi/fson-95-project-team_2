import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getAllProducts, getProducts } from './fetchAPI';
import { createMarkup } from './renderFood';

const paginationContainer = document.querySelector('.pagination');

let visiblePages = 0;

const screenWidth = window.innerWidth;
if (screenWidth <= 767) {
  visiblePages = 2;
} 
else {
  visiblePages = 4;
}

let page = 1;

function createPagination(data, visiblePages) {
  const options = {
    totalItems: data.totalPages * 10,
    visiblePages: visiblePages,
    template: {
      page: '<a href="#" id="page-btn" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong id="is-selected" class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" id="arrow-btn" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span id="arrow-btn" class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" id="page-btn" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination('pagination', options);

  pagination.on('afterMove', function (eventData) {
    page = eventData.page;
    getProducts(page)
      .then(foodArray => {
        createMarkup(foodArray.results);
      })
      .catch(error => {
        throw new Error(error);
      });
  });
}

getProducts(page)
  .then(data => {
    createPagination(data, visiblePages);
  })
  .catch(error => {
    throw new Error(error);
  });

export { createPagination };


function handleAddToCart(e) {
  const button = e.currentTarget;
  console.log(button);
  const id = button.dataset.id;
  console.log(id);

  if (button.hasAttribute("disabled")) {
    removeFromStorageCart(id)
    console.log(removeFromStorageCart(id));
    button.removeAttribute("disabled");
    button.innerHTML = `
      <svg class="basket-icon" width="18" height="18">
        <use href="../img/icons.svg#icon-cart"></use>
      </svg>
    `;
  } else {
    addToStorageCart(id)
    console.log(addToStorageCart(id));
    button.setAttribute("disabled", true);
    button.innerHTML = `
      <svg class="basket-icon-check" width="18" height="18">
        <use href="../img/icons.svg#icon-check"></use>
      </svg>
    `;
  }
}


const btn = document.querySelectorAll('.svg-container');
console.log(btn);

btn.forEach((button) => {
  button.addEventListener("click", handleAddToCart);
  const id = button.dataset.id;
  if (isExistInCart(id)) {
    button.setAttribute("disabled", true);
    button.innerHTML = `
      <svg class="basket-icon-check" width="18" height="18">
        <use href="../img/icons.svg#icon-check"></use>
      </svg>
    `;
  }
});
