import React from 'react';
import './styles/index.scss';
import Hello from './Hook/Hello'
import Button from './component/button'

function App() {
  return (
    <div className="App">
      <Hello message='测试message'><span>111</span></Hello>
      <Button btnType='default' size="lg">测试</Button>
      <Button btnType="danger" size="sm">测试</Button>
      <Button btnType="link" target="_blank" href="http://www.baidu.com">百度</Button>
    </div>
  );
}

export default App;
