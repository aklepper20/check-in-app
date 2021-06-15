import React, { useContext } from 'react';
import { PostContext } from './App';

const Newform = (props) => {

  const { handleChange, handleClick, handleDelete } = useContext(PostContext);
  const {
    id,
    dropdown,
    message,
    headwinds,
    tailwinds,
    createdAt
  } = props;

  return (
    <div
      className="form-container"
      value={id}>
      <div className="form">
        <div
          className="timestamp"
          value={createdAt}>
            {createdAt}
        </div>
        <h2>
          Self Check-in
        </h2>
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
        {!props.isDelete && <div className="form-actions">
          <button
            className="delete-btn"
            onClick={() => {handleClick()}}>
              Add
          </button>
        </div>}
          {props.isDelete && <div>
             <button
              className="add-btn"
              onClick={() => {handleDelete(id)}}>
                Delete
            </button>
          </div>}
       </div>
    </div>
  )

};

export default Newform;
