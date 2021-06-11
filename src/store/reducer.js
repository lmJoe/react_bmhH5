import { combineReducers } from 'redux-immutable';//combineReducers用于合并各个组件中的store中reducer文件中的方法
import { reducer as swiperReducer } from '../common/swiper/store'; //reducer as headerReducer意为把reducer比作headerReducer来使用
import { reducer as pagesReducer } from '../pages/store'; //reducer as headerReducer意为把reducer比作headerReducer来使用
//引入redux-immutable对state做操作 是state成为一个immutable对象
export default combineReducers({
  swiper:swiperReducer,
  pages:pagesReducer
})