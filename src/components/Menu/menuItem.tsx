import classNames from "classnames"
import React, { useContext } from "react"
import { MenuContext } from "./menu"

export interface MenuItemProps {
  index?: string
  disable?: boolean
  className?: string
  style?: React.CSSProperties
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disable, className, style, children } = props
  const context = useContext(MenuContext)
  const classes = classNames("menu-item", className, {
    "is-disabled": disable,
    "is-active": context.index === index,
  })
  const handleClick = () => {
    if (context.onSelect && !disable && typeof index === "string") {
      context.onSelect(index)
    }
  }
  return (
    <>
      <ul className={classes} style={style} onClick={handleClick}>
        {children}
      </ul>
    </>
  )
}
/**
 * 判断children 子组件的类型
 * 通过React.Children.map 和 React.Children.forEach
 * displayName 是 React内置的一个属性，可以帮助我们判断children的类型
 */
MenuItem.displayName = "MenuItem"
export default MenuItem
