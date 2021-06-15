import React from 'react';
const Newform = (props) => {

  const {
    handleChange,
    handleDelete,
    count,
    handleClick,
    id,
    dropdown,
    message,
    headwinds,
    tailwinds,
    createdAt
  } = props

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
          ENTRY
        </h2>
        <div className="count">
          <h3 value={count}>
            {count}
          </h3>
        </div>
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
          <button className="add-btn"
          onClick={() => {
            handleClick()}}
            >
            Add Entry
          </button>
        </div>}
          {props.isDelete && <div>
             <i className="fas fa-trash-alt" onClick={() => {
              handleDelete(id)}}> </i>
          </div>}
       </div>
    </div>
  )

};

export default Newform;
