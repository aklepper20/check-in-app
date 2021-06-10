import React from 'react';

const RenderList = (props) => {
  const id = Date.now();

  return (

    <div className="render-list">
      {
        props.posts.map((item) =>
      <div key={item.id} className="card-container">
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
        <button>Edit</button>
        <button>Delete</button>
        </div>
      </div>
        )
      }
    </div>
  )
}

export default RenderList;
