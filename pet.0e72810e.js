!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){return a.default(e)||s.default(e,t)||l.default(e,t)||c.default()};var a=u(o("8slrw")),s=u(o("7AJDX")),c=u(o("ifqQW")),l=u(o("auk6i"));function u(e){return e&&e.__esModule?e:{default:e}}var d="live_Mlq52c1ZOJh91BuIHgCjbsbMLNU9HiGamBhos6dGnoOpfCwYihzaY62fc640KidM",f="live_FDfPizYGe5KVsKSxrn22ndt8Htokk5XB9VMOuH7S7qFxcCFxyX8LVE81ev0QxQO8";function p(e){switch(e){case"dog":return d;case"cat":return f}}var g=document.querySelector("select.breed-select"),h=document.querySelector(".selector"),m=document.querySelector("div.breed-info"),v=document.querySelector("h1.choice"),y=document.querySelector("p.loader"),b="";window.addEventListener("load",(function(){b=localStorage.getItem("pet-type")||"dog",localStorage.removeItem("pet-type");var e="I don't know what an animal it is 🤷‍♀️. But ok.";switch(b){case"dog":e="You are right, DOGS are the best 😊!!!";break;case"cat":e="I'm disappointed 🥺. But ok."}v.textContent=e,(t=b,r="https://api.the".concat(t,"api.com/v1/breeds"),fetch(r,{headers:{Accept:"application/json","x-api-key":p(t)}}).then((function(e){if(!e.ok)throw new Error(e.status.toString());return e.json()}))).then((function(e){var t=e.filter((function(e){var t;return null!=(null===(t=e.image)||void 0===t?void 0:t.url)})).map((function(e){return"<option value='".concat(e.id,"'>").concat(e.name,"</option>")})).join("");g.insertAdjacentHTML("afterbegin",t),h.classList.toggle("is-hidden"),y.classList.toggle("is-hidden")})).catch((function(e){console.log(e)}));var t,r})),g.addEventListener("change",(function(t){y.classList.toggle("is-hidden"),h.classList.toggle("is-hidden"),m.classList.add("is-hidden"),(r=b,n=t.target.value,o="https://api.the".concat(r,"api.com/v1/images/search?breed_ids="),fetch(o+n,{headers:{Accept:"application/json","x-api-key":p(r)}}).then((function(e){if(!e.ok)throw new Error(e.status.toString());return e.json()}))).then((function(t){if(t.length){var r=t[0],n=r.url,o=e(i)(r.breeds,1)[0],a=o.bred_for,s=o.temperament,c=o.name,l=o.description;m.innerHTML="<img class='animal-img' src='".concat(n,"' alt='").concat(c,"' width='400' loading='lazy'/>\n      <div class='breed-info-right'>\n        <h2 class='breed-name'>").concat(c,"</h2>\n        <p>").concat(l||a||"","</p>\n        <p class='temper'><span class='temperament-header'>Temperament: </span>").concat(s,"</p>\n      </div>"),y.classList.toggle("is-hidden"),m.classList.toggle("is-hidden"),h.classList.toggle("is-hidden")}})).catch((function(e){console.log(e)}));var r,n,o}))}();
//# sourceMappingURL=pet.0e72810e.js.map