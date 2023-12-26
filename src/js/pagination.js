
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