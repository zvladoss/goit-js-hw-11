import{a as c,i}from"./assets/vendor-DTWUeAzC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",u="49340244-28a37e61aef480134de69edd6",m=a=>c.get(d,{params:{key:u,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>console.log(t)),f=({webformatURL:a,largeImageURL:t,tags:o,likes:s,views:e,comments:r,downloads:n})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img class="gallery-img" src="${a}" alt="${o}" />
        </a>
        <div class="info-wrap">
        <p class="gallery-info">Likes: ${s}</p>
        <p class="gallery-info">Views: ${e}</p>
        <p class="gallery-info">Comments: ${r}</p>
        <p class="gallery-info">Downloads: ${n}</p>
        </div>        
      </li>
    `,l={searchForm:document.querySelector("form"),searchInput:document.querySelector('[name="search-text"]'),gallery:document.querySelector(".gallery"),galleryLink:document.querySelector(".gallery-link")},p=a=>{a.preventDefault();const t=l.searchInput.value.trim();if(!t){i.error({message:"Error!"});return}l.searchForm.reset();const o=document.createElement("div");o.classList.add("loader-box");const s=document.createElement("span");s.classList.add("loader"),o.appendChild(s),document.body.insertBefore(o,l.searchForm.nextSibling),m(t).finally.then(e=>{if(e.hits.length===0)return;const r=e.hits.map(n=>f(n)).join("");l.gallery.insertAdjacentHTML("beforeend",r),console.log(r)}).catch(e=>{console.error(e),i.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})})};l.searchForm.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
