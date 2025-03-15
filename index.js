import{a as m,i as c}from"./assets/vendor-DTWUeAzC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",f="49340244-28a37e61aef480134de69edd6",p=a=>m.get(u,{params:{key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>console.log(t)),g=({webformatURL:a,largeImageURL:t,tags:o,likes:s,views:e,comments:r,downloads:l})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img class="gallery-img" src="${a}" alt="${o}" />
        </a>
        <div class="info-wrap">
        <p class="gallery-info">Likes: ${s}</p>
        <p class="gallery-info">Views: ${e}</p>
        <p class="gallery-info">Comments: ${r}</p>
        <p class="gallery-info">Downloads: ${l}</p>
        </div>        
      </li>
    `,n={searchForm:document.querySelector("form"),searchInput:document.querySelector('[name="search-text"]'),gallery:document.querySelector(".gallery"),galleryLink:document.querySelector(".gallery-link")},i=document.createElement("div");i.classList.add("loader-box");const d=document.createElement("span");d.classList.add("loader");i.appendChild(d);document.body.insertBefore(i,n.searchForm.nextSibling);i.classList.add("visible");i.classList.remove("visible");const y=a=>{a.preventDefault();const t=n.searchInput.value.trim();if(!t){c.error({message:"Error!"});return}n.searchForm.reset(),p(t).finally.then(o=>{if(o.hits.length===0)return;const s=o.hits.map(e=>g(e)).join("");n.gallery.insertAdjacentHTML("beforeend",s),console.log(s)}).catch(o=>{console.error(o),c.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})})};n.searchForm.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
