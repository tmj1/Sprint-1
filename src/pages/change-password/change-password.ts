import Block from 'core/Block';
import 'styles/profile.css';
import { Popup } from 'utils/classes/Popup';
import { FormValidator } from 'utils/classes/FormValidator';
import { config, EDIT_PASSWORD_FORM } from 'utils/constants';
import { handleSubmitForm } from 'utils/functions';
import dataProfile from 'data/profile.json';

const editPasswordFormValidator = new FormValidator(
  config,
  EDIT_PASSWORD_FORM,
  config.inputProfileSelector,
  config.btnSubmitFormSelector,
  config.inputProfileHelperTextSelector,
  config.isShowInputProfileHelperTextSelector
);

export class ChangePasswordPage extends Block {
  protected getStateFromProps() {
    this.state = {
      handleEditAvatar: () => {
        new Popup(
          config.popupChangeAvatarSelector,
          config.editAvatarSelector,
          config.isOpenPopupSelector,
          config
        ).handleOpenPopup();
      },
      handleChangeInput: () => {
        editPasswordFormValidator.clearError();
        editPasswordFormValidator.toggleBtnState();
      },
      handleSubmitForm: (evt: Event) => {
        evt.preventDefault();
        handleSubmitForm({
          stateForm: editPasswordFormValidator.checkStateForm(),
          inputSelector: config.inputProfileSelector,
          formSelector: EDIT_PASSWORD_FORM,
          disableBtn: editPasswordFormValidator.disableBtn,
          addErrors: editPasswordFormValidator.addErrorsForInput,
        });
      },
      handleValidateInput: (evt: Event) =>
        editPasswordFormValidator.handleFieldValidation(evt),
    };
  }
  render() {
    // language=hbs
    return `
      <div class="profile">
        <ul class="profile__wrapper">
          {{{BtnBackProfile href="/profile"}}}
          <li class="profile__column">
            <form
              class="profile__form profile__form_el_change-password-form"
              novalidate
            >
              {{{EditAvatar onClick=handleEditAvatar}}}
              <p class="profile__user-name">Максим</p>
              <ul class="profile__list">
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="password"
                  helperText="Старый пароль"
                  value="${dataProfile.payload.password}"
                  minlength="8"
                  maxlength="40"
                  name="oldPassword"
                  formName="profile__form_el_change-password-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="password"
                  helperText="Новый пароль"
                  value="12341234"
                  minlength="8"
                  maxlength="40"
                  name="newPassword"
                  formName="profile__form_el_change-password-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="password"
                  helperText="Повторите новый пароль"
                  value="12341234" minlength="8"
                  maxlength="40"
                  name="repeatPassword"
                  formName="profile__form_el_change-password-form"
                }}}
                {{{Button
                  onClick=handleSubmitForm
                  textBtn="Сохранить"
                  classes="button_page_change-password"
                  type="submit"
                }}}
              </ul>
            </form>
          </li>
        </ul>
        {{{Popup
          title="Загрузить файл"
          textBtn="Изменить"
          classesPopup="popup_change-avatar"
          isDefault=false
        }}}
      </div>
    `;
  }
}