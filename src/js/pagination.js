import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getAllProducts } from './fetchAPI';
import { createMarkup } from './renderFood';

const loader = document.querySelector('.loader');

loader.hidden = true;
let page = 1;

getAllProducts(page)
  .then(foodArray => {
    createMarkup(foodArray.results);
  })
  .catch(error => {
    throw new Error(error);
  })
  .finally(() => {
    loader.hidden = true;
  });

function createTotalPages() {
  getAllProducts(page).then(Object => {
    options.totalItems = Object.totalPages * 10;
    const pagination = new Pagination('pagination', options);
  });
}

const options = {
  totalItems: 900,
  visiblePages: 4,
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

// createTotalPages();

const pagination = new Pagination('pagination', options);

pagination.on('afterMove', function (eventData) {
  loader.hidden = false;
  page = eventData.page;
  getAllProducts(page)
    .then(foodArray => {
      createMarkup(foodArray.results);
    })
    .catch(error => {
      throw new Error(error);
    })
    .finally(() => {
      loader.hidden = true;
    });
});
