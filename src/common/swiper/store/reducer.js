//引入immutable.je防止store中的state值无意间被改动而无法定位
import { fromJS, merge } from 'immutable';
import * as constants from './constants';
const videodefaultState = fromJS({
  //定义一个初始数据
  videoList:[],
  channelList:[],
  channelid:100,//设置默认频道id
})
//reducer文件导出的内容是一个纯函数（给一个固定的输入就一定会有一定的输出，同时不会有副作用）
export default ( state = videodefaultState, action ) => {//此处的defaultState是一个默认值
  //根据从组件中获取到的操作类型作判断并返回出相对应的操作
  switch(action.type){
    case constants.VIDEO_LIST:
      return state.merge({
        videoList:fromJS(action.videoList),
      })
    case constants.CHANNEL_LIST:
      return state.merge({
        channelList:fromJS(action.channel),
      })
    case constants.CHOSE_CHANNEL:
      return state.merge({
        channelid:fromJS(action.channelid),
      })
    default:
      return state;
  }
}