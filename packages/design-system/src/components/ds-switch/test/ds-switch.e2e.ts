import { newE2EPage } from '@stencil/core/testing';

describe('ds-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds-switch></ds-switch>');

    const element = await page.find('ds-switch');
    expect(element).toHaveClass('hydrated');
  });
});
