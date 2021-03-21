import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'ds-switch',
  styleUrl: 'ds-switch.scss',
  shadow: true,
})
export class DsSwitch {
  @Prop() checked = false;

  @Event() apolloChange: EventEmitter<boolean>;
  private onChange = () => {
    this.checked = !this.checked;
    this.apolloChange.emit(this.checked);
  };

  render() {
    return (
      <Host>
        <div class="toggleWrapper">
          <input type="checkbox" class="dn" id="dn" onChange={this.onChange}/>
          <label htmlFor="dn" class="toggle">
            <span class="toggle__handler">
              <span class="crater crater--1"></span>
              <span class="crater crater--2"></span>
              <span class="crater crater--3"></span>
            </span>
            <span class="star star--1"></span>
            <span class="star star--2"></span>
            <span class="star star--3"></span>
            <span class="star star--4"></span>
            <span class="star star--5"></span>
            <span class="star star--6"></span>
          </label>
        </div>
      </Host>
    );
  }

}
