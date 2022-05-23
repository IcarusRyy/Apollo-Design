import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome"
import classNames from "classnames"
import React from "react"

export type ThemeProps =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark"

//   icon属性 使用字符串的方式，需要使用library，可以利用library.add（）按需引入
// 也可以利用所有图标的集合fas全部引入
export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...rest } = props
  // icon-primary
  const classes = classNames("viking-icon", className, {
    [`icon-${theme}`]: theme,
  })
  return <FontAwesomeIcon className={classes} {...rest} />
}
export default Icon
