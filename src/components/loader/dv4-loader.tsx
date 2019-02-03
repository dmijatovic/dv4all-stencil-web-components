import { Component, Prop } from "@stencil/core";

@Component({
  tag: "dv4-loader",
  styleUrl: "dv4-loader.css",
  shadow: true
})
export class Dv4Loader {
  @Prop() dataType: string = "roller";

  render() {
    switch (this.dataType.toLowerCase()) {
      case "ball-triangle":
        return <dv4-ball-triangle />;
      case "square-spin":
        return <dv4-square-spin />;
      case "packman":
        return <dv4-packman />;
      case "roller":
      default:
        return <dv4-roller />;
    }
  }
}
