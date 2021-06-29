import * as constants from './constants';
import { fromJS }  from 'immutable';
import { getVideoList,getChannelList } from "../../../utils/api.js";
const VideoList = (data) => ({
  //此处的data由于是一个普通数组，但是我们现在的state是一个immutable对象，此时需要通过immutable吧data抓换位一个immutable数组
  'type':constants.VIDEO_LIST,
  'videoList':fromJS(data),
})
export const pullState = (data) => ({
  'type':constants.PULL_STATE,
  'pullState':data,//操作类型
})
export const loadState = (params) =>({
  'type':constants.LOAD_STATE,
  'isFoot':params.isFoot,//阻止用户频繁上调接口
  'pageIndex':params.pageIndex,//当前页码
  'finished':params.finished,//判断视频是否已经加载完
})
const setChannel = (data) => ({
  'type':constants.CHANNEL_LIST,
  'channel':fromJS(data),
})
export const choseChannel = (data) => ({
  'type':constants.CHOSE_CHANNEL,
  'channelid':data,
})
export const getVideo = (channelid,pageIndex) => {
  //此处由于使用了redux-thunk 所以可以返回一个函数，在此函数中写一个异步请求
  return (dispatch) => {
    getVideoList(channelid,pageIndex).then(
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
export const getChannel = () => {
  //此处由于使用了redux-thunk 所以可以返回一个函数，在此函数中写一个异步请求
  return (dispatch) => {
    getChannelList().then(
      (res) => {
        const data = res.data;
        const action = setChannel(data);
        dispatch(action);//将action派发给store
      },
      (error) => {
        console.log("get response failed!");
      }
    );
  }
}