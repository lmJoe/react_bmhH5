//引入immutable.je防止store中的state值无意间被改动而无法定位
import { fromJS, merge } from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
  //定义一个初始数据
  title:'',
  videoUrl:'',
  anthor:'',
  headImg:'',
  videoImg:'',
  totaltime:'',
  userid:'',
  host:'',
  dir:'',
  stream_name:'',
  videofiletype:'',
  guessVideoList:[],
  recommendVideoList:[],
  commendList:[],
})
const setVideoInfo = (state,action) => {
  //将获取到的数据替换到defaultState对应的数组中去(此处的action数据为js对象，defaultState中的为immutable对象)
  return state.merge({//merge为immutable对象的一个方法，merge可以接收一个对象合并多个属性
    title:fromJS(action.title),
    videoUrl:fromJS(action.videoUrl),
    // anthor:fromJS(action.recommendList),
    // headImg:fromJS(action.video_img),
    videoImg:fromJS(action.videoImg),
    totaltime:fromJS(action.totaltime),
    userid:fromJS(action.userid),
    host:fromJS(action.host),
    dir:fromJS(action.dir),
    stream_name:fromJS(action.stream_name),
    videofiletype:fromJS(action.videofiletype),
  });
}
const setGuessList = (state,action) => {
  //将获取到的数据替换到defaultState对应的数组中去(此处的action数据为js对象，defaultState中的为immutable对象)
  return state.merge({//merge为immutable对象的一个方法，merge可以接收一个对象合并多个属性
    guessVideoList:fromJS(action.guesslist),
  });
}
const setRecommendList = (state,action) => {
  //将获取到的数据替换到defaultState对应的数组中去(此处的action数据为js对象，defaultState中的为immutable对象)
  return state.merge({//merge为immutable对象的一个方法，merge可以接收一个对象合并多个属性
    recommendVideoList:fromJS(action.recommendList),
  });
}
const setCommendList = (state,action) => {
  //将获取到的数据替换到defaultState对应的数组中去(此处的action数据为js对象，defaultState中的为immutable对象)
  return state.merge({//merge为immutable对象的一个方法，merge可以接收一个对象合并多个属性
    commendList:fromJS(action.commendList),
  });
}
//reducer文件导出的内容是一个纯函数（给一个固定的输入就一定会有一定的输出，同时不会有副作用）
export default ( state = defaultState, action ) => {//此处的defaultState是一个默认值
  //根据从组件中获取到的操作类型作判断并返回出相对应的操作
  switch(action.type){
    case constants.DETAIL_VIDEOINFO:
      return setVideoInfo(state,action)
    case constants.GUESS_VIDEO:
      return setGuessList(state,action)
    case constants.RECOMMEND_LIST:
      return setRecommendList(state,action)
    case constants.COMMEND_LIST:
      return setCommendList(state,action)
    default:
      return state;
  }
}