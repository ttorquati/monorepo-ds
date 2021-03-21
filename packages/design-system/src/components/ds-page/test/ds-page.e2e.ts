import { newE2EPage } from '@stencil/core/testing';

describe('ds-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds-page></ds-page>');

    const element = await page.find('ds-page');
    expect(element).toHaveClass('hydrated');
  });
});
