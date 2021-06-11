import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
  VideoPage,
  Gather
} from '../style';
import {actionCreators} from '../store';
class VideoInfo extends PureComponent {
  render() {
    // console.log(this.props.location.search);
    const {title} = this.props;
    return (
      <VideoPage>
        <Gather>
          <div className="gather-item">
            <div className="item-new-show">
              <span className="icon comment"></span>
              <span className="text">768</span>
            </div>
          </div>
          <div className="gather-item">
            <div className="item-new-show">
              <span className="icon collect"></span>
              <span className="text">收藏</span>
            </div>
          </div>
          <div className="gather-item">
            <div className="item-new-show">
              <span className="icon down"></span>
              <span className="text">下载</span>
            </div>
          </div>
        </Gather>
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
export default connect(mapState,mapDispatch)(withRouter(VideoInfo));