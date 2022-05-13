import styled from 'styled-components';
import { useEffect } from 'react';
import close from 'images/icons/close.svg';

const Backdrop = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(140, 140, 140, 0.6);
`;

const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 40px 75px;
  display: flex;
  flex-direction: ${({ fd = 'column' }) => fd};
  align-items: ${({ ai = 'center' }) => ai};
  justify-content: ${({ jc = 'center' }) => jc};
  width: ${({ w = 'auto' }) => w};
  height: ${({ h = 'auto' }) => h};

  border-radius: 20px;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.body};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const CloseIcon = styled.img``;

export const Modal = ({ children, isOpen, setIsOpen, w, h, mb = 40, jc, ai, fd }) => {
  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Backdrop onClick={handleClose} isOpen={isOpen}>
      <ModalWrap onClick={e => e.stopPropagation()} w={w} h={h} jc={jc} ai={ai} fd={fd}>
        <CloseButton onClick={handleClose}>
          <CloseIcon src={close} />
        </CloseButton>
        {children}
      </ModalWrap>
    </Backdrop>
  );
};