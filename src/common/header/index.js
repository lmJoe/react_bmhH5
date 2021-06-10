import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavWrapper,NavHeader,Logo,NavRight,Download,Searchdoor} from './style.js';
import { Link } from 'react-router-dom';
class Header extends PureComponent {
  render() {
    // console.log(this.props.location.search);
    return (
      <NavWrapper>
        <NavHeader>
          <Link to='/'>
            <Logo />
          </Link>
          <NavRight>
            <Download>下载APP</Download>
            <Searchdoor></Searchdoor>
          </NavRight>
        </NavHeader>
      </NavWrapper>
    )
  }
  componentDidMount() {
  }
  componentDidUpdate() {
  }
}
const mapDispatch = (dispatch) =>({
  
})
const mapState = (state) => ({
 
})
export default connect(mapState,mapDispatch)(Header);