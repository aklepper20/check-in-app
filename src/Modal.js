import React from 'react';

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? <div>Modal</div> : null}
    </>
  )
};

export default Modal;
