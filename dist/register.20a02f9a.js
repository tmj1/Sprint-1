function checkOnValueInput(){Array.from(document.forms[0].querySelectorAll(".input__text-field")).forEach((e=>{const t=e.parentElement.querySelector(".input__text");e.addEventListener("input",(()=>{0===e.value.length?removeClassNameToHelperText(t):addClassNameToHelperText(t)}))}))}function addClassNameToHelperText(e){e.classList.add("input__text_isValue")}function removeClassNameToHelperText(e){e.classList.remove("input__text_isValue")}checkOnValueInput();
//# sourceMappingURL=register.20a02f9a.js.map