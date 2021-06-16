import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import share from '../../../statics/share.png';
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
            <img className="photo" src="" />
            <img className="fork" src="" />
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
            </span>
          </div>
          <div className="outer-line">
            <span className="authentication-text overflowEllipsis">
              <img className="certification-img" src="" />
            </span>
            <img className="detail-arrow-img-down" src="" />
            <img className="detail-arrow-img-up" src="" />
          </div>
          <div className="outer-line">
            <img className="profile-img" src="" />
            <span className="overflowEllipsis"></span>
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