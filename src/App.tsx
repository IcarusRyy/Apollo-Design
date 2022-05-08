import React from "react"
import "./App.css"
import Button, { ButtonSize, ButtonType } from "./components/Button/button"

function App() {
  return (
    <div className="App">
      ts-with-react
      <h1>hello world h1</h1>
      <h2>hello world h2</h2>
      <Button>测试 默认</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.large}>
        测试 LargePrimary
      </Button>
      <Button disabled>测试 默认</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        测试 Small Danger
      </Button>
      <Button
        btnType={ButtonType.Link}
        size={ButtonSize.large}
        href="www.baidu.com"
      >
        百度 Large Link
      </Button>
    </div>
  )
}

export default App
