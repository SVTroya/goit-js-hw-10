document.querySelector(".main-choice").addEventListener("click",(function({target:e}){if("A"!==e.nodeName)return;localStorage.setItem("pet-type",e.dataset.petType)})),window.onload=()=>{localStorage.removeItem("pet-type")};
//# sourceMappingURL=index.7a343fc2.js.map
