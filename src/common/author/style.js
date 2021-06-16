import styled from 'styled-components';
export const AuthorPage = styled.div`
  margin-top:1.1rem;
  border-top: 1px solid #f3f3f3;
  border-bottom: .145rem solid #f3f3f3;
  width: 10rem;
  padding: .475rem .362rem .459rem;
  flex-direction: column;
  box-sizing: border-box;
  background-size: contain;
  transition: all .5s;
  transition-timing-function: ease-in-out;
`
export const Header = styled.div`

`
export const Profile = styled.div`
  width: 100%;
  display: flex;
  .photo{
    width: 2.077rem;
    height: 2.077rem;
    border-radius: 100%;
    vertical-align: middle;
  }
  .fork{
    position: absolute;
    top: 1.53rem;
    left: 1.49rem;
    width: .483rem;
    height: .483rem;
  }
`
export const Works = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: .242rem 0;
  font-family: PingFangSC-Regular;
  font-size: .338rem;
  color: #888;
  span{
    font-family: Helvetica-Bold;
    font-size: .386rem;
    font-weight: 700;
    line-height: .483rem;
    color: #000;
  }
`
export const LeftBox = styled.div`
  position: relative;
  margin-right: .29rem;
`
export const RightBox = styled.div`
  width: 100%;
`
export const Sharelead = styled.div`
  width: .435rem;
  height: .435rem;
  img{
    width: .435rem;
    height: .435rem;
    vertical-align: top;
  }
`
export const LeadBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .btn-click{
    width: 1.916rem;
    height: .821rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 1px solid #000;
    border-radius: .193rem;
    font-family: PingFangSC-Medium;
    text-align: center;
    font-size: .314rem;
    background: #fff;
  }
  .btn-click-strong{
    width: 4.791rem;
    color: #fff;
    background-color: #ff4141;
    border: none;
  }
`
export const Nick = styled.div`
  height: .58rem;
  margin: .346rem 0 .266rem;
  box-sizing: border-box;
  font-family: PingFangSC-Semibold;
  font-size: .58rem;
  line-height: .58rem;
`
export const Wishes = styled.div`
  position: relative;
  width: 100%;
  span{
    line-height: .628rem;
    display: inline-block;
    font-family: PingFangSC-Regular;
    font-size: .338rem;
  }
`
