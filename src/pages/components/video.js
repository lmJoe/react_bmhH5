import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
} from '../style';
import {actionCreators} from '../store';
class Video extends PureComponent {
  render() {
    // console.log(this.props.location.search);
    const {title,videoUrl,videoImg,userid,totaltime} = this.props;
    return (
      <VideoPage>
        <VideoDetail>
          <VideoContainer className="video-container">
            <video src={'http:'+videoUrl} className="video" />
          </VideoContainer>
          <VideoPlayerShade>
            <ShadeStyle>
              <img src={videoImg.replace('x', '640_360')} />
              <PlayBtn></PlayBtn>
              <VideoPlayBottom>
                <BottomPlay>14次播放</BottomPlay>
              </VideoPlayBottom>
              <BottomBg></BottomBg>
            </ShadeStyle >
          </VideoPlayerShade>
          <VideoPlayerPause>
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
          </VideoPlayerPause>
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
  }
}
const mapDispatch = (dispatch) =>({
  getVideoDetail(videoid){
    dispatch(actionCreators.getVideoDetail(videoid))
  }
})
const mapState = (state) => ({
  title:decodeURI(state.getIn(['pages','title'])),
  videoUrl:state.getIn(['pages','videoUrl']),
  videoImg:state.getIn(['pages','videoImg']),
  userid:state.getIn(['pages','userid']),
  totaltime:state.getIn(['pages','totaltime']),
})
//此处withRouter使用意义为让detail有能力获取到withRouter中所有的参数和内容
export default connect(mapState,mapDispatch)(withRouter(Video));