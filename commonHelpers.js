import{o as f,h as d,r as g,g as v,s as h}from"./assets/pagination-1c46d972.js";import"./assets/vendor-b592f4c5.js";const t={cart:document.querySelector(".cart"),basket_items:document.querySelector(".basket-items-cart"),number_of_products:document.querySelector(".number-of-products"),total_price:document.querySelector(".total-price"),delete_all_btn:document.querySelector(".del-all-btn"),order_total:document.querySelector(".order-total"),cart_form_authorization:document.querySelector(".cart-form-authorization"),cart_label_wrap:document.querySelector(".cart-label-wrap"),qty_card:document.querySelector(".qty-card")},S=document.querySelectorAll("main"),k=document.querySelectorAll("footer"),q=document.querySelectorAll("header");S[1].style.display="none";k[1].style.display="none";q[1].style.display="none";const s=JSON.parse(localStorage.getItem("cart"))||[];s.length>0?t.cart.style.display="none":s.length===0&&(t.cart.style.display="flex",t.basket_items.style.display="none",t.delete_all_btn.style.display="none",t.order_total.style.display="none",t.cart_form_authorization.style.display="none",t.cart_label_wrap.style.display="none");let $=s.length;t.number_of_products.textContent=String($);let o=0;async function x(e){let a;return await v(e).then(r=>{const{name:l,category:i,size:n,price:c,img:p,desc:y,_id:_}=r;a=c;const b=`<li class='basket-item-cart' data-id='${_}' data-price='${c}'>
  <button class='remove-item' data-modal-close aria-label='delete button'>
        <svg class='remove-item-image' width='20' height='20'>
          <use href='${h}#icon-close-btn'></use>
        </svg>
      </button>
     <img class='product-img' src='${p}' alt='${y}'>
     <div class='prod-items-wrap'>
     <h2 class='product-name'>${l}</h2>
		 <div class='prod-desc'>

     <p class='prod-value'><span class='product-category-cart'>Category:&nbsp;</span>${i.replace("_"," ").replace("&","").replace("_"," ")}</p>
     <p class='prod-value'><span class='product-category-cart'>Size:&nbsp;</span> ${n}</p>
     </div>
		 <p class='prod-price'>$${c}</p>
     </div>

     </li>
     `;t.basket_items.insertAdjacentHTML("beforeend",b)}),a}async function C(){for(const e of s)e&&await x(e).then(a=>o+=a)}C().then(e=>{t.total_price.textContent="$"+o.toFixed(2),t.cart_form_authorization.addEventListener("submit",a);function a(r){r.preventDefault(),f(),t.cart_form_authorization.reset(),u(),d(0),t.cart_form_authorization.removeEventListener("submit",a)}});t.basket_items.addEventListener("click",m);function m(e){if(e.preventDefault(),e.target.className!=="remove-item")return;const a=t.qty_card.textContent;t.qty_card.textContent=String(a-1);const r=e.target.closest(".basket-item-cart");o=o-Number(r.dataset.price),t.total_price.textContent="$"+o.toFixed(2),e.target.closest(".basket-item-cart").classList.add("slide-out-elliptic-left-bck");function l(){t.basket_items.removeChild(r)}setTimeout(l,500),g(r.dataset.id);let n=(JSON.parse(localStorage.getItem("cart"))||[]).length;t.number_of_products.textContent=String(n)}t.delete_all_btn.addEventListener("click",u);function u(){localStorage.removeItem("cart"),d(0),t.cart.style.display="flex",t.basket_items.style.display="none",t.delete_all_btn.style.display="none",t.order_total.style.display="none",t.cart_form_authorization.style.display="none",t.cart_label_wrap.style.display="none",t.basket_items.removeEventListener("click",m)}
//# sourceMappingURL=commonHelpers.js.map
