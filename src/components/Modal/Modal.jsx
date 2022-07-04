import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, showImg }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
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

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }
//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   overlayClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };
//   render() {
//     return createPortal(
//       <div className={s.overlay} onClick={this.overlayClick}>
//         <div className={s.modal}>
//           <img src={this.props.showImg} alt="" />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }
export default Modal;
Modal.propTypes = {
  onClose: propTypes.func.isRequired,
  showImg: propTypes.string.isRequired,
};
