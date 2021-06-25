import React,{ PureComponent,PropTypes } from 'react';
import { connect } from 'react-redux';
import {actionCreators} from './store';
import ReactDOM from 'react-dom';
import {VideoPage,VideoList,Video} from './style.js';
import { Link } from 'react-router-dom';
import sayicon from '../../statics/sayicon.png';
import share from '../../statics/share.png';
import Nav from './components/nav'
class SwiperVideo extends PureComponent {
  render() {
    const {videoList} = this.props;
    // console.log(action);
    return (
      <VideoPage className="swiperVideo">
        <Nav />
        <VideoList>
          {
            videoList.map((item,index)=>{
              return (
                <Video className="swiperTxt" key={item.get('videoId')}>
                  <Link key={index} to={'/detail/'+item.get('videoId')}>
                    <div className="video-list-item">
                      <div className="video-list-item-main">
                        <div className="video-list-item-inner">
                          <div className="video-list-item-poster">
                            <img src={item.get('videoImgUrl')} />
                          </div>
                          <div className="video-list-item-status">
                            <div className="video-list-item-poster-shade">
                              <h4 className="video-list-item-poster-title">
                                {item.get('videoTitle')}
                              </h4>
                            </div>
                            <p className="video-list-item-poster-duration">
                              <span className="playNum">6.2万次播放</span>
                              <span>{item.get('videoCost')}</span>
                            </p>
                            
                            <div className="video-list-item-status-warper">
                              <div className="video-state-play"></div>
                              <div className="video-state video-state-end mask">
                                <div className="video-status-frame">
                                  <div className="palyend">
                                    <div className="video-icon-con">
                                      <div className="video-icon-refurbish"></div>
                                      <p>重播</p>
                                    </div>
                                    <div className="video-icon-con">
                                      <div className="video-icon-share"></div>
                                      <p>分享</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="video-state video-state-loading">
                                <div className="video-status-frame">
                                  <div className="video-icon-loading"></div>
                                </div>
                              </div>
                              <div className="video-state video-state-error mask">
                                <div className="video-status-frame">
                                  <div className="video-icon-err"></div>
                                </div>
                                <p>视频播放失败，请重试</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>  
                  </Link>
                  <div className="video-list-item-tools">
                    <Link key={index} to={'/author/'+item.get('appID')}>
                      <div className="video-list-item-author">
                        <div className="video-list-item-author-avatar">
                          <img src={item.get('appPic')} />
                          <span className="v-tag yellow"></span>
                        </div>
                        <div className="video-list-item-author-nickname">
                          <p>{item.get('appName')}</p>
                          <div className="item-author-msg">{item.get('companyName')}</div>
                        </div>
                      </div>
                    </Link>
                    <div className="video-list-item-btns">
                      <div className="video-list-item-btns-comment video-icon-btn-comment">
                        <img src={sayicon} />
                        <span>276</span>
                      </div>
                      <div className="video-list-item-btns-share video-icon-btn-share">
                        <img src={share} />
                        <span>分享</span>
                      </div>
                    </div>
                  </div>
                </Video>
              )
            })
          }
        </VideoList>
      </VideoPage>
    )
  }
  componentDidMount() {
    this.props.getVideoList(this.props.channelid);
    this.props.getChannelList();
    const SwiperDom = ReactDOM.findDOMNode(this);
    //获取视频列表页dom节点
    let startx, starty;
    SwiperDom.addEventListener("touchstart", function(e){
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    SwiperDom.addEventListener('touchmove', (e) => {
      var endx, endy;
      endx = e.changedTouches[0].pageX;
      endy = e.changedTouches[0].pageY;
      var direction = this.getDirection(startx, starty, endx, endy);
      switch (direction) {
          case 0:
              console.log("未滑动！");
              break;
          case 1:
              console.log("向上！");
              
              break;
          case 2:
              // debugger
              console.log("向下！");
              // if (document.documentElement.clientHeight < document.documentElement.offsetHeight-4){
              //   //执行相关脚本。
              //   console.log("向下！");
              //   this.props.getVideoList(this.props.channelid);
              // }
              
              break;
          case 3:
              console.log("向左！");
              break;
          case 4:
              console.log("向右！");
              break;
          default:
      }
      
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.channelid!==this.props.channelid){
      prevProps.getVideoList(prevProps.channelid);
    }
  }
  //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
  getDirection = (startx, starty, endx, endy)=> {
    var angx = endx - startx;
    var angy = endy - starty;
    var result = 0;

    //如果滑动距离太短
    if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
    }

    var angle = this.getAngle(angx, angy);
    if (angle >= -135 && angle <= -45) {
        result = 1;
    } else if (angle > 45 && angle < 135) {
        result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    } else if (angle >= -45 && angle <= 45) {
        result = 4;
    }

    return result;
  }
  getAngle = (angx, angy) => {
    return Math.atan2(angy, angx) * 180 / Math.PI;
  };
}
const mapDispatch = (dispatch) =>({
  getVideoList(channelid){
    dispatch(actionCreators.getVideo(channelid))
  },
  getChannelList(){
    dispatch(actionCreators.getChannel())
  },
  
})
const mapState = (state) => ({
  videoList:state.getIn(['swiper','videoList']),
  channelid:state.getIn(['swiper','channelid']),
  hasMore:state.getIn(['swiper','hasMore']),
  action:state.getIn(['swiper','action']),
  index:state.getIn(['swiper','index']),
})
export default connect(mapState,mapDispatch)(SwiperVideo);