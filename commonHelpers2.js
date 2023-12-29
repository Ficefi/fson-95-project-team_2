/* empty css                      */import{a as m,P as z}from"./assets/vendor-b592f4c5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(a){if(a.ep)return;a.ep=!0;const c=s(a);fetch(a.href,c)}})();function B(e){const t=JSON.parse(localStorage.getItem("cart"))||[],s=Array(t).flat(1/0);s.push(e),t.includes(e)||localStorage.setItem("cart",JSON.stringify(s))}function A(e){const t=JSON.parse(localStorage.getItem("cart")),s=Array(t).flat(1/0),o=s.indexOf(e);s.splice(o,1),localStorage.setItem("cart",JSON.stringify(s))}function M(e){const t=JSON.parse(localStorage.getItem("cart"));return Array(t).flat(1/0).some(o=>o===e)}const R="/fson-95-project-team_2/assets/fruitCart@2x-44c39800.png",p=document.querySelector(".js-modal"),G=document.querySelector(".modal-content"),f=document.querySelector(".js-modal-subscription"),T=document.querySelector(".subscription-modal-content");document.querySelector(".js-modal-order");document.querySelector(".subscription-order-content");async function J(e){p.classList.toggle("is-hidden"),await F(e).then(t=>{const{img:s,name:o,desc:a,category:c,size:n,popularity:i,price:r}=t,l=a.split("");G.innerHTML=`<div class='image-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
    <img src='${s}' alt='${a}' class='modal-img'>
    </div>
    <div class='modal-descr-together'>
    <div class='modal-descr-container'>
    <h2 class='modal-name'>${o}</h2>
    <div class='modal-text-wrapper'>
    <p class='modal-text'>Category:<p class='modal-text-descr'>${String(c).replace("_"," ").replace("&","").replace("_"," ")}</p>
    <p class='modal-text'>Size:<p class='modal-text-descr'>${n}</p>
    <p class='modal-text'>Popularity:<p class='modal-text-descr'>${i}</p>
    </div>
    </div>
    <p class='modal-descr'>${a}</p>
    </div>
    <div class='modal-floor-wrap'>
    <p class='modal-price'>$${r}</p>
    <button type='submit' class='modal-cart-btn'>Add to
        <svg class='modal-window-cart-button' width='18' height='18'>
          <use href='./img/icons.svg#icon-cart'></use>
        </svg></button>
    </div>

  `,l.length>300?document.querySelector(".modal-descr").classList.add("modal-descr-fixed"):document.querySelector(".modal-descr").classList.remove("modal-descr-fixed"),window.addEventListener("keydown",g);function g(u){u.key==="Escape"&&p.classList.add("is-hidden")}window.onclick=function(u){u.target===p&&p.classList.add("is-hidden")};const E=document.querySelector(".modal-close-btn");E.addEventListener("click",P);function P(u){u.currentTarget===E&&p.classList.add("is-hidden")}const d=document.querySelector(".modal-cart-btn");d.addEventListener("click",C),M(e)&&(d.childNodes[0].data="Remove from",d.style.minWidth="175px");function C(){M(e)?(A(e),d.childNodes[0].data="Add to",d.style.minWidth="130px"):(B(e),d.childNodes[0].data="Remove from",d.style.minWidth="175px")}p.classList.contains("is-hidden")&&(removeEventListener("click",P),removeEventListener("click",C),removeEventListener("keydown",g))})}async function K(e){f.classList.toggle("is-hidden"),await te(e).then(a=>{T.innerHTML=`<div class='success-text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-success-header'>Thanks for subscribing for <span class='subscription-success-email'>new</span> products</h2>
      <p class='subscription-success-descr'>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      <img src="${R}" alt='vegetables' class='subscription-success-image'>
  `}).catch(a=>{a.response.status===409?T.innerHTML=`<div class='text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-failed-header'>This <span class='subscription-failed-email'>email address</span> has already been entered</h2>
      <p class='subscription-failed-descr'>You have already subscribed to our new products. Watch for offers at the mailing address.</p>
  `:console.log("SOMETHING WENT WRONG")}),window.addEventListener("keydown",t);function t(a){a.key==="Escape"&&f.classList.add("is-hidden")}window.onclick=function(a){a.target===f&&f.classList.add("is-hidden")};const s=document.querySelector(".modal-close-btn");s.addEventListener("click",o);function o(a){a.currentTarget===s&&f.classList.add("is-hidden")}p.classList.contains("is-hidden")&&(removeEventListener("click",o),removeEventListener("keydown",t))}const y="/fson-95-project-team_2/assets/icons-b3cb9da3.svg",w=document.querySelector(".list-product"),L=document.querySelector(".form-search"),H=document.querySelector(".error"),j=document.querySelector("#selected");H.style.display="none";let b,v;L.addEventListener("submit",U);function U(e){e.preventDefault();const{search:t}=e.currentTarget.elements;b=t.value,localStorage.setItem("SaveFilters",JSON.stringify(b)||null),q()}L.elements.search.value=localStorage.getItem("savetext");q();j.addEventListener("change",Y);function Y(e){e.target.value;const t=e.target.value;v=t,v=t,localStorage.setItem("SaveCategpries",JSON.stringify(v)||null),q()}L.elements.selecteds.value=localStorage.getItem("saveselected");function Q(){ee().then(e=>{const t=e.map(s=>`<option value="${s}">${String(s).replace("_"," ").replace("_"," ")}</option>`).join("");j.insertAdjacentHTML("beforeend",t)}).catch(e=>{console.log(e)})}Q();function q(){x().then(e=>{e.results.length===0&&(H.style.display="flex"),D(e.results)}).catch(e=>{throw new Error(e)})}function D(e){const t=e.map(({name:s,img:o,category:a,price:c,size:n,popularity:i,is10PercentOff:r,_id:l})=>r==!0?`
              <li class="item-product" data-id="${l}">
                <div class="product-container" id="svg-discount">
                  <svg width="60" height="60" class="discount-svg">
                    <use href="${y}#icon-discount"></use>
                  </svg>
                  <img class="img-product" src="${o}" width="400" height="200">
                  <h2 class="caption-product">${s}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${a}</span></p>
                      <p class="feature">Size: <span class=feature-black>${n}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${i}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                            <use href="${y}#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `:`
              <li class="item-product" data-id="${l}">
                <div class="product-container" id="svg-discount">
                  <img class="img-product" src="${o}" width="400" height="200">
                  <h2 class="caption-product">${s}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${String(a).replace("_"," ").replace("_"," ")}</span></p>
                      <p class="feature">Size: <span class=feature-black>${n}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${i}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                            <use href="${y}#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `).join("");w.innerHTML="",w.insertAdjacentHTML("beforeend",t)}function V(e){const t=e.target.closest(".item-product");if(t){const s=t.dataset.id;J(s)}}w.addEventListener("click",V);async function x(e){let t=9;const s=await m.get(`https://food-boutique.b.goit.study/api/products?keyword=${b||""}&category=${v||""}&`,{params:{keywords:b||"",selectedForm:v||"",page:e||1,limit:t}});return localStorage.setItem("page",e),localStorage.getItem("page"),localStorage.setItem("limit",t),localStorage.getItem("limit"),console.log(s),s.data}async function X(){return(await m.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function Z(){return(await m.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function ee(){return(await m.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function F(e){return(await m.get(`https://food-boutique.b.goit.study/api/products/${e}`)).data}async function te(e){try{const t="https://food-boutique.b.goit.study/api/subscription",s={email:e};return(await m.post(t,s)).data}catch(t){throw console.log("Something went wrong: "+t),t}}const S=document.querySelector(".footer-form-authorization");S.addEventListener("submit",se);function se(e){e.preventDefault(),K(S[0].value),S.reset()}const N=document.querySelector(".card"),ae=2;function oe(e,t,s=0){const o=s+ae;return e.slice(s,o).map(({img:n,price:i,_id:r,desc:l},g)=>`<li class="card_item" data-id="${r}">
      <div class="discount-icon-container">
        <svg class="discount-icon" width="60" height="60">
          <use href="../img/icons.svg#icon-discount"></use>
        </svg>
      </div>
      <div class="card-content">
        <img src="${n}" alt="${l}" class="card-img" width="105" height="105">
      </div>
      <div class="title-box">
        <h3 class="card-title">${t[g]}</h3>
        <p class="card-price">$${i}</p>
      </div>
      <button class="basket" data-id="${r}">
        <svg class="basket-icon" width="18" height="18">
          <use href="../img/icons.svg#icon-cart"></use>
        </svg>
      </button>
    </li>`).join("")}async function ce(){const e=await Z();console.log(e);const t=e.reduce((o,a)=>(a.name.length>10?o.push(a.name.slice(0,10)+"..."):o.push(a.name),o),[]);N.innerHTML=oe(e,t),N.addEventListener("click",o=>{const a=o.target.closest(".card_item");if(a){const c=a.dataset.id;J(c)}});const s=document.querySelectorAll(".basket");console.log(s),s.forEach(o=>{o.addEventListener("click",ne);const a=o.dataset.id;ie(a)&&(o.setAttribute("disabled",!0),o.innerHTML=`
        <svg class="basket-icon-check" width="18" height="18">
          <use href="../img/icons.svg#icon-check"></use>
        </svg>
      `)})}ce();function ne(e){const t=e.currentTarget;console.log(t);const s=t.dataset.id;console.log(s),t.hasAttribute("disabled")?(_(s),console.log(_(s)),t.removeAttribute("disabled"),t.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="../img/icons.svg#icon-cart"></use>
      </svg>
    `):(O(s),console.log(O(s)),t.setAttribute("disabled",!0),t.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="../img/icons.svg#icon-check"></use>
      </svg>
    `)}function O(e){const t=JSON.parse(localStorage.getItem("cart"))||[];console.log(t),t.includes(e)||(t.push(e),localStorage.setItem("cart",JSON.stringify(t)))}function _(e){const t=JSON.parse(localStorage.getItem("cart"))||[];console.log(t);const s=t.indexOf(e);s!==-1&&(t.splice(s,1),localStorage.setItem("cart",JSON.stringify(t)))}function ie(e){try{const t=JSON.parse(localStorage.getItem("cart"))||[];return console.log(t),t.includes(e)}catch(t){return console.error("Помилка парсингу JSON:",t),!1}}const re=document.querySelector(".product-card");function le(){X().then(e=>{de(e)}).catch(e=>{throw new Error(e)})}function de(e){const t=document.createElement("div");t.classList.add("product-list-container");const s=e.map(({category:o,img:a,name:c,popularity:n,size:i})=>`<li class="product-content">
        <div class="background-img">
            <img src="${a}" alt="${c}" class="product-image" />
        </div>
        <div class="product-txt-bar">
            <h3 class="product-title">${c}</h3>
            <p class="product-category">
                <span class="span-category">Category:</span>${String(o).replace("_"," ")}
            </p>
            <div class="product-txt-two">
                <p class="product-size">
                    <span class="span-category">Size:</span>${i}
                </p>
                <p class="product-popularity">
                    <span class="span-category">Popularity:</span>${n}
                </p>
            </div>
        </div>
        <div class="svg-svg">
            <svg class="svg-item" width="12" height="12">
                <use href="./img/icons.svg#icon-cart"></use>
            </svg>
        </div>
    </li>`).join("");t.innerHTML=s,re.appendChild(t)}le();const h={cart:document.querySelector(".cart"),basket_items:document.querySelector(".basket-items"),number_of_products:document.querySelector(".number-of-products"),total_price:document.querySelector(".total-price")},I=JSON.parse(localStorage.getItem("cart"))||[];I.length>0&&(h.cart.style.display="none");let ue=I.length;h.number_of_products.textContent=String(ue);let W=0;async function pe(e){let t;return await F(e).then(s=>{const{name:o,category:a,size:c,price:n,img:i,desc:r,_id:l}=s;t=n;const g=`<li class='basket-item' data-id="${l}">
  <button class='remove-item' data-modal-close aria-label='close modal button'>
        <svg class='remove-item-image' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
     <img class='product-img' src="${i}" alt="${r}">
     <div class='prod-items-wrap'>
     <h2 class='product-name'>${o}</h2>
		 <div class='prod-desc'>
     <p class='prod-value'><span class='product-category'>Category:&nbsp;</span>${a.replace("_"," ")}</p>
     <p class='prod-value'><span class='product-category'>Size:&nbsp;</span> ${c}</p>
     </div>
		 <p class='prod-price'>$${n}</p>
     </div>
     </li> <hr>
     `;h.basket_items.insertAdjacentHTML("beforeend",g)}),t}async function ge(){for(const e of I)e&&await pe(e).then(t=>W+=t)}h.total_price.textContent="$"+W.toFixed(2);ge();h.basket_items.addEventListener("click",me);function me(e){if(e.preventDefault(),e.target.className!=="remove-item")return;const t=e.target.closest(".basket-item");h.basket_items.removeChild(t),A(t.dataset.id)}document.querySelector(".pagination");let $=0;const he=window.innerWidth;he<=767?$=2:$=4;let k=1;function fe(e,t){const s={totalItems:e.totalPages*10,visiblePages:t,template:{page:'<a href="#" id="page-btn" class="tui-page-btn">{{page}}</a>',currentPage:'<strong id="is-selected" class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" id="arrow-btn" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span id="arrow-btn" class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" id="page-btn" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};new z("pagination",s).on("afterMove",function(a){k=a.page,x(k).then(c=>{D(c.results)}).catch(c=>{throw new Error(c)})})}x(k).then(e=>{fe(e,$)}).catch(e=>{throw new Error(e)});
//# sourceMappingURL=commonHelpers2.js.map
