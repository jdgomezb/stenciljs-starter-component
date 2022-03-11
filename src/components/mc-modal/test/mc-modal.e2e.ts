import { newE2EPage } from '@stencil/core/testing';

describe('mc-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mc-modal></mc-modal>');

    const element = await page.find('mc-modal');
    expect(element).toHaveClass('hydrated');
  });
});
