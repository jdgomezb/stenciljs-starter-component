import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mc-button',
  styleUrl: 'mc-button.scss',
  shadow: true,
})
export class McButton {
  @Prop() text: string;
  @Prop() appearance: string;

  render() {
    return (
      <button class={`btn ${this.appearance}`} type='button'>
        {/* Slot */}
        {this.text}
      </button>
    );
  }

}
