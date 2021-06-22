import styled from 'styled-components';
import zhankai from '../statics/zhankai.png';
import zhankai1 from '../statics/zhankai1.png';
import sayicon1 from '../statics/sayicon1.png';
import sayicon2 from '../statics/sayicon2.png';
import sc from '../statics/sc.png';
import download from '../statics/download.png';
import playicon1 from '../statics/playicon1.png';
import blueV from '../statics/blueV.png';
import share from '../statics/share.png';
import zan from '../statics/zan.png';
import zan1 from '../statics/zan1.png';
import headImg1 from '../statics/headImg1.png';
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
export const Recommend = styled.div`
  padding: .201rem .362rem 0;
`
export const RecommendTitle = styled.div`
  font-family: PingFangSC-Medium;
  font-size: .362rem;
  height: .435rem;
  line-height: .435rem;
  color: #1a1a1a;
  margin-bottom: .338rem;
`
export const RecommendList = styled.div`
  
`
export const RecommendCard = styled.div`
  width: 100%;
  margin-bottom: .338rem;
`
export const VideoRelateCardImg = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: .193rem;
    width: 100%;
    height: 5.097rem;
`
export const Filterearlybird = styled.div`
    filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg);
    &:before{
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }
    .relevantImg{
      z-index: 1;
      position: relative;
      img{
        width: 100%;
        height: 5.097rem;
      }
    }
`
export const VideoRelateCardBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 96;
`
export const VideoRelateImgTitle = styled.div`
  position: absolute;
  top: .193rem;
  left: .242rem;
  overflow: hidden;
  max-width: 8.768rem;
  width: 100%;
  font-family: PingFangHK-Medium;
  font-size: .459rem;
  line-height: .564rem;
  display: -webkit-box;
  text-overflow: ellipsis;
  padding-right: .242rem;
  color: #fff;
  text-shadow: 0 0 0.048rem rgb(0 0 0 / 50%);
  z-index: 98;
`
export const VideoRelatecardplay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.159rem;
  height: 1.159rem;
  background: url(${playicon1}) no-repeat;
  background-size: cover;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%)
`
export const VideorelatecardbBottom = styled.div`
  position: absolute;
  right: .475rem;
  bottom: .242rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 98;
  align-items: center;
  .bottom-play{
    margin-right: .121rem;
    height: .266rem;
    font-family: PingFangSC-Regular;
    font-size: .242rem;
    line-height: .242rem;
    color: #fff;
  }
`
export const VideoRelateCardApp = styled.div`
  position: absolute;
  bottom: .242rem;
  left: .242rem;
  min-width: 1.127rem;
  height: .362rem;
  border-radius: .036rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 98;
  .app{
    font-family: PingFangSC-Regular;
    font-size: .242rem;
    line-height: .282rem;
    text-align: center;
    color: #fff;
    margin-top: .04rem;
  }
`
export const CardShadow = styled.div`
  position: absolute;
  right: 0;
  z-index: 97;
  width: 100%;
  border-radius: 0 0 .193rem .193rem;
  opacity: .7;
  height: 1.329rem;
  bottom: 0;
  background-image: linear-gradient(180deg,transparent,#000 70%);
`
export const VideoRelateBottom = styled.div`
  display: flex;
  height: 1.208rem;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`
export const Videolistmore = styled.div`
  margin: .37rem auto .242rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: .475rem;
  .text{
    font-family: PingFangSC-Medium;
    font-size: .338rem;
    color: #333;
    text-align: center;
  }
  .icon{
    margin-left: .089rem;
    width: .322rem;
    height: .322rem;
    background: url(${zhankai1});
    background-size: cover;
  }
`
export const VideoRelateBottomUser = styled.div`
  display: flex;
  align-items: center;
  img{
    width: .604rem;
    height: .604rem;
    border-radius: 50%;
  }
  span{
    overflow: hidden;
    max-width: 3.221rem;
    margin-left: .145rem;
    font-family: PingFangSC-Medium;
    font-size: .338rem;
    line-height: .403rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #333;
  }
`
export const VideoRelateBottomBtns = styled.div`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  span{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-right: .37rem;
    font-family: PingFangSC-Regular;
    font-size: .29rem;
    line-height: .435rem;
    color: #000;
  }
  i{
    width: .435rem;
    height: .435rem;
    margin-right: .032rem;
    background-size: cover;
  }
  .like{
    i{
      background-image: url(${zan});
    }
  }
  .comment{
    i{
      background-image: url(${sayicon1});
    }
  }
  .repley{
    i{
      background-image: url(${share});
    }
  }
  .more{
    display: flex;
    height: .435rem;
    margin-right: 0;
    padding: 0 .097rem;
    flex-flow: column;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    i{
      width: .072rem;
      height: .072rem;
      border-radius: 50%;
      background: #000;
    }
  }
`
export const CommentPage = styled.div`
  padding: .346rem .362rem .298rem;
`
export const CommentTitle = styled.div`
  font-family: PingFangSC-Medium;
  font-size: .362rem;
  height: .507rem;
  line-height: .507rem;
  color: #000;
  display: flex;
  align-items: center;
`
export const CommentDefault = styled.div`
  margin-top: .403rem;
  height: .87rem;
  display: flex;
`
export const CommentList = styled.div`
  margin-top: .499rem;
`
export const CommentInput = styled.div`
  margin-left: .193rem;
  width: 8.237rem;
  height: .87rem;
  padding: .201rem .242rem .193rem;
  background: rgba(25,25,26,.05);
  border-radius: .193rem;
  font-family: PingFangSC-Regular;
  font-size: .338rem;
  color: #888;
  line-height: .475rem;
`
export const CommentAvatar = styled.div`
  width: .845rem;
  height: .845rem;
  background: url(${headImg1});
  background-size: cover;
`
export const CommentTotalNum = styled.div`
  margin-left: .209rem;
  line-height: .435rem;
  font-size: .314rem;
`
export const CommentItem = styled.div`
  display: flex;
  margin-bottom: .725rem;
`
export const ItemAvatar = styled.div`
  height: .821rem;
  width: .821rem;
  border-radius: 100%;
`
export const ItemInfo = styled.div`
  flex: 1 1;
  margin-left: .209rem;
`
export const InfoHead = styled.div`
  display: flex;
  height: .507rem;
`
export const InfoAuthor = styled.div`
  font-family: PingFangSC-Regular;
  font-size: .362rem;
  color: #666;
  line-height: .507rem;
`
export const Infodetail = styled.div`
  margin-top: .097rem;
`
export const Detailbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: .531rem;
  margin: .29rem 0 .233rem;
`
export const Infotext = styled.div`
  font-family: PingFangSC-Regular;
  font-size: .411rem;
  color: #000;
  letter-spacing: 0;
  text-align: justify;
  line-height: .604rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
`
export const Infolike = styled.div`
  display: flex;
`
export const Replylead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: .242rem;
  .reply-img{
    height: .531rem;
    width: .531rem;
    background: url(${sayicon2}) no-repeat;
    background-size: cover;
  }
  .reply-txt{
    font-family: PingFangSC-Regular;
    font-size: .29rem;
    color: #666;
    letter-spacing: 0;
    line-height: .314rem;
  }
`
export const Likelead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: .242rem;
  .like-img{
    height: .531rem;
    width: .531rem;
    background: url(${zan1}) no-repeat;
    background-size: cover;
  }
  .like-count{
    font-family: PingFangSC-Regular;
    font-size: .29rem;
    color: #666;
    letter-spacing: 0;
    line-height: .314rem;
  }
`
export const Replylist = styled.div`
  display: flex;
  align-items: stretch;
  .left-border{
    width: .048rem;
    background-color: #e8e8e8;
    border-radius: .024rem;
  }
  .right-content{
    width: 8.043rem;
    margin-left: .145rem;
  }
`
export const Reactslidedown = styled.div`
  height: 63.6562px;
  transition-property: height;
  .replay-item{
    font-family: PingFangSC-Regular;
    font-size: .362rem;
    color: #666;
    line-height: .531rem;
    max-height: 1.594rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    margin-bottom: .185rem;
    span{
      font-family: PingFangSC-Regular;
      font-size: .362rem;
      color: #666;
      line-height: .531rem;
    }
  }
`
export const CommentOpenapp = styled.div`
  display: flex;
  width: 9.275rem;
  height: .966rem;
  border: .024rem solid #ff4141;
  font-family: PingFangSC-Medium;
  font-size: .338rem;
  line-height: .966rem;
  text-align: center;
  color: #ff4141;
  border-radius: .483rem;
  align-items: center;
  justify-content: center;
`
export const OpenAppBottom = styled.div`
  display: flex;
  width: 100%;
  height: 1.594rem;
  padding: 0 .362rem 0 .169rem;
  justify-content: space-between;
`
export const OpenAppBottomLogo = styled.div`
  width: 3.333rem;
  height: .99rem;
  margin-top: .266rem;
  line-height: 1.5rem;
  margin-left: 0.2rem;
  img{
    max-width: 1.986rem;
    min-width: 3.333rem;
  }
`
export const OpenappBottomOpen = styled.div`
  width: 1.981rem;
  height: .676rem;
  line-height: .676rem;
  text-align: center;
  margin-top: .411rem;
  font-family: PingFangSC-Medium;
  font-size: .338rem;
  color: #fff;
  border-radius: .193rem;
  background-image: linear-gradient(55deg,#ff4141,#ff6031)
`
