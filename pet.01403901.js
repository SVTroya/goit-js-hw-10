!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){return i.default(e)||c.default(e,t)||s.default(e,t)||u.default()};var i=l(o("8slrw")),c=l(o("7AJDX")),u=l(o("ifqQW")),s=l(o("auk6i"));function l(e){return e&&e.__esModule?e:{default:e}}var d="live_Mlq52c1ZOJh91BuIHgCjbsbMLNU9HiGamBhos6dGnoOpfCwYihzaY62fc640KidM",f="live_FDfPizYGe5KVsKSxrn22ndt8Htokk5XB9VMOuH7S7qFxcCFxyX8LVE81ev0QxQO8";function p(e){switch(e){case"dog":return d;case"cat":return f}}var h=document.querySelector("select.breed-select"),v=document.querySelector("div.breed-info"),m=document.querySelector("h1.choice"),g="";window.addEventListener("load",(function(){g=localStorage.getItem("pet-type")||"dog",localStorage.removeItem("pet-type");var e="I don't know what an animal it is 🤷‍♀️. But ok.";switch(g){case"dog":e="You are right, DOGS are the best 😊!!!";break;case"cat":e="I'm disappointed 🥺. But ok."}m.textContent=e,(t=g,r="https://api.the".concat(t,"api.com/v1/breeds"),fetch(r,{headers:{Accept:"application/json","x-api-key":p(t)}}).then((function(e){if(!e.ok)throw new Error(e.status.toString());return e.json()}))).then((function(e){var t=e.filter((function(e){var t;return null!=(null===(t=e.image)||void 0===t?void 0:t.url)})).map((function(e){return"<option value='".concat(e.id,"'>").concat(e.name,"</option>")})).join("");h.insertAdjacentHTML("afterbegin",t)})).catch((function(e){console.log(e)}));var t,r})),h.addEventListener("change",(function(t){(r=g,n=t.target.value,o="https://api.the".concat(r,"api.com/v1/images/search?breed_ids="),fetch(o+n,{headers:{Accept:"application/json","x-api-key":p(r)}}).then((function(e){if(!e.ok)throw new Error(e.status.toString());return e.json()}))).then((function(t){if(t.length){var r=t[0],n=r.url,o=e(a)(r.breeds,1)[0],i=o.bred_for,c=o.temperament,u=o.name,s=o.description;v.innerHTML="<img class='animal-img' src='".concat(n,"' alt='").concat(u,"' width='400' loading='lazy'/>\n      <div class='breed-info-right'>\n        <h2 class='breed-name'>").concat(u,"</h2>\n        <p>").concat(s||i||"","</p>\n        <p class='temper'><span class='temperament-header'>Temperament: </span>").concat(c,"</p>\n      </div>"),v.classList.remove("is-hidden")}})).catch((function(e){console.log(e)}));var r,n,o}))}();
//# sourceMappingURL=pet.01403901.js.map