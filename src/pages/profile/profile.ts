import { Block, store, BrowseRouter as router } from 'core';
import 'styles/profile.css';
import { Popup } from 'utils/classes';
import { config, PATHNAMES } from 'utils/constants';
import { authService, profileService } from 'services';
import { STORE_EVENTS } from 'types';
import { checkIsLoginIn } from 'utils';


export class ProfilePage extends Block {
  constructor(...args: any) {
    super(...args);

    authService.getInfo();

    store.on(STORE_EVENTS.UPDATE, () => {
      this.setProps(store.getState());
    });
  }

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
      handleSubmitEditAvatarForm: (evt: Event) => {
        evt.preventDefault();

        const editForm = document.forms[1];
        const formData = new FormData(editForm);

        profileService.changeAvatar(formData);
      },
      handleSignOut: (evt: Event) => {
        evt.preventDefault();
        authService.signout();
      },
      handleBackBtn: () => router.back(),
      handleLinkToChangeProfile: () => router.go(PATHNAMES['EDIT_SETTINGS_PATH']),
      handleLinkToChangePassword: () => router.go(PATHNAMES['EDIT_PASSWORD_PATH']),
    };
  }
  render() {
    checkIsLoginIn();

    const { userInfo = [] } = this.props;
    const { avatar, display_name, email, first_name, login, phone, second_name } =
      userInfo;

    // language=hbs
    return `
      <div class="profile">
        <ul class="profile__wrapper">
          {{{BtnBackProfile onClick=handleBackBtn}}}
          <li class="profile__column">
            <form class="profile__form" novalidate>
              {{{EditAvatar avatar="${avatar}" onClick=handleEditAvatar}}}
              <p class="profile__user-name">${display_name ? display_name : ''}</p>
              <ul class="profile__list">
                {{{InputProfileWrapper
                  type="email"
                  helperText="??????????"
                  value="${email ? email : ''}"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="??????????"
                  value="${login ? login : ''}"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="??????"
                  value="${first_name ? first_name : ''}"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="??????????????"
                  value="${second_name ? second_name : ''}"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="?????? ?? ????????"
                  value="${display_name ? display_name : ''}"
                }}}
                {{{InputProfileWrapper
                  type="tel"
                  helperText="??????????????"
                  value="${phone ? phone : ''}"
                }}}
              </ul>
              <ul class="profile__list">
                {{{BtnProfile
                  onClick=handleLinkToChangeProfile
                  text="???????????????? ????????????"
                  classes="btn-profile__link_color_red"
                  type="link"
                }}}
                {{{BtnProfile
                  onClick=handleLinkToChangePassword
                  text="???????????????? ????????????"
                  classes="btn-profile__link_color_red"
                  type="link"
                }}}
                {{{BtnProfile
                  onClick=handleSignOut
                  text="??????????"
                  classes="btn-profile__link_color_blue"
                  type="button"
                }}}
              </ul>
            </form>
          </li>
        </ul>
        {{{Popup
          onSubmit=handleSubmitEditAvatarForm
          title="?????????????????? ????????"
          textBtn="????????????????"
          classesPopup="popup_change-avatar"
          isDefault=false
          name="editAvatar"
        }}}
      </div>
    `;
  }
}
