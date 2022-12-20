import { Block, BrowseRouter as router } from 'core';
import { PATHNAMES } from 'utils';


export class NotFoundPage extends Block {
  protected getStateFromProps() {
    this.state = {
      handleClickByLink: () => router.go(PATHNAMES['MESSENGER_PATH']),
    };
  }
  render() {
    // language=hbs
    return `
      <div class="page">
        {{{Error
          onClick=handleClickByLink
          title="404"
          subtitle="Этой станицы не существует"
        }}}
      </div>
    `;
  }
}
