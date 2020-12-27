import React from 'react';
import './styles/index.scss';
import Hello from './Hook/Hello'
import Button, { ButtonSize, ButtonType } from './component/button'

function App() {
  return (
    <div className="App">
      <Hello message='测试message'><span>111</span></Hello>
      <Button btnType={ButtonType.Default} size={ButtonSize.Large}>测试</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>测试</Button>
      <Button btnType={ButtonType.Link} target="_blank" href="www.baidu.com">百度</Button>
    </div>
  );
}

export default App;
