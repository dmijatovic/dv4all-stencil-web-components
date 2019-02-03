import { Component } from "@stencil/core";

/**
 * dv4Packman loader web component
 * based on loaders.css created by Connor Atherton
 * https://github.com/ConnorAtherton/loaders.css
 */
@Component({
  tag: "dv4-packman",
  styleUrl: "./dv4-packman.css",
  shadow: true
})
export class Dv4Packman {
  render() {
    return (
      <div class="pacman">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}
