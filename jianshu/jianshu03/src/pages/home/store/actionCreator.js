import axios from 'axios'
import * as actionType from './actionType';
const getHomeList = (data) => {
  return {
    type: actionType.GET_HOMRLIST,
    topicList: data.topicList,
    articleList: data.articleList
  }
}
const addHomeList = (list, nextPage) => ({
  type: actionType.ADD_ARTICLE_LIST,
  list,
  nextPage
})
export const getHomeListData = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      const data = res.data
      dispatch(getHomeList(data.data))
    })
  }
}
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/articleList.json?page=' + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1));
    });
  }
}