import { newSpecPage } from '@stencil/core/testing';
import { McModal } from '../mc-modal';

describe('mc-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [McModal],
      html: `
        <mc-modal
          header="Mayo Clinic Modal Default"
          appearance="primary"
          buttons='[{"text": "Confirm"}, {"text": "Cancel"}]'>
        </mc-modal>
      `,
    });
    expect(page.root).toEqualHtml(`
      <mc-modal
        header="Mayo Clinic Modal Default"
        appearance="primary"
        buttons='[{"text": "Confirm"}, {"text": "Cancel"}]'>
        <mock:shadow-root>
        <div class="modal-wrapper">
          <div class="modal-overlay"></div>
          <div class="modal">
            <div class="header">
              <h6>Mayo Clinic Modal Default</h6>
              <div class="close">
                <img src="/assets/x.svg" alt="close icon" />
              </div>
            </div>
            <div class="body">
              <slot></slot>
            </div>
            <div class="footer">
              <mc-button text="Confirm" appearance="primary"></mc-button>
              <mc-button text="Cancel"></mc-button>
            </div>
          </div>
        </div>
        </mock:shadow-root>
      </mc-modal>
    `);
  });
});
