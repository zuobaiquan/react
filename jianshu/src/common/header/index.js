import React, { Component } from 'react'
import {
  HeaderWraper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInput,
  WriteBook
} from './style'
class Header extends Component {
  render() {
    return (
      <HeaderWraper>
        <Logo />
        <Nav>
          <NavItem className='active'>首页</NavItem>
          <NavItem>下载App</NavItem>
          <SearchWrapper>
            <SearchInput></SearchInput>
            <span className="iconfont">&#xe64d;</span>
          </SearchWrapper>
        </Nav>
        <WriteBook><span className="iconfont">&#xe604;</span>写文章</WriteBook>
      </HeaderWraper>
    )
  }
}
export default Header