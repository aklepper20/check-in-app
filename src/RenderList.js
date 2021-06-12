import React from 'react';
import Newform from './Newform';
import { v4 as uuidv4 } from 'uuid';

const RenderList = (props) => {

  return (
   <div className="render-list">

      {props.posts.map(post => {
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
