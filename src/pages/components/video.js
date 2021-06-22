import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Player,LoadingSpinner } from 'video-react';
import "video-react/dist/video-react.css"; // import css
import Gather from './videoInfo'
import Writer from './writer'
import { 
  VideoDetail,
  VideoContainer,
  VideoPlayerShade,
  ShadeStyle,
  PlayBtn,
  VideoPlayBottom,
  BottomPlay,
  BottomBg,
  VideoPlayerPause,
  VideoPlayerPauseContainer,
  VideoPlayerPauseText,
  VideoPlayerPauseBtns,
  Continue,
  Open,
  OpenApptop,
  VideoPage,
  OpenAppopBanner,
  Videoinfo,
  VideoInfoText,
  VideoInfotitle,
  VideoInfoArrow,
} from '../style.js';
import '../style.css'
import {actionCreators} from '../store';
class Video extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      videoPlayState:true,
      playComplete:false,
      videoInfoShow:false,
    }
	}
  render() {
    // console.log(this.props.location.search);
    const {title,videoUrl,videoImg,userid,totaltime} = this.props;
    const source = 'http://' + videoUrl;
    return (
      <VideoPage>
        <VideoDetail>
          <VideoContainer className="video-container">
            <Player
              id="video"
              ref={player => {
                this.player = player;
              }}
              playsInline
              poster={videoImg.replace('x', '640_360')}
              // src={videoUrl}
              src={source}>
            <LoadingSpinner />
            </Player>
          </VideoContainer>
          {
            this.state.videoPlayState
            ? <VideoPlayerShade onClick ={() => this.videoPlayBtn()}>
              <ShadeStyle>
                <img src={videoImg.replace('x', '640_360')} />
                <PlayBtn></PlayBtn>
                <VideoPlayBottom>
                  <BottomPlay>14次播放</BottomPlay>
                </VideoPlayBottom>
                <BottomBg></BottomBg>
              </ShadeStyle >
            </VideoPlayerShade>
            : ''
          }
          {
            this.state.playComplete
            ? <VideoPlayerPause>
            <img src={videoImg.replace('x', '640_360')} />
            <VideoPlayerPauseContainer>
              <div>
                <VideoPlayerPauseText>流畅更高清，打开好看视频</VideoPlayerPauseText>
                <VideoPlayerPauseBtns>
                  <Continue onClick ={() => this.videoPlayBtn()}>重播</Continue>
                  <Open>打开APP</Open>
                </VideoPlayerPauseBtns>
              </div>
            </VideoPlayerPauseContainer>
          </VideoPlayerPause> : ''
          }
        </VideoDetail>
        <OpenApptop>
          <OpenAppopBanner>
            <img src="https://pic.rmb.bdstatic.com/baidu-rmb-video-cover-1/2021-2/1614223803372/cf9bb534bb8e.png" />
            打开好看APP，查看更多精彩视频
          </OpenAppopBanner>
        </OpenApptop>
        <Videoinfo>
          <VideoInfotitle>
            {title}
          </VideoInfotitle>
          <VideoInfoArrow  ref={(icon)=>{
              this.spinIcon = icon
            }} onClick ={() => this.showVideoInfo(this,this.spinIcon)}></VideoInfoArrow>
          {
            this.state.videoInfoShow
            ?<VideoInfoText>
              <p>发布时间：2021年5月18日</p>
              <p>本文仅代表作者观点，不代表百度立场</p>
              <p>本文系作者授权百家号发表，未经许可，不得转载</p>
            </VideoInfoText>
            :''
          }
        </Videoinfo>
        <Gather />
        <Writer />
      </VideoPage>
    )
  }
  componentDidMount() {
    this.props.getVideoDetail(this.props.match.params.id);
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    const { player } = this.player.getState();
    this.play = this.play.bind(this);//视频绑定播放事件
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }
  handleStateChange(state, prevState) {
    const { player } = this.player.getState();
    if(player.ended==true){
      this.setState({
        playComplete:true,
      })
      console.log("this.state.playComplete",this.state.playComplete)
    }
  }
  videoPlayBtn(){
    this.setState({
      videoPlayState:false,
      playComplete:false,
    }, () => {
      this.play();
    })
  }
  showVideoInfo(state, prevState){
    this.setState({
      videoInfoShow:this.state.videoInfoShow==false?true:false
    },()=>{
      //根据展开收起调整箭头方向并加样式
      //取出字符串中的数字
      let origianAngle = this.spinIcon.style.transform.replace(/[^0-9]/ig,'');
      if(origianAngle){
        origianAngle = parseInt(origianAngle,10)
      }else{
        origianAngle = 0;
      }
      this.spinIcon.style.transform='rotate('+(origianAngle+180)+'deg)'
    })
  }
  play(){
    this.player.play();
  }
  pause() {
    this.player.pause();
  }
  load() {
    this.player.load();
  }
  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState();
      this.player.seek(player.currentTime + seconds);
    };
  }
  seek(seconds) {
    return () => {
      this.player.seek(seconds);
    };
  }
  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.playbackRate = player.playbackRate + steps;
    };
  }
  changeVolume(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.volume = player.volume + steps;
    };
  }
  setMuted(muted) {
    return () => {
      this.player.muted = muted;
    };
  }
}
const mapDispatch = (dispatch) =>({
  getVideoDetail(videoid){
    dispatch(actionCreators.getVideoDetail(videoid))
  },
})
const mapState = (state) => ({
  title:decodeURI(state.getIn(['pages','title'])),
  videoUrl:state.getIn(['pages','videoUrl']),
  videoImg:state.getIn(['pages','videoImg']),
  userid:state.getIn(['pages','userid']),
  totaltime:state.getIn(['pages','totaltime']),
  host:state.getIn(['pages','host']),
  dir:state.getIn(['pages','dir']),
  stream_name:state.getIn(['pages','stream_name']),
  videofiletype:state.getIn(['pages','videofiletype']),
})
//此处withRouter使用意义为让detail有能力获取到withRouter中所有的参数和内容
export default connect(mapState,mapDispatch)(withRouter(Video));