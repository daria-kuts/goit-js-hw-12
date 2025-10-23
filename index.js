import{a as u,S as p,i}from"./assets/vendor-D8hBcPQM.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",f="52812196-5a943dca1ddd7edd2406579c3";function m(r,o){return u.get(d,{params:{key:f,q:r,page:o,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(r){const o=document.querySelector(".gallery"),s=r.map(n=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n.largeImageURL}">
          <img src="${n.webformatURL}" alt="${n.tags}" />
          <div class="info">
            <p><span class="info-title">Likes:</span> ${n.likes}</p>
            <p><span class="info-title">Views:</span> ${n.views}</p>
            <p><span class="info-title">Comments:</span> ${n.comments}</p>
            <p><span class="info-title">Downloads:</span> ${n.downloads}</p>
          </div>
        </a>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",s),y.refresh()}function h(){const r=document.querySelector(".gallery");r.innerHTML=""}function L(){document.querySelector(".loader").classList.add("visible")}function l(){document.querySelector(".loader").classList.remove("visible")}const c=document.querySelector(".form"),S=c.querySelector('input[name="search-text"]');c.addEventListener("submit",r=>{r.preventDefault();const o=S.value.trim();if(o===""){i.error({title:"Error",message:"Please enter a search term!",position:"topRight"});return}h(),L(),m(o).then(s=>{if(l(),s.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(s.hits)}).catch(s=>{l(),i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(s)})});
//# sourceMappingURL=index.js.map
