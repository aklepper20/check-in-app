import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Newform from './Newform';

const ModalElement = (props) => {

  const {
    showModal,
    closeModal,
    modalItem
  } = props

  const [localValues, setLocalValues] = useState(modalItem);
  console.log(modalItem)
  console.log('localValues', localValues)
  //function pass to newform as handlechange, that function is going to call setlocal values

  const handleUpdateChange = (changes) => {
    setLocalValues({ ...localValues, ...changes })
  };

  // const saveChanges = () => {
  //   ...localValues
  // }

  return (
    <>

    <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Newform
            values={localValues}
            dropdown={modalItem.dropdown}
            message={modalItem.message}
            headwinds={modalItem.headwinds}
            tailwinds={modalItem.tailwinds}
            isEdit={true}
            isDelete={true}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};

export default ModalElement;
