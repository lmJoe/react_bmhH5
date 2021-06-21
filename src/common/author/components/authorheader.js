import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import share from '../../../statics/share.png';
import bottom from '../../../statics/bottom.png';
import top from '../../../statics/top.png';
import Intro from '../../../statics/Intro.png';
import vImg from '../../../statics/v.png';
import headImg from '../../../statics/headImg.jpg';
import { 
  Header,
  Profile,
  Works,
  LeftBox,
  RightBox,
  Sharelead,
  LeadBtns,
  Wishes,
  Nick
} from '../style';
import {actionCreators} from '../store';
class AuthorHeader extends PureComponent {
  render() {
    // console.log(this.props.location.search);
    const {title,content} = this.props;
    return (
      <Header>
        <Profile>
          <LeftBox>
            <img className="photo" src={headImg} />
            <img className="fork" src={vImg} />
          </LeftBox>
          <RightBox>
            <Works>
              <div><span>35万</span>粉丝</div>
              <div><span>28</span>关注</div>
              <div><span>217</span>视频</div>
              <Sharelead>
                <img src={share} />
              </Sharelead>
            </Works>
            <LeadBtns>
              <div className="btn-click">私信</div>
              <div className="btn-click btn-click-strong">
                +关注
              </div>
            </LeadBtns>
          </RightBox>
        </Profile>
        <Nick>包明说</Nick>
        <Wishes>
          <div className="hidden">
            <span className="authentication-text" id="authTxt">
              <img className="certification-img" src="" />
              好看视频认证：
            </span>
          </div>
          <div className="outer-line">
            <span className="authentication-text overflowEllipsis">
              <img className="certification-img" src={vImg} />
              好看视频认证：
              未来计划签约作者,优质体育领域创作者
            </span>
            <img className="detail-arrow-img-down" src={bottom} />
            <img className="detail-arrow-img-up" src={top} />
          </div>
          <div className="outer-line">
            <img className="profile-img" src={Intro} />
            <span className="overflowEllipsis">爱山爱水爱古风更爱太极</span>
          </div>
        </Wishes>
      </Header>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);//获取播放页视频详情
  }
}
const mapDispatch = (dispatch) =>({
  getDetail(videoid){
    // dispatch(actionCreators.getGuessVideo(videoid))
  },
})
const mapState = (state) => ({
  
})
//此处withRouter使用意义为让detail有能力获取到withRouter中所有的参数和内容
export default connect(mapState,mapDispatch)(withRouter(AuthorHeader));