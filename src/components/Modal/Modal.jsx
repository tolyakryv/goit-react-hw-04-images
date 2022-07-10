import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, showImg }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const overlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={s.overlay} onClick={overlayClick}>
      <div className={s.modal}>
        <img src={showImg} alt="" />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
Modal.propTypes = {
  onClose: propTypes.func.isRequired,
  showImg: propTypes.string.isRequired,
};
