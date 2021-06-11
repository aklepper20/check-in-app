import React from 'react';

const ModalElement = (props) => {

  return (
    <>
      {props.showModel ? (

        <div className="modal-bg">
          <div className="modal">

            {/* <div className="modal-header">
              <h2>Edit Entry</h2>
              <span onClick={props.closeModal} className="close-modal-btn">x</span>
            </div>

            <div className="modal-content">
              <div className="modal-body">
                <h5>Date of Entry</h5>
                <div className="modal-dropdown">DROPDOWN</div>
                <div className="modal-message">MESSAGE</div>
                <div className="modal-headwinds">HEADWINDS</div>
                <div className="modal-tailwinds">TAILWINDS</div>
              </div>
              <div className="modal-footer">
                <button className="btn-save">Save</button>
                <button onClick={props.closeModal} className="btn-close">Close</button>
              </div>
            </div> */}

          </div>
        </div>

      ) : null}
    </>
  )
};

export default ModalElement;
