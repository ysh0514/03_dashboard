import styled from 'styled-components';

const Container = styled.div`
  margin: 80px 80px;
  margin: 0 auto;
  max-width: 1130px;
  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }
`;
const Title = styled.h1`
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
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
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
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

const BigDropDown = styled.div<{ Back: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
  padding: 9px 12px;
  background-color: ${({ Back }) => (Back ? '#1565C0' : 'white')};
  border: 1px solid ${({ theme }) => theme.grayColor};
  color: ${({ Back }) => (Back ? 'white' : '#323D45')};
  box-sizing: border-box;
  border-radius: 4px;
  min-width: 98px;
  cursor: pointer;
  &:hover {
    border: 1px solid ${({ theme }) => theme.pointColor};
  }
`;

const SmallDropDown = styled.div<{ Back: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 12px;
  color: ${({ Back }) => (Back ? 'white' : '#323D45')};
  background-color: ${({ Back }) => (Back ? '#1565C0' : 'white')};
  border: 1px solid ${({ theme }) => theme.grayColor};
  box-sizing: border-box;
  border-radius: 4px;
  &:hover {
    border: 1px solid ${({ theme }) => theme.pointColor};
  }
`;

const FilterReset = styled.div`
  font-size: 20px;
  margin-left: 16px;
  color: #2196f3;
  margin-top: 8px;
  cursor: pointer;
`;

const DropDownTitle = styled.span`
  top: calc(50% - 14px / 2);
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;
`;

const Img = styled.img`
  margin-right: 12px;
  height: 16px;
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
  cursor: pointer;
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
  cursor: pointer;
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
  DropDownCount,
  InnerFlex,
  Img,
  RightInnerFlex,
  BigDropDown,
  SmallDropDown,
  DropDownTitle,
  Arrow,
  StatusText,
  CheckBoxContainer,
  CheckBoxWrapper,
  CheckBox,
  FilterReset,
  Grid,
};

export default DashboardStyle;
