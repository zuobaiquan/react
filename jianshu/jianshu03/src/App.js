import React from 'react';
import { Provider } from 'react-redux'
import { Globalstyle } from './style'
import { IconFontstyle } from '@/statics/iconfont/iconfont'
import Home from '@/pages/home'
import store from '@/store';
function App() {
  return (
    <Provider store={store}>
      <Home />
      <Globalstyle />
      <IconFontstyle />
    </Provider>
  );
}

export default App
