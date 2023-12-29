import { getProductById, sendSubscription } from './fetchAPI.js';
import { addToStorageCart, removeFromStorageCart, isExistInCart} from './localStorage.js';
import vegetables from "../img/2x/desktop/fruitCart@2x.png"
import orderDone from "../img/check-mark.png"

const modal = document.querySelector('.js-modal');
const content = document.querySelector('.modal-content');
const subsModal = document.querySelector('.js-modal-subscription');
const subscriptionModalContent = document.querySelector('.subscription-modal-content');
const orderModal = document.querySelector('.js-modal-order');
const orderContent = document.querySelector('.subscription-order-content')


/////////////////////////////////////////////////////
////////////////  ITEM MODAL //////////////////////////
/////////////////////////////////////////////////////

export async function openModal(id) {

  ////////MODAL SHOW////////
  modal.classList.toggle('is-hidden');

  //ADD MARKUP FOR MODAL WINDOW///////

  await getProductById(id).then(response => {
    const { img, name, desc, category, size, popularity, price } = response;

    const descriptionTemp = desc.split("");

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
    <p class='modal-text'>Category:<p class='modal-text-descr'>${String(category).replace('_', ' ').replace("&", "").replace('_', " ")}</p>
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
          <use href='./img/icons.svg#icon-cart'></use>
        </svg></button>
    </div>

  `;

    if (descriptionTemp.length > 300) {
      const thing = document.querySelector(".modal-descr");
      thing.classList.add("modal-descr-fixed")
    } else {
      const thing = document.querySelector(".modal-descr");
      thing.classList.remove("modal-descr-fixed")
    }

    ////////MODAL CLOSE LOGIC///////

    window.addEventListener('keydown', handlePress);

    function handlePress(e) {
      if (e.key === 'Escape') {
        modal.classList.add('is-hidden');
      }
    }

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
    addToCart.addEventListener('click', handleCart);


    if (isExistInCart(id)) {
        addToCart.childNodes[0].data = "Remove from"
        addToCart.style.minWidth = '175px';
    }


    function handleCart() {
      if (isExistInCart(id)) {
        removeFromStorageCart(id)
        addToCart.childNodes[0].data = "Add to"
        addToCart.style.minWidth = '130px';
      }
      else {

        addToStorageCart(id)
        addToCart.childNodes[0].data = "Remove from"
        addToCart.style.minWidth = '175px';
      }
    }

  if (modal.classList.contains("is-hidden")) {
    removeEventListener('click', closeModal);
    removeEventListener('click', handleCart);
    removeEventListener('keydown', handlePress);
  }
  });
}

/////////////////////////////////////////////////////
////////////////SUBSCRIPTION MODAL //////////////////
/////////////////////////////////////////////////////

export async function subscriptionModal(email) {

  ////////MODAL SHOW////////
  subsModal.classList.toggle('is-hidden');



  ///////////IS EMAIL EXIST? LOGIC///////////

  await sendSubscription(email).then(response => {
    subscriptionModalContent.innerHTML = `<div class='success-text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-success-header'>Thanks for subscribing for <span class='subscription-success-email'>new</span> products</h2>
      <p class='subscription-success-descr'>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      <img src="${vegetables}" alt='vegetables' class='subscription-success-image'>
  `
  }).catch(error => {
    if (error.response.status === 409) {
      //////EMAIL ALREADY SUBSCRIBED
      subscriptionModalContent.innerHTML = `<div class='text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-failed-header'>This <span class='subscription-failed-email'>email address</span> has already been entered</h2>
      <p class='subscription-failed-descr'>You have already subscribed to our new products. Watch for offers at the mailing address.</p>
  `
    } else {
      console.log("SOMETHING WENT WRONG");
    }

  });


    ////////MODAL CLOSE LOGIC///////

    window.addEventListener('keydown', handlePress);

    function handlePress(e) {
      if (e.key === 'Escape') {
        subsModal.classList.add('is-hidden');
      }
    }

    window.onclick = function(event) {
      if (event.target === subsModal) {
        subsModal.classList.add('is-hidden');
      }
    };

    const closeBtn = document.querySelector('.modal-close-btn');
    closeBtn.addEventListener('click', closeModal);
    function closeModal(event) {
      if (event.currentTarget === closeBtn) {
        subsModal.classList.add('is-hidden');
      }
    }


  if (modal.classList.contains("is-hidden")) {
    removeEventListener('click', closeModal);
    removeEventListener('keydown', handlePress);
  }
}


/////////////////////////////////////////////////////
//////////////ORDER SUCCESS MODAL ///////////////////
/////////////////////////////////////////////////////


export function orderSuccessModal() {
  orderModal.classList.toggle('is-hidden');

  /////     MARKUP    /////////


  orderContent.innerHTML = `
  <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='20' height='20'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
    <img src='${orderDone}' alt='order successful' class='order-success-img'>
    <h2 class='order-success-status'>Order success</h2>
    <p class='order-success-descr'>Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness.</p>
  `


  ////////MODAL CLOSE LOGIC///////

  window.addEventListener('keydown', handlePress);

  function handlePress(e) {
    if (e.key === 'Escape') {
      orderModal.classList.add('is-hidden');
    }
  }

  window.onclick = function(event) {
    if (event.target === orderModal) {
      orderModal.classList.add('is-hidden');
    }
  };

  const closeBtn = document.querySelector('.modal-close-btn');
  closeBtn.addEventListener('click', closeModal);
  function closeModal(event) {
    if (event.currentTarget === closeBtn) {
      orderModal.classList.add('is-hidden');
    }
  }
}
