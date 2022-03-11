import { newE2EPage } from '@stencil/core/testing';

describe('mc-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mc-button></mc-button>');

    const element = await page.find('mc-button');
    expect(element).toHaveClass('hydrated');
  });
});
