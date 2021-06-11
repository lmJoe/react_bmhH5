import {http,jsonp} from '../utils/http';
let baseURL = 'http://192.168.30.10:3000'////正式环境
let baseURL1 = 'https://interface.video.baomihua.com/'//正式环境
let baseURL2 = 'https://push-common.baomihua.com:8081/';//正式环境
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
    distinctid:'178ecfca643977-0298704efec714-2249576f-230400-178ecfca64481f',
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
  getGuessVideoList
}