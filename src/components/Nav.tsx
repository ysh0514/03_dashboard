import styled from 'styled-components';
import React, { useState } from 'react';
import Modal from './Modal';

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
  @media screen and (max-width: 768px) {
    width: 92px;
    height: 12px;
  }
`;

const MenuIconAndLogo = styled.div`
  display: flex;
  align-items: center;
`;

const RightLogo = styled.img`
  display: block;
  width: 209px;
  height: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default function Nav() {
  return (
    <NavBar>
      <MenuIconAndLogo>
        <Modal />
        <LeftLogo src="/images/LeftTopLogo.png" alt="좌측 로고" />
      </MenuIconAndLogo>
      <RightLogo src="/images/RightTopLogo.png" alt="우측 로고" />
    </NavBar>
  );
}
