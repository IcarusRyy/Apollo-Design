import React from "react"
import Button, { ButtonSize, ButtonType } from "./components/Button/button"
import Menu from "./components/Menu/menu"
import MenuItem from "./components/Menu/menuItem"
import SubMenu from "./components/Menu/subMenu"

function App() {
  return (
    <div className="App">
      <h2>My Button Component</h2>
      {/* <Button>测试 默认</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.large}>
        LargePrimary
      </Button>
      <Button disabled>测试 默认</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        Small Danger
      </Button>
      <Button
        btnType={ButtonType.Link}
        size={ButtonSize.Small}
        href="http://www.baidu.com"
        target="_blank"
      >
        百度 Large Link
      </Button>
      <Button btnType={ButtonType.Link} size={ButtonSize.Small} disabled>
        disable link
      </Button>
      <Button btnType={ButtonType.Dashed}>dashed Button</Button> */}
      <Menu
        defaultIndex={"0"}
        mode="horizontal"
        onSelect={(index) => console.log(index)}
      >
        <MenuItem disable={true}>a</MenuItem>
        <MenuItem>b</MenuItem>
        <MenuItem>c</MenuItem>
        <MenuItem index={"3"}>d</MenuItem>
        <SubMenu title="下拉菜单">
          <MenuItem>a1</MenuItem>
          <MenuItem>b2</MenuItem>
          <MenuItem>c2</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default App
