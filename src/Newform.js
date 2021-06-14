import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Newform = (props) => {

  const {
    handleChange,
    handleClick,
    openModal,
    handleDelete,
    id,
    dropdown,
    message,
    headwinds,
    tailwinds
  } = props

  return (
    <div
      className="form-container"
      value={id}>
      <div className="form">
          {props.isEdit && <div>
            <button className="edit-btn" onClick={() => openModal(props.id)}>Edit</button>
          </div>}
          {props.isDelete && <div>
            <button className="delete-btn" onClick={() => {
              handleDelete(id)
              console.log('deleting')}}>Delete</button>
          </div>}
        <h2>ENTRY #</h2>
         <div className="div-dropdown">
          <label htmlFor="dropdown" className="label-dropdown">What's this post about?</label>
          <input
            type="text"
            required
            name="dropdown"
            id="dropdown"
            placeholder="Thoughts/Ideas/Goals?"
            value={dropdown}
            onChange={handleChange}
          />
        </div>
         <div className="textarea-flex">
          <label htmlFor="message" className="message"></label>
          <textarea
            name="message"
            id="message"
            placeholder="My current feelings are..."
            value={message}
            onChange={handleChange}>
          </textarea>
          <div className="head-tail-flex">
            <label htmlFor="headwinds">PROS: Headwinds</label>
            <textarea
              name="headwinds"
              id="headwinds"
              placeholder="What are you rockin' at?"
              value={headwinds}
              onChange={handleChange}>
            </textarea>
            <label htmlFor="tailwinds" className="label-tailwind">CONS: Tailwinds</label>
            <textarea
              name="tailwinds"
              id="tailwinds"
              placeholder="Game plan for those obstacles.."
              value={tailwinds}
              onChange={handleChange}>
            </textarea>
          </div>
        </div>
        {!props.isEdit && <div className="form-actions">
          <button type="submit" className="add-btn" onClick={handleClick}>Add Entry</button>
        </div>}

       </div>
    </div>
  )
};

export default Newform;
