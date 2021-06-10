import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavList,ChannelItem,NavSwiper} from '../style.js';
import {actionCreators} from '../store';
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
  componentDidUpdate() {
    this.swiperObj.update();
    this.swiperObj.slideTo(0, 1000, false);
  }
  instanceSwiper() {
      this.swiperObj = new Swiper('.NavSwiper', {
        slidesPerView: 5,
        loop: false,
        observer: true,//修改swiper自己或子元素时，自动初始化swiper    重要
        observeParents: true,//修改swiper的父元素时，自动初始化swiper  重要
        freeMode : true,
        freeModeMomentumBounceRatio : 1,
    })

  }
}
const mapDispatch = (dispatch) => ({
  choseChannel(id){
    dispatch(actionCreators.choseChannel(id));
  }
})
const mapState = (state) => ({
  channelList:state.getIn(['swiper','channelList']),
  channelid:state.getIn(['swiper','channelid'])
})
export default connect(mapState,mapDispatch)(Nav);