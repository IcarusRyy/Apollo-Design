import React from "react"
import { render, RenderResult } from "@testing-library/react"
import Menu, { MenuProps } from "./menu"
import MenuItem from "./menuItem"

const testProps: MenuProps = {
  defaultIndex: "0",
  onSelect: jest.fn(),
  className: "test",
}
const testVerProps: MenuProps = {
  defaultIndex: "0",
  mode: "vertical",
}
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={"0"}>active</MenuItem>
      <MenuItem disable index={"1"}>
        disable
      </MenuItem>
      <MenuItem index={"2"}>xyz</MenuItem>
    </Menu>
  )
}
let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement
describe("test Menu and MenuItem component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    wrapper = render(generateMenu(testProps))
    // eslint-disable-next-line testing-library/prefer-screen-queries
    menuElement = wrapper.getByTestId("test-menu")
    // eslint-disable-next-line testing-library/prefer-screen-queries
    activeElement = wrapper.getByText("active")
    // eslint-disable-next-line testing-library/prefer-screen-queries
    disabledElement = wrapper.getByText("disable")
  })
  // 提供默认属性 是否会显示正常的class 和 行为
  it("should render correct Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument()
  })
  // 点击以后会不会显示到正确的item上，测试对应的回调是不是成功触发，disable 点击是不会变化的。
  it("click items should change active and call the right callback", () => {})
  // 测试vertical是否渲染正确的class
  it("should render vertical mode when mode is set to vertical", () => {})
})
