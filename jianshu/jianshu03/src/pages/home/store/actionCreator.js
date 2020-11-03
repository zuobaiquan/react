import axios from 'axios'
import * as actionType from './actionType';
const getDataList = (data) => {
  return {
    type: actionType.GET_HOMRLIST,
    topicList: data.topicList
  }
}
export const getHomeList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      const data = res.data
      dispatch(getDataList(data.data))
    })
  }
}