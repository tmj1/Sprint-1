const signupFormValidator=new FormValidator(inputValidateConfig,"signup");signupFormValidator.enableValidation();const signupInput=new Input(inputValidateConfig,"signup");signupInput.checkOnValueInput();const inputs=document.querySelectorAll(inputValidateConfig.inputPasswordSelector),inputRepeatPassword=inputs[1].parentElement.parentElement.querySelector(`.${inputValidateConfig.inputHelperTextSelector}`),submitBtn=document.querySelector(`.${inputValidateConfig.btnSubmitFormSelector}`);function isMatchedPassword(){inputs.forEach((t=>t.addEventListener("input",(()=>{inputs[0].validity.valid&&inputs[1].validity.valid?(removeClassNameToInput(inputs),addedMessageToMatchedPassword()):addClassNameToInput(),disabledBtn()}))))}function addClassNameToInput(){inputs[0].classList.add(inputValidateConfig.inputErrorSelector),inputs[1].classList.add(inputValidateConfig.inputErrorSelector)}function removeClassNameToInput(){inputs[0].classList.remove(inputValidateConfig.inputErrorSelector),inputs[1].classList.remove(inputValidateConfig.inputErrorSelector)}function addedMessageToMatchedPassword(){inputs[0].value!==inputs[1].value?(inputRepeatPassword.textContent="Пароли не совпадают",inputRepeatPassword.classList.add(inputValidateConfig.isShowHelperTextSelector),addClassNameToInput()):(inputRepeatPassword.textContent="",inputRepeatPassword.classList.remove(inputValidateConfig.isShowHelperTextSelector),removeClassNameToInput())}function disabledBtn(){document.forms[0].checkValidity()&&(inputs[0].value===inputs[1].value?submitBtn.classList.remove(inputValidateConfig.isDisableBtnSubmitSelector):submitBtn.classList.add(inputValidateConfig.isDisableBtnSubmitSelector))}isMatchedPassword();
//# sourceMappingURL=register.77b47e2f.js.map
