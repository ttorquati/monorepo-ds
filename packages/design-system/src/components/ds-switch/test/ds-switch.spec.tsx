import { newSpecPage } from '@stencil/core/testing';
import { DsSwitch } from '../ds-switch';

describe('ds-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsSwitch],
      html: `<ds-switch></ds-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-switch>
    `);
  });
});
