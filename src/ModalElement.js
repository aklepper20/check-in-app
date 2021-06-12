import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Newform from './Newform';

const ModalElement = (props) => {
  const [localValues, setLocalValues] = useState({...props.modalItem});

  //function pass to newform as handlechange, that function is going to call setlocal values

  const handleUpdateChange = (changes) => {
    setLocalValues({ ...localValues, ...changes })
  };

  // const saveChanges = () => {
  //   ...localValues
  // }

  return (
    <>

    <Modal show={props.showModal} onHide={props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Newform values={localValues} isEdit={true} isDelete={true}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={props.closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};



export default ModalElement;

//change onclick save changes that will take localstate that has been changed and publish it in the
