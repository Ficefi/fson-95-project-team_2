import{o as b,r as f,g}from"./assets/pagination-e2fa912a.js";import"./assets/vendor-b592f4c5.js";const e={cart:document.querySelector(".cart"),basket_items:document.querySelector(".basket-items"),number_of_products:document.querySelector(".number-of-products"),total_price:document.querySelector(".total-price"),delete_all_btn:document.querySelector(".del-all-btn"),order_total:document.querySelector(".order-total"),cart_form_authorization:document.querySelector(".cart-form-authorization"),cart_label_wrap:document.querySelector(".cart-label-wrap"),qty_card:document.querySelector(".qty-card")},l=JSON.parse(localStorage.getItem("cart"))||[];l.length>0?e.cart.style.display="none":l.length===0&&(e.cart.style.display="flex",e.basket_items.style.display="none",e.delete_all_btn.style.display="none",e.order_total.style.display="none",e.cart_form_authorization.style.display="none",e.cart_label_wrap.style.display="none");let S=l.length;e.number_of_products.textContent=String(S);let r=0;async function h(t){let a;return await g(t).then(o=>{const{name:c,category:n,size:m,price:s,img:u,desc:p,_id:y}=o;a=s;const _=`<li class='basket-item' data-id="${y}" data-price="${s}">
  <button class='remove-item' data-modal-close aria-label='close modal button'>
        <svg class='remove-item-image' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
     <img class='product-img' src="${u}" alt="${p}">
     <div class='prod-items-wrap'>
     <h2 class='product-name'>${c}</h2>
		 <div class='prod-desc'>

     <p class='prod-value'><span class='product-category'>Category:&nbsp;</span>${n.replace("_"," ")}</p>
     <p class='prod-value'><span class='product-category'>Size:&nbsp;</span> ${m}</p>
     </div>
		 <p class='prod-price'>$${s}</p>

     </div>

     </li>
     `;e.basket_items.insertAdjacentHTML("beforeend",_)}),a}async function v(){for(const t of l)t&&await h(t).then(a=>r+=a)}v().then(t=>{e.total_price.textContent="$"+r.toFixed(2),e.cart_form_authorization.addEventListener("submit",a);function a(o){o.preventDefault(),b(),e.cart_form_authorization.reset(),i()}});e.basket_items.addEventListener("click",q);function q(t){if(t.preventDefault(),t.target.className!=="remove-item")return;const a=e.qty_card.textContent;e.qty_card.textContent=String(a-1);const o=t.target.closest(".basket-item");r=r-Number(o.dataset.price),e.total_price.textContent="$"+r.toFixed(2),e.basket_items.removeChild(o),f(o.dataset.id);let n=(JSON.parse(localStorage.getItem("cart"))||[]).length;e.number_of_products.textContent=String(n)}e.delete_all_btn.addEventListener("click",i);function i(){localStorage.removeItem("cart"),e.cart.style.display="flex",e.basket_items.style.display="none",e.delete_all_btn.style.display="none",e.order_total.style.display="none",e.cart_form_authorization.style.display="none",e.cart_label_wrap.style.display="none"}const d=document.querySelectorAll("main"),k=document.querySelectorAll("footer"),$=document.querySelectorAll("header");d[1].style.display="none";k[1].style.display="none";$[1].style.display="none";console.log(d[1]);
//# sourceMappingURL=commonHelpers.js.map
