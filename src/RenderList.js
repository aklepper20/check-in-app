import React, { useContext, useState } from 'react';
import { PostContext } from './App';
import { Button, Modal } from 'react-bootstrap';
const RenderList = (props) => {

  const [modalOpen, setModalOpen] = useState(false)
  const { handleDelete, updateValues, setUpdateValues, handleUpdate } = useContext(PostContext);
  const {
    posts
  } = props;

 function reversePostsArr({ posts }) {
   let reverseArr = [];
     for (let i = posts.length - 1; i >= 0; i--) {
      let index = posts[i]
      reverseArr.push(index)
     }
     return reverseArr
 };

 const handleUpdateChange = (e) => {
   const { name, value } = e.target
      setUpdateValues({
        ...updateValues,
        [name]: value
      })
 }

 const handleSaveChanges = (id) => {
  handleUpdate(id)
  setModalOpen(!modalOpen)
 }

 const handleModalOpen = (id) => {
    setUpdateValues(posts.filter(post => {
        return post.id === id
      })[0]
    );
    setModalOpen(!modalOpen)
 }

 const postsArr = reversePostsArr({ posts });

  return (
   <div className="render-list">
      {postsArr.map((post) => (
        <div key={post.id} className="render-container">
            <div className="render-card">
              <div className="render-actions">
                <span className="timestamp">
                  {post.createdAt}
                </span>
                  <div className="btn-flex">
                    <button
                      className="edit-btn"
                      onClick={() => handleModalOpen(post.id)}>
                        EDIT
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(post.id)}>
                        DELETE
                    </button>
                  </div>
              </div>
          <div>
            <h3 className="render-dropdown">{post.dropdown}</h3>
          </div>
          <div className="renderlist">
            <div className="render-message">
              <strong>ENTRY:</strong> <p>{post.message}</p>
            </div>
            <div className="render-headwinds">
              <strong>HEADWINDS:</strong> <p>{post.headwinds}</p>
            </div>
            <div className="render-tailwinds">
              <strong>TAILWINDS:</strong> <p>{post.tailwinds}</p>
            </div>
          </div>
          </div>
        </div>
        ))}
        <>
      <Modal show={modalOpen} onHide={() => setModalOpen(!modalOpen)}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-header">Edit Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="dropdown" className="modal-dropdown">Entry Title:</label>
          <input
          className="modal-dropdown"
          type="text"
          name="dropdown"
          value={updateValues.dropdown}
          onChange={handleUpdateChange}
          />
          <label htmlFor="message">Message:</label>
          <input
          type="text"
          name="message"
          value={updateValues.message}
          onChange={handleUpdateChange}
          />
          <label htmlFor="headwinds">Headwinds:</label>
          <input
          type="text"
          name="headwinds"
          value={updateValues.headwinds}
          onChange={handleUpdateChange}
          />
          <label htmlFor="dropdown">Tailwinds:</label>
          <input
          type="text"
          name="tailwinds"
          value={updateValues.tailwinds}
          onChange={handleUpdateChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalOpen(!modalOpen)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSaveChanges(updateValues.id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  );
};

export default RenderList;
