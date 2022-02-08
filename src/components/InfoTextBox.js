import React from 'react';
import styled from 'styled-components';

const InfoBox = styled.div`
  display: flex;
`;

const InfoLeftText = styled.div``;

const InfoRightText = styled.div``;

export default function InfoTextBox({ LeftText, RightText }) {
  return (
    <InfoBox>
      <InfoLeftText>{LeftText}</InfoLeftText>
      <InfoRightText>{RightText}</InfoRightText>
    </InfoBox>
  );
}
