import{a as h,P as z}from"./vendor-b592f4c5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();function _(e){const t=JSON.parse(localStorage.getItem("cart"))||[],s=Array(t).flat(1/0);s.push(e),t.includes(e)||localStorage.setItem("cart",JSON.stringify(s))}function D(e){const t=JSON.parse(localStorage.getItem("cart")),s=Array(t).flat(1/0),a=s.indexOf(e);s.splice(a,1),localStorage.setItem("cart",JSON.stringify(s))}function b(e){const t=JSON.parse(localStorage.getItem("cart"));return Array(t).flat(1/0).some(a=>a===e)}const G="/fson-95-project-team_2/assets/fruitCart@2x-44c39800.png",R="/fson-95-project-team_2/assets/check-mark-35f2f86f.png",S=document.querySelector(".qty-card"),Y=JSON.parse(localStorage.getItem("cart"))||[];let K=Y.length;function $(e){S.textContent=String(e)}$(K);const n="/fson-95-project-team_2/assets/icons-b3cb9da3.svg",g=document.querySelector(".js-modal"),U=document.querySelector(".modal-content"),m=document.querySelector(".js-modal-subscription"),H=document.querySelector(".subscription-modal-content"),f=document.querySelector(".js-modal-order"),Q=document.querySelector(".subscription-order-content");async function x(e){g.classList.toggle("is-hidden"),await ce(e).then(t=>{const{img:s,name:a,desc:o,category:c,size:i,popularity:d,price:l,is10PercentOff:u}=t,w=o.split("");if(U.innerHTML=`<div class='image-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href="${n}#icon-close-btn"></use>
        </svg>
      </button><div class='discount-icon-wrap'>
    <img src='${s}' alt='${o}' class='modal-img'>
          <svg class="discount-icon-modal is-hidden" width="60" height="60">
          <use href="${n}#icon-discount"></use>
          </div>
    </div>
    <div class='modal-descr-together'>
    <div class='modal-descr-container'>
    <h2 class='modal-name'>${a}</h2>
    <div class='modal-text-wrapper'>
    <p class='modal-text'>Category:<p class='modal-text-descr'>${String(c).replace("_"," ").replace("&","").replace("_"," ")}</p>
    <p class='modal-text'>Size:<p class='modal-text-descr'>${i}</p>
    <p class='modal-text'>Popularity:<p class='modal-text-descr'>${d}</p>
    </div>
    </div>
    <p class='modal-descr'>${o}</p>
    </div>
    <div class='modal-floor-wrap'>
    <p class='modal-price'>$${l}</p>
    <button type='submit' class='modal-cart-btn'>Add to
        <svg class='modal-window-cart-button' width='18' height='18'>
          <use href="${n}#icon-cart"></use>
        </svg></button>
    </div>

  `,console.log(u),u===!0){const r=document.querySelector(".discount-icon-modal");console.log(r),r.classList.remove("is-hidden")}w.length>300?document.querySelector(".modal-descr").classList.add("modal-descr-fixed"):document.querySelector(".modal-descr").classList.remove("modal-descr-fixed"),window.addEventListener("keydown",I);function I(r){r.key==="Escape"&&g.classList.add("is-hidden")}window.onclick=function(r){r.target===g&&g.classList.add("is-hidden")};const N=document.querySelector(".modal-close-btn");N.addEventListener("click",A);function A(r){r.currentTarget===N&&g.classList.add("is-hidden")}const p=document.querySelector(".modal-cart-btn");p.addEventListener("click",O),b(e)&&(p.childNodes[0].data="Remove from",p.style.minWidth="175px");function O(){b(e)?(D(e),p.childNodes[0].data="Add to",p.style.minWidth="130px",$(S.outerText-1)):($(Number(S.outerText)+Number(1)),_(e),p.childNodes[0].data="Remove from",p.style.minWidth="175px")}g.classList.contains("is-hidden")&&(removeEventListener("click",A),removeEventListener("click",O),removeEventListener("keydown",I))})}async function V(e){m.classList.toggle("is-hidden"),await ne(e).then(o=>{H.innerHTML=`<div class='success-text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-success-header'>Thanks for subscribing for <span class='subscription-success-email'>new</span> products</h2>
      <p class='subscription-success-descr'>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      <img src="${G}" alt='vegetables' class='subscription-success-image'>
  `}).catch(o=>{o.response.status===409?H.innerHTML=`<div class='text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-failed-header'>This <span class='subscription-failed-email'>email address</span> has already been entered</h2>
      <p class='subscription-failed-descr'>You have already subscribed to our new products. Watch for offers at the mailing address.</p>
  `:console.log("SOMETHING WENT WRONG")}),window.addEventListener("keydown",t);function t(o){o.key==="Escape"&&m.classList.add("is-hidden")}window.onclick=function(o){o.target===m&&m.classList.add("is-hidden")};const s=document.querySelector(".modal-close-btn");s.addEventListener("click",a);function a(o){o.currentTarget===s&&m.classList.add("is-hidden")}g.classList.contains("is-hidden")&&(removeEventListener("click",a),removeEventListener("keydown",t))}function ye(){f.classList.toggle("is-hidden"),Q.innerHTML=`
  <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='20' height='20'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
    <img src='${R}' alt='order successful' class='order-success-img'>
    <h2 class='order-success-status'>Order success</h2>
    <p class='order-success-descr'>Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness.</p>
  `,window.addEventListener("keydown",e);function e(a){a.key==="Escape"&&f.classList.add("is-hidden")}window.onclick=function(a){a.target===f&&f.classList.add("is-hidden")};const t=document.querySelector(".modal-close-btn");t.addEventListener("click",s);function s(a){a.currentTarget===t&&f.classList.add("is-hidden")}}const k=document.querySelector(".list-product"),M=document.querySelector(".form-search"),L=document.querySelector(".error"),B=document.querySelector("#selected");L.style.display="none";let y,v;M.addEventListener("submit",X);function X(e){e.preventDefault();const{search:t}=e.currentTarget.elements;y=t.value,localStorage.setItem("SaveFilters",JSON.stringify(y)||null),P()}M.elements.search.value=localStorage.getItem("savetext");P();B.addEventListener("change",Z);function Z(e){e.target.value;const t=e.target.value;v=t,v=t,localStorage.setItem("SaveCategpries",JSON.stringify(v)||null),P()}M.elements.selecteds.value=localStorage.getItem("saveselected");function ee(){ae().then(e=>{const t=e.map(s=>`<option value="${s}">${String(s).replace("_"," ").replace("_"," ")}</option>`).join("");B.insertAdjacentHTML("beforeend",t)}).catch(e=>{console.log(e)})}ee();function P(){C().then(e=>{e.results.length===0?L.style.display="flex":L.style.display="none",F(e.results)}).catch(e=>{throw new Error(e)})}function F(e){const t=e.map(({name:s,img:a,category:o,price:c,size:i,popularity:d,is10PercentOff:l,_id:u})=>l==!0?`
              <li class="item-product" data-id="${u}">
                <div class="product-container" id="svg-discount">
                  <svg width="60" height="60" class="discount-svg">
                    <use href="${n}#icon-discount"></use>
                  </svg>
                  <img class="img-product" src="${a}" width="400" height="200">
                  <h2 class="caption-product">${s}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${o}</span></p>
                      <p class="feature">Size: <span class=feature-black>${i}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${d}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                            <use href="${n}#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `:`
              <li class="item-product" data-id="${u}">
                <div class="product-container" id="svg-discount">
                  <img class="img-product" src="${a}" width="400" height="200">
                  <h2 class="caption-product">${s}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${String(o).replace("_"," ").replace("_"," ")}</span></p>
                      <p class="feature">Size: <span class=feature-black>${i}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${d}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <div class="svg-container">
                          <svg class="svg" width="18" height="18">
                            <use href="${n}#icon-cart"></use>
                          </svg>
                      </div>
                  </div>
                </div>
              </li>
              `).join("");k.innerHTML="",k.insertAdjacentHTML("beforeend",t)}function te(e){const t=e.target.closest(".item-product");if(t){const s=t.dataset.id;x(s)}}k.addEventListener("click",te);async function C(e){let t=9;const s=await h.get(`https://food-boutique.b.goit.study/api/products?keyword=${y||""}&category=${v||""}&`,{params:{keywords:y||"",selectedForm:v||"",page:e||1,limit:t}});return localStorage.setItem("page",e),localStorage.getItem("page"),localStorage.setItem("limit",t),localStorage.getItem("limit"),s.data}async function se(){return(await h.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function oe(){return(await h.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function ae(){return(await h.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function ce(e){return(await h.get(`https://food-boutique.b.goit.study/api/products/${e}`)).data}async function ne(e){try{const t="https://food-boutique.b.goit.study/api/subscription",s={email:e};return(await h.post(t,s)).data}catch(t){throw console.log("Something went wrong: "+t),t}}const q=document.querySelector(".footer-form-authorization");q.addEventListener("submit",ie);function ie(e){e.preventDefault(),V(q[0].value),q.reset()}const j=document.querySelector(".discount_container"),re=2;function de(e,t,s=0){const a=s+re;return e.slice(s,a).map(({img:i,price:d,_id:l,desc:u},w)=>`<li class="card_item" data-id="${l}">
      <div class="discount-icon-container">
        <svg class="discount-icon" width="60" height="60">
          <use href="${n}#icon-discount"></use>
        </svg>
      </div>
      <div class="card-content">
        <img src="${i}" alt="${u}" class="card-img" width="105" height="105">
      </div>
      <div class="title-box">
        <h3 class="card-title">${t[w]}</h3>
        <p class="card-price">$${d}</p>
      </div>
      <button class="basket" data-id="${l}">
        <svg class="basket-icon" width="18" height="18">
          <use href="${n}#icon-cart"></use>
        </svg>
      </button>
    </li>`).join("")}async function le(){const e=await oe(),t=e.reduce((a,o)=>(o.name.length>10?a.push(o.name.slice(0,10)+"..."):a.push(o.name),a),[]);j.innerHTML=de(e,t),j.addEventListener("click",a=>{const o=a.target.closest(".card_item");if(o){const c=o.dataset.id;x(c)}}),document.querySelectorAll(".basket").forEach(a=>{a.addEventListener("click",ue);const o=a.dataset.id;b(o)&&(a.setAttribute("disabled","true"),a.innerHTML=`
        <svg class="basket-icon-check" width="18" height="18">
          <use href="${n}#icon-check"></use>
        </svg>
      `)})}le();function ue(e){const t=e.currentTarget,s=t.dataset.id;b(s)?(D(s),t.removeAttribute(s),t.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="${n}#icon-cart"></use>
      </svg>
    `):(_(s),t.setAttribute("disabled",!0),t.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="${n}#icon-check"></use>
      </svg>
    `)}const W=document.querySelector(".product-card");function pe(){se().then(e=>{ge(e)}).catch(e=>{throw new Error(e)})}function ge(e){const t=document.createElement("div");t.classList.add("product-list-container");const s=e.map(({category:a,img:o,name:c,popularity:i,size:d,_id:l})=>`<li class="product-content" data-id=${l}>
        <div class="background-img">
            <img src="${o}" alt="${c}" class="product-image" />
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
    </li>`).join("");t.innerHTML=s,W.appendChild(t)}function he(e){const t=e.target.closest(".product-content");if(t){const s=t.dataset.id;x(s)}}W.addEventListener("click",he);pe();document.querySelector(".pagination");let T=0;const me=window.innerWidth;me<=767?T=2:T=4;let E=1;function fe(e,t){const s={totalItems:e.totalPages*10,visiblePages:t,template:{page:'<a href="#" id="page-btn" class="tui-page-btn">{{page}}</a>',currentPage:'<strong id="is-selected" class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" id="arrow-btn" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span id="arrow-btn" class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" id="page-btn" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};new z("pagination",s).on("afterMove",function(o){E=o.page,C(E).then(c=>{F(c.results)}).catch(c=>{throw new Error(c)})})}C(E).then(e=>{fe(e,T)}).catch(e=>{throw new Error(e)});function ve(e){const t=e.currentTarget;console.log(t);const s=t.dataset.id;console.log(s),t.hasAttribute("disabled")?(removeFromStorageCart(s),console.log(removeFromStorageCart(s)),t.removeAttribute("disabled"),t.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="../img/icons.svg#icon-cart"></use>
      </svg>
    `):(addToStorageCart(s),console.log(addToStorageCart(s)),t.setAttribute("disabled",!0),t.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="../img/icons.svg#icon-check"></use>
      </svg>
    `)}const J=document.querySelectorAll(".svg-container");console.log(J);J.forEach(e=>{e.addEventListener("click",ve);const t=e.dataset.id;isExistInCart(t)&&(e.setAttribute("disabled",!0),e.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="../img/icons.svg#icon-check"></use>
      </svg>
    `)});export{ce as g,$ as h,ye as o,D as r};
//# sourceMappingURL=pagination-2800433d.js.map
