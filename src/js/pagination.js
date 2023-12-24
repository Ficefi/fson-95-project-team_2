// import { UnsplashAPI } from './UnsplashAPI';
// // import createGalleryCards from '../templates/gallery-cards.hbs';
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// import './localStorage.js';
// import './pagination.js';
// // import './modal_window.js;
// import { renderFood } from './renderFood.js';
//  renderFood();

// const ulEl = document.querySelector('.js-gallery');
// const container = document.getElementById('tui-pagination-container');

// const options = {
//   // below default value of options
//   totalItems: 0,
//   itemsPerPage: 12,
//   visiblePages: 5,
//   page: 1,
// };

// const unsplashApi = new UnsplashAPI();
// const pagination = new Pagination(container, options);
// const page = pagination.getCurrentPage();
// const lightbox = new SimpleLightbox('.gallery a');

// async function onRenderPage(page) {

//   try {
//     const respons = await unsplashApi.getPopularPhotos(page);
//     lightbox.refresh();
//     ulEl.innerHTML = createGalleryCards(respons.data.results);
    
//     pagination.reset(respons.data.total);
    

//     // Якщо все добре, додаємо пагінацію
//     container.classList.remove('is-hidden');

//   } catch (err) {
//     console.log(err);
//   }
  
// }
// // Метод для відображення на яку кнопку натиснули. Подальша підгрузка данних за допомгою пагінації
// const createPopularPagination = async event => {
//   try {
//     const currentPage = event.page;
//     // Робимо подальші запити
//     const respons = await unsplashApi.getPopularPhotos(currentPage);

//     // Після відповіді відмальовуємо розмітку
//     ulEl.innerHTML = createGalleryCards(respons.data.results);
//     // lightbox.refresh();
//   } catch (err) {
//     console.log(err);
//   }
// };

// // Додаємо слухача на пагінацію
// pagination.on('afterMove', createPopularPagination);

// onRenderPage();

// //* 2 частина запиту картинок по ключовому слову
// const searchFormEl = document.querySelector('.js-search-form');

// searchFormEl.addEventListener('submit', onSearchFormSubmit);

// const createPhotosByQueryPagination = async event => {
//   try {
//     const currentPage = event.page;

//     // Робимо подальші запити
//     const response = await unsplashApi.fetchPhotosByQuery(currentPage);

//     // Після відповіді відмальовуємо розмітку
//     ulEl.innerHTML = createGalleryCards(response.data.results);
//     // lightbox.refresh();
//   } catch (err) {
//     console.log(err);
//   }
// };

// async function onSearchFormSubmit(e) {
//   e.preventDefault();

//   // Відписуємось від попередніх пагінацій
//   pagination.off('afterMove', createPopularPagination);
//   pagination.off('afterMove', createPhotosByQueryPagination);

//   const searchQuery =
//     e.currentTarget.elements['user-search-query'].value.trim();

//   unsplashApi.query = searchQuery;

//   if (!searchQuery) {
//     return alert('пустий запит');
//   }

//   try {
//     const respons = await unsplashApi.fetchPhotosByQuery(page);
//     if (respons.data.results.length === 0) {
//       container.classList.add('is-hidden');
//       searchFormEl.reset();
//       ulEl.innerHTML = '';
//       return alert('Вибачте, по вашому запису нічого не знайдено ');
//     }

//     if (respons.data.results.length < options.itemsPerPage) {
//       container.classList.add('is-hidden');
//       ulEl.innerHTML = createGalleryCards(respons.data.results);
//       return;
//     }
//     // lightbox.refresh();
//     ulEl.innerHTML = createGalleryCards(respons.data.results);
//     pagination.reset(respons.data.total);
//     // Робимо підписку на нову пагінацію, для подальших запросів
//     pagination.on('afterMove', createPhotosByQueryPagination);
//   } catch (err) {
//     console.log(err);
//   }
// }
//==============================2 variant
"use strict";

const pagBtnContainer = document.querySelector(".a-container");
const productsCont = document.querySelector(".products");

let paginationParameters = {
  total: 100,
  limit: 10,
  currentPage: 1,
  pageArr: [],
};

const pageNumbers = (total, max, current) => {
  const half = Math.round(max / 2);
  let pagBTNs = Math.ceil(total / max);
  let to = max;

  if (current + half >= pagBTNs) {
    to = pagBTNs;
  } else if (current > half) {
    to = current + half;
  }

  let from = 0;

  if (to - max < 1) {
    from = 0;
  } else {
    from = to - max;
  }

  if (pagBTNs < max) max = pagBTNs;
  paginationParameters.pages = pagBTNs;

  paginationParameters.pageArr = Array.from(
    { length: max },
    (_, i) => i + 1 + from
  );

  return paginationParameters.pageArr;
};

function PaginationButtons(totalPages, maxPageVisible = 10, currentPage = 1) {
  let pages = pageNumbers(totalPages, maxPageVisible, currentPage);
  let currentPageBtn = null;

  const buttons = new Map();
  const fragment = document.createDocumentFragment();

  const paginationButtonsContainer = document.createElement("div");
  paginationButtonsContainer.className = "pagination-buttons";
  const disabled = {
    start: () => pages[0] === currentPage,
    prev: () => currentPage === 1,
    end: () => currentPage === totalPages / maxPageVisible,
    next: () => currentPage === totalPages / maxPageVisible,
  };

  const createAndSetupButton = (
    label = "",
    cls = "",
    disabled = false,
    handlerClick = () => {}
  ) => {
    const button = document.createElement("button");
    button.textContent = label;
    button.className = `page-btn ${cls}`;
    button.disabled = disabled;
    button.addEventListener("click", (e) => {
      handlerClick(e);
      this.update();

      paginationButtonsContainer.value = currentPage;
      paginationButtonsContainer.dispatchEvent(new Event("change"));
    });

    return button;
  };

  const onPageButtonClick = (e) =>
    (currentPage = Number(e.currentTarget.textContent));

  const onPageButtonUpdate = (index) => (btn) => {
    btn.textContent = pages[index];

    if (pages[index] === currentPage) {
      currentPageBtn.classList.remove("active");
      btn.classList.add("active");
      currentPageBtn = btn;
      currentPageBtn.focus();
    }
  };

  buttons.set(
    createAndSetupButton(
      "start",
      "start-page",
      disabled.start(),
      () => (currentPage = 1)
    ),
    (btn) => (btn.disabled = disabled.start())
  );

  buttons.set(
    createAndSetupButton(
      "prev",
      "prev-page",
      disabled.prev(),
      () => (currentPage -= 1)
    ),
    (btn) => (btn.disabled = disabled.prev())
  );

  pages.forEach((pageNumber, index) => {
    const isCurrentPage = pageNumber === currentPage;

    const button = createAndSetupButton(
      pageNumber,
      isCurrentPage ? "active" : "",
      false,
      onPageButtonClick
    );

    if (isCurrentPage) {
      currentPageBtn = button;
    }
    buttons.set(button, onPageButtonUpdate(index));
  });

  buttons.set(
    createAndSetupButton(
      "next",
      "next-page",
      disabled.next(),
      () => (currentPage += 1)
    ),
    (btn) => (btn.disabled = disabled.next())
  );

  buttons.set(
    createAndSetupButton(
      "end",
      "end-page",
      disabled.end(),
      () => (currentPage = totalPages / maxPageVisible)
    ),
    (btn) => (btn.disabled = disabled.end())
  );

  buttons.forEach((_, btn) => {
    fragment.appendChild(btn);
  });

  this.render = (
    container = document.querySelector(".pagination-container")
  ) => {
    paginationButtonsContainer.appendChild(fragment);
    container.appendChild(paginationButtonsContainer);
  };

  this.update = (newPageNumber = currentPage) => {
    currentPage = newPageNumber;
    pages = pageNumbers(totalPages, maxPageVisible, currentPage);
    buttons.forEach((updateButton, button) => updateButton(button));
  };

  this.onChange = (handler) => {
    paginationButtonsContainer.addEventListener("change", handler);
  };
}

const paginationButtons = new PaginationButtons(paginationParameters.total);
paginationButtons.render();
////////////////////////
const getProducts = async function (lim, skp) {
  try {
    productsCont.innerHTML =
      '<div class="spinner-cont"><div class="spinner"></div></div>';
    const API_URL = `https://dummyjson.com/products?limit=${lim}&skip=${skp}`;

    const res = await fetch(API_URL);
    const result = await res.json();

    paginationParameters.total = 150;
    if (result) productsCont.innerHTML = "";
    const productsArr = result.products;
    productsArr.forEach((el, i) => {
      let html = `
        <div class="product">
          <img src="${el.thumbnail}" alt="" srcset="" />
          <div>
            <h2>${el.title}</h2>
            <h3>Price: ${el.price} $</h3>
            <h3>Brand: ${el.brand}</h3>
            <h3>Rating: ${el.rating}</h3>
            <h3>Stock: ${el.stock}</h3>
            <p>${el.description}</p>
          </div>
        </div>`;
      productsCont.insertAdjacentHTML("beforeend", html);
    });
  } catch (error) {
    console.log(error);
  }
};
getProducts(10, 0);

paginationButtons.onChange((e) => {
  const currentPage = e.target.value;
  const limit = (currentPage - 1) * 10;

  getProducts(10, limit);
});