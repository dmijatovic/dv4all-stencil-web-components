import { Component, Prop, Method } from "@stencil/core";

@Component({
  tag: 'side-drawer',
  styleUrl: './sideDrawer.css',
  shadow: true
})
export class SideDrawer {
  @Prop({ reflectToAttr: true }) title: string = "Default title"
  @Prop({ reflectToAttr: true, mutable: true }) show: boolean = false

  onCloseDrawer() {
    debugger
    this.show = false;
  }

  @Method()
  open() {
    this.show = true;
  }
  @Method()
  close() {
    this.show = false;
  }
  render() {
    //jsx return array of elements
    let html = [
      <div id="backdrop" />,
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.onCloseDrawer.bind(this)} >X</button>
        </header>
        <main>
          <slot name="tab1-content"></slot>
          <slot name="tab2-content"></slot>
        </main>
      </aside>
    ]
    //console.log(this)
    return html
  }
}