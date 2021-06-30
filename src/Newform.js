import React, { useContext } from 'react';
import { PostContext } from './App';

const Newform = ({ values }) => {

  const { handleChange, handleClick } = useContext(PostContext);

  return (
    <div
      className="form-container display-center-align"
      value={values.id}>
      <div className="form">
        <div className="div-dropdown display-center-align flex-direction">
          <label htmlFor="dropdown" className="label-dropdown">What's this entry about?</label>
          <input
            className="dropdown display-column"
            type="text"
            name="dropdown"
            id="dropdown"
            placeholder="Thoughts/Ideas/Goals?"
            value={values.dropdown}
            maxLength={10}
            onChange={handleChange}
          />
        </div>
        <div className="textarea-flex display-wrap">
          <label htmlFor="message" className="message"></label>
          <textarea
            className="text-message"
            name="message"
            id="message"
            placeholder="My current feelings are..."
            maxLength={215}
            value={values.message}
            onChange={handleChange}>
          </textarea>
          <div className="head-tail-flex display-column">
            <label htmlFor="headwinds">Headwinds:</label>
            <textarea
              name="headwinds"
              id="headwinds"
              placeholder="What are you rockin' at?"
              maxLength={155}
              value={values.headwinds}
              onChange={handleChange}>
            </textarea>
            <label htmlFor="tailwinds" className="label-tailwind">Tailwinds:</label>
            <textarea
              name="tailwinds"
              id="tailwinds"
              placeholder="Game plan for those obstacles.."
              maxLength={155}
              value={values.tailwinds}
              onChange={handleChange}>
            </textarea>
          </div>
        </div>
        <div className="form-actions display-justify-center">
          <button
            className="add-btn"
            onClick={handleClick}>
              ADD
          </button>
        </div>
      </div>
    </div>
  )
};

export default Newform;
