import{o as y,r as b,g as f}from"./assets/fetchAPI-4f2d7449.js";import"./assets/vendor-b592f4c5.js";const e={cart:document.querySelector(".cart"),basket_items:document.querySelector(".basket-items"),number_of_products:document.querySelector(".number-of-products"),total_price:document.querySelector(".total-price"),delete_all_btn:document.querySelector(".del-all-btn"),order_total:document.querySelector(".order-total"),cart_form_authorization:document.querySelector(".cart-form-authorization"),cart_label_wrap:document.querySelector(".cart-label-wrap")},s=JSON.parse(localStorage.getItem("cart"))||[];s.length>0?e.cart.style.display="none":s.length===0&&(e.cart.style.display="flex",e.basket_items.style.display="none",e.delete_all_btn.style.display="none",e.order_total.style.display="none",e.cart_form_authorization.style.display="none",e.cart_label_wrap.style.display="none");let g=s.length;e.number_of_products.textContent=String(g);let r=0;async function h(a){let t;return await f(a).then(o=>{const{name:l,category:i,size:d,price:n,img:m,desc:p,_id:u}=o;t=n;const _=`<li class='basket-item' data-id="${u}" data-price="${n}">
  <button class='remove-item' data-modal-close aria-label='close modal button'>
        <svg class='remove-item-image' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
     <img class='product-img' src="${m}" alt="${p}">
     <div class='prod-items-wrap'>
     <h2 class='product-name'>${l}</h2>
		 <div class='prod-desc'>

     <p class='prod-value'><span class='product-category'>Category:&nbsp;</span>${i.replace("_"," ")}</p>
     <p class='prod-value'><span class='product-category'>Size:&nbsp;</span> ${d}</p>
     </div>
		 <p class='prod-price'>$${n}</p>

     </div>

     </li>
     `;e.basket_items.insertAdjacentHTML("beforeend",_)}),t}async function v(){for(const a of s)a&&await h(a).then(t=>r+=t)}v().then(a=>{e.total_price.textContent="$"+r.toFixed(2),e.cart_form_authorization.addEventListener("submit",t);function t(o){o.preventDefault(),y(),e.cart_form_authorization.reset(),c()}});e.basket_items.addEventListener("click",S);function S(a){if(a.preventDefault(),a.target.className!=="remove-item")return;const t=a.target.closest(".basket-item");r=r-Number(t.dataset.price),e.total_price.textContent="$"+r.toFixed(2),e.basket_items.removeChild(t),b(t.dataset.id);let l=(JSON.parse(localStorage.getItem("cart"))||[]).length;e.number_of_products.textContent=String(l)}e.delete_all_btn.addEventListener("click",c);function c(){localStorage.removeItem("cart"),e.cart.style.display="flex",e.basket_items.style.display="none",e.delete_all_btn.style.display="none",e.order_total.style.display="none",e.cart_form_authorization.style.display="none",e.cart_label_wrap.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
