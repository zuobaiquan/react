import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from './store'

import Topic from './components/Topic';
import List from './components/List';
import {
  HomeWraper
} from './style'
class Home extends Component {
  componentDidMount() {
    this.props.getHomeData();
  }
  render() {
    // const { } = this.props
    return (
      <HomeWraper>
        <Topic />
        <List />
      </HomeWraper>
    )
  }
}
const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getHomeData() {
      dispatch(actionCreator.getHomeListData());
    },
    // getActicleData() {
    //   dispatch(actionCreator.getActicleListData());
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)