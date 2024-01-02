import{o as g,h as d,r as f,g as h,s as v}from"./assets/pagination-5d7041a1.js";import"./assets/vendor-b592f4c5.js";const e={cart:document.querySelector(".cart"),basket_items:document.querySelector(".basket-items-cart"),number_of_products:document.querySelector(".number-of-products"),total_price:document.querySelector(".total-price"),delete_all_btn:document.querySelector(".del-all-btn"),order_total:document.querySelector(".order-total"),cart_form_authorization:document.querySelector(".cart-form-authorization"),cart_label_wrap:document.querySelector(".cart-label-wrap"),qty_card:document.querySelector(".qty-card")},S=document.querySelectorAll("main"),k=document.querySelectorAll("footer"),q=document.querySelectorAll("header");S[1].style.display="none";k[1].style.display="none";q[1].style.display="none";const l=JSON.parse(localStorage.getItem("cart"))||[];l.length>0?e.cart.style.display="none":l.length===0&&(e.cart.style.display="flex",e.basket_items.style.display="none",e.delete_all_btn.style.display="none",e.order_total.style.display="none",e.cart_form_authorization.style.display="none",e.cart_label_wrap.style.display="none");let $=l.length;e.number_of_products.textContent=String($);let n=0;async function x(t){let r;return await h(t).then(o=>{const{name:c,category:a,size:s,price:i,img:p,desc:y,_id:_}=o;r=i;const b=`<li class='basket-item-cart' data-id='${_}' data-price='${i}'>
  <button class='remove-item' data-modal-close aria-label='delete button'>
        <svg class='remove-item-image' width='20' height='20'>
          <use href='${v}#icon-close-btn'></use>
        </svg>
      </button>
     <img class='product-img' src='${p}' alt='${y}'>
     <div class='prod-items-wrap'>
     <h2 class='product-name'>${c}</h2>
		 <div class='prod-desc'>

     <p class='prod-value'><span class='product-category-cart'>Category:&nbsp;</span>${a.replace("_"," ").replace("&","").replace("_"," ")}</p>
     <p class='prod-value'><span class='product-category-cart'>Size:&nbsp;</span> ${s}</p>
     </div>
		 <p class='prod-price'>$${i}</p>
     </div>

     </li>
     `;e.basket_items.insertAdjacentHTML("beforeend",b)}),r}async function C(){for(const t of l)t&&await x(t).then(r=>n+=r)}C().then(t=>{e.total_price.textContent="$"+n.toFixed(2),e.cart_form_authorization.addEventListener("submit",r);function r(a){a.preventDefault(),g(),e.cart_form_authorization.reset(),u(),d(0),e.cart_form_authorization.removeEventListener("submit",r)}document.querySelector(".increment-button").addEventListener("click",c);function c(a){console.log(a.target.closest(".basket-item-cart"));const s=JSON.parse(localStorage.getItem("cart"));console.log(s)}});e.basket_items.addEventListener("click",m);function m(t){if(t.preventDefault(),t.target.className!=="remove-item")return;const r=e.qty_card.textContent;e.qty_card.textContent=String(r-1);const o=t.target.closest(".basket-item-cart");n=n-Number(o.dataset.price),e.total_price.textContent="$"+n.toFixed(2),e.basket_items.removeChild(o),f(o.dataset.id);let a=(JSON.parse(localStorage.getItem("cart"))||[]).length;e.number_of_products.textContent=String(a)}e.delete_all_btn.addEventListener("click",u);function u(){localStorage.removeItem("cart"),d(0),e.cart.style.display="flex",e.basket_items.style.display="none",e.delete_all_btn.style.display="none",e.order_total.style.display="none",e.cart_form_authorization.style.display="none",e.cart_label_wrap.style.display="none",e.basket_items.removeEventListener("click",m)}
//# sourceMappingURL=commonHelpers.js.map
