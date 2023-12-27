import{a as d,P as q}from"./assets/vendor-7ae61388.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const v=document.querySelector(".list-product"),f=document.querySelector(".form-search"),S=document.querySelector(".error"),h=document.querySelector("#selected");S.style.display="none";let l,r;f.addEventListener("submit",k);function k(e){e.preventDefault();const{search:s}=e.currentTarget.elements;l=s.value,localStorage.setItem("SaveFilters",JSON.stringify(l)||null),m(),console.log(l)}f.elements.search.value=localStorage.getItem("savetext");m();h.addEventListener("change",M);function M(e){const s=e.target.value,o=e.target.value;r=o,console.log(h.value),r=o,localStorage.setItem("SaveCategpries",JSON.stringify(r)||null),console.log(s),console.log(r),m()}f.elements.selecteds.value=localStorage.getItem("saveselected");function P(){T().then(e=>{const s=e.map(o=>`<option value="${o}">${o}</option>`).join("");h.insertAdjacentHTML("beforeend",s)}).catch(e=>{console.log(e)})}P();function m(){E().then(e=>{e.results.length===0&&(S.style.display="flex"),b(e.results)}).catch(e=>{throw new Error(e)})}function b(e){const s=e.map(({name:o,img:n,category:t,price:a,size:c,popularity:y,is10PercentOff:L})=>L==!0?`
              <li class="item-product">
                <div class="product-container" id="svg-discount">
                  <svg width="60" height="60" class="discount-svg">
                    <use href="../img/icons.svg#icon-discount"></use>
                  </svg>
                  </div>
                  <img class="img-product" src="${n}" width="400" height="200">
                  <h2 class="caption-product">${o}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${t}</span></p>
                      <p class="feature">Size: <span class=feature-black>${c}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${y}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${a}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                          <use href="./img/icons.svg#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `:`
              <li class="item-product" id="item">
                <div class="product-container" id="svg-discount">
                  <img class="img-product" src="${n}" width="400" height="200">
                  <h2 class="caption-product">${o}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${String(t).replace("_"," ")}</span></p>
                      <p class="feature">Size: <span class=feature-black>${c}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${y}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${a}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                          <use href="./img/icons.svg#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `).join("");v.innerHTML="",v.insertAdjacentHTML("beforeend",s)}async function E(){let e=1,s=6;const o=await d.get(`https://food-boutique.b.goit.study/api/products?keyword=${l||""}&category=${r||""}&`,{params:{page:e,limit:s}});return localStorage.setItem("page",e),localStorage.getItem("page"),localStorage.setItem("limit",s),localStorage.getItem("limit"),o.data}async function $(e){return(await d.get(`https://food-boutique.b.goit.study/api/products/?page=${e}`)).data}async function T(){return(await d.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function I(e){try{const s="https://food-boutique.b.goit.study/api/subscription",o={email:e};return(await d.post(s,o)).data}catch(s){throw console.log("Something went wrong: "+s),s}}const u=document.querySelector(".loader");u.hidden=!0;let p=1;$(p).then(e=>{b(e.results)}).catch(e=>{throw new Error(e)}).finally(()=>{u.hidden=!0});const C={totalItems:900,visiblePages:4,template:{page:'<a href="#" id="page-btn" class="tui-page-btn">{{page}}</a>',currentPage:'<strong id="is-selected" class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" id="arrow-btn" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span id="arrow-btn" class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" id="page-btn" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}},N=new q("pagination",C);N.on("afterMove",function(e){u.hidden=!1,p=e.page,$(p).then(s=>{b(s.results)}).catch(s=>{throw new Error(s)}).finally(()=>{u.hidden=!0})});const O="/fson-95-project-team_2/assets/fruitCart@2x-44c39800.png";document.querySelector(".js-modal");document.querySelector(".modal-content");const i=document.querySelector(".js-modal-subscription"),w=document.querySelector(".subscription-modal-content");async function j(e){i.classList.toggle("is-hidden"),await I(e).then(t=>{w.innerHTML=`<div class='success-text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-success-header'>Thanks for subscribing for <span class='subscription-success-email'>new</span> products</h2>
      <p class='subscription-success-descr'>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      <img src="${O}" alt='vegetables' class='subscription-success-image'>
  `}).catch(t=>{t.response.status===409?w.innerHTML=`<div class='text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-failed-header'>This <span class='subscription-failed-email'>email address</span> has already been entered</h2>
      <p class='subscription-failed-descr'>You have already subscribed to our new products. Watch for offers at the mailing address.</p>
  `:console.log("SOMETHING WENT WRONG")}),window.addEventListener("keydown",s);function s(t){t.key==="Escape"&&i.classList.add("is-hidden")}window.onclick=function(t){t.target===i&&i.classList.add("is-hidden")};const o=document.querySelector(".modal-close-btn");o.addEventListener("click",n);function n(t){t.currentTarget===o&&i.classList.add("is-hidden")}}const g=document.querySelector(".footer-form-authorization");g.addEventListener("submit",x);function x(e){e.preventDefault(),j(g[0].value),g.reset()}
//# sourceMappingURL=commonHelpers.js.map
