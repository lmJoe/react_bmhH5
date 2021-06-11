import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import headImg from '../../statics/headImg.jpg';
import { 
  Writer,
  Avatar,
  AuthorContent,
  AuthorAttention,
  AuthorName,
  AuthorData,
} from '../style';
import {actionCreators} from '../store';
class WriterMsg extends PureComponent {
  render() {
    // console.log(this.props.location.search);
    const {title} = this.props;
    return (
      <Writer>
        <Avatar>
          <img src={headImg} />
          <span className="blue"></span>
        </Avatar>
        <AuthorContent>
          <AuthorName>海拔新观察</AuthorName>
          <AuthorData>
            <span>46万粉丝</span>
          </AuthorData>
        </AuthorContent>
        <AuthorAttention>+关注</AuthorAttention>
      </Writer>
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
export default connect(mapState,mapDispatch)(withRouter(WriterMsg));