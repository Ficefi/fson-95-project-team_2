import{a as d}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const w="/fson-95-project-team_2/assets/fruitCart@2x-44c39800.png";document.querySelector(".js-modal");document.querySelector(".modal-content");const r=document.querySelector(".js-modal-subscription"),h=document.querySelector(".subscription-modal-content");async function S(e){r.classList.toggle("is-hidden"),await E(e).then(s=>{h.innerHTML=`<div class='success-text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-success-header'>Thanks for subscribing for <span class='subscription-success-email'>new</span> products</h2>
      <p class='subscription-success-descr'>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      <img src="${w}" alt='vegetables' class='subscription-success-image'>
  `}).catch(s=>{s.response.status===409?h.innerHTML=`<div class='text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-failed-header'>This <span class='subscription-failed-email'>email address</span> has already been entered</h2>
      <p class='subscription-failed-descr'>You have already subscribed to our new products. Watch for offers at the mailing address.</p>
  `:console.log("SOMETHING WENT WRONG")}),window.addEventListener("keydown",t);function t(s){s.key==="Escape"&&r.classList.add("is-hidden")}window.onclick=function(s){s.target===r&&r.classList.add("is-hidden")};const o=document.querySelector(".modal-close-btn");o.addEventListener("click",c);function c(s){s.currentTarget===o&&r.classList.add("is-hidden")}}const v=document.querySelector(".list-product"),p=document.querySelector(".form-search"),b=document.querySelector(".error"),g=document.querySelector("#selected");b.style.display="none";let l,i;p.addEventListener("submit",$);function $(e){e.preventDefault();const{search:t}=e.currentTarget.elements;l=t.value,localStorage.setItem("SaveFilters",JSON.stringify(l)||null),f(),console.log(l)}p.elements.search.value=localStorage.getItem("savetext");f();g.addEventListener("change",L);function L(e){const t=e.target.value,o=e.target.value;i=o,console.log(g.value),i=o,localStorage.setItem("SaveCategpries",JSON.stringify(i)||null),console.log(t),console.log(i),f()}p.elements.selecteds.value=localStorage.getItem("saveselected");function q(){T().then(e=>{const t=e.map(o=>`<option value="${o}">${o}</option>`).join("");g.insertAdjacentHTML("beforeend",t)}).catch(e=>{console.log(e)})}q();function f(){M().then(e=>{e.results.length===0&&(b.style.display="flex"),k(e.results)}).catch(e=>{throw new Error(e)})}function k(e){const t=e.map(({name:o,img:c,category:s,price:a,size:n,popularity:m,is10PercentOff:y})=>y==!0?`
              <li class="item-product">
                <div class="product-container" id="svg-discount">
                  <svg width="60" height="60" class="discount-svg">
                    <use href="../img/icons.svg#icon-discount"></use>
                  </svg>
                  </div>
                  <img class="img-product" src="${c}" width="400" height="200">
                  <h2 class="caption-product">${o}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${s}</span></p>
                      <p class="feature">Size: <span class=feature-black>${n}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${m}</span></p>
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
                  <img class="img-product" src="${c}" width="400" height="200">
                  <h2 class="caption-product">${o}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${String(s).replace("_"," ")}</span></p>
                      <p class="feature">Size: <span class=feature-black>${n}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${m}</span></p>
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
              `).join("");v.innerHTML="",v.insertAdjacentHTML("beforeend",t)}async function M(){let e=1,t=6;const o=await d.get(`https://food-boutique.b.goit.study/api/products?keyword=${l||""}&category=${i||""}&`,{params:{page:e,limit:t}});return localStorage.setItem("page",e),localStorage.getItem("page"),localStorage.setItem("limit",t),localStorage.getItem("limit"),o.data}async function T(){return(await d.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function E(e){try{const t="https://food-boutique.b.goit.study/api/subscription",o={email:e};return(await d.post(t,o)).data}catch(t){throw console.log("Something went wrong: "+t),t}}const u=document.querySelector(".footer-form-authorization");u.addEventListener("submit",I);function I(e){e.preventDefault(),S(u[0].value),u.reset()}
//# sourceMappingURL=commonHelpers.js.map
