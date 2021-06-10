/**
 * 网络请求配置
 */
import axios from "axios";

axios.defaults.timeout = 100000;
// axios.defaults.baseURL = "http://192.168.30.10:3000/";
/**
* http request 拦截器
*/
// axios.interceptors.request.use(
//   (config) => {
//     config.data = JSON.stringify(config.data);
//     config.headers = {
//       "Content-Type": "application/json",
//     };
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// /**
// * http response 拦截器
// */
// axios.interceptors.response.use(
//   (response) => {
//     if (response.data.errCode === 2) {
//       console.log("过期");
//     }
//     return response;
//   },
//   (error) => {
//     console.log("请求出错：", error);
//   }
// );
//失败提示
function msag(err) {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        alert(err.response.data.error.details);
        break;
      case 401:
        alert("未授权，请登录");
        break;

      case 403:
        alert("拒绝访问");
        break;

      case 404:
        alert("请求地址出错");
        break;

      case 408:
        alert("请求超时");
        break;

      case 500:
        alert("服务器内部错误");
        break;

      case 501:
        alert("服务未实现");
        break;

      case 502:
        alert("网关错误");
        break;

      case 503:
        alert("服务不可用");
        break;

      case 504:
        alert("网关超时");
        break;

      case 505:
        alert("HTTP版本不受支持");
        break;
      default:
    }
  }
}
const http = options => {
  var that = this;
  return new Promise((resolve, reject) => {
    const defaultOptions = {};
    const newOptions = {
      ...defaultOptions,
      ...options
    };
    // var token = common.getCookie("accessToken");
    //headers默认传递json格式数据，这里也可以设置token，每次调用都会携带
    newOptions.headers = {
      // 'content-Type': 'application/json;charset=UTF-8',
      // "authorization":token,
      // "deviceToken":token,
      ...newOptions.headers,
    };
    //这里可以在调用的时候看到你的method、url、data、headers等参数
    axios({
      method: newOptions.method,
      url: newOptions.url,
      data: newOptions.data,
      headers: newOptions.headers,
      dataType: 'JSONP',
    }).then(res => {
      if (res.status == 200) {
       //这里我们只需要获取返回的data中的数据即可
        resolve(res.data);
        
      }else {
        reject(res);
      }
    }).catch(err => {
      msag(err)
      reject(err);
    })
  })
};
/* eslint-disable */
const jsonp = function jsonp (params) {
  params = params || {};
  params.data = params.data || {};
  var json = params.jsonp ? jsonp(params) : json(params);

  function jsonp(params) {
    var callbackName = params.jsonp + (new Date().getTime());
    var head = document.getElementsByTagName('head')[0];
    params.data['jsoncallback'] = callbackName;
    var data = formatParams(params.data);
    var script = document.createElement('script');
    head.appendChild(script);
    window[callbackName] = function (json) {
      head.removeChild(script);
      clearTimeout(script.timer);
      window[callbackName] = null;
      params.success && params.success(json);
    };
    script.src = params.url + '?' + data;
    if (params.time) {
      script.timer = setTimeout(function () {
        window[callbackName] = null;
        head.removeChild(script);
        params.error && params.error({
          message: '超时'
        });
      }, params.time);
    }
  };
  function formatParams(data) {
    var arr = [];
    for (var name in data) {
      arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    };
    return arr.join('&')
  }
}
export {
  http,
  jsonp
}
