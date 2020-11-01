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
  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS();
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>热门搜索<SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}><span className="iconfont">&#xe601;</span>换一批</SearchInfoSwitch></SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props
    return (
      <HeaderWraper>
        <Logo />
        <Nav>
          <NavItem className='active'>首页</NavItem>
          <NavItem>下载App</NavItem>
          <SearchWrapper>
            <SearchInput
              focus={focused}
              onFocus={() => handleInputFocus(list)}
              onBlur={handleInputBlur}
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
    list: state.getIn(['header', 'list']),
    // focused: state.get('header').get('focused')
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreator.getSearchList())
      dispatch(actionCreator.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreator.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreator.mouseLeave());
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreator.changePage(page + 1));
      } else {
        dispatch(actionCreator.changePage(1));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)