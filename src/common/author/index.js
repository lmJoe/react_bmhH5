import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthorHeader from './components/authorheader'
import AuthorWrapper from './components/authorwrapper'
import { 
  AuthorPage
} from './style';
import {actionCreators} from './store';
class Author extends PureComponent {
  render() {
    // console.log(this.props.location.search);
    const {title,content} = this.props;
    return (
      <AuthorPage>
        <AuthorHeader />
        <AuthorWrapper />
      </AuthorPage>
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
export default connect(mapState,mapDispatch)(withRouter(Author));