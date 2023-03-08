import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Atoms/Button';

interface IProps {
  visible: boolean;
  title: string;
  subTitle: string;
  onClickCancelBtn?: () => void;
  onClickConfirmBtn?: () => void;
  children?: React.ReactNode;
}

function Modal({
  visible,
  title,
  subTitle,
  onClickCancelBtn,
  onClickConfirmBtn,
  children,
}: IProps) {
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    if (visible && !localVisible) setLocalVisible(true);
    if (!visible && localVisible) {
      setTimeout(() => {
        setLocalVisible(false);
      }, 200);
    }
  }, [visible, localVisible]);

  if (!localVisible) return null;

  return (
    <Container>
      <div className="dim" onClick={onClickCancelBtn}></div>
      <div className={`modal-layer ${visible ? '' : 'hidden'}`}>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-sub-title">{subTitle}</p>
        {children && <div className="modal-content">{children}</div>}
        <div className="modal-btns">
          {onClickCancelBtn && (
            <Button
              width="80px"
              color="white"
              outline="lightGray"
              onClick={onClickCancelBtn}
            >
              취소
            </Button>
          )}
          {onClickConfirmBtn && (
            <Button width="80px" color="blue" onClick={onClickConfirmBtn}>
              확인
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
}

const slideUp = keyframes`
  from {
    transform: translate(-50%, -45%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: translate(-50%, -45%);
    opacity: 0;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;

  .dim {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .modal-layer {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 440px;
    z-index: 2000;
    padding: 30px;
    background-color: #fff;
    border-radius: 16px;
    transition: all 0.2s ease;

    animation-duration: 0.2s;
    animation-timing-function: ease-out;
    animation-name: ${slideUp};
    animation-fill-mode: forwards;

    &.hidden {
      animation-name: ${slideDown};
    }

    .modal-title {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .modal-sub-title {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.8;
      margin-bottom: 26px;
    }

    .modal-content {
      margin-bottom: 28px;
    }

    .modal-btns {
      display: flex;
      justify-content: end;

      button {
        margin-left: 12px;
      }
    }
  }
`;

export default Modal;
