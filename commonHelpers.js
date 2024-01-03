import{o as g,h as m,r as v,g as h,s as S}from"./assets/pagination-b22dcd42.js";import"./assets/vendor-bb89de92.js";const e={cart:document.querySelector(".cart"),basket_items:document.querySelector(".basket-items-cart"),number_of_products:document.querySelector(".number-of-products"),total_price:document.querySelector(".total-price"),delete_all_btn:document.querySelector(".del-all-btn"),order_total:document.querySelector(".order-total"),cart_form_authorization:document.querySelector(".cart-form-authorization"),cart_label_wrap:document.querySelector(".cart-label-wrap"),qty_card:document.querySelector(".qty-card")},k=document.querySelectorAll("main"),q=document.querySelectorAll("footer"),$=document.querySelectorAll("header");k[1].remove();q[1].remove();$[1].remove();const l=JSON.parse(localStorage.getItem("cart"))||[];function i(){e.cart.style.display="flex",e.basket_items.style.display="none",e.delete_all_btn.style.display="none",e.order_total.style.display="none",e.cart_form_authorization.style.display="none",e.cart_label_wrap.style.display="none"}l.length===0?i():e.cart.style.display="none";let C=l.length;e.number_of_products.textContent=String(C);let s=0;async function x(t){let r;return await h(t).then(a=>{const{name:o,category:n,size:d,price:c,img:_,desc:b,_id:y}=a;r=c;const f=`<li class='basket-item-cart' data-id='${y}' data-price='${c}'>
  <button class='remove-item' data-modal-close aria-label='delete button'>
        <svg class='remove-item-image' width='20' height='20'>
          <use href='${S}#icon-close-btn'></use>
        </svg>
      </button>
     <img class='product-img' src='${_}' alt='${b}'>
     <div class='prod-items-wrap'>
     <h2 class='product-name'>${o}</h2>
		 <div class='prod-desc'>

     <p class='prod-value'><span class='product-category-cart'>Category:&nbsp;</span>${n.replace("_"," ").replace("&","").replace("_"," ")}</p>
     <p class='prod-value'><span class='product-category-cart'>Size:&nbsp;</span> ${d}</p>
     </div>
		 <p class='prod-price'>$${c}</p>
     </div>

     </li>
     `;e.basket_items.insertAdjacentHTML("beforeend",f)}),r}async function z(){for(const t of l)t&&await x(t).then(r=>s+=r)}z().then(t=>{e.total_price.textContent="$"+s.toFixed(2),e.cart_form_authorization.addEventListener("submit",r);function r(a){a.preventDefault(),g(),e.cart_form_authorization.reset(),p(),m(0),e.cart_form_authorization.removeEventListener("submit",r)}});e.basket_items.addEventListener("click",u);function u(t){if(t.preventDefault(),(JSON.parse(localStorage.getItem("cart"))||[]).length===1&&i(),t.target.className!=="remove-item")return;const a=e.qty_card.textContent;e.qty_card.textContent=String(a-1);const o=t.target.closest(".basket-item-cart");s=s-Number(o.dataset.price),e.total_price.textContent="$"+s.toFixed(2),t.target.closest(".basket-item-cart").classList.add("slide-out-elliptic-left-bck");function n(){e.basket_items.removeChild(o)}setTimeout(n,500),v(o.dataset.id);let c=(JSON.parse(localStorage.getItem("cart"))||[]).length;e.number_of_products.textContent=String(c)}e.delete_all_btn.addEventListener("click",p);function p(){localStorage.removeItem("cart"),m(0),i(),e.basket_items.removeEventListener("click",u)}
//# sourceMappingURL=commonHelpers.js.map
