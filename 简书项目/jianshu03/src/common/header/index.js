import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import {
  HeaderWraper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInput,
  WriteBook,
  SearchIcon,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
} from './style'
class Header extends Component {

  getListArea(show) {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>热门搜索<SearchInfoSwitch><span className="iconfont">&#xe601;</span>换一批</SearchInfoSwitch></SearchInfoTitle>
          <SearchInfoList>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused } = this.props
    return (
      <HeaderWraper>
        <Logo />
        <Nav>
          <NavItem className='active'>首页</NavItem>
          <NavItem>下载App</NavItem>
          <SearchWrapper>
            <SearchInput
              focus={focused}
              onFocus={this.props.handleInputFocus}
              onBlur={this.props.handleInputBlur}
            ></SearchInput>
            <SearchIcon className={focused ? 'focused' : ''}><span className="iconfont">&#xe64d;</span></SearchIcon>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <WriteBook><span className="iconfont">&#xe604;</span>写文章</WriteBook>
      </HeaderWraper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    // focused: state.get('header').get('focused')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreator.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)