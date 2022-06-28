import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
console.log(modalRoot);
class Modal extends Component {
  render() {
    return createPortal(
      <div className="Overlay">
        <div className="Modal">
          <img
            src="https://pixabay.com/get/g9cd705d29210e84dcaa9b73ba4c1adce2cd9d19738ba608586f20ee7b696717c0ad5037de88d42b7f1c6335c0fe80d497b4d73be6d52416c3aa2d13a0a6b4c73_1280.jpg"
            alt=""
          />
        </div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;
