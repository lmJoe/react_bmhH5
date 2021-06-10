import React from 'react';
import Loadable from 'react-loadable';
const LoadableComponent = Loadable({
  // 加载当前目录下的index.js文件
  loader: () => import('./'),
  //进入组件加载时出现的loading动画
  loading(){
    return <div>正在加载</div>
  },
});
export default () => <LoadableComponent/>;