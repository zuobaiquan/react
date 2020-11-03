import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import Header from '@/common/header'
import Topic from './components/Topic';
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
      <>
        <Header></Header>
        <HomeWraper>
          <Topic />
        </HomeWraper>
      </>
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
      dispatch(actionCreator.getHomeList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)