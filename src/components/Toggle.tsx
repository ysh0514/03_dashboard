import styled from 'styled-components';

interface Iprops {
  toggleClick: () => void;
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
`;

const CheckboxContainer = styled.div`
  position: relative;
  bottom: 5px;
`;

const CheckboxLabel = styled.label`
  position: absolute;
  top: 10px;
  left: 0;
  width: 34px;
  height: 14px;
  border-radius: 15px;
  background: #c2c2c2;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    right: 3px;
    bottom: 3px;
    position: relative;
    background: #f5f5f5;
    margin: 0px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    transition: 0.2s;
  }
`;

const Input = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 34px;
  height: 14px;
  &:checked + ${CheckboxLabel} {
    background: #bbdefb;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-left: 21px;
      transition: 0.2s;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
        0px 2px 2px rgba(0, 0, 0, 0.24);
      background-color: #2196f3;
    }
  }
`;

const Consultation = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #323d45;
`;

export function Toggle({ toggleClick }: Iprops) {
  return (
    <Container>
      <CheckboxContainer>
        <Input
          id="checkbox"
          type="checkbox"
          name="status"
          value="상담중"
          onClick={toggleClick}
        />
        <CheckboxLabel htmlFor="checkbox" />
      </CheckboxContainer>
      <Consultation>상담중인 요청만 보기</Consultation>
    </Container>
  );
}
