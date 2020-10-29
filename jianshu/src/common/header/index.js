import React, { Component } from 'react'
import {
  HeaderWraper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInput,
  WriteBook,
  SearchIcon,
} from './style'
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false,
    }
  }
  handleInputFocus = () => {
    this.setState({
      focused: true
    })
  }
  handleInputBlur = () => {
    this.setState({
      focused: false
    })
  }
  render() {
    const { focused } = this.state
    return (
      <HeaderWraper>
        <Logo />
        <Nav>
          <NavItem className='active'>首页</NavItem>
          <NavItem>下载App</NavItem>
          <SearchWrapper>
            <SearchInput
              focus={focused}
              onFocus={() => this.handleInputFocus()}
              onBlur={() => this.handleInputBlur()}
            ></SearchInput>
            <SearchIcon className={focused ? 'focused' : ''}><span className="iconfont">&#xe64d;</span></SearchIcon>
          </SearchWrapper>
        </Nav>
        <WriteBook><span className="iconfont">&#xe604;</span>写文章</WriteBook>
      </HeaderWraper>
    )
  }
}
export default Header