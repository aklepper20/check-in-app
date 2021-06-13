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
      <form className="form">
        <div className="dropdown">
          <label for="dropdown" className="label-dropdown">What's this post about?</label>
          <select name="dropdown" id="dropdown" value={dropdown} onChange={handleChange}>
            <option value="thoughts">Thoughts</option>
            <option value="ideas">Ideas</option>
            <option value="goals">Goals</option>
          </select>
        </div>
        <div className="textarea-flex">
          <label for="message" className="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="My thoughts are..."
            value={message}
            onChange={handleChange}>
          </textarea>
          <div className="both-winds">
            <label for="headwinds">Current Headwinds +</label>
            <textarea
              name="headwinds"
              id="headwinds"
              placeholder="We are definitely on our way!"
              value={headwinds}
              onChange={handleChange}>
            </textarea>
            <label for="tailwinds" className="label-tailwind">Current Tailwinds -</label>
            <textarea
              name="tailwinds"
              id="tailwinds"
              placeholder="Let's get to tacklin' those obstacles!"
              value={tailwinds}
              onChange={handleChange}>
            </textarea>
          </div>
        </div>
        {!props.isEdit && <div className="form-actions">
          <button type="submit" className="button" onClick={handleClick}>Add Entry</button>
        </div>}
        {props.isEdit && <div>
          <button onClick={() => openModal(props.id)}>Edit</button>
        </div>}
        {props.isDelete && <div>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>}
      </form>
    </div>
  )
};

export default Newform;
