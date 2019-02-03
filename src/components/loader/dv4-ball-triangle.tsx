import { Component } from "@stencil/core";

@Component({
  tag: "dv4-ball-triangle",
  styleUrl: "./dv4-ball-triangle.css",
  shadow: true
})
export class Dv4BallTriangle {
  render() {
    return (
      <div class="ball-triangle-path">
        <div />
        <div />
        <div />
      </div>
    );
  }
}
