import Block from 'core/Block';
import './settingsMenu.css';
import { SettingsMenuProps } from './types';

export class SettingsMenu extends Block {
  static componentName = 'SettingsMenu';
  constructor({ onClick }: SettingsMenuProps) {
    super({ events: { click: onClick } });
  }

  protected render(): string {
    // language=hbs
    return `
      <button class="settings-menu" aria-label="Кнопка меню">
        <svg
          class="settings-menu__btn-icon"
          width="3"
          height="16"
          viewBox="0 0 3 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="1.5" cy="2" r="1.5"></circle>
          <circle cx="1.5" cy="8" r="1.5"></circle>
          <circle cx="1.5" cy="14" r="1.5"></circle>
        </svg>
      </button>
    `;
  }
}
