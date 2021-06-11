import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const RenderList = (props) => {
  const id = Date.now();

  return (
    <div className="render-list">
      {
        props.posts.map((item) =>
      <div className="card-container">
        <div className="card">
          <div>{item.dropdown}</div>
          <div className="render-message">
            <h4>{item.message}</h4>
          </div>
          <div className="render-headwinds">
            <span>+</span>
            <div>
              {item.headwinds}
            </div>
          </div>
          <div className="render-tailwinds">
            <span>-</span>
            <div>
              {item.tailwinds}
            </div>
          </div>
          <div>{id}</div>
        <button onClick={props.openModal}>
          Edit
        </button>
        <button
          onClick={() => props.handleDelete(props.id)}>
          Delete
        </button>
        </div>
      </div>
        )
      }
    </div>
  )
};

export default RenderList;

// {() => props.handlePostSelect(item.id)}
