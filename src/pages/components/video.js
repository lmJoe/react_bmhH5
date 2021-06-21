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
  videoPlayBtn() {
    console.log('this is:', this);
  }
  render() {
    // console.log(this.props.location.search);
    const {title,videoUrl,videoImg,userid,totaltime,videoPlayBtn} = this.props;
    const source = 'http://' + videoUrl;
    return (
      <VideoPage>
        <VideoDetail>
          <VideoContainer className="video-container">
            {/* <video src={videoUrl}  
              ref={player => {
                this.player = player;
              }}
              className="video" id="video" playsInline="" x5-video-player-type="h5-page" controls="controls" autoPlay="autoPlay"/> */}
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
          {/* <VideoPlayerShade onClick ={() => this.videoPlayBtn()}>
            <ShadeStyle>
              <img src={videoImg.replace('x', '640_360')} />
              <PlayBtn></PlayBtn>
              <VideoPlayBottom>
                <BottomPlay>14次播放</BottomPlay>
              </VideoPlayBottom>
              <BottomBg></BottomBg>
            </ShadeStyle >
          </VideoPlayerShade> */}
          {/* <VideoPlayerPause>
            <img src={videoImg.replace('x', '640_360')} />
            <VideoPlayerPauseContainer>
              <div>
                <VideoPlayerPauseText>流畅更高清，打开好看视频</VideoPlayerPauseText>
                <VideoPlayerPauseBtns>
                  <Continue>重播</Continue>
                  <Open>打开APP</Open>
                </VideoPlayerPauseBtns>
              </div>
            </VideoPlayerPauseContainer>
          </VideoPlayerPause> */}
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
          <VideoInfoArrow></VideoInfoArrow>
          <VideoInfoText>
            <p>发布时间：2021年5月18日</p>
            <p>本文仅代表作者观点，不代表百度立场</p>
            <p>本文系作者授权百家号发表，未经许可，不得转载</p>
          </VideoInfoText>
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
    // console.log(player); //获取视频详细信息
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