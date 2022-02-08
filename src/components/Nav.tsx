import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  padding: 0px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1565c0;
  height: 70px;
`;

const LeftLogo = styled.img`
  display: block;
  width: 153px;
  height: 20px;
`;

const RightLogo = styled.img`
  display: block;
  width: 209px;
  height: 20px;
`;

export default function Nav() {
  return (
    <NavBar>
      <LeftLogo src="/images/LeftTopLogo.png" alt="좌측 로고" />
      <RightLogo src="/images/RightTopLogo.png" alt="우측 로고" />
    </NavBar>
  );
}
