import{s as y,a as S,b as h,c as n,d as $,e as v,f as w}from"./assets/fetchAPI-4f2d7449.js";import{P as C}from"./assets/vendor-b592f4c5.js";const l=document.querySelector(".footer-form-authorization");l.addEventListener("submit",P);function P(e){e.preventDefault(),y(l[0].value),l.reset()}const p=document.querySelector(".card"),T=2;function L(e,t,s=0){const a=s+T;return e.slice(s,a).map(({img:o,price:d,_id:r,desc:b},k)=>`<li class="card_item" data-id="${r}">
      <div class="discount-icon-container">
        <svg class="discount-icon" width="60" height="60">
          <use href="${n}#icon-discount"></use>
        </svg>
      </div>
      <div class="card-content">
        <img src="${o}" alt="${b}" class="card-img" width="105" height="105">
      </div>
      <div class="title-box">
        <h3 class="card-title">${t[k]}</h3>
        <p class="card-price">$${d}</p>
      </div>
      <button class="basket" data-id="${r}">
        <svg class="basket-icon" width="18" height="18">
          <use href="${n}#icon-cart"></use>
        </svg>
      </button>
    </li>`).join("")}async function M(){const e=await S(),t=e.reduce((a,c)=>(c.name.length>10?a.push(c.name.slice(0,10)+"..."):a.push(c.name),a),[]);p.innerHTML=L(e,t),p.addEventListener("click",a=>{const c=a.target.closest(".card_item");if(c){const i=c.dataset.id;h(i)}}),document.querySelectorAll(".basket").forEach(a=>{a.addEventListener("click",E);const c=a.dataset.id;H(c)&&(a.setAttribute("disabled",!0),a.innerHTML=`
        <svg class="basket-icon-check" width="18" height="18">
          <use href="${n}#icon-check"></use>
        </svg>
      `)})}M();function E(e){const t=e.currentTarget,s=t.dataset.id;t.hasAttribute("disabled")?(I(s),t.removeAttribute("disabled"),t.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="${n}#icon-cart"></use>
      </svg>
    `):(A(s),t.setAttribute("disabled",!0),t.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="${n}#icon-check"></use>
      </svg>
    `)}function A(e){const t=JSON.parse(localStorage.getItem("cart"))||[];t.includes(e)||(t.push(e),localStorage.setItem("cart",JSON.stringify(t)))}function I(e){const t=JSON.parse(localStorage.getItem("cart"))||[],s=t.indexOf(e);s!==-1&&(t.splice(s,1),localStorage.setItem("cart",JSON.stringify(t)))}function H(e){try{return(JSON.parse(localStorage.getItem("cart"))||[]).includes(e)}catch(t){return console.error("Помилка парсингу JSON:",t),!1}}const m=document.querySelector(".product-card");function x(){$().then(e=>{N(e)}).catch(e=>{throw new Error(e)})}function N(e){const t=document.createElement("div");t.classList.add("product-list-container");const s=e.map(({category:a,img:c,name:i,popularity:o,size:d,_id:r})=>`<li class="product-content" data-id=${r}>
        <div class="background-img">
            <img src="${c}" alt="${i}" class="product-image" />
        </div>
        <div class="product-txt-bar">
            <h3 class="product-title">${i}</h3>
            <p class="product-category">
                <span class="span-category">Category:</span>${String(a).replace("_"," ")}
            </p>
            <div class="product-txt-two">
                <p class="product-size">
                    <span class="span-category">Size:</span>${d}
                </p>
                <p class="product-popularity">
                    <span class="span-category">Popularity:</span>${o}
                </p>
            </div>
        </div>
        <div class="svg-svg">
            <svg class="svg-item" width="12" height="12">
                <use href="${n}#icon-cart"></use>
            </svg>
        </div>
    </li>`).join("");t.innerHTML=s,m.appendChild(t)}function O(e){const t=e.target.closest(".product-content");if(t){const s=t.dataset.id;h(s)}}m.addEventListener("click",O);x();document.querySelector(".pagination");let u=0;const q=window.innerWidth;q<=767?u=2:u=4;let g=1;function J(e,t){const s={totalItems:e.totalPages*10,visiblePages:t,template:{page:'<a href="#" id="page-btn" class="tui-page-btn">{{page}}</a>',currentPage:'<strong id="is-selected" class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" id="arrow-btn" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span id="arrow-btn" class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" id="page-btn" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};new C("pagination",s).on("afterMove",function(c){g=c.page,v(g).then(i=>{w(i.results)}).catch(i=>{throw new Error(i)})})}v(g).then(e=>{J(e,u)}).catch(e=>{throw new Error(e)});function B(e){const t=e.currentTarget;console.log(t);const s=t.dataset.id;console.log(s),t.hasAttribute("disabled")?(removeFromStorageCart(s),console.log(removeFromStorageCart(s)),t.removeAttribute("disabled"),t.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="../img/icons.svg#icon-cart"></use>
      </svg>
    `):(addToStorageCart(s),console.log(addToStorageCart(s)),t.setAttribute("disabled",!0),t.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="../img/icons.svg#icon-check"></use>
      </svg>
    `)}const f=document.querySelectorAll(".svg-container");console.log(f);f.forEach(e=>{e.addEventListener("click",B);const t=e.dataset.id;isExistInCart(t)&&(e.setAttribute("disabled",!0),e.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="../img/icons.svg#icon-check"></use>
      </svg>
    `)});
//# sourceMappingURL=commonHelpers2.js.map
