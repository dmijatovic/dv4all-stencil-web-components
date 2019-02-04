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
      case "circle":
        return <dv4-circle />;
      case "dots":
        return <dv4-dots />;
      case "rainbow":
        return <dv4-rainbow />;
      case "square-spin":
        return <dv4-square-spin />;
      case "swirl":
        return <dv4-swirl />;
      case "packman":
        return <dv4-packman />;
      case "roller":
      default:
        return <dv4-roller />;
    }
  }
}
