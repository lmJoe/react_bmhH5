import React,{ PureComponent,Suspense,lazy } from 'react';
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
  constructor(props) {
    super(props);
    this.state = {
      finished: false,//是否全部加载完毕
      isFoot: true,   //阻止用户频繁上拉调接口
    }
  }
  render() {
    const {videoList} = this.props;
    const {finished} = this.state;
    if(videoList.size == 0){
      this.setState({
        finished: true,
      });
    }
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
            finished?<Loadbottom>已没有更多视频</Loadbottom>:<Loadbottom><img src={loading} /></Loadbottom>
          }
          
        </VideoList>
      </VideoPage>
    )
  }
  componentDidMount() {
    const params = {
      channelid:this.props.channelid,
      pageIndex:this.props.pageIndex,
      getVideoType:'pullget',
    }
    this.props.getVideoList(params);
    this.props.getChannelList();
    // const SwiperDom = ReactDOM.findDOMNode(this);
    const SwiperDom = this.videoListArea;
    //获取视频列表页dom节点
    let startx, starty;
    let that = this;
    SwiperDom.addEventListener("touchstart", function(e){
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
        that.setState({
          isFoot: true,
        });
    }, false);
    SwiperDom.addEventListener('touchmove', (e) => {
      if(isTop() && (e.touches[0].pageY-starty) > 0){
        const Ydistance = e.touches[0].pageY-starty;
        if(Ydistance<300){
          SwiperDom.style.transform = "translateY("+Ydistance+"px)";
          SwiperDom.style.transition = "0.3s ease 0s";
        }
      }
    })
    SwiperDom.addEventListener('touchend', (e) => {
      var endx, endy;
      endx = e.changedTouches[0].pageX;
      endy = e.changedTouches[0].pageY;
      var direction = this.getDirection(startx, starty, endx, endy);
      var channelList = this.props.channelList.toJS();
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
              SwiperDom.style.transform = "translateY(1.1rem)";
              SwiperDom.style.transition = "0.3s ease 0s";
              this.refreshImg.src=loading;
              if(isTop()){
                var that = this;
                setTimeout(function(){
                  that.videoListArea.style.transform = "translateY(0)";
                  that.videoListArea.style.transition = "0.3s ease 0s";
                  that.refreshImg.src=topMore;
                  const params = {
                    channelid:that.props.channelid,
                    pageIndex:1,
                    getVideoType:'pullget',
                  }
                  that.props.getVideoList(params);
                },1500)
              }
              break;
          case 3:
              console.log("向左！");
              for(let i=0;i<channelList.length;i++){
                if((channelList[i].id == this.props.channelid)&&(this.state.isFoot)){
                  this.props.choseChannel(channelList[i+1].id);
                  this.setState({
                    isFoot: false,
                  });
                }
              }
              break;
          case 4:
              console.log("向右！");
              for(let i=0;i<channelList.length;i++){
                if((channelList[i].id == this.props.channelid)&&(this.state.isFoot)){
                  this.props.choseChannel(channelList[i-1].id);
                  this.setState({
                    isFoot: false,
                  });
                }
              }
              break;
          default:
      }
    })
  }
  componentDidUpdate(prevProps, prevState) {;
    if(prevProps.channelid!==this.props.channelid){
      const params = {
        channelid:prevProps.channelid,
        pageIndex:1,
        getVideoType:'channelidGet',
      }
      prevProps.getVideoList(params);
    }
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   debugger
  //   //isFoot为true则开启防止持续调用接口
  //   if(!prevState.isFoot) {
  //     console.log("nextProps.channelid",nextProps.channelid)
  //     nextProps.getVideoList(nextProps.channelid);
  //     return {
  //       isFoot:false,
  //     }
  //   }
  //   // 否则，对于state不进行任何操作
  //   return null;
  // }
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
    let dataHeight = this.onPullUp.clientHeight;
    let scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
    let screenHeight = document.documentElement.clientHeight;
    const h = 10;//自定义距离底部多少时concat数据
    if (dataHeight - scrollHeight - h < screenHeight && this.state.isFoot) {
        const pageIndex = this.props.pageIndex;
        const params = {
          channelid:this.props.channelid,
          pageIndex:pageIndex+1,
          getVideoType:'loaddingGet',
        }
        this.props.getVideoList(params);
    }
  }
}
const mapDispatch = (dispatch) =>({
  getVideoList(params){
    dispatch(actionCreators.getVideo(params))
  },
  getChannelList(){
    dispatch(actionCreators.getChannel())
  },
  loadState(params){
    dispatch(actionCreators.loadState(params))
  },
  choseChannel(id){
    dispatch(actionCreators.choseChannel(id));
  }
})
const mapState = (state) => ({
  videoList:state.getIn(['swiper','videoList']),
  channelid:state.getIn(['swiper','channelid']),
  action:state.getIn(['swiper','action']),
  pageIndex:state.getIn(['swiper','pageIndex']),
  channelList:state.getIn(['swiper','channelList']),
})
export default connect(mapState,mapDispatch)(SwiperVideo);