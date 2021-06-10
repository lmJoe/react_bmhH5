//引入immutable.je防止store中的state值无意间被改动而无法定位
import { fromJS, merge } from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
  //定义一个初始数据
  title:'',
  content:''
})
//reducer文件导出的内容是一个纯函数（给一个固定的输入就一定会有一定的输出，同时不会有副作用）
export default ( state = defaultState, action ) => {//此处的defaultState是一个默认值
  //根据从组件中获取到的操作类型作判断并返回出相对应的操作
  switch(action.type){
    
    default:
      return state;
  }
}