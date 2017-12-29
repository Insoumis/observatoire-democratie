import PropTypes from 'prop-types';
import React from 'react';
import RModal from 'react-modal';

import css from './Modal.scss';

RModal.setAppElement('#root');

const Modal = ({ children, className, handleClose, isOpen, title }) => (
  <RModal
    bodyOpenClassName={css.openedModal}
    className={`container ${css.container}`}
    closeTimeoutMS={200}
    contentLabel={title}
    isOpen={isOpen}
    onRequestClose={handleClose}
    overlayClassName={css.overlay}
  >
    <div className={`${css.module} ${className}`} onClick={(e) => e.stopPropagation()}>
      <button className={css.close} onClick={handleClose}>
        <span>×</span>
      </button>
      {children}
    </div>
  </RModal>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

Modal.defaultProps = { className: '' };

export default Modal;
