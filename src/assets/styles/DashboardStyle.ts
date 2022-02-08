import styled from 'styled-components';

const Container = styled.div`
  padding: 40px 155px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
`;

const Logo = styled.img`
  width: 153px;
  height: 20px;
  margin: 25px 0 25px 40px;
`;

const SubMenu = styled.div`
  margin: 25px 40px 25px 0;
`;

const Icon = styled.img`
  width: 16.67px;
  height: 15px;
  margin-right: 8px;
`;

const MenuTitle = styled.span`
  font-size: 14px;
  line-height: 20px;
`;

const Bar = styled.span`
  width: 1px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.whiteColor};
  margin: 0 32px;
`;

const Title = styled.h1`
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
  margin-top: 40px;
`;

const SubTitle = styled.h2`
  font-size: 16px;
  line-height: 24px;
`;

const DropDownWrapper = styled.form`
  display: flex;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  justify-content: space-between;
  margin: 32px 0 4px;
`;

const InnerFlex = styled.div`
  display: flex;
`;

const BigDropDown = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
  padding: 9px 12px;
  background: ${({ theme }) => theme.whiteColor};
  border: 1px solid ${({ theme }) => theme.grayColor};
  box-sizing: border-box;
  border-radius: 4px;
  min-width: 98px;
  &:hover {
    border: 1px solid ${({ theme }) => theme.pointColor};
  }
`;

const SmallDropDown = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 12px;

  background: ${({ theme }) => theme.whiteColor};
  border: 1px solid ${({ theme }) => theme.grayColor};
  box-sizing: border-box;
  border-radius: 4px;
  &:hover {
    border: 1px solid ${({ theme }) => theme.pointColor};
  }
`;

const DropDownTitle = styled.span`
  top: calc(50% - 14px / 2);
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;
`;

const DropDownCount = styled.span``;

const Arrow = styled.img`
  width: 10px;
  height: 5px;
  padding-left: 12px;
  padding-right: 19px;
`;

const StatusText = styled.span`
  font-size: 14px;
  line-height: 20px;
  margin-left: 16px;
`;

const CheckBoxContainer = styled.div`
  background: ${({ theme }) => theme.whiteColor};
  border: 1px solid ${({ theme }) => theme.grayColor};
  box-sizing: border-box;
  width: 130px;
  border-radius: 4px;
  padding: 17px 12px;
  z-index: 100;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  background: ${({ theme }) => theme.pointColor};
  border-radius: 2px;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 16px;
  place-content: center;
  margin: 32px 0;
`;

const DashboardStyle = {
  Container,
  Header,
  Logo,
  SubMenu,
  Icon,
  MenuTitle,
  Bar,
  Title,
  SubTitle,
  DropDownWrapper,
  DropDownCount,
  InnerFlex,
  BigDropDown,
  SmallDropDown,
  DropDownTitle,
  Arrow,
  StatusText,
  CheckBoxContainer,
  CheckBoxWrapper,
  CheckBox,
  Grid,
};

export default DashboardStyle;
