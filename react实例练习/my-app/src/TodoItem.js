import React ,{ Component } from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    const { content } = this.props
    return <div onClick={this.handleClick}>{content}</div>;
  }
  handleClick(){
    const { deleteItem,index } = this.props
    deleteItem(index)
  }
}
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number

  // PropTypes.any.isRequired
  // PropTypes.oneOf(['News', 'Photos'])
}
TodoItem.defaultProps = {
  test:'hello world'
}

// 文档 https://reactjs.org/docs/typechecking-with-proptypes.html

export default TodoItem