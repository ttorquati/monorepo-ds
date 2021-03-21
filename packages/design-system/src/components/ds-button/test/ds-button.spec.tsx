import { newSpecPage } from '@stencil/core/testing';
import { DsButton } from '../ds-button';

describe('ds-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsButton],
      html: `<ds-button></ds-button>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-button>
    `);
  });
});
