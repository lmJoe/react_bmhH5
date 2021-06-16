import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DtailPage} from './style';
import {actionCreators} from './store';
import Video from './components/video'
import logoImg from '../statics/header-logo.jpg';
import GuessLikeList from './components/guessLike'
import RelevantDation from './components/relevantDation'
import CommentModule from './components/commentModule'
import { OpenAppBottom,OpenAppBottomLogo,OpenappBottomOpen} from './style';
class Detail extends PureComponent {
  render() {
    // console.log(this.props.location.search);
    const {title,content} = this.props;
    return (
      <DtailPage>
        <Video />
        <GuessLikeList />
        <RelevantDation />
        <CommentModule />
        <OpenAppBottom>
          <OpenAppBottomLogo>
            <img src={logoImg} />
          </OpenAppBottomLogo>
          <OpenappBottomOpen>打开</OpenappBottomOpen>
        </OpenAppBottom>
      </DtailPage>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);//获取播放页视频详情
    this.props.getGuessVideo(this.props.match.params.id);//获取播放页猜你喜欢store数据
    this.props.getRecommend();//获取播放页相关推荐store数据
    this.props.getCommend();//获取详情页评论tore数据
  }
}
const mapDispatch = (dispatch) =>({
  getDetail(id){
    
  },
  getGuessVideo(videoid){
    dispatch(actionCreators.getGuessVideo(videoid))
  },
  getRecommend(){
    dispatch(actionCreators.getRecommend())
  },
  getCommend(){
    dispatch(actionCreators.getCommend())
  }
})
const mapState = (state) => ({
  
})
//此处withRouter使用意义为让detail有能力获取到withRouter中所有的参数和内容
export default connect(mapState,mapDispatch)(withRouter(Detail));