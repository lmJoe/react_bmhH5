import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
  BodyWrapper,
  TabsWrapper,
} from '../style';
import {actionCreators} from '../store';
class AuthorWapper extends PureComponent {
  render() {
    // console.log(this.props.location.search);
    const {authorTabList} = this.props;
    console.log("tabsList",authorTabList);
    return (
      <BodyWrapper>
        <TabsWrapper>
        {
          authorTabList.map((item,index) => {
            return (
              <li key={index}><span>{item.get('name')}</span></li>
            )
          })
        }
        </TabsWrapper>
      </BodyWrapper>
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
  authorTabList:state.getIn(['author','authorTabList']),
})
//此处withRouter使用意义为让detail有能力获取到withRouter中所有的参数和内容
export default connect(mapState,mapDispatch)(withRouter(AuthorWapper));