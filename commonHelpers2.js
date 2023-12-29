/* empty css                      */import{a as g,P as j}from"./assets/vendor-b592f4c5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(a){if(a.ep)return;a.ep=!0;const c=s(a);fetch(a.href,c)}})();function D(e){const t=JSON.parse(localStorage.getItem("cart"))||[],s=Array(t).flat(1/0);s.push(e),t.includes(e)||localStorage.setItem("cart",JSON.stringify(s))}function B(e){const t=JSON.parse(localStorage.getItem("cart")),s=Array(t).flat(1/0),o=s.indexOf(e);s.splice(o,1),localStorage.setItem("cart",JSON.stringify(s))}function T(e){const t=JSON.parse(localStorage.getItem("cart"));return Array(t).flat(1/0).some(o=>o===e)}const _="/fson-95-project-team_2/assets/fruitCart@2x-44c39800.png",l=document.querySelector(".js-modal"),F=document.querySelector(".modal-content"),m=document.querySelector(".js-modal-subscription"),M=document.querySelector(".subscription-modal-content");document.querySelector(".js-modal-order");document.querySelector(".subscription-order-content");async function P(e){l.classList.toggle("is-hidden"),await V(e).then(t=>{const{img:s,name:o,desc:a,category:c,size:n,popularity:d,price:u}=t,p=a.split("");F.innerHTML=`<div class='image-wrap'>
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
    <p class='modal-text'>Popularity:<p class='modal-text-descr'>${d}</p>
    </div>
    </div>
    <p class='modal-descr'>${a}</p>
    </div>
    <div class='modal-floor-wrap'>
    <p class='modal-price'>$${u}</p>
    <button type='submit' class='modal-cart-btn'>Add to
        <svg class='modal-window-cart-button' width='18' height='18'>
          <use href='./img/icons.svg#icon-cart'></use>
        </svg></button>
    </div>

  `,p.length>300?document.querySelector(".modal-descr").classList.add("modal-descr-fixed"):document.querySelector(".modal-descr").classList.remove("modal-descr-fixed"),window.addEventListener("keydown",h);function h(r){r.key==="Escape"&&l.classList.add("is-hidden")}window.onclick=function(r){r.target===l&&l.classList.add("is-hidden")};const q=document.querySelector(".modal-close-btn");q.addEventListener("click",x);function x(r){r.currentTarget===q&&l.classList.add("is-hidden")}const i=document.querySelector(".modal-cart-btn");i.addEventListener("click",E),T(e)&&(i.childNodes[0].data="Remove from",i.style.minWidth="175px");function E(){T(e)?(B(e),i.childNodes[0].data="Add to",i.style.minWidth="130px"):(D(e),i.childNodes[0].data="Remove from",i.style.minWidth="175px")}l.classList.contains("is-hidden")&&(removeEventListener("click",x),removeEventListener("click",E),removeEventListener("keydown",h))})}async function W(e){m.classList.toggle("is-hidden"),await X(e).then(a=>{M.innerHTML=`<div class='success-text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-success-header'>Thanks for subscribing for <span class='subscription-success-email'>new</span> products</h2>
      <p class='subscription-success-descr'>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      <img src="${_}" alt='vegetables' class='subscription-success-image'>
  `}).catch(a=>{a.response.status===409?M.innerHTML=`<div class='text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='./img/icons.svg#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-failed-header'>This <span class='subscription-failed-email'>email address</span> has already been entered</h2>
      <p class='subscription-failed-descr'>You have already subscribed to our new products. Watch for offers at the mailing address.</p>
  `:console.log("SOMETHING WENT WRONG")}),window.addEventListener("keydown",t);function t(a){a.key==="Escape"&&m.classList.add("is-hidden")}window.onclick=function(a){a.target===m&&m.classList.add("is-hidden")};const s=document.querySelector(".modal-close-btn");s.addEventListener("click",o);function o(a){a.currentTarget===s&&m.classList.add("is-hidden")}l.classList.contains("is-hidden")&&(removeEventListener("click",o),removeEventListener("keydown",t))}const b="/fson-95-project-team_2/assets/icons-b3cb9da3.svg",y=document.querySelector(".list-product"),L=document.querySelector(".form-search"),A=document.querySelector(".error"),J=document.querySelector("#selected");A.style.display="none";let w,f;L.addEventListener("submit",z);function z(e){e.preventDefault();const{search:t}=e.currentTarget.elements;w=t.value,localStorage.setItem("SaveFilters",JSON.stringify(w)||null),k()}L.elements.search.value=localStorage.getItem("savetext");k();J.addEventListener("change",R);function R(e){e.target.value;const t=e.target.value;f=t,f=t,localStorage.setItem("SaveCategpries",JSON.stringify(f)||null),k()}L.elements.selecteds.value=localStorage.getItem("saveselected");function G(){Q().then(e=>{const t=e.map(s=>`<option value="${s}">${String(s).replace("_"," ").replace("_"," ")}</option>`).join("");J.insertAdjacentHTML("beforeend",t)}).catch(e=>{console.log(e)})}G();function k(){U().then(e=>{e.results.length===0&&(A.style.display="flex"),I(e.results)}).catch(e=>{throw new Error(e)})}function I(e){const t=e.map(({name:s,img:o,category:a,price:c,size:n,popularity:d,is10PercentOff:u,_id:p})=>u==!0?`
              <li class="item-product" data-id="${p}">
                <div class="product-container" id="svg-discount">
                  <svg width="60" height="60" class="discount-svg">
                    <use href="${b}#icon-discount"></use>
                  </svg>
                  <img class="img-product" src="${o}" width="400" height="200">
                  <h2 class="caption-product">${s}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${a}</span></p>
                      <p class="feature">Size: <span class=feature-black>${n}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${d}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                            <use href="${b}#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `:`
              <li class="item-product" data-id="${p}">
                <div class="product-container" id="svg-discount">
                  <img class="img-product" src="${o}" width="400" height="200">
                  <h2 class="caption-product">${s}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${String(a).replace("_"," ").replace("_"," ")}</span></p>
                      <p class="feature">Size: <span class=feature-black>${n}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${d}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                            <use href="${b}#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `).join("");y.innerHTML="",y.insertAdjacentHTML("beforeend",t)}function K(e){const t=e.target.closest(".item-product");if(t){const s=t.dataset.id;P(s)}}y.addEventListener("click",K);async function U(){let e=1,t=9;const s=await g.get(`https://food-boutique.b.goit.study/api/products?keyword=${w||""}&category=${f||""}&`,{params:{page:e,limit:t}});return localStorage.setItem("page",e),localStorage.getItem("page"),localStorage.setItem("limit",t),localStorage.getItem("limit"),console.log(s),s.data}async function H(e){return(await g.get(`https://food-boutique.b.goit.study/api/products/?page=${e}`)).data}async function Y(){return(await g.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function Q(){return(await g.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function V(e){return(await g.get(`https://food-boutique.b.goit.study/api/products/${e}`)).data}async function X(e){try{const t="https://food-boutique.b.goit.study/api/subscription",s={email:e};return(await g.post(t,s)).data}catch(t){throw console.log("Something went wrong: "+t),t}}const v=document.querySelector(".loader");v.hidden=!0;let S=1;H(S).then(e=>{I(e.results)}).catch(e=>{throw new Error(e)}).finally(()=>{v.hidden=!0});const Z={totalItems:900,visiblePages:4,template:{page:'<a href="#" id="page-btn" class="tui-page-btn">{{page}}</a>',currentPage:'<strong id="is-selected" class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" id="arrow-btn" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span id="arrow-btn" class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" id="page-btn" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}},ee=new j("pagination",Z);ee.on("afterMove",function(e){v.hidden=!1,S=e.page,H(S).then(t=>{I(t.results)}).catch(t=>{throw new Error(t)}).finally(()=>{v.hidden=!0})});const $=document.querySelector(".footer-form-authorization");$.addEventListener("submit",te);function te(e){e.preventDefault(),W($[0].value),$.reset()}const N=document.querySelector(".card"),se=2;function ae(e,t,s=0){const o=s+se;return e.slice(s,o).map(({img:n,price:d,_id:u,desc:p},h)=>`<li class="card_item" data-id="${u}">
      <div class="discount-icon-container">
        <svg class="discount-icon" width="60" height="60">
          <use href="../img/icons.svg#icon-discount"></use>
        </svg>
      </div>
      <div class="card-content">
        <img src="${n}" alt="${p}" class="card-img" width="105" height="105">
      </div>
      <div class="title-box">
        <h3 class="card-title">${t[h]}</h3>
        <p class="card-price">$${d}</p>
      </div>
      <button class="basket" data-id="${u}">
        <svg class="basket-icon" width="18" height="18">
          <use href="../img/icons.svg#icon-cart"></use>
        </svg>
      </button>
    </li>`).join("")}async function oe(){const e=await Y();console.log(e);const t=e.reduce((o,a)=>(a.name.length>10?o.push(a.name.slice(0,10)+"..."):o.push(a.name),o),[]);N.innerHTML=ae(e,t),N.addEventListener("click",o=>{const a=o.target.closest(".card_item");if(a){const c=a.dataset.id;P(c)}});const s=document.querySelectorAll(".basket");console.log(s),s.forEach(o=>{o.addEventListener("click",ce);const a=o.dataset.id;ne(a)&&(o.setAttribute("disabled",!0),o.innerHTML=`
        <svg class="basket-icon-check" width="18" height="18">
          <use href="../img/icons.svg#icon-check"></use>
        </svg>
      `)})}oe();function ce(e){const t=e.currentTarget;console.log(t);const s=t.dataset.id;console.log(s),t.hasAttribute("disabled")?(O(s),console.log(O(s)),t.removeAttribute("disabled"),t.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="../img/icons.svg#icon-cart"></use>
      </svg>
    `):(C(s),console.log(C(s)),t.setAttribute("disabled",!0),t.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="../img/icons.svg#icon-check"></use>
      </svg>
    `)}function C(e){const t=JSON.parse(localStorage.getItem("cart"))||[];console.log(t),t.includes(e)||(t.push(e),localStorage.setItem("cart",JSON.stringify(t)))}function O(e){const t=JSON.parse(localStorage.getItem("cart"))||[];console.log(t);const s=t.indexOf(e);s!==-1&&(t.splice(s,1),localStorage.setItem("cart",JSON.stringify(t)))}function ne(e){try{const t=JSON.parse(localStorage.getItem("cart"))||[];return console.log(t),t.includes(e)}catch(t){return console.error("Помилка парсингу JSON:",t),!1}}
//# sourceMappingURL=commonHelpers2.js.map
