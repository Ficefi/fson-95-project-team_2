import{a as f,P as R}from"./vendor-b592f4c5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();function I(e){const t=JSON.parse(localStorage.getItem("cart"))||[],o=Array(t).flat(1/0);o.push(e),t.includes(e)||localStorage.setItem("cart",JSON.stringify(o))}function C(e){const t=JSON.parse(localStorage.getItem("cart")),o=Array(t).flat(1/0),a=o.indexOf(e);o.splice(a,1),localStorage.setItem("cart",JSON.stringify(o))}function m(e){const t=JSON.parse(localStorage.getItem("cart"));return Array(t).flat(1/0).some(a=>a===e)}const Y="/fson-95-project-team_2/assets/fruitCart@2x-44c39800.png",K="/fson-95-project-team_2/assets/check-mark-35f2f86f.png",L=document.querySelector(".qty-card"),U=JSON.parse(localStorage.getItem("cart"))||[];let V=U.length;function q(e){L.textContent=String(e)}q(V);const n="/fson-95-project-team_2/assets/icons-b3cb9da3.svg",g=document.querySelector(".js-modal"),Q=document.querySelector(".modal-content"),v=document.querySelector(".js-modal-subscription"),_=document.querySelector(".subscription-modal-content"),b=document.querySelector(".js-modal-order"),X=document.querySelector(".subscription-order-content");async function N(e){g.classList.toggle("is-hidden"),await ie(e).then(t=>{const{img:o,name:a,desc:s,category:c,size:i,popularity:d,price:l,is10PercentOff:r}=t,k=s.split("");Q.innerHTML=`<div class='image-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href="${n}#icon-close-btn"></use>
        </svg>
      </button><div class='discount-icon-wrap'>
    <img src='${o}' alt='${s}' class='modal-img'>
          <svg class="discount-icon-modal is-hidden" width="60" height="60">
          <use href="${n}#icon-discount"></use>
          </div>
    </div>
    <div class='modal-descr-together'>
    <div class='modal-descr-container'>
    <h2 class='modal-name'>${a}</h2>
    <div class='modal-text-wrapper'>
    <p class='modal-text'>Category:<p class='modal-text-descr'>${String(c).replace("_"," ").replace("_"," ")}</p>
    <p class='modal-text'>Size:<p class='modal-text-descr'>${i}</p>
    <p class='modal-text'>Popularity:<p class='modal-text-descr'>${d}</p>
    </div>
    </div>
    <p class='modal-descr'>${s}</p>
    </div>
    <div class='modal-floor-wrap'>
    <p class='modal-price'>$${l}</p>
    <button type='submit' class='modal-cart-btn'>Add to
        <svg class='modal-window-cart-button' width='18' height='18'>
          <use href="${n}#icon-cart"></use>
        </svg></button>
    </div>

  `,console.log(r),r===!0&&document.querySelector(".discount-icon-modal").classList.remove("is-hidden"),k.length>300?document.querySelector(".modal-descr").classList.add("modal-descr-fixed"):document.querySelector(".modal-descr").classList.remove("modal-descr-fixed"),window.addEventListener("keydown",H);function H(u){u.key==="Escape"&&g.classList.add("is-hidden"),h()}window.onclick=function(u){u.target===g&&g.classList.add("is-hidden"),h()};const j=document.querySelector(".modal-close-btn");j.addEventListener("click",D);function D(u){u.currentTarget===j&&g.classList.add("is-hidden"),h()}const p=document.querySelector(".modal-cart-btn");p.addEventListener("click",W),m(e)&&(p.childNodes[0].data="Remove from",p.style.minWidth="175px");function W(){m(e)?(C(e),p.childNodes[0].data="Add to",p.style.minWidth="130px",q(L.outerText-1)):(q(Number(L.outerText)+Number(1)),I(e),p.childNodes[0].data="Remove from",p.style.minWidth="175px")}g.classList.contains("is-hidden")&&(removeEventListener("click",D),removeEventListener("click",W),removeEventListener("keydown",H))})}async function Z(e){v.classList.toggle("is-hidden"),await re(e).then(s=>{_.innerHTML=`<div class='success-text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-success-header'>Thanks for subscribing for <span class='subscription-success-email'>new</span> products</h2>
      <p class='subscription-success-descr'>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      <img src="${Y}" alt='vegetables' class='subscription-success-image'>
  `}).catch(s=>{s.response.status===409?_.innerHTML=`<div class='text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-failed-header'>This <span class='subscription-failed-email'>email address</span> has already been entered</h2>
      <p class='subscription-failed-descr'>You have already subscribed to our new products. Watch for offers at the mailing address.</p>
  `:console.log("SOMETHING WENT WRONG")}),window.addEventListener("keydown",t);function t(s){s.key==="Escape"&&v.classList.add("is-hidden")}window.onclick=function(s){s.target===v&&v.classList.add("is-hidden")};const o=document.querySelector(".modal-close-btn");o.addEventListener("click",a);function a(s){s.currentTarget===o&&v.classList.add("is-hidden")}g.classList.contains("is-hidden")&&(removeEventListener("click",a),removeEventListener("keydown",t))}function we(){b.classList.toggle("is-hidden"),X.innerHTML=`
  <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='20' height='20'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
    <img src='${K}' alt='order successful' class='order-success-img'>
    <h2 class='order-success-status'>Order success</h2>
    <p class='order-success-descr'>Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness.</p>
  `,window.addEventListener("keydown",e);function e(a){a.key==="Escape"&&b.classList.add("is-hidden")}window.onclick=function(a){a.target===b&&b.classList.add("is-hidden")};const t=document.querySelector(".modal-close-btn");t.addEventListener("click",o);function o(a){a.currentTarget===t&&b.classList.add("is-hidden")}}const E=document.querySelector(".list-product"),A=document.querySelector(".form-search"),T=document.querySelector(".error"),J=document.querySelector("#selected");T.style.display="none";let S,y;A.addEventListener("submit",ee);const B=window.innerWidth;let $;B<=767?$=6:B<=1239?$=8:$=9;function ee(e){e.preventDefault();const{search:t}=e.currentTarget.elements;S=t.value,localStorage.setItem("SaveFilters",JSON.stringify(S)||null),h()}A.elements.search.value=localStorage.getItem("savetext");h();J.addEventListener("change",te);function te(e){e.target.value;const t=e.target.value;y=t,y=t,localStorage.setItem("SaveCategpries",JSON.stringify(y)||null),h()}A.elements.selecteds.value=localStorage.getItem("saveselected");function se(){ne().then(e=>{const t=e.map(o=>`<option value="${o}">${String(o).replace("_"," ").replace("_"," ")}</option>`).join("");J.insertAdjacentHTML("beforeend",t)}).catch(e=>{console.log(e)})}se();async function h(){await O(1,$).then(e=>{e.results.length===0?T.style.display="flex":T.style.display="none",z(e.results),document.querySelectorAll(".basket").forEach(a=>{a.addEventListener("click",o);const s=a.dataset.id;m(s)&&(a.setAttribute("disabled","true"),a.innerHTML=`
        <svg class="basket-icon-check" width="18" height="18">
          <use href="${n}#icon-check"></use>
        </svg>
      `)});function o(a){const s=a.currentTarget,c=s.dataset.id;m(c)?(C(c),s.removeAttribute(c),s.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="${n}#icon-cart"></use>
      </svg>
    `):(I(c),s.setAttribute("disabled",!0),s.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="${n}#icon-check"></use>
      </svg>
    `)}}).catch(e=>{throw new Error(e)})}function z(e){const t=e.map(({name:o,img:a,category:s,price:c,size:i,popularity:d,is10PercentOff:l,_id:r})=>l==!0?`
              <li class="item-product" data-id="${r}">
                <div class="product-container" id="svg-discount">
                  <svg width="60" height="60" class="discount-svg">
                    <use href="${n}#icon-discount"></use>
                  </svg>
                  <img class="img-product" src="${a}" width="400" height="200">
                  <h2 class="caption-product">${o}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${s}</span></p>
                      <p class="feature">Size: <span class=feature-black>${i}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${d}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <button class="basket" data-id="${r}">
                          <svg class="svg" width="18" height="18">
                            <use href="${n}#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                </div>
              </li>
              `:`
              <li class="item-product" data-id="${r}">
                <div class="product-container" id="svg-discount">
                  <img class="img-product" src="${a}" width="400" height="200">
                  <h2 class="caption-product">${o}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${String(s).replace("_"," ").replace("_"," ")}</span></p>
                      <p class="feature">Size: <span class=feature-black>${i}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${d}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <button class="basket" data-id="${r}">
                          <svg class="svg" width="18" height="18">
                            <use href="${n}#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                </div>
              </li>
              `).join("");E.innerHTML="",E.insertAdjacentHTML("beforeend",t)}function ae(e){const t=e.target.closest(".item-product");if(t){const o=t.dataset.id;N(o)}}E.addEventListener("click",ae);async function O(e,t){const o=await f.get(`https://food-boutique.b.goit.study/api/products?keyword=${S||""}&category=${y||""}&`,{params:{keywords:S||"",selectedForm:y||"",page:e||1,limit:t||6}});return localStorage.setItem("page",e),localStorage.getItem("page"),localStorage.setItem("limit",t),localStorage.getItem("limit"),o.data}async function oe(){return(await f.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function ce(){return(await f.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function ne(){return(await f.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function ie(e){return(await f.get(`https://food-boutique.b.goit.study/api/products/${e}`)).data}async function re(e){try{const t="https://food-boutique.b.goit.study/api/subscription",o={email:e};return(await f.post(t,o)).data}catch(t){throw console.log("Something went wrong: "+t),t}}const M=document.querySelector(".footer-form-authorization");M.addEventListener("submit",de);function de(e){e.preventDefault(),Z(M[0].value),M.reset()}const F=document.querySelector(".discount_container"),le=2;function ue(e,t,o=0){const a=o+le;return e.slice(o,a).map(({img:i,price:d,_id:l,desc:r},k)=>`<li class="card_item" data-id="${l}">
      <div class="discount-icon-container">
        <svg class="discount-icon" width="60" height="60">
          <use href="${n}#icon-discount"></use>
        </svg>
      </div>
      <div class="card-content">
        <img src="${i}" alt="${r}" class="card-img" width="105" height="105">
      </div>
      <div class="title-box">
        <h3 class="card-title">${t[k]}</h3>
        <p class="card-price">$${d}</p>
      </div>
      <button class="basket" data-id="${l}">
        <svg class="basket-icon" width="18" height="18">
          <use href="${n}#icon-cart"></use>
        </svg>
      </button>
    </li>`).join("")}async function pe(){const e=await ce(),t=e.reduce((a,s)=>(s.name.length>10?a.push(s.name.slice(0,10)+"..."):a.push(s.name),a),[]);F.innerHTML=ue(e,t),F.addEventListener("click",a=>{const s=a.target.closest(".card_item");if(s){const c=s.dataset.id;N(c)}}),document.querySelectorAll(".basket").forEach(a=>{a.addEventListener("click",ge);const s=a.dataset.id;m(s)&&(a.setAttribute("disabled","true"),a.innerHTML=`
        <svg class="basket-icon-check" width="18" height="18">
          <use href="${n}#icon-check"></use>
        </svg>
      `)})}pe();function ge(e){const t=e.target,o=t.dataset.id;m(o)?(C(o),t.removeAttribute(o),t.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="${n}#icon-cart"></use>
      </svg>
    `):(I(o),t.setAttribute("disabled",!0),t.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="${n}#icon-check"></use>
      </svg>
    `)}const G=document.querySelector(".product-card");function he(){oe().then(e=>{me(e)}).catch(e=>{throw new Error(e)})}function me(e){const t=document.createElement("div");t.classList.add("product-list-container");const o=e.map(({category:a,img:s,name:c,popularity:i,size:d,_id:l})=>`<li class="product-content" data-id=${l}>
        <div class="background-img">
            <img src="${s}" alt="${c}" class="product-image" />
        </div>
        <div class="product-txt-bar">
            <h3 class="product-title">${c}</h3>
            <p class="product-category">
                <span class="span-category">Category:</span>${String(a).replace("_"," ")}
            </p>
            <div class="product-txt-two">
                <p class="product-size">
                    <span class="span-category">Size:</span>${d}
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
    </li>`).join("");t.innerHTML=o,G.appendChild(t)}function fe(e){const t=e.target.closest(".product-content");if(t){const o=t.dataset.id;N(o)}}G.addEventListener("click",fe);he();document.querySelector(".pagination");let w=0;const x=window.innerWidth;function ve(e){return e<=767?2:4}setInterval(()=>{console.log()},1e3);x<=767?w=6:x<=1239?w=8:w=9;let P=1;function be(e){const t={totalItems:e.totalPages*10,visiblePages:ve(x),template:{page:'<a href="#" id="page-btn" class="tui-page-btn">{{page}}</a>',currentPage:'<strong id="is-selected" class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" id="arrow-btn" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span id="arrow-btn" class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" id="page-btn" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};new R("pagination",t).on("afterMove",function(a){P=a.page,O(P,w).then(s=>{z(s.results)}).catch(s=>{throw new Error(s)})})}O(P,w).then(e=>{be(e)}).catch(e=>{throw new Error(e)});export{ie as g,q as h,we as o,C as r,n as s};
//# sourceMappingURL=pagination-98dc18eb.js.map
