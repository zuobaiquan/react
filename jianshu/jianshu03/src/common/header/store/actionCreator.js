import axios from 'axios'
import { fromJS } from 'immutable';
import * as actionType from './actionType';
const changeList = (data) => ({
  type: actionType.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})
export const searchFocus = () => ({
  type: actionType.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionType.SEARCH_BLUR
})

export const getSearchList = () => {
  return (dispatch) => {
    axios.get('/api/searchList.json').then((res) => {
      const data = res.data
      dispatch(changeList(data.data))
    })
  }
}

export const mouseEnter = () => ({
  type: actionType.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionType.MOUSE_LEAVE
})
export const changePage = (page) => {
  // console.log('page', page)
  return {
    type: actionType.CHANGE_PAGE,
    page
  }
}
// export const changePage = (page) => ({
//   type: actionType.CHANGE_PAGE,
//   page
// })

