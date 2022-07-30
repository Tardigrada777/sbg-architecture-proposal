import { newE2EPage } from '@stencil/core/testing';

describe('sbg-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sbg-button></sbg-button>');

    const element = await page.find('sbg-button');
    expect(element).toHaveClass('hydrated');
  });
});
