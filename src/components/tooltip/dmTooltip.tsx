import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'dm-tooltip',
  styleUrl: './dmTooltip.css',
  shadow: true
})
export class DmTooltip {

  @Prop() msg: string = "Tooltip message"

  render() {
    //debugger
    return (
      <div>{this.msg}</div>
    )
  }
}