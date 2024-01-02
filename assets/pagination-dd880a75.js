import{a as f,P as z}from"./vendor-b592f4c5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=a(s);fetch(s.href,c)}})();function x(e){const t=JSON.parse(localStorage.getItem("cart"))||[],a=Array(t).flat(1/0);a.push(e),t.includes(e)||localStorage.setItem("cart",JSON.stringify(a))}function P(e){const t=JSON.parse(localStorage.getItem("cart")),a=Array(t).flat(1/0),o=a.indexOf(e);a.splice(o,1),localStorage.setItem("cart",JSON.stringify(a))}function m(e){const t=JSON.parse(localStorage.getItem("cart"));return Array(t).flat(1/0).some(o=>o===e)}const G="/fson-95-project-team_2/assets/fruitCart@2x-44c39800.png",R="/fson-95-project-team_2/assets/check-mark-35f2f86f.png",S=document.querySelector(".qty-card"),Y=JSON.parse(localStorage.getItem("cart"))||[];let K=Y.length;function $(e){S.textContent=String(e)}$(K);const n="/fson-95-project-team_2/assets/icons-b3cb9da3.svg",g=document.querySelector(".js-modal"),U=document.querySelector(".modal-content"),v=document.querySelector(".js-modal-subscription"),D=document.querySelector(".subscription-modal-content"),b=document.querySelector(".js-modal-order"),Q=document.querySelector(".subscription-order-content");async function C(e){g.classList.toggle("is-hidden"),await ce(e).then(t=>{const{img:a,name:o,desc:s,category:c,size:i,popularity:l,price:u,is10PercentOff:d}=t,k=s.split("");if(U.innerHTML=`<div class='image-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href="${n}#icon-close-btn"></use>
        </svg>
      </button><div class='discount-icon-wrap'>
    <img src='${a}' alt='${s}' class='modal-img'>
          <svg class="discount-icon-modal is-hidden" width="60" height="60">
          <use href="${n}#icon-discount"></use>
          </div>
    </div>
    <div class='modal-descr-together'>
    <div class='modal-descr-container'>
    <h2 class='modal-name'>${o}</h2>
    <div class='modal-text-wrapper'>
    <p class='modal-text'>Category:<p class='modal-text-descr'>${String(c).replace("_"," ").replace("_"," ")}</p>
    <p class='modal-text'>Size:<p class='modal-text-descr'>${i}</p>
    <p class='modal-text'>Popularity:<p class='modal-text-descr'>${l}</p>
    </div>
    </div>
    <p class='modal-descr'>${s}</p>
    </div>
    <div class='modal-floor-wrap'>
    <p class='modal-price'>$${u}</p>
    <button type='submit' class='modal-cart-btn'>Add to
        <svg class='modal-window-cart-button' width='18' height='18'>
          <use href="${n}#icon-cart"></use>
        </svg></button>
    </div>

  `,console.log(d),d===!0){const r=document.querySelector(".discount-icon-modal");console.log(r),r.classList.remove("is-hidden")}k.length>300?document.querySelector(".modal-descr").classList.add("modal-descr-fixed"):document.querySelector(".modal-descr").classList.remove("modal-descr-fixed"),window.addEventListener("keydown",N);function N(r){r.key==="Escape"&&g.classList.add("is-hidden"),h()}window.onclick=function(r){r.target===g&&g.classList.add("is-hidden"),h()};const H=document.querySelector(".modal-close-btn");H.addEventListener("click",O);function O(r){r.currentTarget===H&&g.classList.add("is-hidden"),h()}const p=document.querySelector(".modal-cart-btn");p.addEventListener("click",j),m(e)&&(p.childNodes[0].data="Remove from",p.style.minWidth="175px");function j(){m(e)?(P(e),p.childNodes[0].data="Add to",p.style.minWidth="130px",$(S.outerText-1)):($(Number(S.outerText)+Number(1)),x(e),p.childNodes[0].data="Remove from",p.style.minWidth="175px")}g.classList.contains("is-hidden")&&(removeEventListener("click",O),removeEventListener("click",j),removeEventListener("keydown",N))})}async function V(e){v.classList.toggle("is-hidden"),await ne(e).then(s=>{D.innerHTML=`<div class='success-text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-success-header'>Thanks for subscribing for <span class='subscription-success-email'>new</span> products</h2>
      <p class='subscription-success-descr'>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      <img src="${G}" alt='vegetables' class='subscription-success-image'>
  `}).catch(s=>{s.response.status===409?D.innerHTML=`<div class='text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-failed-header'>This <span class='subscription-failed-email'>email address</span> has already been entered</h2>
      <p class='subscription-failed-descr'>You have already subscribed to our new products. Watch for offers at the mailing address.</p>
  `:console.log("SOMETHING WENT WRONG")}),window.addEventListener("keydown",t);function t(s){s.key==="Escape"&&v.classList.add("is-hidden")}window.onclick=function(s){s.target===v&&v.classList.add("is-hidden")};const a=document.querySelector(".modal-close-btn");a.addEventListener("click",o);function o(s){s.currentTarget===a&&v.classList.add("is-hidden")}g.classList.contains("is-hidden")&&(removeEventListener("click",o),removeEventListener("keydown",t))}function ye(){b.classList.toggle("is-hidden"),Q.innerHTML=`
  <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='20' height='20'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
    <img src='${R}' alt='order successful' class='order-success-img'>
    <h2 class='order-success-status'>Order success</h2>
    <p class='order-success-descr'>Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness.</p>
  `,window.addEventListener("keydown",e);function e(o){o.key==="Escape"&&b.classList.add("is-hidden")}window.onclick=function(o){o.target===b&&b.classList.add("is-hidden")};const t=document.querySelector(".modal-close-btn");t.addEventListener("click",a);function a(o){o.currentTarget===t&&b.classList.add("is-hidden")}}const L=document.querySelector(".list-product"),I=document.querySelector(".form-search"),T=document.querySelector(".error"),B=document.querySelector("#selected");T.style.display="none";let w,y;I.addEventListener("submit",X);function X(e){e.preventDefault();const{search:t}=e.currentTarget.elements;w=t.value,localStorage.setItem("SaveFilters",JSON.stringify(w)||null),h()}I.elements.search.value=localStorage.getItem("savetext");h();B.addEventListener("change",Z);function Z(e){e.target.value;const t=e.target.value;y=t,y=t,localStorage.setItem("SaveCategpries",JSON.stringify(y)||null),h()}I.elements.selecteds.value=localStorage.getItem("saveselected");function ee(){oe().then(e=>{const t=e.map(a=>`<option value="${a}">${String(a).replace("_"," ").replace("_"," ")}</option>`).join("");B.insertAdjacentHTML("beforeend",t)}).catch(e=>{console.log(e)})}ee();async function h(){await A().then(e=>{e.results.length===0?T.style.display="flex":T.style.display="none",F(e.results),document.querySelectorAll(".basket").forEach(o=>{o.addEventListener("click",a);const s=o.dataset.id;m(s)&&(o.setAttribute("disabled","true"),o.innerHTML=`
        <svg class="basket-icon-check" width="18" height="18">
          <use href="${n}#icon-check"></use>
        </svg>
      `)});function a(o){const s=o.currentTarget,c=s.dataset.id;m(c)?(P(c),s.removeAttribute(c),s.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="${n}#icon-cart"></use>
      </svg>
    `):(x(c),s.setAttribute("disabled",!0),s.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="${n}#icon-check"></use>
      </svg>
    `)}}).catch(e=>{throw new Error(e)})}function F(e){const t=e.map(({name:a,img:o,category:s,price:c,size:i,popularity:l,is10PercentOff:u,_id:d})=>u==!0?`
              <li class="item-product" data-id="${d}">
                <div class="product-container" id="svg-discount">
                  <svg width="60" height="60" class="discount-svg">
                    <use href="${n}#icon-discount"></use>
                  </svg>
                  <img class="img-product" src="${o}" width="400" height="200">
                  <h2 class="caption-product">${a}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${s}</span></p>
                      <p class="feature">Size: <span class=feature-black>${i}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${l}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <button class="basket" data-id="${d}">
        <svg class="basket-icon" width="18" height="18">
          <use href="${n}#icon-cart"></use>
        </svg>
      </button>
                  </div>
                </div>
              </li>
              `:`
              <li class="item-product" data-id="${d}">
                <div class="product-container" id="svg-discount">
                  <img class="img-product" src="${o}" width="400" height="200">
                  <h2 class="caption-product">${a}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${String(s).replace("_"," ").replace("_"," ")}</span></p>
                      <p class="feature">Size: <span class=feature-black>${i}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${l}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <button class="basket" data-id="${d}">
        <svg class="basket-icon" width="18" height="18">
          <use href="${n}#icon-cart"></use>
        </svg>
      </button>
                  </div>
                </div>
              </li>
              `).join("");L.innerHTML="",L.insertAdjacentHTML("beforeend",t)}function te(e){const t=e.target.closest(".item-product");if(t){const a=t.dataset.id;C(a)}}L.addEventListener("click",te);async function A(e){let t=9;const a=await f.get(`https://food-boutique.b.goit.study/api/products?keyword=${w||""}&category=${y||""}&`,{params:{keywords:w||"",selectedForm:y||"",page:e||1,limit:t}});return localStorage.setItem("page",e),localStorage.getItem("page"),localStorage.setItem("limit",t),localStorage.getItem("limit"),a.data}async function se(){return(await f.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function ae(){return(await f.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function oe(){return(await f.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function ce(e){return(await f.get(`https://food-boutique.b.goit.study/api/products/${e}`)).data}async function ne(e){try{const t="https://food-boutique.b.goit.study/api/subscription",a={email:e};return(await f.post(t,a)).data}catch(t){throw console.log("Something went wrong: "+t),t}}const q=document.querySelector(".footer-form-authorization");q.addEventListener("submit",ie);function ie(e){e.preventDefault(),V(q[0].value),q.reset()}const _=document.querySelector(".discount_container"),re=2;function de(e,t,a=0){const o=a+re;return e.slice(a,o).map(({img:i,price:l,_id:u,desc:d},k)=>`<li class="card_item" data-id="${u}">
      <div class="discount-icon-container">
        <svg class="discount-icon" width="60" height="60">
          <use href="${n}#icon-discount"></use>
        </svg>
      </div>
      <div class="card-content">
        <img src="${i}" alt="${d}" class="card-img" width="105" height="105">
      </div>
      <div class="title-box">
        <h3 class="card-title">${t[k]}</h3>
        <p class="card-price">$${l}</p>
      </div>
      <button class="basket" data-id="${u}">
        <svg class="basket-icon" width="18" height="18">
          <use href="${n}#icon-cart"></use>
        </svg>
      </button>
    </li>`).join("")}async function le(){const e=await ae(),t=e.reduce((o,s)=>(s.name.length>10?o.push(s.name.slice(0,10)+"..."):o.push(s.name),o),[]);_.innerHTML=de(e,t),_.addEventListener("click",o=>{const s=o.target.closest(".card_item");if(s){const c=s.dataset.id;C(c)}}),document.querySelectorAll(".basket").forEach(o=>{o.addEventListener("click",ue);const s=o.dataset.id;m(s)&&(o.setAttribute("disabled","true"),o.innerHTML=`
        <svg class="basket-icon-check" width="18" height="18">
          <use href="${n}#icon-check"></use>
        </svg>
      `)})}le();function ue(e){const t=e.currentTarget,a=t.dataset.id;m(a)?(P(a),t.removeAttribute(a),t.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="${n}#icon-cart"></use>
      </svg>
    `):(x(a),t.setAttribute("disabled",!0),t.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="${n}#icon-check"></use>
      </svg>
    `)}const W=document.querySelector(".product-card");function pe(){se().then(e=>{ge(e)}).catch(e=>{throw new Error(e)})}function ge(e){const t=document.createElement("div");t.classList.add("product-list-container");const a=e.map(({category:o,img:s,name:c,popularity:i,size:l,_id:u})=>`<li class="product-content" data-id=${u}>
        <div class="background-img">
            <img src="${s}" alt="${c}" class="product-image" />
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
    </li>`).join("");t.innerHTML=a,W.appendChild(t)}function he(e){const t=e.target.closest(".product-content");if(t){const a=t.dataset.id;C(a)}}W.addEventListener("click",he);pe();document.querySelector(".pagination");let E=0;const me=window.innerWidth;me<=767?E=2:E=4;let M=1;function fe(e,t){const a={totalItems:e.totalPages*10,visiblePages:t,template:{page:'<a href="#" id="page-btn" class="tui-page-btn">{{page}}</a>',currentPage:'<strong id="is-selected" class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" id="arrow-btn" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span id="arrow-btn" class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" id="page-btn" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};new z("pagination",a).on("afterMove",function(s){M=s.page,A(M).then(c=>{F(c.results)}).catch(c=>{throw new Error(c)})})}A(M).then(e=>{fe(e,E)}).catch(e=>{throw new Error(e)});function ve(e){const t=e.currentTarget;console.log(t);const a=t.dataset.id;console.log(a),t.hasAttribute("disabled")?(removeFromStorageCart(a),console.log(removeFromStorageCart(a)),t.removeAttribute("disabled"),t.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="../img/icons.svg#icon-cart"></use>
      </svg>
    `):(addToStorageCart(a),console.log(addToStorageCart(a)),t.setAttribute("disabled",!0),t.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="../img/icons.svg#icon-check"></use>
      </svg>
    `)}const J=document.querySelectorAll(".svg-container");console.log(J);J.forEach(e=>{e.addEventListener("click",ve);const t=e.dataset.id;isExistInCart(t)&&(e.setAttribute("disabled",!0),e.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="../img/icons.svg#icon-check"></use>
      </svg>
    `)});export{ce as g,$ as h,ye as o,P as r,n as s};
//# sourceMappingURL=pagination-dd880a75.js.map
