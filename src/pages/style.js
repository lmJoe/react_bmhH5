import styled from 'styled-components';
import zhankai from '../statics/zhankai.png';
import sayicon1 from '../statics/sayicon1.png';
import sc from '../statics/sc.png';
import download from '../statics/download.png';
import playicon1 from '../statics/playicon1.png';
import blueV from '../statics/blueV.png';
export const VideoPage = styled.div`

`
export const VideoDetail = styled.div`
  position: relative;
  width: 100%;
  height: 5.628rem;
  background: #000;
  overflow: hidden;
`
export const DtailPage = styled.div`
  width:100%;
  padding-top:1.1rem;
`
export const VideoContainer = styled.div`
  width:100%;
  height: 100%;
  .video{
    width:100%;
    height:100%;
    object-fit: fill;
  }
`
export const VideoPlayerShade = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`
export const ShadeStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img{
    width: 100%;
    height: 100%;
  }
`
export const PlayBtn = styled.div`
  width: 1.159rem;
  height: 1.159rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 96;
  background: url(${playicon1});
  background-size: cover;
`
export const VideoPlayBottom = styled.div`
  position: absolute;
  right: .29rem;
  bottom: .29rem;
  display: flex;
  align-items: center;
  z-index: 98;
`
export const BottomPlay = styled.div`
  margin-right: .137rem;
  height: .362rem;
  font-family: PingFangSC-Regular;
  font-size: .362rem;
  font-weight: 400;
  line-height: .362rem;
  color: #fff;
`
export const BottomBg = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 97;
  height: 1.763rem;
  width: 100%;
  background-image: linear-gradient(
  180deg
  ,transparent,#000 70%);
  opacity: .7;
`
export const VideoPlayerPause = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #000;
  img {
    width: 100%;
    height: 100%;
  }
`
export const VideoPlayerPauseContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0,0,0,.7);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const VideoPlayerPauseText = styled.div`
  font-family: PingFangSC-Medium;
  font-size: .386rem;
  color: #fff;
  line-height: .386rem;
  text-align: center;
`
export const VideoPlayerPauseBtns = styled.div`
  width: 10rem;
  margin-top: .58rem;
  padding: 0 2.472rem;
  font-family: PingFangSC-Regular;
  font-size: .338rem;
  color: #fff;
  line-height: .821rem;
  display: flex;
  justify-content: space-between;
`
export const Continue = styled.div`
  min-width: 2.335rem;
  height: .821rem;
  border-radius: .193rem;
  text-align: center;
  padding: 0 .362rem;
  background: hsla(0,0%,100%,.3);
`
export const Open = styled.div`
  background: #ff4141;
  margin: 0 auto;
  min-width: 2.335rem;
  height: .821rem;
  border-radius: .193rem;
  text-align: center;
  padding: 0 .362rem;
`
export const OpenApptop = styled.div`
  padding: .338rem .362rem 0;
`
export const OpenAppopBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: .966rem;
  font-family: PingFangSC-Medium;
  font-size: .338rem;
  line-height: .966rem;
  text-align: center;
  color: #fff;
  border-radius: .483rem;
  background: #ff4141;
  img{
    display: inline-block;
    width: .483rem;
    height: .483rem;
    margin-right: .145rem;
  }
`
export const Videoinfo = styled.div`
  position: relative;
  overflow: hidden;
  margin: .338rem .362rem .201rem;
  -webkit-transition: all .2s;
  transition: all .2s;
`
export const VideoInfotitle = styled.div`
  width: 100%;
  min-height: .66rem;
  font-family: PingFangSC-Medium;
  font-size: .435rem;
  line-height: .66rem;
  color: #1a1a1a;
  padding-right: .483rem;
  white-space: normal;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 2;
`
export const VideoInfoArrow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: .483rem;
  height: .483rem;
  background: url(${zhankai}) no-repeat;
  background-size: cover;
`
export const VideoInfoText = styled.div`
  margin-top: .298rem;
  font-family: PingFangSC-Regular;
  font-size: .29rem;
  line-height: .403rem;
  color: #999;
  transition: display .5s ease 0;
  .hide{
    display: none;
  }
  .show{
    display: block;
  }
`
export const Gather = styled.div`
  margin-top: .161rem;
  display: flex;
  padding: 0 .266rem;
  .gather-item{
    flex: 1 1;
    .item-new-show{
      min-width: 2.963rem;
      height: .966rem;
      background: #f7f7f7;
      border-radius: .193rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 .097rem;
      span{
        display: inline-block;
      }
      .icon{
        width: .58rem;
        height: .58rem;
      }
      .text{
        height: .386rem;
        font-family: PingFangSC-Regular;
        font-size: .386rem;
        color: #000;
        letter-spacing: 0;
        text-align: center;
        line-height: .386rem;
        margin-top: .072rem;
        margin-left: .145rem;
      }
      .comment{
        background: url(${sayicon1}) no-repeat;
        background-size: cover;
      }
      .collect{
        background: url(${sc}) no-repeat;
        background-size: cover;
      }
      .down{
        background: url(${download}) no-repeat;
        background-size: cover;
      }
    }
  }
`
export const Writer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: .845rem;
  padding: 0 .362rem;
  margin-top: .443rem;
`
export const Avatar = styled.div`
  position: relative;
  width: .845rem;
  height: .845rem;
  border-radius: 50%;
  background: #999;
  img{
    display: block;
    width: .845rem;
    height: .845rem;
    border-radius: 50%;
  }
  .blue{
    background: url(${blueV});
    background-size: cover;
  }
  span{
    position: absolute;
    right: 0;
    bottom: 0;
    width: .29rem;
    height: .29rem;
  }
`
export const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: .193rem;
  padding-top: .072rem;
  
`
export const AuthorName = styled.div`
  height: .362rem;
  font-family: PingFangSC-Medium;
  font-size: .362rem;
  line-height: .362rem;
  color: #1a1a1a;
`
export const AuthorData = styled.div`
  display: flex;
  flex-direction: row;
  height: .29rem;
  line-height: .29rem;
  margin-top: .121rem;
  span{
    font-family: PingFangSC-Regular;
    font-size: .29rem;
    color: #999;
    height: .29rem;
    line-height: .29rem;
  }
`
export const AuthorAttention = styled.div`
  width: 1.449rem;
  height: .676rem;
  font-family: PingFangSC-Medium;
  font-size: .29rem;
  line-height: .692rem;
  text-align: center;
  color: #fff;
  border-radius: .121rem;
  background: #ff4141;
  margin: auto 0 auto auto;
`
export const GuessLike = styled.div`
  width: 100%;
  padding: 0 .362rem;
  margin-top: .362rem;
`
export const GuessList = styled.div`
  display: flex;
  margin-top: .338rem;
  flex-flow: row wrap;
  justify-content: space-between;
`
export const GuessTitle = styled.div`
  font-family: PingFangSC-Medium;
  font-size: .362rem;
  height: .435rem;
  line-height: .435rem;
  color: #1a1a1a;
`
export const GuessVideoCard = styled.div`
  flex: 1 1;
  max-width: 4.541rem;
  min-width: 4.026rem;
  margin-bottom: .29rem;
  overflow: hidden;
  margin-right: .242rem;
`
export const TopCardImg = styled.div`
  width: 100%;
  height: 2.56rem;
  position: relative;
  overflow: hidden;
  border-radius: .121rem;
  .hk-filter-earlybird{
    filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg);
    &:before{
      background: -webkit-radial-gradient(circle closest-corner,transparent 0,rgba(125,105,24,.2) 100%);
      content: "";
      mix-blend-mode: multiply;
    }
    .earlybirdImg{
      z-index: 1; 
      position: relative;
    }
  }
  img{
    width: 100%;
    height: 2.56rem;
  }
  .top-video-card-img-bg{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 96;
    .top-video-card-img-title{
      position: absolute;
      top: .145rem;
      left: .145rem;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
    .top-video-card-img-app{
      position: absolute;
      bottom: .145rem;
      left: .145rem;
      z-index: 98;
      min-width: 1.127rem;
      height: .362rem;
      border-radius: .036rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .app{
        font-family: PingFangSC-Regular;
        font-size: .242rem;
        line-height: .282rem;
        text-align: center;
        color: #fff;
        margin-top: .04rem;
      }
    }
    .top-video-card-img-bottom{
      position: absolute;
      right: .145rem;
      bottom: .145rem;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      align-items: center;
      z-index: 98;
      .bottom-play{
        margin-right: .113rem;
        height: .266rem;
        font-family: PingFangSC-Regular;
        font-size: .242rem;
        line-height: .242rem;
        color: #fff;
      }
    }
    .card-shadow{
      position: absolute;
      right: 0;
      z-index: 97;
      width: 100%;
      border-radius: 0 0 .193rem .193rem;
      opacity: .7;
      height: 1.329rem;
      bottom: 0;
      background-image: linear-gradient(180deg,transparent,#000 70%);
    }
  }
  .top-video-card-title{
    overflow: hidden;
    height: .87rem;
    margin-top: .145rem;
    font-family: PingFangSC-Regular;
    font-size: .338rem;
    line-height: .451rem;
    text-overflow: ellipsis;
    color: #1a1a1a;
  }
`
export const TopVideotitle = styled.div`
  overflow: hidden;
  height: .87rem;
  margin-top: .145rem;
  font-family: PingFangSC-Regular;
  font-size: .338rem;
  line-height: .451rem;
  text-overflow: ellipsis;
  color: #1a1a1a;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`