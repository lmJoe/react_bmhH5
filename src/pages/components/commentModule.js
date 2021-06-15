import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import defaultImg from '../../statics/defaultImg.jpg';
import { 
  CommentPage,
  CommentTitle,
  CommentList,
  CommentTotalNum,
  CommentDefault,
  CommentAvatar,
  CommentInput,
  CommentItem,
  ItemAvatar,
  ItemInfo,
  InfoHead,
  InfoAuthor,
  Infodetail,
  Detailbar,
  Infotext,
  Infolike,
  Replylead,
  Likelead,
  Replylist,
  Reactslidedown,
  CommentOpenapp
} from '../style';
class CommentModule extends PureComponent {
  render() {
    // console.log(this.props.location.search);
    const { commendList } = this.props;
    console.log("commendList",commendList);
    return (
      <CommentPage>
        <CommentTitle>全部评论
          <CommentTotalNum>(282)</CommentTotalNum>
        </CommentTitle>
        <CommentDefault>
          <CommentAvatar></CommentAvatar>
          <CommentInput>说点什么吧...</CommentInput>
        </CommentDefault>
        <CommentList>
          {
            commendList.map((item,index) => {
              let backdefaultImg = {
                background:`url("${defaultImg}") center center / cover no-repeat`
              };
              let backImg = {
                background:`url("${item.get('headImg')}") center center / cover no-repeat`
              };
              return (
                <CommentItem key={index}>
                  <ItemAvatar style={item.get('headImg')?backImg:backdefaultImg}></ItemAvatar>
                  <ItemInfo>
                    <InfoHead>
                      <InfoAuthor>{item.get('name')}</InfoAuthor>
                    </InfoHead>
                    <Infodetail>
                      <Infotext>{item.get('commentdetail')}</Infotext>
                      <Detailbar>
                        <div className="c-time">{item.get('time')}</div>
                        <Infolike>
                          <Replylead>
                            <span className="reply-img"></span>
                            <span className="reply-txt">回复</span>
                          </Replylead>
                          <Likelead>
                            <span className="like-img"></span>
                            <span className="like-count">{item.get('likes')}</span>
                          </Likelead>
                        </Infolike>
                      </Detailbar>
                      <Replylist>
                        <div className="left-border"></div>
                        <div className="right-content">
                          <Reactslidedown>
                            {
                              item.get('softcomments').map((item1,index) => {
                                return(
                                  <div className="replay-item" key={index}>
                                    <span>{item1.get('name')}：</span>
                                    {item1.get('commentdetail')}
                                  </div>
                                )
                              })
                            }
                          </Reactslidedown>
                        </div>
                      </Replylist>
                    </Infodetail>
                  </ItemInfo>
                </CommentItem>
              )
            })
          }
        </CommentList>
        <CommentOpenapp>打开好看APP，查看全部282评论</CommentOpenapp>
      </CommentPage>
    )
  }
  componentDidMount() {
  }
}
const mapDispatch = (dispatch) =>({

})
const mapState = (state) => ({
  commendList:state.getIn(['pages','commendList']),
})
//此处withRouter使用意义为让detail有能力获取到withRouter中所有的参数和内容
export default connect(mapState,null)(withRouter(CommentModule));