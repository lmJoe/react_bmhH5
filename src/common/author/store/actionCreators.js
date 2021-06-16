import * as constants from './constants';
import { fromJS }  from 'immutable';
import { getVideoList } from "../../../utils/api.js";
const VideoList = (data) => ({
  //此处的data由于是一个普通数组，但是我们现在的state是一个immutable对象，此时需要通过immutable吧data抓换位一个immutable数组
  'type':constants.VIDEO_LIST,
  'videoList':fromJS(data),
})
export const getVideo = () => {
  //此处由于使用了redux-thunk 所以可以返回一个函数，在此函数中写一个异步请求
  return (dispatch) => {
    getVideoList().then(
      (res) => {
        const data = res.Videolist;
        const action = VideoList(data);
        dispatch(action);//将action派发给store
      },
      (error) => {
        console.log("get response failed!");
      }
    );
  }
}