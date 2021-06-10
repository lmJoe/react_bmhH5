import styled from 'styled-components';
import logoPic from '../../statics/header-logo.jpg';
export const NavList = styled.div`
  width:100%;
  height: 1.1rem;
  border-bottom:1px solid #f0f0f0;
  position:relative;
`
export const ChannelItem = styled.div`
  height:1.1rem;
  line-height:1.1rem;
  text-align:center;
  font-size:0.42rem;
  color:#888;
  .tabsCurrent{
    color:#000;
    font-weight:600;
    &:before {
      content: "";
      position: absolute;
      bottom: .097rem;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      height: 0;
      border: .048rem solid #ff4141;
      background: #ff4141;
      width: 30%;
      border-radius: .048rem;
    }
  }
`
export const NavWrapper = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index:500;
  background:#fff;
`
export const NavLCont = styled.div`
  width:100%;
  height:100%;
`
export const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.4rem;
  height: 1.1rem;
`
export const Logo = styled.div`
  display:block;
  height: 1rem;
  width: 3.5rem;
  background:url(${logoPic}) no-repeat center center;
  background-size:100%;
`
export const NavRight = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`
export const Download = styled.div`
  margin-right: 0.2rem;
  display: flex;
  align-items: center;
  height: 0.6rem;
  padding: 0 0.2rem;
  background: #e42112;
  font-size: 0.35rem;
  color: #fff;
  border-radius: 0.5rem;
`
export const Searchdoor = styled.div`
  width: 0.65rem;
  height: 0.65rem;
  background: url(https://static01.baomihua.com/img/mobile/v5/search1.png) no-repeat 0 0;
  background-size: 100%;
`