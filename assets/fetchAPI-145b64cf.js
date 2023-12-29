import{a as d}from"./vendor-b592f4c5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();function M(e){const t=JSON.parse(localStorage.getItem("cart"))||[],o=Array(t).flat(1/0);o.push(e),t.includes(e)||localStorage.setItem("cart",JSON.stringify(o))}function N(e){const t=JSON.parse(localStorage.getItem("cart")),o=Array(t).flat(1/0),c=o.indexOf(e);o.splice(c,1),localStorage.setItem("cart",JSON.stringify(o))}function x(e){const t=JSON.parse(localStorage.getItem("cart"));return Array(t).flat(1/0).some(c=>c===e)}const T="/fson-95-project-team_2/assets/fruitCart@2x-44c39800.png",l=document.querySelector(".js-modal"),C=document.querySelector(".modal-content"),u=document.querySelector(".js-modal-subscription"),q=document.querySelector(".subscription-modal-content");document.querySelector(".js-modal-order");document.querySelector(".subscription-order-content");async function O(e){l.classList.toggle("is-hidden"),await _(e).then(t=>{const{img:o,name:c,desc:s,category:a,size:n,popularity:g,price:h}=t,m=s.split("");C.innerHTML=`<div class='image-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
    <img src='${o}' alt='${s}' class='modal-img'>
    </div>
    <div class='modal-descr-together'>
    <div class='modal-descr-container'>
    <h2 class='modal-name'>${c}</h2>
    <div class='modal-text-wrapper'>
    <p class='modal-text'>Category:<p class='modal-text-descr'>${String(a).replace("_"," ").replace("&","").replace("_"," ")}</p>
    <p class='modal-text'>Size:<p class='modal-text-descr'>${n}</p>
    <p class='modal-text'>Popularity:<p class='modal-text-descr'>${g}</p>
    </div>
    </div>
    <p class='modal-descr'>${s}</p>
    </div>
    <div class='modal-floor-wrap'>
    <p class='modal-price'>$${h}</p>
    <button type='submit' class='modal-cart-btn'>Add to
        <svg class='modal-window-cart-button' width='18' height='18'>
          <use href='./img/icons.svg#icon-cart'></use>
        </svg></button>
    </div>

  `,m.length>300?document.querySelector(".modal-descr").classList.add("modal-descr-fixed"):document.querySelector(".modal-descr").classList.remove("modal-descr-fixed"),window.addEventListener("keydown",S);function S(r){r.key==="Escape"&&l.classList.add("is-hidden")}window.onclick=function(r){r.target===l&&l.classList.add("is-hidden")};const L=document.querySelector(".modal-close-btn");L.addEventListener("click",$);function $(r){r.currentTarget===L&&l.classList.add("is-hidden")}const i=document.querySelector(".modal-cart-btn");i.addEventListener("click",k),x(e)&&(i.childNodes[0].data="Remove from",i.style.minWidth="175px");function k(){x(e)?(N(e),i.childNodes[0].data="Add to",i.style.minWidth="130px"):(M(e),i.childNodes[0].data="Remove from",i.style.minWidth="175px")}l.classList.contains("is-hidden")&&(removeEventListener("click",$),removeEventListener("click",k),removeEventListener("keydown",S))})}async function z(e){u.classList.toggle("is-hidden"),await F(e).then(s=>{q.innerHTML=`<div class='success-text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-success-header'>Thanks for subscribing for <span class='subscription-success-email'>new</span> products</h2>
      <p class='subscription-success-descr'>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      <img src="${T}" alt='vegetables' class='subscription-success-image'>
  `}).catch(s=>{s.response.status===409?q.innerHTML=`<div class='text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-failed-header'>This <span class='subscription-failed-email'>email address</span> has already been entered</h2>
      <p class='subscription-failed-descr'>You have already subscribed to our new products. Watch for offers at the mailing address.</p>
  `:console.log("SOMETHING WENT WRONG")}),window.addEventListener("keydown",t);function t(s){s.key==="Escape"&&u.classList.add("is-hidden")}window.onclick=function(s){s.target===u&&u.classList.add("is-hidden")};const o=document.querySelector(".modal-close-btn");o.addEventListener("click",c);function c(s){s.currentTarget===o&&u.classList.add("is-hidden")}l.classList.contains("is-hidden")&&(removeEventListener("click",c),removeEventListener("keydown",t))}const v="/fson-95-project-team_2/assets/icons-b3cb9da3.svg",y=document.querySelector(".list-product"),b=document.querySelector(".form-search"),I=document.querySelector(".error"),E=document.querySelector("#selected");I.style.display="none";let f,p;b.addEventListener("submit",P);function P(e){e.preventDefault();const{search:t}=e.currentTarget.elements;f=t.value,localStorage.setItem("SaveFilters",JSON.stringify(f)||null),w()}b.elements.search.value=localStorage.getItem("savetext");w();E.addEventListener("change",j);function j(e){e.target.value;const t=e.target.value;p=t,p=t,localStorage.setItem("SaveCategpries",JSON.stringify(p)||null),w()}b.elements.selecteds.value=localStorage.getItem("saveselected");function D(){W().then(e=>{const t=e.map(o=>`<option value="${o}">${String(o).replace("_"," ").replace("_"," ")}</option>`).join("");E.insertAdjacentHTML("beforeend",t)}).catch(e=>{console.log(e)})}D();function w(){J().then(e=>{e.results.length===0&&(I.style.display="flex"),A(e.results)}).catch(e=>{throw new Error(e)})}function A(e){const t=e.map(({name:o,img:c,category:s,price:a,size:n,popularity:g,is10PercentOff:h,_id:m})=>h==!0?`
              <li class="item-product" data-id="${m}">
                <div class="product-container" id="svg-discount">
                  <svg width="60" height="60" class="discount-svg">
                    <use href="${v}#icon-discount"></use>
                  </svg>
                  <img class="img-product" src="${c}" width="400" height="200">
                  <h2 class="caption-product">${o}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${s}</span></p>
                      <p class="feature">Size: <span class=feature-black>${n}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${g}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${a}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                            <use href="${v}#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `:`
              <li class="item-product" data-id="${m}">
                <div class="product-container" id="svg-discount">
                  <img class="img-product" src="${c}" width="400" height="200">
                  <h2 class="caption-product">${o}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${String(s).replace("_"," ").replace("_"," ")}</span></p>
                      <p class="feature">Size: <span class=feature-black>${n}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${g}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${a}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                            <use href="${v}#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `).join("");y.innerHTML="",y.insertAdjacentHTML("beforeend",t)}function H(e){const t=e.target.closest(".item-product");if(t){const o=t.dataset.id;O(o)}}y.addEventListener("click",H);async function J(e){let t=9;const o=await d.get(`https://food-boutique.b.goit.study/api/products?keyword=${f||""}&category=${p||""}&`,{params:{keywords:f||"",selectedForm:p||"",page:e||1,limit:t}});return localStorage.setItem("page",e),localStorage.getItem("page"),localStorage.setItem("limit",t),localStorage.getItem("limit"),console.log(o),o.data}async function R(){return(await d.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function G(){return(await d.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function W(){return(await d.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function _(e){return(await d.get(`https://food-boutique.b.goit.study/api/products/${e}`)).data}async function F(e){try{const t="https://food-boutique.b.goit.study/api/subscription",o={email:e};return(await d.post(t,o)).data}catch(t){throw console.log("Something went wrong: "+t),t}}export{G as a,R as b,J as c,A as d,_ as g,O as o,N as r,z as s};
//# sourceMappingURL=fetchAPI-145b64cf.js.map
