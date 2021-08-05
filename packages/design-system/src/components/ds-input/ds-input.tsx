import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ds-input',
  styleUrl: 'ds-input.scss',
  shadow: true,
})
export class DsInput implements ComponentInterface{
  private rangeId: number = Math.random() * 99999999;
  
  @Prop({
    reflect: true,
    attribute: 'id',
  })
  idElement = `text_field__${this.rangeId}`;

  @Prop() type: 'email' | 'text' | 'password' = 'text';
  @Prop() label = '';

  render() {
    return (
      <Host>
        <input 
          type={ this.type }
          class="ds-input"
          id={ this.idElement }
          autoComplete="off"
          placeholder=" "
        />
        <label htmlFor={ this.idElement } class="ds-input__label">
          { this.label }
        </label>
      </Host>
    );
  }
}
