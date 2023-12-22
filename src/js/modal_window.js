import { getProductById } from './fetchAPI.js';


const testID = '640c2dd963a319ea671e3860';
const testID2 = '640c2dd963a319ea671e385e';
const testID3 = '640c2dd963a319ea671e37df';

const button = document.querySelector('.js-open-modal');
const modal = document.querySelector('.js-modal');
const content = document.querySelector('.modal-content');


button.addEventListener('click', openModal);
window.addEventListener('keydown', handlePress);




function handlePress(e) {
  if (e.key === 'Escape') {
    modal.classList.add('is-hidden');
  }
}


export async function openModal() {

  ////////MODAL SHOW////////
  modal.classList.toggle('is-hidden');

  //ADD MARKUP FOR MODAL WINDOW///////

  await getProductById(testID3).then(response => {
    const { img, name, desc, category, size, popularity, price } = response;

    content.innerHTML = `<div class='image-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
    <img src='${img}' alt='${desc}' class='modal-img'>
    </div>
    <div class='modal-descr-together'>
    <div class='modal-descr-container'>
    <h2 class='modal-name'>${name}</h2>
    <div class='modal-text-wrapper'>
    <p class='modal-text'>Category:<p class='modal-text-descr'>${String(category).replace('_', ' ')}</p>
    <p class='modal-text'>Size:<p class='modal-text-descr'>${size}</p>
    <p class='modal-text'>Popularity:<p class='modal-text-descr'>${popularity}</p>
    </div>
    </div>
    <p class='modal-descr'>${desc}</p>
    </div>
    <div class='modal-floor-wrap'>
    <p class='modal-price'>$${price}</p>
    <button type='submit' class='modal-cart-btn'>Add to
        <svg class='modal-window-cart-button' width='18' height='18'>
          <use href='./img/icons.svg#icon-cart' class='kek'></use>
        </svg></button>
    </div>

  `;

    ////////MODAL CLOSE LOGIC///////

    window.onclick = function(event) {
      if (event.target === modal) {
        modal.classList.add('is-hidden');
      }
    };

    const closeBtn = document.querySelector('.modal-close-btn');
    closeBtn.addEventListener('click', closeModal);
    function closeModal(event) {
      if (event.currentTarget === closeBtn) {
        modal.classList.add('is-hidden');
      }
    }

    /////////////////ADD TO CART LOGIC///////////////

    const addToCart = document.querySelector('.modal-cart-btn');
    addToCart.addEventListener('click', handleCart)

    function handleCart() {
      console.log("You add to cart smth")
      return 'ok'
    }

  });
}

