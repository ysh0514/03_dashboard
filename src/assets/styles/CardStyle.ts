import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 356px;
  padding: 24px 16px;
  background: ${({ theme }) => theme.whiteColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    border: 2px solid ${({ theme }) => theme.pointColor};
    padding: 23px 15px;
  }
  @media screen and (max-width: 768px) {
    height: 344px;
  }
`;

const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CardTitle = styled.h1`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
`;

const Status = styled.span`
  background: ${({ theme }) => theme.whiteColor};
  border: 1px solid ${({ theme }) => theme.orangeColor};
  box-sizing: border-box;
  border-radius: 12px;
  font-size: 12px;
  line-height: 20px;
  padding: 2px 8px;
  color: ${({ theme }) => theme.orangeColor};
`;

const Client = styled.h2`
  font-size: 14px;
  line-height: 20px;
  margin-top: 4px;
`;

const Due = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #939fa5;
  margin-top: 24px;
`;

const Border = styled.div`
  background-color: ${({ theme }) => theme.borderColor};
  height: 1px;
  width: 100%;
  margin: 16px 0px;
`;

const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const InfoTitle = styled.span`
  font-weight: normal;
  width: 70px;
  margin-right: 32px;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  span {
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
  }
  div {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 32px;
`;

const BlueButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 12px;
  background: ${({ theme }) => theme.pointColor};
  color: ${({ theme }) => theme.whiteColor};
  border-radius: 4px;
  margin-right: 14px;
`;

const WhiteButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.pointColor};
  color: ${({ theme }) => theme.pointColor};
  border-radius: 4px;
`;

const CardStyle = {
  CardContainer,
  CardTitleWrapper,
  CardTitle,
  Status,
  Client,
  Due,
  Border,
  InfoList,
  InfoItem,
  ButtonWrapper,
  BlueButton,
  InfoTitle,
  WhiteButton,
};

export default CardStyle;
