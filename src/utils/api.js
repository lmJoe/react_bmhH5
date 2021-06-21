import md5 from 'js-md5'
import {http,jsonp} from '../utils/http';
import {getRandomNum} from './units.js';
let baseURL = 'http://192.168.30.10:3000'//正式环境
// let baseURL = 'http://test-static01.baomihua.com/liming2'//正式环境
let baseURL1 = 'https://interface.video.baomihua.com/'//正式环境
let baseURL2 = 'https://push-common.baomihua.com:8081/';//正式环境
let baseURL3 = 'https://iopenapi.baomihua.com:8081';//首页视频列表
let appkey = "BF554022B5294002947702FF13B04B06";
let ai = "7917765ad5c8416999c4d31c1f56aa41"; // 应用id
let cid = 19;
let channelId = "6884d77a-4864-4012-9ba7-2febc57bd09d";
let ts = parseInt(new Date().getTime() / 1000);
let rd = getRandomNum(5, 50);
let size = 10;
/**
 * 获取导航列表
 */
function getChannelList(){
  return new Promise((resolve, reject) => {
    http({
      //这里是你自己的请求方式、url和data参数
      method: 'GET',
      url:baseURL+'/api/channelList.json',
      data: {},
      //假设后台需要的是表单数据这里你就可以更改
      headers: {
        "Content-Type":"application/json",
      }
    }).then(function (res) {
      resolve (res);
    }).catch(function (error) {
      console.log("网络异常~",error);
      reject(error)
    });
  }) 
}
/**
 * 获取播放页评论列表
 */
 function getCommendList(){
  return new Promise((resolve, reject) => {
    http({
      //这里是你自己的请求方式、url和data参数
      method: 'GET',
      url:baseURL+'/api/commend.json',
      data: {},
      //假设后台需要的是表单数据这里你就可以更改
      headers: {
        "Content-Type":"application/json",
      }
    }).then(function (res) {
      resolve (res);
    }).catch(function (error) {
      console.log("网络异常~",error);
      reject(error)
    });
  }) 
}
/**
 * 获取首页视频列表
 */
function getVideoList(){
  //获取当前13位时间戳
  const UnixTime = (new Date()).valueOf();
  const params = {
    dataType:'h5_sensorindex',
    pageSize:16,
    pageIndex:1,
    channelId:100,
    distinctid:'',
    jsoncallback:'jsoncallback'+UnixTime,
  }
  return new Promise((resolve, reject) => { 
    jsonp({
      url: '//interface.video.baomihua.com/index.ashx',
      type: 'GET',
      data:params,
      timeout: 30000,
      dataType: "jsonp",
      jsonp:'jsoncallback',
      jsonpcallback:'ok',
      success: function (data) {
        resolve (data);
      },
      fail:function(error){
        console.log("网络异常~",error);
        reject(error)
      }
    })

  }) 
}
// function getVideoList(){
//   return new Promise((resolve, reject) => {
//     http({
//       //这里是你自己的请求方式、url和data参数
//       method: 'POST',
//       url:baseURL3+"/api/cds/getVideoRandomList?appKey="+
//       appkey +
//       "&size=" +
//       size +
//       "&pageIndex=1" +
//       "&channelId=" +
//       channelId+
//       "&ts=" +
//       ts +
//       "&rd=" +
//       rd +
//       "&tk=" +
//       md5(`${ts}_${rd}_${appkey}_${size}`).toUpperCase(),
//       data: {},
//       //假设后台需要的是表单数据这里你就可以更改
//       headers: {
//         "Content-Type":"application/json",
//       }
//     }).then(function (res) {
//       resolve (res);
//     }).catch(function (error) {
//       console.log("网络异常~",error);
//       reject(error)
//     });
//   }) 
// }
/**
 * 获取详情页视频详情
 */
// function getVideoInfo(videoid){
//   return new Promise((resolve, reject) => {
//     http({
//       //这里是你自己的请求方式、url和data参数
//       method: 'GET',
//       url:baseURL+'/api/videoMsg.json',
//       data: {},
//       //假设后台需要的是表单数据这里你就可以更改
//       headers: {
//         "Content-Type":"application/json",
//       }
//     }).then(function (res) {
//       resolve (res);
//     }).catch(function (error) {
//       console.log("网络异常~",error);
//       reject(error)
//     });
//   }) 
// }
function getVideoInfo(videoid){
  //获取当前13位时间戳
  const UnixTime = (new Date()).valueOf();
  const params = {
    flvid:videoid,
    devicetype:'wap',
    dataType:'json',
    jsoncallback:'zepto'+UnixTime,
  }
  return new Promise((resolve, reject) => { 
    jsonp({
      url: '//play.baomihua.com/getvideourl.aspx',
      type: 'GET',
      data:params,
      timeout: 30000,
      dataType: "jsonp",
      jsonp:'zepto',
      jsonpcallback:'ok',
      success: function (data) {
        resolve (data);
      },
      fail:function(error){
        console.log("网络异常~",error);
        reject(error)
      }
    })

  }) 
}
function getGuessVideoList(videoId){
  return new Promise((resolve, reject) => {
    http({
      //这里是你自己的请求方式、url和data参数
      method: 'GET',
      url:'https://t-interface.baomihua.com/api/video/getAliRecVideo',
      data: {
        videoId:videoId,
        sence:'mvNor',
      },
      //假设后台需要的是表单数据这里你就可以更改
      headers: {
        "Content-Type":"application/json",
      }
    }).then(function (res) {
      resolve (res);
    }).catch(function (error) {
      console.log("网络异常~",error);
      reject(error)
    });
  }) 
}
export {
  getChannelList,
  getVideoList,
  getVideoInfo,
  getGuessVideoList,
  getCommendList
}