import{a as m,P as Y}from"./vendor-b592f4c5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();function I(e){const t=JSON.parse(localStorage.getItem("cart"))||[],o=Array(t).flat(1/0);o.push(e),t.includes(e)||localStorage.setItem("cart",JSON.stringify(o))}function J(e){const t=JSON.parse(localStorage.getItem("cart")),o=Array(t).flat(1/0),a=o.indexOf(e);o.splice(a,1),localStorage.setItem("cart",JSON.stringify(o))}function w(e){const t=JSON.parse(localStorage.getItem("cart"));return Array(t).flat(1/0).some(a=>a===e)}const K="/fson-95-project-team_2/assets/fruitCart@2x-44c39800.png",U="/fson-95-project-team_2/assets/check-mark-35f2f86f.png",S=document.querySelector(".qty-card"),B=JSON.parse(localStorage.getItem("cart"))||[],Q=B.length>0?B.length:0;let V=Q;function $(e){S.textContent=String(e)}$(V);const n="/fson-95-project-team_2/assets/icons-b3cb9da3.svg",g=document.querySelector(".js-modal"),X=document.querySelector(".modal-content"),f=document.querySelector(".js-modal-subscription"),F=document.querySelector(".subscription-modal-content"),b=document.querySelector(".js-modal-order"),Z=document.querySelector(".subscription-order-content"),v=document.querySelector("body");function L(){v.style.overflow="hidden"}function q(){v.style.overflow="auto"}async function N(e){g.classList.toggle("is-hidden"),await re(e).then(t=>{const{img:o,name:a,desc:s,category:c,size:i,popularity:r,price:d,is10PercentOff:l}=t,T=s.split("");X.innerHTML=`<div class='image-wrap'>
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
    <p class='modal-text'>Popularity:<p class='modal-text-descr'>${r}</p>
    </div>
    </div>
    <p class='modal-descr'>${s}</p>
    </div>
    <div class='modal-floor-wrap'>
    <p class='modal-price'>$${d}</p>
    <button type='submit' class='modal-cart-btn'>Add to
        <svg class='modal-window-cart-button' width='18' height='18'>
          <use href="${n}#icon-cart"></use>
        </svg></button>
    </div>

  `,l===!0&&document.querySelector(".discount-icon-modal").classList.remove("is-hidden"),T.length>300?document.querySelector(".modal-descr").classList.add("modal-descr-fixed"):document.querySelector(".modal-descr").classList.remove("modal-descr-fixed"),window.addEventListener("keydown",H);function H(u){u.key==="Escape"&&g.classList.add("is-hidden"),v.style.overflow="auto",h()}window.onclick=function(u){u.target===g&&g.classList.add("is-hidden"),v.style.overflow="auto",h()};const j=document.querySelector(".modal-close-btn");j.addEventListener("click",_);function _(u){u.currentTarget===j&&g.classList.add("is-hidden"),v.style.overflow="auto",h()}const p=document.querySelector(".modal-cart-btn");p.addEventListener("click",D),w(e)&&(p.childNodes[0].data="Remove from",p.style.minWidth="175px");function D(){w(e)?(J(e),p.childNodes[0].data="Add to",p.style.minWidth="130px",$(S.outerText-1)):($(Number(S.outerText)+Number(1)),I(e),p.childNodes[0].data="Remove from",p.style.minWidth="175px")}g.classList.contains("is-hidden")&&(removeEventListener("click",_),removeEventListener("click",D),removeEventListener("keydown",H))})}async function ee(e){f.classList.toggle("is-hidden"),await de(e).then(s=>{F.innerHTML=`<div class='success-text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-success-header'>Thanks for subscribing for <span class='subscription-success-email'>new</span> products</h2>
      <p class='subscription-success-descr'>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      <img src="${K}" alt='vegetables' class='subscription-success-image'>
  `}).catch(s=>{s.response.status===409?F.innerHTML=`<div class='text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-failed-header'>This <span class='subscription-failed-email'>email address</span> has already been entered</h2>
      <p class='subscription-failed-descr'>You have already subscribed to our new products. Watch for offers at the mailing address.</p>
  `:console.log("SOMETHING WENT WRONG")}),window.addEventListener("keydown",t);function t(s){s.key==="Escape"&&f.classList.add("is-hidden"),q()}window.onclick=function(s){s.target===f&&f.classList.add("is-hidden"),q()};const o=document.querySelector(".modal-close-btn");o.addEventListener("click",a);function a(s){s.currentTarget===o&&f.classList.add("is-hidden"),q()}g.classList.contains("is-hidden")&&(removeEventListener("click",a),removeEventListener("keydown",t))}function ke(){b.classList.toggle("is-hidden"),Z.innerHTML=`
  <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='20' height='20'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
    <img src='${U}' alt='order successful' class='order-success-img'>
    <h2 class='order-success-status'>Order success</h2>
    <p class='order-success-descr'>Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness.</p>
  `,window.addEventListener("keydown",e);function e(a){a.key==="Escape"&&b.classList.add("is-hidden")}window.onclick=function(a){a.target===b&&b.classList.add("is-hidden")};const t=document.querySelector(".modal-close-btn");t.addEventListener("click",o);function o(a){a.currentTarget===t&&b.classList.add("is-hidden")}}const E=document.querySelector(".list-product"),A=document.querySelector(".form-search"),x=document.querySelector(".error"),z=document.querySelector("#selected");x.style.display="none";let k,y;A.addEventListener("submit",te);function te(e){e.preventDefault();const{search:t}=e.currentTarget.elements;k=t.value,localStorage.setItem("SaveFilters",JSON.stringify(k)||null),h()}A.elements.search.value=localStorage.getItem("savetext");h();z.addEventListener("change",se);function se(e){e.target.value;const t=e.target.value;y=t,y=t,localStorage.setItem("SaveCategpries",JSON.stringify(y)||null),h()}A.elements.selecteds.value=localStorage.getItem("saveselected");function oe(){ie().then(e=>{const t=e.map(o=>`<option value="${o}">${String(o).replace("_"," ").replace("_"," ")}</option>`).join("");z.insertAdjacentHTML("beforeend",t)}).catch(e=>{console.log(e)})}oe();async function h(){await O().then(e=>{e.results.length===0?x.style.display="flex":x.style.display="none",G(e.results),document.querySelectorAll(".basket").forEach(a=>{a.addEventListener("click",o);const s=a.dataset.id;w(s)&&(a.setAttribute("disabled","true"),a.innerHTML=`
        <svg class="basket-icon-check" width="18" height="18">
          <use href="${n}#icon-check"></use>
        </svg>
      `)});function o(a){const s=a.currentTarget,c=s.dataset.id;w(c)?(J(c),s.removeAttribute(c),s.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="${n}#icon-cart"></use>
      </svg>
    `):(I(c),s.setAttribute("disabled",!0),s.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="${n}#icon-check"></use>
      </svg>
    `,$(Number(S.outerText)+Number(1)))}}).catch(e=>{throw new Error(e)})}function G(e){const t=e.map(({name:o,img:a,category:s,price:c,size:i,popularity:r,is10PercentOff:d,_id:l})=>d==!0?`
              <li class="item-product" data-id="${l}">
                <div class="product-container" id="svg-discount">
                  <svg width="60" height="60" class="discount-svg">
                    <use href="${n}#icon-discount"></use>
                  </svg>
                  <img class="img-product" src="${a}" width="400" height="200">
                  <h2 class="caption-product">${o}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${s}</span></p>
                      <p class="feature">Size: <span class=feature-black>${i}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${r}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <button class="basket" data-id="${l}">
        <svg class="basket-icon" width="18" height="18">
          <use href="${n}#icon-cart"></use>
        </svg>
      </button>
                  </div>
                </div>
              </li>
              `:`
              <li class="item-product" data-id="${l}">
                <div class="product-container" id="svg-discount">
                  <img class="img-product" src="${a}" width="400" height="200">
                  <h2 class="caption-product">${o}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${String(s).replace("_"," ").replace("_"," ")}</span></p>
                      <p class="feature">Size: <span class=feature-black>${i}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${r}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <button class="basket" data-id="${l}">
        <svg class="basket-icon" width="18" height="18">
          <use href="${n}#icon-cart"></use>
        </svg>
      </button>
                  </div>
                </div>
              </li>
              `).join("");E.innerHTML="",E.insertAdjacentHTML("beforeend",t)}function ae(e){const t=e.target.closest(".item-product");if(t){const o=t.dataset.id;N(o).then(L)}}E.addEventListener("click",ae);async function O(e,t){const o=await m.get(`https://food-boutique.b.goit.study/api/products?keyword=${k||""}&category=${y||""}&`,{params:{keywords:k||"",selectedForm:y||"",page:e||1,limit:t||6}});return localStorage.setItem("page",e),localStorage.getItem("page"),localStorage.setItem("limit",t),localStorage.getItem("limit"),o.data}async function ce(){return(await m.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function ne(){return(await m.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function ie(){return(await m.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function re(e){return(await m.get(`https://food-boutique.b.goit.study/api/products/${e}`)).data}async function de(e){try{const t="https://food-boutique.b.goit.study/api/subscription",o={email:e};return(await m.post(t,o)).data}catch(t){throw console.log("Something went wrong: "+t),t}}const M=document.querySelector(".footer-form-authorization");M.addEventListener("submit",le);function le(e){e.preventDefault(),ee(M[0].value).then(L),M.reset()}const W=document.querySelector(".discount_container"),ue=2;function pe(e,t,o=0){const a=o+ue;return e.slice(o,a).map(({img:i,price:r,_id:d,desc:l},T)=>`<li class="card_item" data-id="${d}">
      <div class="discount-icon-container">
        <svg class="discount-icon" width="60" height="60">
          <use href="${n}#icon-discount"></use>
        </svg>
      </div>
      <div class="card-content">
        <img src="${i}" alt="${l}" class="card-img" width="105" height="105">
      </div>
      <div class="title-box">
        <h3 class="card-title">${t[T]}</h3>
        <p class="card-price">$${r}</p>
      </div>
      <button class="basket" data-id="${d}">
        <svg class="basket-icon" width="18" height="18">
          <use href="${n}#icon-cart"></use>
        </svg>
      </button>
    </li>`).join("")}async function ge(){const e=await ne(),t=e.reduce((a,s)=>(s.name.length>10?a.push(s.name.slice(0,10)+"..."):a.push(s.name),a),[]);W.innerHTML=pe(e,t),W.addEventListener("click",a=>{const s=a.target.closest(".card_item");if(s){const c=s.dataset.id;N(c).then(L)}}),document.querySelectorAll(".basket").forEach(a=>{a.addEventListener("click",he);const s=a.dataset.id;w(s)&&(a.setAttribute("disabled","true"),a.innerHTML=`
        <svg class="basket-icon-check" width="18" height="18">
          <use href="${n}#icon-check"></use>
        </svg>
      `,I(s),$(Number(S.outerText)+Number(1)))})}ge();function he(e){e.target.closest(".card_item").dataset.id}const R=document.querySelector(".product-card");function me(){ce().then(e=>{fe(e)}).catch(e=>{throw new Error(e)})}function fe(e){const t=document.createElement("div");t.classList.add("product-list-container");const o=e.map(({category:a,img:s,name:c,popularity:i,size:r,_id:d})=>`<li class="product-content" data-id=${d}>
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
                    <span class="span-category">Size:</span>${r}
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
    </li>`).join("");t.innerHTML=o,R.appendChild(t)}function be(e){const t=e.target.closest(".product-content");if(t){const o=t.dataset.id;N(o).then(L)}}R.addEventListener("click",be);me();document.querySelector(".pagination");let P=0;const ve=window.innerWidth;ve<=767?P=2:P=4;let C=1;function ye(e,t){const o={totalItems:e.totalPages*10,visiblePages:t,template:{page:'<a href="#" id="page-btn" class="tui-page-btn">{{page}}</a>',currentPage:'<strong id="is-selected" class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" id="arrow-btn" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span id="arrow-btn" class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" id="page-btn" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};new Y("pagination",o).on("afterMove",function(s){C=s.page,O(C).then(c=>{G(c.results)}).catch(c=>{throw new Error(c)})})}O(C).then(e=>{ye(e,P)}).catch(e=>{throw new Error(e)});function we(e){const t=e.currentTarget;console.log(t);const o=t.dataset.id;console.log(o),t.hasAttribute("disabled")?(removeFromStorageCart(o),console.log(removeFromStorageCart(o)),t.removeAttribute("disabled"),t.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="../img/icons.svg#icon-cart"></use>
      </svg>
    `):(addToStorageCart(o),console.log(addToStorageCart(o)),t.setAttribute("disabled",!0),t.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="../img/icons.svg#icon-check"></use>
      </svg>
    `)}const Se=document.querySelectorAll(".svg-container");Se.forEach(e=>{e.addEventListener("click",we);const t=e.dataset.id;isExistInCart(t)&&(e.setAttribute("disabled",!0),e.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="../img/icons.svg#icon-check"></use>
      </svg>
    `)});export{re as g,$ as h,ke as o,J as r,n as s};
//# sourceMappingURL=pagination-7e9dca49.js.map
