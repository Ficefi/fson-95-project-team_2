import{s as b,a as y,o as S,b as w,c as m,d as k}from"./assets/fetchAPI-145b64cf.js";import{P}from"./assets/vendor-b592f4c5.js";const r=document.querySelector(".footer-form-authorization");r.addEventListener("submit",$);function $(e){e.preventDefault(),b(r[0].value),r.reset()}const g=document.querySelector(".card"),M=2;function L(e,t,s=0){const a=s+M;return e.slice(s,a).map(({img:n,price:o,_id:u,desc:v},f)=>`<li class="card_item" data-id="${u}">
      <div class="discount-icon-container">
        <svg class="discount-icon" width="60" height="60">
          <use href="../img/icons.svg#icon-discount"></use>
        </svg>
      </div>
      <div class="card-content">
        <img src="${n}" alt="${v}" class="card-img" width="105" height="105">
      </div>
      <div class="title-box">
        <h3 class="card-title">${t[f]}</h3>
        <p class="card-price">$${o}</p>
      </div>
      <button class="basket" data-id="${u}">
        <svg class="basket-icon" width="18" height="18">
          <use href="../img/icons.svg#icon-cart"></use>
        </svg>
      </button>
    </li>`).join("")}async function C(){const e=await y();console.log(e);const t=e.reduce((a,c)=>(c.name.length>10?a.push(c.name.slice(0,10)+"..."):a.push(c.name),a),[]);g.innerHTML=L(e,t),g.addEventListener("click",a=>{const c=a.target.closest(".card_item");if(c){const i=c.dataset.id;S(i)}});const s=document.querySelectorAll(".basket");console.log(s),s.forEach(a=>{a.addEventListener("click",E);const c=a.dataset.id;T(c)&&(a.setAttribute("disabled",!0),a.innerHTML=`
        <svg class="basket-icon-check" width="18" height="18">
          <use href="../img/icons.svg#icon-check"></use>
        </svg>
      `)})}C();function E(e){const t=e.currentTarget;console.log(t);const s=t.dataset.id;console.log(s),t.hasAttribute("disabled")?(h(s),console.log(h(s)),t.removeAttribute("disabled"),t.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="../img/icons.svg#icon-cart"></use>
      </svg>
    `):(p(s),console.log(p(s)),t.setAttribute("disabled",!0),t.innerHTML=`
      <svg class="basket-icon-check" width="18" height="18">
        <use href="../img/icons.svg#icon-check"></use>
      </svg>
    `)}function p(e){const t=JSON.parse(localStorage.getItem("cart"))||[];console.log(t),t.includes(e)||(t.push(e),localStorage.setItem("cart",JSON.stringify(t)))}function h(e){const t=JSON.parse(localStorage.getItem("cart"))||[];console.log(t);const s=t.indexOf(e);s!==-1&&(t.splice(s,1),localStorage.setItem("cart",JSON.stringify(t)))}function T(e){try{const t=JSON.parse(localStorage.getItem("cart"))||[];return console.log(t),t.includes(e)}catch(t){return console.error("Помилка парсингу JSON:",t),!1}}const I=document.querySelector(".product-card");function N(){w().then(e=>{O(e)}).catch(e=>{throw new Error(e)})}function O(e){const t=document.createElement("div");t.classList.add("product-list-container");const s=e.map(({category:a,img:c,name:i,popularity:n,size:o})=>`<li class="product-content">
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
                    <span class="span-category">Size:</span>${o}
                </p>
                <p class="product-popularity">
                    <span class="span-category">Popularity:</span>${n}
                </p>
            </div>
        </div>
        <div class="svg-svg">
            <svg class="svg-item" width="12" height="12">
                <use href="./img/icons.svg#icon-cart"></use>
            </svg>
        </div>
    </li>`).join("");t.innerHTML=s,I.appendChild(t)}N();document.querySelector(".pagination");let l=0;const x=window.innerWidth;x<=767?l=2:l=4;let d=1;function A(e,t){const s={totalItems:e.totalPages*10,visiblePages:t,template:{page:'<a href="#" id="page-btn" class="tui-page-btn">{{page}}</a>',currentPage:'<strong id="is-selected" class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" id="arrow-btn" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span id="arrow-btn" class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" id="page-btn" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};new P("pagination",s).on("afterMove",function(c){d=c.page,m(d).then(i=>{k(i.results)}).catch(i=>{throw new Error(i)})})}m(d).then(e=>{A(e,l)}).catch(e=>{throw new Error(e)});
//# sourceMappingURL=commonHelpers2.js.map
