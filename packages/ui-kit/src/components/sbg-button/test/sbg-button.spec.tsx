import { newSpecPage } from '@stencil/core/testing';
import { SbgButton } from '../sbg-button';

describe('sbg-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SbgButton],
      html: `<sbg-button></sbg-button>`,
    });
    expect(page.root).toEqualHtml(`
      <sbg-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sbg-button>
    `);
  });
});
