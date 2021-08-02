import React,{ PureComponent,useEffect } from 'react';
import { connect } from 'react-redux';
import { NavList,ChannelItem,NavSwiper} from '../style.js';
import {actionCreators} from '../store';
import {getCaption} from '../../../utils/units.js';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
class Nav extends PureComponent {
  render() {
    const {channelList,channelid,choseChannel} = this.props;
    return (
      <NavList className="swiper-container NavSwiper">
        <NavSwiper className="swiper-wrapper">
        {
        channelList.map((item,index) => {
            return (
              <ChannelItem key={item.get('id')} className="swiper-slide" onClick ={() => choseChannel(item.get('id'))}>
                <span className={channelid==item.get('id')?'tabsCurrent':''}>{item.get('channel')}</span>
              </ChannelItem>
            )
          })
        }
        </NavSwiper>
      </NavList>
    )
  }
  componentDidMount() {
    this.instanceSwiper();
 
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.direction=='next'){
      this.swiperObj.slideNext();
    }else if(nextProps.direction=='prev'){
      this.swiperObj.slidePrev();
    }
    // this.props.history.push('/welcome#'+nextProps.channelid);
  }
  instanceSwiper() {
    this.swiperObj = new Swiper('.NavSwiper', {
      slidesPerView: 5,
      loop: false,
      observer: true,//修改swiper自己或子元素时，自动初始化swiper    重要
      observeParents: true,//修改swiper的父元素时，自动初始化swiper  重要
      freeMode : true,
      freeModeMomentumBounceRatio : 1,
      hashNavigation: true,
      
    })
  }
}
const mapDispatch = (dispatch) => ({

  choseChannel(id){
    let params = {
      channelid:id,
      direction:'noSliding',
    }
    dispatch(actionCreators.choseChannel(params));
  }
})
const mapState = (state) => ({
  channelList:state.getIn(['swiper','channelList']),
  channelid:state.getIn(['swiper','channelid']),
  direction:state.getIn(['swiper','direction'])
})
export default connect(mapState,mapDispatch)(Nav);