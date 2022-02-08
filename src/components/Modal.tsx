import ModalStyle from 'assets/styles/ModalStyle';
import { useState, useEffect } from 'react';

const {
  MenuIcon,
  ModalBox,
  Overlay,
  ModalContent,
  TopLogoBox,
  TopLogoImg,
  ContentBox,
  LogoImg,
  FirstMenuBox,
  MenuText,
  LogOut,
} = ModalStyle;

export default function Modal() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modal]);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <MenuIcon
        onClick={toggleModal}
        src="/images/menu.png"
        alt="메뉴 아이콘"
      />
      {modal && (
        <ModalBox>
          <Overlay onClick={toggleModal} />
          <ModalContent>
            <TopLogoBox>
              <TopLogoImg
                src="/images/ModalLogoImg.png"
                alt="상단 로고 이미지"
              />
            </TopLogoBox>
            <ContentBox>
              <FirstMenuBox>
                <LogoImg src="/images/Vector.png" alt="이미지" />
                <MenuText>파트정밀가공</MenuText>
              </FirstMenuBox>
              <LogOut>로그아웃</LogOut>
            </ContentBox>
          </ModalContent>
        </ModalBox>
      )}
    </>
  );
}
