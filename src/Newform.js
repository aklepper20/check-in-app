import React, { useContext } from 'react';
import { PostContext } from './App';

const Newform = (props) => {

  const { handleChange, handleClick } = useContext(PostContext);
  const {
    id,
    dropdown,
    message,
    headwinds,
    tailwinds
  } = props;

  return (
    <div
      className="form-container"
      value={id}>
      <div className="form">
         <div className="div-dropdown">
          <label htmlFor="dropdown" className="label-dropdown">What's this post about?</label>
          <input
            className="dropdown"
            type="text"
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
            className="text-message"
            name="message"
            id="message"
            placeholder="My current feelings are..."
            maxLength="320"
            value={message}
            onChange={handleChange}>
          </textarea>
          <div className="head-tail-flex">
            <label htmlFor="headwinds">Headwinds:</label>
            <textarea
              name="headwinds"
              id="headwinds"
              placeholder="What are you rockin' at?"
              value={headwinds}
              onChange={handleChange}>
            </textarea>
            <label htmlFor="tailwinds" className="label-tailwind">Tailwinds:</label>
            <textarea
              name="tailwinds"
              id="tailwinds"
              placeholder="Game plan for those obstacles.."
              value={tailwinds}
              onChange={handleChange}>
            </textarea>
          </div>
        </div>
        <div className="form-actions">
          <button
            className="add-btn"
            onClick={() => {handleClick()}}>
              ADD
          </button>
        </div>
       </div>
    </div>
  )
};

export default Newform;
