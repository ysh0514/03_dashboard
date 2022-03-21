import styled from 'styled-components';

const Container = styled.div`
  height: 100px;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 100%;
  line-height: 20px;
  color: #939fa5;
`;

export function NoResults() {
  return <Container>조건에 맞는 견적 요청이 없습니다.</Container>;
}
