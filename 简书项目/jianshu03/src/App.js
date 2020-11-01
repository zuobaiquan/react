import React from 'react';
import { Provider } from 'react-redux'
import { Globalstyle } from './style'
import { IconFontstyle } from '@/statics/iconfont/iconfont'
import Header from '@/common/header'
import store from '@/store';
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Globalstyle />
      <IconFontstyle />
    </Provider>
  );
}

export default App
