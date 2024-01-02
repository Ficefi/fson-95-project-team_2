import{a as f,P as R}from"./vendor-b592f4c5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerpolicy&&(c.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?c.credentials="include":t.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(t){if(t.ep)return;t.ep=!0;const c=o(t);fetch(t.href,c)}})();function k(e){const s=JSON.parse(localStorage.getItem("cart"))||[],o=Array(s).flat(1/0);o.push(e),s.includes(e)||localStorage.setItem("cart",JSON.stringify(o))}function L(e){const s=JSON.parse(localStorage.getItem("cart")),o=Array(s).flat(1/0),a=o.indexOf(e);o.splice(a,1),localStorage.setItem("cart",JSON.stringify(o))}function r(e){const s=JSON.parse(localStorage.getItem("cart"));return Array(s).flat(1/0).some(a=>a===e)}const Y="/fson-95-project-team_2/assets/fruitCart@2x-44c39800.png",K="/fson-95-project-team_2/assets/check-mark-35f2f86f.png",E=document.querySelector(".qty-card"),U=JSON.parse(localStorage.getItem("cart"))||[];let V=U.length;function M(e){E.textContent=String(e)}M(V);const n="/fson-95-project-team_2/assets/icons-b3cb9da3.svg",h=document.querySelector(".js-modal"),Q=document.querySelector(".modal-content"),b=document.querySelector(".js-modal-subscription"),W=document.querySelector(".subscription-modal-content"),v=document.querySelector(".js-modal-order"),X=document.querySelector(".subscription-order-content");async function N(e){h.classList.toggle("is-hidden"),await ie(e).then(s=>{const{img:o,name:a,desc:t,category:c,size:i,popularity:u,price:d,is10PercentOff:l}=s,q=t.split("");Q.innerHTML=`<div class='image-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href="${n}#icon-close-btn"></use>
        </svg>
      </button><div class='discount-icon-wrap'>
    <img src='${o}' alt='${t}' class='modal-img'>
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
    <p class='modal-text'>Popularity:<p class='modal-text-descr'>${u}</p>
    </div>
    </div>
    <p class='modal-descr'>${t}</p>
    </div>
    <div class='modal-floor-wrap'>
    <p class='modal-price'>$${d}</p>
    <button type='submit' class='modal-cart-btn'>Add to
        <svg class='modal-window-cart-button' width='18' height='18'>
          <use href="${n}#icon-cart"></use>
        </svg></button>
    </div>

  `,console.log(l),l===!0&&document.querySelector(".discount-icon-modal").classList.remove("is-hidden"),q.length>300?document.querySelector(".modal-descr").classList.add("modal-descr-fixed"):document.querySelector(".modal-descr").classList.remove("modal-descr-fixed"),window.addEventListener("keydown",O);function O(p){p.key==="Escape"&&h.classList.add("is-hidden"),m()}window.onclick=function(p){p.target===h&&h.classList.add("is-hidden"),m()};const _=document.querySelector(".modal-close-btn");_.addEventListener("click",j);function j(p){p.currentTarget===_&&h.classList.add("is-hidden"),m()}const g=document.querySelector(".modal-cart-btn");g.addEventListener("click",D),r(e)&&(g.childNodes[0].data="Remove from",g.style.minWidth="175px");function D(){r(e)?(L(e),g.childNodes[0].data="Add to",g.style.minWidth="130px",M(E.outerText-1)):(M(Number(E.outerText)+Number(1)),k(e),g.childNodes[0].data="Remove from",g.style.minWidth="175px")}h.classList.contains("is-hidden")&&(removeEventListener("click",j),removeEventListener("click",D),removeEventListener("keydown",O))})}async function Z(e){b.classList.toggle("is-hidden"),await re(e).then(t=>{W.innerHTML=`<div class='success-text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-success-header'>Thanks for subscribing for <span class='subscription-success-email'>new</span> products</h2>
      <p class='subscription-success-descr'>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      <img src="${Y}" alt='vegetables' class='subscription-success-image'>
  `}).catch(t=>{t.response.status===409?W.innerHTML=`<div class='text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-failed-header'>This <span class='subscription-failed-email'>email address</span> has already been entered</h2>
      <p class='subscription-failed-descr'>You have already subscribed to our new products. Watch for offers at the mailing address.</p>
  `:console.log("SOMETHING WENT WRONG")}),window.addEventListener("keydown",s);function s(t){t.key==="Escape"&&b.classList.add("is-hidden")}window.onclick=function(t){t.target===b&&b.classList.add("is-hidden")};const o=document.querySelector(".modal-close-btn");o.addEventListener("click",a);function a(t){t.currentTarget===o&&b.classList.add("is-hidden")}h.classList.contains("is-hidden")&&(removeEventListener("click",a),removeEventListener("keydown",s))}function we(){v.classList.toggle("is-hidden"),X.innerHTML=`
  <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='20' height='20'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
    <img src='${K}' alt='order successful' class='order-success-img'>
    <h2 class='order-success-status'>Order success</h2>
    <p class='order-success-descr'>Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness.</p>
  `,window.addEventListener("keydown",e);function e(a){a.key==="Escape"&&v.classList.add("is-hidden")}window.onclick=function(a){a.target===v&&v.classList.add("is-hidden")};const s=document.querySelector(".modal-close-btn");s.addEventListener("click",o);function o(a){a.currentTarget===s&&v.classList.add("is-hidden")}}const x=document.querySelector(".list-product"),T=document.querySelector(".form-search"),P=document.querySelector(".error"),J=document.querySelector("#selected");P.style.display="none";let S,y;T.addEventListener("submit",ee);const B=window.innerWidth;let $;B<=767?$=6:B<=1239?$=8:$=9;function ee(e){e.preventDefault();const{search:s}=e.currentTarget.elements;S=s.value,localStorage.setItem("SaveFilters",JSON.stringify(S)||null),m(),T.reset()}T.elements.search.value=localStorage.getItem("savetext");m();J.addEventListener("change",te);function te(e){e.target.value;const s=e.target.value;y=s,y=s,localStorage.setItem("SaveCategpries",JSON.stringify(y)||null),m()}T.elements.selecteds.value=localStorage.getItem("saveselected");function se(){ne().then(e=>{const s=e.map(o=>`<option value="${String(o).replace("_","_").replace("&","%26")}">${String(o).replace("_"," ").replace("_"," ")}</option>`).join("");J.insertAdjacentHTML("beforeend",s)}).catch(e=>{console.log(e)})}se();async function m(){await H(1,$).then(e=>{e.results.length===0?P.style.display="flex":P.style.display="none",z(e.results),document.querySelectorAll(".basket").forEach(a=>{a.addEventListener("click",o);const t=a.dataset.id;r(t)&&(a.setAttribute("disabled","true"),a.innerHTML=`
        <svg class="basket-icon-check" width="18" height="18">
          <use href="${n}#icon-check"></use>
        </svg>
      `)});function o(a){const t=a.currentTarget,c=t.dataset.id;r(c)?(L(c),t.removeAttribute(c),t.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="${n}#icon-cart"></use>
      </svg>
    `):(k(c),t.setAttribute("disabled",!0),r(c)&&(t.style.transform="rotate(270deg)",setTimeout(()=>{t.innerHTML=`
              <svg class="svg-item-check" width="12" height="12">
                <use href="${n}#icon-check"></use>
              </svg>
              `,t.style.transform="rotate(360deg)"},300),t.setAttribute("disabled","true")))}}).catch(e=>{throw new Error(e)})}function z(e){const s=e.map(({name:o,img:a,category:t,price:c,size:i,popularity:u,is10PercentOff:d,_id:l})=>d==!0?`
              <li class="item-product" data-id="${l}">
                <div class="product-container" id="svg-discount">
                  <svg width="60" height="60" class="discount-svg">
                    <use href="${n}#icon-discount"></use>
                  </svg>
                  <img class="img-product" src="${a}" width="400" height="200">
                  <h2 class="caption-product">${o}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${t}</span></p>
                      <p class="feature">Size: <span class=feature-black>${i}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${u}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <button class="basket" data-id="${l}">
                          <svg class="svg" width="18" height="18">
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
                      <p class="feature">Category: <span class=feature-black>${String(t).replace("_"," ").replace("_"," ")}</span></p>
                      <p class="feature">Size: <span class=feature-black>${i}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${u}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <button class="basket" data-id="${l}">
                          <svg class="svg" width="18" height="18">
                            <use href="${n}#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                </div>
              </li>
              `).join("");x.innerHTML="",x.insertAdjacentHTML("beforeend",s)}function ae(e){const s=e.target.closest(".item-product");if(s){const o=s.dataset.id;N(o)}}x.addEventListener("click",ae);async function H(e,s){const o=await f.get(`https://food-boutique.b.goit.study/api/products?keyword=${S||""}&category=${y||""}&`,{params:{keywords:S||"",selectedForm:y||"",page:e||1,limit:s||6}});return localStorage.setItem("page",e),localStorage.getItem("page"),localStorage.setItem("limit",s),localStorage.getItem("limit"),o.data}async function oe(){return(await f.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function ce(){return(await f.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function ne(){return(await f.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function ie(e){return(await f.get(`https://food-boutique.b.goit.study/api/products/${e}`)).data}async function re(e){try{const s="https://food-boutique.b.goit.study/api/subscription",o={email:e};return(await f.post(s,o)).data}catch(s){throw console.log("Something went wrong: "+s),s}}const I=document.querySelector(".footer-form-authorization");I.addEventListener("submit",de);function de(e){e.preventDefault(),Z(I[0].value),I.reset()}const F=document.querySelector(".discount_container"),le=2;function ue(e,s,o=0){const a=o+le;return e.slice(o,a).map(({img:i,price:u,_id:d,desc:l},q)=>`<li class="card_item" data-id="${d}">
      <div class="discount-icon-container">
        <svg class="discount-icon" width="60" height="60">
          <use href="${n}#icon-discount"></use>
        </svg>
      </div>
      <div class="card-content">
        <img src="${i}" alt="${l}" class="card-img" width="105" height="105">
      </div>
      <div class="title-box">
        <h3 class="card-title">${s[q]}</h3>
        <p class="card-price">$${u}</p>
      </div>
      <button class="basket" data-id="${d}">
        <svg class="basket-icon" width="18" height="18">
          <use href="${n}#icon-cart"></use>
        </svg>
      </button>
    </li>`).join("")}async function pe(){const e=await ce(),s=e.reduce((a,t)=>(t.name.length>10?a.push(t.name.slice(0,10)+"..."):a.push(t.name),a),[]);F.innerHTML=ue(e,s),F.addEventListener("click",a=>{const t=a.target.closest(".card_item");if(t){const c=t.dataset.id;N(c)}}),document.querySelectorAll(".basket").forEach(a=>{a.addEventListener("click",ge);const t=a.dataset.id;r(t)&&(a.setAttribute("disabled","true"),a.innerHTML=`
        <svg class="basket-icon-check" width="18" height="18">
          <use href="${n}#icon-check"></use>
        </svg>
      `)})}pe();function ge(e){const s=e.target,o=s.dataset.id;r(o)?(L(o),s.removeAttribute(o),s.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="${n}#icon-cart"></use>
      </svg>
    `):(k(o),s.setAttribute("disabled",!0),s.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="${n}#icon-check"></use>
      </svg>
    `)}const G=document.querySelector(".product-card");function he(){oe().then(e=>{me(e),document.querySelectorAll(".popular_basket").forEach(a=>{a.addEventListener("click",o);const t=a.dataset.id;r(t)&&(a.setAttribute("disabled","true"),a.innerHTML=`
      <svg class="svg-item-check" width="12" height="12">
        <use href="${n}#icon-check"></use>
      </svg>
      `)});function o(a){const t=a.currentTarget,c=t.dataset.id;r(c)?(L(c),t.removeAttribute(c),t.innerHTML=`
    <svg class="svg-item" width="12" height="12">
      <use href="${n}#icon-cart"></use>
    </svg>
  `):(k(c),t.setAttribute("disabled",!0),r(c)&&(t.style.transform="rotate(270deg)",setTimeout(()=>{t.innerHTML=`
              <svg class="svg-item-check" width="12" height="12">
                <use href="${n}#icon-check"></use>
              </svg>
              `,t.style.transform="rotate(360deg)"},300),t.setAttribute("disabled","true")))}}).catch(e=>{throw new Error(e)})}function me(e){const s=document.createElement("div");s.classList.add("product-list-container");const o=e.map(({category:a,img:t,name:c,popularity:i,size:u,_id:d})=>`<li class="product-content" data-id=${d}>
        <div class="background-img">
            <img src="${t}" alt="${c}" class="product-image" />
        </div>
        <div class="product-txt-bar">
            <h3 class="product-title">${c}</h3>
            <p class="product-category">
                <span class="span-category">Category:</span>${String(a).replace("_"," ")}
            </p>
            <div class="product-txt-two">
                <p class="product-size">
                    <span class="span-category">Size:</span>${u}
                </p>
                <p class="product-popularity">
                    <span class="span-category">Popularity:</span>${i}
                </p>
            </div>
        </div>
        <button class="popular_basket" data-id="${d}">
            <svg class="svg-item" width="12" height="12">
                <use href="${n}#icon-cart"></use>
            </svg>
        </button>
    </li>`).join("");s.innerHTML=o,G.appendChild(s)}function fe(e){const s=e.target.closest(".product-content");if(s){const o=s.dataset.id;N(o)}}G.addEventListener("click",fe);he();document.querySelector(".pagination");let w=0;const A=window.innerWidth;function be(e){return e<=767?2:4}setInterval(()=>{console.log()},1e3);A<=767?w=6:A<=1239?w=8:w=9;let C=1;function ve(e){const s={totalItems:e.totalPages*10,visiblePages:be(A),template:{page:'<a href="#" id="page-btn" class="tui-page-btn">{{page}}</a>',currentPage:'<strong id="is-selected" class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" id="arrow-btn" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span id="arrow-btn" class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" id="page-btn" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};new R("pagination",s).on("afterMove",function(a){C=a.page,H(C,w).then(t=>{z(t.results)}).catch(t=>{throw new Error(t)})})}H(C,w).then(e=>{ve(e)}).catch(e=>{throw new Error(e)});export{ie as g,M as h,we as o,L as r,n as s};
//# sourceMappingURL=pagination-1c46d972.js.map
