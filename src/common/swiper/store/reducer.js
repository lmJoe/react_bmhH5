//引入immutable.je防止store中的state值无意间被改动而无法定位
import { fromJS, merge } from 'immutable';
import * as constants from './constants';
const videodefaultState = fromJS({
  //定义一个初始数据
  videoList:[],
  channelList:[],
  channelid:100,//设置默认频道id
  pullState:false,//下拉刷新状态 false为下拉  true为loading
  isFoot:true,//阻止用户在上拉时频繁调用接口
  pageIndex:0,//当前页码
  finished:false,//判断视频是否已经加载完
})
const addVideoList = (state,action) => {
  return state.merge({
    'videoList':state.get('videoList').concat(action.videoList),
    'pageIndex':action.pageIndex,
    'isFoot':action.isFoot,
    'finished':action.finished
  })
}
//reducer文件导出的内容是一个纯函数（给一个固定的输入就一定会有一定的输出，同时不会有副作用）
export default ( state = videodefaultState, action ) => {//此处的defaultState是一个默认值
  //根据从组件中获取到的操作类型作判断并返回出相对应的操作
  switch(action.type){
    case constants.VIDEO_LIST:
      // return state.merge({
      //   videoList:fromJS(action.videoList),
      // })
      return addVideoList(state,action)
    case constants.CHANNEL_LIST:
      return state.merge({
        channelList:fromJS(action.channel),
      })
    case constants.CHOSE_CHANNEL:
      return state.merge({
        channelid:fromJS(action.channelid),
      })
    case constants.PULL_STATE:
      return state.merge({
        pullState:action.pullState,
      })
    case constants.LOAD_STATE:
      return state.merge({
        isFoot:action.isFoot,
        pageIndex:action.pageIndex,
        finished:action.finished,
      })
      
    default:
      return state;
  }
}