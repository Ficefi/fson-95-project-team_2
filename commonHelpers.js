import{o as f,h as i,r as g,g as h}from"./assets/pagination-5ee55f20.js";import"./assets/vendor-b592f4c5.js";const t={cart:document.querySelector(".cart"),basket_items:document.querySelector(".basket-items"),number_of_products:document.querySelector(".number-of-products"),total_price:document.querySelector(".total-price"),delete_all_btn:document.querySelector(".del-all-btn"),order_total:document.querySelector(".order-total"),cart_form_authorization:document.querySelector(".cart-form-authorization"),cart_label_wrap:document.querySelector(".cart-label-wrap"),qty_card:document.querySelector(".qty-card")},l=JSON.parse(localStorage.getItem("cart"))||[];l.length>0?t.cart.style.display="none":l.length===0&&(t.cart.style.display="flex",t.basket_items.style.display="none",t.delete_all_btn.style.display="none",t.order_total.style.display="none",t.cart_form_authorization.style.display="none",t.cart_label_wrap.style.display="none");let S=l.length;t.number_of_products.textContent=String(S);let o=0;async function v(e){let a;return await h(e).then(r=>{const{name:c,category:n,size:u,price:s,img:p,desc:y,_id:_}=r;a=s;const b=`<li class='basket-item-cart' data-id="${_}" data-price="${s}">
  <button class='remove-item' data-modal-close aria-label='delete button'>
        <svg class='remove-item-image' width='20' height='20'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
     <img class='product-img' src="${p}" alt="${y}">
     <div class='prod-items-wrap'>
     <h2 class='product-name'>${c}</h2>
		 <div class='prod-desc'>

     <p class='prod-value'><span class='product-category-cart'>Category:&nbsp;</span>${n.replace("_"," ")}</p>
     <p class='prod-value'><span class='product-category-cart'>Size:&nbsp;</span> ${u}</p>
     </div>
		 <p class='prod-price'>$${s}</p>

     </div>

     </li>
     `;t.basket_items.insertAdjacentHTML("beforeend",b)}),a}async function q(){for(const e of l)e&&await v(e).then(a=>o+=a)}q().then(e=>{t.total_price.textContent="$"+o.toFixed(2),t.cart_form_authorization.addEventListener("submit",a);function a(r){r.preventDefault(),f(),t.cart_form_authorization.reset(),d(),i(0)}});t.basket_items.addEventListener("click",k);function k(e){if(e.preventDefault(),e.target.className!=="remove-item")return;const a=t.qty_card.textContent;t.qty_card.textContent=String(a-1);const r=e.target.closest(".basket-item");o=o-Number(r.dataset.price),t.total_price.textContent="$"+o.toFixed(2),t.basket_items.removeChild(r),g(r.dataset.id);let n=(JSON.parse(localStorage.getItem("cart"))||[]).length;t.number_of_products.textContent=String(n)}t.delete_all_btn.addEventListener("click",d);function d(){localStorage.removeItem("cart"),i(0),t.cart.style.display="flex",t.basket_items.style.display="none",t.delete_all_btn.style.display="none",t.order_total.style.display="none",t.cart_form_authorization.style.display="none",t.cart_label_wrap.style.display="none"}const m=document.querySelectorAll("main"),$=document.querySelectorAll("footer"),x=document.querySelectorAll("header");m[1].style.display="none";$[1].style.display="none";x[1].style.display="none";console.log(m[1]);
//# sourceMappingURL=commonHelpers.js.map
