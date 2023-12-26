import { getAllProducts, getCategoriesProducts, getDiscountProducts,
    getPopularProducts, getProductById, createNewOrder, sendSubscription } from "./fetchAPI"

const button = document.querySelector('.basket');
console.log(button);
const card = document.querySelector('.card')

console.log('og');

function createMarkup(images, names) {
  const res = images.map(({img, price}, index)=>
  `<li class="card">
  <div class><svg class="discount-icon" width="60" height="60">
  <use href="../img/icons.svg#icon-discount"></use>
</svg></div>
  <div class="card-content">
  <img src="${img}" alt="Product image" class="card-img" width="105" height="105">
  </div>
  <div class="title-box">
    <h3 class="card-title">${names[index]}</h3>
    <p class="card-price">$${price}</p>
  </div>
  <button class="basket">
          <svg class="basket-icon" width="18" height="18">
            <use href="../img/icons.svg#icon-cart"></use>
          </svg>
  </button>
</li>`
).join('');
return res;
  
};

 async function addToBasket () {
    const result = await getDiscountProducts();
console.log(result);
    const shortNames = result.reduce((acc, product)=> {
      if (product.name.length > 10){
        acc.push(product.name.slice(0, 10) + "...");
      }else{
        acc.push(product.name);
      }
      return acc;
    }, []);
    
    card.innerHTML = createMarkup(result, shortNames);

 }



async function checkLocalStorage() {
  const result = await getDiscountProducts();
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  let productId = result.find(item => item._id)._id;
  console.log(productId);

  let productIndex = cart.indexOf(productId);

  if(productIndex > -1){
    button.classList.add('disabled');
  }else{
    
button.addEventListener('click', handleClick);
    }
    function handleClick() {
      cart.push(productId);
      localStorage.setItem("cart", JSON.stringify(cart));
  
        button.classList.add('active');
    button.removeEventListener("click", handleClick);
  }
 
  
}
addToBasket();
checkLocalStorage();

















































  