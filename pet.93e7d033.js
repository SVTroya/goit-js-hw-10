!function(){var n="https://api.the".concat(o,"api.com/v1/breeds"),e="https://api.the${animalType}api.com/v1/images/search?breed_ids=",t="live_Mlq52c1ZOJh91BuIHgCjbsbMLNU9HiGamBhos6dGnoOpfCwYihzaY62fc640KidM",a="live_FDfPizYGe5KVsKSxrn22ndt8Htokk5XB9VMOuH7S7qFxcCFxyX8LVE81ev0QxQO8",o=null,c=null;function i(n){switch(o=n){case"dog":c=t;break;case"cat":c=a}}var r=document.querySelector("select.breed-select"),s=document.querySelector("div.breed-info"),u=document.querySelector("h1.choice");window.addEventListener("load",(function(){var e="I don't what an animal it is 🤷‍♀️. But ok.";null;u.textContent=e,(i(t),fetch(n,{headers:{Accept:"application/json","x-api-key":c}}).then((function(n){if(!n.ok)throw new Error(n.status.toString());return n.json()}))).then((function(n){var e=n.filter((function(n){var e;return null!=(null===(e=n.image)||void 0===e?void 0:e.url)})).map((function(n){return"<option value='".concat(n.id,"'>").concat(n.name,"</option>")})).join("");r.insertAdjacentHTML("afterbegin",e)})).catch((function(n){console.log(n)}));var t})),r.addEventListener("change",(function(n){(t=n.target.value,i(t),fetch(e+a,{headers:{Accept:"application/json","x-api-key":c}}).then((function(n){if(!n.ok)throw new Error(n.status.toString());return n.json()}))).then((function(n){if(n.length){var e=n[0],t=e.breeds,a=e.url;s.innerHTML="<img src='".concat(a,"' alt='").concat(t[0].name,"' width='400'/>\n      <div>\n        <h2>").concat(t[0].name,"</h2>\n        <p>").concat(t[0].bred_for||"","</p>\n        <p><span class='temperament-header'>Temperament: </span>").concat(t[0].temperament,"</p>\n      </div>")}})).catch((function(n){console.log(n)}));var t,a}))}();
//# sourceMappingURL=pet.93e7d033.js.map
