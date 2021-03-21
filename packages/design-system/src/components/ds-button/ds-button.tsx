import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.scss',
  shadow: true,
})
export class DsButton implements ComponentInterface {
  @Prop({ reflect: true }) block = false;
  @Prop() disabled = false;

  render() {
    return (
      <Host block={ this.block }>
        <button 
          type="button" 
          class="ds-button" 
          disabled={ this.disabled } 
          aria-disabled={ this.disabled }
        >
          <slot></slot>
        </button>
      </Host>
    );
  }

}
