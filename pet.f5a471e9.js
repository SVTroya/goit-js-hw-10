const e="live_Mlq52c1ZOJh91BuIHgCjbsbMLNU9HiGamBhos6dGnoOpfCwYihzaY62fc640KidM",t="live_FDfPizYGe5KVsKSxrn22ndt8Htokk5XB9VMOuH7S7qFxcCFxyX8LVE81ev0QxQO8";function n(n){switch(n){case"dog":return e;case"cat":return t}}const a=document.querySelector("select.breed-select"),o=document.querySelector("div.breed-info"),r=document.querySelector("h1.choice");let i="";window.addEventListener("load",(function(){i=localStorage.getItem("pet-type")||"dog",localStorage.removeItem("pet-type");let e="I don't know what an animal it is 🤷‍♀️. But ok.";switch(i){case"dog":e="You are right, DOGS are the best 😊!!!";break;case"cat":e="I'm disappointed 🥺. But ok."}r.textContent=e,(t=i,fetch(`https://api.the${t}api.com/v1/breeds`,{headers:{Accept:"application/json","x-api-key":n(t)}}).then((e=>{if(!e.ok)throw new Error(e.status.toString());return e.json()}))).then((e=>{const t=e.filter((e=>{var t;return null!=(null===(t=e.image)||void 0===t?void 0:t.url)})).map((e=>`<option value='${e.id}'>${e.name}</option>`)).join("");a.insertAdjacentHTML("afterbegin",t)})).catch((function(e){console.log(e)}));var t})),a.addEventListener("change",(function(e){(t=i,a=e.target.value,fetch(`https://api.the${t}api.com/v1/images/search?breed_ids=`+a,{headers:{Accept:"application/json","x-api-key":n(t)}}).then((e=>{if(!e.ok)throw new Error(e.status.toString());return e.json()}))).then((e=>{if(!e.length)return;const{url:t,breeds:[{bred_for:n,temperament:a,name:r,description:i}]}=e[0];o.innerHTML=`<img class='animal-img' src='${t}' alt='${r}' width='400' loading='lazy'/>\n      <div class='breed-info-right'>\n        <h2 class='breed-name'>${r}</h2>\n        <p>${i||n||""}</p>\n        <p class='temper'><span class='temperament-header'>Temperament: </span>${a}</p>\n      </div>`,o.classList.remove("is-hidden")})).catch((function(e){console.log(e)}));var t,a}));
//# sourceMappingURL=pet.f5a471e9.js.map