import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getRandomArrayElements} from '../../statics/units/units.js';
import { 
  GuessLike,
  GuessList,
  GuessTitle,
  GuessVideoCard,
  TopCardImg,
  TopVideotitle
} from '../style';
class GuessPage extends PureComponent {
  render() {
    // console.log(this.props.location.search);
    const { guessVideoList } = this.props;
    const guessVideoNum = getRandomArrayElements(guessVideoList,10);
    console.log("guessVideoNum",guessVideoNum);
    return (
      <GuessLike>
        <GuessTitle>猜你喜欢</GuessTitle>
        <GuessList>
          {
            guessVideoNum.map((item,index) => {
              return (
                <GuessVideoCard key={item.get('videoid')}>
                  <TopCardImg>
                    <div className="hk-filter-earlybird">
                      <div className="earlybirdImg">
                        <img src={item.get('videoimgurl')} />
                      </div>
                    </div>
                    <div className="top-video-card-img-bg">
                      <div className="top-video-card-img-title"></div>
                      <div className="top-video-card-img-app">
                        <span className="app">打开APP</span>
                      </div>
                      <div className="top-video-card-img-bottom">
                        <span className="bottom-play">1063次播放</span>
                      </div>
                      <div className="card-shadow"></div>
                    </div>
                  </TopCardImg>
                  <TopVideotitle>{decodeURIComponent(item.get('videoname'))}</TopVideotitle>
                </GuessVideoCard>
              )
            })
          }
        </GuessList>
      </GuessLike>
    )
  }
  componentDidMount() {
  }
}
const mapDispatch = (dispatch) =>({

})
const mapState = (state) => ({
  guessVideoList:state.getIn(['pages','guessVideoList']),
})
//此处withRouter使用意义为让detail有能力获取到withRouter中所有的参数和内容
export default connect(mapState,null)(withRouter(GuessPage));