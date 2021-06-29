import React,{ PureComponent,PropTypes } from 'react';
import { connect } from 'react-redux';
import {actionCreators} from './store';
import ReactDOM from 'react-dom';
import {VideoPage,VideoList,Video,RefreshArea,VideoMargin,Loadbottom} from './style.js';
import { Link } from 'react-router-dom';
import sayicon from '../../statics/sayicon.png';
import share from '../../statics/share.png';
import topMore from '../../statics/topMore.png';
import loading from '../../statics/loading.svg';
import Nav from './components/nav'
import {isTop} from '../../utils/units.js';
class SwiperVideo extends PureComponent {
  render() {
    const {videoList,pullState,finished} = this.props;
    console.log(videoList);
    return (
      <VideoPage className="swiperVideo"
        ref={
          onPullUp => {
            this.onPullUp = onPullUp;
          }
        }
      >
        <Nav />
        <VideoMargin></VideoMargin>
        <VideoList
          ref={
            videoListArea => {
              this.videoListArea = videoListArea;
            }
          }
        >
          <RefreshArea
          ref={
            refreshArea => {
              this.refreshArea = refreshArea;
            }
          }
          >
            <img 
            ref={
              refreshImg => {
                this.refreshImg = refreshImg;
              }
            }
            src={topMore} />
          </RefreshArea>
          {
            videoList.size>0?
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
            }):''
          }
          {
            finished?<Loadbottom>正在加载</Loadbottom>:<Loadbottom>已没有更多视频</Loadbottom>
          }
          
        </VideoList>
      </VideoPage>
    )
  }
  componentDidMount() {
    this.props.getVideoList(this.props.channelid,this.props.pageIndex);
    this.props.getChannelList();
    const SwiperDom = ReactDOM.findDOMNode(this);
    //获取视频列表页dom节点
    let startx, starty;
    SwiperDom.addEventListener("touchstart", function(e){
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    SwiperDom.addEventListener('touchmove', (e) => {
      if(isTop() && (e.touches[0].pageY-starty) > 0){
        const Ydistance = e.touches[0].pageY-starty;
        if(Ydistance<300){
          this.videoListArea.style.transform = "translateY("+Ydistance+"px)";
          this.videoListArea.style.transition = "0.3s ease 0s";
          
        }
      }
    })
    SwiperDom.addEventListener('touchend', (e) => {
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
              this.loadData();
              break;
          case 2:
              console.log("向下！");
              this.videoListArea.style.transform = "translateY(1.1rem)";
              this.videoListArea.style.transition = "0.3s ease 0s";
              this.refreshImg.src=loading;

              if(isTop()){
                var that = this;
                setTimeout(function(){
                  that.videoListArea.style.transform = "translateY(0)";
                  that.videoListArea.style.transition = "0.3s ease 0s";
                  that.refreshImg.src=topMore;
                  that.props.getVideoList(that.props.channelid,1);
                },1500)
              }
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
      prevProps.getVideoList(prevProps.channelid,this.props.pageIndex);
    }
  }
  //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
  getDirection = (startx, starty, endx, endy)=> {
    var angx = endx - startx;
    var angy = endy - starty;
    var result = 0;

    //如果滑动距离太短
    if (Math.abs(angx) < 5 && Math.abs(angy) < 5) {
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
  loadData(){
    console.log("数据的高-------------------------", this.onPullUp.clientHeight);
    console.log("滚动的高------------------------", document.documentElement.scrollTop);
    console.log("滚动的高------------------------", document.body.scrollTop);
    console.log("屏幕的高------------------------", document.documentElement.clientHeight);
    let dataHeight = this.onPullUp.clientHeight;
    let scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
    let screenHeight = document.documentElement.clientHeight;
    const h = 10;//自定义距离底部多少时concat数据
    debugger
    if (dataHeight - scrollHeight - h < screenHeight && this.props.isFoot) {
        const pageIndex = this.props.pageIndex;
        const params = {
          isFoot:false,
          pageIndex:pageIndex,
          finished:false,
        }
        this.props.loadState(params)
        this.props.getVideoList(this.props.channelid,pageIndex);
        // meActs.getRecentReadList(this.accessKey, this.accessID, params).then((res) => {
        //     if (res.data.code === 10000 && res.data.data.list.length > 0) {
        //         this.setState({
        //             isFoot: true,
        //         });
        //         this._page++;
        //     }
        //     //数据加载完毕
        //     if (res.data.code === 10000 && res.data.data.list.length == 0) {
        //         this.setState({
        //             finished: true,
        //         })
        //     }
        // });
    }
  }
}
const mapDispatch = (dispatch) =>({
  getVideoList(channelid,pageIndex){
    dispatch(actionCreators.getVideo(channelid,pageIndex))
  },
  getChannelList(){
    dispatch(actionCreators.getChannel())
  },
  pullState(boolean){
    dispatch(actionCreators.pullState(boolean))
  },
  loadState(params){
    dispatch(actionCreators.loadState(params))
  },
})
const mapState = (state) => ({
  videoList:state.getIn(['swiper','videoList']),
  channelid:state.getIn(['swiper','channelid']),
  pullState:state.getIn(['swiper','pullState']),
  action:state.getIn(['swiper','action']),
  pageIndex:state.getIn(['swiper','pageIndex']),
  isFoot:state.getIn(['swiper','isFoot']),
})
export default connect(mapState,mapDispatch)(SwiperVideo);