import styled from 'styled-components';

const Container = styled.div`
  margin: 0 80px;
  margin: 0 auto;
  max-width: 1130px;
  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 900;
  line-height: 32px;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const SubTitle = styled.h2`
  font-size: 16px;
  line-height: 24px;
`;

const DropDownWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 32px 0 4px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InnerFlex = styled.div`
  display: flex;
`;

const RightInnerFlex = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const BigDropDown = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
  padding: 4px 12px;
  width: 98px;
  height: 32px;
  background: ${({ theme }) => theme.whiteColor};
  border: 1px solid ${({ theme }) => theme.grayColor};
  box-sizing: border-box;
  border-radius: 4px;
  &:hover {
    border: 1px solid ${({ theme }) => theme.pointColor};
  }
`;

const SmallDropDown = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 12px;
  width: 76px;
  height: 32px;
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
  margin-right: 12px;
`;

const Arrow = styled.img`
  width: 10px;
  height: 5px;
`;

const StatusText = styled.span`
  font-size: 14px;
  line-height: 20px;
  margin-left: 16px;
`;

const CheckBoxContainer = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.whiteColor};
  border: 1px solid ${({ theme }) => theme.grayColor};
  box-sizing: border-box;
  width: 130px;
  border-radius: 4px;
  padding: 17px 12px;
  z-index: 1000;
  @media screen and (max-width: 768px) {
    top: 190px;
  }
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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  /* place-items: center; */
  margin: 32px 0;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const DashboardStyle = {
  Container,
  Title,
  SubTitle,
  DropDownWrapper,
  InnerFlex,
  RightInnerFlex,
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
