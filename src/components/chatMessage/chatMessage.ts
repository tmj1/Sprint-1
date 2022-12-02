import Block from 'core/Block';
import './chatMessage.css';
import { ChatMessageProps } from './types';
import attach_btn from 'img/attach-btn.svg';
import send_btn from 'img/send-btn.svg';

export class ChatMessage extends Block {
  static componentName = 'ChatMessage';
  constructor({ onClick }: ChatMessageProps) {
    super({ events: { click: onClick } });
  }

  protected render(): string {
    // language=hbs
    return `
      <div class="chat-message">
        <form class="chat-message__form">
          <button class="chat-message__btn-attach" type="button" aria-label="Прирепить файл">
            <img
              class="chat-message__icon-attach"
              src="${attach_btn}"
              alt="Иконка прирепить файл"
            />
          </button>
          <input class="chat-message__input" type="text" placeholder="Поиск" required />
          <button class="chat-message__btn-send" type="submit" aria-label="Отправить сообщение">
            <img
              class="chat-message__icon-send"
              src="${send_btn}"
              alt="Иконка отправить сообщение"
            />
          </button>
        </form>
      </div>
    `;
  }
}

