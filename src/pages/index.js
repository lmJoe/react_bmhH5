import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DtailPage} from './style';
import {actionCreators} from './store';
import Video from './components/video'
import GuessLikeList from './components/guessLike'
class Detail extends PureComponent {
  render() {
    // console.log(this.props.location.search);
    const {title,content} = this.props;
    return (
      <DtailPage>
        <Video />
        <GuessLikeList />
      </DtailPage>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
    this.props.getGuessVideo(this.props.match.params.id);
  }
}
const mapDispatch = (dispatch) =>({
  getDetail(id){
    
  },
  getGuessVideo(videoid){
    dispatch(actionCreators.getGuessVideo(videoid))
  }
})
const mapState = (state) => ({
  
})
//此处withRouter使用意义为让detail有能力获取到withRouter中所有的参数和内容
export default connect(mapState,mapDispatch)(withRouter(Detail));