# SideDrawer web component (stencil)

## Sample implementation

html
```html
  <side-drawer title="Side drawer title [required]">
    <!--slotted content [optional]-->
    <secton slot="tab1-content">
      This is body 1 of drawer
    </secton>
    <secton slot="tab2-content">
      This is body 2 of drawer
    </secton>
  </side-drawer>
```
javascript
```javascript
  //get reference to custom web component
  const drawer = document.querySelector('side-drawer')

  //show drawer
  drawer.open()

  //hide drawer
  drawer.close()

  //get state 
  if (drawer.open){
    console.log("drawer is open")
  }

```
