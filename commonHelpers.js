import{r as g,g as b}from"./assets/fetchAPI-145b64cf.js";import"./assets/vendor-b592f4c5.js";const s={cart:document.querySelector(".cart"),basket_items:document.querySelector(".basket-items"),number_of_products:document.querySelector(".number-of-products"),total_price:document.querySelector(".total-price")},a=JSON.parse(localStorage.getItem("cart"))||[];a.length>0&&(s.cart.style.display="none");let v=a.length;s.number_of_products.textContent=String(v);let o=0;async function f(e){let t;return await b(e).then(c=>{const{name:i,category:n,size:l,price:r,img:d,desc:m,_id:p}=c;t=r;const u=`<li class='basket-item' data-id="${p}">
  <button class='remove-item' data-modal-close aria-label='close modal button'>
        <svg class='remove-item-image' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
     <img class='product-img' src="${d}" alt="${m}">
     <div class='prod-items-wrap'>
     <h2 class='product-name'>${i}</h2>
		 <div class='prod-desc'>
     <p class='prod-value'><span class='product-category'>Category:&nbsp;</span>${n.replace("_"," ")}</p>
     <p class='prod-value'><span class='product-category'>Size:&nbsp;</span> ${l}</p>
     </div>
		 <p class='prod-price'>$${r}</p>
     </div>
     </li> <hr>
     `;s.basket_items.insertAdjacentHTML("beforeend",u)}),t}async function h(){for(const e of a)e&&await f(e).then(t=>o+=t)}s.total_price.textContent="$"+o.toFixed(2);h();s.basket_items.addEventListener("click",y);function y(e){if(e.preventDefault(),e.target.className!=="remove-item")return;const t=e.target.closest(".basket-item");s.basket_items.removeChild(t),g(t.dataset.id)}
//# sourceMappingURL=commonHelpers.js.map
