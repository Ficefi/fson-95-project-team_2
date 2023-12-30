import{a as h,P as B}from"./vendor-b592f4c5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(a){if(a.ep)return;a.ep=!0;const c=s(a);fetch(a.href,c)}})();function W(e){const t=JSON.parse(localStorage.getItem("cart"))||[],s=Array(t).flat(1/0);s.push(e),t.includes(e)||localStorage.setItem("cart",JSON.stringify(s))}function z(e){const t=JSON.parse(localStorage.getItem("cart")),s=Array(t).flat(1/0),o=s.indexOf(e);s.splice(o,1),localStorage.setItem("cart",JSON.stringify(s))}function O(e){const t=JSON.parse(localStorage.getItem("cart"));return Array(t).flat(1/0).some(o=>o===e)}const G="/fson-95-project-team_2/assets/fruitCart@2x-44c39800.png",R="/fson-95-project-team_2/assets/check-mark-35f2f86f.png",w=document.querySelector(".qty-card"),Y=JSON.parse(localStorage.getItem("cart"))||[];let K=Y.length;function S(e){w.textContent=String(e)}S(K);const n="/fson-95-project-team_2/assets/icons-b3cb9da3.svg",g=document.querySelector(".js-modal"),U=document.querySelector(".modal-content"),m=document.querySelector(".js-modal-subscription"),A=document.querySelector(".subscription-modal-content"),f=document.querySelector(".js-modal-order"),Q=document.querySelector(".subscription-order-content");async function q(e){g.classList.toggle("is-hidden"),await ce(e).then(t=>{const{img:s,name:o,desc:a,category:c,size:i,popularity:l,price:d,is10PercentOff:u}=t,y=a.split("");if(U.innerHTML=`<div class='image-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href="${n}#icon-close-btn"></use>
        </svg>
      </button><div class='discount-icon-wrap'>
    <img src='${s}' alt='${a}' class='modal-img'>
          <svg class="discount-icon-modal is-hidden" width="60" height="60">
          <use href="${n}#icon-discount"></use>
          </div>
    </div>
    <div class='modal-descr-together'>
    <div class='modal-descr-container'>
    <h2 class='modal-name'>${o}</h2>
    <div class='modal-text-wrapper'>
    <p class='modal-text'>Category:<p class='modal-text-descr'>${String(c).replace("_"," ").replace("&","").replace("_"," ")}</p>
    <p class='modal-text'>Size:<p class='modal-text-descr'>${i}</p>
    <p class='modal-text'>Popularity:<p class='modal-text-descr'>${l}</p>
    </div>
    </div>
    <p class='modal-descr'>${a}</p>
    </div>
    <div class='modal-floor-wrap'>
    <p class='modal-price'>$${d}</p>
    <button type='submit' class='modal-cart-btn'>Add to
        <svg class='modal-window-cart-button' width='18' height='18'>
          <use href="${n}#icon-cart"></use>
        </svg></button>
    </div>

  `,console.log(u),u===!0){const r=document.querySelector(".discount-icon-modal");console.log(r),r.classList.remove("is-hidden")}y.length>300?document.querySelector(".modal-descr").classList.add("modal-descr-fixed"):document.querySelector(".modal-descr").classList.remove("modal-descr-fixed"),window.addEventListener("keydown",I);function I(r){r.key==="Escape"&&g.classList.add("is-hidden")}window.onclick=function(r){r.target===g&&g.classList.add("is-hidden")};const M=document.querySelector(".modal-close-btn");M.addEventListener("click",P);function P(r){r.currentTarget===M&&g.classList.add("is-hidden")}const p=document.querySelector(".modal-cart-btn");p.addEventListener("click",N),O(e)&&(p.childNodes[0].data="Remove from",p.style.minWidth="175px");function N(){O(e)?(z(e),p.childNodes[0].data="Add to",p.style.minWidth="130px",S(w.outerText-1)):(S(Number(w.outerText)+Number(1)),W(e),p.childNodes[0].data="Remove from",p.style.minWidth="175px")}g.classList.contains("is-hidden")&&(removeEventListener("click",P),removeEventListener("click",N),removeEventListener("keydown",I))})}async function V(e){m.classList.toggle("is-hidden"),await ne(e).then(a=>{A.innerHTML=`<div class='success-text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-success-header'>Thanks for subscribing for <span class='subscription-success-email'>new</span> products</h2>
      <p class='subscription-success-descr'>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      <img src="${G}" alt='vegetables' class='subscription-success-image'>
  `}).catch(a=>{a.response.status===409?A.innerHTML=`<div class='text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-failed-header'>This <span class='subscription-failed-email'>email address</span> has already been entered</h2>
      <p class='subscription-failed-descr'>You have already subscribed to our new products. Watch for offers at the mailing address.</p>
  `:console.log("SOMETHING WENT WRONG")}),window.addEventListener("keydown",t);function t(a){a.key==="Escape"&&m.classList.add("is-hidden")}window.onclick=function(a){a.target===m&&m.classList.add("is-hidden")};const s=document.querySelector(".modal-close-btn");s.addEventListener("click",o);function o(a){a.currentTarget===s&&m.classList.add("is-hidden")}g.classList.contains("is-hidden")&&(removeEventListener("click",o),removeEventListener("keydown",t))}function $e(){f.classList.toggle("is-hidden"),Q.innerHTML=`
  <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='20' height='20'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
    <img src='${R}' alt='order successful' class='order-success-img'>
    <h2 class='order-success-status'>Order success</h2>
    <p class='order-success-descr'>Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness.</p>
  `,window.addEventListener("keydown",e);function e(o){o.key==="Escape"&&f.classList.add("is-hidden")}window.onclick=function(o){o.target===f&&f.classList.add("is-hidden")};const t=document.querySelector(".modal-close-btn");t.addEventListener("click",s);function s(o){o.currentTarget===t&&f.classList.add("is-hidden")}}const $=document.querySelector(".list-product"),E=document.querySelector(".form-search"),j=document.querySelector(".error"),J=document.querySelector("#selected");j.style.display="none";let b,v;E.addEventListener("submit",X);function X(e){e.preventDefault();const{search:t}=e.currentTarget.elements;b=t.value,localStorage.setItem("SaveFilters",JSON.stringify(b)||null),x()}E.elements.search.value=localStorage.getItem("savetext");x();J.addEventListener("change",Z);function Z(e){e.target.value;const t=e.target.value;v=t,v=t,localStorage.setItem("SaveCategpries",JSON.stringify(v)||null),x()}E.elements.selecteds.value=localStorage.getItem("saveselected");function ee(){oe().then(e=>{const t=e.map(s=>`<option value="${s}">${String(s).replace("_"," ").replace("_"," ")}</option>`).join("");J.insertAdjacentHTML("beforeend",t)}).catch(e=>{console.log(e)})}ee();function x(){C().then(e=>{e.results.length===0&&(j.style.display="flex"),_(e.results)}).catch(e=>{throw new Error(e)})}function _(e){const t=e.map(({name:s,img:o,category:a,price:c,size:i,popularity:l,is10PercentOff:d,_id:u})=>d==!0?`
              <li class="item-product" data-id="${u}">
                <div class="product-container" id="svg-discount">
                  <svg width="60" height="60" class="discount-svg">
                    <use href="${n}#icon-discount"></use>
                  </svg>
                  <img class="img-product" src="${o}" width="400" height="200">
                  <h2 class="caption-product">${s}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${a}</span></p>
                      <p class="feature">Size: <span class=feature-black>${i}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${l}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                            <use href="${n}#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `:`
              <li class="item-product" data-id="${u}">
                <div class="product-container" id="svg-discount">
                  <img class="img-product" src="${o}" width="400" height="200">
                  <h2 class="caption-product">${s}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${String(a).replace("_"," ").replace("_"," ")}</span></p>
                      <p class="feature">Size: <span class=feature-black>${i}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${l}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                            <use href="${n}#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `).join("");$.innerHTML="",$.insertAdjacentHTML("beforeend",t)}function te(e){const t=e.target.closest(".item-product");if(t){const s=t.dataset.id;q(s)}}$.addEventListener("click",te);async function C(e){let t=9;const s=await h.get(`https://food-boutique.b.goit.study/api/products?keyword=${b||""}&category=${v||""}&`,{params:{keywords:b||"",selectedForm:v||"",page:e||1,limit:t}});return localStorage.setItem("page",e),localStorage.getItem("page"),localStorage.setItem("limit",t),localStorage.getItem("limit"),s.data}async function se(){return(await h.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function ae(){return(await h.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function oe(){return(await h.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function ce(e){return(await h.get(`https://food-boutique.b.goit.study/api/products/${e}`)).data}async function ne(e){try{const t="https://food-boutique.b.goit.study/api/subscription",s={email:e};return(await h.post(t,s)).data}catch(t){throw console.log("Something went wrong: "+t),t}}const k=document.querySelector(".footer-form-authorization");k.addEventListener("submit",ie);function ie(e){e.preventDefault(),V(k[0].value),k.reset()}const H=document.querySelector(".discount_container"),re=2;function le(e,t,s=0){const o=s+re;return e.slice(s,o).map(({img:i,price:l,_id:d,desc:u},y)=>`<li class="card_item" data-id="${d}">
      <div class="discount-icon-container">
        <svg class="discount-icon" width="60" height="60">
          <use href="${n}#icon-discount"></use>
        </svg>
      </div>
      <div class="card-content">
        <img src="${i}" alt="${u}" class="card-img" width="105" height="105">
      </div>
      <div class="title-box">
        <h3 class="card-title">${t[y]}</h3>
        <p class="card-price">$${l}</p>
      </div>
      <button class="basket" data-id="${d}">
        <svg class="basket-icon" width="18" height="18">
          <use href="${n}#icon-cart"></use>
        </svg>
      </button>
    </li>`).join("")}async function de(){const e=await ae(),t=e.reduce((o,a)=>(a.name.length>10?o.push(a.name.slice(0,10)+"..."):o.push(a.name),o),[]);H.innerHTML=le(e,t),H.addEventListener("click",o=>{const a=o.target.closest(".card_item");if(a){const c=a.dataset.id;q(c)}}),document.querySelectorAll(".basket").forEach(o=>{o.addEventListener("click",ue);const a=o.dataset.id;he(a)&&(o.setAttribute("disabled","true"),o.innerHTML=`
        <svg class="basket-icon-check" width="18" height="18">
          <use href="${n}#icon-check"></use>
        </svg>
      `)})}de();function ue(e){const t=e.currentTarget,s=t.dataset.id;t.hasAttribute("disabled")?(ge(s),t.removeAttribute("disabled"),t.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="${n}#icon-cart"></use>
      </svg>
    `):(pe(s),t.setAttribute("disabled",!0),t.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="${n}#icon-check"></use>
      </svg>
    `)}function pe(e){const t=JSON.parse(localStorage.getItem("cart"))||[];t.includes(e)||(t.push(e),localStorage.setItem("cart",JSON.stringify(t)))}function ge(e){const t=JSON.parse(localStorage.getItem("cart"))||[],s=t.indexOf(e);s!==-1&&(t.splice(s,1),localStorage.setItem("cart",JSON.stringify(t)))}function he(e){try{return(JSON.parse(localStorage.getItem("cart"))||[]).includes(e)}catch(t){return console.error("Помилка парсингу JSON:",t),!1}}const D=document.querySelector(".product-card");function me(){se().then(e=>{fe(e)}).catch(e=>{throw new Error(e)})}function fe(e){const t=document.createElement("div");t.classList.add("product-list-container");const s=e.map(({category:o,img:a,name:c,popularity:i,size:l,_id:d})=>`<li class="product-content" data-id=${d}>
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
                    <span class="span-category">Size:</span>${l}
                </p>
                <p class="product-popularity">
                    <span class="span-category">Popularity:</span>${i}
                </p>
            </div>
        </div>
        <div class="svg-svg">
            <svg class="svg-item" width="12" height="12">
                <use href="${n}#icon-cart"></use>
            </svg>
        </div>
    </li>`).join("");t.innerHTML=s,D.appendChild(t)}function ve(e){const t=e.target.closest(".product-content");if(t){const s=t.dataset.id;q(s)}}D.addEventListener("click",ve);me();document.querySelector(".pagination");let L=0;const be=window.innerWidth;be<=767?L=2:L=4;let T=1;function ye(e,t){const s={totalItems:e.totalPages*10,visiblePages:t,template:{page:'<a href="#" id="page-btn" class="tui-page-btn">{{page}}</a>',currentPage:'<strong id="is-selected" class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" id="arrow-btn" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span id="arrow-btn" class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" id="page-btn" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};new B("pagination",s).on("afterMove",function(a){T=a.page,C(T).then(c=>{_(c.results)}).catch(c=>{throw new Error(c)})})}C(T).then(e=>{ye(e,L)}).catch(e=>{throw new Error(e)});function we(e){const t=e.currentTarget;console.log(t);const s=t.dataset.id;console.log(s),t.hasAttribute("disabled")?(removeFromStorageCart(s),console.log(removeFromStorageCart(s)),t.removeAttribute("disabled"),t.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="../img/icons.svg#icon-cart"></use>
      </svg>
    `):(addToStorageCart(s),console.log(addToStorageCart(s)),t.setAttribute("disabled",!0),t.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="../img/icons.svg#icon-check"></use>
      </svg>
    `)}const F=document.querySelectorAll(".svg-container");console.log(F);F.forEach(e=>{e.addEventListener("click",we);const t=e.dataset.id;isExistInCart(t)&&(e.setAttribute("disabled",!0),e.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="../img/icons.svg#icon-check"></use>
      </svg>
    `)});export{ce as g,S as h,$e as o,z as r};
//# sourceMappingURL=pagination-5ee55f20.js.map
