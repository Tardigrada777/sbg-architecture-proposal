import { Component, h, Host, Prop } from '@stencil/core';
import { ButtonColors } from './enums';

@Component({
  tag: 'sbg-button',
  styleUrl: 'sbg-button.css',
  shadow: true,
})
export class SbgButton {
  @Prop() color: ButtonColors = ButtonColors.Accent;

  @Prop() shaped: boolean = false;

  render() {
    return (
      <Host>
        <button class={{
          'sbg-accent': this.color === ButtonColors.Accent,
          'rounded': !this.shaped,
          'shaped': this.shaped
        }}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
