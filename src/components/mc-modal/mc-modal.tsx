import { Component, h, Prop, getAssetPath, State, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'mc-modal',
  styleUrl: 'mc-modal.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class McModal {
  @Prop({
    mutable: true,
    reflect: true,
  })
  @Prop() isopen: boolean;
  @Prop() header: string;
  @Prop() appearance: string;
  @Prop() buttons: string;

  @Prop() closeIcon = 'x.svg';

  @State() _buttons: Array<any>;

  arrayDataWatcher(buttons) {
    if (typeof buttons === 'string') {
      this._buttons = JSON.parse(buttons);
    } else {
      this._buttons = buttons;
    }
  }

  // Events
  @Event() private action: EventEmitter;

  // Before the component mounts/loads, we need to convert the buttons string to an array
  componentWillLoad() {
    this.arrayDataWatcher(this.buttons)
  }

  // Functions
  private handleClose = () => {
    this.isopen = false;
  }

  private handleAction = () => {
    this.action.emit();
  }

  render() {
    return (
      <div class={this.isopen ? `modal-wrapper is-open` : `modal-wrapper`}>
        <div
          class="modal-overlay"
          onClick={this.handleClose}></div>
        <div class="modal">
          <div class="header">
            <h6>{this.header}</h6>
            <div
              class="close"
              onClick={this.handleClose}>
              <img src={getAssetPath(`./assets/${this.closeIcon}`)} alt="close icon" />
            </div>
          </div>
          <div class="body">
            <slot/>
          </div>
          <div class="footer">
            {/* <mc-button text="Confirm" appearance={this.appearance}></mc-button>
            <mc-button text="Cancel"></mc-button> */}
            {this._buttons.map((btn, idx) => (
              <mc-button
                onClick={idx === 0 ? this.handleAction : this.handleClose}
                text={btn.text}
                appearance={idx === 0 && this.appearance} />
            ))}
          </div>
        </div>
      </div>
    );
  }

}
