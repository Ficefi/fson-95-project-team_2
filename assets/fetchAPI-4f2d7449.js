import{a as d}from"./vendor-b592f4c5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();function C(e){const t=JSON.parse(localStorage.getItem("cart"))||[],o=Array(t).flat(1/0);o.push(e),t.includes(e)||localStorage.setItem("cart",JSON.stringify(o))}function O(e){const t=JSON.parse(localStorage.getItem("cart")),o=Array(t).flat(1/0),a=o.indexOf(e);o.splice(a,1),localStorage.setItem("cart",JSON.stringify(o))}function I(e){const t=JSON.parse(localStorage.getItem("cart"));return Array(t).flat(1/0).some(a=>a===e)}const P="/fson-95-project-team_2/assets/fruitCart@2x-44c39800.png",j="/fson-95-project-team_2/assets/check-mark-35f2f86f.png",b=document.querySelector(".qty-card"),D=JSON.parse(localStorage.getItem("cart"))||[];let _=D.length;function w(e){b.textContent=String(e)}w(_);const l=document.querySelector(".js-modal"),A=document.querySelector(".modal-content"),u=document.querySelector(".js-modal-subscription"),T=document.querySelector(".subscription-modal-content"),p=document.querySelector(".js-modal-order"),H=document.querySelector(".subscription-order-content");async function J(e){l.classList.toggle("is-hidden"),await K(e).then(t=>{const{img:o,name:a,desc:s,category:c,size:n,popularity:m,price:y}=t,f=s.split("");A.innerHTML=`<div class='image-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
    <img src='${o}' alt='${s}' class='modal-img'>
    </div>
    <div class='modal-descr-together'>
    <div class='modal-descr-container'>
    <h2 class='modal-name'>${a}</h2>
    <div class='modal-text-wrapper'>
    <p class='modal-text'>Category:<p class='modal-text-descr'>${String(c).replace("_"," ").replace("&","").replace("_"," ")}</p>
    <p class='modal-text'>Size:<p class='modal-text-descr'>${n}</p>
    <p class='modal-text'>Popularity:<p class='modal-text-descr'>${m}</p>
    </div>
    </div>
    <p class='modal-descr'>${s}</p>
    </div>
    <div class='modal-floor-wrap'>
    <p class='modal-price'>$${y}</p>
    <button type='submit' class='modal-cart-btn'>Add to
        <svg class='modal-window-cart-button' width='18' height='18'>
          <use href='./img/icons.svg#icon-cart'></use>
        </svg></button>
    </div>

  `,f.length>300?document.querySelector(".modal-descr").classList.add("modal-descr-fixed"):document.querySelector(".modal-descr").classList.remove("modal-descr-fixed"),window.addEventListener("keydown",k);function k(i){i.key==="Escape"&&l.classList.add("is-hidden")}window.onclick=function(i){i.target===l&&l.classList.add("is-hidden")};const q=document.querySelector(".modal-close-btn");q.addEventListener("click",x);function x(i){i.currentTarget===q&&l.classList.add("is-hidden")}const r=document.querySelector(".modal-cart-btn");r.addEventListener("click",E),I(e)&&(r.childNodes[0].data="Remove from",r.style.minWidth="175px");function E(){I(e)?(O(e),r.childNodes[0].data="Add to",r.style.minWidth="130px",w(b.outerText-1)):(w(Number(b.outerText)+Number(1)),C(e),r.childNodes[0].data="Remove from",r.style.minWidth="175px")}l.classList.contains("is-hidden")&&(removeEventListener("click",x),removeEventListener("click",E),removeEventListener("keydown",k))})}async function V(e){u.classList.toggle("is-hidden"),await U(e).then(s=>{T.innerHTML=`<div class='success-text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-success-header'>Thanks for subscribing for <span class='subscription-success-email'>new</span> products</h2>
      <p class='subscription-success-descr'>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      <img src="${P}" alt='vegetables' class='subscription-success-image'>
  `}).catch(s=>{s.response.status===409?T.innerHTML=`<div class='text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-failed-header'>This <span class='subscription-failed-email'>email address</span> has already been entered</h2>
      <p class='subscription-failed-descr'>You have already subscribed to our new products. Watch for offers at the mailing address.</p>
  `:console.log("SOMETHING WENT WRONG")}),window.addEventListener("keydown",t);function t(s){s.key==="Escape"&&u.classList.add("is-hidden")}window.onclick=function(s){s.target===u&&u.classList.add("is-hidden")};const o=document.querySelector(".modal-close-btn");o.addEventListener("click",a);function a(s){s.currentTarget===o&&u.classList.add("is-hidden")}l.classList.contains("is-hidden")&&(removeEventListener("click",a),removeEventListener("keydown",t))}function X(){p.classList.toggle("is-hidden"),H.innerHTML=`
  <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='20' height='20'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
    <img src='${j}' alt='order successful' class='order-success-img'>
    <h2 class='order-success-status'>Order success</h2>
    <p class='order-success-descr'>Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness.</p>
  `,window.addEventListener("keydown",e);function e(a){a.key==="Escape"&&p.classList.add("is-hidden")}window.onclick=function(a){a.target===p&&p.classList.add("is-hidden")};const t=document.querySelector(".modal-close-btn");t.addEventListener("click",o);function o(a){a.currentTarget===t&&p.classList.add("is-hidden")}}const v="/fson-95-project-team_2/assets/icons-b3cb9da3.svg",S=document.querySelector(".list-product"),L=document.querySelector(".form-search"),M=document.querySelector(".error"),N=document.querySelector("#selected");M.style.display="none";let h,g;L.addEventListener("submit",W);function W(e){e.preventDefault();const{search:t}=e.currentTarget.elements;h=t.value,localStorage.setItem("SaveFilters",JSON.stringify(h)||null),$()}L.elements.search.value=localStorage.getItem("savetext");$();N.addEventListener("change",F);function F(e){e.target.value;const t=e.target.value;g=t,g=t,localStorage.setItem("SaveCategpries",JSON.stringify(g)||null),$()}L.elements.selecteds.value=localStorage.getItem("saveselected");function B(){Y().then(e=>{const t=e.map(o=>`<option value="${o}">${String(o).replace("_"," ").replace("_"," ")}</option>`).join("");N.insertAdjacentHTML("beforeend",t)}).catch(e=>{console.log(e)})}B();function $(){R().then(e=>{e.results.length===0&&(M.style.display="flex"),z(e.results)}).catch(e=>{throw new Error(e)})}function z(e){const t=e.map(({name:o,img:a,category:s,price:c,size:n,popularity:m,is10PercentOff:y,_id:f})=>y==!0?`
              <li class="item-product" data-id="${f}">
                <div class="product-container" id="svg-discount">
                  <svg width="60" height="60" class="discount-svg">
                    <use href="${v}#icon-discount"></use>
                  </svg>
                  <img class="img-product" src="${a}" width="400" height="200">
                  <h2 class="caption-product">${o}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${s}</span></p>
                      <p class="feature">Size: <span class=feature-black>${n}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${m}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                            <use href="${v}#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `:`
              <li class="item-product" data-id="${f}">
                <div class="product-container" id="svg-discount">
                  <img class="img-product" src="${a}" width="400" height="200">
                  <h2 class="caption-product">${o}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${String(s).replace("_"," ").replace("_"," ")}</span></p>
                      <p class="feature">Size: <span class=feature-black>${n}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${m}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                            <use href="${v}#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `).join("");S.innerHTML="",S.insertAdjacentHTML("beforeend",t)}function G(e){const t=e.target.closest(".item-product");if(t){const o=t.dataset.id;J(o)}}S.addEventListener("click",G);async function R(e){let t=9;const o=await d.get(`https://food-boutique.b.goit.study/api/products?keyword=${h||""}&category=${g||""}&`,{params:{keywords:h||"",selectedForm:g||"",page:e||1,limit:t}});return localStorage.setItem("page",e),localStorage.getItem("page"),localStorage.setItem("limit",t),localStorage.getItem("limit"),o.data}async function Z(){return(await d.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function ee(){return(await d.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function Y(){return(await d.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function K(e){return(await d.get(`https://food-boutique.b.goit.study/api/products/${e}`)).data}async function U(e){try{const t="https://food-boutique.b.goit.study/api/subscription",o={email:e};return(await d.post(t,o)).data}catch(t){throw console.log("Something went wrong: "+t),t}}export{ee as a,J as b,v as c,Z as d,R as e,z as f,K as g,X as o,O as r,V as s};
//# sourceMappingURL=fetchAPI-4f2d7449.js.map
