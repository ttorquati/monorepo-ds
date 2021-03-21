import { newSpecPage } from '@stencil/core/testing';
import { DsPage } from '../ds-page';

describe('ds-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsPage],
      html: `<ds-page></ds-page>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-page>
    `);
  });
});
