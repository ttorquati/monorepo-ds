import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-page',
  styleUrl: 'ds-page.scss',
  shadow: true,
})
export class DsPage {

  render() {
    return (
      <Host>
        <ds-switch onApolloChange={ev => console.log(ev)}></ds-switch>
      </Host>
    );
  }

}
