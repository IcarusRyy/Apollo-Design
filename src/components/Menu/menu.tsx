import React, { createContext, useState } from "react"
import classNames from "classnames"
import { MenuItemProps } from "./menuItem"

type OnSelectCallback = (selectedIndex: string) => void
type MenuMode = "horizontal" | "vertical"
// 1、定义组件的属性
export interface MenuProps {
  defaultIndex?: string
  className?: string
  mode?: MenuMode
  // 用户定义的行内样式
  style?: React.CSSProperties
  onSelect?: OnSelectCallback
  defaultOpenSubMenus?: string[]
}
// 4、父组件的属性传递给子组件
interface IMenuContext {
  index: string
  onSelect?: OnSelectCallback
  mode?: MenuMode
  defaultOpenSubMenus?: string[]
}
export const MenuContext = createContext<IMenuContext>({ index: "0" })
// 2、定义组件
const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    mode,
    style,
    children,
    defaultIndex,
    onSelect,
    defaultOpenSubMenus,
  } = props
  const [currentActive, setCurrentActive] = useState<string>(
    defaultIndex || "0"
  )
  const handleClick = (index: string) => {
    setCurrentActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive,
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  }
  // 3、定义组件的class
  // viking-menu 默认的class， className为用户传入的class，默认是horizontal
  const classes = classNames("viking-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  })
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, { index: index.toString() })
      } else {
        console.error(
          "Warning:Menu has a child which is not a MenuItem component"
        )
      }
    })
  }
  return (
    <>
      <ul className={classes} style={style}>
        <MenuContext.Provider value={passedContext}>
          {renderChildren()}
        </MenuContext.Provider>
      </ul>
    </>
  )
}
Menu.defaultProps = {
  // 默认选中第一项
  defaultIndex: "0",
  // 默认是横向
  mode: "horizontal",
  // 纵向的时候  是否默认展开
  defaultOpenSubMenus: [],
}
export default Menu
