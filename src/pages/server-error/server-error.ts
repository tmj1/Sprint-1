import Block from 'core/Block';

export class ServerErrorPage extends Block {
  render() {
    // language=hbs
    return `
      <div class="page">
        {{{Error
          title="503"
          subtitle="Ошибка сервера"
        }}}
      </div>
    `;
  }
}

