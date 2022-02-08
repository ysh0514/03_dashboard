import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 8px;
  width: 98px;
  height: 32px;
  border: 1px solid gray;
  border-radius: 4px;
`;

const ProcessingMethodText = styled.p`
  margin-left: 12px;
  font-size: 12px;
`;

const ToggleButton = styled.img`
  margin-right: 19px;
  width: 10px;
  height: 5px;
`;

export default function ProcessingMethodBox({ text }) {
  return (
    <Container>
      <ProcessingMethodText>{text}</ProcessingMethodText>
      <ToggleButton src="/images/toggleButton.png" alt="토글 버튼" />
    </Container>
  );
}
