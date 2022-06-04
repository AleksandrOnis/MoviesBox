import styled from 'styled-components';
import { useEffect } from 'react';
import close from 'images/icons/close.svg';
import { createPortal } from 'react-dom';
import { deviceScreen } from 'utils/stylesVars';

export const Modal = ({ children, closeModal, offListener, w, h, mb = 40, jc, ai, fd }) => {
  useEffect(() => {
    if (offListener) return;
    const close = e => {
      e.stopPropagation();
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener('keydown', close);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', close);
      document.body.style.overflow = 'unset';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    closeModal();
    console.log('close');
  };

  const handleClick = e => {
    e.stopPropagation();
  };

  return createPortal(
    <Backdrop onClick={handleClose}>
      <ModalWrap onClick={handleClick} w={w} h={h} jc={jc} ai={ai} fd={fd}>
        {closeModal && (
          <CloseButton onClick={handleClose}>
            <CloseIcon src={close} />
          </CloseButton>
        )}
        {children}
      </ModalWrap>
    </Backdrop>,
    document.body,
  );
};

const Backdrop = styled.div`
  display: flex;
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

  display: flex;
  flex-direction: ${({ fd = 'column' }) => fd};
  align-items: ${({ ai = 'center' }) => ai};
  justify-content: ${({ jc = 'center' }) => jc};
  padding: 65px 20px;

  border-radius: 20px;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.body};
  overflow: hidden;

  ${deviceScreen.M} {
    padding: 65px 30px;
  }

  ${deviceScreen.M} {
    padding: 65px 40px;
  }
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
