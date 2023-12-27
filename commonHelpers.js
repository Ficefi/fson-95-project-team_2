import{a as f}from"./assets/vendor-a61d8330.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const g=document.querySelector(".list-product"),i=document.querySelector(".form-search"),m=document.querySelector(".error"),u=document.querySelector("#selected");m.style.display="none";let l,n;i.addEventListener("submit",h);function h(e){e.preventDefault();const{search:s}=e.currentTarget.elements;l=s.value,localStorage.setItem("SaveFilters",JSON.stringify(l)||null),d(),console.log(l)}i.elements.search.value=localStorage.getItem("savetext");d();u.addEventListener("change",y);function y(e){const s=e.target.value,r=e.target.value;n=r,console.log(u.value),n=r,localStorage.setItem("SaveCategpries",JSON.stringify(n)||null),console.log(s),console.log(n),d()}i.elements.selecteds.value=localStorage.getItem("saveselected");function S(){w().then(e=>{const s=e.map(r=>`<option value="${r}">${r}</option>`).join("");u.insertAdjacentHTML("beforeend",s)}).catch(e=>{console.log(e)})}S();function d(){$().then(e=>{e.results.length===0&&(m.style.display="flex"),b(e.results)}).catch(e=>{throw new Error(e)})}function b(e){const s=e.map(({name:r,img:a,category:t,price:o,size:c,popularity:p,is10PercentOff:v})=>v==!0?`
              <li class="item-product">
                <div class="product-container" id="svg-discount">
                  <svg width="60" height="60" class="discount-svg">
                    <use href="../img/icons.svg#icon-discount"></use>
                  </svg>
                  </div>
                  <img class="img-product" src="${a}" width="400" height="200">
                  <h2 class="caption-product">${r}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${t}</span></p>
                      <p class="feature">Size: <span class=feature-black>${c}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${p}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${o}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                          <use href="./img/icons.svg#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `:`
              <li class="item-product">
                <div class="product-container" id="svg-discount">
                  <img class="img-product" src="${a}" width="400" height="200">
                  <h2 class="caption-product">${r}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${String(t).replace("_"," ")}</span></p>
                      <p class="feature">Size: <span class=feature-black>${c}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${p}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${o}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                          <use href="./img/icons.svg#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `).join("");g.innerHTML="",g.insertAdjacentHTML("beforeend",s)}async function $(){let e=1,s=6;const r=await f.get(`https://food-boutique.b.goit.study/api/products?keyword=${l||""}&category=${n||""}&`,{params:{page:e,limit:s}});return localStorage.setItem("page",e),localStorage.getItem("page"),localStorage.setItem("limit",s),localStorage.getItem("limit"),r.data}async function w(){return(await f.get("https://food-boutique.b.goit.study/api/products/categories")).data}document.querySelector(".js-modal");document.querySelector(".modal-content");document.querySelector(".js-modal-subscription");document.querySelector(".subscription-modal-content");
//# sourceMappingURL=commonHelpers.js.map
