import{a}from"./assets/vendor-5ef3f681.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();async function l(){return(await a.get("https://food-boutique.b.goit.study/api/products")).data}document.querySelector(".js-modal");document.querySelector(".modal-content");const u=document.querySelector(".list-product");function d(){l().then(r=>{p(r.results)}).catch(r=>{throw new Error(r)})}function p(r){const s=r.map(({name:n,img:c,category:e,price:t,size:o,popularity:i})=>`
        <li class="item-product">
          <div class="product-container">
            <img class="img-product" src="${c}" width="400" height="200">
            <h2 class="caption-product">${n}</h2>
            <div class="features-container">
                <p class="feature">Category: <span class=feature-black>${e}</span></p>
                <p class="feature">Size: <span class=feature-black>${o}</span></p>
                <p class="feature popularity">Popularity: <span class=feature-black>${i}</span></p>
            </div>
            <div class="sell-container">
                <p class="price-product">$${t}</p>
                <div class="svg-container">
                    <svg class="svg" width="18" height="18">
                    <use href="./img/icons.svg#icon-cart"></use>
                    </svg>
                </div>  
            </div>
          </div>
        </li>
        `).join("");u.insertAdjacentHTML("beforeend",s)}d();
//# sourceMappingURL=commonHelpers.js.map
