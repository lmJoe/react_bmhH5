import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getRandomArrayElements} from '../../statics/units/units.js';
import { 
  Recommend,
  RecommendTitle,
  RecommendList,
  RecommendCard,
  VideoRelateCardImg,
  Filterearlybird,
  VideoRelateCardBg,
  VideoRelateImgTitle,
  VideoRelatecardplay,
  VideorelatecardbBottom,
  VideoRelateCardApp,
  CardShadow,
  VideoRelateBottom,
  VideoRelateBottomUser,
  VideoRelateBottomBtns,
  Videolistmore
} from '../style';
class RelevantDation extends PureComponent {
  render() {
    // console.log(this.props.location.search);
    const { recommendList } = this.props;
    const recommendVideoNum = recommendList.slice(0,5)
    console.log("recommendVideoList",recommendVideoNum);
    return (
      <Recommend>
        <RecommendTitle>相关推荐</RecommendTitle>
        <RecommendList>
          {
            recommendVideoNum.map((item,index) => {
              return (
                <RecommendCard key={index}>
                  <VideoRelateCardImg>
                    <Filterearlybird>
                      <div className="relevantImg">
                        <img src={item.get('videoimgurl').replace('x', '640_360')} />
                      </div>
                    </Filterearlybird>
                    <VideoRelateCardBg>
                      <VideoRelateImgTitle>{decodeURIComponent(item.get('videoname'))}</VideoRelateImgTitle>
                      <VideoRelatecardplay></VideoRelatecardplay>
                      <VideorelatecardbBottom>
                        <span className="bottom-play">3.4万次播放</span>
                      </VideorelatecardbBottom>
                      <VideoRelateCardApp>
                        <span className="app">打开APP</span>
                      </VideoRelateCardApp>
                      <CardShadow></CardShadow>
                    </VideoRelateCardBg>
                  </VideoRelateCardImg>
                  <VideoRelateBottom>
                    <VideoRelateBottomUser>
                      <img src={item.get('apppic')} />
                      <span>{item.get('appname')}</span>
                    </VideoRelateBottomUser>
                    <VideoRelateBottomBtns>
                      <span className="like">
                        <i></i>372
                      </span>
                      <span className="comment">
                        <i></i>12
                      </span>
                      <span className="repley">
                        <i></i>
                      </span>
                      <span className="more">
                        <i></i>
                        <i></i>
                        <i></i>
                      </span>
                    </VideoRelateBottomBtns>
                  </VideoRelateBottom>
                </RecommendCard>
              )
            })
          }
        </RecommendList>
        <Videolistmore>
          <span className="text">点击查看更多</span>
          <span className="icon"></span>
        </Videolistmore>
      </Recommend>
    )
  }
  componentDidMount() {
  }
}
const mapDispatch = (dispatch) =>({

})
const mapState = (state) => ({
  recommendList:state.getIn(['pages','recommendVideoList']),
})
//此处withRouter使用意义为让detail有能力获取到withRouter中所有的参数和内容
export default connect(mapState,null)(withRouter(RelevantDation));