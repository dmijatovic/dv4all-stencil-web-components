import { Component } from "@stencil/core";

@Component({
  tag: "dv4-roller",
  styleUrl: "./dv4-roller.css",
  shadow: true
})
export class Dv4Roller {
  render() {
    return (
      <div class="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}
