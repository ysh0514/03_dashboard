import styled from 'styled-components';

const NavBar = styled.div`
  padding: 0px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1565c0;
  height: 70px;
  @media screen and (max-width: 768px) {
    padding: 0px 20px;
    height: 44px;
  }
`;

const LeftLogo = styled.img`
  display: block;
  width: 153px;
  height: 20px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 92px;
    height: 12px;
  }
`;

const MenuIconAndLogo = styled.div`
  display: flex;
  align-items: center;
`;

const RightLogoBox = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const IconAndText = styled.div`
  display: flex;
  align-items: center;
`;

const CompanyIcon = styled.img`
  width: 16.7px;
  height: 15px;
`;

const CompanyText = styled.p`
  margin-left: 8px;
  padding-right: 32px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: white;
  border-right: 2px solid white;
  cursor: pointer;
`;

const LogOutText = styled.p`
  padding-left: 32px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: white;
  cursor: pointer;
`;

const NavStyle = {
  NavBar,
  LeftLogo,
  MenuIconAndLogo,
  RightLogoBox,
  IconAndText,
  CompanyIcon,
  CompanyText,
  LogOutText,
};

export default NavStyle;
