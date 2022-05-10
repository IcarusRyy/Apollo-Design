import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <h2>My Button Component</h2>
      <Button>测试 默认</Button>
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
      <Button btnType={ButtonType.Dashed}>dashed Button</Button>
    </div>
  );
}

export default App;
