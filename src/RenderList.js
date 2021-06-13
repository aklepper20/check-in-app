import React from 'react';
import Newform from './Newform';
import { v4 as uuidv4 } from 'uuid';
import { propTypes } from 'react-bootstrap/esm/Image';

const RenderList = ({ posts, handleDelete }) => {

  return (
   <div className="render-list">
      {posts.map(post => {
        return (
          <Newform
            key={post.id}
            {...post}
            isEdit={true}
            isDelete={true}
          />
        )
      })}
  </div>
  )
}

export default RenderList;
