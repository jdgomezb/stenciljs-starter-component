import { newSpecPage } from '@stencil/core/testing';
import { McButton } from '../mc-button';

describe('mc-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [McButton],
      html: `<mc-button text="Primary Button" appearance="primary"></mc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <mc-button appearance="primary" text="Primary Button">
        <mock:shadow-root>
          <button class="btn primary" type="button">Primary Button</button>
        </mock:shadow-root>
      </mc-button>
    `);
  });
});
