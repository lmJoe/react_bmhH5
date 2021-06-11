import axios from 'axios';
import * as constants from './constants';
import { getVideoInfo,getGuessVideoList } from "../../utils/api.js";
import { fromJS }  from 'immutable';
const setVideoInfo = (data) => ({
  "type":constants.DETAIL_VIDEOINFO,
  "videoMsg":fromJS(data),
  "title":fromJS(data.title),
  "videoUrl":fromJS(data.alipalyurl),
  "videoImg":fromJS(data.video_img),
  "totaltime":fromJS(data.totaltime),
  "userid":fromJS(data.userid),
})
const setGuessVideo = (data) => ({
  "type":constants.GUESS_VIDEO,
  "guesslist":fromJS(data.retStr),
})
export const getVideoDetail = (videoid) => {
  //此处由于使用了redux-thunk 所以可以返回一个函数，在此函数中写一个异步请求
  return (dispatch) => {
    getVideoInfo(videoid).then(
      (res) => {
        const data = res;
        const action = setVideoInfo(data);
        dispatch(action);//将action派发给store
      },
      (error) => {
        console.log("get response failed!");
      }
    );
  }
}
export const getGuessVideo = (videoid) => {
  //此处由于使用了redux-thunk 所以可以返回一个函数，在此函数中写一个异步请求
  return (dispatch) => {
    getGuessVideoList(videoid).then(
      (res) => {
        const data = res;
        const action = setGuessVideo(data);
        dispatch(action);//将action派发给store
      },
      (error) => {
        console.log("get response failed!");
      }
    );
  }
}