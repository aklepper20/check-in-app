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
         <div className="dropdown">
          <label for="dropdown" className="label-dropdown">What's this post about?</label>
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
          <label for="message" className="message">Journal Entry</label>
          <textarea
            name="message"
            id="message"
            placeholder="Whatcha thinking about..."
            value={message}
            onChange={handleChange}>
          </textarea>
          <div className="both-winds">
            <label for="headwinds">Current Headwinds +</label>
            <textarea
              name="headwinds"
              id="headwinds"
              placeholder="What are you rockin' at?"
              value={headwinds}
              onChange={handleChange}>
            </textarea>
            <label for="tailwinds" className="label-tailwind">Current Tailwinds -</label>
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
          <button type="submit" className="button" onClick={handleClick}>Add Entry</button>
        </div>}
        {props.isEdit && <div>
          <button className="edit-btn" onClick={() => openModal(props.id)}>Edit</button>
        </div>}
        {props.isDelete && <div>
          <button className="delete-btn" onClick={() => {
            handleDelete(id)
            console.log('deleting')}}>Delete</button>
        </div>}
       </div>
    </div>
  )
};

export default Newform;
