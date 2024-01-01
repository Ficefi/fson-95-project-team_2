import{o as b,h as d,r as g,g as h,s as f}from"./assets/pagination-51078f5b.js";import"./assets/vendor-b592f4c5.js";const t={cart:document.querySelector(".cart"),basket_items:document.querySelector(".basket-items-cart"),number_of_products:document.querySelector(".number-of-products"),total_price:document.querySelector(".total-price"),delete_all_btn:document.querySelector(".del-all-btn"),order_total:document.querySelector(".order-total"),cart_form_authorization:document.querySelector(".cart-form-authorization"),cart_label_wrap:document.querySelector(".cart-label-wrap"),qty_card:document.querySelector(".qty-card")},l=JSON.parse(localStorage.getItem("cart"))||[];l.length>0?t.cart.style.display="none":l.length===0&&(t.cart.style.display="flex",t.basket_items.style.display="none",t.delete_all_btn.style.display="none",t.order_total.style.display="none",t.cart_form_authorization.style.display="none",t.cart_label_wrap.style.display="none");let v=l.length;t.number_of_products.textContent=String(v);let n=0;async function k(e){let r;return await h(e).then(a=>{const{name:s,category:o,size:c,price:i,img:m,desc:p,_id:y}=a;r=i;const _=`<li class='basket-item-cart' data-id='${y}' data-price='${i}'>
  <button class='remove-item' data-modal-close aria-label='delete button'>
        <svg class='remove-item-image' width='20' height='20'>
          <use href='${f}#icon-close-btn'></use>
        </svg>
      </button>
     <img class='product-img' src='${m}' alt='${p}'>
     <div class='prod-items-wrap'>
     <h2 class='product-name'>${s}</h2>
		 <div class='prod-desc'>

     <p class='prod-value'><span class='product-category-cart'>Category:&nbsp;</span>${o.replace("_"," ").replace("&","").replace("_"," ")}</p>
     <p class='prod-value'><span class='product-category-cart'>Size:&nbsp;</span> ${c}</p>
     </div>
		 <p class='prod-price'>$${i}</p>
<!--     <div class='quantity-counter-wrapper'>-->
<!--     <button class='decrement-button'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">-->
<!--  <path d="M2.91797 7H11.0846" stroke="#010101" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--</svg></button>-->
<!--     <span class='quantity-cart'>1</span>-->
<!--     <button class='increment-button'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">-->
<!--  <path d="M7 2.91669V11.0834" stroke="#010101" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--  <path d="M2.91797 7H11.0846" stroke="#010101" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--</svg></button>-->
<!--</div>-->
     </div>

     </li>
     `;t.basket_items.insertAdjacentHTML("beforeend",_)}),r}async function S(){for(const e of l)e&&await k(e).then(r=>n+=r)}S().then(e=>{t.total_price.textContent="$"+n.toFixed(2),t.cart_form_authorization.addEventListener("submit",r);function r(o){o.preventDefault(),b(),t.cart_form_authorization.reset(),u(),d(0)}document.querySelector(".increment-button").addEventListener("click",s);function s(o){console.log(o.target.closest(".basket-item-cart"));const c=JSON.parse(localStorage.getItem("cart"));console.log(c)}});t.basket_items.addEventListener("click",w);function w(e){if(e.preventDefault(),e.target.className!=="remove-item")return;const r=t.qty_card.textContent;t.qty_card.textContent=String(r-1);const a=e.target.closest(".basket-item-cart");n=n-Number(a.dataset.price),t.total_price.textContent="$"+n.toFixed(2),t.basket_items.removeChild(a),g(a.dataset.id);let o=(JSON.parse(localStorage.getItem("cart"))||[]).length;t.number_of_products.textContent=String(o)}t.delete_all_btn.addEventListener("click",u);function u(){localStorage.removeItem("cart"),d(0),t.cart.style.display="flex",t.basket_items.style.display="none",t.delete_all_btn.style.display="none",t.order_total.style.display="none",t.cart_form_authorization.style.display="none",t.cart_label_wrap.style.display="none"}const q=document.querySelectorAll("main"),x=document.querySelectorAll("footer"),$=document.querySelectorAll("header");q[1].style.display="none";x[1].style.display="none";$[1].style.display="none";
//# sourceMappingURL=commonHelpers.js.map
