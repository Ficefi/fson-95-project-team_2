import{a as h,P as F}from"./vendor-b592f4c5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(a){if(a.ep)return;a.ep=!0;const c=s(a);fetch(a.href,c)}})();function B(e){const t=JSON.parse(localStorage.getItem("cart"))||[],s=Array(t).flat(1/0);s.push(e),t.includes(e)||localStorage.setItem("cart",JSON.stringify(s))}function W(e){const t=JSON.parse(localStorage.getItem("cart")),s=Array(t).flat(1/0),o=s.indexOf(e);s.splice(o,1),localStorage.setItem("cart",JSON.stringify(s))}function N(e){const t=JSON.parse(localStorage.getItem("cart"));return Array(t).flat(1/0).some(o=>o===e)}const z="/fson-95-project-team_2/assets/fruitCart@2x-44c39800.png",G="/fson-95-project-team_2/assets/check-mark-35f2f86f.png",w=document.querySelector(".qty-card"),R=JSON.parse(localStorage.getItem("cart"))||[];let Y=R.length;function S(e){w.textContent=String(e)}S(Y);const p=document.querySelector(".js-modal"),K=document.querySelector(".modal-content"),m=document.querySelector(".js-modal-subscription"),O=document.querySelector(".subscription-modal-content"),f=document.querySelector(".js-modal-order"),U=document.querySelector(".subscription-order-content");async function E(e){p.classList.toggle("is-hidden"),await oe(e).then(t=>{const{img:s,name:o,desc:a,category:c,size:n,popularity:r,price:l}=t,g=a.split("");K.innerHTML=`<div class='image-wrap'>
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
    <p class='modal-text'>Popularity:<p class='modal-text-descr'>${r}</p>
    </div>
    </div>
    <p class='modal-descr'>${a}</p>
    </div>
    <div class='modal-floor-wrap'>
    <p class='modal-price'>$${l}</p>
    <button type='submit' class='modal-cart-btn'>Add to
        <svg class='modal-window-cart-button' width='18' height='18'>
          <use href='./img/icons.svg#icon-cart'></use>
        </svg></button>
    </div>

  `,g.length>300?document.querySelector(".modal-descr").classList.add("modal-descr-fixed"):document.querySelector(".modal-descr").classList.remove("modal-descr-fixed"),window.addEventListener("keydown",b);function b(u){u.key==="Escape"&&p.classList.add("is-hidden")}window.onclick=function(u){u.target===p&&p.classList.add("is-hidden")};const I=document.querySelector(".modal-close-btn");I.addEventListener("click",M);function M(u){u.currentTarget===I&&p.classList.add("is-hidden")}const d=document.querySelector(".modal-cart-btn");d.addEventListener("click",P),N(e)&&(d.childNodes[0].data="Remove from",d.style.minWidth="175px");function P(){N(e)?(W(e),d.childNodes[0].data="Add to",d.style.minWidth="130px",S(w.outerText-1)):(S(Number(w.outerText)+Number(1)),B(e),d.childNodes[0].data="Remove from",d.style.minWidth="175px")}p.classList.contains("is-hidden")&&(removeEventListener("click",M),removeEventListener("click",P),removeEventListener("keydown",b))})}async function Q(e){m.classList.toggle("is-hidden"),await ce(e).then(a=>{O.innerHTML=`<div class='success-text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-success-header'>Thanks for subscribing for <span class='subscription-success-email'>new</span> products</h2>
      <p class='subscription-success-descr'>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      <img src="${z}" alt='vegetables' class='subscription-success-image'>
  `}).catch(a=>{a.response.status===409?O.innerHTML=`<div class='text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-failed-header'>This <span class='subscription-failed-email'>email address</span> has already been entered</h2>
      <p class='subscription-failed-descr'>You have already subscribed to our new products. Watch for offers at the mailing address.</p>
  `:console.log("SOMETHING WENT WRONG")}),window.addEventListener("keydown",t);function t(a){a.key==="Escape"&&m.classList.add("is-hidden")}window.onclick=function(a){a.target===m&&m.classList.add("is-hidden")};const s=document.querySelector(".modal-close-btn");s.addEventListener("click",o);function o(a){a.currentTarget===s&&m.classList.add("is-hidden")}p.classList.contains("is-hidden")&&(removeEventListener("click",o),removeEventListener("keydown",t))}function Se(){f.classList.toggle("is-hidden"),U.innerHTML=`
  <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='20' height='20'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
    <img src='${G}' alt='order successful' class='order-success-img'>
    <h2 class='order-success-status'>Order success</h2>
    <p class='order-success-descr'>Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness.</p>
  `,window.addEventListener("keydown",e);function e(o){o.key==="Escape"&&f.classList.add("is-hidden")}window.onclick=function(o){o.target===f&&f.classList.add("is-hidden")};const t=document.querySelector(".modal-close-btn");t.addEventListener("click",s);function s(o){o.currentTarget===t&&f.classList.add("is-hidden")}}const i="/fson-95-project-team_2/assets/icons-b3cb9da3.svg",$=document.querySelector(".list-product"),q=document.querySelector(".form-search"),H=document.querySelector(".error"),j=document.querySelector("#selected");H.style.display="none";let y,v;q.addEventListener("submit",V);function V(e){e.preventDefault();const{search:t}=e.currentTarget.elements;y=t.value,localStorage.setItem("SaveFilters",JSON.stringify(y)||null),x()}q.elements.search.value=localStorage.getItem("savetext");x();j.addEventListener("change",X);function X(e){e.target.value;const t=e.target.value;v=t,v=t,localStorage.setItem("SaveCategpries",JSON.stringify(v)||null),x()}q.elements.selecteds.value=localStorage.getItem("saveselected");function Z(){ae().then(e=>{const t=e.map(s=>`<option value="${s}">${String(s).replace("_"," ").replace("_"," ")}</option>`).join("");j.insertAdjacentHTML("beforeend",t)}).catch(e=>{console.log(e)})}Z();function x(){C().then(e=>{e.results.length===0&&(H.style.display="flex"),J(e.results)}).catch(e=>{throw new Error(e)})}function J(e){const t=e.map(({name:s,img:o,category:a,price:c,size:n,popularity:r,is10PercentOff:l,_id:g})=>l==!0?`
              <li class="item-product" data-id="${g}">
                <div class="product-container" id="svg-discount">
                  <svg width="60" height="60" class="discount-svg">
                    <use href="${i}#icon-discount"></use>
                  </svg>
                  <img class="img-product" src="${o}" width="400" height="200">
                  <h2 class="caption-product">${s}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${a}</span></p>
                      <p class="feature">Size: <span class=feature-black>${n}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${r}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                            <use href="${i}#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `:`
              <li class="item-product" data-id="${g}">
                <div class="product-container" id="svg-discount">
                  <img class="img-product" src="${o}" width="400" height="200">
                  <h2 class="caption-product">${s}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${String(a).replace("_"," ").replace("_"," ")}</span></p>
                      <p class="feature">Size: <span class=feature-black>${n}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${r}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                            <use href="${i}#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `).join("");$.innerHTML="",$.insertAdjacentHTML("beforeend",t)}function ee(e){const t=e.target.closest(".item-product");if(t){const s=t.dataset.id;E(s)}}$.addEventListener("click",ee);async function C(e){let t=9;const s=await h.get(`https://food-boutique.b.goit.study/api/products?keyword=${y||""}&category=${v||""}&`,{params:{keywords:y||"",selectedForm:v||"",page:e||1,limit:t}});return localStorage.setItem("page",e),localStorage.getItem("page"),localStorage.setItem("limit",t),localStorage.getItem("limit"),s.data}async function te(){return(await h.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function se(){return(await h.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function ae(){return(await h.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function oe(e){return(await h.get(`https://food-boutique.b.goit.study/api/products/${e}`)).data}async function ce(e){try{const t="https://food-boutique.b.goit.study/api/subscription",s={email:e};return(await h.post(t,s)).data}catch(t){throw console.log("Something went wrong: "+t),t}}const k=document.querySelector(".footer-form-authorization");k.addEventListener("submit",ne);function ne(e){e.preventDefault(),Q(k[0].value),k.reset()}const A=document.querySelector(".card"),ie=2;function re(e,t,s=0){const o=s+ie;return e.slice(s,o).map(({img:n,price:r,_id:l,desc:g},b)=>`<li class="card_item" data-id="${l}">
      <div class="discount-icon-container">
        <svg class="discount-icon" width="60" height="60">
          <use href="${i}#icon-discount"></use>
        </svg>
      </div>
      <div class="card-content">
        <img src="${n}" alt="${g}" class="card-img" width="105" height="105">
      </div>
      <div class="title-box">
        <h3 class="card-title">${t[b]}</h3>
        <p class="card-price">$${r}</p>
      </div>
      <button class="basket" data-id="${l}">
        <svg class="basket-icon" width="18" height="18">
          <use href="${i}#icon-cart"></use>
        </svg>
      </button>
    </li>`).join("")}async function le(){const e=await se(),t=e.reduce((o,a)=>(a.name.length>10?o.push(a.name.slice(0,10)+"..."):o.push(a.name),o),[]);A.innerHTML=re(e,t),A.addEventListener("click",o=>{const a=o.target.closest(".card_item");if(a){const c=a.dataset.id;E(c)}}),document.querySelectorAll(".basket").forEach(o=>{o.addEventListener("click",de);const a=o.dataset.id;ge(a)&&(o.setAttribute("disabled",!0),o.innerHTML=`
        <svg class="basket-icon-check" width="18" height="18">
          <use href="${i}#icon-check"></use>
        </svg>
      `)})}le();function de(e){const t=e.currentTarget,s=t.dataset.id;t.hasAttribute("disabled")?(pe(s),t.removeAttribute("disabled"),t.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="${i}#icon-cart"></use>
      </svg>
    `):(ue(s),t.setAttribute("disabled",!0),t.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="${i}#icon-check"></use>
      </svg>
    `)}function ue(e){const t=JSON.parse(localStorage.getItem("cart"))||[];t.includes(e)||(t.push(e),localStorage.setItem("cart",JSON.stringify(t)))}function pe(e){const t=JSON.parse(localStorage.getItem("cart"))||[],s=t.indexOf(e);s!==-1&&(t.splice(s,1),localStorage.setItem("cart",JSON.stringify(t)))}function ge(e){try{return(JSON.parse(localStorage.getItem("cart"))||[]).includes(e)}catch(t){return console.error("Помилка парсингу JSON:",t),!1}}const _=document.querySelector(".product-card");function he(){te().then(e=>{me(e)}).catch(e=>{throw new Error(e)})}function me(e){const t=document.createElement("div");t.classList.add("product-list-container");const s=e.map(({category:o,img:a,name:c,popularity:n,size:r,_id:l})=>`<li class="product-content" data-id=${l}>
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
                    <span class="span-category">Size:</span>${r}
                </p>
                <p class="product-popularity">
                    <span class="span-category">Popularity:</span>${n}
                </p>
            </div>
        </div>
        <div class="svg-svg">
            <svg class="svg-item" width="12" height="12">
                <use href="${i}#icon-cart"></use>
            </svg>
        </div>
    </li>`).join("");t.innerHTML=s,_.appendChild(t)}function fe(e){const t=e.target.closest(".product-content");if(t){const s=t.dataset.id;E(s)}}_.addEventListener("click",fe);he();document.querySelector(".pagination");let L=0;const ve=window.innerWidth;ve<=767?L=2:L=4;let T=1;function be(e,t){const s={totalItems:e.totalPages*10,visiblePages:t,template:{page:'<a href="#" id="page-btn" class="tui-page-btn">{{page}}</a>',currentPage:'<strong id="is-selected" class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" id="arrow-btn" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span id="arrow-btn" class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" id="page-btn" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};new F("pagination",s).on("afterMove",function(a){T=a.page,C(T).then(c=>{J(c.results)}).catch(c=>{throw new Error(c)})})}C(T).then(e=>{be(e,L)}).catch(e=>{throw new Error(e)});function ye(e){const t=e.currentTarget;console.log(t);const s=t.dataset.id;console.log(s),t.hasAttribute("disabled")?(removeFromStorageCart(s),console.log(removeFromStorageCart(s)),t.removeAttribute("disabled"),t.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="../img/icons.svg#icon-cart"></use>
      </svg>
    `):(addToStorageCart(s),console.log(addToStorageCart(s)),t.setAttribute("disabled",!0),t.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="../img/icons.svg#icon-check"></use>
      </svg>
    `)}const D=document.querySelectorAll(".svg-container");console.log(D);D.forEach(e=>{e.addEventListener("click",ye);const t=e.dataset.id;isExistInCart(t)&&(e.setAttribute("disabled",!0),e.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="../img/icons.svg#icon-check"></use>
      </svg>
    `)});export{oe as g,Se as o,W as r};
//# sourceMappingURL=pagination-e2fa912a.js.map
