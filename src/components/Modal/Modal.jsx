import propTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
console.log(modalRoot);
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  overlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.overlayClick}>
        <div className={s.modal}>
          <img src={this.props.showImg} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;
Modal.propTypes = {
  onClose: propTypes.func.isRequired,
  showImg: propTypes.string.isRequired,
};
