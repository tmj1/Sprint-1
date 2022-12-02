import { View } from './View';

export class Chat extends View {
  constructor(config: Record<string, string>) {
    super();
    this._messagesSelector = config.messagesSelector;
    this._contentDefaultSelector = config.contentDefaultSelector;
    this._contentDialogSelector = config.contentDialogSelector;
    this._isActiveChatSelector = config.isActiveChatSelector;
    this._hiddenChatSelector = config.hiddenChatSelector;
    this._searchInputByChatsSelector = config.searchInputByChatsSelector;
    this._imgFromSearchInputByChatsSelector = config.imgFromSearchInputByChatsSelector;
    this._messages = document.querySelectorAll(`.${this._messagesSelector}`);
    this._contentDefault = document.querySelector(`.${this._contentDefaultSelector}`);
    this._contentDialog = document.querySelector(`.${this._contentDialogSelector}`);
    this._searchInputByChats = document.querySelector(
      `.${this._searchInputByChatsSelector}`
    );
    this._imgFromSearchInputByChats = document.querySelector(
      `.${this._imgFromSearchInputByChatsSelector}`
    );
  }

  private _hiddenImg = () => {
    if (this._imgFromSearchInputByChats) {
      this._imgFromSearchInputByChats.style.display = 'none';
    }
  };

  private _showImg = () => {
    if (this._imgFromSearchInputByChats) {
      this._imgFromSearchInputByChats.style.display = 'block';
    }
  };
  
  private _removeActiveClassName = () => {
    document
        .querySelector(`.${this._isActiveChatSelector}`)
        ?.classList.remove(this._isActiveChatSelector);
  };
  
  public addActiveClassName(evt: Event) {
    this._removeActiveClassName();
    this._element = evt.currentTarget as Element;
    this._element.classList.add(this._isActiveChatSelector);
    if (this._contentDefault && this._contentDialog) {
      this._contentDefault.classList.add(this._hiddenChatSelector);
      this._contentDialog.classList.remove(this._hiddenChatSelector);
    }
  }

  public toggleStateImg = () => {
    if (this._searchInputByChats) {
      this._searchInputByChats.value.length > 0 ? this._hiddenImg() : this._showImg();
    }
  };
}
