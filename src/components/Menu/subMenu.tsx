import classNames from "classnames"
import React, { FunctionComponentElement, useContext } from "react"
import { MenuContext } from "./menu"
import { MenuItemProps } from "./menuItem"

export interface SubMenuProps {
  index?: string
  title: string
  className?: string
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, className, children } = props
  const context = useContext(MenuContext)
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
  })
  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${index}`,
        })
      } else {
        console.error(
          "Warning: SubMenu has a child which is not a MenuItem component"
        )
      }
    })
    return <ul className="viking-submenu">{childrenComponent}</ul>
  }
  return (
    <>
      <li key={index} className={classes}>
        <div className="submenu-title">{title}</div>
        {renderChildren()}
      </li>
    </>
  )
}
SubMenu.displayName = "SubMenu"
export default SubMenu
