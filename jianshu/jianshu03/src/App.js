import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import { Globalstyle } from './style'
import { IconFontstyle } from '@/statics/iconfont/iconfont'
import Home from '@/pages/home'
import Header from '@/common/header'
import Detail from '@/pages/detail'
import store from '@/store';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          {/* <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={Write}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route> */}
          <Globalstyle />
          <IconFontstyle />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App
