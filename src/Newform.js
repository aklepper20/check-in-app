import React from 'react';

const Newform = (props) => {

  return (
    <div className="form-container">
      <form className="form">
        <div className="dropdown">
          <label for="dropdown" className="label-dropdown">What's this post about?</label>
          <select name="dropdown" id="dropdown" value={props.values.dropdown} onChange={props.handleChange}>
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
            value={props.values.message}
            onChange={props.handleChange}>
          </textarea>
          <div className="both-winds">
            <label for="headwinds">Current Headwinds +</label>
            <textarea
              name="headwinds"
              id="headwinds"
              placeholder="We are definitely on our way!"
              value={props.values.headwinds}
              onChange={props.handleChange}>
            </textarea>
            <label for="tailwinds" className="label-tailwind">Current Tailwinds -</label>
            <textarea
              name="tailwinds"
              id="tailwinds"
              placeholder="Let's get to tacklin' those obstacles!"
              value={props.values.tailwinds}
              onChange={props.handleChange}>
            </textarea>
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="button" onClick={props.handleClick}>Add Entry</button>
        </div>
      </form>
    </div>
  )
};

export default Newform;
