import{a as l,S as u,i as d}from"./assets/vendor-d7a5248b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();l.defaults.headers.common["x-api-key"]="live_BzwGQIh1LRldU74Jv51k7HTS0uxammP7qVJA1muukd6HsPHVkN3JKvMXwwZbH5VN";async function m(){return await l.get("https://api.thecatapi.com/v1/breeds").then(e=>e.data)}async function f(e){return await l.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`).then(a=>a.data)}const r={breedSelect:document.querySelector(".js-breed-select"),catInfo:document.querySelector(".cat-info"),loader:document.querySelector(".loader"),title:document.querySelector(".animate__animated")};function s(e,a){e.classList.toggle("hidden",!a)}r.title.classList.add("animate__animated","animate__zoomInDown");r.title.addEventListener("animationed",()=>{y()});s(r.breedSelect,!1);s(r.loader,!0);const p=new u({select:r.breedSelect});async function h(){try{s(r.loader,!0),s(r.catInfo,!1);const e=r.breedSelect.value,a=await f(e);g(a)}catch{d.show({position:"center",message:"An error have ocurred. Please reload the page"})}s(r.loader,!1)}function g(e){const a=e[0].url,o=e[0].breeds[0],c=`<div class="card">
  <img class="img" src="${a}" alt="${o.name}"/>
      <div class="info">
        <h2 class="name">${o.name}</h2>
        <p><span class="description">Description: </span> ${o.description}</p>
        <p><span class="temperament">Temperament: </span> ${o.temperament}</p>   
       </div>
</div>`;r.catInfo.innerHTML=c,s(r.catInfo,!0)}async function y(){try{await m().then(e=>{const a=e.map(({id:o,name:c})=>({value:o,text:c}));console.log(a),p.setData(Array.from(a))}),s(r.breedSelect,!0),r.breedSelect.addEventListener("change",h)}catch{d.show({position:"center",message:"Oops! Something went wrong! Try reloading the page!"})}s(r.loader,!1)}
//# sourceMappingURL=commonHelpers.js.map
