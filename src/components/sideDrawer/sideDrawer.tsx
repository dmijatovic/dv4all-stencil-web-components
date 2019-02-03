import { Component, Prop, Method } from "@stencil/core";

@Component({
  tag: "dv4-side-drawer",
  styleUrl: "./sideDrawer.css",
  shadow: true
})
export class SideDrawer {
  @Prop({ reflectToAttr: true }) dataTitle: string = "Default title";
  @Prop({ reflectToAttr: true, mutable: true }) dataShow: boolean = false;

  onCloseDrawer() {
    debugger;
    this.dataShow = false;
  }

  @Method()
  open() {
    this.dataShow = true;
  }
  @Method()
  close() {
    this.dataShow = false;
  }
  render() {
    //jsx return array of elements
    let html = [
      <div id="backdrop" />,
      <aside>
        <header>
          <h1>{this.dataTitle}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <main>
          <slot name="tab1-content" />
          <slot name="tab2-content" />
        </main>
      </aside>
    ];
    //console.log(this)
    return html;
  }
}
