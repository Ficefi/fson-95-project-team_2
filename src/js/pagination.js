import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getProducts } from './fetchAPI';
import { createMarkup } from './renderFood';

const paginationContainer = document.querySelector('.pagination');

let limit = 0;
const primaryScreenWidth = window.innerWidth;

function getVisiblePages(primaryScreenWidth) {
  if (primaryScreenWidth <= 767) {
    return 2;
  } else {
    return 4;
  }
}

if (primaryScreenWidth <= 767) {
  limit = 6;
} else if (primaryScreenWidth <= 1239) {
  limit = 8;
} else {
  limit = 9;
}

let page = 1;

function createPagination(data) {
  page = 1;
  const options = {
    totalItems: data.totalPages * 10,
    visiblePages: getVisiblePages(primaryScreenWidth),
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
    getProducts(page, limit)
      .then(foodArray => {
        createMarkup(foodArray.results);
      })
      .catch(error => {
        throw new Error(error);
      });
  });
}

getProducts(page, limit)
  .then(data => {
    createPagination(data);
  })
  .catch(error => {
    throw new Error(error);
  });

export { createPagination };
