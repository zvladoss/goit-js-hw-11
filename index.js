import{a as m,S as u,i as c}from"./assets/vendor-Cw0AYZ6a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",f="49340244-28a37e61aef480134de69edd6",g=l=>m.get(d,{params:{key:f,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}}).then(t=>t.data).catch(t=>console.log(t)),p=({webformatURL:l,largeImageURL:t,tags:s,likes:n,views:e,comments:r,downloads:o})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img class="gallery-img" src="${l}" alt="${s}" />
        </a>
        <ul class="gallery-list-info">
          <li class="gallery-list-info-item">
            <h3 class="gallery-list-info-title">Likes</h3>
            <p class="gallery-list-info-subtitle">${n}</p>
          </li>
          <li class="gallery-list-info-item">
            <h3 class="gallery-list-info-title">Views</h3>
            <p class="gallery-list-info-subtitle">${e}</p>
          </li>
          <li class="gallery-list-info-item">
            <h3 class="gallery-list-info-title">Comments</h3>
            <p class="gallery-list-info-subtitle">${r}</p>
          </li>
          <li class="gallery-list-info-item">
            <h3 class="gallery-list-info-title">Downloads</h3>
            <p class="gallery-list-info-subtitle">${o}</p>
          </li>
        </ul>      
      </li>
    `,h=new u(".gallery a",{captionsData:"alt",captionDelay:250}),y=(l,t)=>{l.innerHTML=t.map(p).join(""),h.refresh()},i={searchForm:document.querySelector("form"),searchInput:document.querySelector('[name="search-text"]'),gallery:document.querySelector(".gallery")},a=document.createElement("div");a.classList.add("loader-box");const b=document.createElement("span");a.appendChild(b);document.body.insertBefore(a,i.searchForm.nextSibling);const L=()=>a.classList.add("loader"),S=()=>a.classList.remove("loader"),w=l=>{l.preventDefault();const t=i.searchInput.value.trim();if(!t){c.error({message:"Error!"});return}i.searchForm.reset(),L(),g(t).then(s=>{if(s.hits.length===0){c.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"});return}y(i.gallery,s.hits)}).catch(s=>{console.error(s),c.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>S())};i.searchForm.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
