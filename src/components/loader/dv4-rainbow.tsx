import { Component } from "@stencil/core";

@Component({
  tag: "dv4-rainbow",
  styleUrl: "./dv4-rainbow.css",
  shadow: true
})
export class Dv4Rainbow {
  render() {
    return (
      <div class="loader">
        <div class="loader-inner">
          <div class="loader-line-wrap">
            <div class="loader-line" />
          </div>
          <div class="loader-line-wrap">
            <div class="loader-line" />
          </div>
          <div class="loader-line-wrap">
            <div class="loader-line" />
          </div>
          <div class="loader-line-wrap">
            <div class="loader-line" />
          </div>
          <div class="loader-line-wrap">
            <div class="loader-line" />
          </div>
        </div>
      </div>
    );
  }
}
