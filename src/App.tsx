import { library } from "@fortawesome/fontawesome-svg-core"
import { faCoffee, fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Button, { ButtonSize, ButtonType } from "./components/Button/button"
import Icon from "./components/Icon"
import Menu from "./components/Menu/menu"
import MenuItem from "./components/Menu/menuItem"
import SubMenu from "./components/Menu/subMenu"
library.add(fas)
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
        mode="vertical"
        onSelect={(index) => console.log(index)}
        defaultOpenSubMenus={["4"]}
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
      {/* <FontAwesomeIcon icon={faCoffee} size="10x" /> */}
    </div>
  )
}

export default App
