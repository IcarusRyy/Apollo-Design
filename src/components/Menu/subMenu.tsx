import classNames from "classnames"
import React, { FunctionComponentElement, useContext, useState } from "react"
import Icon from "../Icon"
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
  const openSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpen =
    index && context.mode === "vertical" ? openSubMenus.includes(index) : false
  const [menuOpen, setMenuOpen] = useState<boolean>(isOpen)
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
    "is-opened": menuOpen,
    "is-vertical": context.mode === "vertical",
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setMenuOpen(toggle)
    }, 100)
  }
  const clickEvents =
    context.mode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {}
  const hoverEvents =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true)
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false)
          },
        }
      : {}
  const renderChildren = () => {
    const subMenuClasses = classNames("viking-submenu", {
      "menu-opened": menuOpen,
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        })
      } else {
        console.error(
          "Warning: SubMenu has a child which is not a MenuItem component"
        )
      }
    })
    return <ul className={subMenuClasses}>{childrenComponent}</ul>
  }
  return (
    <>
      <li key={index} className={classes} {...hoverEvents}>
        <div className="submenu-title" {...clickEvents}>
          {title}
          <Icon icon="arrow-down" className="arrow-icon" />
        </div>
        {renderChildren()}
      </li>
    </>
  )
}
SubMenu.displayName = "SubMenu"
export default SubMenu
