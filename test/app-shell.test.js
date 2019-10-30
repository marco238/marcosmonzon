import { html, fixture, expect } from '@open-wc/testing';

import '../src/AppShell';

describe('AppShell', () => {
  it('Component has X properties', async () => {
    const el = await fixture(html`
      <app-shell></app-shell>
    `);

    expect(el.title).to.be.a('string');
  });
  
  it('Properties have default values', async () => {
    const el = await fixture(html`
      <app-shell></app-shell>
    `);

    expect(el.title).to.equal('marcomonzon');
  });

  it('Can override properties via attributes', async () => {
    const el = await fixture(html`
      <app-shell
        title="attribute title">
      </app-shell>
    `);

    expect(el.title).to.equal('attribute title');
  });
});
