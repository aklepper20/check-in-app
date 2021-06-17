import React, { useContext } from 'react';
import { PostContext } from './App';

const RenderList = (props) => {

  const { handleDelete } = useContext(PostContext);
  const {
    posts
  } = props;

  return (
   <div className="render-list">
      {posts.map((post) => (
        <div key={post.id} className="render-container">
          <div className="render-card">
            <div className="render-dropdown">
              {post.dropdown}
            </div>
            <div className="render-message">
              {post.message}
            </div>
            <div className="render-headwinds">
              {post.headwinds}
            </div>
            <div className="render-tailwinds">
              {post.tailwinds}
            </div>
            <button
              className="delete-btn"
              onClick={() => {handleDelete(post.id)}}>
                DELETE
            </button>
          </div>
        </div>
        ))}
    </div>
  )
};

export default RenderList;
